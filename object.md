# Introduction aux Objets en JavaScript

> **Cours complet pour débutants** - Apprenez à maîtriser les objets en JavaScript, de la syntaxe de base aux concepts avancés.

## 📋 Table des Matières

1. [Prérequis](#prérequis)
2. [Séance 1 : Fondamentaux des Objets](#séance-1--fondamentaux-des-objets)
3. [Séance 2 : Concepts Avancés](#séance-2--concepts-avancés)
4. [Exercices Pratiques](#exercices-pratiques)
5. [Projet Final](#projet-final)
6. [Ressources Supplémentaires](#ressources-supplémentaires)

---

## Prérequis

Ce cours est conçu pour des débutants ayant déjà des bases en JavaScript :

- ✅ Notions de base en variables (`let`, `const`, `var`)
- ✅ Connaissance des types primitifs (`string`, `number`, `boolean`, `undefined`, `null`)
- ✅ Notions élémentaires sur les tableaux (array)
- ✅ Compréhension des opérateurs de base

---

## Séance 1 : Fondamentaux des Objets

### 1.1 Introduction : Qu'est-ce qu'un Objet ?

#### 🎯 Concept Fondamental

Un **objet** en JavaScript est une structure de données qui permet de regrouper des informations connexes sous un seul nom. Au lieu d'utiliser plusieurs variables distinctes, vous pouvez organiser logiquement vos données.

**Exemple du problème :**
```javascript
// ❌ Approche inefficace avec des variables séparées
let personneName = "Dupont";
let personnePrenom = "Jean";
let personneAge = 30;
let personneVille = "Paris";
```

**Solution avec un objet :**
```javascript
// ✅ Approche efficace avec un objet
const personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    ville: "Paris"
};
```

#### 🚗 Analogie : La Voiture

Imaginez une voiture. Elle possède plusieurs caractéristiques qui la définissent :

```javascript
const voiture = {
    marque: "Renault",
    modele: "Clio",
    annee: 2021,
    couleur: "rouge",
    kilometrage: 15000
};
```

Chaque **propriété** (marque, modele, etc.) décrit un aspect de la voiture.

### 1.2 Syntaxe de Base : Création d'un Objet
#### 📝 Syntaxe Générale

```javascript
const nomObjet = {
    cle1: valeur1,
    cle2: valeur2,
    cle3: valeur3
};
```

**Éléments importants :**
- `{}` : Accolades pour délimiter l'objet
- `cle: valeur` : Paires clé-valeur séparées par `:`
- `,` : Virgule pour séparer les propriétés (sauf la dernière)

#### 💡 Exemple Complet

```javascript
const personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    estEtudiant: false,
    hobbies: ["lecture", "sport"]
};
```

**Vocabulaire Clé :**
- `personne` → L'**objet** (le conteneur)
- `nom`, `prenom`, `age` → Les **clés** ou **propriétés**
- `"Dupont"`, `"Jean"`, `30` → Les **valeurs**
- Une paire clé-valeur complète = une **propriété de l'objet**

### 1.3 Accéder aux Données (Notation par Point)
Pour lire ou récupérer une valeur spécifique, utilisez la **notation par point** (`.`) :

```javascript
console.log(personne.nom);         // Affiche : "Dupont"
console.log(personne.age);         // Affiche : 30
console.log(personne.estEtudiant); // Affiche : false

// Stocker une valeur dans une variable
const agePersonne = personne.age;
console.log(agePersonne);          // Affiche : 30

// Combiner plusieurs valeurs
const nomComplet = personne.prenom + " " + personne.nom;
console.log(nomComplet);           // Affiche : "Jean Dupont"
```

**Syntaxe :** `nomObjet.nomPropriete`

### 1.4 Modifier et Ajouter des Données
Les objets déclarés avec `const` sont **mutables** : vous pouvez modifier leurs propriétés internes, mais vous ne pouvez pas réassigner l'objet entier.

#### ✏️ Modifier une Propriété Existante

```javascript
console.log(personne.age);  // Affiche : 30

personne.age = 31;          // Modification
console.log(personne.age);  // Affiche : 31
```

#### ➕ Ajouter une Nouvelle Propriété

```javascript
personne.ville = "Paris";   // Ajout d'une nouvelle propriété
personne.profession = "Développeur";

console.log(personne);
// Affiche : { nom: "Dupont", prenom: "Jean", age: 31, estEtudiant: false, ville: "Paris", profession: "Développeur" }
```

#### ❌ Supprimer une Propriété

```javascript
delete personne.estEtudiant;
console.log(personne.estEtudiant); // Affiche : undefined
```

### 1.5 Exercices Pratiques - Niveau 1

#### Exercice 1 : Création d'un Objet Livre
Créez un objet `livre` avec les propriétés suivantes :
- `titre` : "Le Petit Prince"
- `auteur` : "Antoine de Saint-Exupéry"
- `pages` : 96

Affichez le titre dans la console.

<details>
<summary>💡 Solution</summary>

```javascript
const livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

console.log(livre.titre); // Affiche : "Le Petit Prince"
```
</details>

#### Exercice 2 : Modification
Modifiez le nombre de pages de votre objet `livre` à 120.

<details>
<summary>💡 Solution</summary>

```javascript
livre.pages = 120;
console.log(livre.pages); // Affiche : 120
```
</details>

#### Exercice 3 : Ajout de Propriété
Ajoutez une propriété `genre` avec la valeur "Conte philosophique" à votre objet `livre`.

<details>
<summary>💡 Solution</summary>

```javascript
livre.genre = "Conte philosophique";
console.log(livre);
```
</details>

---

## Séance 2 : Concepts Avancés

### 2.1 Notation par Crochets (Bracket Notation)
La notation par point ne fonctionne pas dans tous les cas. Utilisez la **notation par crochets** `[]` quand :
- La clé contient des espaces ou caractères spéciaux
- Vous utilisez une variable pour accéder à la propriété
- La clé est un nombre

#### 📌 Cas d'Utilisation

```javascript
const utilisateur = {
    id: 1,
    "nom complet": "Marie Curie",
    age: 65,
    "pays-origine": "Pologne"
};

// ✅ Notation par crochets pour les clés avec espaces
console.log(utilisateur["nom complet"]); // Affiche : "Marie Curie"

// ❌ Ceci ne fonctionne pas :
// console.log(utilisateur.nom complet); // Erreur de syntaxe !

// ✅ Avec tirets
console.log(utilisateur["pays-origine"]); // Affiche : "Pologne"
```

#### 🔄 Accès Dynamique avec Variables

```javascript
const propriete = "age";
console.log(utilisateur[propriete]); // Affiche : 65

// Utilisation pratique dans une boucle
const cles = ["id", "nom complet", "age"];
for (let i = 0; i < cles.length; i++) {
    console.log(cles[i] + " : " + utilisateur[cles[i]]);
}
```

#### 📊 Comparaison des Notations

| Situation | Notation Point | Notation Crochets |
|-----------|----------------|-------------------|
| Clé simple | ✅ `obj.nom` | ✅ `obj["nom"]` |
| Clé avec espace | ❌ | ✅ `obj["nom complet"]` |
| Clé dynamique | ❌ | ✅ `obj[variable]` |
| Clé numérique | ❌ | ✅ `obj[0]` |

### 2.2 Objets Imbriqués (Nested Objects)
Les propriétés d'un objet peuvent contenir **n'importe quel type de valeur** : primitifs, tableaux, ou même d'autres objets !

#### 🏢 Exemple : Étudiant avec Adresse

```javascript
const etudiant = {
    nom: "Sophie",
    prenom: "Martin",
    age: 22,
    adresse: {                    // ⬅️ Objet imbriqué
        rue: "12 Rue de la République",
        ville: "Lyon",
        codePostal: "69001",
        pays: "France"
    },
    notes: [15, 12, 18, 16],     // ⬅️ Tableau imbriqué
    estInscrit: true
};
```

#### 🔍 Accéder aux Données Imbriquées

```javascript
// Accès à l'objet imbriqué
console.log(etudiant.adresse.ville);      // Affiche : "Lyon"
console.log(etudiant.adresse.codePostal); // Affiche : "69001"

// Accès au tableau imbriqué
console.log(etudiant.notes[0]);           // Affiche : 15 (première note)
console.log(etudiant.notes[2]);           // Affiche : 18 (troisième note)

// Modification de valeurs imbriquées
etudiant.adresse.ville = "Paris";
etudiant.notes[0] = 17;
```

#### 🌳 Objets Profondément Imbriqués

```javascript
const entreprise = {
    nom: "TechCorp",
    employes: {
        direction: {
            ceo: {
                nom: "Alice",
                age: 45,
                competences: ["leadership", "stratégie"]
            },
            cto: {
                nom: "Bob",
                age: 40,
                competences: ["architecture", "cloud"]
            }
        }
    }
};

// Accès en profondeur
console.log(entreprise.employes.direction.ceo.nom); // Affiche : "Alice"
console.log(entreprise.employes.direction.cto.competences[1]); // Affiche : "cloud"
```

### 2.3 Méthodes d'Objets (Fonctions dans les Objets)
Une **méthode** est une propriété dont la valeur est une fonction. Les méthodes permettent aux objets d'effectuer des actions.

#### 🧮 Exemple : Calculatrice

```javascript
const calculatrice = {
    nombre1: 10,
    nombre2: 5,
    
    additionner: function() {
        return this.nombre1 + this.nombre2;
    },
    
    soustraire: function() {
        return this.nombre1 - this.nombre2;
    },
    
    multiplier: function() {
        return this.nombre1 * this.nombre2;
    }
};

// Appel des méthodes (avec parenthèses !)
console.log(calculatrice.additionner());  // Affiche : 15
console.log(calculatrice.soustraire());   // Affiche : 5
console.log(calculatrice.multiplier());   // Affiche : 50
```

#### 🔑 Le Mot-Clé `this`

`this` fait référence à l'**objet courant** dans lequel la méthode est définie.

```javascript
const personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    
    sePresenter: function() {
        return "Bonjour, je m'appelle " + this.prenom + " " + this.nom + 
               " et j'ai " + this.age + " ans.";
    },
    
    vieillir: function() {
        this.age++;
        return "J'ai maintenant " + this.age + " ans.";
    }
};

console.log(personne.sePresenter()); // Affiche : "Bonjour, je m'appelle Jean Dupont et j'ai 30 ans."
console.log(personne.vieillir());    // Affiche : "J'ai maintenant 31 ans."
console.log(personne.age);           // Affiche : 31
```

#### ⚡ Syntaxe Moderne (ES6+)

```javascript
const utilisateur = {
    username: "john_doe",
    email: "john@example.com",
    
    // Syntaxe courte (sans le mot 'function')
    afficherInfo() {
        return `${this.username} - ${this.email}`;
    },
    
    // Avec paramètres
    changerEmail(nouvelEmail) {
        this.email = nouvelEmail;
        return "Email mis à jour !";
    }
};

console.log(utilisateur.afficherInfo());        // Affiche : "john_doe - john@example.com"
console.log(utilisateur.changerEmail("j@test.com")); // Affiche : "Email mis à jour !"
console.log(utilisateur.email);                 // Affiche : "j@test.com"
```

### 2.4 Itérer sur les Propriétés d'un Objet

#### 🔄 Boucle `for...in`

```javascript
const voiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2022,
    couleur: "bleu"
};

for (let cle in voiture) {
    console.log(cle + " : " + voiture[cle]);
}
// Affiche :
// marque : Toyota
// modele : Corolla
// annee : 2022
// couleur : bleu
```

#### 🛠️ Méthodes Utiles

```javascript
const produit = {
    nom: "Laptop",
    prix: 999,
    stock: 15
};

// Obtenir toutes les clés
const cles = Object.keys(produit);
console.log(cles); // Affiche : ["nom", "prix", "stock"]

// Obtenir toutes les valeurs
const valeurs = Object.values(produit);
console.log(valeurs); // Affiche : ["Laptop", 999, 15]

// Obtenir les paires clé-valeur
const entrees = Object.entries(produit);
console.log(entrees); 
// Affiche : [["nom", "Laptop"], ["prix", 999], ["stock", 15]]
```

---

## Exercices Pratiques

### 🎯 Exercices - Niveau 2 (Intermédiaire)

#### Exercice 4 : Restaurant Complet
Créez un objet `restaurant` avec :
- `nom` : "Le Gourmet"
- Un objet `adresse` contenant :
  - `rue` : "45 Avenue des Champs"
  - `ville` : "Paris"
  - `codePostal` : "75008"
- Un tableau `plats` contenant : ["Pizza", "Pasta", "Salade", "Steak"]

Affichez :
1. Le nom de la rue
2. Le deuxième plat du menu
3. Le nombre total de plats

<details>
<summary>💡 Solution</summary>

```javascript
const restaurant = {
    nom: "Le Gourmet",
    adresse: {
        rue: "45 Avenue des Champs",
        ville: "Paris",
        codePostal: "75008"
    },
    plats: ["Pizza", "Pasta", "Salade", "Steak"]
};

console.log(restaurant.adresse.rue);     // "45 Avenue des Champs"
console.log(restaurant.plats[1]);        // "Pasta"
console.log(restaurant.plats.length);    // 4
```
</details>

#### Exercice 5 : Méthode de Salutation
Reprenez l'objet `personne` et ajoutez-lui une méthode `saluer()` qui retourne :
"Bonjour, je m'appelle [Prénom] [Nom]"

<details>
<summary>💡 Solution</summary>

```javascript
const personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    
    saluer: function() {
        return "Bonjour, je m'appelle " + this.prenom + " " + this.nom;
    }
};

console.log(personne.saluer()); // "Bonjour, je m'appelle Jean Dupont"
```
</details>

#### Exercice 6 : Gestion de Compte Bancaire
Créez un objet `compteBancaire` avec :
- `titulaire` : votre nom
- `solde` : 1000
- Méthode `deposer(montant)` : ajoute le montant au solde
- Méthode `retirer(montant)` : retire le montant du solde
- Méthode `afficherSolde()` : affiche le solde actuel

<details>
<summary>💡 Solution</summary>

```javascript
const compteBancaire = {
    titulaire: "Marie Martin",
    solde: 1000,
    
    deposer: function(montant) {
        this.solde += montant;
        return "Dépôt de " + montant + "€ effectué. Nouveau solde : " + this.solde + "€";
    },
    
    retirer: function(montant) {
        if (montant > this.solde) {
            return "Solde insuffisant !";
        }
        this.solde -= montant;
        return "Retrait de " + montant + "€ effectué. Nouveau solde : " + this.solde + "€";
    },
    
    afficherSolde: function() {
        return "Solde actuel : " + this.solde + "€";
    }
};

console.log(compteBancaire.deposer(500));      // Dépôt de 500€...
console.log(compteBancaire.retirer(200));      // Retrait de 200€...
console.log(compteBancaire.afficherSolde());   // Solde actuel : 1300€
```
</details>

### 🚀 Exercices - Niveau 3 (Avancé)

#### Exercice 7 : Bibliothèque de Livres
Créez un objet `bibliotheque` qui contient :
- `nom` : "Bibliothèque Municipale"
- `livres` : un tableau d'objets livre, chaque livre ayant :
  - `titre`
  - `auteur`
  - `annee`
  - `disponible` (booléen)
- Méthode `rechercherParAuteur(nomAuteur)` : retourne tous les livres de cet auteur
- Méthode `emprunter(titre)` : change `disponible` à `false` pour ce livre
- Méthode `livresDisponibles()` : retourne le nombre de livres disponibles

<details>
<summary>💡 Solution</summary>

```javascript
const bibliotheque = {
    nom: "Bibliothèque Municipale",
    livres: [
        { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
        { titre: "Le Meilleur des mondes", auteur: "Aldous Huxley", annee: 1932, disponible: true },
        { titre: "La Ferme des animaux", auteur: "George Orwell", annee: 1945, disponible: false }
    ],
    
    rechercherParAuteur: function(nomAuteur) {
        return this.livres.filter(livre => livre.auteur === nomAuteur);
    },
    
    emprunter: function(titre) {
        const livre = this.livres.find(l => l.titre === titre);
        if (!livre) {
            return "Livre non trouvé.";
        }
        if (!livre.disponible) {
            return "Ce livre est déjà emprunté.";
        }
        livre.disponible = false;
        return "Vous avez emprunté : " + titre;
    },
    
    livresDisponibles: function() {
        return this.livres.filter(livre => livre.disponible).length;
    }
};

console.log(bibliotheque.rechercherParAuteur("George Orwell"));
console.log(bibliotheque.emprunter("1984"));
console.log(bibliotheque.livresDisponibles()); // 1
```
</details>

#### Exercice 8 : Panier d'Achat E-commerce
Créez un objet `panier` avec :
- `articles` : tableau d'objets avec `nom`, `prix`, `quantite`
- Méthode `ajouterArticle(nom, prix, quantite)`
- Méthode `retirerArticle(nom)`
- Méthode `calculerTotal()` : retourne le prix total
- Méthode `appliquerReduction(pourcentage)` : applique une réduction sur le total

<details>
<summary>💡 Solution</summary>

```javascript
const panier = {
    articles: [],
    
    ajouterArticle: function(nom, prix, quantite) {
        this.articles.push({ nom, prix, quantite });
        return nom + " ajouté au panier.";
    },
    
    retirerArticle: function(nom) {
        const index = this.articles.findIndex(a => a.nom === nom);
        if (index !== -1) {
            this.articles.splice(index, 1);
            return nom + " retiré du panier.";
        }
        return "Article non trouvé.";
    },
    
    calculerTotal: function() {
        return this.articles.reduce((total, article) => {
            return total + (article.prix * article.quantite);
        }, 0);
    },
    
    appliquerReduction: function(pourcentage) {
        const total = this.calculerTotal();
        const reduction = total * (pourcentage / 100);
        return total - reduction;
    }
};

panier.ajouterArticle("Laptop", 999, 1);
panier.ajouterArticle("Souris", 25, 2);
console.log("Total : " + panier.calculerTotal() + "€");        // 1049€
console.log("Avec 10% : " + panier.appliquerReduction(10) + "€"); // 944.1€
```
</details>

---

## Projet Final

### 🎮 Créer un Système de Gestion d'Étudiants

**Objectif :** Créer un objet `ecole` qui gère des étudiants et leurs notes.

**Fonctionnalités requises :**

1. **Structure de l'école :**
   - Nom de l'école
   - Tableau d'étudiants (objets)

2. **Chaque étudiant doit avoir :**
   - `id` (numéro unique)
   - `nom` et `prenom`
   - `notes` (tableau de nombres)
   - `classe` (ex: "3ème A")

3. **Méthodes de l'école :**
   - `ajouterEtudiant(id, nom, prenom, classe)`
   - `ajouterNote(idEtudiant, note)`
   - `calculerMoyenne(idEtudiant)`
   - `listerEtudiants()`
   - `meilleurEtudiant()` : retourne l'étudiant avec la meilleure moyenne

<details>
<summary>💡 Solution Complète</summary>

```javascript
const ecole = {
    nom: "Collège Jean Moulin",
    etudiants: [],
    
    ajouterEtudiant: function(id, nom, prenom, classe) {
        const etudiant = {
            id: id,
            nom: nom,
            prenom: prenom,
            classe: classe,
            notes: []
        };
        this.etudiants.push(etudiant);
        return prenom + " " + nom + " a été ajouté(e).";
    },
    
    ajouterNote: function(idEtudiant, note) {
        const etudiant = this.etudiants.find(e => e.id === idEtudiant);
        if (!etudiant) {
            return "Étudiant non trouvé.";
        }
        if (note < 0 || note > 20) {
            return "Note invalide (0-20).";
        }
        etudiant.notes.push(note);
        return "Note ajoutée pour " + etudiant.prenom + " " + etudiant.nom;
    },
    
    calculerMoyenne: function(idEtudiant) {
        const etudiant = this.etudiants.find(e => e.id === idEtudiant);
        if (!etudiant) {
            return "Étudiant non trouvé.";
        }
        if (etudiant.notes.length === 0) {
            return "Aucune note disponible.";
        }
        const somme = etudiant.notes.reduce((acc, note) => acc + note, 0);
        return (somme / etudiant.notes.length).toFixed(2);
    },
    
    listerEtudiants: function() {
        if (this.etudiants.length === 0) {
            return "Aucun étudiant inscrit.";
        }
        return this.etudiants.map(e => {
            return e.prenom + " " + e.nom + " (" + e.classe + ")";
        }).join("\n");
    },
    
    meilleurEtudiant: function() {
        if (this.etudiants.length === 0) {
            return "Aucun étudiant.";
        }
        
        let meilleur = null;
        let meilleureMoyenne = -1;
        
        for (let etudiant of this.etudiants) {
            if (etudiant.notes.length > 0) {
                const moyenne = parseFloat(this.calculerMoyenne(etudiant.id));
                if (moyenne > meilleureMoyenne) {
                    meilleureMoyenne = moyenne;
                    meilleur = etudiant;
                }
            }
        }
        
        if (!meilleur) {
            return "Aucune note enregistrée.";
        }
        
        return meilleur.prenom + " " + meilleur.nom + 
               " avec une moyenne de " + meilleureMoyenne;
    }
};

// Tests
console.log(ecole.ajouterEtudiant(1, "Dubois", "Sophie", "3ème A"));
console.log(ecole.ajouterEtudiant(2, "Martin", "Lucas", "3ème A"));
console.log(ecole.ajouterEtudiant(3, "Lefebvre", "Emma", "3ème B"));

console.log(ecole.ajouterNote(1, 15));
console.log(ecole.ajouterNote(1, 17));
console.log(ecole.ajouterNote(1, 16));

console.log(ecole.ajouterNote(2, 12));
console.log(ecole.ajouterNote(2, 14));

console.log(ecole.ajouterNote(3, 18));
console.log(ecole.ajouterNote(3, 19));
console.log(ecole.ajouterNote(3, 17));

console.log("\n--- Liste des étudiants ---");
console.log(ecole.listerEtudiants());

console.log("\n--- Moyennes ---");
console.log("Sophie : " + ecole.calculerMoyenne(1));
console.log("Lucas : " + ecole.calculerMoyenne(2));
console.log("Emma : " + ecole.calculerMoyenne(3));

console.log("\n--- Meilleur étudiant ---");
console.log(ecole.meilleurEtudiant());
```
</details>

---

## Ressources Supplémentaires

### 📚 Concepts Avancés à Explorer

1. **Destructuration d'objets**
   ```javascript
   const { nom, age } = personne;
   ```

2. **Spread operator**
   ```javascript
   const copie = { ...personne };
   ```

3. **Object.assign()**
   ```javascript
   const fusion = Object.assign({}, obj1, obj2);
   ```

4. **JSON (JavaScript Object Notation)**
   ```javascript
   const json = JSON.stringify(objet);
   const objet = JSON.parse(json);
   ```

5. **Classes ES6** (évolution des objets)
   ```javascript
   class Personne {
       constructor(nom, age) {
           this.nom = nom;
           this.age = age;
       }
   }
   ```

### 🔗 Liens Utiles

- [MDN - Objets JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript.info - Objects](https://javascript.info/object)
- [W3Schools - JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

### ✅ Checklist de Compétences

À la fin de ce cours, vous devriez être capable de :

- ✅ Créer des objets avec la syntaxe littérale `{}`
- ✅ Accéder aux propriétés avec `.` et `[]`
- ✅ Modifier et ajouter des propriétés
- ✅ Supprimer des propriétés avec `delete`
- ✅ Créer et utiliser des objets imbriqués
- ✅ Définir et appeler des méthodes
- ✅ Utiliser `this` dans les méthodes
- ✅ Itérer sur les propriétés avec `for...in`
- ✅ Utiliser `Object.keys()`, `Object.values()`, `Object.entries()`

---

## Résumé

Les **objets** sont des structures de données fondamentales en JavaScript qui permettent de :
- 📦 Regrouper des données connexes
- 🎯 Organiser le code de manière logique
- ⚙️ Encapsuler des données et des comportements (méthodes)
- 🌐 Modéliser des entités du monde réel

**Point clé :** Les objets sont mutables et passés par référence. Maîtriser les objets est essentiel pour progresser en JavaScript et comprendre des concepts plus avancés comme les classes, les modules, et les frameworks modernes (React, Vue, Angular).

---

*Bon apprentissage ! 🚀*

