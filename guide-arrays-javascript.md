# 📊 Guide Complet des Tableaux (Arrays) en JavaScript

## 🎯 Introduction

Les tableaux (arrays) sont des structures de données fondamentales en JavaScript qui permettent de stocker plusieurs valeurs dans une seule variable. Ils sont ordonnés, indexés et très polyvalents pour manipuler des collections de données.

## 📋 Définition et Création

### Qu'est-ce qu'un tableau ?

Un tableau est une collection ordonnée d'éléments, où chaque élément est accessible via un index numérique commençant à 0. Les tableaux en JavaScript sont **dynamiques** et peuvent contenir différents types de données.

### 🔧 Méthodes de création

```javascript
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
```

## 📏 Propriétés Essentielles

### 📊 length - Taille du tableau

```javascript
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
    return `✅ Liste valide avec ${liste.length} articles`;
}

console.log(validerListeCourses(['pain', 'lait'])); // ✅ Liste valide avec 2 articles
```

## ➕ Méthodes d'Ajout d'Éléments

### 🔚 push() - Ajouter à la fin

```javascript
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
        return `📢 Notification ajoutée (${this.notifications.length} total)`;
    }
}

let notifs = new GestionnaireNotifications();
console.log(notifs.ajouterNotification("Nouveau message", "success"));
```

### 🔝 unshift() - Ajouter au début

```javascript
let queue = ['deuxième', 'troisième'];
queue.unshift('premier');
console.log(queue); // ['premier', 'deuxième', 'troisième']

// 🏃 Exemple: file d'attente prioritaire
function ajouterClientPrioritaire(file, client) {
    if (client.priorite === 'VIP') {
        file.unshift(`👑 ${client.nom}`);
        return "Client VIP ajouté en priorité";
    } else {
        file.push(`👤 ${client.nom}`);
        return "Client ajouté à la file";
    }
}

let fileAttente = ['Alice', 'Bob'];
console.log(ajouterClientPrioritaire(fileAttente, {nom: 'Charlie', priorite: 'VIP'}));
console.log(fileAttente); // ['👑 Charlie', 'Alice', 'Bob']
```

## ➖ Méthodes de Suppression d'Éléments

### 🔚 pop() - Supprimer le dernier

```javascript
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
        console.log(`✅ Action exécutée: ${action}`);
    }
    
    annuler() {
        if (this.actions.length === 0) {
            return "❌ Aucune action à annuler";
        }
        let actionAnnulee = this.actions.pop();
        return `↩️ Action annulée: ${actionAnnulee}`;
    }
}

let historique = new HistoriqueActions();
historique.executerAction("Créer fichier");
historique.executerAction("Modifier texte");
console.log(historique.annuler()); // ↩️ Action annulée: Modifier texte
```

### 🔝 shift() - Supprimer le premier

```javascript
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
    return `🎫 Traitement du ticket: ${ticket}`;
}

let tickets = ['#001', '#002', '#003'];
console.log(traiterProchainTicket(tickets)); // 🎫 Traitement du ticket: #001
console.log(tickets); // ['#002', '#003']
```

## 🔍 Méthodes de Recherche

### 🎯 indexOf() et lastIndexOf()

```javascript
let couleurs = ['rouge', 'bleu', 'vert', 'bleu', 'jaune'];

console.log(couleurs.indexOf('bleu')); // 1 (première occurrence)
console.log(couleurs.lastIndexOf('bleu')); // 3 (dernière occurrence)
console.log(couleurs.indexOf('violet')); // -1 (non trouvé)

// 🎨 Exemple: gestion de palette de couleurs
function verifierCouleurDupliquee(palette, nouvelleCouleur) {
    let index = palette.indexOf(nouvelleCouleur);
    if (index !== -1) {
        return `⚠️ Couleur déjà présente à l'index ${index}`;
    }
    palette.push(nouvelleCouleur);
    return `✅ Couleur ${nouvelleCouleur} ajoutée`;
}

let palette = ['rouge', 'vert', 'bleu'];
console.log(verifierCouleurDupliquee(palette, 'rouge')); // ⚠️ Couleur déjà présente à l'index 0
```

### 🔎 includes() - Vérifier la présence

```javascript
let ingredients = ['farine', 'œufs', 'lait', 'sucre'];

console.log(ingredients.includes('farine')); // true
console.log(ingredients.includes('chocolat')); // false

// 🍰 Exemple: vérification d'allergènes
function verifierAllergenes(ingredients, allergenes) {
    let allergenesPresents = allergenes.filter(allergene => 
        ingredients.includes(allergene)
    );
    
    if (allergenesPresents.length > 0) {
        return `⚠️ Allergènes détectés: ${allergenesPresents.join(', ')}`;
    }
    return "✅ Aucun allergène détecté";
}

let recette = ['farine', 'œufs', 'lait', 'noix'];
let allergenes = ['arachides', 'noix', 'gluten'];
console.log(verifierAllergenes(recette, allergenes)); // ⚠️ Allergènes détectés: noix
```

### 🔍 find() et findIndex()

```javascript
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
        return `👤 Utilisateur trouvé: ${utilisateur.nom} (ID: ${utilisateur.id})`;
    }
    return `❌ Aucun utilisateur trouvé avec ${critere}: ${valeur}`;
}

console.log(rechercherUtilisateur(utilisateurs, 'nom', 'Alice'));
// 👤 Utilisateur trouvé: Alice (ID: 1)
```

## ✂️ Méthodes d'Extraction et Modification

### 🎯 slice() - Extraction sans modification

```javascript
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

let articles = Array.from({length: 25}, (_, i) => `Article ${i + 1}`);
console.log(paginer(articles, 2, 5));
// { page: 2, donnees: ['Article 6', 'Article 7', 'Article 8', 'Article 9', 'Article 10'], total: 25, pages: 5 }
```

### ✂️ splice() - Modification directe

```javascript
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
        return `🛒 ${article} ajouté au panier`;
    }
    
    supprimerArticle(nom) {
        let index = this.articles.indexOf(nom);
        if (index !== -1) {
            this.articles.splice(index, 1);
            return `🗑️ ${nom} supprimé du panier`;
        }
        return `❌ ${nom} non trouvé dans le panier`;
    }
    
    remplacerArticle(ancien, nouveau) {
        let index = this.articles.indexOf(ancien);
        if (index !== -1) {
            this.articles.splice(index, 1, nouveau);
            return `🔄 ${ancien} remplacé par ${nouveau}`;
        }
        return `❌ ${ancien} non trouvé`;
    }
}

let panier = new PanierAchat();
panier.ajouterArticle('Pain');
panier.ajouterArticle('Lait');
console.log(panier.remplacerArticle('Lait', 'Lait bio')); // 🔄 Lait remplacé par Lait bio
```

## 🔗 Méthodes de Jointure et Division

### 🔗 join() - Convertir en chaîne

```javascript
let mots = ['Bonjour', 'le', 'monde'];
console.log(mots.join(' ')); // "Bonjour le monde"
console.log(mots.join('-')); // "Bonjour-le-monde"
console.log(mots.join('')); // "Bonjourlemonde"

// 🏷️ Exemple: génération de tags HTML
function genererListeHTML(elements, type = 'ul') {
    let items = elements.map(element => `  <li>${element}</li>`);
    return `<${type}>\n${items.join('\n')}\n</${type}>`;
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
```

### 🔄 concat() - Fusionner des tableaux

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let fusion = arr1.concat(arr2, arr3);
console.log(fusion); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 📊 Exemple: fusion de données de différentes sources
function fusionnerDonnees(...sources) {
    let donneesFusionnees = [];
    sources.forEach((source, index) => {
        console.log(`📥 Fusion source ${index + 1}: ${source.length} éléments`);
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
```

## 🔄 Méthodes de Transformation

### 🗺️ map() - Transformer chaque élément

```javascript
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
```

### 🔍 filter() - Filtrer les éléments

```javascript
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
```

### 🔄 reduce() - Réduire à une valeur

```javascript
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
```

## 🔄 Méthodes de Tri

### 📊 sort() - Tri personnalisé

```javascript
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
```

### 🔄 reverse() - Inverser l'ordre

```javascript
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
```

## 🔍 Méthodes de Test

### ✅ every() - Tous les éléments

```javascript
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
```

### 🔍 some() - Au moins un élément

```javascript
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
```

## 🔄 Méthodes Modernes (ES6+)

### 🔍 Array.from() - Créer depuis itérable

```javascript
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
    nom: `Utilisateur${i + 1}`,
    email: `user${i + 1}@test.com`,
    actif: Math.random() > 0.5
}));

console.log(utilisateursTest);
```

### 🔍 Array.of() - Créer avec éléments

```javascript
let nombres = Array.of(1, 2, 3, 4, 5);
console.log(nombres); // [1, 2, 3, 4, 5]

// Différence avec Array()
console.log(Array(3)); // [undefined, undefined, undefined]
console.log(Array.of(3)); // [3]
```

### 🔍 flat() et flatMap()

```javascript
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
```

## 🎯 Exercices Pratiques

### 🏋️ Exercice 1: Gestionnaire de Tâches

```javascript
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
```

### 🏋️ Exercice 2: Analyseur de Ventes

```javascript
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
```

### 🏋️ Exercice 3: Système de Recommandation

```javascript
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
```

### 🏋️ Exercice 4: Algorithme de Tri Personnalisé

```javascript
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
```

### 🏋️ Exercice 5: Gestionnaire de Cache LRU

```javascript
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
```

## 🎯 Solutions des Exercices

<details>
<summary>💡 Cliquez pour voir les solutions</summary>

### Solution Exercice 1:
```javascript
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
        return `✅ Tâche ajoutée: ${description}`;
    }
    
    terminerTache(id) {
        let tache = this.taches.find(t => t.id === id);
        if (tache) {
            tache.terminee = true;
            tache.dateTerminaison = new Date();
            return `🎉 Tâche terminée: ${tache.description}`;
        }
        return `❌ Tâche non trouvée`;
    }
    
    supprimerTache(id) {
        let index = this.taches.findIndex(t => t.id === id);
        if (index !== -1) {
            let tache = this.taches.splice(index, 1)[0];
            return `🗑️ Tâche supprimée: ${tache.description}`;
        }
        return `❌ Tâche non trouvée`;
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
```

### Solution Exercice 2:
```javascript
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
```

</details>

## 🎉 Conclusion

Les tableaux sont l'une des structures de données les plus puissantes et polyvalentes en JavaScript. Maîtriser leurs méthodes vous permettra de manipuler efficacement les collections de données dans vos applications. Les méthodes fonctionnelles comme `map()`, `filter()`, et `reduce()` sont particulièrement importantes dans le JavaScript moderne.

### 📚 Ressources Supplémentaires

- [MDN Web Docs - Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info - Arrays](https://javascript.info/array)
- [Array Methods Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)

---

*📊 Guide créé pour l'apprentissage de JavaScript - Maîtrisez les tableaux ! 🚀*