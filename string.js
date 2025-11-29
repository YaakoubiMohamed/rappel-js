// ============================================
// 📚 GUIDE COMPLET DES STRINGS EN JAVASCRIPT
// ============================================

/* 
 * Les strings (chaînes de caractères) sont l'un des types de données
 * les plus utilisés en JavaScript. Ce fichier contient des exemples
 * pratiques et des exercices pour maîtriser la manipulation de strings.
 */

// ============================================
// 1️⃣ CRÉATION ET CONCATÉNATION DE STRINGS
// ============================================

// Déclaration de strings basiques
let ch = "bonjour";
let ch2 = "tout le monde";
let ch3 = 'JavaScript'; // Simple ou double quotes fonctionnent

// Concaténation avec l'opérateur +
console.log("\n--- CONCATÉNATION ---");
console.log(ch + " " + ch2); // Affiche: "bonjour tout le monde"

// Template literals (backticks) - méthode moderne et préférée
let message = `${ch} ${ch2}!`; // Affiche: "bonjour tout le monde!"
console.log(message);

// Méthode concat() - alternative à l'opérateur +
let resultat = ch.concat(" ", ch2, " en ", ch3);
console.log(resultat); // Affiche: "bonjour tout le monde en JavaScript"


// ============================================
// 2️⃣ PROPRIÉTÉS ET MÉTHODES DE BASE
// ============================================

console.log("\n--- PROPRIÉTÉS DE BASE ---");

// length - retourne la longueur de la chaîne
console.log("Longueur de 'bonjour':", ch.length); // Affiche: 7

// Accès aux caractères individuels (comme un tableau)
console.log("Premier caractère:", ch[0]); // Affiche: "b"
console.log("Dernier caractère:", ch[ch.length - 1]); // Affiche: "r"


// ============================================
// 3️⃣ RECHERCHE DANS LES STRINGS
// ============================================

console.log("\n--- RECHERCHE DE CARACTÈRES ---");

let phrase = "JavaScript est un langage JavaScript moderne";

// indexOf() - trouve la PREMIÈRE occurrence
console.log("Première position de 'Java':", phrase.indexOf("Java")); // Affiche: 0

// lastIndexOf() - trouve la DERNIÈRE occurrence
console.log("Dernière position de 'Java':", phrase.lastIndexOf("Java")); // Affiche: 27

// includes() - vérifie si une sous-chaîne existe
console.log("Contient 'langage'?", phrase.includes("langage")); // Affiche: true

// startsWith() - vérifie si commence par...
console.log("Commence par 'Java'?", phrase.startsWith("Java")); // Affiche: true

// endsWith() - vérifie si se termine par...
console.log("Se termine par 'moderne'?", phrase.endsWith("moderne")); // Affiche: true


// ============================================
// 4️⃣ EXTRACTION DE SOUS-CHAÎNES
// ============================================

console.log("\n--- EXTRACTION DE SOUS-CHAÎNES ---");

let texte = "JavaScript Programming";

// slice(début, fin) - extrait une portion (fin non incluse)
console.log("slice(0, 10):", texte.slice(0, 10)); // Affiche: "JavaScript"
console.log("slice(11):", texte.slice(11)); // Affiche: "Programming"
console.log("slice(-11):", texte.slice(-11)); // Affiche: "Programming" (compte depuis la fin)

// substring(début, fin) - similaire à slice mais ne supporte pas les indices négatifs
console.log("substring(0, 10):", texte.substring(0, 10)); // Affiche: "JavaScript"

// substr(début, longueur) - DÉPRÉCIÉ mais encore utilisé
console.log("substr(0, 10):", texte.substr(0, 10)); // Affiche: "JavaScript"


// ============================================
// 5️⃣ TRANSFORMATION DE STRINGS
// ============================================

console.log("\n--- TRANSFORMATION ---");

let original = "  Bonjour Le Monde  ";

// toLowerCase() - convertit en minuscules
console.log("Minuscules:", original.toLowerCase()); // Affiche: "  bonjour le monde  "

// toUpperCase() - convertit en MAJUSCULES
console.log("MAJUSCULES:", original.toUpperCase()); // Affiche: "  BONJOUR LE MONDE  "

// trim() - supprime les espaces aux extrémités
console.log("Trim:", original.trim()); // Affiche: "Bonjour Le Monde"

// trimStart() / trimEnd() - supprime les espaces au début ou à la fin uniquement
console.log("TrimStart:", original.trimStart()); // Affiche: "Bonjour Le Monde  "

// replace() - remplace la PREMIÈRE occurrence
let texte2 = "chat chat chien";
console.log("Replace 'chat':", texte2.replace("chat", "oiseau")); // Affiche: "oiseau chat chien"

// replaceAll() - remplace TOUTES les occurrences
console.log("ReplaceAll 'chat':", texte2.replaceAll("chat", "oiseau")); // Affiche: "oiseau oiseau chien"

// split() - divise une string en tableau
let mots = "pomme,banane,orange".split(",");
console.log("Split par ',':", mots); // Affiche: ["pomme", "banane", "orange"]


// ============================================
// 6️⃣ MÉTHODES AVANCÉES
// ============================================

console.log("\n--- MÉTHODES AVANCÉES ---");

// repeat() - répète une string n fois
console.log("Répéter 'Ha' 3 fois:", "Ha".repeat(3)); // Affiche: "HaHaHa"

// padStart() - ajoute du padding au début
console.log("PadStart '5':", "5".padStart(3, "0")); // Affiche: "005"

// padEnd() - ajoute du padding à la fin
console.log("PadEnd '5':", "5".padEnd(3, "0")); // Affiche: "500"

// charAt() - retourne le caractère à une position
console.log("Caractère à l'index 1 de 'Hello':", "Hello".charAt(1)); // Affiche: "e"

// charCodeAt() - retourne le code Unicode du caractère
console.log("Code Unicode de 'A':", "A".charCodeAt(0)); // Affiche: 65


// ============================================
// 7️⃣ EXERCICE PRATIQUE: VÉRIFIER UN PALINDROME
// ============================================

console.log("\n--- EXERCICE: PALINDROME ---");

/*
 * Un palindrome est un mot qui se lit de la même façon
 * dans les deux sens (ex: radar, kayak, level)
 */

let palindrome = "radar";
let debut = 0; // Index du premier caractère
let fin = palindrome.length - 1; // Index du dernier caractère
let estPalindrome = true;

// Comparer les caractères depuis les extrémités vers le centre
while (debut < fin) {
    if (palindrome[debut] !== palindrome[fin]) {
        estPalindrome = false;
        console.log(`❌ "${palindrome}" n'est PAS un palindrome`);
        break;
    }
    debut++; // Avancer vers la droite
    fin--;   // Reculer vers la gauche
}

if (estPalindrome) {
    console.log(`✅ "${palindrome}" est un palindrome!`);
}


// ============================================
// 8️⃣ EXERCICES SUPPLÉMENTAIRES
// ============================================

console.log("\n--- EXERCICES PRATIQUES ---");

// EXERCICE 1: Inverser une chaîne
console.log("\n📝 Exercice 1: Inverser une chaîne");
function inverserChaine(str) {
    // Méthode 1: Avec split, reverse, join
    return str.split("").reverse().join("");
}
console.log("Inverse de 'hello':", inverserChaine("hello")); // Affiche: "olleh"

// EXERCICE 2: Compter les voyelles
console.log("\n📝 Exercice 2: Compter les voyelles");
function compterVoyelles(str) {
    const voyelles = "aeiouAEIOU";
    let compte = 0;
    
    for (let char of str) {
        if (voyelles.includes(char)) {
            compte++;
        }
    }
    return compte;
}
console.log("Voyelles dans 'bonjour':", compterVoyelles("bonjour")); // Affiche: 3

// EXERCICE 3: Capitaliser la première lettre de chaque mot
console.log("\n📝 Exercice 3: Capitaliser chaque mot");
function capitaliserMots(phrase) {
    return phrase
        .split(" ")
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase())
        .join(" ");
}
console.log("Capitalisé:", capitaliserMots("bonjour tout le monde")); 
// Affiche: "Bonjour Tout Le Monde"

// EXERCICE 4: Vérifier si c'est un anagramme
console.log("\n📝 Exercice 4: Vérifier les anagrammes");
function estAnagramme(str1, str2) {
    // Nettoyer et trier les caractères
    const nettoyer = str => str.toLowerCase().replace(/\s/g, "").split("").sort().join("");
    return nettoyer(str1) === nettoyer(str2);
}
console.log("'listen' et 'silent' sont anagrammes?", estAnagramme("listen", "silent")); 
// Affiche: true

// EXERCICE 5: Extraire les initiales
console.log("\n📝 Exercice 5: Extraire les initiales");
function extraireInitiales(nom) {
    return nom
        .split(" ")
        .map(mot => mot[0].toUpperCase())
        .join(".");
}
console.log("Initiales de 'Jean Paul Sartre':", extraireInitiales("Jean Paul Sartre")); 
// Affiche: "J.P.S"

// EXERCICE 6: Supprimer les doublons de caractères consécutifs
console.log("\n📝 Exercice 6: Supprimer les doublons consécutifs");
function supprimerDoublons(str) {
    let resultat = "";
    for (let i = 0; i < str.length; i++) {
        // Ajouter le caractère seulement s'il est différent du précédent
        if (i === 0 || str[i] !== str[i - 1]) {
            resultat += str[i];
        }
    }
    return resultat;
}
console.log("Sans doublons 'heeelllooo':", supprimerDoublons("heeelllooo")); 
// Affiche: "helo"

// EXERCICE 7: Créer un slug URL
console.log("\n📝 Exercice 7: Créer un slug URL");
function creerSlug(titre) {
    return titre
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "") // Supprimer les caractères spéciaux
        .replace(/\s+/g, "-")      // Remplacer les espaces par des tirets
        .replace(/-+/g, "-");      // Supprimer les tirets multiples
}
console.log("Slug:", creerSlug("Bonjour le Monde! Comment ça va?")); 
// Affiche: "bonjour-le-monde-comment-ca-va"

// EXERCICE 8: Trouver le mot le plus long
console.log("\n📝 Exercice 8: Trouver le mot le plus long");
function motLePlusLong(phrase) {
    const mots = phrase.split(" ");
    let plusLong = "";
    
    for (let mot of mots) {
        if (mot.length > plusLong.length) {
            plusLong = mot;
        }
    }
    return plusLong;
}
console.log("Mot le plus long:", motLePlusLong("JavaScript est un langage incroyable")); 
// Affiche: "JavaScript"

// EXERCICE 9: Masquer une partie d'un email
console.log("\n📝 Exercice 9: Masquer l'email");
function masquerEmail(email) {
    const [nom, domaine] = email.split("@");
    const nomMasque = nom[0] + "*".repeat(nom.length - 2) + nom[nom.length - 1];
    return nomMasque + "@" + domaine;
}
console.log("Email masqué:", masquerEmail("john.doe@example.com")); 
// Affiche: "j******e@example.com"

// EXERCICE 10: Compter les occurrences d'un mot
console.log("\n📝 Exercice 10: Compter les occurrences");
function compterOccurrences(texte, mot) {
    // Créer une regex pour trouver toutes les occurrences
    const regex = new RegExp(mot, "gi"); // g = global, i = insensible à la casse
    const matches = texte.match(regex);
    return matches ? matches.length : 0;
}
const texte3 = "JavaScript est génial. J'adore JavaScript!";
console.log("Occurrences de 'JavaScript':", compterOccurrences(texte3, "javascript")); 
// Affiche: 2


// ============================================
// 9️⃣ BONUS: EXPRESSIONS RÉGULIÈRES (REGEX)
// ============================================

console.log("\n--- BONUS: REGEX ---");

// Valider un format d'email
function validerEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
console.log("Email valide?", validerEmail("test@example.com")); // Affiche: true

// Extraire tous les nombres d'une chaîne
function extraireNombres(str) {
    return str.match(/\d+/g) || [];
}
console.log("Nombres extraits:", extraireNombres("J'ai 25 ans et 2 chiens")); 
// Affiche: ["25", "2"]

// Remplacer avec une regex
let texteAvecNombres = "Il y a 123 pommes et 456 oranges";
let texteRemplace = texteAvecNombres.replace(/\d+/g, "XXX");
console.log("Nombres remplacés:", texteRemplace); 
// Affiche: "Il y a XXX pommes et XXX oranges"


// ============================================
// 🎯 DÉFIS AVANCÉS
// ============================================

console.log("\n--- DÉFIS AVANCÉS ---");

// DÉFI 1: Implémenter une fonction de recherche floue
console.log("\n🏆 Défi 1: Distance de Levenshtein (similarité)");
function distanceLevenshtein(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j - 1] + 1,
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1
                );
            }
        }
    }
    return dp[m][n];
}
console.log("Distance entre 'kitten' et 'sitting':", distanceLevenshtein("kitten", "sitting")); 
// Affiche: 3

// DÉFI 2: Compression de chaîne
console.log("\n🏆 Défi 2: Compression de chaîne");
function compresserChaine(str) {
    let resultat = "";
    let compte = 1;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            compte++;
        } else {
            resultat += str[i] + (compte > 1 ? compte : "");
            compte = 1;
        }
    }
    
    return resultat.length < str.length ? resultat : str;
}
console.log("Compression de 'aaabbcccc':", compresserChaine("aaabbcccc")); 
// Affiche: "a3b2c4"


console.log("\n✅ Guide des Strings terminé! Continuez à pratiquer! 🚀");