// Contenu complet des cours - Généré automatiquement depuis les fichiers .md
const courseContent = {
    variables: `
# 🔧 Guide Complet des Variables, Structures Conditionnelles et Boucles en JavaScript

## 🎯 Introduction

JavaScript est un langage dynamiquement typé qui offre plusieurs façons de déclarer des variables et de contrôler le flux d'exécution. Ce guide couvre les types de données, les déclarations de variables (\`var\`, \`let\`, \`const\`), les structures conditionnelles et les boucles avec des exemples pratiques.

## 📊 Types de Données en JavaScript

### 🧠 Comprendre les Types de Données
**Les types de données** sont comme des catégories qui disent à JavaScript "quel genre d'information" vous stockez. C'est comme trier vos affaires dans des boîtes étiquetées !

### Types Primitifs (Les Bases)

#### 🔢 Number - Pour Tous les Nombres
\`\`\`javascript
// Nombres entiers (sans virgule)
let age = 18;           // Ton âge
let annee = 2024;       // L'année actuelle
let temperature = -5;   // Température en hiver

// Nombres décimaux (avec virgule)
let prix = 19.99;       // Prix d'un jeu vidéo
let note = 15.5;        // Ta note en maths
let taille = 1.75;      // Ta taille en mètres

// Nombres spéciaux
let infini = Infinity;  // Plus grand que tout
let pasUnNombre = NaN;  // "Not a Number" - quand un calcul échoue

// 🎯 Exemple pratique : calculer l'âge en mois
let ageEnAnnees = 18;
let ageEnMois = ageEnAnnees * 12;
console.log(\`Tu as \${ageEnMois} mois !\`); // Tu as 216 mois !
\`\`\`

#### 📝 String - Pour le Texte
\`\`\`javascript
// Différentes façons d'écrire du texte
let nom = "Alice";              // Avec guillemets doubles
let prenom = 'Bob';             // Avec guillemets simples
let message = \`Salut \${nom}!\`;  // Avec backticks (permet d'insérer des variables)

// 🎮 Exemple pratique : créer un message de bienvenue
let pseudo = "GamerPro";
let niveau = 42;
let bienvenue = \`Salut \${pseudo} ! Tu es niveau \${niveau}.\`;
console.log(bienvenue); // Salut GamerPro ! Tu es niveau 42.

// Texte sur plusieurs lignes
let poeme = \`Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!\`;
\`\`\`

#### ✅ Boolean - Pour Vrai ou Faux
\`\`\`javascript
// Seulement deux valeurs possibles
let estMajeur = true;     // Vrai
let estMineur = false;    // Faux

// 🎯 Exemple pratique : vérifier si on peut conduire
let age = 17;
let peutConduire = age >= 18;
console.log(peutConduire); // false (car 17 < 18)

// Utilisé pour des états
let jeuEnPause = false;
let sonActive = true;
let modeNuit = true;
\`\`\`

#### 🚫 Undefined - "Pas Encore Défini"
\`\`\`javascript
// Quand une variable existe mais n'a pas de valeur
let nonDefini;
console.log(nonDefini); // undefined

// C'est comme une boîte vide avec une étiquette
let scoreJeu; // La variable existe mais pas de score encore
console.log(scoreJeu); // undefined

// 🎯 Exemple : vérifier si une variable a une valeur
if (scoreJeu === undefined) {
    console.log("Le jeu n'a pas encore commencé !");
}
\`\`\`

#### 🔳 Null - "Volontairement Vide"
\`\`\`javascript
// Quand vous voulez dire "rien" de façon intentionnelle
let joueurActuel = null; // Personne ne joue pour le moment

// Différence avec undefined :
// undefined = "J'ai oublié de mettre quelque chose"
// null = "Je veux que ce soit vide"

let meilleurScore = null; // Aucun score enregistré encore
let dernierJoueur = null; // Personne n'a joué
\`\`\`

#### 🔣 Symbol - Identifiant Unique (Avancé)
\`\`\`javascript
// Pour créer des identifiants uniques (rare à utiliser au début)
let symbole = Symbol('id');
let autreSymbole = Symbol('id');

// Même description, mais différents !
console.log(symbole === autreSymbole); // false

// Utilisé dans des cas très spéciaux, ne vous inquiétez pas pour l'instant
\`\`\`

#### 🔢 BigInt - Très Grands Nombres (Avancé)
\`\`\`javascript
// Pour des nombres ÉNORMES (plus grands que les Number normaux)
let grandNombre = 123456789012345678901234567890n; // Le 'n' à la fin est important

// Exemple : nombre d'étoiles dans l'univers
let nombreEtoiles = 1000000000000000000000000n;
console.log(typeof nombreEtoiles); // "bigint"
\`\`\`

### Types Non-Primitifs (Les Objets - Plus Complexes)

#### 📦 Object - Comme une Fiche d'Identité
\`\`\`javascript
// Un objet stocke plusieurs informations liées
let personne = {
    nom: "Alice",        // Propriété nom
    age: 18,            // Propriété age
    estEtudiant: true,  // Propriété estEtudiant
    ville: "Paris"      // Propriété ville
};

// 🎮 Exemple pratique : profil de joueur
let joueur = {
    pseudo: "DragonSlayer",
    niveau: 25,
    pointsVie: 100,
    arme: "Épée magique",
    estEnVie: true
};

// Accéder aux propriétés
console.log(joueur.pseudo); // "DragonSlayer"
console.log(joueur.niveau); // 25
\`\`\`

#### 📋 Array - Une Liste Ordonnée
\`\`\`javascript
// Un tableau stocke plusieurs valeurs dans l'ordre
let fruits = ["pomme", "banane", "orange"];
let notes = [15, 18, 12, 16];
let amis = ["Alice", "Bob", "Charlie"];

// 🎯 Exemple pratique : playlist de musique
let playlist = [
    "Bohemian Rhapsody",
    "Imagine",
    "Hotel California",
    "Stairway to Heaven"
];

// Accéder aux éléments (commence à 0 !)
console.log(playlist[0]); // "Bohemian Rhapsody" (premier)
console.log(playlist[1]); // "Imagine" (deuxième)
console.log(playlist.length); // 4 (nombre total)
\`\`\`

#### 🔧 Function - Une Recette de Code
\`\`\`javascript
// Une fonction est comme une recette : on donne des ingrédients, elle fait quelque chose
let saluer = function(nom) {
    return \`Salut \${nom} ! Comment ça va ?\`;
};

// 🎯 Exemple pratique : calculer la moyenne
let calculerMoyenne = function(notes) {
    let somme = 0;
    for (let note of notes) {
        somme += note;
    }
    return somme / notes.length;
};

let mesNotes = [15, 18, 12, 16];
let moyenne = calculerMoyenne(mesNotes);
console.log(\`Ta moyenne est \${moyenne}\`); // Ta moyenne est 15.25
\`\`\`

#### 📅 Date - Pour Gérer le Temps
\`\`\`javascript
// Pour travailler avec les dates et heures
let maintenant = new Date();
let monAnniversaire = new Date(2006, 5, 15); // Année, mois (0-11), jour

// 🎂 Exemple pratique : calculer l'âge
let dateNaissance = new Date(2006, 0, 1); // 1er janvier 2006
let aujourdhui = new Date();
let age = aujourdhui.getFullYear() - dateNaissance.getFullYear();
console.log(\`Tu as \${age} ans\`);
\`\`\`

#### 🗺️ Map et Set - Collections Spéciales (Avancé)
\`\`\`javascript
// Map : comme un dictionnaire (clé → valeur)
let scores = new Map();
scores.set("Alice", 1500);
scores.set("Bob", 1200);

// Set : liste sans doublons
let couleursFavorites = new Set();
couleursFavorites.add("rouge");
couleursFavorites.add("bleu");
couleursFavorites.add("rouge"); // Ignoré car déjà présent

console.log(couleursFavorites.size); // 2 (pas 3 !)
\`\`\`

### 🔍 Vérification des Types - "De Quel Type Es-Tu ?"

#### 🕵️ L'Opérateur typeof - Le Détective des Types
\`\`\`javascript
// typeof te dit quel type de données tu as
console.log(typeof 42);           // "number"
console.log(typeof "Hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" ⚠️ PIÈGE ! null dit "object"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object" ⚠️ Les tableaux aussi !
console.log(typeof function(){}); // "function"

// 🎯 Exemple pratique : vérifier avant de calculer
function peutCalculer(a, b) {
    if (typeof a !== "number") {
        return \`❌ \${a} n'est pas un nombre !\`;
    }
    if (typeof b !== "number") {
        return \`❌ \${b} n'est pas un nombre !\`;
    }
    return \`✅ On peut calculer \${a} + \${b} = \${a + b}\`;
}

console.log(peutCalculer(5, 3));     // ✅ On peut calculer 5 + 3 = 8
console.log(peutCalculer(5, "abc")); // ❌ abc n'est pas un nombre !
\`\`\`

#### 🎮 Exemple Pratique : Validation de Profil Joueur
\`\`\`javascript
function validerProfilJoueur(profil) {
    // Vérifier que le pseudo est un texte
    if (typeof profil.pseudo !== "string") {
        return "❌ Le pseudo doit être du texte";
    }
    
    // Vérifier que le niveau est un nombre
    if (typeof profil.niveau !== "number") {
        return "❌ Le niveau doit être un nombre";
    }
    
    // Vérifier que estEnVie est un boolean
    if (typeof profil.estEnVie !== "boolean") {
        return "❌ estEnVie doit être true ou false";
    }
    
    return "✅ Profil valide !";
}

// Tests
let bonProfil = {pseudo: "Gamer123", niveau: 15, estEnVie: true};
let mauvaisProfil = {pseudo: 123, niveau: "quinze", estEnVie: "oui"};

console.log(validerProfilJoueur(bonProfil));    // ✅ Profil valide !
console.log(validerProfilJoueur(mauvaisProfil)); // ❌ Le pseudo doit être du texte
\`\`\`

#### 🔍 Vérifications Spéciales
\`\`\`javascript
// Pour les tableaux (typeof ne suffit pas)
function estUnTableau(valeur) {
    return Array.isArray(valeur);
}

console.log(estUnTableau([1, 2, 3])); // true
console.log(estUnTableau("hello"));   // false

// Pour null (typeof ment !)
function estNull(valeur) {
    return valeur === null;
}

console.log(estNull(null));      // true
console.log(estNull(undefined)); // false
\`\`\`

## 🏷️ Déclaration de Variables: var, let, const

### 🧠 Concepts Clés à Comprendre

#### 🎯 Qu'est-ce que la Portée (Scope) ? - "Où Ma Variable Peut-Elle Aller ?"
**La portée** détermine où dans votre code une variable peut être utilisée. C'est comme les **zones WiFi** dans votre maison !

- **Portée globale** : Comme le WiFi dans toute la maison - accessible partout
- **Portée de fonction** : Comme le WiFi seulement dans votre chambre - accessible que dans cette fonction
- **Portée de bloc** : Comme le WiFi seulement dans un coin de votre chambre - accessible que dans ce bloc \`{}\`

\`\`\`javascript
// 🏠 Analogie avec les pièces de la maison
let maisonEntiere = "Accessible partout"; // Portée globale

function maChambre() {
    let dansLaChambre = "Seulement dans ma chambre"; // Portée de fonction
    
    if (true) {
        let coinBureau = "Seulement au coin bureau"; // Portée de bloc
        console.log(maisonEntiere);  // ✅ OK - accessible
        console.log(dansLaChambre);  // ✅ OK - accessible
        console.log(coinBureau);     // ✅ OK - accessible
    }
    
    console.log(maisonEntiere);  // ✅ OK - accessible
    console.log(dansLaChambre);  // ✅ OK - accessible
    console.log(coinBureau);  // ❌ ERREUR - pas accessible ici !
}

console.log(maisonEntiere);      // ✅ OK - accessible
console.log(dansLaChambre);   // ❌ ERREUR - pas accessible ici !
console.log(coinBureau);      // ❌ ERREUR - pas accessible ici !
\`\`\`

#### 🚀 Qu'est-ce que le Hoisting ? - "JavaScript Lit Tout d'Abord"
**Le Hoisting** ("remontée" en français) est comme si JavaScript **lisait tout votre code en avance** avant de l'exécuter, et "remontait" les déclarations vers le haut.

Imaginez que vous écrivez une liste de courses, mais JavaScript la réorganise avant d'aller au magasin !

\`\`\`javascript
// 📝 Ce que vous écrivez :
console.log("Ma variable:", maVariable); // Vous utilisez avant de déclarer
var maVariable = "Hello";

// 🤖 Ce que JavaScript "voit" réellement :
var maVariable; // Déclaration remontée au début
console.log("Ma variable:", maVariable); // undefined (existe mais pas de valeur)
maVariable = "Hello"; // Assignation à sa place originale

// 🎯 Exemple concret : préparer un gâteau
// Vous écrivez :
console.log("Ingrédients:", ingredients); // undefined
var ingredients = ["farine", "oeufs", "sucre"];

// JavaScript comprend :
var ingredients; // "Je sais qu'il y aura des ingrédients"
console.log("Ingrédients:", ingredients); // undefined (boîte vide)
ingredients = ["farine", "oeufs", "sucre"]; // Maintenant on remplit la boîte
\`\`\`



### 📜 var - L'ancienne méthode (À éviter)

#### 🎈 Imagine var comme un Ballon qui S'Envole

**var** est comme un **ballon d'hélium** : vous pensez le tenir dans votre main (dans un bloc \`{}\`), mais il s'envole toujours jusqu'au plafond (de la fonction ou globalement) !

#### 🔄 Portée de Fonction - Le Ballon S'Échappe Toujours !

\`\`\`javascript
// 🎈 Exemple SIMPLE : var s'échappe du bloc if
function testerAge() {
    if (true) {
        var age = 18; // Déclaré dans le if
        console.log("Dans if:", age); // 18
    }
    
    // SURPRISE ! age est accessible ici aussi
    console.log("Hors if:", age); // 18 - il est sorti du if !
}

testerAge();
// Résultat:
// Dans if: 18
// Hors if: 18  ← Bizarre ! age est sorti du bloc if

// 🏫 Exemple concret : Vérifier si on peut entrer au cinéma
function entrerAuCinema() {
    var film = "Film pour tous"; // Accessible partout
    
    if (true) { // Vérifie l'âge
        var ageClient = 15; // Déclaré dans le if
    }
    
    // PROBLÈME : ageClient existe ici aussi !
    console.log("Film:", film);        // Film pour tous ✅
    console.log("Âge:", ageClient);    // 15 ← Sorti du if !
}

entrerAuCinema();

// 🎯 Exemple TRÈS SIMPLE : Prix d'un produit
function calculerPrix() {
    if (true) {
        var prix = 50; // Déclaré dans le if
    }
    
    console.log("Le prix est:", prix); // 50 - il sort du if !
    // Logiquement, prix devrait être inaccessible ici
    // Mais avec var, il "s'échappe" !
}

calculerPrix();
\`\`\`

#### 🚀 Hoisting - Le Voyageur du Temps !

**var** est comme un **voyageur du temps** : JavaScript le voit dans le futur avant même que vous l'écriviez !

\`\`\`javascript
// ✋ Exemple ULTRA SIMPLE
console.log(nom); // undefined (pas d'erreur !)
var nom = "Alice";
console.log(nom); // Alice

// 🤔 Ce que JavaScript fait vraiment :
// 1. Il voit "var nom" et le remonte en haut
// 2. Il crée la variable nom = undefined
// 3. Il exécute console.log(nom) → undefined
// 4. Il met la valeur "Alice" dans nom
// 5. Il exécute console.log(nom) → Alice

// 🎮 Exemple simple : Score de jeu
function afficherScore() {
    console.log("Score:", score); // undefined (pas d'erreur)
    var score = 100;
    console.log("Score:", score); // 100
}

afficherScore();
// Résultat:
// Score: undefined  ← Bizarre ! score existe déjà mais vide
// Score: 100

// 📱 Exemple : Numéro de téléphone
function avoirTelephone() {
    console.log("Mon numéro:", numero); // undefined
    // JavaScript "sait" que numero existe, mais pas sa valeur
    
    var numero = "06 12 34 56 78";
    console.log("Mon numéro:", numero); // 06 12 34 56 78
}

avoirTelephone();

// ⚠️ POURQUOI C'EST DANGEREUX ?
// Vous voyez "undefined" au lieu d'une erreur claire
// Difficile de trouver où est le bug !
\`\`\`

#### ⚠️ Redéclaration Accidentelle - Le Clone Maléfique !

**var** permet de créer des **clones qui remplacent l'original** sans prévenir !

\`\`\`javascript
// 😱 Exemple SIMPLE : Déclarer 2 fois la même variable
var nom = "Alice";
console.log(nom); // Alice

var nom = "Bob"; // Pas d'erreur ! Écrase Alice
console.log(nom); // Bob

// Alice a disparu ! Aucun avertissement !

// 🎯 Exemple pratique : Âge d'une personne
var age = 18;
console.log("Âge:", age); // 18

// Plus tard dans le code, vous oubliez que age existe
var age = 25; // Pas d'erreur ! 18 est écrasé
console.log("Âge:", age); // 25

// 💰 Exemple : Prix d'un produit
var prix = 50;
console.log("Prix original:", prix); // 50

// ... 100 lignes de code ...

var prix = 30; // Oups ! Vous redéclarez par accident
console.log("Prix maintenant:", prix); // 30
// Le prix original est perdu !

// 🎮 Exemple simple : Score de jeu
var score = 1000; // Votre vrai score
console.log("Mon score:", score); // 1000

var score = 0; // Quelqu'un redéclare par erreur
console.log("Mon score:", score); // 0 😭
// Votre score a disparu sans erreur !
\`\`\`

#### 🔄 Le Piège de la Boucle - Tous Partagent le Même Numéro !

**var dans une boucle** = Tout le monde regarde le même nombre qui a déjà changé !

\`\`\`javascript
// 🎯 Exemple ULTRA SIMPLE
var fonctions = [];

for (var i = 0; i < 3; i++) {
    fonctions.push(function() {
        console.log(i); // On garde la référence à i
    });
}
// Ici, la boucle est finie, i vaut 3

fonctions[0](); // 3 (on voulait 0)
fonctions[1](); // 3 (on voulait 1)
fonctions[2](); // 3 (on voulait 2)

// 🤔 POURQUOI 3 PARTOUT ?
// 1. La boucle tourne : i = 0, puis 1, puis 2, puis 3
// 2. À i = 3, la boucle s'arrête (car 3 < 3 est faux)
// 3. Toutes les fonctions regardent la MÊME variable i
// 4. Quand on appelle les fonctions, i vaut 3 pour tous

// 📝 Explication simple
// C'est comme écrire sur un TABLEAU NOIR
// Vous écrivez : 0, puis effacez et écrivez 1, puis 2, puis 3
// Quand 3 amis regardent le tableau, ils voient tous "3"

// 🎮 Exemple : Noms de joueurs
var joueurs = [];

for (var num = 1; num <= 3; num++) {
    joueurs.push(function() {
        console.log("Joueur", num);
    });
}

joueurs[0](); // Joueur 4 (on voulait 1)
joueurs[1](); // Joueur 4 (on voulait 2)  
joueurs[2](); // Joueur 4 (on voulait 3)
// Tous affichent 4 car num = 4 à la fin de la boucle
\`\`\`

---

### 🆕 let - Le remplaçant moderne (Recommandé ✅)

#### 🎁 Imagine let comme une Boîte Fermée

**let** est comme une **boîte avec un couvercle** : ce qui est dedans reste dedans et ne s'échappe pas !

#### 🎯 Portée de Bloc - La Boîte Reste Fermée !

\`\`\`javascript
// ✅ Exemple SIMPLE : let reste dans son bloc
function testerAge() {
    if (true) {
        let age = 18; // Déclaré dans le if
        console.log("Dans if:", age); // 18 ✅
    }
    
    // console.log("Hors if:", age); // ❌ ERREUR !
    // age n'existe PAS ici - il reste dans le if
}

testerAge();
// Résultat: Dans if: 18
// Si on décommente la ligne, ERREUR: age is not defined

// 🎯 Comparaison CLAIRE : var vs let
function comparaison() {
    // Avec VAR (s'échappe)
    if (true) {
        var nom1 = "Alice";
    }
    console.log(nom1); // Alice ✅ Accessible
    
    // Avec LET (reste enfermé)
    if (true) {
        let nom2 = "Bob";
    }
    // console.log(nom2); // ❌ ERREUR ! Pas accessible
}

// 🏫 Exemple concret : Vérifier si on peut entrer
function entrerAuCinema() {
    if (true) {
        let ageClient = 15; // Reste dans le if
        console.log("Âge dans if:", ageClient); // 15 ✅
    }
    
    // console.log("Âge hors if:", ageClient); // ❌ ERREUR !
    // ageClient n'existe plus ici - parfait !
}

// 💰 Exemple TRÈS SIMPLE : Prix
function afficherPrix() {
    if (true) {
        let prix = 50;
        console.log(prix); // 50 ✅
    }
    // console.log(prix); // ❌ ERREUR ! prix n'existe pas ici
    // C'est logique et prévisible !
}
\`\`\`

#### 🛡️ Protection contre le Hoisting - Pas de Voyageur du Temps !

**let** force à **déclarer avant d'utiliser** - pas de surprise !

\`\`\`javascript
// ❌ Exemple : Erreur avec let
// console.log(nom); // ERREUR ! Cannot access 'nom' before initialization
let nom = "Alice";
console.log(nom); // Alice ✅

// ✅ ORDRE LOGIQUE OBLIGATOIRE
// 1. D'abord déclarer
// 2. Ensuite utiliser

// 🎯 Comparaison var vs let
function comparer() {
    // Avec VAR (pas d'erreur mais undefined)
    console.log(age1); // undefined (bizarre)
    var age1 = 18;
    
    // Avec LET (erreur claire)
    // console.log(age2); // ❌ ERREUR claire !
    let age2 = 20;
    console.log(age2); // 20 ✅
}

// 📝 Exemple SIMPLE : Nom et prénom
function presenter() {
    // Déclarer PUIS utiliser
    let prenom = "Alice";
    let nom = "Dupont";
    
    console.log(prenom, nom); // Alice Dupont ✅
}

// ⚠️ Mauvais ordre = ERREUR
function mauvaisOrdre() {
    // console.log(ville); // ❌ ERREUR !
    let ville = "Paris";
    console.log(ville); // Paris ✅
    
    // let empêche les erreurs bizarres
    // Il vous force à être logique !
}
\`\`\`

#### 🚫 Protection contre la Redéclaration - Pas de Clone !

**let** empêche de créer des doublons par accident !

\`\`\`javascript
// 🛡️ Exemple SIMPLE : Impossible de déclarer 2 fois
let nom = "Alice";
console.log(nom); // Alice

// let nom = "Bob"; // ❌ ERREUR ! nom existe déjà
// JavaScript vous protège !

// ✅ Mais vous pouvez CHANGER la valeur
nom = "Bob"; // OK - changement de valeur
console.log(nom); // Bob

// 🎯 Différence importante :
// let nom = "Bob";  ← REDÉCLARATION (interdit)
// nom = "Bob";      ← RÉASSIGNATION (autorisé)

// 💰 Exemple : Prix
let prix = 50;
console.log("Prix:", prix); // 50

// let prix = 30; // ❌ ERREUR ! prix existe déjà
prix = 30; // ✅ OK - changement de valeur
console.log("Prix:", prix); // 30

// 🎮 Exemple : Score
let score = 100;
// let score = 200; // ❌ ERREUR ! Protection
score = 200; // ✅ OK
score = score + 50; // ✅ OK
console.log("Score:", score); // 250

// ✅ AVANTAGE : Évite les bugs
// Si vous tapez "let" par erreur, JavaScript vous avertit !
\`\`\`

#### ✅ Solution pour les Boucles - Chacun son Numéro !

**let dans une boucle** = Chaque fonction garde sa propre copie du nombre !

\`\`\`javascript
// ✅ Exemple SIMPLE avec let
let fonctions = [];

for (let i = 0; i < 3; i++) {
    fonctions.push(function() {
        console.log(i); // Chaque fonction garde SON propre i
    });
}

fonctions[0](); // 0 ✅
fonctions[1](); // 1 ✅
fonctions[2](); // 2 ✅

// 🎉 POURQUOI ÇA MARCHE ?
// Avec let, chaque tour crée une NOUVELLE variable i
// Tour 1: i = 0 (copie 1)
// Tour 2: i = 1 (copie 2)
// Tour 3: i = 2 (copie 3)
// Chaque fonction garde sa propre copie !

// 📝 Explication simple :
// C'est comme donner 3 FEUILLES DIFFÉRENTES à 3 amis
// Feuille 1: "0", Feuille 2: "1", Feuille 3: "2"
// Chacun garde sa propre feuille

// 🎯 Comparaison var vs let
// Avec VAR : 1 seule variable partagée → tous voient 3
// Avec LET : 3 variables séparées → chacun voit son nombre

// 🎮 Exemple : Noms de joueurs CORRIGÉ
let photos = [];

for (let age = 1; age <= 3; age++) {
    photos.push(function() {
        console.log("📸 Photo à", age, "ans");
    });
}

// Quand on regarde les photos :
photos[0](); // 📸 Photo à 1 ans ✅
photos[1](); // 📸 Photo à 2 ans ✅
photos[2](); // 📸 Photo à 3 ans ✅
// 🎉 Chaque photo a le bon âge !

// 🎮 Exemple gaming : Sauvegardes multiples
let sauvegardes = [];

for (let niveau = 1; niveau <= 5; niveau++) {
    sauvegardes.push(function() {
        console.log("💾 Sauvegarde du niveau", niveau);
    });
}

sauvegardes[0](); // 💾 Sauvegarde du niveau 1
sauvegardes[2](); // 💾 Sauvegarde du niveau 3
sauvegardes[4](); // 💾 Sauvegarde du niveau 5
// Chaque sauvegarde garde son propre niveau !
\`\`\`

#### 🔄 Réassignation Flexible - On Peut Changer la Valeur !

\`\`\`javascript
// 🎮 Exemple pratique : État du joueur qui évolue
let statutJoueur = "🔴 Hors ligne";
console.log("Statut:", statutJoueur); // 🔴 Hors ligne

statutJoueur = "🟡 Connexion...";
console.log("Statut:", statutJoueur); // 🟡 Connexion...

statutJoueur = "🟢 En ligne";
console.log("Statut:", statutJoueur); // 🟢 En ligne

// 🎯 Compteur de score qui évolue
let scoreJeu = 0;
console.log("Score:", scoreJeu); // 0

scoreJeu = 100;         // Premier ennemi vaincu
console.log("Score:", scoreJeu); // 100

scoreJeu += 50;         // Bonus attrapé
console.log("Score:", scoreJeu); // 150

scoreJeu *= 2;          // Multiplicateur x2
console.log("Score:", scoreJeu); // 300
\`\`\`

---

### 📊 Comparaison Visuelle : var vs let

| Caractéristique | 💀 var (À ÉVITER) | ✅ let (UTILISER) |
|----------------|-------------------|-------------------|
| **Portée** | 🎈 S'envole hors du bloc | 🎁 Reste dans le bloc |
| **Hoisting** | 🚀 Voyage dans le temps = confusion | ⏰ Ordre chronologique = clair |
| **Redéclaration** | 👯 Permet les clones = bugs | 🛡️ Interdit les clones = sécurité |
| **Boucles** | 📱 Un seul téléphone partagé | 📱📱📱 Un téléphone par personne |
| **Lisibilité** | 😵 Comportement surprenant | 😊 Comportement prévisible |

### 🎯 Règle d'Or pour Débutants

**🚫 OUBLIEZ var - Il n'existe plus pour vous !**

Utilisez TOUJOURS :
- ✅ **let** pour les variables qui changent
- ✅ **const** pour les valeurs fixes

\`\`\`javascript
// ❌ NON - Plus jamais var
var ancieneMethode = "deprecated";

// ✅ OUI - Toujours let pour ce qui change
let scoreJoueur = 0;
let niveauActuel = 1;

// ✅ OUI - Toujours const pour ce qui ne change pas
const NOM_JEU = "Super Adventure";
const MAX_VIES = 3;
\`\`\`

### 🔒 const - Pour les Valeurs Constantes (Très Recommandé)

#### 🛡️ Initialisation Obligatoire - Pas de Surprise
\`\`\`javascript
// const force à donner une valeur immédiatement
const PI = 3.14159; // OK - valeur donnée
// const VIDE; // ERREUR ! Missing initializer

// C'est bien car ça évite les variables "vides" par accident
const NOM_SITE = "Mon Super Site";
const VERSION = "1.0.0";
const MAX_UTILISATEURS = 1000;
\`\`\`

#### 🚫 Protection contre la Réassignation
\`\`\`javascript
// Une fois définie, la variable ne peut plus être changée
const PI = 3.14159;
// PI = 3.14; // ERREUR ! Assignment to constant variable
// PI++; // ERREUR aussi !

// C'est parfait pour les valeurs qui ne doivent jamais changer
const COULEUR_PRIMAIRE = "#007bff";
const URL_API = "https://api.monsite.com";
const MESSAGES_ERREUR = {
    CONNEXION: "Erreur de connexion",
    VALIDATION: "Données invalides"
};
\`\`\`

#### 🎯 Même Portée de Bloc que let
\`\`\`javascript
// const suit les mêmes règles de portée que let
if (true) {
    const LOCAL = "Je reste dans ce bloc";
    console.log(LOCAL); // OK ici
}
// console.log(LOCAL); // ERREUR ! Variable n'existe pas ici

// Parfait pour les constantes temporaires
function calculerTaxe(prix) {
    const TAUX_TVA = 0.20; // Constante locale
    return prix * TAUX_TVA;
}
\`\`\`

#### ⚠️ Attention : Objets et Tableaux Modifiables
\`\`\`javascript
// IMPORTANT : const protège la RÉFÉRENCE, pas le CONTENU
const personne = {nom: "Alice", age: 30};

// ✅ On PEUT modifier les propriétés
personne.age = 31; // OK - on change une propriété
personne.ville = "Paris"; // OK - on ajoute une propriété
delete personne.nom; // OK - on supprime une propriété

// ❌ On NE PEUT PAS remplacer l'objet entier
// personne = {nom: "Bob"}; // ERREUR ! Réassignation interdite

// Même principe avec les tableaux
const fruits = ["pomme", "banane"];
fruits.push("orange"); // OK - on modifie le contenu
fruits[0] = "poire"; // OK - on change un élément
// fruits = []; // ERREUR ! Réassignation interdite

// 🎯 Analogie Simple : const = Sac avec Étiquette Collée
// - L'étiquette est collée à vie (le nom de la variable)
// - Mais on peut changer ce qu'il y a DANS le sac (le contenu)
// - On ne peut pas prendre un autre sac (réassignation interdite)

// 🎮 Exemple concret : inventaire de jeu
const inventaireJoueur = ["épée", "potion"];
// L'inventaire reste le même objet, mais on peut modifier son contenu
inventaireJoueur.push("bouclier");     // ✅ OK - ajouter un objet
inventaireJoueur[0] = "épée magique";   // ✅ OK - améliorer l'épée
// inventaireJoueur = [];              // ❌ ERREUR - changer tout l'inventaire

console.log(inventaireJoueur); // ["épée magique", "potion", "bouclier"]

// Analogie : const c'est comme un sac étiquetté
// - On ne peut pas changer l'étiquette (le nom)
// - Mais on peut changer ce qu'il y a dans le sac
\`\`\`

#### 🔒 Vraie Immutabilité avec Object.freeze()
\`\`\`javascript
// Pour une vraie protection, utilisez Object.freeze()
const CONFIG = Object.freeze({
    API_URL: "https://api.example.com",
    TIMEOUT: 5000,
    COULEURS: Object.freeze({
        PRIMAIRE: "#007bff",
        SECONDAIRE: "#6c757d"
    })
});

// Maintenant RIEN ne peut être modifié
// CONFIG.API_URL = "autre"; // Ignoré (ou erreur en mode strict)
// CONFIG.NOUVEAU = "test"; // Ignoré aussi

// Exemple pratique : configuration d'application
const PARAMETRES_JEU = Object.freeze({
    VITESSE_MAX: 100,
    NOMBRE_VIES: 3,
    POINTS_BONUS: 500
});
\`\`\`

## 📊 Comparaison var vs let vs const

| Caractéristique | var | let | const |
|----------------|-----|-----|-------|
| **Portée** | Fonction | Bloc | Bloc |
| **Hoisting** | Oui (undefined) | Oui (erreur) | Oui (erreur) |
| **Redéclaration** | Autorisée | Interdite | Interdite |
| **Réassignation** | Autorisée | Autorisée | Interdite |
| **Initialisation** | Optionnelle | Optionnelle | Obligatoire |

### 🎯 Pourquoi let et const remplacent var

\`\`\`javascript
// 🚨 Problèmes avec var

// 1. Pollution du scope global
var globalVar = "Je pollue le scope global";

// 2. Problème de closure dans les boucles
var callbacks = [];
for (var i = 0; i < 3; i++) {
    callbacks.push(function() {
        console.log("var:", i); // Toujours 3
    });
}

// 3. Redéclaration accidentelle
var utilisateur = "Alice";
function traiterDonnees() {
    var utilisateur = "Bob"; // Redéclaration accidentelle
    // ... code ...
}

// ✅ Solutions avec let

// 1. Portée de bloc claire
{
    let localLet = "Je reste dans ce bloc";
}
// console.log(localLet); // ReferenceError

// 2. Closure correcte dans les boucles
let callbacks2 = [];
for (let i = 0; i < 3; i++) {
    callbacks2.push(function() {
        console.log("let:", i); // 0, 1, 2
    });
}

// 3. Protection contre la redéclaration
let utilisateur = "Alice";
function traiterDonnees() {
    let utilisateur = "Bob"; // Nouvelle variable locale
    // ... code ...
}
\`\`\`

## 🔀 Structures Conditionnelles

### 🧠 Qu'est-ce qu'une Structure Conditionnelle ?
Une **structure conditionnelle** permet à votre programme de prendre des décisions. C'est comme dire à l'ordinateur : "Si cette condition est vraie, fais ceci, sinon fais cela".

Pensez-y comme aux feux de circulation :
- **Si** le feu est vert → avancer
- **Sinon si** le feu est orange → ralentir  
- **Sinon** (feu rouge) → s'arrêter

### 🎯 if...else - La Base des Décisions

#### 🤔 Structure Simple : "Si... Sinon..."
\`\`\`javascript
// La structure la plus basique
let age = 17;

if (age >= 18) {
    console.log("🎉 Tu peux voter !");
} else {
    console.log("⏳ Encore quelques années à attendre");
}

// 🎮 Exemple gaming : vérifier si on peut jouer
let heureActuelle = 22; // 22h

if (heureActuelle < 21) {
    console.log("🎮 Tu peux jouer !");
} else {
    console.log("😴 C'est l'heure de dormir");
}
\`\`\`

#### 🎆 Structure Multiple : "Si... Sinon Si... Sinon..."
\`\`\`javascript
// Pour plusieurs conditions
let note = 15;

if (note >= 18) {
    console.log("🎆 Excellent ! Tu es un génie !");
} else if (note >= 16) {
    console.log("🎉 Très bien ! Continue comme ça !");
} else if (note >= 14) {
    console.log("😊 Bien ! Tu peux faire mieux");
} else if (note >= 10) {
    console.log("😐 Passable, il faut travailler plus");
} else {
    console.log("😢 Insuffisant, courage pour la prochaine fois !");
}

// 🎮 Exemple pratique : système de niveau de jeu
function obtenirNiveauJoueur(experience) {
    if (experience >= 10000) {
        return "👑 Maître Légendaire";
    } else if (experience >= 5000) {
        return "⚔️ Guerrier Expert";
    } else if (experience >= 1000) {
        return "🛡️ Combattant Confirmé";
    } else if (experience >= 100) {
        return "🎯 Apprenti Aventurier";
    } else {
        return "👶 Novice";
    }
}

console.log(obtenirNiveauJoueur(2500)); // ⚔️ Guerrier Expert
console.log(obtenirNiveauJoueur(50));   // 👶 Novice
\`\`\`

#### 🎮 Exemple Complet : Système de Performance de Jeu
\`\`\`javascript
function evaluerPerformanceJeu(score, temps, viesRestantes) {
    let message = "";
    let etoiles = 0;
    
    // Calcul des étoiles selon le score
    if (score >= 1000 && temps <= 60 && viesRestantes === 3) {
        etoiles = 3;
        message = "🎆 PARFAIT ! Tu es incroyable !";
    } else if (score >= 800 && temps <= 90) {
        etoiles = 2;
        message = "🎉 Excellent ! Presque parfait !";
    } else if (score >= 500) {
        etoiles = 1;
        message = "😊 Bien joué ! Tu peux faire mieux !";
    } else {
        etoiles = 0;
        message = "💪 Continue à t'entraîner !";
    }
    
    return {
        etoiles: etoiles,
        message: message,
        peutPasserNiveau: etoiles > 0
    };
}

// Tests
console.log(evaluerPerformanceJeu(1200, 45, 3));
// {etoiles: 3, message: "🎆 PARFAIT ! Tu es incroyable !", peutPasserNiveau: true}

console.log(evaluerPerformanceJeu(300, 120, 1));
// {etoiles: 0, message: "💪 Continue à t'entraîner !", peutPasserNiveau: false}
\`\`\`

### 🔄 switch...case - Pour Plusieurs Choix

#### 🧠 Quand Utiliser switch ?
**switch** est parfait quand vous avez **une seule variable** à comparer avec **plusieurs valeurs possibles**. C'est plus lisible que de nombreux \`if...else if\`.

Pensez-y comme à un **menu de restaurant** :
- Selon votre choix (1, 2, 3...), vous obtenez un plat différent
- Chaque \`case\` est une option du menu
- \`default\` est comme "autre chose" si votre choix n'est pas au menu

\`\`\`javascript
// Structure de base
let jour = "lundi";

switch (jour) {
    case "lundi":
        console.log("Début de semaine");
        break;
    case "mardi":
    case "mercredi":
    case "jeudi":
        console.log("Milieu de semaine");
        break;
    case "vendredi":
        console.log("Fin de semaine");
        break;
    case "samedi":
    case "dimanche":
        console.log("Week-end");
        break;
    default:
        console.log("Jour invalide");
}

// 🍕 Exemple pratique: calculateur de prix de pizza
function calculerPrixPizza(taille, garniture) {
    let prixBase;
    
    // Déterminer le prix selon la taille
    switch (taille) {
        case "petite":
            prixBase = 8;
            break;
        case "moyenne":
            prixBase = 12;
            break;
        case "grande":
            prixBase = 16;
            break;
        case "familiale":
            prixBase = 20;
            break;
        default:
            return "❌ Taille invalide ! Choisis: petite, moyenne, grande ou familiale";
    }
    
    // Déterminer le supplément selon la garniture
    let supplement = 0;
    let nomGarniture = "";
    
    switch (garniture) {
        case "margherita":
            supplement = 0;
            nomGarniture = "Margherita 🍅";
            break;
        case "pepperoni":
            supplement = 2;
            nomGarniture = "Pepperoni 🌶️";
            break;
        case "4fromages":
            supplement = 3;
            nomGarniture = "4 Fromages 🧀";
            break;
        case "complete":
            supplement = 5;
            nomGarniture = "Complète 🍕";
            break;
        case "vegetarienne":
            supplement = 2.5;
            nomGarniture = "Végétarienne 🥕";
            break;
        default:
            supplement = 0;
            nomGarniture = "Garniture inconnue";
    }
    
    const prixTotal = prixBase + supplement;
    return \`🍕 Pizza \${nomGarniture} (\${taille}) : \${prixTotal}€\`;
}

// 🎮 Exemple gaming : système de difficulté
function choisirDifficulte(niveau) {
    let multiplicateurPoints = 1;
    let couleurInterface = "vert";
    let messageMotivation = "";
    
    switch (niveau) {
        case "facile":
            multiplicateurPoints = 1;
            couleurInterface = "vert";
            messageMotivation = "😊 Parfait pour débuter !";
            break;
        case "normal":
            multiplicateurPoints = 1.5;
            couleurInterface = "bleu";
            messageMotivation = "😐 Un bon défi !";
            break;
        case "difficile":
            multiplicateurPoints = 2;
            couleurInterface = "orange";
            messageMotivation = "😤 Ça va être chaud !";
            break;
        case "extreme":
            multiplicateurPoints = 3;
            couleurInterface = "rouge";
            messageMotivation = "😱 Seulement pour les pros !";
            break;
        case "impossible":
            multiplicateurPoints = 5;
            couleurInterface = "noir";
            messageMotivation = "💀 Bonne chance... tu vas en avoir besoin !";
            break;
        default:
            return "❌ Difficulté inconnue ! Choisis: facile, normal, difficile, extreme, impossible";
    }
    
    return {
        niveau: niveau,
        points: multiplicateurPoints,
        couleur: couleurInterface,
        message: messageMotivation
    };
}

console.log(calculerPrixPizza("grande", "pepperoni")); // 🍕 Pizza Pepperoni 🌶️ (grande) : 18€
console.log(calculerPrixPizza("petite", "margherita")); // 🍕 Pizza Margherita 🍅 (petite) : 8€
console.log(calculerPrixPizza("géante", "pepperoni"));    // ❌ Taille invalide ! Choisis: petite, moyenne, grande ou familiale
\`\`\`

### 🎯 Opérateur Ternaire - Le Raccourci Élégant

#### 🧠 Qu'est-ce que l'Opérateur Ternaire ?
L'**opérateur ternaire** est un raccourci pour écrire un \`if...else\` simple. Il s'appelle "ternaire" parce qu'il a **trois parties** :
1. La condition à tester
2. La valeur si c'est vrai
3. La valeur si c'est faux

C'est comme une **question à choix multiples** avec seulement 2 réponses possibles.

\`\`\`javascript
// Syntaxe: condition ? valeurSiVrai : valeurSiFaux
let age = 20;
let statut = age >= 18 ? "Majeur" : "Mineur";

// Équivalent avec if...else (plus long)
let statut2;
if (age >= 18) {
    statut2 = "Majeur";
} else {
    statut2 = "Mineur";
}

// Ternaires imbriqués (à utiliser avec modération)
let note = 85;
let mention = note >= 90 ? "Excellent" : 
              note >= 80 ? "Très bien" : 
              note >= 70 ? "Bien" : "Passable";

// 🛒 Exemple pratique: calcul de remise
function calculerRemise(montant, estMembre, estPremierAchat) {
    const tauxRemise = estMembre ? 
        (estPremierAchat ? 0.20 : 0.10) : 
        (estPremierAchat ? 0.05 : 0);
    
    const remise = montant * tauxRemise;
    const prixFinal = montant - remise;
    
    return {
        montantOriginal: montant,
        remise: remise,
        prixFinal: prixFinal,
        message: \`\${estMembre ? '👑' : '👤'} Remise: \${(tauxRemise * 100)}%\`
    };
}

console.log(calculerRemise(100, true, true)); 
// {montantOriginal: 100, remise: 20, prixFinal: 80, message: "👑 Remise: 20%"}
\`\`\`

## 🔄 Structures de Boucles

### 🧠 Qu'est-ce qu'une Boucle ?
Une **boucle** permet de répéter une action plusieurs fois sans réécrire le même code. C'est comme :
- **Compter jusqu'à 10** : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
- **Répéter une chanson** : "Joyeux anniversaire" x 3 fois
- **Parcourir une liste de courses** : vérifier chaque article un par un

Sans boucles, vous devriez écrire :
\`\`\`javascript
// Sans boucle (très répétitif !)
console.log("Comptage: 1");
console.log("Comptage: 2");
console.log("Comptage: 3");
// ... 97 lignes de plus pour aller jusqu'à 100 !
\`\`\`

Avec une boucle :
\`\`\`javascript
// Avec boucle (intelligent !)
for (let i = 1; i <= 100; i++) {
    console.log("Comptage:", i);
}
\`\`\`

### 🔢 Boucle for - La Plus Courante

\`\`\`javascript
// Boucle for classique
for (let i = 0; i < 5; i++) {
    console.log(\`Itération \${i}\`);
}

// Boucle for avec pas personnalisé
for (let i = 0; i <= 10; i += 2) {
    console.log(\`Nombre pair: \${i}\`);
}

// Boucle for décroissante
for (let i = 5; i > 0; i--) {
    console.log(\`Compte à rebours: \${i}\`);
}

// 🎯 Exemple pratique: table de multiplication
function genererTableMultiplication(nombre, limite = 10) {
    const table = [];
    for (let i = 1; i <= limite; i++) {
        const resultat = nombre * i;
        table.push(\`\${nombre} × \${i} = \${resultat}\`);
    }
    return table;
}

console.log(genererTableMultiplication(7, 5));
// ["7 × 1 = 7", "7 × 2 = 14", "7 × 3 = 21", "7 × 4 = 28", "7 × 5 = 35"]
\`\`\`

### 🔄 Boucle while - "Tant Que..."

#### 🧠 Quand Utiliser while ?
**while** signifie "tant que" en anglais. Cette boucle continue **tant qu'une condition est vraie**. C'est parfait quand vous ne savez pas à l'avance combien de fois vous devez répéter.

Exemples de la vie réelle :
- "Tant qu'il pleut, reste à l'intérieur"
- "Tant que tu n'as pas fini tes devoirs, pas de télévision"
- "Tant que le réservoir n'est pas plein, continue à verser de l'essence"

\`\`\`javascript
// Boucle while de base
let compteur = 0;
while (compteur < 3) {
    console.log(\`Compteur: \${compteur}\`);
    compteur++;
}

// 🎲 Exemple pratique: jeu de dés
function jouerJusquaSix() {
    let lancers = 0;
    let resultat = 0;
    
    while (resultat !== 6) {
        resultat = Math.floor(Math.random() * 6) + 1;
        lancers++;
        console.log(\`Lancer \${lancers}: \${resultat}\`);
    }
    
    return \`🎯 Six obtenu en \${lancers} lancer(s)!\`;
}

// console.log(jouerJusquaSix());
\`\`\`

### 🔄 Boucle do...while - "Fais... Tant Que"

#### 🧠 La Différence Importante
**do...while** est comme **while**, mais avec une différence cruciale : elle exécute le code **au moins une fois**, même si la condition est fausse dès le début.

Analogies :
- **while** : "Si tu as faim, mange" (si tu n'as pas faim, tu ne manges pas)
- **do...while** : "Mange, puis continue tant que tu as faim" (tu manges au moins une fois)

\`\`\`javascript
// Exemple : demander à l'utilisateur jusqu'à réponse valide
let reponse;
do {
    reponse = prompt("Tapez 'oui' ou 'non':");
    // Cette question sera posée AU MOINS une fois
} while (reponse !== "oui" && reponse !== "non");
\`\`\`

\`\`\`javascript
// Exécute au moins une fois
let choix;
do {
    choix = prompt("Entrez 'quit' pour sortir:");
    console.log(\`Vous avez saisi: \${choix}\`);
} while (choix !== "quit");

// 📝 Exemple pratique: validation d'entrée
function demanderNombreValide() {
    let nombre;
    do {
        nombre = parseInt(prompt("Entrez un nombre entre 1 et 10:"));
        if (isNaN(nombre) || nombre < 1 || nombre > 10) {
            console.log("❌ Nombre invalide, réessayez");
        }
    } while (isNaN(nombre) || nombre < 1 || nombre > 10);
    
    return nombre;
}
\`\`\`

### 🔍 Boucles for...in et for...of - Pour Parcourir

#### 🧠 Deux Façons de Parcourir
Ces deux boucles servent à **parcourir** (examiner un par un) des collections de données, mais différemment :

**for...in** = "Pour chaque **clé/propriété** dans..."
- Parcourt les **noms des propriétés** d'un objet
- Comme lire l'**index** d'un livre

**for...of** = "Pour chaque **valeur** dans..."
- Parcourt les **valeurs** d'un tableau ou d'une liste
- Comme lire le **contenu** d'un livre

\`\`\`javascript
// Analogie avec un carnet d'adresses
const carnet = {
    "Alice": "123-456-7890",
    "Bob": "098-765-4321",
    "Charlie": "555-123-4567"
};

// for...in donne les NOMS (clés)
for (let nom in carnet) {
    console.log("Nom:", nom); // "Alice", "Bob", "Charlie"
}

// Pour avoir les numéros, on utilise la clé
for (let nom in carnet) {
    console.log(nom, ":", carnet[nom]);
}
\`\`\`

\`\`\`javascript
// for...in - Parcourt les propriétés énumérables
const personne = {nom: "Alice", age: 30, ville: "Paris"};

for (let propriete in personne) {
    console.log(\`\${propriete}: \${personne[propriete]}\`);
}

// for...of - Parcourt les valeurs itérables
const fruits = ["pomme", "banane", "orange"];

for (let fruit of fruits) {
    console.log(\`Fruit: \${fruit}\`);
}

// 📊 Exemple pratique: analyse d'inventaire
const inventaire = {
    pommes: 50,
    bananes: 30,
    oranges: 25,
    kiwis: 15
};

function analyserInventaire(stock) {
    let total = 0;
    let produitLePlusStock = "";
    let maxStock = 0;
    
    for (let produit in stock) {
        const quantite = stock[produit];
        total += quantite;
        
        if (quantite > maxStock) {
            maxStock = quantite;
            produitLePlusStock = produit;
        }
        
        console.log(\`📦 \${produit}: \${quantite} unités\`);
    }
    
    return {
        totalUnites: total,
        produitDominant: produitLePlusStock,
        stockMax: maxStock
    };
}

console.log(analyserInventaire(inventaire));
\`\`\`

## 🎮 Contrôle de Flux: break et continue

### 🧠 Qu'est-ce que le Contrôle de Flux ?
Le **contrôle de flux** permet de modifier le comportement normal d'une boucle :
- **break** = "Arrête-toi et sors de la boucle"
- **continue** = "Ignore cette itération et passe à la suivante"

Analogies :
- **break** : Comme appuyer sur "STOP" dans un ascenseur
- **continue** : Comme appuyer sur "Passer" dans un quiz

#### 🛑 break - Sortir de la Boucle
**break** arrête complètement la boucle, comme si on trouvait ce qu'on cherchait.

**Exemple 1 : Comptage simple**
\`\`\`javascript
// 🛑 break - Sort complètement de la boucle
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("🛑 STOP ! J'arrête à 5");
        break; // Sort de la boucle quand i = 5
    }
    console.log(\`🔢 Comptage: \${i}\`);
}
// Affiche: 0, 1, 2, 3, 4, puis "STOP ! J'arrête à 5"
\`\`\`

**Exemple 2 : Chercher un trésor**
\`\`\`javascript
// 🎮 Exemple gaming : chercher un trésor
let coffres = ["💰 pièces", "💎 gemme", "🏆 trésor", "💰 pièces", "💎 gemme"];

for (let i = 0; i < coffres.length; i++) {
    console.log(\`Ouverture du coffre \${i + 1}: \${coffres[i]}\`);
    
    if (coffres[i] === "🏆 trésor") {
        console.log("🎉 TRÉSOR TROUVÉ ! Mission accomplie !");
        break; // Arrêter la recherche
    }
}
console.log("🎮 Fin de la recherche");
\`\`\`

#### ⏭️ continue - Passer à la Suivante
**continue** ignore le reste du code dans la boucle pour cette itération et passe directement à la suivante.

\`\`\`javascript
// continue - Passe à l'itération suivante
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // "Ignore cette itération si le nombre est pair"
    }
    console.log(i); // Ne s'exécute que pour les nombres impairs : 1, 3, 5, 7, 9
}

// Analogie : parcourir une liste de films
const films = ["Action", "Horreur", "Comédie", "Horreur", "Romance"];

for (let film of films) {
    if (film === "Horreur") {
        continue; // "Je n'aime pas l'horreur, passe au suivant"
    }
    console.log("Je regarde:", film); // Affiche tout sauf "Horreur"
}
\`\`\`

#### 🔍 Exemple Pratique Complet

\`\`\`javascript
// 🔍 Exemple pratique: recherche dans un tableau
function rechercherPremierPair(nombres) {
    console.log("🔍 Recherche du premier nombre pair...");
    
    for (let i = 0; i < nombres.length; i++) {
        console.log(\`Vérification: \${nombres[i]}\`);
        
        if (nombres[i] % 2 !== 0) {
            console.log(\`  ⏭️ \${nombres[i]} est impair, on continue\`);
            continue; // Ignore les nombres impairs
        }
        
        console.log(\`  ✅ \${nombres[i]} est pair ! Trouvé !\`);
        return nombres[i]; // Retourne le premier pair trouvé
    }
    
    console.log("😢 Aucun nombre pair trouvé");
    return null;
}

rechercherPremierPair([1, 3, 7, 8, 9, 12]); 
// 🔍 Recherche du premier nombre pair...
// Vérification: 1
//   ⏭️ 1 est impair, on continue
// Vérification: 3
//   ⏭️ 3 est impair, on continue
// Vérification: 7
//   ⏭️ 7 est impair, on continue
// Vérification: 8
//   ✅ 8 est pair ! Trouvé !
\`\`\`
\`\`\`javascript
// 🎮 Exemple gaming : chercher un objet spécial
function chercherObjetRare(inventaire) {
    console.log("🔍 Recherche d'objet rare dans l'inventaire...");
    
    for (let i = 0; i < inventaire.length; i++) {
        let objet = inventaire[i];
        
        // Ignorer les objets communs
        if (objet.rarete === "commun" || objet.rarete === "peu commun") {
            console.log(\`⏭️ \${objet.nom} ignoré (\${objet.rarete})\`);
            continue;
        }
        
        // Arrêter dès qu'on trouve un objet rare
        if (objet.rarete === "rare" || objet.rarete === "légendaire") {
            console.log(\`✨ Objet rare trouvé: \${objet.nom} (\${objet.rarete}) !\`);
            return objet;
        }
    }
    
    console.log("😢 Aucun objet rare trouvé");
    return null;
}

// Test
let monInventaire = [
    {nom: "Potion de soin", rarete: "commun"},
    {nom: "Dague en fer", rarete: "peu commun"},
    {nom: "Épée magique", rarete: "rare"},
    {nom: "Armure légendaire", rarete: "légendaire"}
];

chercherObjetRare(monInventaire);
// ⏭️ Potion de soin ignoré (commun)
// ⏭️ Dague en fer ignoré (peu commun)
// ✨ Objet rare trouvé: Épée magique (rare) !
\`\`\`

## 🎯 Exemples Pratiques Complets

### 🏪 Système de Gestion de Magasin

\`\`\`javascript
class GestionnaireMagasin {
    constructor() {
        this.produits = new Map();
        this.ventes = [];
    }
    
    ajouterProduit(nom, prix, stock) {
        if (typeof nom !== 'string' || typeof prix !== 'number' || typeof stock !== 'number') {
            return "❌ Types de données invalides";
        }
        
        this.produits.set(nom, {prix, stock});
        return \`✅ Produit \${nom} ajouté\`;
    }
    
    vendre(nomProduit, quantite) {
        if (!this.produits.has(nomProduit)) {
            return "❌ Produit non trouvé";
        }
        
        const produit = this.produits.get(nomProduit);
        
        if (produit.stock < quantite) {
            return \`❌ Stock insuffisant (\${produit.stock} disponible)\`;
        }
        
        produit.stock -= quantite;
        const montant = produit.prix * quantite;
        
        this.ventes.push({
            produit: nomProduit,
            quantite,
            montant,
            date: new Date()
        });
        
        return \`✅ Vente réalisée: \${quantite} \${nomProduit}(s) pour \${montant}€\`;
    }
    
    genererRapport() {
        let chiffreAffaires = 0;
        const ventesParProduit = {};
        
        for (const vente of this.ventes) {
            chiffreAffaires += vente.montant;
            
            if (ventesParProduit[vente.produit]) {
                ventesParProduit[vente.produit] += vente.quantite;
            } else {
                ventesParProduit[vente.produit] = vente.quantite;
            }
        }
        
        let produitLePlusVendu = "";
        let maxVentes = 0;
        
        for (const produit in ventesParProduit) {
            if (ventesParProduit[produit] > maxVentes) {
                maxVentes = ventesParProduit[produit];
                produitLePlusVendu = produit;
            }
        }
        
        return {
            chiffreAffaires,
            nombreVentes: this.ventes.length,
            produitLePlusVendu,
            ventesParProduit
        };
    }
}

// Utilisation
const magasin = new GestionnaireMagasin();
magasin.ajouterProduit("Pomme", 2.5, 100);
magasin.ajouterProduit("Banane", 1.8, 80);
magasin.vendre("Pomme", 10);
magasin.vendre("Banane", 5);
console.log(magasin.genererRapport());
\`\`\`

### 🎯 Validateur de Formulaire

\`\`\`javascript
function validerFormulaire(donnees) {
    const erreurs = [];
    
    // Validation du nom
    if (!donnees.nom || typeof donnees.nom !== 'string') {
        erreurs.push("Le nom est requis");
    } else if (donnees.nom.trim().length < 2) {
        erreurs.push("Le nom doit contenir au moins 2 caractères");
    }
    
    // Validation de l'email
    if (!donnees.email || typeof donnees.email !== 'string') {
        erreurs.push("L'email est requis");
    } else {
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(donnees.email)) {
            erreurs.push("Format d'email invalide");
        }
    }
    
    // Validation de l'âge
    if (donnees.age === undefined || donnees.age === null) {
        erreurs.push("L'âge est requis");
    } else if (typeof donnees.age !== 'number' || isNaN(donnees.age)) {
        erreurs.push("L'âge doit être un nombre");
    } else if (donnees.age < 0 || donnees.age > 120) {
        erreurs.push("L'âge doit être entre 0 et 120 ans");
    }
    
    // Validation du mot de passe
    if (!donnees.motDePasse || typeof donnees.motDePasse !== 'string') {
        erreurs.push("Le mot de passe est requis");
    } else {
        const mdp = donnees.motDePasse;
        if (mdp.length < 8) {
            erreurs.push("Le mot de passe doit contenir au moins 8 caractères");
        }
        if (!/[A-Z]/.test(mdp)) {
            erreurs.push("Le mot de passe doit contenir au moins une majuscule");
        }
        if (!/[0-9]/.test(mdp)) {
            erreurs.push("Le mot de passe doit contenir au moins un chiffre");
        }
    }
    
    return {
        valide: erreurs.length === 0,
        erreurs: erreurs,
        message: erreurs.length === 0 ? "✅ Formulaire valide" : \`❌ \${erreurs.length} erreur(s) trouvée(s)\`
    };
}

// Test
const donneesTest = {
    nom: "Alice",
    email: "alice@example.com",
    age: 25,
    motDePasse: "MonMotDePasse123"
};

console.log(validerFormulaire(donneesTest));
\`\`\`

## 🎉 Bonnes Pratiques - Règles d'Or pour Coder Comme un Pro

### ✅ Règle #1 : Choisir le Bon Type de Variable - "La Règle des 3 C"

#### 🧠 Méthode Simple pour Se Souvenir
**Posez-vous cette question : "Est-ce que cette valeur va changer ?"**
- 🚫 **NON** → Utilisez \`const\`
- ✅ **OUI** → Utilisez \`let\`
- 💀 **var** → N'existe plus dans votre vocabulaire !

\`\`\`javascript
// 🎮 Exemples gaming pour bien comprendre

// 🔒 const - Pour ce qui ne change JAMAIS
const NOM_JEU = "Super Adventure";     // Le nom du jeu ne change pas
const MAX_JOUEURS = 4;                 // Toujours 4 joueurs max
const TOUCHES_CONTROLE = {             // Les touches ne changent pas
    HAUT: "ArrowUp",
    BAS: "ArrowDown",
    GAUCHE: "ArrowLeft",
    DROITE: "ArrowRight"
};

// 🔄 let - Pour ce qui va changer
let scoreJoueur = 0;                   // Le score va augmenter
let viesRestantes = 3;                 // Les vies vont diminuer
let niveauActuel = 1;                  // Le niveau va changer
let estEnPause = false;                // Le jeu peut être mis en pause

// 💀 var - À BANNIR de votre code !
// var ancienneVariable = "non"; // ❌ Plus jamais ça !

// 🎯 Exemples réels d'un site web
const URL_API = "https://api.mongame.com"; // L'URL ne change pas
const COULEUR_THEME = "#FF6B6B";           // Couleur fixe du thème
let utilisateurConnecte = null;            // Peut changer (connexion/déconnexion)
let nombreNotifications = 0;               // Va changer
\`\`\`

#### 🚨 Erreurs Fréquentes à Éviter
\`\`\`javascript
// ❌ ERREUR : Utiliser let pour des constantes
let PI = 3.14159;           // Mauvais ! PI ne change jamais
let NOMBRE_JOURS_SEMAINE = 7; // Mauvais ! Toujours 7 jours

// ✅ CORRECT : Utiliser const
const PI = 3.14159;           // Parfait !
const JOURS_SEMAINE = 7;      // Parfait !

// ❌ ERREUR : Utiliser const pour des variables qui changent
const score = 0;
// score = 100; // ERREUR ! On ne peut pas changer const

// ✅ CORRECT : Utiliser let
let score = 0;
score = 100; // Parfait ! Ça marche
\`\`\`

### ✅ Règle #2 : Nommage Clair et Explicite

\`\`\`javascript
// ❌ Noms vagues et confus
let d = new Date();
let u = getUser();
let x = calculatePrice();

// ✅ Noms clairs et explicites
let dateActuelle = new Date();
let utilisateurConnecte = getUser();
let prixTotalAvecTaxes = calculatePrice();

// 🎯 Conventions de nommage :
// - Variables et fonctions : camelCase (premierMot, deuxiemeMot)
// - Constantes : UPPER_CASE (MOT_EN_MAJUSCULES)
// - Classes : PascalCase (PremiereLettreMajuscule)

const MAX_TENTATIVES_CONNEXION = 3;
let nombreTentativesActuelles = 0;
class GestionnaireUtilisateurs { }
\`\`\`

### ✅ Règle #3 : Comparaisons Strictes

\`\`\`javascript
// ❌ Comparaison faible (== et !=) - DANGEREUX !
if (age == "18") { } // Problème : "18" (string) == 18 (number) donne true
if (valeur == null) { } // Problème : undefined == null donne true

// ✅ Comparaison stricte (=== et !==) - SÛR !
if (age === 18) { } // Vérifie le type ET la valeur
if (valeur === null) { } // Vérifie exactement null
if (valeur === undefined) { } // Vérifie exactement undefined

// 🧠 Pourquoi c'est important ?
let nombre = 0;
let texte = "";
let tableau = [];

// Avec == (faible) - surprenant !
console.log(nombre == false); // true (inattendu !)
console.log(texte == false); // true (inattendu !)

// Avec === (strict) - prévisible !
console.log(nombre === false); // false (logique)
console.log(texte === false); // false (logique)
\`\`\`

### ✅ Règle #4 : Gestion des Erreurs

\`\`\`javascript
// ✅ Toujours vérifier les entrées
function diviser(a, b) {
    // Vérification des types
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("❌ Les arguments doivent être des nombres");
    }
    
    // Vérification des valeurs
    if (b === 0) {
        throw new Error("❌ Division par zéro impossible");
    }
    
    return a / b;
}

// ✅ Gestion des cas limites
function obtenirPremierElement(tableau) {
    if (!Array.isArray(tableau)) {
        return null; // Ou throw new Error("Ce n'est pas un tableau")
    }
    
    if (tableau.length === 0) {
        return undefined; // Tableau vide
    }
    
    return tableau[0];
}
\`\`\`

### ✅ Règle #5 : Code Lisible et Organisé

\`\`\`javascript
// ❌ Code difficile à lire
function f(x,y,z){if(x>0&&y>0){for(let i=0;i<z;i++){console.log(x*y*i)}}}

// ✅ Code clair et aéré
function calculerEtAfficherProduits(longueur, largeur, nombreIterations) {
    // Vérification des paramètres
    if (longueur <= 0 || largeur <= 0) {
        console.error("❌ Les dimensions doivent être positives");
        return;
    }
    
    // Calcul et affichage
    const surface = longueur * largeur;
    
    for (let iteration = 0; iteration < nombreIterations; iteration++) {
        const resultat = surface * iteration;
        console.log(\`Itération \${iteration}: \${resultat}\`);
    }
}
\`\`\`

## 🎯 Exercices Pratiques

### 🏋️ Exercice 1: Calculatrice de Notes

\`\`\`javascript
/**
 * 📊 Créez une fonction qui calcule la moyenne et la mention d'un étudiant
 * - Prend un tableau de notes
 * - Calcule la moyenne
 * - Détermine la mention (Excellent ≥16, Bien ≥14, Assez bien ≥12, Passable ≥10)
 * - Gère les cas d'erreur
 */

function calculerResultat(notes) {
    // Votre code ici
}

// Tests
console.log(calculerResultat([15, 18, 12, 16])); // {moyenne: 15.25, mention: "Bien"}
console.log(calculerResultat([])); // Erreur: tableau vide
console.log(calculerResultat([15, "abc", 12])); // Erreur: note invalide
\`\`\`

### 🏋️ Exercice 2: Générateur de Mot de Passe

\`\`\`javascript
/**
 * 🔐 Créez un générateur de mot de passe sécurisé
 * - Longueur configurable
 * - Inclut majuscules, minuscules, chiffres, symboles
 * - Options pour exclure certains types de caractères
 * - Validation de la force du mot de passe généré
 */

function genererMotDePasse(options = {}) {
    // options: {longueur, majuscules, minuscules, chiffres, symboles}
    // Votre code ici
}

// Tests
console.log(genererMotDePasse({longueur: 12}));
console.log(genererMotDePasse({longueur: 8, symboles: false}));
\`\`\`

### 🏋️ Exercice 3: Analyseur de Texte

\`\`\`javascript
/**
 * 📝 Créez un analyseur de texte qui compte:
 * - Nombre de mots
 * - Nombre de phrases
 * - Nombre de paragraphes
 * - Mots les plus fréquents
 * - Temps de lecture estimé
 */

function analyserTexte(texte) {
    // Votre code ici
}

const texteTest = \`Bonjour le monde. Ceci est un test.
Voici un nouveau paragraphe avec plusieurs phrases. Une autre phrase ici.\`;

console.log(analyserTexte(texteTest));
\`\`\`

## 🎉 Conclusion - Félicitations, Vous Êtes Maintenant un Codeur !

### 🎆 Ce Que Vous Avez Accompli

**BRAVO !** Vous venez de maîtriser les **super-pouvoirs** de base de JavaScript ! 🤩

C'est comme si vous veniez d'apprendre à conduire :
- 🚗 **Variables** = Votre volant et vos pédales (contrôler les données)
- 🚦 **Conditions** = Vos feux de circulation (prendre des décisions intelligentes)
- 🔄 **Boucles** = Votre GPS (répéter des actions efficacement)

Maintenant vous pouvez **créer des programmes qui pensent et agissent** !

### 📚 Les 5 Commandements du Codeur Pro

#### 1️⃣ **🔒 const d'abord, let ensuite, var JAMAIS**
\`\`\`javascript
// ✅ Votre nouveau réflexe
const TRUC_QUI_BOUGE_PAS = "fixe";
let trucQuiBouge = "variable";
// var = mot interdit !
\`\`\`

#### 2️⃣ **🏷️ Noms clairs = Code de champion**
\`\`\`javascript
// ❌ Code de débutant
let x = 18;

// ✅ Code de pro
let ageUtilisateur = 18;
\`\`\`

#### 3️⃣ **⚖️ === toujours, == jamais**
\`\`\`javascript
// ✅ Comparaison honnête
if (score === 100) { /* fiable */ }

// ❌ Comparaison menteuse
if (score == "100") { /* dangereux */ }
\`\`\`

#### 4️⃣ **🛡️ Protégez votre code comme une forteresse**
\`\`\`javascript
// ✅ Code blindé
if (typeof age === "number" && age > 0) {
    // Sûr de continuer
}
\`\`\`

#### 5️⃣ **🎨 Code beau = Code professionnel**
\`\`\`javascript
// ✅ Espacé, commenté, organisé
const VITESSE_MAX = 100;  // Vitesse limite du jeu

if (vitesseActuelle > VITESSE_MAX) {
    ralentir();  // Éviter les accidents
}
\`\`\`

### 🚀 Votre Mission Maintenant

#### 🎯 Niveau Débutant (Semaine 1-2)
- ✅ **Pratiquez** les exercices de ce guide
- ✅ **Ouvrez** la console du navigateur (F12) et testez du code
- ✅ **Créez** une calculatrice simple
- ✅ **Faites** un jeu "Devinez le nombre"

#### 🎮 Niveau Intermédiaire (Semaine 3-4)
- ✅ **Construisez** une liste de tâches (to-do list)
- ✅ **Créez** un quiz interactif
- ✅ **Lisez** du code sur GitHub
- ✅ **Rejoignez** des communautés de développeurs

#### 🏆 Niveau Avancé (Mois 2+)
- ✅ **Apprenez** les fonctions et objets
- ✅ **Découvrez** les APIs et le web
- ✅ **Créez** votre premier site web
- ✅ **Partagez** vos créations avec le monde !

### 📝 Votre Kit de Survie du Codeur

\`\`\`javascript
// 🎆 TEMPLATE MAGIQUE - Copiez-collez pour démarrer n'importe quel projet

// ========================================
// CONFIGURATION (ne change jamais)
// ========================================
const CONFIG = {
    nomApp: "Mon Super Projet",
    version: "1.0.0",
    auteur: "Votre Nom Ici"
};

// ========================================
// VARIABLES D'ÉTAT (peuvent changer)
// ========================================
let utilisateurConnecte = null;
let donneesChargees = false;
let erreurActuelle = null;

// ========================================
// FONCTION PRINCIPALE
// ========================================
function demarrerApplication() {
    console.log(\`🚀 Démarrage de \${CONFIG.nomApp} v\${CONFIG.version}\`);
    
    // Vérifications de sécurité
    if (!CONFIG.nomApp) {
        console.error("❌ Erreur : Nom d'application manquant");
        return;
    }
    
    // Logique principale
    console.log("✅ Application prête !");
}

// ========================================
// DÉMARRAGE
// ========================================
demarrerApplication();
\`\`\`

### 🌟 Message Final

**Vous n'êtes plus un débutant, vous êtes un CODEUR !** 🥳

Chaque ligne de code que vous écrivez maintenant peut :
- 🎮 Créer des jeux qui amusent
- 📱 Construire des apps qui aident
- 🌍 Changer le monde numérique
- 💰 Vous ouvrir des carrières incroyables

**Le code, c'est de la magie moderne, et vous êtes maintenant un magicien !** ✨

### 🔗 Continuez l'Aventure

- 📚 **Approfondissez** : [JavaScript.info](https://javascript.info) - Le meilleur tutoriel
- 🎮 **Pratiquez** : [Codewars](https://codewars.com) - Défis de code
- 👥 **Communauté** : [Discord Dev France](https://discord.gg/devfrance) - Entraide
- 📹 **Inspirez-vous** : [YouTube - Grafikart](https://grafikart.fr) - Tutos français

**Maintenant, allez coder et créer des trucs géniaux !** 🚀💻✨

---

### 🎆 Vous Avez Terminé ! Vous Êtes Officiellement un Codeur JavaScript !

*🎉 Guide créé spécialement pour les jeunes de 18 ans et moins - Avec des explications simples, des analogies gaming et des exemples concrets. Maintenant, allez conquérir le monde du code ! 🚀🎮✨*

**#JavaScript #Coding #YoungDeveloper #FutureIsNow**
`,

    strings: `
# 📝 Guide Complet des Chaînes de Caractères (Strings) en JavaScript

## 🎯 Introduction

Les chaînes de caractères (strings) sont l'un des types de données les plus fondamentaux en JavaScript. Elles permettent de stocker et manipuler du texte. Ce guide vous présente tout ce que vous devez savoir sur les strings en JavaScript.

## 📋 Définition et Création

### Qu'est-ce qu'une chaîne de caractères ?

Une chaîne de caractères est une séquence de caractères utilisée pour représenter du texte. En JavaScript, les strings sont **immutables**, ce qui signifie qu'une fois créées, elles ne peuvent pas être modifiées directement.

### 🔧 Méthodes de création

\`\`\`javascript
// 1. Guillemets simples
let nom = 'Alice';

// 2. Guillemets doubles
let prenom = "Bob";

// 3. Template literals (backticks)
let message = \`Bonjour \${nom}!\`;

// 4. Constructeur String (moins recommandé)
let texte = new String("Hello");
\`\`\`

## 🛠️ Propriétés Essentielles

### 📏 length - Longueur de la chaîne

\`\`\`javascript
let phrase = "Bonjour le monde";
console.log(phrase.length); // Affiche: 16

// Exemple pratique: validation de mot de passe
function validerMotDePasse(mdp) {
    if (mdp.length < 8) {
        return "❌ Le mot de passe doit contenir au moins 8 caractères";
    }
    return "✅ Mot de passe valide";
}

console.log(validerMotDePasse("123")); // ❌ Le mot de passe doit contenir au moins 8 caractères
console.log(validerMotDePasse("motdepasse123")); // ✅ Mot de passe valide
\`\`\`

## 🔍 Méthodes de Recherche et d'Index

### 🎯 indexOf() - Première occurrence

\`\`\`javascript
let texte = "JavaScript est fantastique";

console.log(texte.indexOf("Script")); // 4
console.log(texte.indexOf("Python")); // -1 (non trouvé)

// 📍 Exemple pratique: vérifier si un email contient @
function validerEmail(email) {
    if (email.indexOf("@") === -1) {
        return "❌ Email invalide: @ manquant";
    }
    return "✅ Email semble valide";
}
\`\`\`

### 🔄 lastIndexOf() - Dernière occurrence

\`\`\`javascript
let phrase = "Le chat mange le poisson";
console.log(phrase.lastIndexOf("le")); // 15

// 📁 Exemple: extraire l'extension d'un fichier
function obtenirExtension(nomFichier) {
    let dernierPoint = nomFichier.lastIndexOf(".");
    if (dernierPoint === -1) return "";
    return nomFichier.slice(dernierPoint + 1);
}

console.log(obtenirExtension("document.pdf")); // "pdf"
console.log(obtenirExtension("image.jpg")); // "jpg"
\`\`\`

### 🔎 includes() - Vérifier la présence

\`\`\`javascript
let description = "Ce produit est disponible en rouge, bleu et vert";

console.log(description.includes("rouge")); // true
console.log(description.includes("jaune")); // false

// 🛒 Exemple: système de filtrage de produits
function filtrerProduits(produits, motCle) {
    return produits.filter(produit => 
        produit.toLowerCase().includes(motCle.toLowerCase())
    );
}

let produits = ["iPhone Rouge", "Samsung Bleu", "Huawei Noir"];
console.log(filtrerProduits(produits, "rouge")); // ["iPhone Rouge"]
\`\`\`

### 🎪 startsWith() et endsWith()

\`\`\`javascript
let url = "https://www.example.com";

console.log(url.startsWith("https")); // true
console.log(url.endsWith(".com")); // true

// 🔒 Exemple: validation d'URL sécurisée
function estUrlSecurisee(url) {
    return url.startsWith("https://") ? "🔒 Sécurisé" : "⚠️ Non sécurisé";
}

console.log(estUrlSecurisee("https://google.com")); // 🔒 Sécurisé
console.log(estUrlSecurisee("http://example.com")); // ⚠️ Non sécurisé
\`\`\`

## ✂️ Méthodes d'Extraction

### 🎯 slice() - Extraction avec indices

\`\`\`javascript
let phrase = "JavaScript Programming";

console.log(phrase.slice(0, 10)); // "JavaScript"
console.log(phrase.slice(11)); // "Programming"
console.log(phrase.slice(-11)); // "Programming" (indices négatifs)

// 📱 Exemple: masquer un numéro de téléphone
function masquerTelephone(numero) {
    if (numero.length < 4) return numero;
    let debut = numero.slice(0, 2);
    let fin = numero.slice(-2);
    let milieu = "*".repeat(numero.length - 4);
    return debut + milieu + fin;
}

console.log(masquerTelephone("0123456789")); // "01******89"
\`\`\`

### 📏 substring() - Alternative à slice

\`\`\`javascript
let texte = "Développement Web";

console.log(texte.substring(0, 13)); // "Développement"
console.log(texte.substring(14)); // "Web"

// 🏷️ Exemple: créer des slugs d'URL
function creerSlug(titre) {
    return titre
        .toLowerCase()
        .substring(0, 50) // Limiter à 50 caractères
        .replace(/\\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

console.log(creerSlug("Mon Article Fantastique!")); // "mon-article-fantastique"
\`\`\`

### 🔤 charAt() et charCodeAt()

\`\`\`javascript
let mot = "Bonjour";

console.log(mot.charAt(0)); // "B"
console.log(mot.charAt(3)); // "j"
console.log(mot.charCodeAt(0)); // 66 (code ASCII de 'B')

// 🎲 Exemple: générateur de mots de passe
function genererMotDePasse(longueur) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let motDePasse = "";
    
    for (let i = 0; i < longueur; i++) {
        let index = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres.charAt(index);
    }
    
    return motDePasse;
}

console.log(genererMotDePasse(12)); // Ex: "aB3kL9mN2pQ1"
\`\`\`

## 🔄 Méthodes de Transformation

### 🔗 concat() - Concaténation

\`\`\`javascript
let prenom = "Marie";
let nom = "Dupont";

console.log(prenom.concat(" ", nom)); // "Marie Dupont"

// 📧 Exemple: construction d'adresses email
function construireEmail(prenom, nom, domaine) {
    return prenom
        .toLowerCase()
        .concat(".", nom.toLowerCase(), "@", domaine);
}

console.log(construireEmail("Jean", "Martin", "entreprise.com")); 
// "jean.martin@entreprise.com"
\`\`\`

### 🔄 replace() et replaceAll()

\`\`\`javascript
let phrase = "J'aime les chats. Les chats sont mignons.";

console.log(phrase.replace("chats", "chiens")); 
// "J'aime les chiens. Les chats sont mignons."

console.log(phrase.replaceAll("chats", "chiens")); 
// "J'aime les chiens. Les chiens sont mignons."

// 🧹 Exemple: nettoyage de texte
function nettoyerTexte(texte) {
    return texte
        .replaceAll("  ", " ") // Supprimer les espaces doubles
        .replace(/^\\s+|\\s+$/g, "") // Supprimer les espaces en début/fin
        .replace(/[^\\w\\s]/gi, ""); // Supprimer la ponctuation
}

console.log(nettoyerTexte("  Bonjour,  monde!  ")); // "Bonjour monde"
\`\`\`

### 📐 Méthodes de Casse

\`\`\`javascript
let texte = "JavaScript Est GÉNIAL";

console.log(texte.toLowerCase()); // "javascript est génial"
console.log(texte.toUpperCase()); // "JAVASCRIPT EST GÉNIAL"

// 🎨 Exemple: formatage de noms propres
function formaterNomPropre(nom) {
    return nom
        .toLowerCase()
        .split(' ')
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(' ');
}

console.log(formaterNomPropre("jean-claude VAN DAMME")); // "Jean-claude Van Damme"
\`\`\`

### ✂️ trim(), trimStart(), trimEnd()

\`\`\`javascript
let texteAvecEspaces = "   Bonjour le monde   ";

console.log(texteAvecEspaces.trim()); // "Bonjour le monde"
console.log(texteAvecEspaces.trimStart()); // "Bonjour le monde   "
console.log(texteAvecEspaces.trimEnd()); // "   Bonjour le monde"

// 📝 Exemple: validation de formulaire
function validerChamp(valeur) {
    let valeurNettoyee = valeur.trim();
    if (valeurNettoyee.length === 0) {
        return "❌ Ce champ est obligatoire";
    }
    return valeurNettoyee;
}
\`\`\`

## 🔀 Méthodes de Division et Jointure

### ✂️ split() - Division en tableau

\`\`\`javascript
let phrase = "pomme,banane,orange,kiwi";
let fruits = phrase.split(",");
console.log(fruits); // ["pomme", "banane", "orange", "kiwi"]

// 📊 Exemple: analyse de données CSV
function analyserCSV(ligneCsv) {
    let donnees = ligneCsv.split(",");
    return {
        nom: donnees[0],
        age: parseInt(donnees[1]),
        ville: donnees[2]
    };
}

console.log(analyserCSV("Alice,25,Paris")); 
// { nom: "Alice", age: 25, ville: "Paris" }
\`\`\`

### 🔄 repeat() - Répétition

\`\`\`javascript
console.log("Ha".repeat(3)); // "HaHaHa"
console.log("-".repeat(20)); // "--------------------"

// 📊 Exemple: création de graphiques en barres ASCII
function creerBarreGraphique(valeur, max, largeur = 20) {
    let pourcentage = (valeur / max) * largeur;
    let barre = "█".repeat(Math.floor(pourcentage));
    let vide = "░".repeat(largeur - Math.floor(pourcentage));
    return \`\${barre}\${vide} \${valeur}/\${max}\`;
}

console.log(creerBarreGraphique(75, 100)); 
// "███████████████░░░░░ 75/100"
\`\`\`

### 🔤 padStart() et padEnd()

\`\`\`javascript
let numero = "42";
console.log(numero.padStart(5, "0")); // "00042"
console.log(numero.padEnd(5, "*")); // "42***"

// 🕐 Exemple: formatage d'horloge
function formaterHeure(heures, minutes, secondes) {
    return \`\${heures.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')}:\${secondes.toString().padStart(2, '0')}\`;
}

console.log(formaterHeure(9, 5, 3)); // "09:05:03"
\`\`\`

## 🎨 Template Literals (Littéraux de Gabarit)

\`\`\`javascript
let nom = "Alice";
let age = 30;

// ✨ Interpolation de variables
let presentation = \`Bonjour, je suis \${nom} et j'ai \${age} ans.\`;

// 📝 Chaînes multi-lignes
let email = \`
Cher \${nom},

Nous vous remercions pour votre inscription.
Votre compte a été créé avec succès.

Cordialement,
L'équipe
\`;

// 🧮 Expressions dans les templates
let prix = 19.99;
let tva = 0.20;
let facture = \`
Produit: \${prix}€
TVA (\${tva * 100}%): \${(prix * tva).toFixed(2)}€
Total: \${(prix * (1 + tva)).toFixed(2)}€
\`;

console.log(facture);
\`\`\`

## 🎯 Exercices Pratiques

### 🏋️ Exercice 1: Validateur d'Email Avancé

\`\`\`javascript
/**
 * 📧 Créez une fonction qui valide un email selon ces critères:
 * - Contient exactement un @
 * - A au moins un caractère avant le @
 * - A au moins un point après le @
 * - Se termine par une extension de 2-4 caractères
 */

function validerEmailAvance(email) {
    // Votre code ici
    // Indice: utilisez indexOf, lastIndexOf, includes
}

// Tests
console.log(validerEmailAvance("test@example.com")); // true
console.log(validerEmailAvance("invalid.email")); // false
console.log(validerEmailAvance("@example.com")); // false
\`\`\`

### 🏋️ Exercice 2: Générateur de Nom d'Utilisateur

\`\`\`javascript
/**
 * 👤 Créez une fonction qui génère un nom d'utilisateur à partir d'un nom complet:
 * - Prend les 3 premières lettres du prénom
 * - Prend les 3 premières lettres du nom
 * - Ajoute un nombre aléatoire entre 10 et 99
 * - Tout en minuscules
 */

function genererNomUtilisateur(nomComplet) {
    // Votre code ici
    // Indice: utilisez split, slice, toLowerCase, Math.random
}

// Tests
console.log(genererNomUtilisateur("Jean Dupont")); // Ex: "jeadup42"
\`\`\`

### 🏋️ Exercice 3: Analyseur de Mot de Passe

\`\`\`javascript
/**
 * 🔐 Créez une fonction qui analyse la force d'un mot de passe:
 * - Faible: < 8 caractères
 * - Moyen: 8+ caractères avec lettres et chiffres
 * - Fort: 8+ caractères avec lettres, chiffres et symboles
 * - Très fort: 12+ caractères avec tous les types
 */

function analyserMotDePasse(motDePasse) {
    // Votre code ici
    // Indice: utilisez length, match avec regex ou includes
}

// Tests
console.log(analyserMotDePasse("123")); // "Faible"
console.log(analyserMotDePasse("motdepasse123")); // "Moyen"
console.log(analyserMotDePasse("MotDePasse123!")); // "Fort"
\`\`\`

### 🏋️ Exercice 4: Formateur de Numéro de Téléphone

\`\`\`javascript
/**
 * 📱 Créez une fonction qui formate un numéro de téléphone:
 * - Entrée: "0123456789"
 * - Sortie: "01 23 45 67 89"
 * - Gère les numéros avec ou sans espaces/tirets
 */

function formaterTelephone(numero) {
    // Votre code ici
    // Indice: utilisez replace, match, join
}

// Tests
console.log(formaterTelephone("0123456789")); // "01 23 45 67 89"
console.log(formaterTelephone("01-23-45-67-89")); // "01 23 45 67 89"
\`\`\`

### 🏋️ Exercice 5: Détecteur de Palindrome Avancé

\`\`\`javascript
/**
 * 🔄 Créez une fonction qui détecte si une phrase est un palindrome:
 * - Ignore les espaces, la ponctuation et la casse
 * - "A man a plan a canal Panama" → true
 * - "race a car" → false
 */

function estPalindromeAvance(phrase) {
    // Votre code ici
    // Indice: utilisez replace avec regex, toLowerCase, split, reverse, join
}

// Tests
console.log(estPalindromeAvance("A man a plan a canal Panama")); // true
console.log(estPalindromeAvance("race a car")); // false
\`\`\`

## 🎯 Solutions des Exercices

<details>
<summary>💡 Cliquez pour voir les solutions</summary>

### Solution Exercice 1:
\`\`\`javascript
function validerEmailAvance(email) {
    let atCount = email.split('@').length - 1;
    if (atCount !== 1) return false;
    
    let atIndex = email.indexOf('@');
    if (atIndex === 0) return false;
    
    let domaine = email.slice(atIndex + 1);
    if (!domaine.includes('.')) return false;
    
    let dernierPoint = domaine.lastIndexOf('.');
    let extension = domaine.slice(dernierPoint + 1);
    
    return extension.length >= 2 && extension.length <= 4;
}
\`\`\`

### Solution Exercice 2:
\`\`\`javascript
function genererNomUtilisateur(nomComplet) {
    let parties = nomComplet.toLowerCase().split(' ');
    let prenom = parties[0].slice(0, 3);
    let nom = parties[1].slice(0, 3);
    let nombre = Math.floor(Math.random() * 90) + 10;
    return prenom + nom + nombre;
}
\`\`\`

### Solution Exercice 3:
\`\`\`javascript
function analyserMotDePasse(motDePasse) {
    let longueur = motDePasse.length;
    let aLettres = /[a-zA-Z]/.test(motDePasse);
    let aChiffres = /[0-9]/.test(motDePasse);
    let aSymboles = /[^a-zA-Z0-9]/.test(motDePasse);
    
    if (longueur < 8) return "Faible";
    if (longueur >= 12 && aLettres && aChiffres && aSymboles) return "Très fort";
    if (longueur >= 8 && aLettres && aChiffres && aSymboles) return "Fort";
    if (longueur >= 8 && aLettres && aChiffres) return "Moyen";
    return "Faible";
}
\`\`\`

### Solution Exercice 4:
\`\`\`javascript
function formaterTelephone(numero) {
    let chiffres = numero.replace(/[^0-9]/g, '');
    return chiffres.replace(/(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})/, '$1 $2 $3 $4 $5');
}
\`\`\`

### Solution Exercice 5:
\`\`\`javascript
function estPalindromeAvance(phrase) {
    let nettoye = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');
    return nettoye === nettoye.split('').reverse().join('');
}
\`\`\`

</details>

## 🎉 Conclusion

Les chaînes de caractères sont un élément fondamental de JavaScript. Maîtriser leurs méthodes vous permettra de manipuler efficacement le texte dans vos applications. N'hésitez pas à pratiquer avec les exercices proposés et à expérimenter avec différentes combinaisons de méthodes !

### 📚 Ressources Supplémentaires

- [MDN Web Docs - String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JavaScript.info - Strings](https://javascript.info/string)

---

*📝 Guide créé pour l'apprentissage de JavaScript - Bonne pratique ! 🚀*
`,

    arrays: `
# 📊 Guide Complet des Tableaux (Arrays) en JavaScript

## 🎯 Introduction

Les tableaux (arrays) sont des structures de données fondamentales en JavaScript qui permettent de stocker plusieurs valeurs dans une seule variable. Ils sont ordonnés, indexés et très polyvalents pour manipuler des collections de données.

## 📋 Définition et Création

### Qu'est-ce qu'un tableau ?

Un tableau est une collection ordonnée d'éléments, où chaque élément est accessible via un index numérique commençant à 0. Les tableaux en JavaScript sont **dynamiques** et peuvent contenir différents types de données.

### 🔧 Méthodes de création

\`\`\`javascript
// 1. Littéral de tableau (recommandé)
let fruits = ['pomme', 'banane', 'orange'];

// 2. Constructeur Array
let nombres = new Array(1, 2, 3, 4, 5);

// 3. Tableau vide
let vide = [];

// 4. Tableau avec taille prédéfinie
let fixe = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

// 5. Tableau mixte (différents types)
let mixte = ['texte', 42, true, null, {nom: 'Alice'}];
\`\`\`

## 📏 Propriétés Essentielles

### 📊 length - Taille du tableau

\`\`\`javascript
let animaux = ['chat', 'chien', 'oiseau'];
console.log(animaux.length); // 3

// 🎯 Exemple pratique: validation de liste
function validerListeCourses(liste) {
    if (liste.length === 0) {
        return "🛒 Votre liste de courses est vide";
    }
    if (liste.length > 20) {
        return "⚠️ Liste trop longue, limitez à 20 articles";
    }
    return \`✅ Liste valide avec \${liste.length} articles\`;
}

console.log(validerListeCourses(['pain', 'lait'])); // ✅ Liste valide avec 2 articles
\`\`\`

## ➕ Méthodes d'Ajout d'Éléments

### 🔚 push() - Ajouter à la fin

\`\`\`javascript
let stack = [1, 2, 3];
stack.push(4);
console.log(stack); // [1, 2, 3, 4]

// Ajouter plusieurs éléments
stack.push(5, 6, 7);
console.log(stack); // [1, 2, 3, 4, 5, 6, 7]

// 📚 Exemple: système de notifications
class GestionnaireNotifications {
    constructor() {
        this.notifications = [];
    }
    
    ajouterNotification(message, type = 'info') {
        this.notifications.push({
            id: Date.now(),
            message: message,
            type: type,
            timestamp: new Date()
        });
        return \`📢 Notification ajoutée (\${this.notifications.length} total)\`;
    }
}

let notifs = new GestionnaireNotifications();
console.log(notifs.ajouterNotification("Nouveau message", "success"));
\`\`\`

### 🔝 unshift() - Ajouter au début

\`\`\`javascript
let queue = ['deuxième', 'troisième'];
queue.unshift('premier');
console.log(queue); // ['premier', 'deuxième', 'troisième']

// 🏃 Exemple: file d'attente prioritaire
function ajouterClientPrioritaire(file, client) {
    if (client.priorite === 'VIP') {
        file.unshift(\`👑 \${client.nom}\`);
        return "Client VIP ajouté en priorité";
    } else {
        file.push(\`👤 \${client.nom}\`);
        return "Client ajouté à la file";
    }
}

let fileAttente = ['Alice', 'Bob'];
console.log(ajouterClientPrioritaire(fileAttente, {nom: 'Charlie', priorite: 'VIP'}));
console.log(fileAttente); // ['👑 Charlie', 'Alice', 'Bob']
\`\`\`

## ➖ Méthodes de Suppression d'Éléments

### 🔚 pop() - Supprimer le dernier

\`\`\`javascript
let pile = [1, 2, 3, 4];
let dernier = pile.pop();
console.log(dernier); // 4
console.log(pile); // [1, 2, 3]

// 🎮 Exemple: système d'annulation (undo)
class HistoriqueActions {
    constructor() {
        this.actions = [];
    }
    
    executerAction(action) {
        this.actions.push(action);
        console.log(\`✅ Action exécutée: \${action}\`);
    }
    
    annuler() {
        if (this.actions.length === 0) {
            return "❌ Aucune action à annuler";
        }
        let actionAnnulee = this.actions.pop();
        return \`↩️ Action annulée: \${actionAnnulee}\`;
    }
}

let historique = new HistoriqueActions();
historique.executerAction("Créer fichier");
historique.executerAction("Modifier texte");
console.log(historique.annuler()); // ↩️ Action annulée: Modifier texte
\`\`\`

### 🔝 shift() - Supprimer le premier

\`\`\`javascript
let file = ['premier', 'deuxième', 'troisième'];
let premier = file.shift();
console.log(premier); // 'premier'
console.log(file); // ['deuxième', 'troisième']

// 🎫 Exemple: système de tickets
function traiterProchainTicket(tickets) {
    if (tickets.length === 0) {
        return "📭 Aucun ticket en attente";
    }
    let ticket = tickets.shift();
    return \`🎫 Traitement du ticket: \${ticket}\`;
}

let tickets = ['#001', '#002', '#003'];
console.log(traiterProchainTicket(tickets)); // 🎫 Traitement du ticket: #001
console.log(tickets); // ['#002', '#003']
\`\`\`

## 🔍 Méthodes de Recherche

### 🎯 indexOf() et lastIndexOf()

\`\`\`javascript
let couleurs = ['rouge', 'bleu', 'vert', 'bleu', 'jaune'];

console.log(couleurs.indexOf('bleu')); // 1 (première occurrence)
console.log(couleurs.lastIndexOf('bleu')); // 3 (dernière occurrence)
console.log(couleurs.indexOf('violet')); // -1 (non trouvé)

// 🎨 Exemple: gestion de palette de couleurs
function verifierCouleurDupliquee(palette, nouvelleCouleur) {
    let index = palette.indexOf(nouvelleCouleur);
    if (index !== -1) {
        return \`⚠️ Couleur déjà présente à l'index \${index}\`;
    }
    palette.push(nouvelleCouleur);
    return \`✅ Couleur \${nouvelleCouleur} ajoutée\`;
}

let palette = ['rouge', 'vert', 'bleu'];
console.log(verifierCouleurDupliquee(palette, 'rouge')); // ⚠️ Couleur déjà présente à l'index 0
\`\`\`

### 🔎 includes() - Vérifier la présence

\`\`\`javascript
let ingredients = ['farine', 'œufs', 'lait', 'sucre'];

console.log(ingredients.includes('farine')); // true
console.log(ingredients.includes('chocolat')); // false

// 🍰 Exemple: vérification d'allergènes
function verifierAllergenes(ingredients, allergenes) {
    let allergenesPresents = allergenes.filter(allergene => 
        ingredients.includes(allergene)
    );
    
    if (allergenesPresents.length > 0) {
        return \`⚠️ Allergènes détectés: \${allergenesPresents.join(', ')}\`;
    }
    return "✅ Aucun allergène détecté";
}

let recette = ['farine', 'œufs', 'lait', 'noix'];
let allergenes = ['arachides', 'noix', 'gluten'];
console.log(verifierAllergenes(recette, allergenes)); // ⚠️ Allergènes détectés: noix
\`\`\`

### 🔍 find() et findIndex()

\`\`\`javascript
let utilisateurs = [
    {id: 1, nom: 'Alice', age: 25},
    {id: 2, nom: 'Bob', age: 30},
    {id: 3, nom: 'Charlie', age: 35}
];

// Trouver un utilisateur
let utilisateur = utilisateurs.find(u => u.nom === 'Bob');
console.log(utilisateur); // {id: 2, nom: 'Bob', age: 30}

// Trouver l'index
let index = utilisateurs.findIndex(u => u.age > 30);
console.log(index); // 2

// 👥 Exemple: système de gestion d'utilisateurs
function rechercherUtilisateur(users, critere, valeur) {
    let utilisateur = users.find(u => u[critere] === valeur);
    if (utilisateur) {
        return \`👤 Utilisateur trouvé: \${utilisateur.nom} (ID: \${utilisateur.id})\`;
    }
    return \`❌ Aucun utilisateur trouvé avec \${critere}: \${valeur}\`;
}

console.log(rechercherUtilisateur(utilisateurs, 'nom', 'Alice'));
// 👤 Utilisateur trouvé: Alice (ID: 1)
\`\`\`

## ✂️ Méthodes d'Extraction et Modification

### 🎯 slice() - Extraction sans modification

\`\`\`javascript
let nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nombres.slice(2, 5)); // [2, 3, 4]
console.log(nombres.slice(-3)); // [7, 8, 9]
console.log(nombres.slice()); // Copie complète

// 📄 Exemple: pagination
function paginer(donnees, page, taille) {
    let debut = (page - 1) * taille;
    let fin = debut + taille;
    let pageActuelle = donnees.slice(debut, fin);
    
    return {
        page: page,
        donnees: pageActuelle,
        total: donnees.length,
        pages: Math.ceil(donnees.length / taille)
    };
}

let articles = Array.from({length: 25}, (_, i) => \`Article \${i + 1}\`);
console.log(paginer(articles, 2, 5));
// { page: 2, donnees: ['Article 6', 'Article 7', 'Article 8', 'Article 9', 'Article 10'], total: 25, pages: 5 }
\`\`\`

### ✂️ splice() - Modification directe

\`\`\`javascript
let fruits = ['pomme', 'banane', 'orange', 'kiwi', 'mangue'];

// Supprimer 2 éléments à partir de l'index 1
let supprimes = fruits.splice(1, 2);
console.log(supprimes); // ['banane', 'orange']
console.log(fruits); // ['pomme', 'kiwi', 'mangue']

// Ajouter des éléments à l'index 2
fruits.splice(2, 0, 'poire', 'raisin');
console.log(fruits); // ['pomme', 'kiwi', 'poire', 'raisin', 'mangue']

// 🛒 Exemple: gestion de panier d'achat
class PanierAchat {
    constructor() {
        this.articles = [];
    }
    
    ajouterArticle(article) {
        this.articles.push(article);
        return \`🛒 \${article} ajouté au panier\`;
    }
    
    supprimerArticle(nom) {
        let index = this.articles.indexOf(nom);
        if (index !== -1) {
            this.articles.splice(index, 1);
            return \`🗑️ \${nom} supprimé du panier\`;
        }
        return \`❌ \${nom} non trouvé dans le panier\`;
    }
    
    remplacerArticle(ancien, nouveau) {
        let index = this.articles.indexOf(ancien);
        if (index !== -1) {
            this.articles.splice(index, 1, nouveau);
            return \`🔄 \${ancien} remplacé par \${nouveau}\`;
        }
        return \`❌ \${ancien} non trouvé\`;
    }
}

let panier = new PanierAchat();
panier.ajouterArticle('Pain');
panier.ajouterArticle('Lait');
console.log(panier.remplacerArticle('Lait', 'Lait bio')); // 🔄 Lait remplacé par Lait bio
\`\`\`

## 🔗 Méthodes de Jointure et Division

### 🔗 join() - Convertir en chaîne

\`\`\`javascript
let mots = ['Bonjour', 'le', 'monde'];
console.log(mots.join(' ')); // "Bonjour le monde"
console.log(mots.join('-')); // "Bonjour-le-monde"
console.log(mots.join('')); // "Bonjourlemonde"

// 🏷️ Exemple: génération de tags HTML
function genererListeHTML(elements, type = 'ul') {
    let items = elements.map(element => \`  <li>\${element}</li>\`);
    return \`<\${type}>\\n\${items.join('\\n')}\\n</\${type}>\`;
}

let taches = ['Faire les courses', 'Nettoyer la maison', 'Préparer le dîner'];
console.log(genererListeHTML(taches));
/*
<ul>
  <li>Faire les courses</li>
  <li>Nettoyer la maison</li>
  <li>Préparer le dîner</li>
</ul>
*/
\`\`\`

### 🔄 concat() - Fusionner des tableaux

\`\`\`javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let fusion = arr1.concat(arr2, arr3);
console.log(fusion); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 📊 Exemple: fusion de données de différentes sources
function fusionnerDonnees(...sources) {
    let donneesFusionnees = [];
    sources.forEach((source, index) => {
        console.log(\`📥 Fusion source \${index + 1}: \${source.length} éléments\`);
        donneesFusionnees = donneesFusionnees.concat(source);
    });
    return {
        total: donneesFusionnees.length,
        donnees: donneesFusionnees
    };
}

let ventes2023 = [100, 150, 200];
let ventes2024 = [180, 220, 250];
let ventesPromo = [50, 75];

console.log(fusionnerDonnees(ventes2023, ventes2024, ventesPromo));
\`\`\`

## 🔄 Méthodes de Transformation

### 🗺️ map() - Transformer chaque élément

\`\`\`javascript
let nombres = [1, 2, 3, 4, 5];
let carres = nombres.map(n => n * n);
console.log(carres); // [1, 4, 9, 16, 25]

// 💰 Exemple: calcul de prix avec TVA
function calculerPrixTTC(prixHT, tauxTVA = 0.20) {
    return prixHT.map(prix => ({
        ht: prix,
        tva: +(prix * tauxTVA).toFixed(2),
        ttc: +(prix * (1 + tauxTVA)).toFixed(2)
    }));
}

let prix = [10, 25, 50, 100];
console.log(calculerPrixTTC(prix));
/*
[
  { ht: 10, tva: 2, ttc: 12 },
  { ht: 25, tva: 5, ttc: 30 },
  { ht: 50, tva: 10, ttc: 60 },
  { ht: 100, tva: 20, ttc: 120 }
]
*/
\`\`\`

### 🔍 filter() - Filtrer les éléments

\`\`\`javascript
let ages = [12, 18, 25, 16, 30, 14, 22];
let majeurs = ages.filter(age => age >= 18);
console.log(majeurs); // [18, 25, 30, 22]

// 🛍️ Exemple: filtrage de produits
function filtrerProduits(produits, criteres) {
    return produits.filter(produit => {
        if (criteres.prixMax && produit.prix > criteres.prixMax) return false;
        if (criteres.prixMin && produit.prix < criteres.prixMin) return false;
        if (criteres.categorie && produit.categorie !== criteres.categorie) return false;
        if (criteres.enStock && !produit.stock) return false;
        return true;
    });
}

let produits = [
    {nom: 'Laptop', prix: 800, categorie: 'Électronique', stock: true},
    {nom: 'Souris', prix: 25, categorie: 'Électronique', stock: false},
    {nom: 'Livre', prix: 15, categorie: 'Culture', stock: true},
    {nom: 'Casque', prix: 150, categorie: 'Électronique', stock: true}
];

console.log(filtrerProduits(produits, {prixMax: 200, enStock: true}));
// Produits <= 200€ et en stock
\`\`\`

### 🔄 reduce() - Réduire à une valeur

\`\`\`javascript
let nombres = [1, 2, 3, 4, 5];
let somme = nombres.reduce((acc, curr) => acc + curr, 0);
console.log(somme); // 15

// 📊 Exemple: analyse de données de vente
function analyserVentes(ventes) {
    return ventes.reduce((stats, vente) => {
        stats.total += vente.montant;
        stats.nombreVentes++;
        stats.moyenne = +(stats.total / stats.nombreVentes).toFixed(2);
        
        if (vente.montant > stats.max.montant) {
            stats.max = vente;
        }
        if (vente.montant < stats.min.montant) {
            stats.min = vente;
        }
        
        return stats;
    }, {
        total: 0,
        nombreVentes: 0,
        moyenne: 0,
        max: {montant: 0},
        min: {montant: Infinity}
    });
}

let ventes = [
    {id: 1, montant: 150, client: 'Alice'},
    {id: 2, montant: 300, client: 'Bob'},
    {id: 3, montant: 75, client: 'Charlie'},
    {id: 4, montant: 200, client: 'Diana'}
];

console.log(analyserVentes(ventes));
\`\`\`

## 🔄 Méthodes de Tri

### 📊 sort() - Tri personnalisé

\`\`\`javascript
let fruits = ['banane', 'pomme', 'orange', 'kiwi'];
fruits.sort(); // Tri alphabétique
console.log(fruits); // ['banane', 'kiwi', 'orange', 'pomme']

let nombres = [10, 5, 40, 25, 1000, 1];
nombres.sort((a, b) => a - b); // Tri numérique croissant
console.log(nombres); // [1, 5, 10, 25, 40, 1000]

// 🏆 Exemple: classement de joueurs
function classerJoueurs(joueurs, critere = 'score') {
    return joueurs.sort((a, b) => {
        if (critere === 'score') return b.score - a.score; // Décroissant
        if (critere === 'nom') return a.nom.localeCompare(b.nom); // Alphabétique
        if (critere === 'niveau') return b.niveau - a.niveau; // Décroissant
        return 0;
    });
}

let joueurs = [
    {nom: 'Alice', score: 1500, niveau: 25},
    {nom: 'Bob', score: 2000, niveau: 30},
    {nom: 'Charlie', score: 1200, niveau: 20}
];

console.log(classerJoueurs([...joueurs], 'score'));
// Classement par score (Bob, Alice, Charlie)
\`\`\`

### 🔄 reverse() - Inverser l'ordre

\`\`\`javascript
let lettres = ['a', 'b', 'c', 'd'];
lettres.reverse();
console.log(lettres); // ['d', 'c', 'b', 'a']

// 📚 Exemple: historique de navigation
class HistoriqueNavigation {
    constructor() {
        this.pages = [];
    }
    
    visiterPage(url) {
        this.pages.push({url, timestamp: new Date()});
        if (this.pages.length > 10) {
            this.pages.shift(); // Garder seulement les 10 dernières
        }
    }
    
    obtenirHistorique(ordre = 'recent') {
        let historique = [...this.pages];
        return ordre === 'recent' ? historique.reverse() : historique;
    }
}

let nav = new HistoriqueNavigation();
nav.visiterPage('accueil.html');
nav.visiterPage('produits.html');
nav.visiterPage('contact.html');
console.log(nav.obtenirHistorique('recent')); // Plus récent en premier
\`\`\`

## 🔍 Méthodes de Test

### ✅ every() - Tous les éléments

\`\`\`javascript
let ages = [20, 25, 30, 35];
let tousAdultes = ages.every(age => age >= 18);
console.log(tousAdultes); // true

// 🎓 Exemple: validation de formulaire
function validerFormulaire(champs) {
    let validations = {
        tousRemplis: champs.every(champ => champ.valeur.trim() !== ''),
        emailsValides: champs
            .filter(champ => champ.type === 'email')
            .every(champ => champ.valeur.includes('@')),
        motsDePasseValides: champs
            .filter(champ => champ.type === 'password')
            .every(champ => champ.valeur.length >= 8)
    };
    
    return {
        valide: Object.values(validations).every(v => v),
        details: validations
    };
}

let formulaire = [
    {nom: 'nom', type: 'text', valeur: 'Alice'},
    {nom: 'email', type: 'email', valeur: 'alice@example.com'},
    {nom: 'password', type: 'password', valeur: 'motdepasse123'}
];

console.log(validerFormulaire(formulaire));
\`\`\`

### 🔍 some() - Au moins un élément

\`\`\`javascript
let notes = [12, 8, 15, 6, 18];
let auMoinsUneBonneNote = notes.some(note => note >= 15);
console.log(auMoinsUneBonneNote); // true

// 🚨 Exemple: système d'alertes
function verifierAlertes(capteurs) {
    let alertes = {
        temperatureCritique: capteurs.some(c => c.temperature > 80),
        humiditeElevee: capteurs.some(c => c.humidite > 90),
        pressionAnormale: capteurs.some(c => c.pression < 950 || c.pression > 1050)
    };
    
    let alerteActive = Object.values(alertes).some(alerte => alerte);
    
    return {
        alerteGenerale: alerteActive,
        details: alertes,
        message: alerteActive ? "⚠️ Alertes détectées!" : "✅ Tous les capteurs normaux"
    };
}

let capteurs = [
    {id: 1, temperature: 75, humidite: 60, pression: 1013},
    {id: 2, temperature: 85, humidite: 65, pression: 1015}, // Température critique!
    {id: 3, temperature: 70, humidite: 55, pression: 1010}
];

console.log(verifierAlertes(capteurs));
\`\`\`

## 🔄 Méthodes Modernes (ES6+)

### 🔍 Array.from() - Créer depuis itérable

\`\`\`javascript
// Depuis une chaîne
let lettres = Array.from('Hello');
console.log(lettres); // ['H', 'e', 'l', 'l', 'o']

// Avec fonction de mapping
let carres = Array.from({length: 5}, (_, i) => i * i);
console.log(carres); // [0, 1, 4, 9, 16]

// 📊 Exemple: génération de données de test
function genererDonneesTest(nombre, generateur) {
    return Array.from({length: nombre}, (_, index) => generateur(index));
}

let utilisateursTest = genererDonneesTest(5, i => ({
    id: i + 1,
    nom: \`Utilisateur\${i + 1}\`,
    email: \`user\${i + 1}@test.com\`,
    actif: Math.random() > 0.5
}));

console.log(utilisateursTest);
\`\`\`

### 🔍 Array.of() - Créer avec éléments

\`\`\`javascript
let nombres = Array.of(1, 2, 3, 4, 5);
console.log(nombres); // [1, 2, 3, 4, 5]

// Différence avec Array()
console.log(Array(3)); // [undefined, undefined, undefined]
console.log(Array.of(3)); // [3]
\`\`\`

### 🔍 flat() et flatMap()

\`\`\`javascript
let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]

// flatMap = map + flat
let phrases = ['hello world', 'foo bar'];
let mots = phrases.flatMap(phrase => phrase.split(' '));
console.log(mots); // ['hello', 'world', 'foo', 'bar']

// 📝 Exemple: traitement de données hiérarchiques
function extraireTousLesTags(articles) {
    return articles
        .flatMap(article => article.tags)
        .filter((tag, index, arr) => arr.indexOf(tag) === index) // Unique
        .sort();
}

let articles = [
    {titre: 'Article 1', tags: ['javascript', 'web', 'frontend']},
    {titre: 'Article 2', tags: ['python', 'backend', 'api']},
    {titre: 'Article 3', tags: ['javascript', 'nodejs', 'backend']}
];

console.log(extraireTousLesTags(articles));
// ['api', 'backend', 'frontend', 'javascript', 'nodejs', 'python', 'web']
\`\`\`

## 🎯 Exercices Pratiques

### 🏋️ Exercice 1: Gestionnaire de Tâches

\`\`\`javascript
/**
 * 📋 Créez un gestionnaire de tâches avec les fonctionnalités suivantes:
 * - Ajouter une tâche
 * - Marquer comme terminée
 * - Supprimer une tâche
 * - Filtrer par statut
 * - Statistiques
 */

class GestionnaireTaches {
    constructor() {
        this.taches = [];
        this.prochainId = 1;
    }
    
    ajouterTache(description, priorite = 'normale') {
        // Votre code ici
    }
    
    terminerTache(id) {
        // Votre code ici
    }
    
    supprimerTache(id) {
        // Votre code ici
    }
    
    filtrerTaches(statut) {
        // Votre code ici
        // statut: 'toutes', 'terminées', 'en_cours'
    }
    
    obtenirStatistiques() {
        // Votre code ici
        // Retourner: total, terminées, en cours, par priorité
    }
}

// Tests
let gestionnaire = new GestionnaireTaches();
gestionnaire.ajouterTache("Faire les courses", "haute");
gestionnaire.ajouterTache("Nettoyer la maison");
console.log(gestionnaire.obtenirStatistiques());
\`\`\`

### 🏋️ Exercice 2: Analyseur de Ventes

\`\`\`javascript
/**
 * 📊 Créez un analyseur de données de vente:
 * - Calculer le chiffre d'affaires total
 * - Trouver le meilleur vendeur
 * - Analyser les ventes par mois
 * - Identifier les produits les plus vendus
 */

function analyserVentes(ventes) {
    // ventes = [{vendeur, produit, montant, date, quantite}]
    
    // Votre code ici
    // Retourner un objet avec toutes les analyses
}

// Données de test
let ventesData = [
    {vendeur: 'Alice', produit: 'Laptop', montant: 1200, date: '2024-01-15', quantite: 1},
    {vendeur: 'Bob', produit: 'Souris', montant: 25, date: '2024-01-16', quantite: 2},
    {vendeur: 'Alice', produit: 'Clavier', montant: 80, date: '2024-02-01', quantite: 1},
    // ... plus de données
];

console.log(analyserVentes(ventesData));
\`\`\`

### 🏋️ Exercice 3: Système de Recommandation

\`\`\`javascript
/**
 * 🎯 Créez un système de recommandation de produits:
 * - Basé sur les achats précédents
 * - Filtrage par catégorie et prix
 * - Scoring de pertinence
 * - Limitation du nombre de recommandations
 */

function recommanderProduits(utilisateur, produits, options = {}) {
    // utilisateur = {id, achats: [{produitId, categorie, prix}]}
    // produits = [{id, nom, categorie, prix, tags}]
    // options = {limite: 5, prixMax, categoriePreferee}
    
    // Votre code ici
    // Algorithme de recommandation basé sur:
    // 1. Catégories achetées précédemment
    // 2. Gamme de prix habituelle
    // 3. Produits similaires (tags)
}

// Tests
let utilisateur = {
    id: 1,
    achats: [
        {produitId: 1, categorie: 'Électronique', prix: 500},
        {produitId: 3, categorie: 'Électronique', prix: 150}
    ]
};

let produits = [
    {id: 5, nom: 'Casque Gaming', categorie: 'Électronique', prix: 200, tags: ['gaming', 'audio']},
    {id: 6, nom: 'Livre JS', categorie: 'Livre', prix: 30, tags: ['programmation', 'web']},
    // ... plus de produits
];

console.log(recommanderProduits(utilisateur, produits, {limite: 3}));
\`\`\`

### 🏋️ Exercice 4: Algorithme de Tri Personnalisé

\`\`\`javascript
/**
 * 🔄 Implémentez différents algorithmes de tri:
 * - Tri à bulles
 * - Tri par sélection
 * - Tri rapide (quicksort)
 * - Comparaison des performances
 */

class AlgorithmesTri {
    static triBulles(arr) {
        // Votre code ici
        // Implémenter le tri à bulles
    }
    
    static triSelection(arr) {
        // Votre code ici
        // Implémenter le tri par sélection
    }
    
    static triRapide(arr) {
        // Votre code ici
        // Implémenter le quicksort
    }
    
    static comparerPerformances(arr, iterations = 1000) {
        // Votre code ici
        // Mesurer le temps d'exécution de chaque algorithme
    }
}

// Tests
let tableauTest = Array.from({length: 100}, () => Math.floor(Math.random() * 1000));
console.log(AlgorithmesTri.comparerPerformances(tableauTest));
\`\`\`

### 🏋️ Exercice 5: Gestionnaire de Cache LRU

\`\`\`javascript
/**
 * 💾 Implémentez un cache LRU (Least Recently Used):
 * - Capacité limitée
 * - Éviction automatique des éléments les moins utilisés
 * - Méthodes get() et put()
 * - Statistiques d'utilisation
 */

class CacheLRU {
    constructor(capacite) {
        this.capacite = capacite;
        this.cache = [];
        this.stats = {hits: 0, misses: 0};
    }
    
    get(cle) {
        // Votre code ici
        // Retourner la valeur et mettre à jour l'ordre d'utilisation
    }
    
    put(cle, valeur) {
        // Votre code ici
        // Ajouter/mettre à jour et gérer la capacité
    }
    
    obtenirStatistiques() {
        // Votre code ici
        // Retourner les statistiques d'utilisation
    }
}

// Tests
let cache = new CacheLRU(3);
cache.put('a', 1);
cache.put('b', 2);
cache.put('c', 3);
console.log(cache.get('a')); // 1
cache.put('d', 4); // 'b' devrait être évincé
console.log(cache.obtenirStatistiques());
\`\`\`

## 🎯 Solutions des Exercices

<details>
<summary>💡 Cliquez pour voir les solutions</summary>

### Solution Exercice 1:
\`\`\`javascript
class GestionnaireTaches {
    constructor() {
        this.taches = [];
        this.prochainId = 1;
    }
    
    ajouterTache(description, priorite = 'normale') {
        let tache = {
            id: this.prochainId++,
            description,
            priorite,
            terminee: false,
            dateCreation: new Date()
        };
        this.taches.push(tache);
        return \`✅ Tâche ajoutée: \${description}\`;
    }
    
    terminerTache(id) {
        let tache = this.taches.find(t => t.id === id);
        if (tache) {
            tache.terminee = true;
            tache.dateTerminaison = new Date();
            return \`🎉 Tâche terminée: \${tache.description}\`;
        }
        return \`❌ Tâche non trouvée\`;
    }
    
    supprimerTache(id) {
        let index = this.taches.findIndex(t => t.id === id);
        if (index !== -1) {
            let tache = this.taches.splice(index, 1)[0];
            return \`🗑️ Tâche supprimée: \${tache.description}\`;
        }
        return \`❌ Tâche non trouvée\`;
    }
    
    filtrerTaches(statut) {
        switch(statut) {
            case 'terminées':
                return this.taches.filter(t => t.terminee);
            case 'en_cours':
                return this.taches.filter(t => !t.terminee);
            default:
                return this.taches;
        }
    }
    
    obtenirStatistiques() {
        let total = this.taches.length;
        let terminees = this.taches.filter(t => t.terminee).length;
        let enCours = total - terminees;
        
        let parPriorite = this.taches.reduce((acc, tache) => {
            acc[tache.priorite] = (acc[tache.priorite] || 0) + 1;
            return acc;
        }, {});
        
        return {
            total,
            terminees,
            enCours,
            pourcentageTermine: total > 0 ? Math.round((terminees / total) * 100) : 0,
            parPriorite
        };
    }
}
\`\`\`

### Solution Exercice 2:
\`\`\`javascript
function analyserVentes(ventes) {
    let chiffreAffaires = ventes.reduce((total, vente) => total + vente.montant, 0);
    
    let ventesParVendeur = ventes.reduce((acc, vente) => {
        if (!acc[vente.vendeur]) {
            acc[vente.vendeur] = {montant: 0, quantite: 0};
        }
        acc[vente.vendeur].montant += vente.montant;
        acc[vente.vendeur].quantite += vente.quantite;
        return acc;
    }, {});
    
    let meilleurVendeur = Object.entries(ventesParVendeur)
        .sort(([,a], [,b]) => b.montant - a.montant)[0];
    
    let ventesParMois = ventes.reduce((acc, vente) => {
        let mois = vente.date.substring(0, 7);
        acc[mois] = (acc[mois] || 0) + vente.montant;
        return acc;
    }, {});
    
    let produitsPopulaires = ventes.reduce((acc, vente) => {
        acc[vente.produit] = (acc[vente.produit] || 0) + vente.quantite;
        return acc;
    }, {});
    
    return {
        chiffreAffaires,
        meilleurVendeur: {nom: meilleurVendeur[0], stats: meilleurVendeur[1]},
        ventesParMois,
        produitsPopulaires: Object.entries(produitsPopulaires)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
    };
}
\`\`\`

</details>

## 🎉 Conclusion

Les tableaux sont l'une des structures de données les plus puissantes et polyvalentes en JavaScript. Maîtriser leurs méthodes vous permettra de manipuler efficacement les collections de données dans vos applications. Les méthodes fonctionnelles comme \`map()\`, \`filter()\`, et \`reduce()\` sont particulièrement importantes dans le JavaScript moderne.

### 📚 Ressources Supplémentaires

- [MDN Web Docs - Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info - Arrays](https://javascript.info/array)
- [Array Methods Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)

---

*📊 Guide créé pour l'apprentissage de JavaScript - Maîtrisez les tableaux ! 🚀*
`,

    objects: `
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

- ✅ Notions de base en variables (\`let\`, \`const\`, \`var\`)
- ✅ Connaissance des types primitifs (\`string\`, \`number\`, \`boolean\`, \`undefined\`, \`null\`)
- ✅ Notions élémentaires sur les tableaux (array)
- ✅ Compréhension des opérateurs de base

---

## Séance 1 : Fondamentaux des Objets

### 1.1 Introduction : Qu'est-ce qu'un Objet ?

#### 🎯 Concept Fondamental

Un **objet** en JavaScript est une structure de données qui permet de regrouper des informations connexes sous un seul nom. Au lieu d'utiliser plusieurs variables distinctes, vous pouvez organiser logiquement vos données.

**Exemple du problème :**
\`\`\`javascript
// ❌ Approche inefficace avec des variables séparées
let personneName = "Dupont";
let personnePrenom = "Jean";
let personneAge = 30;
let personneVille = "Paris";
\`\`\`

**Solution avec un objet :**
\`\`\`javascript
// ✅ Approche efficace avec un objet
const personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    ville: "Paris"
};
\`\`\`

#### 🚗 Analogie : La Voiture

Imaginez une voiture. Elle possède plusieurs caractéristiques qui la définissent :

\`\`\`javascript
const voiture = {
    marque: "Renault",
    modele: "Clio",
    annee: 2021,
    couleur: "rouge",
    kilometrage: 15000
};
\`\`\`

Chaque **propriété** (marque, modele, etc.) décrit un aspect de la voiture.

### 1.2 Syntaxe de Base : Création d'un Objet
#### 📝 Syntaxe Générale

\`\`\`javascript
const nomObjet = {
    cle1: valeur1,
    cle2: valeur2,
    cle3: valeur3
};
\`\`\`

**Éléments importants :**
- \`{}\` : Accolades pour délimiter l'objet
- \`cle: valeur\` : Paires clé-valeur séparées par \`:\`
- \`,\` : Virgule pour séparer les propriétés (sauf la dernière)

#### 💡 Exemple Complet

\`\`\`javascript
const personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    estEtudiant: false,
    hobbies: ["lecture", "sport"]
};
\`\`\`

**Vocabulaire Clé :**
- \`personne\` → L'**objet** (le conteneur)
- \`nom\`, \`prenom\`, \`age\` → Les **clés** ou **propriétés**
- \`"Dupont"\`, \`"Jean"\`, \`30\` → Les **valeurs**
- Une paire clé-valeur complète = une **propriété de l'objet**

### 1.3 Accéder aux Données (Notation par Point)
Pour lire ou récupérer une valeur spécifique, utilisez la **notation par point** (\`.\`) :

\`\`\`javascript
console.log(personne.nom);         // Affiche : "Dupont"
console.log(personne.age);         // Affiche : 30
console.log(personne.estEtudiant); // Affiche : false

// Stocker une valeur dans une variable
const agePersonne = personne.age;
console.log(agePersonne);          // Affiche : 30

// Combiner plusieurs valeurs
const nomComplet = personne.prenom + " " + personne.nom;
console.log(nomComplet);           // Affiche : "Jean Dupont"
\`\`\`

**Syntaxe :** \`nomObjet.nomPropriete\`

### 1.4 Modifier et Ajouter des Données
Les objets déclarés avec \`const\` sont **mutables** : vous pouvez modifier leurs propriétés internes, mais vous ne pouvez pas réassigner l'objet entier.

#### ✏️ Modifier une Propriété Existante

\`\`\`javascript
console.log(personne.age);  // Affiche : 30

personne.age = 31;          // Modification
console.log(personne.age);  // Affiche : 31
\`\`\`

#### ➕ Ajouter une Nouvelle Propriété

\`\`\`javascript
personne.ville = "Paris";   // Ajout d'une nouvelle propriété
personne.profession = "Développeur";

console.log(personne);
// Affiche : { nom: "Dupont", prenom: "Jean", age: 31, estEtudiant: false, ville: "Paris", profession: "Développeur" }
\`\`\`

#### ❌ Supprimer une Propriété

\`\`\`javascript
delete personne.estEtudiant;
console.log(personne.estEtudiant); // Affiche : undefined
\`\`\`

### 1.5 Exercices Pratiques - Niveau 1

#### Exercice 1 : Création d'un Objet Livre
Créez un objet \`livre\` avec les propriétés suivantes :
- \`titre\` : "Le Petit Prince"
- \`auteur\` : "Antoine de Saint-Exupéry"
- \`pages\` : 96

Affichez le titre dans la console.

<details>
<summary>💡 Solution</summary>

\`\`\`javascript
const livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

console.log(livre.titre); // Affiche : "Le Petit Prince"
\`\`\`
</details>

#### Exercice 2 : Modification
Modifiez le nombre de pages de votre objet \`livre\` à 120.

<details>
<summary>💡 Solution</summary>

\`\`\`javascript
livre.pages = 120;
console.log(livre.pages); // Affiche : 120
\`\`\`
</details>

#### Exercice 3 : Ajout de Propriété
Ajoutez une propriété \`genre\` avec la valeur "Conte philosophique" à votre objet \`livre\`.

<details>
<summary>💡 Solution</summary>

\`\`\`javascript
livre.genre = "Conte philosophique";
console.log(livre);
\`\`\`
</details>

---

## Séance 2 : Concepts Avancés

### 2.1 Notation par Crochets (Bracket Notation)
La notation par point ne fonctionne pas dans tous les cas. Utilisez la **notation par crochets** \`[]\` quand :
- La clé contient des espaces ou caractères spéciaux
- Vous utilisez une variable pour accéder à la propriété
- La clé est un nombre

#### 📌 Cas d'Utilisation

\`\`\`javascript
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
\`\`\`

#### 🔄 Accès Dynamique avec Variables

\`\`\`javascript
const propriete = "age";
console.log(utilisateur[propriete]); // Affiche : 65

// Utilisation pratique dans une boucle
const cles = ["id", "nom complet", "age"];
for (let i = 0; i < cles.length; i++) {
    console.log(cles[i] + " : " + utilisateur[cles[i]]);
}
\`\`\`

#### 📊 Comparaison des Notations

| Situation | Notation Point | Notation Crochets |
|-----------|----------------|-------------------|
| Clé simple | ✅ \`obj.nom\` | ✅ \`obj["nom"]\` |
| Clé avec espace | ❌ | ✅ \`obj["nom complet"]\` |
| Clé dynamique | ❌ | ✅ \`obj[variable]\` |
| Clé numérique | ❌ | ✅ \`obj[0]\` |

### 2.2 Objets Imbriqués (Nested Objects)
Les propriétés d'un objet peuvent contenir **n'importe quel type de valeur** : primitifs, tableaux, ou même d'autres objets !

#### 🏢 Exemple : Étudiant avec Adresse

\`\`\`javascript
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
\`\`\`

#### 🔍 Accéder aux Données Imbriquées

\`\`\`javascript
// Accès à l'objet imbriqué
console.log(etudiant.adresse.ville);      // Affiche : "Lyon"
console.log(etudiant.adresse.codePostal); // Affiche : "69001"

// Accès au tableau imbriqué
console.log(etudiant.notes[0]);           // Affiche : 15 (première note)
console.log(etudiant.notes[2]);           // Affiche : 18 (troisième note)

// Modification de valeurs imbriquées
etudiant.adresse.ville = "Paris";
etudiant.notes[0] = 17;
\`\`\`

#### 🌳 Objets Profondément Imbriqués

\`\`\`javascript
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
\`\`\`

### 2.3 Méthodes d'Objets (Fonctions dans les Objets)
Une **méthode** est une propriété dont la valeur est une fonction. Les méthodes permettent aux objets d'effectuer des actions.

#### 🧮 Exemple : Calculatrice

\`\`\`javascript
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
\`\`\`

#### 🔑 Le Mot-Clé \`this\`

\`this\` fait référence à l'**objet courant** dans lequel la méthode est définie.

\`\`\`javascript
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
\`\`\`

#### ⚡ Syntaxe Moderne (ES6+)

\`\`\`javascript
const utilisateur = {
    username: "john_doe",
    email: "john@example.com",
    
    // Syntaxe courte (sans le mot 'function')
    afficherInfo() {
        return \`\${this.username} - \${this.email}\`;
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
\`\`\`

### 2.4 Itérer sur les Propriétés d'un Objet

#### 🔄 Boucle \`for...in\`

\`\`\`javascript
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
\`\`\`

#### 🛠️ Méthodes Utiles

\`\`\`javascript
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
\`\`\`

---

## Exercices Pratiques

### 🎯 Exercices - Niveau 2 (Intermédiaire)

#### Exercice 4 : Restaurant Complet
Créez un objet \`restaurant\` avec :
- \`nom\` : "Le Gourmet"
- Un objet \`adresse\` contenant :
  - \`rue\` : "45 Avenue des Champs"
  - \`ville\` : "Paris"
  - \`codePostal\` : "75008"
- Un tableau \`plats\` contenant : ["Pizza", "Pasta", "Salade", "Steak"]

Affichez :
1. Le nom de la rue
2. Le deuxième plat du menu
3. Le nombre total de plats

<details>
<summary>💡 Solution</summary>

\`\`\`javascript
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
\`\`\`
</details>

#### Exercice 5 : Méthode de Salutation
Reprenez l'objet \`personne\` et ajoutez-lui une méthode \`saluer()\` qui retourne :
"Bonjour, je m'appelle [Prénom] [Nom]"

<details>
<summary>💡 Solution</summary>

\`\`\`javascript
const personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30,
    
    saluer: function() {
        return "Bonjour, je m'appelle " + this.prenom + " " + this.nom;
    }
};

console.log(personne.saluer()); // "Bonjour, je m'appelle Jean Dupont"
\`\`\`
</details>

#### Exercice 6 : Gestion de Compte Bancaire
Créez un objet \`compteBancaire\` avec :
- \`titulaire\` : votre nom
- \`solde\` : 1000
- Méthode \`deposer(montant)\` : ajoute le montant au solde
- Méthode \`retirer(montant)\` : retire le montant du solde
- Méthode \`afficherSolde()\` : affiche le solde actuel

<details>
<summary>💡 Solution</summary>

\`\`\`javascript
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
\`\`\`
</details>

### 🚀 Exercices - Niveau 3 (Avancé)

#### Exercice 7 : Bibliothèque de Livres
Créez un objet \`bibliotheque\` qui contient :
- \`nom\` : "Bibliothèque Municipale"
- \`livres\` : un tableau d'objets livre, chaque livre ayant :
  - \`titre\`
  - \`auteur\`
  - \`annee\`
  - \`disponible\` (booléen)
- Méthode \`rechercherParAuteur(nomAuteur)\` : retourne tous les livres de cet auteur
- Méthode \`emprunter(titre)\` : change \`disponible\` à \`false\` pour ce livre
- Méthode \`livresDisponibles()\` : retourne le nombre de livres disponibles

<details>
<summary>💡 Solution</summary>

\`\`\`javascript
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
\`\`\`
</details>

#### Exercice 8 : Panier d'Achat E-commerce
Créez un objet \`panier\` avec :
- \`articles\` : tableau d'objets avec \`nom\`, \`prix\`, \`quantite\`
- Méthode \`ajouterArticle(nom, prix, quantite)\`
- Méthode \`retirerArticle(nom)\`
- Méthode \`calculerTotal()\` : retourne le prix total
- Méthode \`appliquerReduction(pourcentage)\` : applique une réduction sur le total

<details>
<summary>💡 Solution</summary>

\`\`\`javascript
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
\`\`\`
</details>

---

## Projet Final

### 🎮 Créer un Système de Gestion d'Étudiants

**Objectif :** Créer un objet \`ecole\` qui gère des étudiants et leurs notes.

**Fonctionnalités requises :**

1. **Structure de l'école :**
   - Nom de l'école
   - Tableau d'étudiants (objets)

2. **Chaque étudiant doit avoir :**
   - \`id\` (numéro unique)
   - \`nom\` et \`prenom\`
   - \`notes\` (tableau de nombres)
   - \`classe\` (ex: "3ème A")

3. **Méthodes de l'école :**
   - \`ajouterEtudiant(id, nom, prenom, classe)\`
   - \`ajouterNote(idEtudiant, note)\`
   - \`calculerMoyenne(idEtudiant)\`
   - \`listerEtudiants()\`
   - \`meilleurEtudiant()\` : retourne l'étudiant avec la meilleure moyenne

<details>
<summary>💡 Solution Complète</summary>

\`\`\`javascript
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
        }).join("\\n");
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

console.log("\\n--- Liste des étudiants ---");
console.log(ecole.listerEtudiants());

console.log("\\n--- Moyennes ---");
console.log("Sophie : " + ecole.calculerMoyenne(1));
console.log("Lucas : " + ecole.calculerMoyenne(2));
console.log("Emma : " + ecole.calculerMoyenne(3));

console.log("\\n--- Meilleur étudiant ---");
console.log(ecole.meilleurEtudiant());
\`\`\`
</details>

---

## Ressources Supplémentaires

### 📚 Concepts Avancés à Explorer

1. **Destructuration d'objets**
   \`\`\`javascript
   const { nom, age } = personne;
   \`\`\`

2. **Spread operator**
   \`\`\`javascript
   const copie = { ...personne };
   \`\`\`

3. **Object.assign()**
   \`\`\`javascript
   const fusion = Object.assign({}, obj1, obj2);
   \`\`\`

4. **JSON (JavaScript Object Notation)**
   \`\`\`javascript
   const json = JSON.stringify(objet);
   const objet = JSON.parse(json);
   \`\`\`

5. **Classes ES6** (évolution des objets)
   \`\`\`javascript
   class Personne {
       constructor(nom, age) {
           this.nom = nom;
           this.age = age;
       }
   }
   \`\`\`

### 🔗 Liens Utiles

- [MDN - Objets JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript.info - Objects](https://javascript.info/object)
- [W3Schools - JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

### ✅ Checklist de Compétences

À la fin de ce cours, vous devriez être capable de :

- ✅ Créer des objets avec la syntaxe littérale \`{}\`
- ✅ Accéder aux propriétés avec \`.\` et \`[]\`
- ✅ Modifier et ajouter des propriétés
- ✅ Supprimer des propriétés avec \`delete\`
- ✅ Créer et utiliser des objets imbriqués
- ✅ Définir et appeler des méthodes
- ✅ Utiliser \`this\` dans les méthodes
- ✅ Itérer sur les propriétés avec \`for...in\`
- ✅ Utiliser \`Object.keys()\`, \`Object.values()\`, \`Object.entries()\`

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


`,

    arrow: `
# 🏹 Guide Complet des Fonctions Fléchées (Arrow Functions) en JavaScript

## 🎯 Introduction

Les fonctions fléchées (arrow functions) sont une syntaxe moderne introduite dans ES6 (2015) qui offre une façon plus concise d'écrire des fonctions en JavaScript. Elles sont devenues un élément essentiel du JavaScript moderne grâce à leur syntaxe claire et leurs comportements spécifiques.

## 📋 Définition et Syntaxe

### Qu'est-ce qu'une fonction fléchée ?

Une fonction fléchée est une expression de fonction alternative avec une syntaxe plus courte utilisant la notation \`=>\` (d'où le nom "arrow" - flèche). Elle offre une syntaxe plus concise et un comportement différent du mot-clé \`this\` par rapport aux fonctions traditionnelles.

### 🔧 Syntaxes possibles

\`\`\`javascript
// 1. Syntaxe de base
const saluer = () => {
    return "Bonjour !";
};

// 2. Avec un paramètre (parenthèses optionnelles)
const doubler = x => x * 2;
const tripler = (x) => x * 3;

// 3. Avec plusieurs paramètres
const additionner = (a, b) => a + b;

// 4. Retour implicite (sans accolades)
const carre = x => x * x;

// 5. Retour explicite (avec accolades)
const calculerAire = (longueur, largeur) => {
    const aire = longueur * largeur;
    return aire;
};

// 6. Retourner un objet (parenthèses nécessaires)
const creerPersonne = (nom, age) => ({nom, age});

// 7. Fonction fléchée sans paramètres
const obtenirTimestamp = () => Date.now();
\`\`\`

## 🆚 Comparaison avec les Fonctions Traditionnelles

### Syntaxe côte à côte

\`\`\`javascript
// ❌ Fonction traditionnelle
function multiplier(a, b) {
    return a * b;
}

// ✅ Fonction fléchée
const multiplier = (a, b) => a * b;

// ❌ Fonction anonyme traditionnelle
const nombres = [1, 2, 3, 4, 5];
const carres = nombres.map(function(n) {
    return n * n;
});

// ✅ Fonction fléchée
const carres = nombres.map(n => n * n);

// 📊 Exemple pratique: traitement de données
const produits = [
    {nom: 'Laptop', prix: 1000, categorie: 'Tech'},
    {nom: 'Livre', prix: 20, categorie: 'Culture'},
    {nom: 'Casque', prix: 150, categorie: 'Tech'}
];

// Fonction traditionnelle
const produitsTech = produits.filter(function(produit) {
    return produit.categorie === 'Tech';
});

// Fonction fléchée (plus concise)
const produitsTech = produits.filter(produit => produit.categorie === 'Tech');
\`\`\`

## 🎯 Avantages des Fonctions Fléchées

### 1. 📝 Syntaxe Plus Concise

\`\`\`javascript
// 🎮 Exemple: système de scoring de jeu
const joueurs = [
    {nom: 'Alice', score: 1500, niveau: 25},
    {nom: 'Bob', score: 2000, niveau: 30},
    {nom: 'Charlie', score: 1200, niveau: 20}
];

// ❌ Avec fonctions traditionnelles (verbeux)
const classement = joueurs
    .filter(function(joueur) {
        return joueur.score > 1300;
    })
    .sort(function(a, b) {
        return b.score - a.score;
    })
    .map(function(joueur) {
        return joueur.nom + ': ' + joueur.score + ' pts';
    });

// ✅ Avec fonctions fléchées (concis)
const classement = joueurs
    .filter(joueur => joueur.score > 1300)
    .sort((a, b) => b.score - a.score)
    .map(joueur => \`\${joueur.nom}: \${joueur.score} pts\`);

console.log(classement); // ['Bob: 2000 pts', 'Alice: 1500 pts']
\`\`\`

### 2. 🎯 Liaison Lexicale du \`this\`

\`\`\`javascript
// 🏢 Exemple: gestion d'entreprise
class Entreprise {
    constructor(nom) {
        this.nom = nom;
        this.employes = [];
    }
    
    // ❌ Problème avec fonction traditionnelle
    ajouterEmployeTraditionnelle(employe) {
        setTimeout(function() {
            // 'this' ne fait pas référence à l'entreprise ici !
            console.log(\`\${employe} rejoint \${this.nom}\`); // undefined
        }, 1000);
    }
    
    // ✅ Solution avec fonction fléchée
    ajouterEmploye(employe) {
        this.employes.push(employe);
        setTimeout(() => {
            // 'this' fait référence à l'entreprise
            console.log(\`\${employe} rejoint \${this.nom} ✅\`);
        }, 1000);
    }
    
    // 📊 Méthode avec traitement de données
    obtenirStatistiques() {
        return {
            nom: this.nom,
            nombreEmployes: this.employes.length,
            employesActifs: this.employes.filter(emp => emp.actif),
            salaireMoyen: this.employes.reduce((sum, emp) => sum + emp.salaire, 0) / this.employes.length
        };
    }
}

const monEntreprise = new Entreprise("TechCorp");
monEntreprise.ajouterEmploye("Alice");
\`\`\`

### 3. 🚫 Pas de Binding de \`arguments\`

\`\`\`javascript
// 📞 Exemple: système de logging
class Logger {
    constructor(niveau = 'info') {
        this.niveau = niveau;
    }
    
    // ❌ Fonction traditionnelle avec arguments
    logTraditionnelle() {
        // 'arguments' est disponible mais pas recommandé
        console.log(arguments); // Objet arguments
    }
    
    // ✅ Fonction fléchée avec rest parameters
    log = (...messages) => {
        const timestamp = new Date().toISOString();
        const messageComplet = \`[\${timestamp}] [\${this.niveau.toUpperCase()}] \${messages.join(' ')}\`;
        console.log(messageComplet);
    }
    
    // 🎯 Méthodes spécialisées
    info = (...messages) => this.log('INFO:', ...messages);
    error = (...messages) => this.log('ERROR:', ...messages);
    warn = (...messages) => this.log('WARN:', ...messages);
}

const logger = new Logger();
logger.info('Application', 'démarrée', 'avec', 'succès');
// [2024-01-15T10:30:00.000Z] [INFO] INFO: Application démarrée avec succès
\`\`\`

## 🛠️ Cas d'Usage Pratiques

### 1. 🔄 Traitement de Tableaux

\`\`\`javascript
// 📊 Exemple: analyse de données de vente
const ventes = [
    {produit: 'Laptop', prix: 1200, quantite: 2, date: '2024-01-15'},
    {produit: 'Souris', prix: 25, quantite: 10, date: '2024-01-16'},
    {produit: 'Clavier', prix: 80, quantite: 5, date: '2024-01-17'},
    {produit: 'Écran', prix: 300, quantite: 3, date: '2024-01-18'}
];

// Calcul du chiffre d'affaires
const chiffreAffaires = ventes
    .map(vente => vente.prix * vente.quantite)
    .reduce((total, montant) => total + montant, 0);

// Produits premium (> 100€)
const produitsPremium = ventes
    .filter(vente => vente.prix > 100)
    .map(vente => ({
        ...vente,
        categorie: 'Premium',
        montantTotal: vente.prix * vente.quantite
    }));

// Top 3 des ventes par montant
const topVentes = ventes
    .map(vente => ({...vente, montant: vente.prix * vente.quantite}))
    .sort((a, b) => b.montant - a.montant)
    .slice(0, 3)
    .map(vente => \`\${vente.produit}: \${vente.montant}€\`);

console.log('💰 Chiffre d\\'affaires:', chiffreAffaires + '€');
console.log('🏆 Top ventes:', topVentes);
\`\`\`

### 2. 🎭 Gestion d'Événements

\`\`\`javascript
// 🎮 Exemple: interface de jeu
class InterfaceJeu {
    constructor() {
        this.score = 0;
        this.niveau = 1;
        this.vies = 3;
        this.initEventListeners();
    }
    
    initEventListeners() {
        // ✅ Fonctions fléchées conservent le contexte 'this'
        document.getElementById('btn-start')?.addEventListener('click', () => {
            this.demarrerJeu();
        });
        
        document.getElementById('btn-pause')?.addEventListener('click', () => {
            this.pauserJeu();
        });
        
        // 🎯 Gestion du clavier
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'ArrowUp':
                    this.deplacerJoueur('haut');
                    break;
                case 'ArrowDown':
                    this.deplacerJoueur('bas');
                    break;
                case ' ':
                    this.tirer();
                    break;
            }
        });
    }
    
    demarrerJeu = () => {
        console.log(\`🎮 Jeu démarré - Niveau \${this.niveau}\`);
        this.mettreAJourAffichage();
    }
    
    ajouterPoints = (points) => {
        this.score += points;
        if (this.score % 1000 === 0) {
            this.niveau++;
            console.log(\`🆙 Niveau \${this.niveau} atteint !\`);
        }
        this.mettreAJourAffichage();
    }
    
    mettreAJourAffichage = () => {
        document.getElementById('score').textContent = this.score;
        document.getElementById('niveau').textContent = this.niveau;
        document.getElementById('vies').textContent = this.vies;
    }
}
\`\`\`

### 3. 🌐 Requêtes Asynchrones

\`\`\`javascript
// 🌐 Exemple: client API
class ClientAPI {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.token = null;
    }
    
    // 🔐 Authentification
    authentifier = async (email, motDePasse) => {
        try {
            const response = await fetch(\`\${this.baseURL}/auth/login\`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, motDePasse})
            });
            
            const data = await response.json();
            this.token = data.token;
            return {success: true, message: '✅ Connexion réussie'};
        } catch (error) {
            return {success: false, message: '❌ Erreur de connexion'};
        }
    }
    
    // 📊 Récupération de données
    obtenirDonnees = async (endpoint) => {
        const headers = {
            'Content-Type': 'application/json',
            ...(this.token && {'Authorization': \`Bearer \${this.token}\`})
        };
        
        try {
            const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {headers});
            return await response.json();
        } catch (error) {
            console.error('Erreur API:', error);
            throw error;
        }
    }
    
    // 📝 Traitement en lot
    traiterUtilisateurs = async () => {
        const utilisateurs = await this.obtenirDonnees('/users');
        
        return utilisateurs
            .filter(user => user.actif)
            .map(user => ({
                ...user,
                nomComplet: \`\${user.prenom} \${user.nom}\`,
                age: this.calculerAge(user.dateNaissance)
            }))
            .sort((a, b) => a.nomComplet.localeCompare(b.nomComplet));
    }
    
    calculerAge = (dateNaissance) => {
        const aujourd = new Date();
        const naissance = new Date(dateNaissance);
        return aujourd.getFullYear() - naissance.getFullYear();
    }
}

// Utilisation
const api = new ClientAPI('https://api.example.com');
api.authentifier('user@example.com', 'password')
   .then(result => console.log(result.message));
\`\`\`

### 4. 🔄 Programmation Fonctionnelle

\`\`\`javascript
// 🧮 Exemple: calculatrice fonctionnelle
const Calculatrice = {
    // Opérations de base
    additionner: (a, b) => a + b,
    soustraire: (a, b) => a - b,
    multiplier: (a, b) => a * b,
    diviser: (a, b) => b !== 0 ? a / b : null,
    
    // Fonctions d'ordre supérieur
    appliquerOperation: (operation) => (a, b) => operation(a, b),
    
    // Composition de fonctions
    composer: (...fonctions) => (valeur) => 
        fonctions.reduceRight((acc, fn) => fn(acc), valeur),
    
    // Curry (transformation en fonctions partielles)
    curry: (fn) => (...args) => 
        args.length >= fn.length 
            ? fn(...args) 
            : (...nouveauxArgs) => Calculatrice.curry(fn)(...args, ...nouveauxArgs),
    
    // 📊 Opérations sur tableaux
    calculerStatistiques: (nombres) => ({
        somme: nombres.reduce((acc, n) => acc + n, 0),
        moyenne: nombres.reduce((acc, n) => acc + n, 0) / nombres.length,
        min: Math.min(...nombres),
        max: Math.max(...nombres),
        mediane: (() => {
            const tries = [...nombres].sort((a, b) => a - b);
            const milieu = Math.floor(tries.length / 2);
            return tries.length % 2 === 0 
                ? (tries[milieu - 1] + tries[milieu]) / 2 
                : tries[milieu];
        })()
    })
};

// Utilisation avancée
const additionCurry = Calculatrice.curry(Calculatrice.additionner);
const ajouter10 = additionCurry(10);
console.log(ajouter10(5)); // 15

const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Calculatrice.calculerStatistiques(nombres));
\`\`\`

## ⚠️ Limitations et Précautions

### 1. 🚫 Pas de Hoisting

\`\`\`javascript
// ❌ Erreur: Cannot access before initialization
console.log(maFonction()); // ReferenceError

const maFonction = () => "Hello";

// ✅ Fonctionne avec function
console.log(autreFonction()); // "Hello"

function autreFonction() {
    return "Hello";
}
\`\`\`

### 2. 🚫 Pas de \`this\` Propre

\`\`\`javascript
// ❌ Problème avec les méthodes d'objet
const objet = {
    nom: 'MonObjet',
    
    // ❌ Ne fonctionne pas comme attendu
    methodeFlèche: () => {
        console.log(this.nom); // undefined (this = window/global)
    },
    
    // ✅ Fonctionne correctement
    methodeTraditionnelle() {
        console.log(this.nom); // "MonObjet"
    }
};
\`\`\`

### 3. 🚫 Pas de \`new\`

\`\`\`javascript
// ❌ Erreur: Arrow functions cannot be constructors
const MaClasse = () => {
    this.propriete = "valeur";
};

// const instance = new MaClasse(); // TypeError

// ✅ Utiliser function pour les constructeurs
function MaClasse() {
    this.propriete = "valeur";
}

const instance = new MaClasse(); // Fonctionne
\`\`\`

## 🎯 Bonnes Pratiques

### 1. ✅ Quand Utiliser les Fonctions Fléchées

\`\`\`javascript
// ✅ Callbacks et méthodes de tableau
const nombres = [1, 2, 3, 4, 5];
const doubles = nombres.map(n => n * 2);

// ✅ Gestionnaires d'événements dans les classes
class Composant {
    handleClick = (event) => {
        // 'this' fait référence à l'instance de Composant
        this.traiterClic(event);
    }
}

// ✅ Fonctions utilitaires courtes
const estPair = n => n % 2 === 0;
const formaterPrix = prix => \`\${prix.toFixed(2)}€\`;

// ✅ Promesses et async/await
const chargerDonnees = async () => {
    const response = await fetch('/api/data');
    return response.json();
};
\`\`\`

### 2. ❌ Quand Éviter les Fonctions Fléchées

\`\`\`javascript
// ❌ Méthodes d'objet (utiliser function)
const utilisateur = {
    nom: 'Alice',
    saluer() { // ✅ Pas saluer: () =>
        return \`Bonjour, je suis \${this.nom}\`;
    }
};

// ❌ Constructeurs (utiliser function)
function Personne(nom) { // ✅ Pas const Personne = (nom) =>
    this.nom = nom;
}

// ❌ Méthodes nécessitant 'arguments'
function somme() { // ✅ Pas const somme = () =>
    return Array.from(arguments).reduce((a, b) => a + b, 0);
}
\`\`\`

## 🎯 Exercices Pratiques

### 🏋️ Exercice 1: Convertisseur de Fonctions

\`\`\`javascript
/**
 * 🔄 Convertissez ces fonctions traditionnelles en fonctions fléchées
 */

// À convertir:
function calculerTVA(prixHT, taux) {
    return prixHT * (1 + taux);
}

function filtrerProduits(produits, critere) {
    return produits.filter(function(produit) {
        return produit.prix < critere.prixMax && produit.stock > 0;
    });
}

function creerUtilisateur(nom, email, age) {
    return {
        nom: nom,
        email: email,
        age: age,
        dateCreation: new Date()
    };
}

// Votre solution ici...
\`\`\`

### 🏋️ Exercice 2: Pipeline de Données

\`\`\`javascript
/**
 * 📊 Créez un pipeline de traitement de données avec des fonctions fléchées
 */

const commandes = [
    {id: 1, client: 'Alice', montant: 150, statut: 'livree', date: '2024-01-15'},
    {id: 2, client: 'Bob', montant: 75, statut: 'en_cours', date: '2024-01-16'},
    {id: 3, client: 'Charlie', montant: 200, statut: 'livree', date: '2024-01-17'},
    {id: 4, client: 'Alice', montant: 300, statut: 'annulee', date: '2024-01-18'}
];

// Créez un pipeline qui:
// 1. Filtre les commandes livrées
// 2. Groupe par client
// 3. Calcule le total par client
// 4. Trie par montant décroissant

// Votre solution ici...
\`\`\`

### 🏋️ Exercice 3: Gestionnaire d'État Réactif

\`\`\`javascript
/**
 * 🔄 Créez un gestionnaire d'état simple avec des fonctions fléchées
 */

class GestionnaireEtat {
    constructor(etatInitial = {}) {
        this.etat = etatInitial;
        this.observateurs = [];
    }
    
    // Implémentez ces méthodes avec des fonctions fléchées:
    // - souscrire(callback)
    // - mettreAJour(nouvelEtat)
    // - obtenirEtat()
    // - notifierObservateurs()
    
    // Votre code ici...
}

// Test:
const gestionnaire = new GestionnaireEtat({compteur: 0});
gestionnaire.souscrire(etat => console.log('État:', etat));
gestionnaire.mettreAJour({compteur: 1});
\`\`\`

## 🎯 Solutions des Exercices

<details>
<summary>💡 Cliquez pour voir les solutions</summary>

### Solution Exercice 1:
\`\`\`javascript
// Conversions en fonctions fléchées
const calculerTVA = (prixHT, taux) => prixHT * (1 + taux);

const filtrerProduits = (produits, critere) => 
    produits.filter(produit => produit.prix < critere.prixMax && produit.stock > 0);

const creerUtilisateur = (nom, email, age) => ({
    nom,
    email,
    age,
    dateCreation: new Date()
});
\`\`\`

### Solution Exercice 2:
\`\`\`javascript
const analyserCommandes = (commandes) => 
    commandes
        .filter(cmd => cmd.statut === 'livree')
        .reduce((acc, cmd) => {
            acc[cmd.client] = (acc[cmd.client] || 0) + cmd.montant;
            return acc;
        }, {})
        |> (totaux => Object.entries(totaux))
        |> (entries => entries.map(([client, total]) => ({client, total})))
        |> (resultats => resultats.sort((a, b) => b.total - a.total));

// Ou version plus lisible:
const pipeline = (commandes) => {
    const commandesLivrees = commandes.filter(cmd => cmd.statut === 'livree');
    
    const totauxParClient = commandesLivrees.reduce((acc, cmd) => {
        acc[cmd.client] = (acc[cmd.client] || 0) + cmd.montant;
        return acc;
    }, {});
    
    return Object.entries(totauxParClient)
        .map(([client, total]) => ({client, total}))
        .sort((a, b) => b.total - a.total);
};
\`\`\`

### Solution Exercice 3:
\`\`\`javascript
class GestionnaireEtat {
    constructor(etatInitial = {}) {
        this.etat = etatInitial;
        this.observateurs = [];
    }
    
    souscrire = (callback) => {
        this.observateurs.push(callback);
        return () => {
            const index = this.observateurs.indexOf(callback);
            if (index > -1) this.observateurs.splice(index, 1);
        };
    }
    
    mettreAJour = (nouvelEtat) => {
        this.etat = {...this.etat, ...nouvelEtat};
        this.notifierObservateurs();
    }
    
    obtenirEtat = () => ({...this.etat})
    
    notifierObservateurs = () => {
        this.observateurs.forEach(callback => callback(this.obtenirEtat()));
    }
}
\`\`\`

</details>

## 🎉 Conclusion

Les fonctions fléchées sont un ajout puissant au JavaScript moderne qui offrent une syntaxe plus concise et un comportement prévisible du \`this\`. Elles sont particulièrement utiles pour:

- 📊 Le traitement de données avec \`map\`, \`filter\`, \`reduce\`
- 🎭 La gestion d'événements dans les classes
- 🔄 La programmation fonctionnelle
- 🌐 Les opérations asynchrones

Cependant, il est important de comprendre leurs limitations et de les utiliser de manière appropriée selon le contexte.

### 📚 Ressources Supplémentaires

- [MDN Web Docs - Arrow Functions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [JavaScript.info - Arrow Functions](https://javascript.info/arrow-functions-basics)

---

*🏹 Guide créé pour maîtriser les fonctions fléchées en JavaScript - Codez avec style ! 🚀*
`,

};

// Exporter le contenu pour l'utiliser dans l'application
window.courseContent = courseContent;
