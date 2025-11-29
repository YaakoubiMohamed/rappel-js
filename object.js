/*
╔════════════════════════════════════════════════════════════════╗
║             GUIDE COMPLET DES OBJETS EN JAVASCRIPT             ║
║                    Exemples et Exercices                       ║
╚════════════════════════════════════════════════════════════════╝
*/

console.log("═══════════════════════════════════════════════════════════════");
console.log("          GUIDE COMPLET DES OBJETS EN JAVASCRIPT");
console.log("═══════════════════════════════════════════════════════════════\n");

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 1: CRÉATION D'OBJETS
// ═══════════════════════════════════════════════════════════════
console.log("--- 1. CRÉATION D'OBJETS ---\n");

// Méthode 1: Notation littérale (la plus courante)
const personne = {
    nom: "Ahmed",
    prenom: "Yassine",
    age: 30,
    email: "ahmed@example.com"
};
console.log("Objet littéral:", personne);

// Méthode 2: Constructeur Object()
const voiture = new Object();
voiture.marque = "Toyota";
voiture.modele = "Corolla";
voiture.annee = 2023;
console.log("Avec constructeur:", voiture);

// Méthode 3: Object.create()
const prototype = { type: "Animal" };
const chien = Object.create(prototype);
chien.nom = "Rex";
console.log("Avec Object.create():", chien);
console.log("Type hérité:", chien.type);

// Méthode 4: Fonction constructeur
function Produit(nom, prix) {
    this.nom = nom;
    this.prix = prix;
}
const produit1 = new Produit("Laptop", 1200);
console.log("Avec fonction constructeur:", produit1);

// Méthode 5: Classes ES6
class Livre {
    constructor(titre, auteur) {
        this.titre = titre;
        this.auteur = auteur;
    }
}
const livre1 = new Livre("1984", "George Orwell");
console.log("Avec class ES6:", livre1);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 2: ACCÈS AUX PROPRIÉTÉS
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 2. ACCÈS AUX PROPRIÉTÉS ---\n");

const utilisateur = {
    nom: "Marie",
    age: 28,
    "adresse email": "marie@example.com", // Propriété avec espace
    ville: "Paris"
};

// Notation pointée
console.log("Notation pointée - nom:", utilisateur.nom);

// Notation crochet (nécessaire pour propriétés avec espaces)
console.log("Notation crochet - email:", utilisateur["adresse email"]);

// Accès dynamique
const prop = "age";
console.log("Accès dynamique:", utilisateur[prop]);

// Vérifier l'existence d'une propriété
console.log("'ville' existe?", "ville" in utilisateur);
console.log("'pays' existe?", "pays" in utilisateur);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 3: MODIFICATION ET SUPPRESSION
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 3. MODIFICATION ET SUPPRESSION ---\n");

const client = {
    nom: "Jean",
    prenom: "Dupont",
    age: 35,
    ville: "Lyon"
};

console.log("Objet initial:", client);

// Modifier une propriété existante
client.age = 36;
console.log("Après modification de l'âge:", client);

// Ajouter une nouvelle propriété
client.email = "jean.dupont@example.com";
console.log("Après ajout de l'email:", client);

// Supprimer une propriété
delete client.ville;
console.log("Après suppression de la ville:", client);
console.log("Ville:", client.ville); // undefined

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 4: MÉTHODES D'OBJETS
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 4. MÉTHODES D'OBJETS ---\n");

const calculatrice = {
    marque: "Casio",
    additionner: function(a, b) {
        return a + b;
    },
    // Syntaxe courte ES6
    soustraire(a, b) {
        return a - b;
    },
    // Méthode avec this
    afficherMarque() {
        return `Calculatrice ${this.marque}`;
    }
};

console.log("Addition 5 + 3:", calculatrice.additionner(5, 3));
console.log("Soustraction 10 - 4:", calculatrice.soustraire(10, 4));
console.log("Afficher marque:", calculatrice.afficherMarque());

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 5: THIS ET CONTEXTE
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 5. THIS ET CONTEXTE ---\n");

const personne2 = {
    nom: "Sophie",
    age: 25,
    presenter: function() {
        return `Je m'appelle ${this.nom} et j'ai ${this.age} ans`;
    },
    // Arrow function ne lie pas 'this'
    presenterArrow: () => {
        return `Arrow function - this n'est pas lié à l'objet`;
    }
};

console.log("Fonction normale:", personne2.presenter());
console.log("Arrow function:", personne2.presenterArrow());

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 6: OBJECT.KEYS(), VALUES(), ENTRIES()
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 6. PARCOURIR LES OBJETS ---\n");

const produit = {
    nom: "Smartphone",
    marque: "Samsung",
    prix: 699,
    stock: 50
};

// Object.keys() - retourne un tableau des clés
const cles = Object.keys(produit);
console.log("Clés:", cles);

// Object.values() - retourne un tableau des valeurs
const valeurs = Object.values(produit);
console.log("Valeurs:", valeurs);

// Object.entries() - retourne un tableau de paires [clé, valeur]
const entries = Object.entries(produit);
console.log("Entries:", entries);

// Parcourir avec for...in
console.log("Parcours for...in:");
for (let cle in produit) {
    console.log(`  ${cle}: ${produit[cle]}`);
}

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 7: COPIE ET FUSION D'OBJETS
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 7. COPIE ET FUSION ---\n");

const original = { a: 1, b: 2 };

// Copie superficielle avec spread operator
const copie1 = { ...original };
console.log("Copie avec spread:", copie1);

// Copie avec Object.assign()
const copie2 = Object.assign({}, original);
console.log("Copie avec Object.assign:", copie2);

// Fusion d'objets
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5 };
const fusion = { ...obj1, ...obj2, ...obj3 };
console.log("Fusion de 3 objets:", fusion);

// Surcharge de propriétés
const base = { nom: "Test", age: 20 };
const modif = { age: 25, ville: "Paris" };
const resultat = { ...base, ...modif };
console.log("Surcharge:", resultat);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 8: DESTRUCTURATION
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 8. DESTRUCTURATION ---\n");

const etudiant = {
    nom: "Lucas",
    age: 22,
    email: "lucas@university.fr",
    ville: "Marseille"
};

// Destructuration basique
const { nom, age } = etudiant;
console.log("Destructuration:", nom, age);

// Renommer les variables
const { email: adresseEmail } = etudiant;
console.log("Renommée:", adresseEmail);

// Valeurs par défaut
const { pays = "France" } = etudiant;
console.log("Valeur par défaut:", pays);

// Destructuration imbriquée
const entreprise = {
    nom: "TechCorp",
    adresse: {
        rue: "123 rue de la Tech",
        ville: "Paris",
        codePostal: "75001"
    }
};
const { adresse: { ville: villeEntreprise } } = entreprise;
console.log("Destructuration imbriquée:", villeEntreprise);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 9: PROPRIÉTÉS CALCULÉES
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 9. PROPRIÉTÉS CALCULÉES ---\n");

const cle1 = "couleur";
const cle2 = "taille";

const article = {
    [cle1]: "rouge",
    [cle2]: "M",
    ["prix_" + "total"]: 50
};
console.log("Propriétés calculées:", article);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 10: GETTERS ET SETTERS
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 10. GETTERS ET SETTERS ---\n");

const rectangle = {
    largeur: 10,
    hauteur: 5,
    
    // Getter - calculé dynamiquement
    get surface() {
        return this.largeur * this.hauteur;
    },
    
    get perimetre() {
        return 2 * (this.largeur + this.hauteur);
    },
    
    // Setter - validation
    set largeur(valeur) {
        if (valeur > 0) {
            this._largeur = valeur;
        }
    }
};

console.log("Surface:", rectangle.surface);
console.log("Périmètre:", rectangle.perimetre);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 11: OBJECT.FREEZE() ET OBJECT.SEAL()
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 11. IMMUTABILITÉ ---\n");

// Object.freeze() - rend l'objet totalement immuable
const config = Object.freeze({
    apiUrl: "https://api.example.com",
    timeout: 5000
});

console.log("Config gelé:", config);
config.timeout = 10000; // Ignoré en mode strict
console.log("Après tentative de modification:", config.timeout);

// Object.seal() - empêche l'ajout/suppression mais permet la modification
const options = Object.seal({
    theme: "dark",
    language: "fr"
});

options.theme = "light"; // OK
options.newProp = "test"; // Ignoré
console.log("Options scellé:", options);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 12: PROTOTYPES ET HÉRITAGE
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 12. PROTOTYPES ---\n");

// Prototype avec fonction constructeur
function Animal(nom) {
    this.nom = nom;
}

Animal.prototype.parler = function() {
    return `${this.nom} fait du bruit`;
};

const chat = new Animal("Minou");
console.log("Prototype:", chat.parler());

// Héritage avec classes ES6
class Vehicule {
    constructor(type) {
        this.type = type;
    }
    
    decrire() {
        return `Ceci est un ${this.type}`;
    }
}

class Voiture extends Vehicule {
    constructor(marque, modele) {
        super("voiture");
        this.marque = marque;
        this.modele = modele;
    }
    
    details() {
        return `${this.marque} ${this.modele}`;
    }
}

const maVoiture = new Voiture("Honda", "Civic");
console.log("Héritage:", maVoiture.decrire());
console.log("Détails:", maVoiture.details());

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 13: JSON - SÉRIALISATION ET DÉSÉRIALISATION
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 13. JSON ---\n");

const data = {
    nom: "Emma",
    age: 28,
    hobbies: ["lecture", "musique", "sport"]
};

// Convertir objet en JSON (stringify)
const json = JSON.stringify(data);
console.log("JSON string:", json);

// Convertir JSON en objet (parse)
const objetParse = JSON.parse(json);
console.log("Objet parsé:", objetParse);

// JSON avec indentation pour lisibilité
const jsonFormate = JSON.stringify(data, null, 2);
console.log("JSON formaté:\n" + jsonFormate);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 14: EXERCICES PRATIQUES
// ═══════════════════════════════════════════════════════════════
console.log("\n═══════════════════════════════════════════════════════════════");
console.log("           📚 10 EXERCICES PRATIQUES");
console.log("═══════════════════════════════════════════════════════════════\n");

// Exercice 1: Compter les propriétés
function compterProprietes(obj) {
    return Object.keys(obj).length;
}
console.log("Exercice 1 - Nombre de propriétés:", 
    compterProprietes({a: 1, b: 2, c: 3}));

// Exercice 2: Vérifier si un objet est vide
function estVide(obj) {
    return Object.keys(obj).length === 0;
}
console.log("Exercice 2 - Objet vide?", estVide({}), estVide({a: 1}));

// Exercice 3: Inverser clés et valeurs
function inverserObjet(obj) {
    return Object.entries(obj).reduce((acc, [cle, valeur]) => {
        acc[valeur] = cle;
        return acc;
    }, {});
}
console.log("Exercice 3 - Inverser {a: 1, b: 2}:", 
    inverserObjet({a: 1, b: 2}));

// Exercice 4: Fusionner profondément deux objets
function fusionProfonde(obj1, obj2) {
    const resultat = { ...obj1 };
    
    for (let cle in obj2) {
        if (obj2[cle] && typeof obj2[cle] === 'object' && !Array.isArray(obj2[cle])) {
            resultat[cle] = fusionProfonde(resultat[cle] || {}, obj2[cle]);
        } else {
            resultat[cle] = obj2[cle];
        }
    }
    
    return resultat;
}
const obj1Ex4 = { a: 1, b: { c: 2 } };
const obj2Ex4 = { b: { d: 3 }, e: 4 };
console.log("Exercice 4 - Fusion profonde:", fusionProfonde(obj1Ex4, obj2Ex4));

// Exercice 5: Extraire certaines propriétés
function extraireProprietes(obj, cles) {
    return cles.reduce((acc, cle) => {
        if (cle in obj) acc[cle] = obj[cle];
        return acc;
    }, {});
}
const persEx5 = { nom: "Alice", age: 30, ville: "Paris", email: "alice@test.fr" };
console.log("Exercice 5 - Extraire ['nom', 'email']:", 
    extraireProprietes(persEx5, ['nom', 'email']));

// Exercice 6: Exclure certaines propriétés
function exclureProprietes(obj, cles) {
    return Object.keys(obj)
        .filter(cle => !cles.includes(cle))
        .reduce((acc, cle) => {
            acc[cle] = obj[cle];
            return acc;
        }, {});
}
console.log("Exercice 6 - Exclure ['age', 'ville']:", 
    exclureProprietes(persEx5, ['age', 'ville']));

// Exercice 7: Aplatir un objet imbriqué
function aplatirObjet(obj, parent = '', res = {}) {
    for (let cle in obj) {
        const nouvelleCle = parent ? `${parent}.${cle}` : cle;
        
        if (typeof obj[cle] === 'object' && obj[cle] !== null && !Array.isArray(obj[cle])) {
            aplatirObjet(obj[cle], nouvelleCle, res);
        } else {
            res[nouvelleCle] = obj[cle];
        }
    }
    return res;
}
const imbrique = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log("Exercice 7 - Aplatir objet:", aplatirObjet(imbrique));

// Exercice 8: Comparer deux objets
function objetsEgaux(obj1, obj2) {
    const cles1 = Object.keys(obj1);
    const cles2 = Object.keys(obj2);
    
    if (cles1.length !== cles2.length) return false;
    
    return cles1.every(cle => obj1[cle] === obj2[cle]);
}
console.log("Exercice 8 - Objets égaux?", 
    objetsEgaux({a: 1, b: 2}, {a: 1, b: 2}),
    objetsEgaux({a: 1, b: 2}, {a: 1, b: 3}));

// Exercice 9: Filtrer les propriétés selon une condition
function filtrerObjet(obj, predicat) {
    return Object.keys(obj)
        .filter(cle => predicat(obj[cle], cle))
        .reduce((acc, cle) => {
            acc[cle] = obj[cle];
            return acc;
        }, {});
}
const nombres = { a: 1, b: 2, c: 3, d: 4 };
console.log("Exercice 9 - Filtrer (valeur > 2):", 
    filtrerObjet(nombres, val => val > 2));

// Exercice 10: Transformer les valeurs d'un objet
function mapObjet(obj, transformateur) {
    return Object.keys(obj).reduce((acc, cle) => {
        acc[cle] = transformateur(obj[cle], cle);
        return acc;
    }, {});
}
console.log("Exercice 10 - Doubler les valeurs:", 
    mapObjet({a: 1, b: 2, c: 3}, val => val * 2));

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 15: PATTERNS AVANCÉS
// ═══════════════════════════════════════════════════════════════
console.log("\n═══════════════════════════════════════════════════════════════");
console.log("           🏆 PATTERNS AVANCÉS");
console.log("═══════════════════════════════════════════════════════════════\n");

// Pattern 1: Factory Function
function creerUtilisateur(nom, role) {
    return {
        nom,
        role,
        actif: true,
        activer() { this.actif = true; },
        desactiver() { this.actif = false; }
    };
}
const user1 = creerUtilisateur("Alice", "admin");
console.log("Factory Pattern:", user1);

// Pattern 2: Singleton
const Singleton = (function() {
    let instance;
    
    function creerInstance() {
        return { timestamp: Date.now() };
    }
    
    return {
        getInstance: function() {
            if (!instance) {
                instance = creerInstance();
            }
            return instance;
        }
    };
})();

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log("Singleton (même instance?):", s1 === s2);

// Pattern 3: Observer Pattern
class Subject {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

const sujet = new Subject();
sujet.subscribe(data => console.log("Observer 1:", data));
sujet.subscribe(data => console.log("Observer 2:", data));
sujet.notify("Événement déclenché!");

// Pattern 4: Module Pattern
const Module = (function() {
    let privee = "Variable privée";
    
    return {
        publique: "Variable publique",
        getPrivee: function() {
            return privee;
        },
        setPrivee: function(valeur) {
            privee = valeur;
        }
    };
})();

console.log("Module Pattern - publique:", Module.publique);
console.log("Module Pattern - privée:", Module.getPrivee());

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 16: DÉFIS AVANCÉS
// ═══════════════════════════════════════════════════════════════
console.log("\n═══════════════════════════════════════════════════════════════");
console.log("           💎 DÉFIS AVANCÉS");
console.log("═══════════════════════════════════════════════════════════════\n");

// Défi 1: Deep Clone (copie profonde complète)
function cloneProfond(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => cloneProfond(item));
    
    const clone = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = cloneProfond(obj[key]);
        }
    }
    return clone;
}

const complexe = { a: 1, b: { c: 2, d: [3, 4] }, e: new Date() };
const cloneComp = cloneProfond(complexe);
console.log("Défi 1 - Clone profond:", cloneComp);
console.log("Objets différents?", complexe !== cloneComp);

// Défi 2: Object Diff (trouver les différences entre deux objets)
function trouverDifferences(obj1, obj2) {
    const diff = {};
    
    const toutesLesCles = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    
    for (let cle of toutesLesCles) {
        if (obj1[cle] !== obj2[cle]) {
            diff[cle] = {
                ancien: obj1[cle],
                nouveau: obj2[cle]
            };
        }
    }
    
    return diff;
}

const ancien = { a: 1, b: 2, c: 3 };
const nouveau = { a: 1, b: 5, d: 4 };
console.log("Défi 2 - Différences:", trouverDifferences(ancien, nouveau));

// Défi 3: Proxy pour validation
const validateur = {
    set(obj, prop, valeur) {
        if (prop === 'age') {
            if (typeof valeur !== 'number' || valeur < 0 || valeur > 150) {
                throw new TypeError("Âge invalide");
            }
        }
        obj[prop] = valeur;
        return true;
    }
};

const personneValidee = new Proxy({}, validateur);
personneValidee.nom = "Bob";
personneValidee.age = 30;
console.log("Défi 3 - Proxy validation:", personneValidee);

try {
    personneValidee.age = 200; // Erreur
} catch (e) {
    console.log("Erreur capturée:", e.message);
}

console.log("\n═══════════════════════════════════════════════════════════════");
console.log("✅ Guide des Objets terminé! Continuez à pratiquer! 🚀");
console.log("═══════════════════════════════════════════════════════════════\n");