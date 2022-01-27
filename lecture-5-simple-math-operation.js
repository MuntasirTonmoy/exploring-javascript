// op means output.

var onionPrice = 43;
var eggPrice = 4;
console.log(onionPrice); //op: 43
console.log(eggPrice); // op: 20

// addition
console.log(onionPrice + eggPrice); //op: 63

// we can also do like this here we can addition two or more variabe then store the value inside another variable.

var totalPrice = onionPrice + eggPrice;
console.log(totalPrice); // op: 63

// subtraction

var priceDifference = onionPrice - eggPrice;
console.log(priceDifference); //op 23

// multiplication
var eggQuantity = 7;
var totalEggPrice = eggPrice * eggQuantity;
console.log(totalEggPrice);

//division
var moneyAvaiable = 100;
var orangePrice = 5;

var orangeQuantity = moneyAvaiable / orangePrice;

// it works like calculator means it divided fully give float result also
moneyAvaiable = 52;
orangePrice = 5;

orangeQuantity = moneyAvaiable / orangePrice;


console.log(orangeQuantity);  // op: 10.4

//modulus of division
//we use % sign for determine modulus.

console.log(moneyAvaiable % orangePrice); // here reminder is 0