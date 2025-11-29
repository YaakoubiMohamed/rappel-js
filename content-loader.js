// Content Loader - Converts markdown content to HTML (NO MORE FILE LOADING!)
class ContentLoader {
    constructor() {
        this.contentCache = {};
    }

    async loadContent(section) {
        // Check cache first
        if (this.contentCache[section]) {
            return this.contentCache[section];
        }

        try {
            // Get content directly from course-content.js (no fetch needed!)
            const markdown = window.courseContent[section];
            
            if (!markdown) {
                throw new Error(`Section ${section} not found`);
            }
            
            const html = this.convertMarkdownToHTML(markdown);
            
            // Cache the result
            this.contentCache[section] = html;
            return html;
        } catch (error) {
            console.error('Error loading content:', error);
            throw error;
        }
    }

    convertMarkdownToHTML(markdown) {
        // Configure marked options
        marked.setOptions({
            highlight: function(code, lang) {
                if (lang && Prism.languages[lang]) {
                    return Prism.highlight(code, Prism.languages[lang], lang);
                }
                return code;
            },
            breaks: true,
            gfm: true,
            // Add IDs to headings automatically
            headerIds: true,
            mangle: false
        });

        // Custom renderer to add IDs to headings
        const renderer = new marked.Renderer();
        renderer.heading = function(text, level) {
            const escapedText = text.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/^-+|-+$/g, '');
            return `<h${level} id="${escapedText}">${text}</h${level}>`;
        };

        marked.use({ renderer });

        // Convert markdown to HTML
        let html = marked.parse(markdown);

        // Wrap in article container
        html = `<div class="article-content">${html}</div>`;

        // Add navigation buttons at the end
        html += this.createNavigationButtons();

        return html;
    }

    createNavigationButtons() {
        return `
            <div class="content-navigation-buttons">
                <button class="btn-primary nav-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                    <i class="fas fa-arrow-up"></i> Haut de page
                </button>
                <button class="btn-primary nav-btn" onclick="app.openPlayground()">
                    <i class="fas fa-play-circle"></i> Terrain de jeu
                </button>
            </div>
        `;
    }

    // Generate interactive quizzes based on content
    generateQuiz(section) {
        const quizzes = {
            variables: [
                {
                    question: "Quelle est la différence principale entre var et let ?",
                    options: [
                        "var a une portée de fonction, let a une portée de bloc",
                        "var est plus rapide que let",
                        "let est obsolète",
                        "Il n'y a pas de différence"
                    ],
                    correct: 0
                },
                {
                    question: "Que signifie 'const' ?",
                    options: [
                        "Variable qui ne peut jamais changer",
                        "Variable qui ne peut pas être réassignée",
                        "Variable constante en mathématiques",
                        "Variable globale"
                    ],
                    correct: 1
                }
            ],
            strings: [
                {
                    question: "Quelle méthode permet de convertir une string en majuscules ?",
                    options: [
                        "toUpper()",
                        "uppercase()",
                        "toUpperCase()",
                        "upper()"
                    ],
                    correct: 2
                }
            ],
            arrays: [
                {
                    question: "Quelle méthode ajoute un élément à la fin d'un tableau ?",
                    options: [
                        "add()",
                        "append()",
                        "push()",
                        "insert()"
                    ],
                    correct: 2
                }
            ]
        };

        return quizzes[section] || [];
    }

    createQuizHTML(section) {
        const quizzes = this.generateQuiz(section);
        if (quizzes.length === 0) return '';

        let html = '<div class="quiz-section"><h2>🎯 Quiz : Testez vos connaissances</h2>';
        
        quizzes.forEach((quiz, index) => {
            html += `
                <div class="quiz-item" data-quiz-index="${index}">
                    <h4>Question ${index + 1}: ${quiz.question}</h4>
                    <div class="quiz-options">
                        ${quiz.options.map((option, optIndex) => `
                            <label class="quiz-option">
                                <input type="radio" name="quiz-${index}" value="${optIndex}">
                                <span>${option}</span>
                            </label>
                        `).join('')}
                    </div>
                    <button class="btn-primary quiz-submit" onclick="contentLoader.checkAnswer(${index}, ${quiz.correct})">
                        Vérifier
                    </button>
                    <div class="quiz-result" id="quiz-result-${index}"></div>
                </div>
            `;
        });

        html += '</div>';
        return html;
    }

    checkAnswer(quizIndex, correctAnswer) {
        const selectedOption = document.querySelector(`input[name="quiz-${quizIndex}"]:checked`);
        const resultDiv = document.getElementById(`quiz-result-${quizIndex}`);

        if (!selectedOption) {
            resultDiv.innerHTML = '<p style="color: var(--warning-color);">⚠️ Veuillez sélectionner une réponse</p>';
            return;
        }

        const selectedValue = parseInt(selectedOption.value);
        
        if (selectedValue === correctAnswer) {
            resultDiv.innerHTML = '<p style="color: var(--success-color);">✅ Bravo ! C\'est la bonne réponse !</p>';
            resultDiv.style.background = '#d4edda';
        } else {
            resultDiv.innerHTML = '<p style="color: var(--danger-color);">❌ Ce n\'est pas la bonne réponse. Réessayez !</p>';
            resultDiv.style.background = '#f8d7da';
        }
        resultDiv.style.padding = '1rem';
        resultDiv.style.borderRadius = '8px';
        resultDiv.style.marginTop = '1rem';
    }
}

// Create global instance
window.contentLoader = new ContentLoader();
