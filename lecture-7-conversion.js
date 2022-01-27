//conversion

// we can also add string means if we add string they sit side by side. it is called CONCATENATION    

var firstName = "Muntasir";
var lastName = "Tonmoy";
var fullName = firstName + lastName;

// we can also add a space or string in middle like that 
var fullName = firstName + ' hossain ' + lastName;

console.log(fullName);
console.log(firstName + lastName);

// if we put quote mark before variable value such as 
var price = '40';
var price2 = '44';

//then it will consider as string if we add them it will sit side by side no math operation will occur

console.log(price + price2);

// even if only one variable is string the other one also act as string
var price = '40'; // this is string
var price2 = 44.33; // this is variable

console.log(price + ' ' + price2);

// if all the variable is numeric than math operation will occur.

// sometimes we have to ensure that the value is in numeric form like integer or float not string. so for this case we can use parseInt() or parseFloat() function. such as

console.log(parseInt(price) + parseFloat(price2));
// here the spelling is parseInt or parseFloat* not perse

// so parseInt or parseFloat converst string or any value to integer or float



