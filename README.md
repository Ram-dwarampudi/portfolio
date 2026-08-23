# 🚀 Ram Dwarampudi — Modern Developer Portfolio

A completely restructured, high-performance developer portfolio engineered with a **futuristic cybernetic / Linear-inspired dark aesthetic**, dynamic micro-animations, an in-browser **Ram-CLI interactive terminal**, **3D tilt project cards with deep-dive modals**, and modern design tokens.

---

## ✨ Key Features & Architecture

- ⚡ **Futuristic UI/UX**: Aurora ambient glow, cursor spotlight engine, particle canvas mesh, and glassmorphism.
- 💻 **Ram-CLI Developer Terminal**: In-browser interactive workstation with command parser (`help`, `about`, `skills`, `projects`, `education`, `contact`, `sudo hire`), arrow key history buffer, and tab autocomplete.
- 🎯 **3D Tilt Projects & Deep-Dive Modals**: Dynamic case-study lightboxes with problem statements, architectural highlights, and tech stacks.
- 🛠️ **Categorized Skills Matrix**: Filterable capabilities across Systems & C, AI/LLMs, IoT/Hardware, and Web Engineering.
- 🔊 **Web Audio Sound Effects**: Integrated synthesizer sound effects for clicks, terminal keystrokes, and toasts (with persistent mute toggle).
- 📱 **100% Responsive & Accessible**: Mobile drawer navigation, fluid typography (`Plus Jakarta Sans` & `JetBrains Mono`), and semantic HTML5.
- 📋 **1-Click Copy & Confetti Submission**: Instant clipboard copy for email/phone with interactive celebration confetti on contact transmissions.

---

## 📂 Project Structure

```text
portfolio/
├── index.html                 # Semantic HTML5 master document with SEO/OG meta
├── README.md                  # Project documentation & customisation guide
├── css/
│   ├── main.css               # Design tokens, CSS variables, typography, reset
│   ├── components.css         # Navbar, Hero, Terminal, Cards, Modal, Timeline
│   └── animations.css         # Keyframe animations, pulse, float, reveal
├── js/
│   ├── main.js                # Canvas particle mesh, audio engine, typewriter, scroll spy
│   ├── terminal.js            # Ram-CLI command engine, history, tab-completion
│   ├── projects.js            # 3D tilt physics, category filters, case study modal
│   └── contact.js             # Form validation, copy-to-clipboard, confetti explosion
└── assets/
    └── images/
        ├── avatar.jpg                 # Stylized profile image placeholder
        ├── project-ai-bot.jpg         # Gemini AI Chatbot thumbnail
        ├── project-iot-fire.jpg       # IoT Smart Fire Safety thumbnail
        ├── project-grade-engine.jpg   # C Grade Management Engine thumbnail
        └── project-neural-matrix.jpg  # AI Agent Workflow thumbnail
```

---

## 🖼️ How to Update Photos & Projects

You can replace any photo at any time by simply overwriting the files in `assets/images/`:

| File | Purpose | Recommended Size |
|---|---|---|
| `assets/images/avatar.jpg` | Your personal profile picture | 800 x 800 px (Square) |
| `assets/images/project-ai-bot.jpg` | Conversational AI project banner | 1920 x 1080 px (16:9) |
| `assets/images/project-iot-fire.jpg` | IoT Smart Fire project banner | 1920 x 1080 px (16:9) |
| `assets/images/project-grade-engine.jpg` | C Language Grade System banner | 1920 x 1080 px (16:9) |
| `assets/images/project-neural-matrix.jpg` | AI Agent project banner | 1920 x 1080 px (16:9) |

---

## 🚀 Running Locally

### Option 1: Direct in Browser
Simply double-click `index.html` in Windows Explorer or open it in your browser.

### Option 2: Using Python HTTP Server
```bash
cd portfolio
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option 3: Using Node / npx serve
```bash
cd portfolio
npx serve .
```

---

## 🌐 Deploying to Vercel or GitHub Pages

### Deploying to Vercel (Recommended)
1. Push this folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Restructure: Modern futuristic portfolio overhaul"
   git remote add origin https://github.com/Ram-dwarampudi/portfolio.git
   git push -u origin main --force
   ```
2. Link the repository on [Vercel](https://vercel.com) and it will automatically deploy the static site!

---

© 2026 Ram Dwarampudi. All rights reserved.
