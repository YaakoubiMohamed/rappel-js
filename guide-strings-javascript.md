# 📝 Guide Complet des Chaînes de Caractères (Strings) en JavaScript

## 🎯 Introduction

Les chaînes de caractères (strings) sont l'un des types de données les plus fondamentaux en JavaScript. Elles permettent de stocker et manipuler du texte. Ce guide vous présente tout ce que vous devez savoir sur les strings en JavaScript.

## 📋 Définition et Création

### Qu'est-ce qu'une chaîne de caractères ?

Une chaîne de caractères est une séquence de caractères utilisée pour représenter du texte. En JavaScript, les strings sont **immutables**, ce qui signifie qu'une fois créées, elles ne peuvent pas être modifiées directement.

### 🔧 Méthodes de création

```javascript
// 1. Guillemets simples
let nom = 'Alice';

// 2. Guillemets doubles
let prenom = "Bob";

// 3. Template literals (backticks)
let message = `Bonjour ${nom}!`;

// 4. Constructeur String (moins recommandé)
let texte = new String("Hello");
```

## 🛠️ Propriétés Essentielles

### 📏 length - Longueur de la chaîne

```javascript
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
```

## 🔍 Méthodes de Recherche et d'Index

### 🎯 indexOf() - Première occurrence

```javascript
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
```

### 🔄 lastIndexOf() - Dernière occurrence

```javascript
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
```

### 🔎 includes() - Vérifier la présence

```javascript
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
```

### 🎪 startsWith() et endsWith()

```javascript
let url = "https://www.example.com";

console.log(url.startsWith("https")); // true
console.log(url.endsWith(".com")); // true

// 🔒 Exemple: validation d'URL sécurisée
function estUrlSecurisee(url) {
    return url.startsWith("https://") ? "🔒 Sécurisé" : "⚠️ Non sécurisé";
}

console.log(estUrlSecurisee("https://google.com")); // 🔒 Sécurisé
console.log(estUrlSecurisee("http://example.com")); // ⚠️ Non sécurisé
```

## ✂️ Méthodes d'Extraction

### 🎯 slice() - Extraction avec indices

```javascript
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
```

### 📏 substring() - Alternative à slice

```javascript
let texte = "Développement Web";

console.log(texte.substring(0, 13)); // "Développement"
console.log(texte.substring(14)); // "Web"

// 🏷️ Exemple: créer des slugs d'URL
function creerSlug(titre) {
    return titre
        .toLowerCase()
        .substring(0, 50) // Limiter à 50 caractères
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

console.log(creerSlug("Mon Article Fantastique!")); // "mon-article-fantastique"
```

### 🔤 charAt() et charCodeAt()

```javascript
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
```

## 🔄 Méthodes de Transformation

### 🔗 concat() - Concaténation

```javascript
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
```

### 🔄 replace() et replaceAll()

```javascript
let phrase = "J'aime les chats. Les chats sont mignons.";

console.log(phrase.replace("chats", "chiens")); 
// "J'aime les chiens. Les chats sont mignons."

console.log(phrase.replaceAll("chats", "chiens")); 
// "J'aime les chiens. Les chiens sont mignons."

// 🧹 Exemple: nettoyage de texte
function nettoyerTexte(texte) {
    return texte
        .replaceAll("  ", " ") // Supprimer les espaces doubles
        .replace(/^\s+|\s+$/g, "") // Supprimer les espaces en début/fin
        .replace(/[^\w\s]/gi, ""); // Supprimer la ponctuation
}

console.log(nettoyerTexte("  Bonjour,  monde!  ")); // "Bonjour monde"
```

### 📐 Méthodes de Casse

```javascript
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
```

### ✂️ trim(), trimStart(), trimEnd()

```javascript
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
```

## 🔀 Méthodes de Division et Jointure

### ✂️ split() - Division en tableau

```javascript
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
```

### 🔄 repeat() - Répétition

```javascript
console.log("Ha".repeat(3)); // "HaHaHa"
console.log("-".repeat(20)); // "--------------------"

// 📊 Exemple: création de graphiques en barres ASCII
function creerBarreGraphique(valeur, max, largeur = 20) {
    let pourcentage = (valeur / max) * largeur;
    let barre = "█".repeat(Math.floor(pourcentage));
    let vide = "░".repeat(largeur - Math.floor(pourcentage));
    return `${barre}${vide} ${valeur}/${max}`;
}

console.log(creerBarreGraphique(75, 100)); 
// "███████████████░░░░░ 75/100"
```

### 🔤 padStart() et padEnd()

```javascript
let numero = "42";
console.log(numero.padStart(5, "0")); // "00042"
console.log(numero.padEnd(5, "*")); // "42***"

// 🕐 Exemple: formatage d'horloge
function formaterHeure(heures, minutes, secondes) {
    return `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;
}

console.log(formaterHeure(9, 5, 3)); // "09:05:03"
```

## 🎨 Template Literals (Littéraux de Gabarit)

```javascript
let nom = "Alice";
let age = 30;

// ✨ Interpolation de variables
let presentation = `Bonjour, je suis ${nom} et j'ai ${age} ans.`;

// 📝 Chaînes multi-lignes
let email = `
Cher ${nom},

Nous vous remercions pour votre inscription.
Votre compte a été créé avec succès.

Cordialement,
L'équipe
`;

// 🧮 Expressions dans les templates
let prix = 19.99;
let tva = 0.20;
let facture = `
Produit: ${prix}€
TVA (${tva * 100}%): ${(prix * tva).toFixed(2)}€
Total: ${(prix * (1 + tva)).toFixed(2)}€
`;

console.log(facture);
```

## 🎯 Exercices Pratiques

### 🏋️ Exercice 1: Validateur d'Email Avancé

```javascript
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
```

### 🏋️ Exercice 2: Générateur de Nom d'Utilisateur

```javascript
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
```

### 🏋️ Exercice 3: Analyseur de Mot de Passe

```javascript
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
```

### 🏋️ Exercice 4: Formateur de Numéro de Téléphone

```javascript
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
```

### 🏋️ Exercice 5: Détecteur de Palindrome Avancé

```javascript
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
```

## 🎯 Solutions des Exercices

<details>
<summary>💡 Cliquez pour voir les solutions</summary>

### Solution Exercice 1:
```javascript
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
```

### Solution Exercice 2:
```javascript
function genererNomUtilisateur(nomComplet) {
    let parties = nomComplet.toLowerCase().split(' ');
    let prenom = parties[0].slice(0, 3);
    let nom = parties[1].slice(0, 3);
    let nombre = Math.floor(Math.random() * 90) + 10;
    return prenom + nom + nombre;
}
```

### Solution Exercice 3:
```javascript
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
```

### Solution Exercice 4:
```javascript
function formaterTelephone(numero) {
    let chiffres = numero.replace(/[^0-9]/g, '');
    return chiffres.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
}
```

### Solution Exercice 5:
```javascript
function estPalindromeAvance(phrase) {
    let nettoye = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');
    return nettoye === nettoye.split('').reverse().join('');
}
```

</details>

## 🎉 Conclusion

Les chaînes de caractères sont un élément fondamental de JavaScript. Maîtriser leurs méthodes vous permettra de manipuler efficacement le texte dans vos applications. N'hésitez pas à pratiquer avec les exercices proposés et à expérimenter avec différentes combinaisons de méthodes !

### 📚 Ressources Supplémentaires

- [MDN Web Docs - String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JavaScript.info - Strings](https://javascript.info/string)

---

*📝 Guide créé pour l'apprentissage de JavaScript - Bonne pratique ! 🚀*