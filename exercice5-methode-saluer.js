// ========================================
// EXERCICE 5 : Méthode saluer avec 'this'
// ========================================

// ❌ MAUVAISE SYNTAXE / BAD PRACTICES
// ====================================

// Problème 1 : Méthode qui n'utilise pas 'this'
var personne1 = {
    nom: "Dupont",
    prenom: "Jean",
    saluer: function() {
        // ❌ Valeurs en dur au lieu d'utiliser this
        return "Bonjour, je m'appelle Jean Dupont";
    }
};
console.log("❌ Problème 1 :", personne1.saluer());
// Problème : Ne s'adapte pas si on change nom ou prenom

// Problème 2 : Utilisation incorrecte de 'this' avec fonction fléchée
var personne2 = {
    nom: "Dupont",
    prenom: "Jean",
    saluer: () => {
        // ❌ Arrow function ne lie pas 'this' à l'objet
        return "Bonjour, je m'appelle " + this.prenom + " " + this.nom;
    }
};
console.log("❌ Problème 2 :", personne2.saluer()); // undefined undefined

// Problème 3 : Concaténation difficile à lire
var personne3 = {
    nom: "Dupont",
    prenom: "Jean",
    saluer: function() {
        // ❌ Concaténation longue et peu lisible
        return "Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et je suis heureux de vous rencontrer.";
    }
};

// Problème 4 : Pas de gestion des propriétés manquantes
var personne4 = {
    nom: "Dupont"
    // prenom manquant
};
personne4.saluer = function() {
    // ❌ Affiche "undefined" si prenom manque
    return "Bonjour, je m'appelle " + this.prenom + " " + this.nom;
};
console.log("❌ Problème 4 :", personne4.saluer()); // "undefined Dupont"

// Problème 5 : Méthode définie en dehors de l'objet (perd le contexte)
var personne5 = {
    nom: "Dupont",
    prenom: "Jean"
};

var saluer = function() {
    // ❌ 'this' ne pointe pas vers personne5 si appelé directement
    return "Bonjour, je m'appelle " + this.prenom + " " + this.nom;
};

personne5.saluer = saluer;
// var fn = personne5.saluer;
// console.log(fn()); // ❌ 'this' est undefined ou window

// Problème 6 : Pas de validation des données
var personne6 = {
    nom: "",  // ❌ Chaîne vide
    prenom: null, // ❌ null
    saluer: function() {
        return "Bonjour, je m'appelle " + this.prenom + " " + this.nom;
    }
};
console.log("❌ Problème 6 :", personne6.saluer()); // "null "


// ✅ BONNES PRATIQUES / BEST PRACTICES
// =====================================

// 1. Méthode correcte avec 'this' et function traditionnelle
const personnePropre = {
    nom: "Dupont",
    prenom: "Jean",
    
    saluer: function() {
        return "Bonjour, je m'appelle " + this.prenom + " " + this.nom;
    }
};

console.log("\n✅ Méthode propre :", personnePropre.saluer());

// 2. Syntaxe moderne ES6 (raccourci de méthode)
const personneModerne = {
    nom: "Dupont",
    prenom: "Jean",
    
    // ✅ Syntaxe courte sans le mot 'function'
    saluer() {
        return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
    }
};

console.log("✅ Syntaxe ES6 :", personneModerne.saluer());

// 3. Template literals pour meilleure lisibilité
const personneTemplate = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    
    saluer() {
        return `Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans.`;
    },
    
    sePresenter() {
        return `
            Nom complet : ${this.prenom} ${this.nom}
            Âge : ${this.age} ans
        `.trim();
    }
};

console.log("\n✅ Avec template literals :", personneTemplate.saluer());

// 4. Validation des propriétés dans la méthode
const personneSecurisee = {
    nom: "Dupont",
    prenom: "Jean",
    
    saluer() {
        // Validation
        if (!this.prenom || !this.nom) {
            return "Bonjour, informations incomplètes.";
        }
        
        const prenom = this.prenom.trim();
        const nom = this.nom.trim();
        
        if (prenom === '' || nom === '') {
            return "Bonjour, informations incomplètes.";
        }
        
        return `Bonjour, je m'appelle ${prenom} ${nom}`;
    }
};

console.log("✅ Avec validation :", personneSecurisee.saluer());

// 5. Méthodes multiples avec réutilisation
const personneComplete = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    profession: "Développeur",
    
    // Méthode utilitaire privée (par convention avec _)
    _obtenirNomComplet() {
        return `${this.prenom} ${this.nom}`;
    },
    
    saluer() {
        return `Bonjour, je m'appelle ${this._obtenirNomComplet()}`;
    },
    
    sePresenter() {
        return `Bonjour, je m'appelle ${this._obtenirNomComplet()}, j'ai ${this.age} ans et je suis ${this.profession}.`;
    },
    
    presentationFormelle() {
        return `Enchanté, je suis ${this.nom} ${this.prenom}.`;
    },
    
    presentationCourte() {
        return `${this.prenom} - ${this.profession}`;
    }
};

console.log("\n✅ Méthodes multiples :");
console.log(personneComplete.saluer());
console.log(personneComplete.sePresenter());
console.log(personneComplete.presentationFormelle());

// 6. Bind, call, apply pour contrôler 'this'
const methodeSaluer = function() {
    return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
};

const personne1Data = { nom: "Dupont", prenom: "Jean" };
const personne2Data = { nom: "Martin", prenom: "Sophie" };

// ✅ Utiliser call() pour spécifier 'this'
console.log("\n✅ Avec call() :");
console.log(methodeSaluer.call(personne1Data));
console.log(methodeSaluer.call(personne2Data));

// ✅ Utiliser bind() pour créer une fonction liée
const saluerJean = methodeSaluer.bind(personne1Data);
console.log("\n✅ Avec bind() :", saluerJean());

// 7. Getters pour propriétés calculées
const personneAvecGetters = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    
    // ✅ Getter pour nom complet
    get nomComplet() {
        return `${this.prenom} ${this.nom}`;
    },
    
    // ✅ Getter pour salutation
    get salutation() {
        return `Bonjour, je m'appelle ${this.nomComplet}`;
    },
    
    // Méthode classique
    saluer() {
        return this.salutation;
    }
};

console.log("\n✅ Avec getters :");
console.log(personneAvecGetters.nomComplet);  // Pas besoin de ()
console.log(personneAvecGetters.salutation);

// 8. Classe ES6 pour structure réutilisable
class Personne {
    constructor(prenom, nom, age) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }
    
    saluer() {
        return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
    }
    
    sePresenter() {
        return `${this.saluer()} et j'ai ${this.age} ans.`;
    }
    
    get nomComplet() {
        return `${this.prenom} ${this.nom}`;
    }
}

const jean = new Personne("Jean", "Dupont", 30);
const sophie = new Personne("Sophie", "Martin", 25);

console.log("\n✅ Avec classe ES6 :");
console.log(jean.saluer());
console.log(sophie.saluer());

// 9. Méthodes avec paramètres
const personneParametrable = {
    nom: "Dupont",
    prenom: "Jean",
    
    saluer(formule = "Bonjour") {
        return `${formule}, je m'appelle ${this.prenom} ${this.nom}`;
    },
    
    saluerPersonne(autrePersonne) {
        if (!autrePersonne || !autrePersonne.prenom) {
            return `Bonjour, je suis ${this.prenom}`;
        }
        return `Bonjour ${autrePersonne.prenom}, je m'appelle ${this.prenom}`;
    }
};

console.log("\n✅ Avec paramètres :");
console.log(personneParametrable.saluer());
console.log(personneParametrable.saluer("Bonsoir"));
console.log(personneParametrable.saluerPersonne({ prenom: "Sophie" }));

// 10. Factory function pour créer des personnes avec méthodes
const creerPersonne = (prenom, nom, age, profession) => {
    return {
        prenom,
        nom,
        age,
        profession,
        
        saluer() {
            return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
        },
        
        sePresenter() {
            const parties = [
                `Bonjour, je m'appelle ${this.prenom} ${this.nom}`
            ];
            
            if (this.age) {
                parties.push(`j'ai ${this.age} ans`);
            }
            
            if (this.profession) {
                parties.push(`je suis ${this.profession}`);
            }
            
            return parties.join(', ') + '.';
        },
        
        vieillir() {
            this.age++;
            return `J'ai maintenant ${this.age} ans.`;
        }
    };
};

const marc = creerPersonne("Marc", "Lefebvre", 28, "Designer");
console.log("\n✅ Avec factory function :");
console.log(marc.saluer());
console.log(marc.sePresenter());


// DÉMONSTRATION COMPLÈTE
// =======================

console.log("\n\n=== EXERCICE 5 : Méthode saluer() avec 'this' ===\n");

const personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    
    saluer() {
        return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
    }
};

console.log("👤 Personne créée :");
console.log(personne);

console.log("\n💬 Salutation :");
console.log(personne.saluer());

console.log("\n🔍 Analyse de 'this' :");
console.log("- Dans la méthode, 'this' fait référence à l'objet 'personne'");
console.log("- this.prenom =", personne.prenom);
console.log("- this.nom =", personne.nom);

// Modification des propriétés
personne.prenom = "Marie";
personne.nom = "Martin";

console.log("\n📝 Après modification des propriétés :");
console.log(personne.saluer());
console.log("- La méthode s'adapte automatiquement grâce à 'this'");

console.log("\n⚠️  Erreurs courantes à éviter :");
console.log("1. Utiliser arrow function (ne lie pas 'this')");
console.log("2. Valeurs en dur au lieu de 'this'");
console.log("3. Pas de validation des propriétés");
console.log("4. Concaténation illisible (+)");
console.log("5. Perdre le contexte 'this' lors du passage de fonction");

console.log("\n✅ Bonnes pratiques :");
console.log("1. Utiliser 'function' ou syntaxe courte ES6");
console.log("2. Template literals pour lisibilité");
console.log("3. Valider les propriétés avant utilisation");
console.log("4. Utiliser bind/call/apply si nécessaire");
console.log("5. Considérer les getters pour propriétés calculées");
console.log("6. Utiliser des classes ES6 pour réutilisabilité");

// Test interactif
console.log("\n🎮 Test avec différentes personnes :");
const personnes = [
    { prenom: "Alice", nom: "Bernard" },
    { prenom: "Bob", nom: "Collin" },
    { prenom: "Claire", nom: "Dubois" }
];

personnes.forEach(p => {
    const persTemp = {
        ...p,
        saluer() {
            return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
        }
    };
    console.log(persTemp.saluer());
});
