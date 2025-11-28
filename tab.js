let livres = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943 },
    { titre: "1984", auteur: "George Orwell", annee: 1949 },
];

const Livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee: 1943
};

livres.push(Livre); 
livres.push({ titre: "1945", auteur: "Jean Jack", annee: 1864 });

console.log(livres);


livres[3].annee = 2020;
console.log(livres);

// annee 1945

for(let i=0; i<livres.length; i++){
    if(livres[i].annee === 1945){
        console.log("Livre trouvé :", livres[i]);
    }
}