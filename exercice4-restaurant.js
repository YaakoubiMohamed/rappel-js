// ========================================
// EXERCICE 4 : Restaurant avec Objets Imbriqués
// ========================================

// ❌ MAUVAISE SYNTAXE / BAD PRACTICES
// ====================================

// Problème 1 : Structure plate (pas d'organisation logique)
var restaurant1 = {
    nom: "Le Gourmet",
    rue: "45 Avenue des Champs",
    ville: "Paris",
    codePostal: "75008",
    plat1: "Pizza",
    plat2: "Pasta",
    plat3: "Salade"
};
// ❌ Difficile à gérer, pas d'évolutivité

// Problème 2 : Mélange de notations et accès dangereux
var restaurant2 = {
    nom: "Le Gourmet",
    adresse: "45 Avenue des Champs Paris",  // ❌ String non structurée
    plats: "Pizza, Pasta, Salade, Steak"    // ❌ String au lieu d'array
};

// Accès problématique
var deuxiemePlat = restaurant2.plats.split(",")[1]; // ❌ Fragile et verbeux

// Problème 3 : Incohérence des types
var restaurant3 = {
    nom: "Le Gourmet",
    adresse: {
        rue: 45,  // ❌ Devrait être string
        ville: true, // ❌ Devrait être string
        codePostal: 75008 // ❌ Code postal devrait être string (pour garder le 0 initial)
    },
    plats: "Pizza" // ❌ Devrait être un array
};

// Problème 4 : Pas de validation d'accès imbriqué
var restaurant4 = {
    nom: "Le Gourmet"
    // adresse manquante
};

// ❌ Erreur si on essaie d'accéder à une propriété imbriquée
// console.log(restaurant4.adresse.rue); // TypeError: Cannot read property 'rue' of undefined

// Problème 5 : Duplication de données
var adresseRestaurant = {
    rue: "45 Avenue des Champs",
    ville: "Paris"
};
var restaurant5 = {
    nom: "Le Gourmet",
    rue: "45 Avenue des Champs",  // ❌ Duplication
    ville: "Paris"                 // ❌ Duplication
};


// ✅ BONNES PRATIQUES / BEST PRACTICES
// =====================================

// 1. Structure hiérarchique claire et logique
const restaurantPropre = {
    nom: "Le Gourmet",
    adresse: {
        rue: "45 Avenue des Champs",
        ville: "Paris",
        codePostal: "75008",
        pays: "France"
    },
    plats: ["Pizza", "Pasta", "Salade", "Steak"]
};

console.log("✅ Structure propre :", restaurantPropre);

// 2. Accès sécurisé aux données imbriquées
const obtenirRue = (restaurant) => {
    // Optional chaining (ES2020)
    return restaurant?.adresse?.rue ?? "Rue non spécifiée";
};

const obtenirPlat = (restaurant, index) => {
    if (!Array.isArray(restaurant.plats)) {
        return null;
    }
    if (index < 0 || index >= restaurant.plats.length) {
        return null;
    }
    return restaurant.plats[index];
};

console.log("\n🏠 Rue :", obtenirRue(restaurantPropre));
console.log("🍝 Deuxième plat :", obtenirPlat(restaurantPropre, 1));

// 3. Validation complète avec types appropriés
const creerRestaurant = (nom, adresseData, platsData) => {
    // Validation du nom
    if (typeof nom !== 'string' || nom.trim() === '') {
        throw new Error("Le nom du restaurant est requis");
    }
    
    // Validation de l'adresse
    if (!adresseData || typeof adresseData !== 'object') {
        throw new Error("L'adresse est requise");
    }
    
    const { rue, ville, codePostal, pays = "France" } = adresseData;
    
    if (!rue || !ville || !codePostal) {
        throw new Error("Rue, ville et code postal sont requis");
    }
    
    // Validation des plats
    if (!Array.isArray(platsData) || platsData.length === 0) {
        throw new Error("Au moins un plat est requis");
    }
    
    return {
        nom: nom.trim(),
        adresse: {
            rue: rue.trim(),
            ville: ville.trim(),
            codePostal: String(codePostal).trim(),
            pays: pays.trim()
        },
        plats: platsData.map(plat => plat.trim()),
        dateCreation: new Date()
    };
};

const restaurantValide = creerRestaurant(
    "Le Gourmet",
    {
        rue: "45 Avenue des Champs",
        ville: "Paris",
        codePostal: "75008"
    },
    ["Pizza", "Pasta", "Salade", "Steak"]
);

console.log("\n✅ Restaurant validé :", restaurantValide);

// 4. Restaurant avec méthodes pour manipuler les données
const restaurantAvecMethodes = {
    nom: "Le Gourmet",
    adresse: {
        rue: "45 Avenue des Champs",
        ville: "Paris",
        codePostal: "75008",
        pays: "France"
    },
    plats: ["Pizza", "Pasta", "Salade", "Steak"],
    
    // Méthode pour obtenir l'adresse complète
    obtenirAdresseComplete() {
        const { rue, codePostal, ville, pays } = this.adresse;
        return `${rue}, ${codePostal} ${ville}, ${pays}`;
    },
    
    // Méthode pour obtenir un plat par index
    obtenirPlat(index) {
        if (index < 0 || index >= this.plats.length) {
            return null;
        }
        return this.plats[index];
    },
    
    // Méthode pour compter les plats
    nombrePlats() {
        return this.plats.length;
    },
    
    // Méthode pour ajouter un plat
    ajouterPlat(plat) {
        if (typeof plat !== 'string' || plat.trim() === '') {
            console.error("❌ Plat invalide");
            return false;
        }
        if (this.plats.includes(plat)) {
            console.warn("⚠️  Ce plat existe déjà");
            return false;
        }
        this.plats.push(plat.trim());
        return true;
    },
    
    // Méthode pour rechercher un plat
    rechercherPlat(terme) {
        return this.plats.filter(plat => 
            plat.toLowerCase().includes(terme.toLowerCase())
        );
    },
    
    // Méthode pour afficher le menu
    afficherMenu() {
        console.log(`\n🍽️  Menu de ${this.nom}`);
        console.log("═".repeat(40));
        this.plats.forEach((plat, index) => {
            console.log(`${index + 1}. ${plat}`);
        });
        console.log("═".repeat(40));
    }
};

// 5. Restaurant avec structure de données complexe
const restaurantComplet = {
    id: "rest_001",
    nom: "Le Gourmet",
    
    // Adresse structurée
    adresse: {
        rue: "45 Avenue des Champs",
        numero: 45,
        ville: "Paris",
        codePostal: "75008",
        pays: "France",
        coordonnees: {
            latitude: 48.8566,
            longitude: 2.3522
        }
    },
    
    // Plats avec détails complets
    menu: {
        entrees: [
            { nom: "Salade César", prix: 12.50, vegetarien: true },
            { nom: "Soupe à l'oignon", prix: 8.90, vegetarien: true }
        ],
        plats: [
            { nom: "Pizza Margherita", prix: 14.90, vegetarien: true },
            { nom: "Pasta Carbonara", prix: 15.50, vegetarien: false },
            { nom: "Steak-frites", prix: 22.00, vegetarien: false }
        ],
        desserts: [
            { nom: "Tiramisu", prix: 7.50, vegetarien: true },
            { nom: "Tarte aux pommes", prix: 6.90, vegetarien: true }
        ]
    },
    
    // Informations supplémentaires
    contact: {
        telephone: "+33 1 42 25 76 44",
        email: "contact@legourmet.fr",
        site: "www.legourmet.fr"
    },
    
    horaires: {
        lundi: { ouvert: true, heures: "12:00-14:30, 19:00-22:30" },
        mardi: { ouvert: true, heures: "12:00-14:30, 19:00-22:30" },
        mercredi: { ouvert: true, heures: "12:00-14:30, 19:00-22:30" },
        jeudi: { ouvert: true, heures: "12:00-14:30, 19:00-22:30" },
        vendredi: { ouvert: true, heures: "12:00-14:30, 19:00-23:00" },
        samedi: { ouvert: true, heures: "12:00-23:00" },
        dimanche: { ouvert: false, heures: "Fermé" }
    },
    
    capacite: {
        couverts: 80,
        salles: 2
    },
    
    // Méthodes
    obtenirPlatsDuJour() {
        return this.menu.plats.slice(0, 2);
    },
    
    obtenirPlatsVegetariens() {
        const tousLesPlats = [
            ...this.menu.entrees,
            ...this.menu.plats,
            ...this.menu.desserts
        ];
        return tousLesPlats.filter(plat => plat.vegetarien);
    },
    
    calculerPrixMoyenPlats() {
        const prix = this.menu.plats.map(p => p.prix);
        const somme = prix.reduce((acc, p) => acc + p, 0);
        return (somme / prix.length).toFixed(2);
    }
};

// 6. Accès sécurisé avec destructuration
const afficherInfosRestaurant = (restaurant) => {
    // Destructuration profonde avec valeurs par défaut
    const {
        nom = "Restaurant sans nom",
        adresse: {
            rue = "Rue inconnue",
            ville = "Ville inconnue",
            codePostal = "00000"
        } = {},
        plats = []
    } = restaurant;
    
    console.log(`\n📍 ${nom}`);
    console.log(`   ${rue}, ${codePostal} ${ville}`);
    console.log(`   ${plats.length} plats au menu`);
};

// 7. Copie profonde (deep clone) pour éviter les modifications accidentelles
const cloneRestaurant = (restaurant) => {
    // Méthode simple mais efficace pour les objets sérialisables
    return JSON.parse(JSON.stringify(restaurant));
};

// Alternative avec structuredClone (moderne)
const cloneRestaurantModerne = (restaurant) => {
    return structuredClone(restaurant);
};

const copieRestaurant = cloneRestaurant(restaurantPropre);
copieRestaurant.plats.push("Burger");
console.log("\n📋 Original :", restaurantPropre.plats.length, "plats");
console.log("📋 Copie :", copieRestaurant.plats.length, "plats");


// DÉMONSTRATION COMPLÈTE
// =======================

console.log("\n\n=== EXERCICE 4 : Restaurant avec Objets Imbriqués ===\n");

const restaurant = {
    nom: "Le Gourmet",
    adresse: {
        rue: "45 Avenue des Champs",
        ville: "Paris",
        codePostal: "75008"
    },
    plats: ["Pizza", "Pasta", "Salade", "Steak"]
};

console.log("🏨 Restaurant créé :");
console.log(restaurant);

console.log("\n📍 ADRESSE");
console.log("═".repeat(40));
console.log("Rue :", restaurant.adresse.rue);
console.log("Ville :", restaurant.adresse.ville);
console.log("Code postal :", restaurant.adresse.codePostal);

console.log("\n🍽️  MENU");
console.log("═".repeat(40));
console.log("Nombre total de plats :", restaurant.plats.length);
console.log("Premier plat :", restaurant.plats[0]);
console.log("Deuxième plat :", restaurant.plats[1]);
console.log("Dernier plat :", restaurant.plats[restaurant.plats.length - 1]);

console.log("\n📋 Liste complète des plats :");
restaurant.plats.forEach((plat, index) => {
    console.log(`   ${index + 1}. ${plat}`);
});

// Démonstration avec méthodes
console.log("\n🔧 Démonstration avec méthodes :");
restaurantAvecMethodes.afficherMenu();
console.log("\n📍 Adresse complète :", restaurantAvecMethodes.obtenirAdresseComplete());
console.log("🍕 Deuxième plat :", restaurantAvecMethodes.obtenirPlat(1));
console.log("📊 Nombre de plats :", restaurantAvecMethodes.nombrePlats());

console.log("\n⚠️  Erreurs courantes à éviter :");
console.log("1. Structure plate difficile à maintenir");
console.log("2. Utiliser des strings au lieu d'arrays");
console.log("3. Pas de validation d'accès imbriqué");
console.log("4. Types incohérents dans les propriétés");
console.log("5. Pas de gestion des valeurs manquantes");

console.log("\n✅ Bonnes pratiques :");
console.log("1. Structure hiérarchique logique");
console.log("2. Types appropriés (arrays pour listes)");
console.log("3. Accès sécurisé avec optional chaining");
console.log("4. Validation des données imbriquées");
console.log("5. Méthodes pour encapsuler l'accès");
console.log("6. Copie profonde si modification nécessaire");
