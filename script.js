/* ============================================
   FITCLASS AI AUTOMATION PROPOSAL
   Premium Interactive JavaScript
   Author: Pankaj Sharma
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // LOADER
    // ============================================
    const loader = document.getElementById('loader');

    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('hidden');
            // Trigger initial reveal animations
            setTimeout(checkReveal, 300);
        }, 2200);
    });

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // MOBILE HAMBURGER MENU
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ============================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // REVEAL ON SCROLL ANIMATIONS
    // ============================================
    const revealElements = document.querySelectorAll('.reveal-up');

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Initial check

    // ============================================
    // ANIMATED COUNTERS
    // ============================================
    const counters = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        const heroSection = document.getElementById('hero');
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        if (heroBottom > 0) {
            countersAnimated = true;

            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                setTimeout(updateCounter, 500);
            });
        }
    }

    window.addEventListener('scroll', animateCounters);
    setTimeout(animateCounters, 2500); // After loader

    // ============================================
    // PROBLEM BAR ANIMATIONS
    // ============================================
    const problemBars = document.querySelectorAll('.bar-fill');
    let barsAnimated = false;

    function animateBars() {
        if (barsAnimated) return;

        const problemSection = document.getElementById('problem');
        const sectionTop = problemSection.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight * 0.8) {
            barsAnimated = true;

            problemBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            });
        }
    }

    window.addEventListener('scroll', animateBars);

    // ============================================
    // DEMO TABS
    // ============================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // Add active to clicked
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============================================
    // WHATSAPP FLOAT HIDE/SHOW ON SCROLL
    // ============================================
    const waFloat = document.getElementById('waFloat');
    let waVisible = true;

    window.addEventListener('scroll', function() {
        const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        if (scrollPercent > 95) {
            waFloat.style.transform = 'translateY(100px)';
            waFloat.style.opacity = '0';
        } else {
            waFloat.style.transform = 'translateY(0)';
            waFloat.style.opacity = '1';
        }
    });

    // ============================================
    // HERO PARTICLES (Simple CSS-enhanced JS)
    // ============================================
    const particlesContainer = document.getElementById('particles');

    function createParticles() {
        if (!particlesContainer || window.innerWidth < 768) return;

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: ${Math.random() > 0.5 ? 'rgba(212, 175, 55, 0.4)' : 'rgba(0, 212, 255, 0.3)'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                pointer-events: none;
            `;
            particlesContainer.appendChild(particle);
        }
    }

    // Add particle animation keyframes dynamically
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
        }
    `;
    document.head.appendChild(particleStyle);

    createParticles();

    // ============================================
    // VISION PARTICLES
    // ============================================
    const visionParticles = document.getElementById('visionParticles');

    function createVisionParticles() {
        if (!visionParticles || window.innerWidth < 768) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${Math.random() > 0.5 ? 'rgba(212, 175, 55, 0.3)' : 'rgba(0, 212, 255, 0.2)'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: visionFloat ${Math.random() * 15 + 15}s linear infinite;
                animation-delay: ${Math.random() * 8}s;
                pointer-events: none;
            `;
            visionParticles.appendChild(particle);
        }
    }

    const visionStyle = document.createElement('style');
    visionStyle.textContent = `
        @keyframes visionFloat {
            0% { transform: translateY(100vh) scale(0); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }
    `;
    document.head.appendChild(visionStyle);

    createVisionParticles();

    // ============================================
    // PARALLAX EFFECT FOR HERO
    // ============================================
    const heroBg = document.querySelector('.hero-bg');

    window.addEventListener('scroll', function() {
        if (window.innerWidth < 768) return;
        const scrolled = window.pageYOffset;
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // ============================================
    // FEATURE CARD STAGGER ANIMATION
    // ============================================
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.05}s`;
    });

    // ============================================
    // PROBLEM CARD STAGGER
    // ============================================
    const problemCards = document.querySelectorAll('.problem-card');

    problemCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
    });

    // ============================================
    // ABOUT CARD STAGGER
    // ============================================
    const aboutCards = document.querySelectorAll('.about-card');

    aboutCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // ============================================
    // PRICING CARD STAGGER
    // ============================================
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // ============================================
    // FUTURE CARD STAGGER
    // ============================================
    const futureCards = document.querySelectorAll('.future-card');

    futureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.06}s`;
    });

    // ============================================
    // TIMELINE ITEM STAGGER
    // ============================================
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // ============================================
    // TECH CARD STAGGER
    // ============================================
    const techCards = document.querySelectorAll('.tech-card');

    techCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
    });

    // ============================================
    // MOUSE GLOW EFFECT FOR FEATURE CARDS
    // ============================================
    document.querySelectorAll('.feature-card, .tech-card, .about-card, .problem-card, .future-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ============================================
    // NAV LINK ACTIVE STATE ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ============================================
    // PHONE MOCKUP TYPING ANIMATION LOOP
    // ============================================
    function simulateTyping() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            setInterval(() => {
                typingIndicator.style.opacity = typingIndicator.style.opacity === '0' ? '1' : '0';
            }, 3000);
        }
    }

    setTimeout(simulateTyping, 3000);

    // ============================================
    // PERFORMANCE: Pause animations when tab hidden
    // ============================================
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.body.classList.add('paused');
        } else {
            document.body.classList.remove('paused');
        }
    });

    // ============================================
    // CONSOLE SIGNATURE
    // ============================================
    console.log('%c FitClass AI Automation Proposal ', 'background: linear-gradient(135deg, #d4af37, #00d4ff); color: #0a0a0f; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
    console.log('%c Crafted by Pankaj Sharma | AI Automation Solutions ', 'color: #d4af37; font-size: 12px;');
});
