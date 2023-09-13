let x = Number(prompt("Numéro de votre notes"));

monTab = [];

for(let i=0 ; i<x ; i++)[
   monTab.push(Number(prompt("votre note:")))
]
let sum = 0;
for( i = 0; i < x; i++)
{
  sum = sum + monTab[i];
}
console.log(monTab);
console.log("votre moyenne" + " " + sum / x)
