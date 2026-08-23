/* ==========================================================================
   RAM DWARAMPUDI — MODERN DEVELOPER PORTFOLIO
   Core Application Logic, Canvas FX, Audio Engine & Navigation
   ========================================================================== */

(function () {
  'use strict';

  // --- Sound Effects System (Web Audio API) ---
  class SoundEngine {
    constructor() {
      this.enabled = localStorage.getItem('ram_portfolio_sound') === 'true';
      this.ctx = null;
      this.initButton();
    }

    initCtx() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTone(freq = 440, type = 'sine', duration = 0.08, vol = 0.05) {
      if (!this.enabled) return;
      try {
        this.initCtx();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        // Audio error silently ignored
      }
    }

    playClick() { this.playTone(800, 'sine', 0.05, 0.04); }
    playTerminalKey() { this.playTone(550, 'triangle', 0.04, 0.03); }
    playSuccess() {
      this.playTone(523.25, 'sine', 0.1, 0.06);
      setTimeout(() => this.playTone(659.25, 'sine', 0.12, 0.06), 80);
      setTimeout(() => this.playTone(783.99, 'sine', 0.2, 0.06), 160);
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem('ram_portfolio_sound', this.enabled);
      this.updateBtnUI();
      if (this.enabled) this.playSuccess();
    }

    initButton() {
      const btn = document.getElementById('sound-toggle-btn');
      if (btn) {
        btn.addEventListener('click', () => this.toggle());
        this.updateBtnUI();
      }
    }

    updateBtnUI() {
      const btn = document.getElementById('sound-toggle-btn');
      if (!btn) return;
      btn.innerHTML = this.enabled
        ? '<i class="fas fa-volume-up"></i>'
        : '<i class="fas fa-volume-mute"></i>';
      btn.setAttribute('title', this.enabled ? 'Mute Sound FX' : 'Enable Sound FX');
    }
  }

  window.soundEngine = new SoundEngine();

  // --- Ambient Canvas Particles ---
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const count = Math.min(Math.floor(window.innerWidth / 20), 65);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    let mouseX = -1000, mouseY = -1000;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function loop() {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse hover nudge
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 100) {
          const force = (100 - mdist) / 100;
          p.x += (mdx / mdist) * force * 1.5;
          p.y += (mdy / mdist) * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(loop);
    }
    loop();
  }

  // --- Typewriter Effect ---
  function initTypewriter() {
    const el = document.getElementById('hero-typewriter');
    if (!el) return;
    const roles = [
      'Machine Learning Engineer',
      'Data Analytics & Insights',
      'Data Engineering & Pipelines',
      'Predictive AI & Modeling',
      'CS & Business Systems @ VIT'
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        el.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        delay = 45;
      } else {
        el.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        delay = 90;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        delay = 2000; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delay = 400;
      }

      setTimeout(type, delay);
    }
    type();
  }

  // --- Spotlight Mouse Tracking Engine ---
  function initSpotlight() {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // --- Scroll Spy & Reveal Observer ---
  function initScrollSpyAndReveal() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function onScroll() {
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // Intersection Observer for .reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
  }

  // --- Mobile Drawer Menu ---
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const drawer = document.getElementById('mobile-drawer');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      window.soundEngine.playClick();
    });

    const close = () => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
      window.soundEngine.playClick();
    };

    if (closeBtn) closeBtn.addEventListener('click', close);
    links.forEach((l) => l.addEventListener('click', close));
  }

  // --- Tech Arsenal Tab Switching ---
  function initSkillsTabs() {
    const tabBtns = document.querySelectorAll('.skills-tab-bar .tab-btn');
    const skillCards = document.querySelectorAll('.skills-grid .skill-card');

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        window.soundEngine.playClick();
        tabBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        skillCards.forEach((card) => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    initAmbientCanvas();
    initTypewriter();
    initSpotlight();
    initScrollSpyAndReveal();
    initMobileMenu();
    initSkillsTabs();
  });
})();
