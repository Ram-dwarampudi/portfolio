/* ==========================================================================
   RAM DWARAMPUDI — MODERN DEVELOPER PORTFOLIO
   Contact Form Validation, Copy Triggers, Confetti & Toast System
   ========================================================================== */

(function () {
  'use strict';

  // --- Toast System ---
  function showToast(message, icon = 'fas fa-check-circle') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${icon} toast-icon-success"></i> <span>${message}</span>`;
    container.appendChild(toast);

    if (window.soundEngine) window.soundEngine.playSuccess();

    setTimeout(() => {
      toast.style.animation = 'toast-out 0.3s forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --- 1-Click Clipboard Copy ---
  function initCopyTriggers() {
    const copyBtns = document.querySelectorAll('.copy-trigger');
    copyBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;

        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`, 'fas fa-clipboard-check');
          const originalText = btn.innerHTML;
          btn.innerHTML = '<i class="fas fa-check"></i> Copied';
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2000);
        }).catch(() => {
          showToast('Failed to copy to clipboard', 'fas fa-exclamation-triangle');
        });
      });
    });
  }

  // --- Confetti FX System (Canvas Based) ---
  function triggerConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#06b6d4', '#6366f1', '#a855f7', '#10b981', '#f59e0b', '#f43f5e'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.7) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    let frame = 0;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4; // gravity
        p.rotation += p.rotSpeed;
        p.opacity -= 0.012;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 100) {
        requestAnimationFrame(render);
      } else {
        canvas.remove();
      }
    }
    render();
  }

  // --- Contact Form Logic ---
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();
      const submitBtn = form.querySelector('button[type="submit"]');

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.', 'fas fa-exclamation-circle');
        return;
      }

      // Animated button loading state
      const originalContent = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Transmitted!';
        showToast(`Thank you, ${name}! Your message has been sent to Ram.`, 'fas fa-paper-plane');
        triggerConfetti();
        form.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalContent;
        }, 3000);
      }, 1200);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCopyTriggers();
    initContactForm();
  });
})();
