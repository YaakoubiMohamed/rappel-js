// ========================================
// EXERCICE 1 : Création d'un Objet Livre
// ========================================

// ❌ MAUVAISE SYNTAXE / BAD PRACTICES
// ====================================

// Problème 1 : Utilisation de var (obsolète)
var livre1 = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

// Problème 2 : Variables séparées au lieu d'un objet
var titreLivre = "Le Petit Prince";
var auteurLivre = "Antoine de Saint-Exupéry";
var pagesLivre = 96;

// Problème 3 : Objets créés avec new Object() (verbeux et dépassé)
var livre2 = new Object();
livre2.titre = "Le Petit Prince";
livre2.auteur = "Antoine de Saint-Exupéry";
livre2.pages = 96;

// Problème 4 : Nommage incohérent et peu descriptif
var l = {
    t: "Le Petit Prince",
    a: "Antoine de Saint-Exupéry",
    p: 96
};

// Problème 5 : Pas de validation ou de cohérence des types
var livre3 = {
    titre: 123,  // ❌ Devrait être une string
    auteur: true, // ❌ Devrait être une string
    pages: "96"   // ❌ Devrait être un number
};


// ✅ BONNES PRATIQUES / BEST PRACTICES
// =====================================

// 1. Utiliser const pour les objets (empêche la réassignation)
const livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

// 2. Nommage descriptif et cohérent (camelCase en JS)
const livreComplet = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96,
    isbn: "978-2070612758",
    datePublication: 1943
};

// 3. Types de données appropriés
const livreBienType = {
    titre: "Le Petit Prince",              // string
    auteur: "Antoine de Saint-Exupéry",    // string
    pages: 96,                             // number
    estDisponible: true,                   // boolean
    chapitres: 27,                         // number
    langueOriginale: "français"            // string
};

// 4. Structure organisée et évolutive
const livreAvecMetadonnees = {
    // Informations de base
    titre: "Le Petit Prince",
    sousTitre: null,  // Utiliser null si pas de valeur
    
    // Informations sur l'auteur
    auteur: "Antoine de Saint-Exupéry",
    
    // Détails physiques
    pages: 96,
    format: "Broché",
    
    // Métadonnées
    isbn: "978-2070612758",
    editeur: "Gallimard",
    datePublication: new Date("1943-04-06"),
    
    // État
    estDisponible: true
};

// 5. Utilisation de commentaires pour la documentation
/**
 * Représente un livre dans la bibliothèque
 * @property {string} titre - Le titre du livre
 * @property {string} auteur - Le nom de l'auteur
 * @property {number} pages - Le nombre de pages
 */
const livreDocumente = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

// 6. Création avec valeurs par défaut
const creerLivre = (titre, auteur, pages = 0) => {
    return {
        titre: titre || "Titre inconnu",
        auteur: auteur || "Auteur inconnu",
        pages: pages,
        dateAjout: new Date(),
        id: Date.now()  // ID unique simple
    };
};

const nouveauLivre = creerLivre("Le Petit Prince", "Antoine de Saint-Exupéry", 96);

// 7. Validation des données
const creerLivreSecurise = (titre, auteur, pages) => {
    // Validation
    if (typeof titre !== 'string' || titre.trim() === '') {
        throw new Error("Le titre doit être une chaîne non vide");
    }
    if (typeof auteur !== 'string' || auteur.trim() === '') {
        throw new Error("L'auteur doit être une chaîne non vide");
    }
    if (typeof pages !== 'number' || pages < 0) {
        throw new Error("Le nombre de pages doit être un nombre positif");
    }
    
    return {
        titre: titre.trim(),
        auteur: auteur.trim(),
        pages: pages
    };
};


// DÉMONSTRATION
// =============

console.log("=== EXERCICE 1 : Création d'un Objet Livre ===\n");

// Affichage du livre
console.log("📚 Livre créé :");
console.log(livre);
console.log("\n📖 Titre du livre :", livre.titre);
console.log("✍️  Auteur :", livre.auteur);
console.log("📄 Nombre de pages :", livre.pages);

// Exemple avec fonction factory
console.log("\n📚 Livre créé avec fonction factory :");
console.log(nouveauLivre);

// Comparaison des approches
console.log("\n⚠️  Problèmes à éviter :");
console.log("- Variables séparées difficiles à gérer");
console.log("- Types incohérents créent des bugs");
console.log("- Nommage peu clair rend le code illisible");

console.log("\n✅ Avantages des bonnes pratiques :");
console.log("- Code maintenable et lisible");
console.log("- Types cohérents et prévisibles");
console.log("- Structure évolutive");
