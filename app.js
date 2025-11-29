// Main Application Logic
class JavaScriptLearningApp {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.progress = JSON.parse(localStorage.getItem('progress')) || this.initProgress();
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
        } catch (error) {
            outputLines.push({ type: 'error', content: `❌ ${error.message}` });
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
                document.getElementById('codeEditor').value = code;
                this.openPlayground();
            });
            pre.style.position = 'relative';
            pre.appendChild(button);
        });
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
