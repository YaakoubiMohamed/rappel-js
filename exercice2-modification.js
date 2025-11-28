// ========================================
// EXERCICE 2 : Modification d'un Objet
// ========================================

// ❌ MAUVAISE SYNTAXE / BAD PRACTICES
// ====================================

// Problème 1 : Réassigner l'objet entier au lieu de modifier une propriété
let livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

// ❌ Mauvais - Crée un nouvel objet, perd les autres propriétés
livre = { pages: 120 };
console.log("❌ Après réassignation :", livre); // Oups! titre et auteur sont perdus!

// Problème 2 : Modification sans vérification
let livre2 = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

livre2.pages = "cent vingt"; // ❌ Type incohérent
livre2.pages = -50;           // ❌ Valeur illogique

// Problème 3 : Utilisation de var (portée de fonction, problèmes de hoisting)
var livre3 = {
    titre: "Le Petit Prince",
    pages: 96
};
var livre3 = { pages: 120 }; // ❌ Redéclaration possible avec var (dangereux!)

// Problème 4 : Modification directe sans traçabilité
let livre4 = {
    titre: "Le Petit Prince",
    pages: 96
};
livre4.pages = 120; // Qui a modifié? Quand? Pourquoi?

// Problème 5 : Oublier que const ne protège pas les propriétés internes
const livre5 = {
    titre: "Le Petit Prince",
    pages: 96
};
// Certains développeurs pensent que cela est impossible, mais :
livre5.pages = 120; // ✅ Fonctionne! const empêche la réassignation, pas la mutation


// ✅ BONNES PRATIQUES / BEST PRACTICES
// =====================================

// 1. Utiliser const et modifier les propriétés (pas l'objet entier)
const livreBonneMethode = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

// ✅ Bon - Modifie seulement la propriété
livreBonneMethode.pages = 120;
console.log("✅ Après modification :", livreBonneMethode);

// 2. Validation avant modification
const modifierPages = (livre, nouvellesPages) => {
    if (typeof nouvellesPages !== 'number') {
        throw new TypeError("Le nombre de pages doit être un nombre");
    }
    if (nouvellesPages < 1) {
        throw new RangeError("Le nombre de pages doit être positif");
    }
    livre.pages = nouvellesPages;
    return livre;
};

const livreSecurise = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

modifierPages(livreSecurise, 120);
console.log("✅ Modification sécurisée :", livreSecurise.pages);

// 3. Méthodes pour encapsuler les modifications
const livreAvecMethodes = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96,
    
    // Méthode pour modifier les pages avec validation
    modifierPages(nouvellesPages) {
        if (typeof nouvellesPages !== 'number' || nouvellesPages < 1) {
            console.error("❌ Nombre de pages invalide");
            return false;
        }
        this.pages = nouvellesPages;
        return true;
    },
    
    // Méthode pour incrémenter
    ajouterPages(nb) {
        if (typeof nb === 'number' && nb > 0) {
            this.pages += nb;
        }
    }
};

livreAvecMethodes.modifierPages(120);
console.log("✅ Avec méthode :", livreAvecMethodes.pages);

// 4. Historique des modifications
const livreAvecHistorique = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96,
    historique: [],
    
    modifierPages(nouvellesPages) {
        if (typeof nouvellesPages !== 'number' || nouvellesPages < 1) {
            throw new Error("Nombre de pages invalide");
        }
        
        // Enregistrer l'ancienne valeur
        this.historique.push({
            propriete: 'pages',
            ancienneValeur: this.pages,
            nouvelleValeur: nouvellesPages,
            date: new Date(),
            action: 'modification'
        });
        
        this.pages = nouvellesPages;
    },
    
    afficherHistorique() {
        console.log("\n📜 Historique des modifications :");
        this.historique.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry.ancienneValeur} → ${entry.nouvelleValeur} (${entry.date.toLocaleString()})`);
        });
    }
};

livreAvecHistorique.modifierPages(120);
livreAvecHistorique.modifierPages(150);
livreAvecHistorique.afficherHistorique();

// 5. Objet immuable (avec Object.freeze)
const livreImmuable = Object.freeze({
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
});

// ❌ Cette modification est ignorée en mode strict (erreur en mode strict)
livreImmuable.pages = 120;
console.log("\n🔒 Livre immuable (pages) :", livreImmuable.pages); // Reste 96

// 6. Créer une copie modifiée (approche fonctionnelle)
const creerLivreModifie = (livreOriginal, modifications) => {
    return {
        ...livreOriginal,  // Spread operator pour copier
        ...modifications,  // Appliquer les modifications
        dateModification: new Date()
    };
};

const livreOriginal = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

const livreModifie = creerLivreModifie(livreOriginal, { pages: 120 });
console.log("\n📚 Original :", livreOriginal.pages);  // 96 (inchangé)
console.log("📚 Modifié :", livreModifie.pages);      // 120

// 7. Pattern Builder pour modifications chaînées
class LivreBuilder {
    constructor(livre) {
        this.livre = { ...livre };
    }
    
    setPages(pages) {
        if (typeof pages === 'number' && pages > 0) {
            this.livre.pages = pages;
        }
        return this; // Retourne l'instance pour chaînage
    }
    
    setTitre(titre) {
        if (typeof titre === 'string' && titre.trim()) {
            this.livre.titre = titre.trim();
        }
        return this;
    }
    
    build() {
        return this.livre;
    }
}

const livreAvecBuilder = new LivreBuilder({
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
})
    .setPages(120)
    .setTitre("Le Petit Prince - Édition annotée")
    .build();

console.log("\n🔨 Avec Builder Pattern :", livreAvecBuilder);

// 8. Proxy pour intercepter les modifications
const livreAvecProxy = new Proxy(
    {
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        pages: 96
    },
    {
        set(target, property, value) {
            console.log(`🔄 Modification détectée : ${property} = ${value}`);
            
            // Validation
            if (property === 'pages' && (typeof value !== 'number' || value < 1)) {
                console.error("❌ Valeur invalide pour pages");
                return false;
            }
            
            target[property] = value;
            return true;
        }
    }
);

console.log("\n🎯 Test avec Proxy :");
livreAvecProxy.pages = 120;  // Log automatique
livreAvecProxy.pages = -10;  // Rejeté


// DÉMONSTRATION COMPLÈTE
// =======================

console.log("\n\n=== EXERCICE 2 : Modification d'un Objet ===\n");

const livreDemonstration = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

console.log("📚 État initial :", livreDemonstration);
console.log("📄 Pages initiales :", livreDemonstration.pages);

// Modification
livreDemonstration.pages = 120;

console.log("\n📝 Après modification :");
console.log("📄 Nouvelles pages :", livreDemonstration.pages);
console.log("📚 Objet complet :", livreDemonstration);

console.log("\n⚠️  Erreurs courantes à éviter :");
console.log("1. Réassigner l'objet entier (perte de données)");
console.log("2. Pas de validation des valeurs");
console.log("3. Types incohérents après modification");
console.log("4. Oublier que const n'empêche pas la mutation");

console.log("\n✅ Bonnes pratiques :");
console.log("1. Modifier uniquement les propriétés nécessaires");
console.log("2. Valider les données avant modification");
console.log("3. Utiliser des méthodes pour encapsuler la logique");
console.log("4. Maintenir l'intégrité des types");
console.log("5. Considérer l'immutabilité pour les cas critiques");
