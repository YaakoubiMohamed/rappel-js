// ========================================
// PROJET FINAL : Système de Gestion d'Étudiants
// ========================================

// ❌ MAUVAISE SYNTAXE / BAD PRACTICES
// ====================================

// Problème 1 : Tableaux parallèles (non structurés)
var ids = [1, 2, 3];
var noms = ["Dubois", "Martin", "Lefebvre"];
var prenoms = ["Sophie", "Lucas", "Emma"];
var notes1 = [[15, 17], [12, 14], [18, 19]];
// ❌ Données déconnectées, risque de désynchronisation

// Problème 2 : Pas de structure d'école
var etudiants = [
    { id: 1, nom: "Dubois" }
];

function ajouterNote(idEtudiant, note) {
    // ❌ Fonction globale, pas d'encapsulation
    // Difficile de gérer plusieurs écoles
}

// Problème 3 : Calculs inefficaces et répétitifs
var ecole1 = {
    etudiants: [],
    calculerMoyenne: function(id) {
        // ❌ Code dupliqué, pas de réutilisation
        var etudiant = null;
        for (var i = 0; i < this.etudiants.length; i++) {
            if (this.etudiants[i].id === id) {
                etudiant = this.etudiants[i];
                break;
            }
        }
        // etc...
    }
};

// Problème 4 : Pas de validation
var ecole2 = {
    etudiants: [],
    ajouterEtudiant: function(id, nom) {
        // ❌ Pas de vérification
        this.etudiants.push({ id: id, nom: nom });
    }
};


// ✅ BONNES PRATIQUES / BEST PRACTICES
// =====================================

// 1. Version complète avec toutes les fonctionnalités
const ecole = {
    nom: "Collège Jean Moulin",
    adresse: "15 Rue de l'Éducation, 75001 Paris",
    etudiants: [],
    matieres: ['Mathématiques', 'Français', 'Histoire', 'Sciences', 'Anglais'],
    
    // Ajouter un étudiant
    ajouterEtudiant(id, nom, prenom, classe) {
        // Validation
        if (typeof id !== 'number' || id <= 0) {
            return { succes: false, message: "❌ ID invalide" };
        }
        if (typeof nom !== 'string' || nom.trim() === '') {
            return { succes: false, message: "❌ Nom invalide" };
        }
        if (typeof prenom !== 'string' || prenom.trim() === '') {
            return { succes: false, message: "❌ Prénom invalide" };
        }
        if (typeof classe !== 'string' || classe.trim() === '') {
            return { succes: false, message: "❌ Classe invalide" };
        }
        
        // Vérifier si l'ID existe déjà
        if (this.etudiants.some(e => e.id === id)) {
            return { succes: false, message: `❌ L'ID ${id} existe déjà` };
        }
        
        const etudiant = {
            id: id,
            nom: nom.trim(),
            prenom: prenom.trim(),
            classe: classe.trim(),
            notes: [],
            dateInscription: new Date(),
            actif: true
        };
        
        this.etudiants.push(etudiant);
        
        return {
            succes: true,
            message: `✅ ${prenom} ${nom} a été ajouté(e) à la classe ${classe}`,
            etudiant: etudiant
        };
    },
    
    // Ajouter une note
    ajouterNote(idEtudiant, note, matiere = null, coefficient = 1) {
        // Validation
        if (typeof idEtudiant !== 'number') {
            return { succes: false, message: "❌ ID étudiant invalide" };
        }
        if (typeof note !== 'number' || note < 0 || note > 20) {
            return { succes: false, message: "❌ Note invalide (0-20)" };
        }
        if (typeof coefficient !== 'number' || coefficient <= 0) {
            return { succes: false, message: "❌ Coefficient invalide" };
        }
        
        // Trouver l'étudiant
        const etudiant = this.etudiants.find(e => e.id === idEtudiant);
        
        if (!etudiant) {
            return { succes: false, message: "❌ Étudiant non trouvé" };
        }
        
        if (!etudiant.actif) {
            return { succes: false, message: "❌ Étudiant inactif" };
        }
        
        const noteObj = {
            valeur: note,
            matiere: matiere || 'Général',
            coefficient: coefficient,
            date: new Date(),
            id: Date.now()
        };
        
        etudiant.notes.push(noteObj);
        
        return {
            succes: true,
            message: `✅ Note de ${note}/20 ajoutée pour ${etudiant.prenom} ${etudiant.nom}`,
            note: noteObj
        };
    },
    
    // Calculer la moyenne d'un étudiant
    calculerMoyenne(idEtudiant, matiere = null) {
        const etudiant = this.etudiants.find(e => e.id === idEtudiant);
        
        if (!etudiant) {
            return { succes: false, message: "❌ Étudiant non trouvé" };
        }
        
        let notesFiltrees = etudiant.notes;
        
        // Filtrer par matière si spécifiée
        if (matiere) {
            notesFiltrees = etudiant.notes.filter(n => n.matiere === matiere);
        }
        
        if (notesFiltrees.length === 0) {
            return {
                succes: false,
                message: matiere 
                    ? `❌ Aucune note en ${matiere}` 
                    : "❌ Aucune note disponible"
            };
        }
        
        // Calculer la moyenne pondérée
        const sommeNotesPonderees = notesFiltrees.reduce((sum, n) => {
            return sum + (n.valeur * n.coefficient);
        }, 0);
        
        const sommeCoefficients = notesFiltrees.reduce((sum, n) => {
            return sum + n.coefficient;
        }, 0);
        
        const moyenne = sommeNotesPonderees / sommeCoefficients;
        
        return {
            succes: true,
            moyenne: parseFloat(moyenne.toFixed(2)),
            nombreNotes: notesFiltrees.length,
            matiere: matiere || 'Général'
        };
    },
    
    // Lister les étudiants
    listerEtudiants(filtreClasse = null) {
        let etudiants = this.etudiants.filter(e => e.actif);
        
        if (filtreClasse) {
            etudiants = etudiants.filter(e => e.classe === filtreClasse);
        }
        
        if (etudiants.length === 0) {
            return filtreClasse 
                ? `Aucun étudiant en ${filtreClasse}` 
                : "Aucun étudiant inscrit";
        }
        
        return etudiants.map(e => {
            const resultatMoyenne = this.calculerMoyenne(e.id);
            const moyenne = resultatMoyenne.succes 
                ? resultatMoyenne.moyenne 
                : 'N/A';
            
            return `${e.prenom} ${e.nom} (${e.classe}) - Moyenne: ${moyenne}`;
        }).join('\n');
    },
    
    // Obtenir le meilleur étudiant
    meilleurEtudiant(matiere = null) {
        if (this.etudiants.length === 0) {
            return { succes: false, message: "❌ Aucun étudiant" };
        }
        
        let meilleur = null;
        let meilleureMoyenne = -1;
        
        for (const etudiant of this.etudiants) {
            if (!etudiant.actif) continue;
            
            const resultat = this.calculerMoyenne(etudiant.id, matiere);
            
            if (resultat.succes && resultat.moyenne > meilleureMoyenne) {
                meilleureMoyenne = resultat.moyenne;
                meilleur = etudiant;
            }
        }
        
        if (!meilleur) {
            return {
                succes: false,
                message: matiere 
                    ? `❌ Aucune note en ${matiere}` 
                    : "❌ Aucune note enregistrée"
            };
        }
        
        return {
            succes: true,
            etudiant: meilleur,
            moyenne: meilleureMoyenne,
            matiere: matiere || 'Général',
            message: `🏆 ${meilleur.prenom} ${meilleur.nom} - Moyenne: ${meilleureMoyenne}/20`
        };
    },
    
    // Obtenir les statistiques de la classe
    obtenirStatistiques(classe = null) {
        let etudiants = this.etudiants.filter(e => e.actif);
        
        if (classe) {
            etudiants = etudiants.filter(e => e.classe === classe);
        }
        
        if (etudiants.length === 0) {
            return { succes: false, message: "❌ Aucun étudiant" };
        }
        
        const moyennes = [];
        
        etudiants.forEach(etudiant => {
            const resultat = this.calculerMoyenne(etudiant.id);
            if (resultat.succes) {
                moyennes.push(resultat.moyenne);
            }
        });
        
        if (moyennes.length === 0) {
            return { succes: false, message: "❌ Aucune note" };
        }
        
        const moyenneClasse = moyennes.reduce((a, b) => a + b, 0) / moyennes.length;
        const moyenneMin = Math.min(...moyennes);
        const moyenneMax = Math.max(...moyennes);
        
        return {
            succes: true,
            nombreEtudiants: etudiants.length,
            moyenneClasse: parseFloat(moyenneClasse.toFixed(2)),
            moyenneMin: moyenneMin,
            moyenneMax: moyenneMax,
            classe: classe || 'Toutes classes'
        };
    },
    
    // Obtenir le bulletin d'un étudiant
    obtenirBulletin(idEtudiant) {
        const etudiant = this.etudiants.find(e => e.id === idEtudiant);
        
        if (!etudiant) {
            return { succes: false, message: "❌ Étudiant non trouvé" };
        }
        
        const bulletin = {
            etudiant: {
                nom: `${etudiant.prenom} ${etudiant.nom}`,
                classe: etudiant.classe,
                id: etudiant.id
            },
            notes: {},
            moyenneGenerale: null
        };
        
        // Grouper les notes par matière
        const notesParMatiere = {};
        
        etudiant.notes.forEach(note => {
            if (!notesParMatiere[note.matiere]) {
                notesParMatiere[note.matiere] = [];
            }
            notesParMatiere[note.matiere].push(note);
        });
        
        // Calculer la moyenne par matière
        for (const matiere in notesParMatiere) {
            const resultat = this.calculerMoyenne(idEtudiant, matiere);
            if (resultat.succes) {
                bulletin.notes[matiere] = {
                    moyenne: resultat.moyenne,
                    nombreNotes: resultat.nombreNotes
                };
            }
        }
        
        // Moyenne générale
        const resultatGeneral = this.calculerMoyenne(idEtudiant);
        if (resultatGeneral.succes) {
            bulletin.moyenneGenerale = resultatGeneral.moyenne;
        }
        
        return { succes: true, bulletin: bulletin };
    },
    
    // Afficher le bulletin formaté
    afficherBulletin(idEtudiant) {
        const resultat = this.obtenirBulletin(idEtudiant);
        
        if (!resultat.succes) {
            console.log(resultat.message);
            return;
        }
        
        const { bulletin } = resultat;
        
        console.log("\n" + "═".repeat(70));
        console.log(`📄 BULLETIN SCOLAIRE - ${this.nom}`);
        console.log("═".repeat(70));
        console.log(`Élève : ${bulletin.etudiant.nom}`);
        console.log(`Classe : ${bulletin.etudiant.classe}`);
        console.log(`ID : ${bulletin.etudiant.id}`);
        console.log("═".repeat(70));
        console.log("NOTES PAR MATIÈRE");
        console.log("-".repeat(70));
        
        if (Object.keys(bulletin.notes).length === 0) {
            console.log("Aucune note");
        } else {
            for (const matiere in bulletin.notes) {
                const { moyenne, nombreNotes } = bulletin.notes[matiere];
                console.log(`${matiere.padEnd(20)} : ${moyenne}/20 (${nombreNotes} note(s))`);
            }
        }
        
        console.log("-".repeat(70));
        
        if (bulletin.moyenneGenerale !== null) {
            console.log(`MOYENNE GÉNÉRALE : ${bulletin.moyenneGenerale}/20`);
            
            // Appréciation
            let appreciation = "";
            if (bulletin.moyenneGenerale >= 16) {
                appreciation = "🌟 Excellent travail !";
            } else if (bulletin.moyenneGenerale >= 14) {
                appreciation = "✨ Très bon travail";
            } else if (bulletin.moyenneGenerale >= 12) {
                appreciation = "👍 Bon travail";
            } else if (bulletin.moyenneGenerale >= 10) {
                appreciation = "📊 Travail satisfaisant";
            } else {
                appreciation = "💪 Peut mieux faire";
            }
            
            console.log(`Appréciation : ${appreciation}`);
        }
        
        console.log("═".repeat(70) + "\n");
    },
    
    // Rechercher des étudiants
    rechercherEtudiants(critere, valeur) {
        if (!critere || !valeur) {
            return [];
        }
        
        return this.etudiants.filter(e => {
            if (critere === 'nom') {
                return e.nom.toLowerCase().includes(valeur.toLowerCase());
            } else if (critere === 'prenom') {
                return e.prenom.toLowerCase().includes(valeur.toLowerCase());
            } else if (critere === 'classe') {
                return e.classe.toLowerCase() === valeur.toLowerCase();
            }
            return false;
        });
    },
    
    // Désactiver un étudiant (départ)
    desactiverEtudiant(idEtudiant) {
        const etudiant = this.etudiants.find(e => e.id === idEtudiant);
        
        if (!etudiant) {
            return { succes: false, message: "❌ Étudiant non trouvé" };
        }
        
        etudiant.actif = false;
        etudiant.dateDepart = new Date();
        
        return {
            succes: true,
            message: `✅ ${etudiant.prenom} ${etudiant.nom} désactivé(e)`
        };
    }
};


// DÉMONSTRATION COMPLÈTE
// =======================

console.log("═".repeat(70));
console.log("🏫 SYSTÈME DE GESTION D'ÉTUDIANTS");
console.log("═".repeat(70));
console.log(`École : ${ecole.nom}`);
console.log(`Adresse : ${ecole.adresse}`);
console.log("═".repeat(70));

// Ajouter des étudiants
console.log("\n📝 INSCRIPTION DES ÉTUDIANTS\n");
console.log(ecole.ajouterEtudiant(1, "Dubois", "Sophie", "3ème A").message);
console.log(ecole.ajouterEtudiant(2, "Martin", "Lucas", "3ème A").message);
console.log(ecole.ajouterEtudiant(3, "Lefebvre", "Emma", "3ème B").message);
console.log(ecole.ajouterEtudiant(4, "Bernard", "Thomas", "3ème A").message);

// Ajouter des notes
console.log("\n📊 AJOUT DES NOTES\n");

// Sophie
console.log(ecole.ajouterNote(1, 15, "Mathématiques", 2).message);
console.log(ecole.ajouterNote(1, 17, "Mathématiques", 2).message);
console.log(ecole.ajouterNote(1, 16, "Français", 1).message);
console.log(ecole.ajouterNote(1, 14, "Histoire", 1).message);

// Lucas
console.log(ecole.ajouterNote(2, 12, "Mathématiques", 2).message);
console.log(ecole.ajouterNote(2, 14, "Mathématiques", 2).message);
console.log(ecole.ajouterNote(2, 13, "Français", 1).message);

// Emma
console.log(ecole.ajouterNote(3, 18, "Mathématiques", 2).message);
console.log(ecole.ajouterNote(3, 19, "Mathématiques", 2).message);
console.log(ecole.ajouterNote(3, 17, "Français", 1).message);
console.log(ecole.ajouterNote(3, 16, "Histoire", 1).message);

// Thomas
console.log(ecole.ajouterNote(4, 16, "Mathématiques", 2).message);
console.log(ecole.ajouterNote(4, 15, "Français", 1).message);

// Liste des étudiants
console.log("\n👥 LISTE DES ÉTUDIANTS\n");
console.log(ecole.listerEtudiants());

// Moyennes
console.log("\n📈 MOYENNES INDIVIDUELLES\n");
const resultSophie = ecole.calculerMoyenne(1);
console.log(`Sophie : ${resultSophie.moyenne}/20`);

const resultLucas = ecole.calculerMoyenne(2);
console.log(`Lucas : ${resultLucas.moyenne}/20`);

const resultEmma = ecole.calculerMoyenne(3);
console.log(`Emma : ${resultEmma.moyenne}/20`);

// Meilleur étudiant
console.log("\n🏆 MEILLEUR ÉTUDIANT\n");
console.log(ecole.meilleurEtudiant().message);

// Meilleur en Mathématiques
console.log("\n🔢 MEILLEUR EN MATHÉMATIQUES\n");
console.log(ecole.meilleurEtudiant("Mathématiques").message);

// Statistiques
console.log("\n📊 STATISTIQUES DE LA CLASSE 3ème A\n");
const stats = ecole.obtenirStatistiques("3ème A");
if (stats.succes) {
    console.log(`Nombre d'étudiants : ${stats.nombreEtudiants}`);
    console.log(`Moyenne de classe : ${stats.moyenneClasse}/20`);
    console.log(`Moyenne minimale : ${stats.moyenneMin}/20`);
    console.log(`Moyenne maximale : ${stats.moyenneMax}/20`);
}

// Bulletins
ecole.afficherBulletin(1); // Sophie
ecole.afficherBulletin(3); // Emma

console.log("\n✅ BONNES PRATIQUES ILLUSTRÉES :");
console.log("1. Structure hiérarchique complète (école → étudiants → notes)");
console.log("2. Validation exhaustive de toutes les entrées");
console.log("3. Gestion des coefficients pour les moyennes pondérées");
console.log("4. Calculs par matière et général");
console.log("5. Statistiques et classements");
console.log("6. Système de bulletins formatés");
console.log("7. Recherche et filtrage flexibles");
console.log("8. Gestion du cycle de vie (actif/inactif)");
console.log("9. Retours d'information détaillés");
console.log("10. Interface utilisateur claire et structurée");
