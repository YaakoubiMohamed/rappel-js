// Toast Notification System
class ToastNotification {
    constructor() {
        this.container = this.createContainer();
    }

    createContainer() {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        return container;
    }

    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };

        const titles = {
            success: 'Succès',
            error: 'Erreur',
            warning: 'Attention',
            info: 'Information'
        };

        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas ${icons[type]}"></i>
            </div>
            <div class="toast-content">
                <div class="toast-title">${titles[type]}</div>
                <div class="toast-message">${message}</div>
            </div>
        `;

        this.container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, duration);

        return toast;
    }
}

// Confetti Effect
class ConfettiEffect {
    constructor() {
        this.container = this.createContainer();
    }

    createContainer() {
        let container = document.querySelector('.confetti-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'confetti-container';
            document.body.appendChild(container);
        }
        return container;
    }

    launch(count = 50) {
        const colors = ['#667eea', '#764ba2', '#f093fb', '#4CAF50', '#ff9800', '#f44336'];
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                confetti.style.animationDelay = (Math.random() * 0.5) + 's';
                
                this.container.appendChild(confetti);

                setTimeout(() => {
                    confetti.remove();
                }, 4000);
            }, i * 30);
        }
    }
}

// Scroll Reveal Animation
class ScrollReveal {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.reveal());
        window.addEventListener('resize', () => this.reveal());
    }

    observe(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.add('scroll-reveal');
            this.elements.push(el);
        });
        this.reveal();
    }

    reveal() {
        this.elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.85) {
                el.classList.add('revealed');
            }
        });
    }
}

// Particle System
class ParticleSystem {
    constructor() {
        this.container = this.createContainer();
        this.particles = [];
    }

    createContainer() {
        let container = document.querySelector('.particle-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'particle-container';
            document.body.insertBefore(container, document.body.firstChild);
        }
        return container;
    }

    createFloatingParticles(count = 30) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.width = (Math.random() * 4 + 2) + 'px';
            particle.style.height = particle.style.width;
            
            this.container.appendChild(particle);
            this.particles.push(particle);
        }
    }

    createCodeRain(count = 15) {
        const codeChars = ['0', '1', '{', '}', '(', ')', ';', '=', '+', '-', '*', '/', 'const', 'let', 'var'];
        
        for (let i = 0; i < count; i++) {
            const rain = document.createElement('div');
            rain.className = 'code-rain';
            rain.textContent = codeChars[Math.floor(Math.random() * codeChars.length)];
            rain.style.left = Math.random() * 100 + '%';
            rain.style.animationDelay = Math.random() * 10 + 's';
            rain.style.animationDuration = (Math.random() * 5 + 8) + 's';
            
            this.container.appendChild(rain);
            
            setTimeout(() => {
                rain.remove();
            }, 15000);
        }
    }

    createBurstEffect(x, y, count = 20) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle-burst';
            
            const angle = (Math.PI * 2 * i) / count;
            const distance = Math.random() * 100 + 50;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            
            const colors = ['#667eea', '#764ba2', '#f093fb', '#4CAF50'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            this.container.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }
    }

    createStarburstEffect(x, y, count = 30) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'starburst-particle';
            
            const angle = (Math.PI * 2 * i) / count;
            const distance = Math.random() * 150 + 80;
            const burstX = Math.cos(angle) * distance;
            const burstY = Math.sin(angle) * distance;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.setProperty('--burst-x', burstX + 'px');
            particle.style.setProperty('--burst-y', burstY + 'px');
            
            this.container.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1500);
        }
    }

    createSparkles(x, y, count = 10) {
        for (let i = 0; i < count; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle-particle';
            sparkle.style.left = (x + (Math.random() - 0.5) * 100) + 'px';
            sparkle.style.top = (y + (Math.random() - 0.5) * 100) + 'px';
            sparkle.style.animationDelay = Math.random() + 's';
            
            this.container.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 2000);
        }
    }

    clearParticles() {
        this.container.innerHTML = '';
        this.particles = [];
    }
}

// 3D Transform Effects
class Transform3D {
    constructor() {
        this.elements = [];
    }

    addTiltEffect(element) {
        element.classList.add('tilt-3d');
        
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * 15;
            const rotateY = ((centerX - x) / centerX) * 15;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    }

    addParallaxLayers(container) {
        const layers = container.querySelectorAll('[data-depth]');
        
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            layers.forEach(layer => {
                const depth = parseFloat(layer.getAttribute('data-depth')) || 0.5;
                const moveX = ((x - centerX) * depth) / 10;
                const moveY = ((y - centerY) * depth) / 10;
                
                layer.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
            });
        });
        
        container.addEventListener('mouseleave', () => {
            layers.forEach(layer => {
                layer.style.transform = 'translateX(0) translateY(0)';
            });
        });
    }
}

// Main Application Logic
class JavaScriptLearningApp {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.progress = JSON.parse(localStorage.getItem('progress')) || this.initProgress();
        this.toast = new ToastNotification();
        this.confetti = new ConfettiEffect();
        this.scrollReveal = new ScrollReveal();
        this.particles = new ParticleSystem();
        this.transform3d = new Transform3D();
        this.init();
    }

    initProgress() {
        return {
            variables: { completed: false, percent: 0 },
            strings: { completed: false, percent: 0 },
            arrays: { completed: false, percent: 0 },
            objects: { completed: false, percent: 0 },
            arrow: { completed: false, percent: 0 }
        };
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
        this.updateProgressDisplay();
        this.setupAnimations();
    }

    setupAnimations() {
        // Add ripple effect to all buttons
        document.addEventListener('click', (e) => {
            if (e.target.matches('.btn-primary, .try-button, .btn-playground')) {
                this.addRippleEffect(e.target, e);
            }
        });

        // Observe elements for scroll reveal
        setTimeout(() => {
            this.scrollReveal.observe('.article-content h2');
            this.scrollReveal.observe('.article-content h3');
            this.scrollReveal.observe('.code-example');
            this.scrollReveal.observe('.info-card');
        }, 500);

        // Initialize particle system (floating particles)
        this.particles.createFloatingParticles(25);

        // Add 3D tilt effect to feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            this.transform3d.addTiltEffect(card);
        });

        // Add 3D tilt effect to info cards
        document.querySelectorAll('.info-card').forEach(card => {
            this.transform3d.addTiltEffect(card);
        });

        // Add particle burst on feature card click
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const rect = card.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                this.particles.createBurstEffect(x, y, 15);
            });
        });

        // Add sparkles on successful code execution
        const runCodeBtn = document.getElementById('runCode');
        if (runCodeBtn) {
            const originalClick = runCodeBtn.onclick;
            runCodeBtn.addEventListener('click', (e) => {
                setTimeout(() => {
                    const output = document.getElementById('codeOutput');
                    if (output && !output.textContent.includes('❌')) {
                        const rect = runCodeBtn.getBoundingClientRect();
                        this.particles.createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
                    }
                }, 100);
            });
        }
    }

    addRippleEffect(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple-effect';

        element.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    setupEventListeners() {
        // Mobile Menu Toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        
        mobileMenuToggle.addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        sidebarOverlay.addEventListener('click', () => {
            this.closeSidebar();
        });

        // Theme Toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Progress Button
        document.getElementById('progressBtn').addEventListener('click', () => {
            this.openProgressModal();
        });

        // Playground
        document.getElementById('openPlayground').addEventListener('click', () => {
            this.openPlayground();
        });

        document.getElementById('playgroundCard').addEventListener('click', () => {
            this.openPlayground();
        });

        document.getElementById('closePlayground').addEventListener('click', () => {
            this.closeModal('playgroundModal');
        });

        document.getElementById('closeProgress').addEventListener('click', () => {
            this.closeModal('progressModal');
        });

        // Run Code
        document.getElementById('runCode').addEventListener('click', () => {
            this.runCode();
        });

        // Clear Output
        document.getElementById('clearOutput').addEventListener('click', () => {
            this.clearOutput();
        });

        // Feature Card Navigation
        document.querySelectorAll('.feature-card[data-navigate]').forEach(card => {
            card.addEventListener('click', (e) => {
                const section = card.getAttribute('data-navigate');
                this.loadSection(section);
                
                // Close sidebar on mobile
                if (window.innerWidth <= 1024) {
                    this.closeSidebar();
                }
            });
        });

        // Sidebar Navigation
        document.querySelectorAll('.sidebar-nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                const anchor = link.getAttribute('data-anchor') || '';
                this.loadSection(section, anchor);
                
                // Update active state
                document.querySelectorAll('.sidebar-nav a').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Close sidebar on mobile after selection
                if (window.innerWidth <= 1024) {
                    this.closeSidebar();
                }
            });
        });

        // Close modals on outside click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Enter to run code
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                const playgroundModal = document.getElementById('playgroundModal');
                if (playgroundModal.classList.contains('active')) {
                    this.runCode();
                }
            }
            // Escape to close modals
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal.active').forEach(modal => {
                    this.closeModal(modal.id);
                });
            }
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        const icon = document.querySelector('#themeToggle i');
        icon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const toggleBtn = document.getElementById('mobileMenuToggle');
        
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        toggleBtn.classList.toggle('active');
        
        // Change icon
        const icon = toggleBtn.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    }

    closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const toggleBtn = document.getElementById('mobileMenuToggle');
        
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        toggleBtn.classList.remove('active');
        
        const icon = toggleBtn.querySelector('i');
        icon.className = 'fas fa-bars';
    }

    openPlayground() {
        document.getElementById('playgroundModal').classList.add('active');
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
    }

    runCode() {
        const code = document.getElementById('codeEditor').value;
        const output = document.getElementById('codeOutput');
        
        if (!code.trim()) {
            this.toast.show('Veuillez entrer du code à exécuter', 'warning');
            return;
        }

        // Clear previous output
        output.innerHTML = '';

        // Override console methods
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;

        const outputLines = [];

        console.log = (...args) => {
            outputLines.push({ type: 'log', content: args.map(arg => this.formatOutput(arg)).join(' ') });
        };

        console.error = (...args) => {
            outputLines.push({ type: 'error', content: args.map(arg => this.formatOutput(arg)).join(' ') });
        };

        console.warn = (...args) => {
            outputLines.push({ type: 'warn', content: args.map(arg => this.formatOutput(arg)).join(' ') });
        };

        try {
            // Execute code
            eval(code);
            this.toast.show('Code exécuté avec succès!', 'success', 2000);
        } catch (error) {
            outputLines.push({ type: 'error', content: `❌ ${error.message}` });
            this.toast.show('Erreur dans votre code', 'error');
        }

        // Restore console methods
        console.log = originalLog;
        console.error = originalError;
        console.warn = originalWarn;

        // Display output
        if (outputLines.length === 0) {
            output.innerHTML = '<div class="output-line">✅ Code exécuté avec succès (pas de sortie)</div>';
        } else {
            outputLines.forEach(line => {
                const div = document.createElement('div');
                div.className = `output-line ${line.type}`;
                div.textContent = line.content;
                output.appendChild(div);
            });
        }
    }

    formatOutput(value) {
        if (typeof value === 'object' && value !== null) {
            return JSON.stringify(value, null, 2);
        }
        return String(value);
    }

    clearOutput() {
        document.getElementById('codeOutput').innerHTML = '';
        document.getElementById('codeEditor').value = '';
    }

    loadSection(section, anchor = null) {
        const content = document.getElementById('content');
        content.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Load content from content-loader
        window.contentLoader.loadContent(section).then(html => {
            content.innerHTML = html;
            
            // Add "Try it" buttons to code examples
            this.addTryButtons();
            
            // Add internal link handlers
            this.setupInternalLinks();
            
            // Setup animations for new content
            this.setupAnimations();
            
            // Show success toast
            this.toast.show(`Section "${section}" chargée avec succès!`, 'success', 2000);
            
            // Scroll to anchor if provided
            if (anchor) {
                setTimeout(() => {
                    this.scrollToAnchor(anchor);
                }, 300);
            }

            // Update progress
            this.updateSectionProgress(section, 50);
        }).catch(error => {
            content.innerHTML = `
                <div class="article-content">
                    <h2>❌ Erreur de chargement</h2>
                    <p>Impossible de charger le contenu. Veuillez réessayer.</p>
                    <button class="btn-primary" onclick="location.reload()">Recharger</button>
                </div>
            `;
            this.toast.show('Erreur de chargement du contenu', 'error');
        });
    }

    scrollToAnchor(anchor) {
        // Try to find element by ID
        let element = document.getElementById(anchor);
        
        // If not found, try to find by heading text
        if (!element) {
            const headings = document.querySelectorAll('h1, h2, h3, h4');
            headings.forEach(heading => {
                const headingId = heading.textContent.toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/^-+|-+$/g, '');
                
                if (headingId.includes(anchor.toLowerCase()) || anchor.toLowerCase().includes(headingId)) {
                    element = heading;
                }
            });
        }
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Highlight the element briefly
            element.style.backgroundColor = 'var(--accent-color)';
            element.style.transition = 'background-color 0.5s';
            setTimeout(() => {
                element.style.backgroundColor = '';
            }, 2000);
        }
    }

    setupInternalLinks() {
        // Handle all internal links within the content
        const contentArea = document.querySelector('.article-content');
        if (!contentArea) return;

        const links = contentArea.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const anchor = link.getAttribute('href').substring(1);
                this.scrollToAnchor(anchor);
            });
        });
    }

    addTryButtons() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            const pre = block.parentElement;
            if (pre.querySelector('.try-button')) return; // Already has button

            const button = document.createElement('button');
            button.className = 'try-button';
            button.innerHTML = '<i class="fas fa-play"></i> Essayer';
            button.addEventListener('click', () => {
                const code = block.textContent;
                this.typeCodeIntoEditor(code);
                this.openPlayground();
            });
            pre.style.position = 'relative';
            pre.appendChild(button);
        });
    }

    typeCodeIntoEditor(code, speed = 10) {
        const editor = document.getElementById('codeEditor');
        editor.value = '';
        let index = 0;

        const typeInterval = setInterval(() => {
            if (index < code.length) {
                editor.value += code[index];
                editor.scrollTop = editor.scrollHeight;
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, speed);
    }

    updateSectionProgress(section, percent) {
        if (this.progress[section]) {
            this.progress[section].percent = Math.max(this.progress[section].percent, percent);
            if (percent >= 100) {
                this.progress[section].completed = true;
            }
            localStorage.setItem('progress', JSON.stringify(this.progress));
            this.updateProgressDisplay();
        }
    }

    updateProgressDisplay() {
        const sections = Object.values(this.progress);
        const totalPercent = sections.reduce((sum, s) => sum + s.percent, 0) / sections.length;
        document.getElementById('progressText').textContent = `${Math.round(totalPercent)}%`;
    }

    openProgressModal() {
        const modal = document.getElementById('progressModal');
        modal.classList.add('active');

        // Calculate total progress
        const sections = Object.values(this.progress);
        const totalPercent = sections.reduce((sum, s) => sum + s.percent, 0) / sections.length;

        // Update circle
        const circle = document.getElementById('progressCircle');
        const circumference = 2 * Math.PI * 90;
        const offset = circumference - (totalPercent / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        document.getElementById('progressPercent').textContent = `${Math.round(totalPercent)}%`;

        // Update details
        const details = document.getElementById('progressDetails');
        const sectionNames = {
            variables: 'Variables & Structures',
            strings: 'Strings',
            arrays: 'Arrays',
            objects: 'Objects',
            arrow: 'Arrow Functions'
        };

        details.innerHTML = Object.entries(this.progress).map(([key, value]) => {
            const statusClass = value.completed ? 'completed' : value.percent > 0 ? 'in-progress' : 'not-started';
            const statusText = value.completed ? 'Terminé' : value.percent > 0 ? 'En cours' : 'Non commencé';
            
            return `
                <div class="progress-item">
                    <span class="progress-item-title">${sectionNames[key]}</span>
                    <span class="progress-item-status ${statusClass}">${statusText} (${value.percent}%)</span>
                </div>
            `;
        }).join('');
    }
}

// Load Exercises Function
function loadExercises(section) {
    const contentArea = document.getElementById('content');
    const html = window.exerciseSystem.generateExercisesPage(section);
    contentArea.innerHTML = html;
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Highlight code blocks in solutions when they're shown
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
    
    // Close mobile menu
    if (window.app) {
        window.app.closeSidebar();
    }
    
    // Scroll to top
    contentArea.scrollTop = 0;
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new JavaScriptLearningApp();
});
