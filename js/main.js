/**
 * Main JavaScript file for portfolio website
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Initialize the site
    initThemeToggle();
    initMobileMenu();
    initScrollAnimation();
    initSkillsTab();
    initSkillsProgress();
    initContactForm();
    initScrollSpy();
    setCurrentYear();
    
    // Handle header scroll state
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Add event listeners to all navigation links for smooth scrolling
    document.querySelectorAll('.nav-link, .footer-link, .logo, .btn').forEach(link => {
        if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
                
                // Close mobile menu if open
                if (document.getElementById('mobile-nav').classList.contains('active')) {
                    document.getElementById('mobile-nav').classList.remove('active');
                    document.getElementById('mobile-menu-btn').classList.remove('active');
                }
            });
        }
    });
});

/**
 * Initialize theme toggle functionality
 */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    } else {
        // Check if user has dark mode enabled on their device
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkScheme) {
            document.body.setAttribute('data-theme', 'dark');
        }
    }
    
    // Toggle between light and dark theme
    themeToggleBtn.addEventListener('click', function() {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
}

/**
 * Initialize scroll animation for elements with .animate-on-scroll class
 */
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkVisibility = function() {
        animatedElements.forEach(element => {
            // Check if element is in viewport
            const position = element.getBoundingClientRect();
            
            // If element is in viewport and not already shown
            if (position.top <= window.innerHeight * 0.8 && !element.classList.contains('show')) {
                element.classList.add('show');
            }
        });
    };
    
    // Add class on initial load
    setTimeout(checkVisibility, 100);
    
    // Add class on scroll
    window.addEventListener('scroll', checkVisibility);
}

/**
 * Initialize skills tab functionality
 */
function initSkillsTab() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the data-tab attribute value
            const tabId = this.getAttribute('data-tab');
            
            // Hide all tab content
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected tab content
            if (tabId === 'technical') {
                document.getElementById('technical-skills').classList.add('active');
            } else {
                document.getElementById('soft-skills').classList.add('active');
            }
            
            // Reinitialize skill progress bars when technical tab is active
            if (tabId === 'technical') {
                initSkillsProgress();
            }
        });
    });
}

/**
 * Initialize skill progress bars
 */
function initSkillsProgress() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        // Reset width to 0
        bar.style.width = '0';
        
        // Set timeout to allow animation
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
}

/**
 * Initialize contact form validation and submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        let isValid = true;
        
        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        
        // Name validation
        if (nameInput.value.trim().length < 2) {
            document.getElementById('name-error').textContent = 'Name must be at least 2 characters.';
            isValid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address.';
            isValid = false;
        }
        
        // Subject validation
        if (subjectInput.value.trim().length < 5) {
            document.getElementById('subject-error').textContent = 'Subject must be at least 5 characters.';
            isValid = false;
        }
        
        // Message validation
        if (messageInput.value.trim().length < 10) {
            document.getElementById('message-error').textContent = 'Message must be at least 10 characters.';
            isValid = false;
        }
        
        if (isValid) {
            // If form is valid, submit it
            const submitBtn = contactForm.querySelector('.submit-btn');
            const submitText = document.getElementById('submit-text');
            
            // Change button text to show loading
            submitText.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (you would replace this with actual form submission)
            setTimeout(() => {
                contactForm.reset();
                submitText.textContent = 'Send Message';
                submitBtn.disabled = false;
                
                // Show success toast
                showToast('Message Sent!', 'Thank you for your message. I will get back to you soon.', 'success');
            }, 1500);
        }
    });
}

/**
 * Initialize scroll spy to highlight active nav item
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Show toast notification
 * @param {string} title - Toast title
 * @param {string} message - Toast message
 * @param {string} type - Toast type ('success' or 'error')
 */
function showToast(title, message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Set toast content
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        </div>
        <div class="toast-content">
            <h4 class="toast-title">${title}</h4>
            <p class="toast-message">${message}</p>
        </div>
        <div class="toast-close">
            <i class="fas fa-times"></i>
        </div>
    `;
    
    // Add toast to container
    toastContainer.appendChild(toast);
    
    // Add event listener to close button
    toast.querySelector('.toast-close').addEventListener('click', function() {
        toast.remove();
    });
    
    // Auto remove toast after 5 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 5000);
}

/**
 * Scroll to section with ID
 * @param {string} sectionId - Section ID to scroll to
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
        const offsetTop = section.offsetTop;
        
        window.scrollTo({
            top: offsetTop - 70, // Adjust for header height
            behavior: 'smooth'
        });
    }
}

/**
 * Set current year in footer
 */
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}