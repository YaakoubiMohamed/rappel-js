ch = "bonjour";
ch2 = "tout le monde";
console.log(ch +" "+ ch2); // Affiche "bonjour tout le monde"
console.log(ch.length); // Affiche 7

console.log(ch.indexOf("y")); // Retourne 1
console.log(ch.lastIndexOf("x")); // Retourne 4
console.log(ch.concat(" ali"," jdidi")); // Retourne "bonjour ali"

console.log(ch.slice(2,5)); // Retourne "njo"

console.log(ch.replace("test","salut")); // Retourne "salutjour"
palindrome = "radar";
f=0; // f= 'a' 2
l= palindrome.length - 1; // l= 'a' 2

estpalindrome = true;
while(f<l){
    if (palindrome[f] != palindrome[l]){
        estpalindrome = false;
        console.log("la chaine n'est pas un palindrome");
        break;
    }
    f++;
    l--;
}