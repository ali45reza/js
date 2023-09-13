// function afficher(){
//     alert("Bonjour")
// }
// afficher()


// function direBonjour(name){
//     alert("Bonjour" + name)
// }
// direBonjour("anissa")


// function identite(nom , age){
//     nom = prompt("Entrez votre nom:")
//     alert("Bonjour " + nom)
// }
// identite(annisa, 12)


// function demandeIdentite(nom, age){
//     nom = prompt("Entrez votre nom:")
//     age = prompt("Entrez votre âge:")
//     alert("Bonjour " + nom +" "+ age +" ans")
// }
// demandeIdentite()


// function somme (a, b){
//     return a** b;
// }
// let maSomme = somme(12,12)
// console.log(maSomme);
// let opération = maSomme +10;
// console.log(opération);


// function somme (a, b){
//     a = prompt("Entrez votre premier number")
//     b = prompt("Entrez votre premier number")
//     return a* b;
// }
// console.log(somme());


function somme (a, b){
    return a* b;

}
somme(12,12)

let maSomme = somme(12,12)
console.log(maSomme);

let operation = maSomme + 10;
console.log(operation);
console.log(typeof(operation));

let maSomme2 = somme(operation, 14)
console.log("ma somme est: " + maSomme2);