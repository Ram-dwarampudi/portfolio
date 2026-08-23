/* ==========================================================================
   RAM DWARAMPUDI — MODERN DEVELOPER PORTFOLIO
   Interactive Ram-CLI Terminal Simulator
   ========================================================================== */

(function () {
  'use strict';

  const COMMANDS = {
    help: {
      desc: 'List all available terminal commands',
      exec: () => `
        <div style="color:#818cf8;margin-bottom:6px;"><strong>⚡ Available Commands:</strong></div>
        <div style="display:grid;grid-template-columns:130px 1fr;gap:4px;">
          <span style="color:#06b6d4;">about</span><span>Display Ram's background and engineering focus</span>
          <span style="color:#06b6d4;">skills</span><span>View technical languages, AI stacks & tools</span>
          <span style="color:#06b6d4;">projects</span><span>Explore all notable GitHub engineering works</span>
          <span style="color:#06b6d4;">leetcode</span><span>View LeetCode competitive problem solving profile</span>
          <span style="color:#06b6d4;">codechef</span><span>View CodeChef competitive coding profile</span>
          <span style="color:#06b6d4;">coding</span><span>Competitive programming profiles summary</span>
          <span style="color:#06b6d4;">education</span><span>Academic milestones & background</span>
          <span style="color:#06b6d4;">resume</span><span>Access & view Ram's official resume</span>
          <span style="color:#06b6d4;">contact</span><span>Direct links to reach out</span>
          <span style="color:#06b6d4;">sudo hire</span><span>Secret recruiter easter egg</span>
          <span style="color:#06b6d4;">clear</span><span>Clear terminal screen buffer</span>
          <span style="color:#06b6d4;">date</span><span>Display current local timestamp</span>
        </div>`
    },
    about: {
      desc: 'Display Ram’s bio and background',
      exec: () => `
        <div style="margin-bottom:6px;"><strong>👤 Dwarampudi Venkata Sai Rama Gopala Reddy (Ram)</strong></div>
        <div>📍 Marteru, Andhra Pradesh, India</div>
        <div>🎓 <strong>B.Tech</strong> in Computer Science &amp; Business Systems at <em>Vishnu Institute of Technology</em>.</div>
        <div style="margin-top:6px;color:#94a3b8;">
          Aspiring <strong>Machine Learning Engineer &amp; Data Analyst / Data Engineer</strong> specializing in <strong>Python, Scikit-Learn, Data Pipelines, Statistical Modeling, and Agentic AI</strong> alongside strong algorithmic problem solving in <strong>Java &amp; C</strong>.
        </div>`
    },
    skills: {
      desc: 'View technical skillset',
      exec: () => `
        <div style="color:#818cf8;margin-bottom:6px;"><strong>🛠️ Machine Learning &amp; Data Engineering Stack:</strong></div>
        <div>🔹 <strong>Machine Learning &amp; AI:</strong> Supervised Learning, Scikit-Learn, Multi-class Classification, Google Gemini API, LangChain, BigML, OpenCV</div>
        <div>🔹 <strong>Data Analytics &amp; Engineering:</strong> Pandas, NumPy, Data Preprocessing, Statistical Analysis, Telemetry Streaming, Struct Data Pipelines</div>
        <div>🔹 <strong>Core Languages &amp; DSA:</strong> Python (ML &amp; Data), Java (Data Structures &amp; SWE), C (Low-level Data Structures), SQL</div>
        <div>🔹 <strong>Platforms &amp; Problem Solving:</strong> LeetCode, CodeChef, Git, GitHub, Linux CLI, Jupyter Notebooks</div>`
    },
    projects: {
      desc: 'Explore engineering projects',
      exec: () => `
        <div style="color:#818cf8;margin-bottom:6px;"><strong>🚀 Notable GitHub Engineering Works:</strong></div>
        <div style="margin-bottom:6px;">1. <strong style="color:#fff;">Agentic AI Assistant</strong> [React, TS, LangChain, Gemini] → <a href="https://github.com/Ram-dwarampudi/agentic-ai-react-ts" target="_blank">agentic-ai-react-ts</a></div>
        <div style="margin-bottom:6px;">2. <strong style="color:#fff;">Disease Detection System</strong> [Python, Scikit-Learn] → <a href="https://github.com/Ram-dwarampudi/disease-detection-based-on-symptoms" target="_blank">disease-detection-based-on-symptoms</a></div>
        <div style="margin-bottom:6px;">3. <strong style="color:#fff;">Conversational AI Chatbot</strong> [Python, Gemini API] → <a href="https://github.com/Ram-dwarampudi/chatbot-demo1" target="_blank">chatbot-demo1</a></div>
        <div style="margin-bottom:6px;">4. <strong style="color:#fff;">Student Grade Management Engine</strong> [C Language, File I/O] → <a href="https://github.com/Ram-dwarampudi/studentgrademanagement" target="_blank">studentgrademanagement</a></div>
        <div style="margin-bottom:6px;">5. <strong style="color:#fff;">ElderEase Support Platform</strong> [Accessible Web, Healthcare] → <a href="https://github.com/Ram-dwarampudi/ElderEase" target="_blank">ElderEase</a></div>
        <div style="margin-bottom:6px;">6. <strong style="color:#fff;">JPMorgan Chase SWE Hub</strong> [Java, Financial Telemetry] → <a href="https://github.com/Ram-dwarampudi/forage-midas" target="_blank">forage-midas</a></div>
        <div style="margin-bottom:6px;">7. <strong style="color:#fff;">Smart Fire Detection & Prevention</strong> [Arduino, Blynk IoT] → <a href="https://github.com/Ram-dwarampudi" target="_blank">IoT Safety Net</a></div>
        <div style="margin-bottom:6px;">8. <strong style="color:#fff;">Emotion & Sentiment Classifier</strong> [Python, OpenCV, NLP] → <a href="https://github.com/Ram-dwarampudi/Emotion-detector" target="_blank">Emotion-detector</a></div>`
    },
    leetcode: {
      desc: 'View LeetCode profile',
      exec: () => `
        <div style="color:#f59e0b;margin-bottom:6px;"><strong>⚡ LeetCode Profile:</strong></div>
        <div>Username: <strong style="color:#fff;">Ram_Dwarampudi</strong></div>
        <div>Focus: Data Structures &amp; Algorithms in Java, C &amp; Python.</div>
        <div style="margin-top:4px;">🔗 Link: <a href="https://leetcode.com/u/Ram_Dwarampudi/" target="_blank" style="color:#06b6d4;">leetcode.com/u/Ram_Dwarampudi/</a></div>`
    },
    codechef: {
      desc: 'View CodeChef profile',
      exec: () => `
        <div style="color:#a855f7;margin-bottom:6px;"><strong>👨‍🍳 CodeChef Profile:</strong></div>
        <div>Username: <strong style="color:#fff;">ram_dwarampudi</strong></div>
        <div>Focus: Competitive Programming contests and algorithmic challenges.</div>
        <div style="margin-top:4px;">🔗 Link: <a href="https://www.codechef.com/users/ram_dwarampudi" target="_blank" style="color:#06b6d4;">codechef.com/users/ram_dwarampudi</a></div>`
    },
    coding: {
      desc: 'Competitive programming summary',
      exec: () => `
        <div style="color:#818cf8;margin-bottom:6px;"><strong>🏆 Competitive Programming &amp; Problem Solving:</strong></div>
        <div>• <strong>LeetCode:</strong> <a href="https://leetcode.com/u/Ram_Dwarampudi/" target="_blank">leetcode.com/u/Ram_Dwarampudi/</a></div>
        <div>• <strong>CodeChef:</strong> <a href="https://www.codechef.com/users/ram_dwarampudi" target="_blank">codechef.com/users/ram_dwarampudi</a></div>
        <div style="margin-top:6px;color:#94a3b8;">Continuously sharpening algorithms, time complexity optimization, and problem-solving patterns.</div>`
    },
    cp: {
      desc: 'Alias for coding',
      exec: () => COMMANDS.coding.exec()
    },
    education: {
      desc: 'Academic timeline',
      exec: () => `
        <div style="color:#818cf8;margin-bottom:6px;"><strong>🎓 Academic Milestones:</strong></div>
        <div>• <strong>B.Tech — Computer Science &amp; Business Systems</strong><br>&nbsp;&nbsp;Vishnu Institute of Technology</div>
        <div>• <strong>Intermediate (MPC)</strong><br>&nbsp;&nbsp;Tirumala Junior College</div>
        <div>• <strong>10th Class (SSC)</strong><br>&nbsp;&nbsp;S.V.G.Z.P.P. High School</div>`
    },
    resume: {
      desc: 'View official resume',
      exec: () => `
        <div style="color:#10b981;margin-bottom:6px;"><strong>📄 Official Resume:</strong></div>
        <div>Click to view online: <a href="https://drive.google.com/file/d/1w-L5KST6j3CBFGLDsOAw8OZqtT0ZtfIG/view?usp=sharing" target="_blank" style="color:#06b6d4;font-weight:700;">Open Ram's Resume (Google Drive)</a></div>`
    },
    contact: {
      desc: 'Direct communication channels',
      exec: () => `
        <div style="color:#818cf8;margin-bottom:6px;"><strong>📬 Connect with Ram:</strong></div>
        <div>✉️ Email: <a href="mailto:ramdwarampudi19@gmail.com">ramdwarampudi19@gmail.com</a></div>
        <div>💼 LinkedIn: <a href="https://www.linkedin.com/in/ram-dwarampudi-7a7a12316/" target="_blank">linkedin.com/in/ram-dwarampudi-7a7a12316</a></div>
        <div>🐙 GitHub: <a href="https://github.com/Ram-dwarampudi" target="_blank">github.com/Ram-dwarampudi</a></div>
        <div>⚡ LeetCode: <a href="https://leetcode.com/u/Ram_Dwarampudi/" target="_blank">leetcode.com/u/Ram_Dwarampudi/</a></div>
        <div>👨‍🍳 CodeChef: <a href="https://www.codechef.com/users/ram_dwarampudi" target="_blank">codechef.com/users/ram_dwarampudi</a></div>`
    },
    'sudo hire': {
      desc: 'Secret recruiter action',
      exec: () => `
        <div style="color:#10b981;font-weight:700;font-size:1.05rem;margin-bottom:6px;">🎉 [ACCESS GRANTED] — Welcome Recruiter!</div>
        <div>Ram is actively looking for <strong>Internships</strong> and software engineering collaborations.</div>
        <div style="margin-top:6px;">🚀 <a href="#contact" style="color:#06b6d4;text-decoration:underline;">Click here to jump to Contact Form</a> or email <a href="mailto:ramdwarampudi19@gmail.com">ramdwarampudi19@gmail.com</a></div>`
    },
    date: {
      desc: 'Print local date',
      exec: () => `<div>🕒 ${new Date().toLocaleString()}</div>`
    }
  };

  function initTerminal() {
    const historyContainer = document.getElementById('terminal-history');
    const input = document.getElementById('terminal-input');
    const pillButtons = document.querySelectorAll('.terminal-pills-row .t-pill');
    const terminalBody = document.querySelector('.terminal-body');

    if (!input || !historyContainer) return;

    let cmdHistory = [];
    let historyIndex = -1;

    function executeCommand(rawCmd) {
      const trimmed = rawCmd.trim().toLowerCase();
      if (!trimmed) return;

      cmdHistory.push(trimmed);
      historyIndex = cmdHistory.length;

      const entry = document.createElement('div');
      entry.className = 'terminal-entry';

      const cmdLine = document.createElement('div');
      cmdLine.className = 'term-entry-command';
      cmdLine.innerHTML = `<span class="term-prompt">ram@workspace:~$</span> <span>${escapeHtml(rawCmd)}</span>`;
      entry.appendChild(cmdLine);

      if (trimmed === 'clear' || trimmed === 'cls') {
        historyContainer.innerHTML = '';
        input.value = '';
        return;
      }

      const output = document.createElement('div');
      output.className = 'term-entry-output';

      if (COMMANDS[trimmed]) {
        output.innerHTML = COMMANDS[trimmed].exec();
      } else {
        output.innerHTML = `<span style="color:#f43f5e;">Command not found: "${escapeHtml(trimmed)}". Type <strong style="color:#06b6d4;">help</strong> for available commands.</span>`;
      }

      entry.appendChild(output);
      historyContainer.appendChild(entry);

      input.value = '';
      if (terminalBody) {
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }

      if (window.soundEngine) {
        window.soundEngine.playSuccess();
      }
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    input.addEventListener('keydown', (e) => {
      if (window.soundEngine) {
        window.soundEngine.playTerminalKey();
      }

      if (e.key === 'Enter') {
        executeCommand(input.value);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          input.value = cmdHistory[historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < cmdHistory.length - 1) {
          historyIndex++;
          input.value = cmdHistory[historyIndex] || '';
        } else {
          historyIndex = cmdHistory.length;
          input.value = '';
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const current = input.value.trim().toLowerCase();
        const matches = Object.keys(COMMANDS).filter(c => c.startsWith(current));
        if (matches.length === 1) {
          input.value = matches[0];
        }
      }
    });

    pillButtons.forEach((pill) => {
      pill.addEventListener('click', () => {
        const cmd = pill.getAttribute('data-cmd') || pill.textContent.trim().replace('$', '').trim();
        executeCommand(cmd);
        input.focus();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initTerminal);
})();
