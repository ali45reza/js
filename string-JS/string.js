let maChaine = "le reveil n'a pas bien fonctionné ce matin!"
console.log("taille de chaine " + maChaine.length);
console.log("position de caractér dans la chaine " + maChaine.charAt(3));
console.log("position de du caractér dans le chaine " + maChaine.indexOf("a"));
/* le méthod substring (débbut , fin) permet d'extraire une partie de la chaine de caractérs commençant de la position début et finissant à la positionfin*/
console.log(maChaine.substring(1,3));
console.log(maChaine.split("o"));
let maVar = maChaine.split("o");
console.log(maVar);
console.log(maVar.length);
console.log(maVar.join("-"));
console.log(maChaine.toLocaleLowerCase);
console.log(maChaine.toLowerCase);
console.log(maChaine.toUpperCase);
