// we can do math operation by numbers also

var price = 10;
var totalPrice = 1 + 5 + 3;
console.log(totalPrice);

var doublePrice = price * 2;
console.log(doublePrice);

var halfPrice = price / 2;
console.log(halfPrice);

var newPrice = price + 5;
console.log(newPrice);

// if we declare any variable before then change the value of it we dont have to write var again. We write var to declare variable

// if we want to change the value of price we can write

price = price + 10 // we dont have to write var here and after this line we update the value that means now the value of the variable price is 20

//we can use assignment operator to use shortcut like that means we dont have to write price twice we can write like that

price += 40; // it is called shorthand means price = price + 40; means we add +40 to price and now the price will update again. it means now price = 60;
console.log(price);

//shorthand example:
var age = 23;
age += 1;
age -= 2;
age *= 5;
age /= 6;

//increment or decrement operator if we want to increase or decrease the value by 1 only then we can simple write ++ or -- 

age++; // age = age + 1;
age--; // age = age - 1;

console.log(age);

