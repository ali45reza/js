// let x = Number(prompt("prix HT:"));
// document.write("voila TVA "  + (20/x) * 100)

                    // Exercice2

//  let HT = Number(prompt("Prix HT:"));
//  let TVA = Number(prompt("porcentage de TVA:"));

//  let TAX =  (TVA * HT)/100 + HT ;
//  document.write(TAX)

                    // Exercice3
 let HT = Number(prompt("Prix HT:"));
 let TVA = Number(prompt("porcentage de TVA:"));

 let TAX =  (TVA * HT)/100 + HT ;



if(TAX>100){
   TAX = TAX.toString()
    document.write(TAX.fontcolor("red"));
}
else{
    TAX = TAX.toString()
    document.write(TAX.fontcolor("green"));
}