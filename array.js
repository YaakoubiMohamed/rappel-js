/*
╔════════════════════════════════════════════════════════════════╗
║              GUIDE COMPLET DES ARRAYS EN JAVASCRIPT            ║
║                    Exemples et Exercices                       ║
╚════════════════════════════════════════════════════════════════╝
*/

console.log("═══════════════════════════════════════════════════════════════");
console.log("          GUIDE COMPLET DES ARRAYS EN JAVASCRIPT");
console.log("═══════════════════════════════════════════════════════════════\n");

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 1: CRÉATION DE TABLEAUX
// ═══════════════════════════════════════════════════════════════
console.log("--- 1. CRÉATION DE TABLEAUX ---\n");

// Méthode 1: Notation avec crochets []
const nombres = [1, 2, 3, 4, 5];
console.log("Tableau de nombres:", nombres);

// Méthode 2: Constructeur Array()
const fruits = new Array("pomme", "banane", "orange");
console.log("Tableau de fruits:", fruits);

// Méthode 3: Array.of() - crée un tableau avec les arguments fournis
const mixed = Array.of(1, "deux", true, {nom: "objet"});
console.log("Tableau mixte:", mixed);

// Méthode 4: Array.from() - crée un tableau à partir d'un itérable
const lettres = Array.from("hello");
console.log("Lettres de 'hello':", lettres);

// Méthode 5: Spread operator pour copier/combiner
const tab1 = [1, 2, 3];
const tab2 = [4, 5, 6];
const combine = [...tab1, ...tab2];
console.log("Tableaux combinés:", combine);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 2: PROPRIÉTÉS ET ACCÈS
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 2. PROPRIÉTÉS ET ACCÈS ---\n");

const animaux = ["chat", "chien", "oiseau", "poisson"];

// Longueur du tableau
console.log("Longueur:", animaux.length);

// Accès par index (commence à 0)
console.log("Premier élément:", animaux[0]);
console.log("Dernier élément:", animaux[animaux.length - 1]);

// Vérifier si c'est un tableau
console.log("Est un tableau?", Array.isArray(animaux));

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 3: AJOUT ET SUPPRESSION D'ÉLÉMENTS
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 3. AJOUT ET SUPPRESSION ---\n");

let liste = [10, 20, 30];
console.log("Liste initiale:", liste);

// push() - ajoute à la fin
liste.push(40);
console.log("Après push(40):", liste);

// unshift() - ajoute au début
liste.unshift(5);
console.log("Après unshift(5):", liste);

// pop() - supprime le dernier et le retourne
const dernier = liste.pop();
console.log("Élément supprimé:", dernier, "| Liste:", liste);

// shift() - supprime le premier et le retourne
const premier = liste.shift();
console.log("Élément supprimé:", premier, "| Liste:", liste);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 4: SPLICE - AJOUT/SUPPRESSION FLEXIBLE
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 4. MÉTHODE SPLICE ---\n");

let data = [1, 2, 3, 4, 5];
console.log("Tableau initial:", data);

// Supprimer 2 éléments à partir de l'index 2
data.splice(2, 2);
console.log("Après splice(2, 2):", data);

// Ajouter des éléments à l'index 1 sans supprimer
data.splice(1, 0, 10, 20);
console.log("Après splice(1, 0, 10, 20):", data);

// Remplacer des éléments
data.splice(2, 1, 99);
console.log("Après splice(2, 1, 99):", data);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 5: RECHERCHE DANS LES TABLEAUX
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 5. RECHERCHE ---\n");

const nombres2 = [10, 20, 30, 40, 30, 50];

// indexOf() - retourne l'index de la première occurrence
console.log("Index de 30:", nombres2.indexOf(30));

// lastIndexOf() - retourne l'index de la dernière occurrence
console.log("Dernier index de 30:", nombres2.lastIndexOf(30));

// includes() - vérifie si l'élément existe
console.log("Contient 40?", nombres2.includes(40));

// find() - retourne le premier élément qui satisfait la condition
const trouve = nombres2.find(n => n > 25);
console.log("Premier nombre > 25:", trouve);

// findIndex() - retourne l'index du premier élément qui satisfait
const indexTrouve = nombres2.findIndex(n => n > 25);
console.log("Index du premier nombre > 25:", indexTrouve);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 6: EXTRACTION ET COPIE
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 6. EXTRACTION ET COPIE ---\n");

const original = [1, 2, 3, 4, 5, 6, 7, 8];

// slice() - extrait une portion (ne modifie pas l'original)
const portion = original.slice(2, 5);
console.log("Portion [2:5]:", portion);
console.log("Original intact:", original);

// Copie complète avec slice()
const copie = original.slice();
console.log("Copie complète:", copie);

// concat() - combine plusieurs tableaux
const tab3 = [1, 2];
const tab4 = [3, 4];
const tab5 = [5, 6];
const fusion = tab3.concat(tab4, tab5);
console.log("Tableaux fusionnés:", fusion);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 7: TRANSFORMATION AVEC MAP, FILTER, REDUCE
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 7. MÉTHODES FONCTIONNELLES ---\n");

const numbers = [1, 2, 3, 4, 5];

// map() - transforme chaque élément
const doubles = numbers.map(n => n * 2);
console.log("Doubles:", doubles);

// filter() - filtre selon une condition
const pairs = numbers.filter(n => n % 2 === 0);
console.log("Nombres pairs:", pairs);

// reduce() - réduit à une seule valeur
const somme = numbers.reduce((acc, n) => acc + n, 0);
console.log("Somme totale:", somme);

// Chaînage de méthodes
const resultat = numbers
    .filter(n => n > 2)
    .map(n => n * 3)
    .reduce((acc, n) => acc + n, 0);
console.log("Chaînage (filter > map > reduce):", resultat);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 8: TRI ET ORDRE
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 8. TRI ET ORDRE ---\n");

const nums = [5, 2, 8, 1, 9, 3];
console.log("Tableau original:", nums);

// sort() avec fonction de comparaison - ordre croissant
const croissant = [...nums].sort((a, b) => a - b);
console.log("Tri croissant:", croissant);

// ordre décroissant
const decroissant = [...nums].sort((a, b) => b - a);
console.log("Tri décroissant:", decroissant);

// reverse() - inverse l'ordre
const inverse = [...nums].reverse();
console.log("Inverse:", inverse);

// Tri de strings
const mots = ["banane", "pomme", "cerise", "abricot"];
const motsTries = [...mots].sort();
console.log("Mots triés:", motsTries);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 9: ITÉRATION
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 9. ITÉRATION ---\n");

const couleurs = ["rouge", "vert", "bleu"];

// forEach() - exécute une fonction pour chaque élément
console.log("forEach:");
couleurs.forEach((couleur, index) => {
    console.log(`  [${index}] ${couleur}`);
});

// for...of - boucle moderne
console.log("for...of:");
for (const couleur of couleurs) {
    console.log(`  - ${couleur}`);
}

// entries() - retourne les paires [index, valeur]
console.log("entries():");
for (const [index, couleur] of couleurs.entries()) {
    console.log(`  Position ${index}: ${couleur}`);
}

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 10: MÉTHODES DE VÉRIFICATION
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 10. VÉRIFICATIONS ---\n");

const ages = [18, 25, 30, 15, 42];

// every() - vérifie si TOUS les éléments satisfont la condition
const tousMajeurs = ages.every(age => age >= 18);
console.log("Tous majeurs?", tousMajeurs);

// some() - vérifie si AU MOINS UN élément satisfait
const auMoinsUnMajeur = ages.some(age => age >= 18);
console.log("Au moins un majeur?", auMoinsUnMajeur);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 11: CONVERSION ET JOINTURE
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 11. CONVERSION ---\n");

const items = ["JavaScript", "Python", "Java"];

// join() - convertit en string avec séparateur
const chaine = items.join(", ");
console.log("Jointure avec virgule:", chaine);

const chemin = ["usr", "local", "bin"];
console.log("Chemin:", chemin.join("/"));

// toString() - convertit en string
console.log("toString():", items.toString());

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 12: TABLEAUX MULTIDIMENSIONNELS
// ═══════════════════════════════════════════════════════════════
console.log("\n--- 12. TABLEAUX 2D ---\n");

const matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrice 3x3:");
matrice.forEach(ligne => console.log(ligne));

// Accès à un élément
console.log("Élément [1][2]:", matrice[1][2]); // 6

// flat() - aplatit les tableaux imbriqués
const imbrique = [1, [2, 3], [4, [5, 6]]];
const aplati = imbrique.flat(2); // 2 niveaux de profondeur
console.log("Tableau aplati:", aplati);

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 13: EXERCICES PRATIQUES
// ═══════════════════════════════════════════════════════════════
console.log("\n═══════════════════════════════════════════════════════════════");
console.log("           📚 10 EXERCICES PRATIQUES");
console.log("═══════════════════════════════════════════════════════════════\n");

// Exercice 1: Trouver le maximum
function trouverMax(tableau) {
    // Utilise reduce pour trouver la valeur maximale
    return tableau.reduce((max, val) => val > max ? val : max, tableau[0]);
}
console.log("Exercice 1 - Max de [3, 7, 2, 9, 1]:", trouverMax([3, 7, 2, 9, 1]));

// Exercice 2: Supprimer les doublons
function supprimerDoublons(tableau) {
    // Utilise Set pour éliminer les doublons automatiquement
    return [...new Set(tableau)];
}
console.log("Exercice 2 - Sans doublons [1, 2, 2, 3, 3, 3]:", supprimerDoublons([1, 2, 2, 3, 3, 3]));

// Exercice 3: Aplatir un tableau
function aplatirTableau(tableau) {
    // Méthode récursive pour aplatir complètement
    return tableau.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(aplatirTableau(val)) : acc.concat(val), []
    );
}
console.log("Exercice 3 - Aplatir [[1, 2], [3, [4, 5]]]:", aplatirTableau([[1, 2], [3, [4, 5]]]));

// Exercice 4: Grouper par propriété
function grouperPar(tableau, propriete) {
    // Groupe les objets selon une propriété commune
    return tableau.reduce((groupe, obj) => {
        const cle = obj[propriete];
        if (!groupe[cle]) groupe[cle] = [];
        groupe[cle].push(obj);
        return groupe;
    }, {});
}
const personnes = [
    {nom: "Alice", age: 25},
    {nom: "Bob", age: 30},
    {nom: "Charlie", age: 25}
];
console.log("Exercice 4 - Grouper par âge:", grouperPar(personnes, "age"));

// Exercice 5: Rotation de tableau
function rotation(tableau, positions) {
    // Effectue une rotation circulaire du tableau
    const n = positions % tableau.length;
    return [...tableau.slice(n), ...tableau.slice(0, n)];
}
console.log("Exercice 5 - Rotation de [1, 2, 3, 4, 5] par 2:", rotation([1, 2, 3, 4, 5], 2));

// Exercice 6: Intersection de deux tableaux
function intersection(tab1, tab2) {
    // Trouve les éléments communs aux deux tableaux
    return tab1.filter(element => tab2.includes(element));
}
console.log("Exercice 6 - Intersection [1, 2, 3] et [2, 3, 4]:", intersection([1, 2, 3], [2, 3, 4]));

// Exercice 7: Différence de deux tableaux
function difference(tab1, tab2) {
    // Trouve les éléments dans tab1 mais pas dans tab2
    return tab1.filter(element => !tab2.includes(element));
}
console.log("Exercice 7 - Différence [1, 2, 3] - [2, 3, 4]:", difference([1, 2, 3], [2, 3, 4]));

// Exercice 8: Tableau de fréquences
function compterFrequences(tableau) {
    // Compte le nombre d'occurrences de chaque élément
    return tableau.reduce((freq, val) => {
        freq[val] = (freq[val] || 0) + 1;
        return freq;
    }, {});
}
console.log("Exercice 8 - Fréquences ['a', 'b', 'a', 'c', 'b', 'a']:", 
    compterFrequences(['a', 'b', 'a', 'c', 'b', 'a']));

// Exercice 9: Découper en morceaux (chunks)
function decouper(tableau, taille) {
    // Divise le tableau en sous-tableaux de taille donnée
    const chunks = [];
    for (let i = 0; i < tableau.length; i += taille) {
        chunks.push(tableau.slice(i, i + taille));
    }
    return chunks;
}
console.log("Exercice 9 - Découper [1, 2, 3, 4, 5, 6, 7] en chunks de 3:", 
    decouper([1, 2, 3, 4, 5, 6, 7], 3));

// Exercice 10: Mélanger aléatoirement (shuffle)
function melanger(tableau) {
    // Algorithme de Fisher-Yates pour mélanger aléatoirement
    const copie = [...tableau];
    for (let i = copie.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copie[i], copie[j]] = [copie[j], copie[i]]; // Swap
    }
    return copie;
}
console.log("Exercice 10 - Mélanger [1, 2, 3, 4, 5]:", melanger([1, 2, 3, 4, 5]));

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 14: ALGORITHMES DE TRI CLASSIQUES
// ═══════════════════════════════════════════════════════════════
console.log("\n═══════════════════════════════════════════════════════════════");
console.log("           🔢 ALGORITHMES DE TRI");
console.log("═══════════════════════════════════════════════════════════════\n");

// Tri à bulles (Bubble Sort)
function triBulles(tableau) {
    const arr = [...tableau];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log("Tri à bulles [64, 34, 25, 12, 22, 11, 90]:", 
    triBulles([64, 34, 25, 12, 22, 11, 90]));

// Tri par sélection (Selection Sort)
function triSelection(tableau) {
    const arr = [...tableau];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
console.log("Tri par sélection [64, 34, 25, 12, 22, 11, 90]:", 
    triSelection([64, 34, 25, 12, 22, 11, 90]));

// Tri par insertion (Insertion Sort)
function triInsertion(tableau) {
    const arr = [...tableau];
    for (let i = 1; i < arr.length; i++) {
        let cle = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > cle) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = cle;
    }
    return arr;
}
console.log("Tri par insertion [64, 34, 25, 12, 22, 11, 90]:", 
    triInsertion([64, 34, 25, 12, 22, 11, 90]));

// ═══════════════════════════════════════════════════════════════
// 📌 SECTION 15: DÉFIS AVANCÉS
// ═══════════════════════════════════════════════════════════════
console.log("\n═══════════════════════════════════════════════════════════════");
console.log("           🏆 DÉFIS AVANCÉS");
console.log("═══════════════════════════════════════════════════════════════\n");

// Défi 1: Trouver le sous-tableau de somme maximale (Algorithme de Kadane)
function sousSommeMax(tableau) {
    let maxSoFar = tableau[0];
    let maxEndingHere = tableau[0];
    
    for (let i = 1; i < tableau.length; i++) {
        maxEndingHere = Math.max(tableau[i], maxEndingHere + tableau[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}
console.log("Défi 1 - Sous-somme max de [-2, 1, -3, 4, -1, 2, 1, -5, 4]:", 
    sousSommeMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Défi 2: Produit de tous sauf soi-même
function produitSaufSoi(tableau) {
    const n = tableau.length;
    const resultat = new Array(n).fill(1);
    
    // Produit à gauche
    let gauche = 1;
    for (let i = 0; i < n; i++) {
        resultat[i] = gauche;
        gauche *= tableau[i];
    }
    
    // Produit à droite
    let droite = 1;
    for (let i = n - 1; i >= 0; i--) {
        resultat[i] *= droite;
        droite *= tableau[i];
    }
    
    return resultat;
}
console.log("Défi 2 - Produit sauf soi [1, 2, 3, 4]:", produitSaufSoi([1, 2, 3, 4]));

// Défi 3: Permutations d'un tableau
function permutations(tableau) {
    if (tableau.length <= 1) return [tableau];
    
    const result = [];
    for (let i = 0; i < tableau.length; i++) {
        const current = tableau[i];
        const remaining = [...tableau.slice(0, i), ...tableau.slice(i + 1)];
        const remainingPerms = permutations(remaining);
        
        for (const perm of remainingPerms) {
            result.push([current, ...perm]);
        }
    }
    return result;
}
const perms = permutations([1, 2, 3]);
console.log("Défi 3 - Permutations de [1, 2, 3]:", perms);
console.log("Nombre total de permutations:", perms.length);

console.log("\n═══════════════════════════════════════════════════════════════");
console.log("✅ Guide des Arrays terminé! Continuez à pratiquer! 🚀");
console.log("═══════════════════════════════════════════════════════════════\n");