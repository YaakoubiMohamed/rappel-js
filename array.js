tab =[14, 7, 3, 12, 9, 11, 6, 2, 1, 5, 10, 4, 8, 3, 15, 0];

console.log(tab); // Affiche le tableau complet
console.log(tab.length); // Affiche la taille du tableau

tab.push(7); // Ajoute 7 à la fin du tableau
console.log(tab);

tab.unshift(20); // Ajoute 20 au début du tableau
console.log(tab);


tab.pop(); // Supprime le dernier élément du tableau
console.log(tab);

tab.shift(); // Supprime le premier élément du tableau
console.log(tab);

console.log(tab.indexOf(3)); // Retourne l'index de la première occurrence de 3
console.log(tab.lastIndexOf(3)); // Retourne l'index de la dernière occurrence de 3

console.log(tab.slice(2,5)); // Retourne une portion du tableau de l'index 2 à 4

tab.splice(3,2);
console.log(tab); // Supprime 2 éléments à partir de l'index 3

tab.splice(4,0,13,17);
console.log(tab); // Ajoute 13 et 17 à partir de l'index 4

tab.sort(function(a, b){return b-a});
// console.log(tab); // Trie le tableau en ordre décroissant

taille = tab.length;
i=0;

while(i<taille-1){
    let minIndex = i;
    for(j=1; j<taille-i; j++){
        if(tab[j] < tab[minIndex]){
            minIndex = j;
        }
    }
    // Échange les éléments
    let temp = tab[minIndex];
    tab[minIndex] = tab[taille - 1 - i];
    tab[taille - 1 - i] = temp;
    i++;
}

console.log(tab); // Trie le tableau en ordre croissant