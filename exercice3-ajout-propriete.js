// ========================================
// EXERCICE 3 : Ajout de Propriété
// ========================================

// ❌ MAUVAISE SYNTAXE / BAD PRACTICES
// ====================================

// Problème 1 : Ajouter des propriétés sans structure cohérente
var livre1 = {
    titre: "Le Petit Prince",
    pages: 96
};

livre1.genre = "Conte philosophique";
livre1.Genre = "Fiction";  // ❌ Incohérence de casse
livre1.GENRE = "Littérature"; // ❌ Plusieurs versions de la même propriété
console.log("❌ Propriétés incohérentes :", livre1);

// Problème 2 : Ajouter des propriétés avec des noms invalides (nécessite bracket notation)
let livre2 = {
    titre: "Le Petit Prince"
};

livre2["nom du genre"] = "Conte"; // ❌ Espaces dans les noms de propriétés
livre2["date-publication"] = 1943; // ❌ Tirets créent confusion avec soustraction
livre2["@type"] = "livre"; // ❌ Caractères spéciaux

// Problème 3 : Types de données incohérents
let livre3 = {
    titre: "Le Petit Prince",
    pages: 96
};

livre3.genre = 123; // ❌ Devrait être string
livre3.auteurs = "Antoine"; // ❌ Devrait être un array si plusieurs
livre3.disponible = "oui"; // ❌ Devrait être boolean

// Problème 4 : Pollution de l'objet avec trop de propriétés
let livre4 = {
    titre: "Le Petit Prince"
};

// ❌ Ajout anarchique de propriétés
livre4.prop1 = "valeur1";
livre4.prop2 = "valeur2";
livre4.x = 10;
livre4.y = 20;
livre4.temp = "temporaire";
// L'objet devient illisible et difficile à maintenir

// Problème 5 : Pas de validation lors de l'ajout
let livre5 = {
    titre: "Le Petit Prince"
};

livre5.genre = ""; // ❌ Chaîne vide
livre5.prix = -50; // ❌ Prix négatif
livre5.isbn = 123; // ❌ ISBN doit être string


// ✅ BONNES PRATIQUES / BEST PRACTICES
// =====================================

// 1. Ajouter des propriétés avec noms cohérents (camelCase)
const livrePropre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

// ✅ Ajout cohérent
livrePropre.genre = "Conte philosophique";
livrePropre.datePublication = 1943;
livrePropre.editeur = "Gallimard";

console.log("✅ Propriétés cohérentes :", livrePropre);

// 2. Validation lors de l'ajout de propriétés
const ajouterGenre = (livre, genre) => {
    // Validation
    if (typeof genre !== 'string') {
        throw new TypeError("Le genre doit être une chaîne de caractères");
    }
    if (genre.trim() === '') {
        throw new Error("Le genre ne peut pas être vide");
    }
    
    livre.genre = genre.trim();
    return livre;
};

const livreValide = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

ajouterGenre(livreValide, "Conte philosophique");
console.log("✅ Genre ajouté avec validation :", livreValide.genre);

// 3. Méthode pour ajouter des propriétés
const livreAvecMethodes = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96,
    
    ajouterGenre(genre) {
        if (typeof genre === 'string' && genre.trim() !== '') {
            this.genre = genre.trim();
            console.log(`✅ Genre "${genre}" ajouté avec succès`);
            return true;
        }
        console.error("❌ Genre invalide");
        return false;
    },
    
    ajouterISBN(isbn) {
        // Validation basique du format ISBN
        const isbnRegex = /^(?:\d{10}|\d{13}|[\d-]{17})$/;
        if (typeof isbn === 'string' && isbnRegex.test(isbn.replace(/-/g, ''))) {
            this.isbn = isbn;
            return true;
        }
        console.error("❌ ISBN invalide");
        return false;
    },
    
    ajouterPrix(prix, devise = 'EUR') {
        if (typeof prix === 'number' && prix >= 0) {
            this.prix = {
                montant: prix,
                devise: devise
            };
            return true;
        }
        console.error("❌ Prix invalide");
        return false;
    }
};

livreAvecMethodes.ajouterGenre("Conte philosophique");
livreAvecMethodes.ajouterISBN("978-2070612758");
livreAvecMethodes.ajouterPrix(8.90);

console.log("\n📚 Livre avec méthodes d'ajout :", livreAvecMethodes);

// 4. Pattern Builder pour ajouts structurés
class LivreBuilder {
    constructor(titre, auteur) {
        this.livre = { titre, auteur };
    }
    
    avecPages(pages) {
        if (typeof pages === 'number' && pages > 0) {
            this.livre.pages = pages;
        }
        return this;
    }
    
    avecGenre(genre) {
        if (typeof genre === 'string' && genre.trim()) {
            this.livre.genre = genre.trim();
        }
        return this;
    }
    
    avecISBN(isbn) {
        if (typeof isbn === 'string' && isbn.trim()) {
            this.livre.isbn = isbn.trim();
        }
        return this;
    }
    
    avecDatePublication(annee) {
        if (typeof annee === 'number' && annee > 0) {
            this.livre.datePublication = annee;
        }
        return this;
    }
    
    build() {
        return this.livre;
    }
}

const livreComplet = new LivreBuilder("Le Petit Prince", "Antoine de Saint-Exupéry")
    .avecPages(96)
    .avecGenre("Conte philosophique")
    .avecISBN("978-2070612758")
    .avecDatePublication(1943)
    .build();

console.log("\n🔨 Livre construit avec Builder :", livreComplet);

// 5. Object.defineProperty pour propriétés contrôlées
const livreAvecDescripteurs = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

Object.defineProperty(livreAvecDescripteurs, 'genre', {
    value: "Conte philosophique",
    writable: true,      // Peut être modifié
    enumerable: true,    // Apparaît dans les boucles
    configurable: true   // Peut être supprimé
});

// Propriété avec getter/setter
Object.defineProperty(livreAvecDescripteurs, 'prix', {
    _value: 0,
    get() {
        return this._value;
    },
    set(nouveauPrix) {
        if (typeof nouveauPrix === 'number' && nouveauPrix >= 0) {
            this._value = nouveauPrix;
        } else {
            console.error("❌ Prix invalide");
        }
    },
    enumerable: true,
    configurable: true
});

livreAvecDescripteurs.prix = 8.90;
console.log("\n📊 Livre avec descripteurs :", livreAvecDescripteurs);

// 6. Spread operator pour ajout de multiples propriétés
const livreBase = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

const metadonnees = {
    genre: "Conte philosophique",
    isbn: "978-2070612758",
    editeur: "Gallimard",
    datePublication: 1943
};

const livreCompletSpread = {
    ...livreBase,
    ...metadonnees,
    dateAjout: new Date()
};

console.log("\n📦 Livre avec spread operator :", livreCompletSpread);

// 7. Factory function avec options
const creerLivre = (titre, auteur, options = {}) => {
    const livre = {
        titre,
        auteur,
        dateCreation: new Date()
    };
    
    // Ajout conditionnel de propriétés
    if (options.pages !== undefined) {
        livre.pages = options.pages;
    }
    if (options.genre) {
        livre.genre = options.genre;
    }
    if (options.isbn) {
        livre.isbn = options.isbn;
    }
    if (options.prix !== undefined) {
        livre.prix = {
            montant: options.prix,
            devise: options.devise || 'EUR'
        };
    }
    
    return livre;
};

const nouveauLivre = creerLivre("Le Petit Prince", "Antoine de Saint-Exupéry", {
    pages: 96,
    genre: "Conte philosophique",
    isbn: "978-2070612758",
    prix: 8.90
});

console.log("\n🏭 Livre créé avec factory :", nouveauLivre);

// 8. Vérifier l'existence avant d'ajouter
const ajouterProprieteSecurisee = (objet, cle, valeur) => {
    // Vérifier si la propriété existe déjà
    if (objet.hasOwnProperty(cle)) {
        console.warn(`⚠️  La propriété "${cle}" existe déjà. Valeur actuelle: ${objet[cle]}`);
        return false;
    }
    
    objet[cle] = valeur;
    console.log(`✅ Propriété "${cle}" ajoutée avec succès`);
    return true;
};

const livreTest = {
    titre: "Le Petit Prince",
    pages: 96
};

ajouterProprieteSecurisee(livreTest, 'genre', "Conte");
ajouterProprieteSecurisee(livreTest, 'genre', "Fiction"); // Avertissement


// DÉMONSTRATION COMPLÈTE
// =======================

console.log("\n\n=== EXERCICE 3 : Ajout de Propriété ===\n");

const livreDemonstration = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

console.log("📚 État initial du livre :");
console.log(livreDemonstration);
console.log("\n🔍 Propriétés présentes :", Object.keys(livreDemonstration));

// Ajout de la propriété genre
livreDemonstration.genre = "Conte philosophique";

console.log("\n✅ Après ajout de 'genre' :");
console.log(livreDemonstration);
console.log("📖 Genre :", livreDemonstration.genre);
console.log("🔍 Propriétés présentes :", Object.keys(livreDemonstration));

// Ajout de plusieurs propriétés
livreDemonstration.isbn = "978-2070612758";
livreDemonstration.editeur = "Gallimard";
livreDemonstration.langue = "français";

console.log("\n✅ Après ajout de plusieurs propriétés :");
console.log(livreDemonstration);

console.log("\n⚠️  Erreurs courantes à éviter :");
console.log("1. Noms de propriétés incohérents (casse différente)");
console.log("2. Types de données inappropriés");
console.log("3. Pas de validation des valeurs");
console.log("4. Noms avec espaces ou caractères spéciaux");
console.log("5. Ajout anarchique sans structure");

console.log("\n✅ Bonnes pratiques :");
console.log("1. Utiliser camelCase pour les noms");
console.log("2. Valider les valeurs avant ajout");
console.log("3. Maintenir la cohérence des types");
console.log("4. Utiliser des méthodes pour encapsuler");
console.log("5. Documenter les propriétés ajoutées");
console.log("6. Vérifier l'existence avant d'ajouter");
