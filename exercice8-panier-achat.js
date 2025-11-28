// ========================================
// EXERCICE 8 : Panier d'Achat E-commerce
// ========================================

// ❌ MAUVAISE SYNTAXE / BAD PRACTICES
// ====================================

// Problème 1 : Variables globales pour le panier
var articles = [];
var total = 0;

function ajouterArticle(nom, prix) {
    // ❌ Variables globales, pas d'encapsulation
    articles.push({ nom: nom, prix: prix });
    total += prix;
}

// Problème 2 : Pas de validation des données
var panier1 = {
    articles: [],
    ajouter: function(nom, prix, quantite) {
        // ❌ Pas de vérification
        this.articles.push({ nom: nom, prix: prix, quantite: quantite });
    }
};

panier1.ajouter("", -10, "deux"); // ❌ Données invalides acceptées

// Problème 3 : Calcul du total à chaque fois (inefficace)
var panier2 = {
    articles: [
        { nom: "Laptop", prix: 999, quantite: 1 },
        { nom: "Souris", prix: 25, quantite: 2 }
    ],
    calculerTotal: function() {
        // ❌ Boucle for à l'ancienne
        var total = 0;
        for (var i = 0; i < this.articles.length; i++) {
            total = total + this.articles[i].prix * this.articles[i].quantite;
        }
        return total;
    }
};

// Problème 4 : Modification d'articles sans recherche
var panier3 = {
    articles: [],
    retirer: function(index) {
        // ❌ Suppression par index, fragile
        this.articles.splice(index, 1);
    }
};

// Problème 5 : Pas de gestion de la TVA, des promotions, etc.
var panier4 = {
    articles: [],
    total: function() {
        // ❌ Calcul simpliste sans flexibilité
        return this.articles.reduce((sum, a) => sum + a.prix, 0);
    }
};


// ✅ BONNES PRATIQUES / BEST PRACTICES
// =====================================

// 1. Version de base avec validation
const panierBase = {
    articles: [],
    
    ajouterArticle(nom, prix, quantite) {
        // Validation
        if (typeof nom !== 'string' || nom.trim() === '') {
            return { succes: false, message: "❌ Nom invalide" };
        }
        if (typeof prix !== 'number' || prix <= 0) {
            return { succes: false, message: "❌ Prix invalide" };
        }
        if (typeof quantite !== 'number' || quantite <= 0 || !Number.isInteger(quantite)) {
            return { succes: false, message: "❌ Quantité invalide" };
        }
        
        // Vérifier si l'article existe déjà
        const articleExistant = this.articles.find(a => 
            a.nom.toLowerCase() === nom.toLowerCase()
        );
        
        if (articleExistant) {
            articleExistant.quantite += quantite;
            return { 
                succes: true, 
                message: `✅ Quantité de "${nom}" mise à jour : ${articleExistant.quantite}` 
            };
        }
        
        this.articles.push({ 
            nom: nom.trim(), 
            prix: prix, 
            quantite: quantite 
        });
        
        return { succes: true, message: `✅ "${nom}" ajouté au panier` };
    },
    
    retirerArticle(nom) {
        if (typeof nom !== 'string' || nom.trim() === '') {
            return { succes: false, message: "❌ Nom invalide" };
        }
        
        const index = this.articles.findIndex(a => 
            a.nom.toLowerCase() === nom.toLowerCase()
        );
        
        if (index === -1) {
            return { succes: false, message: `❌ "${nom}" non trouvé` };
        }
        
        this.articles.splice(index, 1);
        return { succes: true, message: `✅ "${nom}" retiré du panier` };
    },
    
    calculerTotal() {
        return this.articles.reduce((total, article) => {
            return total + (article.prix * article.quantite);
        }, 0);
    },
    
    appliquerReduction(pourcentage) {
        if (typeof pourcentage !== 'number' || pourcentage < 0 || pourcentage > 100) {
            return { succes: false, message: "❌ Pourcentage invalide (0-100)" };
        }
        
        const total = this.calculerTotal();
        const reduction = total * (pourcentage / 100);
        const totalFinal = total - reduction;
        
        return {
            succes: true,
            total: total,
            reduction: reduction,
            totalFinal: totalFinal,
            message: `✅ Réduction de ${pourcentage}% appliquée`
        };
    }
};

console.log("✅ Version de base :");
console.log(panierBase.ajouterArticle("Laptop", 999, 1));
console.log(panierBase.ajouterArticle("Souris", 25, 2));
console.log("Total :", panierBase.calculerTotal() + "€");
console.log(panierBase.appliquerReduction(10));

// 2. Version complète avec toutes les fonctionnalités
const panierComplet = {
    articles: [],
    codePromo: null,
    tauxTVA: 0.20, // 20%
    fraisLivraison: 5.90,
    seuilLivraisonGratuite: 50,
    
    ajouterArticle(nom, prix, quantite, options = {}) {
        // Validation
        if (typeof nom !== 'string' || nom.trim() === '') {
            throw new Error("Nom invalide");
        }
        if (typeof prix !== 'number' || prix <= 0) {
            throw new Error("Prix invalide");
        }
        if (typeof quantite !== 'number' || quantite <= 0 || !Number.isInteger(quantite)) {
            throw new Error("Quantité invalide");
        }
        
        // Vérifier si l'article existe déjà
        const articleExistant = this.articles.find(a => 
            a.nom.toLowerCase() === nom.toLowerCase()
        );
        
        if (articleExistant) {
            articleExistant.quantite += quantite;
            return `✅ "${nom}" x${articleExistant.quantite}`;
        }
        
        const article = {
            id: Date.now(),
            nom: nom.trim(),
            prix: prix,
            quantite: quantite,
            categorie: options.categorie || 'Général',
            image: options.image || null,
            enStock: options.enStock !== false,
            dateAjout: new Date()
        };
        
        this.articles.push(article);
        return `✅ "${nom}" ajouté au panier`;
    },
    
    retirerArticle(nom) {
        const index = this.articles.findIndex(a => 
            a.nom.toLowerCase() === nom.toLowerCase()
        );
        
        if (index === -1) {
            return `❌ "${nom}" non trouvé dans le panier`;
        }
        
        const article = this.articles[index];
        this.articles.splice(index, 1);
        return `✅ "${article.nom}" retiré du panier`;
    },
    
    modifierQuantite(nom, nouvelleQuantite) {
        if (typeof nouvelleQuantite !== 'number' || nouvelleQuantite < 0) {
            return "❌ Quantité invalide";
        }
        
        const article = this.articles.find(a => 
            a.nom.toLowerCase() === nom.toLowerCase()
        );
        
        if (!article) {
            return `❌ "${nom}" non trouvé`;
        }
        
        if (nouvelleQuantite === 0) {
            return this.retirerArticle(nom);
        }
        
        article.quantite = nouvelleQuantite;
        return `✅ Quantité de "${nom}" mise à jour : ${nouvelleQuantite}`;
    },
    
    viderPanier() {
        const nbArticles = this.articles.length;
        this.articles = [];
        this.codePromo = null;
        return `✅ Panier vidé (${nbArticles} article(s) supprimé(s))`;
    },
    
    calculerSousTotal() {
        return this.articles.reduce((total, article) => {
            return total + (article.prix * article.quantite);
        }, 0);
    },
    
    calculerTVA() {
        return this.calculerSousTotal() * this.tauxTVA;
    },
    
    calculerFraisLivraison() {
        const sousTotal = this.calculerSousTotal();
        return sousTotal >= this.seuilLivraisonGratuite ? 0 : this.fraisLivraison;
    },
    
    appliquerCodePromo(code) {
        const codesValides = {
            'PROMO10': { type: 'pourcentage', valeur: 10, description: '10% de réduction' },
            'PROMO20': { type: 'pourcentage', valeur: 20, description: '20% de réduction' },
            'FIXE5': { type: 'fixe', valeur: 5, description: '5€ de réduction' },
            'LIVRAISON': { type: 'livraison', valeur: 0, description: 'Livraison gratuite' }
        };
        
        if (!code || typeof code !== 'string') {
            return { succes: false, message: "❌ Code promo invalide" };
        }
        
        const codeUpper = code.toUpperCase();
        const promo = codesValides[codeUpper];
        
        if (!promo) {
            return { succes: false, message: "❌ Code promo non valide" };
        }
        
        this.codePromo = { code: codeUpper, ...promo };
        return { 
            succes: true, 
            message: `✅ Code "${codeUpper}" appliqué : ${promo.description}` 
        };
    },
    
    calculerReduction() {
        if (!this.codePromo) return 0;
        
        const sousTotal = this.calculerSousTotal();
        
        if (this.codePromo.type === 'pourcentage') {
            return sousTotal * (this.codePromo.valeur / 100);
        } else if (this.codePromo.type === 'fixe') {
            return Math.min(this.codePromo.valeur, sousTotal);
        }
        
        return 0;
    },
    
    calculerTotal() {
        const sousTotal = this.calculerSousTotal();
        const reduction = this.calculerReduction();
        const tva = (sousTotal - reduction) * this.tauxTVA;
        let fraisLivraison = this.calculerFraisLivraison();
        
        // Code promo livraison gratuite
        if (this.codePromo && this.codePromo.type === 'livraison') {
            fraisLivraison = 0;
        }
        
        return sousTotal - reduction + tva + fraisLivraison;
    },
    
    obtenirRecapitulatif() {
        const sousTotal = this.calculerSousTotal();
        const reduction = this.calculerReduction();
        const tva = this.calculerTVA();
        let fraisLivraison = this.calculerFraisLivraison();
        
        if (this.codePromo && this.codePromo.type === 'livraison') {
            fraisLivraison = 0;
        }
        
        return {
            nombreArticles: this.articles.length,
            quantiteTotale: this.articles.reduce((sum, a) => sum + a.quantite, 0),
            sousTotal: sousTotal.toFixed(2),
            reduction: reduction.toFixed(2),
            tva: tva.toFixed(2),
            fraisLivraison: fraisLivraison.toFixed(2),
            total: this.calculerTotal().toFixed(2)
        };
    },
    
    afficherPanier() {
        console.log("\n" + "═".repeat(80));
        console.log("🛒 PANIER D'ACHAT");
        console.log("═".repeat(80));
        
        if (this.articles.length === 0) {
            console.log("Votre panier est vide");
        } else {
            this.articles.forEach((article, index) => {
                const sousTotal = article.prix * article.quantite;
                console.log(`\n${index + 1}. ${article.nom}`);
                console.log(`   Prix unitaire : ${article.prix.toFixed(2)}€`);
                console.log(`   Quantité : ${article.quantite}`);
                console.log(`   Sous-total : ${sousTotal.toFixed(2)}€`);
            });
            
            console.log("\n" + "-".repeat(80));
            
            const recap = this.obtenirRecapitulatif();
            console.log(`Sous-total : ${recap.sousTotal}€`);
            
            if (parseFloat(recap.reduction) > 0) {
                console.log(`Réduction (${this.codePromo.code}) : -${recap.reduction}€`);
            }
            
            console.log(`TVA (${(this.tauxTVA * 100)}%) : ${recap.tva}€`);
            console.log(`Frais de livraison : ${recap.fraisLivraison}€`);
            
            if (parseFloat(recap.fraisLivraison) > 0) {
                const reste = this.seuilLivraisonGratuite - this.calculerSousTotal();
                if (reste > 0) {
                    console.log(`   💡 Ajoutez ${reste.toFixed(2)}€ pour la livraison gratuite !`);
                }
            }
            
            console.log("\n" + "═".repeat(80));
            console.log(`TOTAL À PAYER : ${recap.total}€`);
            console.log("═".repeat(80));
        }
    },
    
    obtenirArticlesParCategorie() {
        const categories = {};
        
        this.articles.forEach(article => {
            if (!categories[article.categorie]) {
                categories[article.categorie] = [];
            }
            categories[article.categorie].push(article);
        });
        
        return categories;
    },
    
    rechercherArticle(terme) {
        if (!terme || typeof terme !== 'string') return [];
        
        return this.articles.filter(a => 
            a.nom.toLowerCase().includes(terme.toLowerCase())
        );
    },
    
    trierArticles(critere = 'nom', ordre = 'asc') {
        const copie = [...this.articles];
        
        copie.sort((a, b) => {
            let valeurA, valeurB;
            
            if (critere === 'prix') {
                valeurA = a.prix;
                valeurB = b.prix;
            } else if (critere === 'quantite') {
                valeurA = a.quantite;
                valeurB = b.quantite;
            } else {
                valeurA = a.nom.toLowerCase();
                valeurB = b.nom.toLowerCase();
            }
            
            if (ordre === 'asc') {
                return valeurA > valeurB ? 1 : -1;
            } else {
                return valeurA < valeurB ? 1 : -1;
            }
        });
        
        return copie;
    }
};

// 3. Version avec classe ES6
class PanierAchat {
    #articles;
    #codePromo;
    
    constructor(tauxTVA = 0.20) {
        this.#articles = [];
        this.#codePromo = null;
        this.tauxTVA = tauxTVA;
        this.fraisLivraison = 5.90;
        this.seuilLivraisonGratuite = 50;
    }
    
    ajouterArticle(nom, prix, quantite) {
        if (typeof prix !== 'number' || prix <= 0) {
            throw new Error("Prix invalide");
        }
        if (!Number.isInteger(quantite) || quantite <= 0) {
            throw new Error("Quantité invalide");
        }
        
        const article = {
            id: Date.now(),
            nom: nom.trim(),
            prix: prix,
            quantite: quantite
        };
        
        this.#articles.push(article);
        return article;
    }
    
    retirerArticle(nom) {
        const index = this.#articles.findIndex(a => 
            a.nom.toLowerCase() === nom.toLowerCase()
        );
        
        if (index === -1) {
            throw new Error("Article non trouvé");
        }
        
        return this.#articles.splice(index, 1)[0];
    }
    
    calculerTotal() {
        const sousTotal = this.#articles.reduce((total, article) => {
            return total + (article.prix * article.quantite);
        }, 0);
        
        const tva = sousTotal * this.tauxTVA;
        const fraisLivraison = sousTotal >= this.seuilLivraisonGratuite ? 0 : this.fraisLivraison;
        
        return sousTotal + tva + fraisLivraison;
    }
    
    appliquerReduction(pourcentage) {
        if (pourcentage < 0 || pourcentage > 100) {
            throw new Error("Pourcentage invalide");
        }
        
        const total = this.calculerTotal();
        const reduction = total * (pourcentage / 100);
        return total - reduction;
    }
    
    get articles() {
        return [...this.#articles]; // Copie pour protection
    }
    
    get nombreArticles() {
        return this.#articles.length;
    }
}


// DÉMONSTRATION COMPLÈTE
// =======================

console.log("\n\n=== EXERCICE 8 : Panier d'Achat E-commerce ===\n");

// Ajout d'articles
console.log("📦 Ajout d'articles au panier :");
console.log(panierComplet.ajouterArticle("Laptop", 999, 1, { categorie: 'Informatique' }));
console.log(panierComplet.ajouterArticle("Souris", 25, 2, { categorie: 'Accessoires' }));
console.log(panierComplet.ajouterArticle("Clavier", 75, 1, { categorie: 'Accessoires' }));

// Afficher le panier
panierComplet.afficherPanier();

// Application d'un code promo
console.log("\n🎟️  Application d'un code promo :");
console.log(panierComplet.appliquerCodePromo("PROMO10"));

// Afficher après réduction
panierComplet.afficherPanier();

// Récapitulatif
console.log("\n📊 Récapitulatif :");
const recap = panierComplet.obtenirRecapitulatif();
console.log(recap);

// Tests de modification
console.log("\n✏️  Modification de quantité :");
console.log(panierComplet.modifierQuantite("Souris", 3));

console.log("\n🗑️  Retrait d'un article :");
console.log(panierComplet.retirerArticle("Clavier"));

// Affichage final
panierComplet.afficherPanier();

console.log("\n✅ Bonnes pratiques illustrées :");
console.log("1. Validation complète des données");
console.log("2. Gestion des articles existants (fusion quantités)");
console.log("3. Calculs précis avec TVA et frais de livraison");
console.log("4. Système de codes promo flexible");
console.log("5. Récapitulatif détaillé");
console.log("6. Recherche et tri des articles");
console.log("7. Encapsulation avec propriétés privées");
console.log("8. Retours d'information clairs");
