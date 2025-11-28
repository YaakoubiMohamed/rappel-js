// ========================================
// EXERCICE 7 : Bibliothèque de Livres
// ========================================

// ❌ MAUVAISE SYNTAXE / BAD PRACTICES
// ====================================

// Problème 1 : Structure plate, pas de tableaux
var biblio1 = {
    nom: "Bibliothèque",
    livre1titre: "1984",
    livre1auteur: "George Orwell",
    livre2titre: "Brave New World",
    livre2auteur: "Aldous Huxley"
};
// ❌ Impossible à scale, difficile à parcourir

// Problème 2 : Tableaux de valeurs séparées (non structurées)
var biblio2 = {
    titres: ["1984", "Brave New World"],
    auteurs: ["George Orwell", "Aldous Huxley"]
};
// ❌ Les données sont déconnectées, risque de désynchronisation

// Problème 3 : Pas de validation
var biblio3 = {
    livres: [],
    ajouterLivre: function(livre) {
        // ❌ Pas de vérification
        this.livres.push(livre);
    }
};

biblio3.ajouterLivre("pas un objet"); // ❌ Accepté !
biblio3.ajouterLivre({ titre: "" }); // ❌ Données incomplètes acceptées

// Problème 4 : Méthodes qui modifient les tableaux directement sans contrôle
var biblio4 = {
    livres: [
        { titre: "1984", disponible: true }
    ],
    emprunter: function(titre) {
        // ❌ Modification directe sans vérification
        this.livres[0].disponible = false;
    }
};

// Problème 5 : Utilisation de boucles for au lieu de méthodes d'array
var biblio5 = {
    livres: [
        { titre: "1984", auteur: "George Orwell" }
    ],
    rechercherParAuteur: function(auteur) {
        // ❌ Verbeux et sujet aux erreurs
        var resultats = [];
        for (var i = 0; i < this.livres.length; i++) {
            if (this.livres[i].auteur === auteur) {
                resultats.push(this.livres[i]);
            }
        }
        return resultats;
    }
};


// ✅ BONNES PRATIQUES / BEST PRACTICES
// =====================================

// 1. Structure propre avec validation
const bibliothequeBase = {
    nom: "Bibliothèque Municipale",
    livres: [
        { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
        { titre: "Le Meilleur des mondes", auteur: "Aldous Huxley", annee: 1932, disponible: true },
        { titre: "La Ferme des animaux", auteur: "George Orwell", annee: 1945, disponible: false }
    ],
    
    rechercherParAuteur(nomAuteur) {
        if (!nomAuteur || typeof nomAuteur !== 'string') {
            return [];
        }
        
        return this.livres.filter(livre => 
            livre.auteur.toLowerCase() === nomAuteur.toLowerCase()
        );
    },
    
    emprunter(titre) {
        if (!titre || typeof titre !== 'string') {
            return "❌ Titre invalide";
        }
        
        const livre = this.livres.find(l => 
            l.titre.toLowerCase() === titre.toLowerCase()
        );
        
        if (!livre) {
            return `❌ Livre "${titre}" non trouvé`;
        }
        
        if (!livre.disponible) {
            return `❌ "${titre}" est déjà emprunté`;
        }
        
        livre.disponible = false;
        return `✅ Vous avez emprunté : ${titre}`;
    },
    
    livresDisponibles() {
        return this.livres.filter(livre => livre.disponible).length;
    }
};

console.log("✅ Structure de base :");
console.log(bibliothequeBase.rechercherParAuteur("George Orwell"));
console.log(bibliothequeBase.emprunter("1984"));
console.log("Livres disponibles :", bibliothequeBase.livresDisponibles());

// 2. Version complète avec toutes les fonctionnalités
let phrase = " Bonjour tout le monde ";
const bibliothequeComplete = {
    nom: "Bibliothèque Municipale",
    adresse: "12 Rue de la République, 75001 Paris",
    livres: [],
    emprunts: [], // Historique des emprunts
    
    // Ajouter un livre avec validation
    ajouterLivre(titre, auteur, annee, isbn = null) {
        // Validation
        if (!titre || typeof titre !== 'string' || titre.trim() === '') {
            // !titre 
            return { succes: false, message: "❌ Titre invalide" };
        }
        if (!auteur || typeof auteur !== 'string' || auteur.trim() === '') {
            return { succes: false, message: "❌ Auteur invalide" };
        }
        if (typeof annee !== 'number' || annee < 0 || annee > new Date().getFullYear()) {
            return { succes: false, message: "❌ Année invalide" };
        }
        
        // Vérifier si le livre existe déjà
        const existe = this.livres.some(l => 
            l.titre.toLowerCase() === titre.toLowerCase() && 
            l.auteur.toLowerCase() === auteur.toLowerCase()
        );
        
        if (existe) {
            return { succes: false, message: "⚠️  Ce livre existe déjà" };
        }
        
        const livre = {
            id: Date.now(),
            titre: titre.trim(),
            auteur: auteur.trim(),
            annee: annee,
            isbn: isbn,
            disponible: true,
            dateAjout: new Date(),
            nombreEmprunts: 0
        };
        
        this.livres.push(livre);
        return { 
            succes: true, 
            message: `✅ "${titre}" ajouté à la bibliothèque`,
            livre: livre
        };
    },
    
    // Rechercher par auteur
    rechercherParAuteur(nomAuteur) {
        if (!nomAuteur || typeof nomAuteur !== 'string') {
            return [];
        }
        
        return this.livres.filter(livre => 
            livre.auteur.toLowerCase().includes(nomAuteur.toLowerCase())
        );
    },
    
    // Rechercher par titre
    rechercherParTitre(titre) {
        if (!titre || typeof titre !== 'string') {
            return [];
        }
        
        return this.livres.filter(livre => 
            livre.titre.toLowerCase().includes(titre.toLowerCase())
        );
    },
    
    // Rechercher par année
    rechercherParAnnee(annee) {
        if (typeof annee !== 'number') {
            return [];
        }
        
        return this.livres.filter(livre => livre.annee === annee);
    },
    
    // Emprunter un livre
    emprunter(titre, emprunteur) {
        if (!titre || typeof titre !== 'string') {
            return { succes: false, message: "❌ Titre invalide" };
        }
        if (!emprunteur || typeof emprunteur !== 'string') {
            return { succes: false, message: "❌ Nom de l'emprunteur requis" };
        }
        
        const livre = this.livres.find(l => 
            l.titre.toLowerCase() === titre.toLowerCase()
        );
        
        if (!livre) {
            return { succes: false, message: `❌ Livre "${titre}" non trouvé` };
        }
        
        if (!livre.disponible) {
            return { 
                succes: false, 
                message: `❌ "${titre}" est déjà emprunté` 
            };
        }
        
        // Enregistrer l'emprunt
        livre.disponible = false;
        livre.nombreEmprunts++;
        
        const emprunt = {
            id: Date.now(),
            livreId: livre.id,
            titre: livre.titre,
            emprunteur: emprunteur,
            dateEmprunt: new Date(),
            dateRetourPrevue: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 jours
            dateRetour: null,
            actif: true
        };
        
        this.emprunts.push(emprunt);
        
        return { 
            succes: true, 
            message: `✅ "${titre}" emprunté par ${emprunteur}`,
            dateRetourPrevue: emprunt.dateRetourPrevue
        };
    },
    
    // Retourner un livre
    retourner(titre) {
        if (!titre || typeof titre !== 'string') {
            return { succes: false, message: "❌ Titre invalide" };
        }
        
        const livre = this.livres.find(l => 
            l.titre.toLowerCase() === titre.toLowerCase()
        );
        
        if (!livre) {
            return { succes: false, message: `❌ Livre "${titre}" non trouvé` };
        }
        
        if (livre.disponible) {
            return { succes: false, message: `⚠️  "${titre}" n'était pas emprunté` };
        }
        
        // Trouver l'emprunt actif
        const emprunt = this.emprunts.find(e => 
            e.livreId === livre.id && e.actif
        );
        
        if (emprunt) {
            emprunt.dateRetour = new Date();
            emprunt.actif = false;
        }
        
        livre.disponible = true;
        
        return { 
            succes: true, 
            message: `✅ "${titre}" retourné avec succès` 
        };
    },
    
    // Obtenir le nombre de livres disponibles
    livresDisponibles() {
        return this.livres.filter(livre => livre.disponible).length;
    },
    
    // Obtenir tous les livres disponibles
    obtenirLivresDisponibles() {
        return this.livres.filter(livre => livre.disponible);
    },
    
    // Obtenir les livres empruntés
    obtenirLivresEmpruntes() {
        return this.livres.filter(livre => !livre.disponible);
    },
    
    // Statistiques
    obtenirStatistiques() {
        return {
            totalLivres: this.livres.length,
            disponibles: this.livresDisponibles(),
            empruntes: this.livres.length - this.livresDisponibles(),
            auteurs: [...new Set(this.livres.map(l => l.auteur))].length,
            livrePopulaire: this.obtenirLivrePlusPopulaire()
        };
    },
    
    // Livre le plus emprunté
    obtenirLivrePlusPopulaire() {
        if (this.livres.length === 0) return null;
        
        return this.livres.reduce((prev, current) => 
            (current.nombreEmprunts > prev.nombreEmprunts) ? current : prev
        );
    },
    
    // Afficher le catalogue
    afficherCatalogue() {
        console.log("\n" + "═".repeat(80));
        console.log(`📚 CATALOGUE - ${this.nom}`);
        console.log("═".repeat(80));
        
        if (this.livres.length === 0) {
            console.log("Aucun livre dans la bibliothèque");
        } else {
            this.livres.forEach((livre, index) => {
                const statut = livre.disponible ? "✅ Disponible" : "❌ Emprunté";
                console.log(`\n${index + 1}. "${livre.titre}"`);
                console.log(`   Auteur : ${livre.auteur}`);
                console.log(`   Année : ${livre.annee}`);
                console.log(`   Statut : ${statut}`);
                console.log(`   Emprunts : ${livre.nombreEmprunts} fois`);
            });
        }
        
        console.log("\n" + "═".repeat(80));
    },
    
    // Afficher les emprunts actifs
    afficherEmpruntsActifs() {
        const empruntsActifs = this.emprunts.filter(e => e.actif);
        
        console.log("\n" + "═".repeat(80));
        console.log("📋 EMPRUNTS ACTIFS");
        console.log("═".repeat(80));
        
        if (empruntsActifs.length === 0) {
            console.log("Aucun emprunt en cours");
        } else {
            empruntsActifs.forEach((emprunt, index) => {
                console.log(`\n${index + 1}. "${emprunt.titre}"`);
                console.log(`   Emprunteur : ${emprunt.emprunteur}`);
                console.log(`   Date d'emprunt : ${emprunt.dateEmprunt.toLocaleDateString('fr-FR')}`);
                console.log(`   Retour prévu : ${emprunt.dateRetourPrevue.toLocaleDateString('fr-FR')}`);
                
                // Vérifier si en retard
                if (new Date() > emprunt.dateRetourPrevue) {
                    const joursRetard = Math.floor((new Date() - emprunt.dateRetourPrevue) / (24 * 60 * 60 * 1000));
                    console.log(`   ⚠️  EN RETARD de ${joursRetard} jour(s)`);
                }
            });
        }
        
        console.log("\n" + "═".repeat(80));
    }
};

console.log(bibliothequeComplete.ajouterLivre(null, "Antoine de Saint-Exupéry", 1943));



// // 3. Version avec classe ES6
// class Bibliotheque {
//     #livres;
//     #emprunts;
    
//     constructor(nom, adresse) {
//         this.nom = nom;
//         this.adresse = adresse;
//         this.#livres = [];
//         this.#emprunts = [];
//         this.dateCreation = new Date();
//     }
    
//     ajouterLivre(titre, auteur, annee, options = {}) {
//         const livre = {
//             id: Date.now(),
//             titre: titre.trim(),
//             auteur: auteur.trim(),
//             annee: annee,
//             isbn: options.isbn || null,
//             genre: options.genre || null,
//             disponible: true,
//             dateAjout: new Date(),
//             nombreEmprunts: 0
//         };
        
//         this.#livres.push(livre);
//         return livre;
//     }
    
//     rechercherParAuteur(auteur) {
//         return this.#livres.filter(l => 
//             l.auteur.toLowerCase().includes(auteur.toLowerCase())
//         );
//     }
    
//     emprunter(titre, emprunteur) {
//         const livre = this.#livres.find(l => 
//             l.titre.toLowerCase() === titre.toLowerCase()
//         );
        
//         if (!livre) throw new Error("Livre non trouvé");
//         if (!livre.disponible) throw new Error("Livre déjà emprunté");
        
//         livre.disponible = false;
//         livre.nombreEmprunts++;
        
//         const emprunt = {
//             id: Date.now(),
//             livreId: livre.id,
//             titre: livre.titre,
//             emprunteur: emprunteur,
//             dateEmprunt: new Date(),
//             dateRetourPrevue: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
//             dateRetour: null,
//             actif: true
//         };
        
//         this.#emprunts.push(emprunt);
//         return emprunt;
//     }
    
//     retourner(titre) {
//         const livre = this.#livres.find(l => 
//             l.titre.toLowerCase() === titre.toLowerCase()
//         );
        
//         if (!livre) throw new Error("Livre non trouvé");
//         if (livre.disponible) throw new Error("Livre n'était pas emprunté");
        
//         const emprunt = this.#emprunts.find(e => 
//             e.livreId === livre.id && e.actif
//         );
        
//         if (emprunt) {
//             emprunt.dateRetour = new Date();
//             emprunt.actif = false;
//         }
        
//         livre.disponible = true;
//         return livre;
//     }
    
//     get livresDisponibles() {
//         return this.#livres.filter(l => l.disponible).length;
//     }
    
//     get totalLivres() {
//         return this.#livres.length;
//     }
    
//     get livres() {
//         return [...this.#livres]; // Copie pour protection
//     }
// }


// // DÉMONSTRATION COMPLÈTE
// // =======================

// console.log("\n\n=== EXERCICE 7 : Bibliothèque de Livres ===\n");

// // Initialisation
// const resultat1 = bibliothequeComplete.ajouterLivre("1984", "George Orwell", 1949);
// console.log(resultat1.message);

// const resultat2 = bibliothequeComplete.ajouterLivre("Le Meilleur des mondes", "Aldous Huxley", 1932);
// console.log(resultat2.message);

// const resultat3 = bibliothequeComplete.ajouterLivre("La Ferme des animaux", "George Orwell", 1945);
// console.log(resultat3.message);

// // Afficher le catalogue
// bibliothequeComplete.afficherCatalogue();

// // Recherche par auteur
// console.log("\n🔍 Recherche par auteur 'George Orwell' :");
// const livresOrwell = bibliothequeComplete.rechercherParAuteur("George Orwell");
// livresOrwell.forEach(livre => {
//     console.log(`   - ${livre.titre} (${livre.annee})`);
// });

// // Emprunter un livre
// console.log("\n📤 Emprunts :");
// console.log(bibliothequeComplete.emprunter("1984", "Alice Dupont").message);
// console.log(bibliothequeComplete.emprunter("La Ferme des animaux", "Bob Martin").message);

// // Afficher les emprunts actifs
// bibliothequeComplete.afficherEmpruntsActifs();

// // Statistiques
// console.log("\n📊 Statistiques :");
// const stats = bibliothequeComplete.obtenirStatistiques();
// console.log(`Total de livres : ${stats.totalLivres}`);
// console.log(`Disponibles : ${stats.disponibles}`);
// console.log(`Empruntés : ${stats.empruntes}`);
// console.log(`Nombre d'auteurs : ${stats.auteurs}`);

// // Retour d'un livre
// console.log("\n📥 Retour :");
// console.log(bibliothequeComplete.retourner("1984").message);

// console.log("\n✅ Bonnes pratiques illustrées :");
// console.log("1. Structure de données complexe avec tableaux d'objets");
// console.log("2. Validation complète des entrées");
// console.log("3. Méthodes de recherche avec filter/find");
// console.log("4. Gestion des emprunts avec historique");
// console.log("5. Statistiques et rapports");
// console.log("6. Retours d'information détaillés");
// console.log("7. Encapsulation avec propriétés privées");
