// let nom = "ahmed";
// var prenom = "yassine";


// function hello(){
//     let nom = "sami";
//     var prenom = "amine";
//     return prenom;
// }

// console.log(prenom);
// console.log(hello())
var callbacks = [];
for (var i = 0; i < 3; i++) {
    callbacks.push(function() {
        console.log("Numéro:", i); // Que va afficher i ?
    });
}

// Quand on exécute les fonctions:
callbacks[0](); // Affiche 3 (pas 0 !)
callbacks[1](); // Affiche 3 (pas 1 !)
callbacks[2](); // Affiche 3 (pas 2 !)