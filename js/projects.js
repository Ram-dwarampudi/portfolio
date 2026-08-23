/* ==========================================================================
   RAM DWARAMPUDI — MODERN DEVELOPER PORTFOLIO
   Projects Showcase, 3D Tilt Physics & Case Study Modal Engine
   ========================================================================== */

(function () {
  'use strict';

  const PROJECTS_DATA = {
    'agentic-ai': {
      title: 'Agentic AI Assistant & Workflow Canvas',
      category: 'AI & Agentic Systems',
      badge: 'LangChain & Gemini API',
      image: 'assets/images/project-agentic-ai.jpg',
      github: 'https://github.com/Ram-dwarampudi/agentic-ai-react-ts',
      live: 'https://github.com/Ram-dwarampudi/agentic-ai-react-ts',
      problem: 'Traditional chatbots only perform single-turn text completions without autonomous tool invocation, database querying, or multi-step reasoning capabilities.',
      solution: 'Constructed a full-featured autonomous agent platform with React and TypeScript leveraging LangChain and Google Gemini, enabling autonomous task decomposition, SQL/search tool selection, and real-time execution graphs.',
      stack: ['React', 'TypeScript', 'LangChain', 'Google Gemini API', 'Tailwind/CSS Glassmorphism', 'Node.js'],
      highlights: [
        'Multi-agent decision orchestration with LangChain reasoning chains',
        'Real-time token streaming and intermediate agent thought inspection',
        'Extensible tool registry for database queries and web retrieval'
      ]
    },
    'disease-detection': {
      title: 'Disease Detection Based on Symptoms',
      category: 'Machine Learning & Healthcare',
      badge: 'Python & ML Classification',
      image: 'assets/images/project-disease-detect.jpg',
      github: 'https://github.com/Ram-dwarampudi/disease-detection-based-on-symptoms',
      live: 'https://github.com/Ram-dwarampudi/disease-detection-based-on-symptoms',
      problem: 'Patients often experience ambiguous symptoms and lack immediate access to triage assessments, resulting in delayed care and emergency hospital overcrowding.',
      solution: 'Engineered a supervised machine learning prediction engine trained on extensive symptom-disease matrices, computing high-confidence probabilistic diagnoses and triage guidance.',
      stack: ['Python', 'Scikit-Learn', 'Pandas & NumPy', 'Machine Learning Classification', 'Data Preprocessing'],
      highlights: [
        'Multi-class disease classification with high diagnostic accuracy',
        'Robust handling of missing and sparse symptom indicators',
        'Interactive symptom selector interface providing instant health probabilities'
      ]
    },
    'gemini-chatbot': {
      title: 'Conversational AI Chatbot',
      category: 'AI & Agentic Systems',
      badge: 'Python & Gemini API',
      image: 'assets/images/project-ai-bot.jpg',
      github: 'https://github.com/Ram-dwarampudi/chatbot-demo1',
      live: 'https://github.com/Ram-dwarampudi/chatbot-demo1',
      problem: 'Building an intuitive, lightweight conversational assistant capable of natural multi-turn context retention, streaming responses, and markdown parsing.',
      solution: 'Developed an intelligent chat client interfacing with Google Gemini API with token streaming, system prompt tuning for technical explanations, and responsive dark glass UI.',
      stack: ['Python', 'Google Gemini API', 'JavaScript (ES6+)', 'Async/Await Streaming', 'Modern Glassmorphism'],
      highlights: [
        'Multi-turn conversational context memory retention',
        'Real-time markdown syntax highlighting & code snippet copy',
        'Sub-second inference response latency'
      ]
    },
    'student-grades': {
      title: 'Student Grade & Records Engine',
      category: 'Systems & Java/C',
      badge: 'C Language & Data Structures',
      image: 'assets/images/project-grade-engine.jpg',
      github: 'https://github.com/Ram-dwarampudi/studentgrademanagement',
      live: 'https://github.com/Ram-dwarampudi/studentgrademanagement',
      problem: 'Institutions need dependable, lightweight, offline-capable database engines to track student records without the resource footprint of full-blown SQL servers.',
      solution: 'Built an optimized database system in C featuring dynamic memory struct allocation, atomic binary file serialization, indexing, and statistical performance analytics.',
      stack: ['C Programming', 'File I/O Serialization', 'Linked Lists & Structs', 'Algorithm Optimization'],
      highlights: [
        'Sub-millisecond record search using optimized binary lookup algorithms',
        'Corrupted record prevention with atomic buffer writes',
        'Comprehensive statistical reporting for student cohort rankings'
      ]
    },
    'elderease': {
      title: 'ElderEase — Healthcare & Support Platform',
      category: 'Machine Learning & Healthcare',
      badge: 'Accessible Web Platform',
      image: 'assets/images/project-elderease.jpg',
      github: 'https://github.com/Ram-dwarampudi/ElderEase',
      live: 'https://github.com/Ram-dwarampudi/ElderEase',
      problem: 'Elderly individuals face digital barriers navigating complex modern interfaces when trying to access emergency assistance, medication schedules, and telehealth.',
      solution: 'Designed an accessibility-first healthcare web application featuring high-contrast touch targets, one-tap emergency SOS dispatches, medication alarms, and simplified health telemetry.',
      stack: ['HTML5/CSS3', 'JavaScript', 'Web Speech API', 'Responsive Accessible UX', 'Local Storage Persistence'],
      highlights: [
        'One-touch SOS alert dispatch with audio visual feedback',
        'Medication reminder tracker with persistent local state',
        'High-contrast, large-target design tested for senior accessibility'
      ]
    },
    'smart-fire-iot': {
      title: 'Smart Fire Detection & Prevention Net',
      category: 'IoT & Hardware',
      badge: 'Arduino & Blynk IoT',
      image: 'assets/images/project-iot-fire.jpg',
      github: 'https://github.com/Ram-dwarampudi',
      live: 'https://github.com/Ram-dwarampudi',
      problem: 'Traditional fire alarms only emit localized audio sirens, leading to delayed emergency response when facilities are unmanned or noise-isolated.',
      solution: 'Engineered an IoT-enabled safety network combining Arduino microcontrollers, flame/smoke sensor matrices, and the Blynk IoT cloud platform to trigger instant real-time push notifications.',
      stack: ['Arduino C/C++', 'Blynk IoT Platform', 'Flame & Smoke Sensors', 'ESP8266 Wi-Fi Module', 'Hardware Interrupts'],
      highlights: [
        'Instantaneous cloud telemetry & smartphone alarm dispatch',
        'Multi-zone sensory triangulation with automatic emergency buzzer fallback',
        'Low-power standby state with sub-50ms hazard response'
      ]
    },
    'jpmc-java': {
      title: 'JPMorgan Chase Software Engineering Hub',
      category: 'Systems & Java/C',
      badge: 'Java & Enterprise SWE',
      image: 'assets/images/project-jpmc-java.jpg',
      github: 'https://github.com/Ram-dwarampudi/forage-midas',
      live: 'https://github.com/Ram-dwarampudi/forage-midas',
      problem: 'Processing high-frequency financial market transactions and real-time order book price feeds efficiently in enterprise financial environments.',
      solution: 'Participated in the JPMC Advanced Software Engineering program, developing Java modules for processing real-time stock price streams, order matching calculations, and data visualization pipelines.',
      stack: ['Java', 'Object-Oriented Programming', 'Data Structures', 'Financial Telemetry', 'Git'],
      highlights: [
        'Engineered real-time financial market data stream parser in Java',
        'Implemented algorithmic ratio calculation and trader buy/sell threshold triggers',
        'Followed enterprise code quality standards and unit test suites'
      ]
    },
    'emotion-detector': {
      title: 'Emotion & Sentiment Classifier',
      category: 'Machine Learning & Healthcare',
      badge: 'Python & Computer Vision',
      image: 'assets/images/project-neural-matrix.jpg',
      github: 'https://github.com/Ram-dwarampudi/Emotion-detector',
      live: 'https://github.com/Ram-dwarampudi/Emotion-detector',
      problem: 'Automated systems often lack affective computing capabilities to evaluate user emotional sentiment from text inputs and facial video streams.',
      solution: 'Created an intelligent emotion detection pipeline combining computer vision facial landmark classification and natural language sentiment analysis.',
      stack: ['Python', 'OpenCV', 'Scikit-Learn', 'Natural Language Processing', 'NumPy'],
      highlights: [
        'Real-time video stream facial emotion classification',
        'Textual NLP sentiment polarity and confidence scoring',
        'Live visual radar chart displaying affective state distributions'
      ]
    }
  };

  // --- 3D Card Tilt Physics ---
  function initCardTilt() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    tiltElements.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  // --- Project Filter Tabs ---
  function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playClick();
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        projectCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Case Study Modal Engine ---
  function initProjectModal() {
    const modalBackdrop = document.getElementById('project-modal');
    const modalContainer = document.getElementById('modal-dynamic-content');
    const closeBtn = document.getElementById('modal-close-btn');

    if (!modalBackdrop || !modalContainer) return;

    function openModal(projectId) {
      const data = PROJECTS_DATA[projectId];
      if (!data) return;

      modalContainer.innerHTML = `
        <div class="modal-header" style="margin-bottom:1.5rem;">
          <div class="section-pill" style="margin-bottom:0.5rem;"><i class="fas fa-microchip"></i> ${data.category}</div>
          <h2 style="font-size:1.8rem;color:#fff;margin-bottom:0.5rem;">${data.title}</h2>
          <div style="font-family:var(--font-mono);font-size:0.85rem;color:var(--accent-cyan);">${data.badge}</div>
        </div>

        <img src="${data.image}" alt="${data.title}" class="modal-image" style="border:1px solid rgba(255,255,255,0.1);max-height:360px;object-fit:cover;">

        <div style="display:flex;flex-direction:column;gap:1.5rem;">
          <div>
            <h4 style="color:#818cf8;font-size:1rem;margin-bottom:0.4rem;"><i class="fas fa-exclamation-circle"></i> The Challenge</h4>
            <p style="font-size:0.92rem;line-height:1.6;">${data.problem}</p>
          </div>

          <div>
            <h4 style="color:#06b6d4;font-size:1rem;margin-bottom:0.4rem;"><i class="fas fa-lightbulb"></i> The Engineering Solution</h4>
            <p style="font-size:0.92rem;line-height:1.6;">${data.solution}</p>
          </div>

          <div>
            <h4 style="color:#10b981;font-size:1rem;margin-bottom:0.5rem;"><i class="fas fa-star"></i> Key Architecture Highlights</h4>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:0.5rem;">
              ${data.highlights.map(h => `<li style="font-size:0.9rem;display:flex;align-items:center;gap:0.5rem;color:var(--text-secondary);"><i class="fas fa-check-circle" style="color:var(--accent-emerald);font-size:0.8rem;"></i> ${h}</li>`).join('')}
            </ul>
          </div>

          <div>
            <h4 style="color:#fff;font-size:0.95rem;margin-bottom:0.5rem;">Technologies & Tools</h4>
            <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
              ${data.stack.map(s => `<span class="tag tag-indigo">${s}</span>`).join('')}
            </div>
          </div>

          <div style="display:flex;gap:1rem;padding-top:1.5rem;border-top:1px solid var(--border-subtle);flex-wrap:wrap;">
            <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fab fa-github"></i> View GitHub Repository</a>
            ${data.live ? `<a href="${data.live}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm"><i class="fas fa-external-link-alt"></i> Project Demo / Details</a>` : ''}
          </div>
        </div>
      `;

      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (window.soundEngine) window.soundEngine.playSuccess();
    }

    function closeModal() {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
      if (window.soundEngine) window.soundEngine.playClick();
    }

    // Dynamic delegate for case study triggers
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.btn-open-case-study');
      if (trigger) {
        e.preventDefault();
        const id = trigger.getAttribute('data-project-id');
        openModal(id);
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCardTilt();
    initProjectFilters();
    initProjectModal();
  });
})();
