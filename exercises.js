// Exercise System with scoring and solutions
class ExerciseSystem {
    constructor() {
        this.exercises = this.loadExercises();
        this.userScores = JSON.parse(localStorage.getItem('exerciseScores')) || {};
        this.currentExercise = null;
    }

    loadExercises() {
        return {
            variables: [
                {
                    id: 'var-1',
                    title: '📝 Déclarer des Variables',
                    difficulty: 'facile',
                    points: 10,
                    description: 'Créez trois variables : `nom` avec votre prénom, `age` avec votre âge, et `ville` avec votre ville. Puis affichez-les avec console.log().',
                    hint: 'Utilisez let ou const pour déclarer vos variables',
                    starterCode: '// Écrivez votre code ici\n',
                    solution: `let nom = "Alice";
let age = 25;
let ville = "Paris";

console.log("Nom:", nom);
console.log("Âge:", age);
console.log("Ville:", ville);`,
                    tests: [
                        { check: (code) => code.includes('let') || code.includes('const'), message: 'Utilisez let ou const' },
                        { check: (code) => code.includes('nom') && code.includes('age') && code.includes('ville'), message: 'Créez les 3 variables' },
                        { check: (code) => code.includes('console.log'), message: 'Affichez les variables avec console.log()' }
                    ]
                },
                {
                    id: 'var-2',
                    title: '🔢 Calculatrice Simple',
                    difficulty: 'facile',
                    points: 15,
                    description: 'Créez deux variables `a = 10` et `b = 5`. Calculez et affichez leur somme, différence, produit et quotient.',
                    hint: 'Utilisez les opérateurs +, -, *, /',
                    starterCode: 'let a = 10;\nlet b = 5;\n\n// Calculez et affichez les résultats\n',
                    solution: `let a = 10;
let b = 5;

let somme = a + b;
let difference = a - b;
let produit = a * b;
let quotient = a / b;

console.log("Somme:", somme);
console.log("Différence:", difference);
console.log("Produit:", produit);
console.log("Quotient:", quotient);`,
                    tests: [
                        { check: (code) => code.includes('+') && code.includes('-') && code.includes('*') && code.includes('/'), message: 'Utilisez les 4 opérateurs' },
                        { check: (code) => (code.match(/console\.log/g) || []).length >= 4, message: 'Affichez les 4 résultats' }
                    ]
                },
                {
                    id: 'var-3',
                    title: '🎯 Condition if-else',
                    difficulty: 'moyen',
                    points: 20,
                    description: 'Créez une variable `note` avec une valeur entre 0 et 20. Affichez "Réussi" si la note >= 10, sinon "Échoué".',
                    hint: 'Utilisez if-else',
                    starterCode: 'let note = 15;\n\n// Écrivez votre condition\n',
                    solution: `let note = 15;

if (note >= 10) {
    console.log("Réussi");
} else {
    console.log("Échoué");
}`,
                    tests: [
                        { check: (code) => code.includes('if') && code.includes('else'), message: 'Utilisez if-else' },
                        { check: (code) => code.includes('>=') || code.includes('>='), message: 'Comparez la note avec 10' },
                        { check: (code) => code.includes('console.log'), message: 'Affichez le résultat' }
                    ]
                }
            ],
            strings: [
                {
                    id: 'str-1',
                    title: '✂️ Manipulation de String',
                    difficulty: 'facile',
                    points: 15,
                    description: 'Créez une variable `texte = "bonjour"`. Affichez-le en majuscules, sa longueur, et son premier caractère.',
                    hint: 'Utilisez .toUpperCase(), .length et [0]',
                    starterCode: 'let texte = "bonjour";\n\n// Votre code ici\n',
                    solution: `let texte = "bonjour";

console.log("Majuscules:", texte.toUpperCase());
console.log("Longueur:", texte.length);
console.log("Premier caractère:", texte[0]);`,
                    tests: [
                        { check: (code) => code.includes('toUpperCase'), message: 'Utilisez toUpperCase()' },
                        { check: (code) => code.includes('length'), message: 'Utilisez .length' },
                        { check: (code) => code.includes('[0]') || code.includes('charAt'), message: 'Accédez au premier caractère' }
                    ]
                },
                {
                    id: 'str-2',
                    title: '🔤 Template Literals',
                    difficulty: 'facile',
                    points: 15,
                    description: 'Créez `prenom = "Jean"` et `nom = "Dupont"`. Affichez "Bonjour Jean Dupont !" avec un template literal.',
                    hint: 'Utilisez les backticks ` et ${variable}',
                    starterCode: 'let prenom = "Jean";\nlet nom = "Dupont";\n\n// Votre code ici\n',
                    solution: `let prenom = "Jean";
let nom = "Dupont";

console.log(\`Bonjour \${prenom} \${nom} !\`);`,
                    tests: [
                        { check: (code) => code.includes('`') && code.includes('${'), message: 'Utilisez un template literal avec ${}' },
                        { check: (code) => code.includes('console.log'), message: 'Affichez le résultat' }
                    ]
                }
            ],
            arrays: [
                {
                    id: 'arr-1',
                    title: '📋 Créer et Afficher un Tableau',
                    difficulty: 'facile',
                    points: 15,
                    description: 'Créez un tableau `fruits` avec 5 fruits. Affichez le tableau, sa longueur, et le premier et dernier fruit.',
                    hint: 'Utilisez [] pour créer le tableau',
                    starterCode: '// Créez votre tableau ici\n',
                    solution: `let fruits = ["pomme", "banane", "orange", "fraise", "kiwi"];

console.log("Fruits:", fruits);
console.log("Nombre de fruits:", fruits.length);
console.log("Premier fruit:", fruits[0]);
console.log("Dernier fruit:", fruits[fruits.length - 1]);`,
                    tests: [
                        { check: (code) => code.includes('[') && code.includes(']'), message: 'Créez un tableau' },
                        { check: (code) => code.includes('length'), message: 'Utilisez .length' },
                        { check: (code) => (code.match(/console\.log/g) || []).length >= 3, message: 'Affichez au moins 3 informations' }
                    ]
                },
                {
                    id: 'arr-2',
                    title: '➕ Méthodes Push et Pop',
                    difficulty: 'moyen',
                    points: 20,
                    description: 'Créez un tableau vide `nombres`. Ajoutez 3 nombres avec push(), puis retirez le dernier avec pop(). Affichez le tableau après chaque opération.',
                    hint: 'Utilisez .push() et .pop()',
                    starterCode: 'let nombres = [];\n\n// Votre code ici\n',
                    solution: `let nombres = [];

nombres.push(10);
console.log("Après push(10):", nombres);

nombres.push(20);
console.log("Après push(20):", nombres);

nombres.push(30);
console.log("Après push(30):", nombres);

nombres.pop();
console.log("Après pop():", nombres);`,
                    tests: [
                        { check: (code) => code.includes('push'), message: 'Utilisez .push()' },
                        { check: (code) => code.includes('pop'), message: 'Utilisez .pop()' },
                        { check: (code) => (code.match(/console\.log/g) || []).length >= 3, message: 'Affichez les résultats' }
                    ]
                },
                {
                    id: 'arr-3',
                    title: '🔄 Boucle For sur Tableau',
                    difficulty: 'moyen',
                    points: 25,
                    description: 'Créez un tableau `notes = [12, 15, 8, 17, 10]`. Utilisez une boucle for pour afficher chaque note avec son index.',
                    hint: 'Utilisez for(let i = 0; i < array.length; i++)',
                    starterCode: 'let notes = [12, 15, 8, 17, 10];\n\n// Votre boucle ici\n',
                    solution: `let notes = [12, 15, 8, 17, 10];

for (let i = 0; i < notes.length; i++) {
    console.log(\`Note \${i + 1}: \${notes[i]}\`);
}`,
                    tests: [
                        { check: (code) => code.includes('for'), message: 'Utilisez une boucle for' },
                        { check: (code) => code.includes('length'), message: 'Utilisez .length' },
                        { check: (code) => code.includes('[i]'), message: 'Accédez aux éléments avec [i]' }
                    ]
                }
            ],
            objects: [
                {
                    id: 'obj-1',
                    title: '📦 Créer un Objet',
                    difficulty: 'facile',
                    points: 15,
                    description: 'Créez un objet `personne` avec les propriétés : nom, age, ville. Affichez chaque propriété.',
                    hint: 'Utilisez {} pour créer l\'objet',
                    starterCode: '// Créez votre objet ici\n',
                    solution: `let personne = {
    nom: "Alice",
    age: 25,
    ville: "Paris"
};

console.log("Nom:", personne.nom);
console.log("Âge:", personne.age);
console.log("Ville:", personne.ville);`,
                    tests: [
                        { check: (code) => code.includes('{') && code.includes('}'), message: 'Créez un objet' },
                        { check: (code) => code.includes(':'), message: 'Utilisez la syntaxe clé: valeur' },
                        { check: (code) => code.includes('.'), message: 'Accédez aux propriétés avec le point' }
                    ]
                },
                {
                    id: 'obj-2',
                    title: '🎮 Objet avec Méthode',
                    difficulty: 'moyen',
                    points: 25,
                    description: 'Créez un objet `voiture` avec marque, modele, et une méthode `demarrer()` qui affiche "La voiture démarre !". Appelez la méthode.',
                    hint: 'Une méthode est une fonction dans un objet',
                    starterCode: '// Créez votre objet ici\n',
                    solution: `let voiture = {
    marque: "Renault",
    modele: "Clio",
    demarrer: function() {
        console.log("La voiture démarre !");
    }
};

console.log("Marque:", voiture.marque);
console.log("Modèle:", voiture.modele);
voiture.demarrer();`,
                    tests: [
                        { check: (code) => code.includes('function'), message: 'Créez une méthode (fonction)' },
                        { check: (code) => code.includes('demarrer'), message: 'Appelez la méthode demarrer()' }
                    ]
                }
            ],
            loops: [
                {
                    id: 'loop-1',
                    title: '🔢 Boucle While',
                    difficulty: 'moyen',
                    points: 20,
                    description: 'Utilisez une boucle while pour afficher les nombres de 1 à 5.',
                    hint: 'Initialisez i = 1, condition i <= 5, incrémentez i++',
                    starterCode: '// Votre boucle while ici\n',
                    solution: `let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}`,
                    tests: [
                        { check: (code) => code.includes('while'), message: 'Utilisez une boucle while' },
                        { check: (code) => code.includes('++') || code.includes('+='), message: 'Incrémentez la variable' }
                    ]
                },
                {
                    id: 'loop-2',
                    title: '⭐ Afficher des Étoiles',
                    difficulty: 'moyen',
                    points: 25,
                    description: 'Utilisez une boucle for pour afficher : * puis ** puis *** puis **** puis *****',
                    hint: 'Créez une variable string et ajoutez une étoile à chaque tour',
                    starterCode: '// Votre code ici\n',
                    solution: `let etoiles = "";

for (let i = 1; i <= 5; i++) {
    etoiles += "*";
    console.log(etoiles);
}`,
                    tests: [
                        { check: (code) => code.includes('for'), message: 'Utilisez une boucle for' },
                        { check: (code) => code.includes('*'), message: 'Utilisez le caractère *' },
                        { check: (code) => code.includes('+='), message: 'Ajoutez progressivement les étoiles' }
                    ]
                }
            ]
        };
    }

    getExercisesBySection(section) {
        return this.exercises[section] || [];
    }

    getUserScore(exerciseId) {
        return this.userScores[exerciseId] || { completed: false, attempts: 0, score: 0 };
    }

    saveScore(exerciseId, passed, points) {
        if (!this.userScores[exerciseId]) {
            this.userScores[exerciseId] = { completed: false, attempts: 0, score: 0 };
        }
        
        this.userScores[exerciseId].attempts++;
        
        if (passed) {
            this.userScores[exerciseId].completed = true;
            this.userScores[exerciseId].score = points;
        }
        
        localStorage.setItem('exerciseScores', JSON.stringify(this.userScores));
    }

    getTotalScore() {
        let total = 0;
        Object.values(this.userScores).forEach(score => {
            if (score.completed) {
                total += score.score;
            }
        });
        return total;
    }

    testCode(exercise, userCode) {
        const results = {
            passed: true,
            messages: [],
            output: ''
        };

        // Run basic tests
        exercise.tests.forEach(test => {
            const passed = test.check(userCode);
            results.messages.push({
                passed: passed,
                message: test.message
            });
            if (!passed) {
                results.passed = false;
            }
        });

        return results;
    }

    generateExerciseHTML(exercise, section) {
        const userScore = this.getUserScore(exercise.id);
        const difficultyColors = {
            'facile': '#4CAF50',
            'moyen': '#FF9800',
            'difficile': '#f44336'
        };

        return `
            <div class="exercise-card ${userScore.completed ? 'completed' : ''}" data-exercise-id="${exercise.id}">
                <div class="exercise-header">
                    <div class="exercise-title-row">
                        <h3>${exercise.title}</h3>
                        ${userScore.completed ? '<span class="exercise-badge completed">✅ Complété</span>' : ''}
                    </div>
                    <div class="exercise-meta">
                        <span class="exercise-difficulty" style="background: ${difficultyColors[exercise.difficulty]}">
                            ${exercise.difficulty}
                        </span>
                        <span class="exercise-points">🏆 ${exercise.points} pts</span>
                    </div>
                </div>

                <div class="exercise-description">
                    <p>${exercise.description}</p>
                    ${exercise.hint ? `<p class="exercise-hint">💡 <strong>Indice :</strong> ${exercise.hint}</p>` : ''}
                </div>

                <div class="exercise-stats">
                    <span>📊 Tentatives: ${userScore.attempts}</span>
                    ${userScore.completed ? `<span>⭐ Score: ${userScore.score} pts</span>` : ''}
                </div>

                <div class="exercise-editor">
                    <div class="editor-header">
                        <span>📝 Votre Code</span>
                        <div class="editor-actions">
                            <button class="btn-reset" onclick="exerciseSystem.resetExercise('${exercise.id}')">
                                <i class="fas fa-undo"></i> Réinitialiser
                            </button>
                            <button class="btn-run-exercise" onclick="exerciseSystem.runExercise('${exercise.id}', '${section}')">
                                <i class="fas fa-play"></i> Tester
                            </button>
                        </div>
                    </div>
                    <textarea class="exercise-code-editor" id="editor-${exercise.id}">${exercise.starterCode}</textarea>
                </div>

                <div class="exercise-output" id="output-${exercise.id}" style="display: none;">
                    <div class="output-header">📊 Résultats</div>
                    <div class="output-content" id="content-${exercise.id}"></div>
                </div>

                <div class="exercise-actions">
                    <button class="btn-solution" onclick="exerciseSystem.showSolution('${exercise.id}')">
                        <i class="fas fa-lightbulb"></i> Voir la Solution
                    </button>
                </div>

                <div class="exercise-solution" id="solution-${exercise.id}" style="display: none;">
                    <div class="solution-header">
                        <span>💡 Solution</span>
                        <button class="btn-close-solution" onclick="exerciseSystem.hideSolution('${exercise.id}')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <pre><code class="language-javascript">${exercise.solution}</code></pre>
                </div>
            </div>
        `;
    }

    generateExercisesPage(section) {
        const exercises = this.getExercisesBySection(section);
        const totalScore = this.getTotalScore();
        const sectionNames = {
            variables: 'Variables & Structures',
            strings: 'Strings',
            arrays: 'Arrays',
            objects: 'Objects',
            loops: 'Boucles'
        };

        let html = `
            <div class="exercises-container">
                <div class="exercises-header">
                    <h1>🎯 Exercices : ${sectionNames[section] || section}</h1>
                    <div class="total-score">
                        <span class="score-label">Score Total:</span>
                        <span class="score-value">${totalScore} points</span>
                    </div>
                </div>

                <div class="exercises-intro">
                    <p>Mettez en pratique vos connaissances avec ces exercices interactifs ! Écrivez votre code, testez-le, et voyez immédiatement si vous avez réussi.</p>
                </div>

                <div class="exercises-grid">
                    ${exercises.map(ex => this.generateExerciseHTML(ex, section)).join('')}
                </div>
            </div>
        `;

        return html;
    }

    runExercise(exerciseId, section) {
        const exercise = this.findExerciseById(exerciseId, section);
        if (!exercise) return;

        const codeEditor = document.getElementById(`editor-${exerciseId}`);
        const outputDiv = document.getElementById(`output-${exerciseId}`);
        const contentDiv = document.getElementById(`content-${exerciseId}`);

        const userCode = codeEditor.value;

        // Test the code
        const testResults = this.testCode(exercise, userCode);

        // Execute the code and capture output
        let consoleOutput = [];
        const originalLog = console.log;
        console.log = (...args) => {
            consoleOutput.push(args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
            originalLog(...args);
        };

        try {
            eval(userCode);
        } catch (error) {
            consoleOutput.push(`❌ Erreur: ${error.message}`);
            testResults.passed = false;
        }

        console.log = originalLog;

        // Display results
        outputDiv.style.display = 'block';
        
        let resultHTML = `
            <div class="test-results ${testResults.passed ? 'success' : 'error'}">
                <h4>${testResults.passed ? '✅ Tests Réussis !' : '❌ Tests Échoués'}</h4>
                <ul>
                    ${testResults.messages.map(msg => `
                        <li class="${msg.passed ? 'test-pass' : 'test-fail'}">
                            ${msg.passed ? '✓' : '✗'} ${msg.message}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;

        if (consoleOutput.length > 0) {
            resultHTML += `
                <div class="console-output">
                    <h4>📊 Console:</h4>
                    ${consoleOutput.map(line => `<div class="console-line">${line}</div>`).join('')}
                </div>
            `;
        }

        if (testResults.passed) {
            resultHTML += `
                <div class="success-message">
                    <h3>🎉 Bravo ! Vous avez gagné ${exercise.points} points !</h3>
                </div>
            `;
            this.saveScore(exerciseId, true, exercise.points);
            
            // Update the card to show completed
            const card = document.querySelector(`[data-exercise-id="${exerciseId}"]`);
            card.classList.add('completed');
            
            // Update total score display
            this.updateTotalScoreDisplay();
        } else {
            this.saveScore(exerciseId, false, 0);
        }

        contentDiv.innerHTML = resultHTML;
    }

    findExerciseById(exerciseId, section) {
        const exercises = this.getExercisesBySection(section);
        return exercises.find(ex => ex.id === exerciseId);
    }

    resetExercise(exerciseId) {
        const card = document.querySelector(`[data-exercise-id="${exerciseId}"]`);
        const editor = card.querySelector('.exercise-code-editor');
        const exercise = Object.values(this.exercises).flat().find(ex => ex.id === exerciseId);
        
        if (exercise) {
            editor.value = exercise.starterCode;
        }
        
        const outputDiv = card.querySelector('.exercise-output');
        if (outputDiv) {
            outputDiv.style.display = 'none';
        }
    }

    showSolution(exerciseId) {
        const solutionDiv = document.getElementById(`solution-${exerciseId}`);
        solutionDiv.style.display = 'block';
        
        // Highlight code
        const code = solutionDiv.querySelector('code');
        if (code && typeof Prism !== 'undefined') {
            Prism.highlightElement(code);
        }
    }

    hideSolution(exerciseId) {
        const solutionDiv = document.getElementById(`solution-${exerciseId}`);
        solutionDiv.style.display = 'none';
    }

    updateTotalScoreDisplay() {
        const totalScore = this.getTotalScore();
        const scoreValue = document.querySelector('.score-value');
        if (scoreValue) {
            scoreValue.textContent = `${totalScore} points`;
            scoreValue.style.animation = 'scoreUpdate 0.5s ease-out';
        }
    }
}

// Initialize exercise system
window.exerciseSystem = new ExerciseSystem();
