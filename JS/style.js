var data = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samdi", "dimanche"];
console.log(data.length);
data[1000]= 15;
data[8]= "un autre jour";
document.write(data[1,6,3])


var monnaies = [];
monnaies["EUR"]="Euros";
monnaies["USD"]="Dollars américan";
monnaies["BTC"]="Bitcoin";
console.log(monnaies);              //table horizantal
console.table(monnaies);            //table vertical
console.log(monnaies.length);
monnaies[2]= 1

const Gravity = 10
const SpeedLight = "300000ks"
const numberOfOurPlanetInSolarSystem = 3

let age = 18
console.log(age);
age = 12
console.log(age);
age = 13
console.log(age);
age = 14
console.log(age);



console.log(typeof(Gravity));
console.log(typeof(age));
console.log(typeof(SpeedLight));
console.log(typeof(numberOfOurPlanetInSolarSystem));