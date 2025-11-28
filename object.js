nom = "ahmed";
prenom = "yassine";
email = "ahmed@example.com";
age = 30;
console.log("nom:",nom, prenom, email, age);


const Personne = {
    nom: "ahmed",
    prenom: "yassine",
    email: "ahmed@example.com",
    age: 30,
    ville: "gabes",
   
};

console.log(Personne);

Personne.age = 31; // Modification de l'âge
Personne.email = "yassine@gmail.com"
console.log(Personne);
delete Personne.ville; // Suppression de la ville
console.log(Personne.ville); // Affiche undefined
console.log(Personne);