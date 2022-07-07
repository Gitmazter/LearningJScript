console.log('Todays work');

console.log(Math.ceil(43.8));
//returns an integer equal or greater to 43.8

console.log(Math.floor(43.8));
//returns and integer equal or less than 43.8

console.log((3 + 4 - 6 * 3) / 7);
//returns the value of all numbers in the partentheses divided by 7

console.log(3 / 7);
//returns the value of: 3/7

var x = 233;
console.log(Number.isInteger(x));
// checks if x is an Integer and returns a boolean true/false

console.log('Hello' + ' ' + 'mothafucka');
// + also adds strings together

console.log('Hello ' + '   Mothafugga     '.trim() +' ' + 'bishhh'.length);
// .trim() removes whitespace etc.. , .length prints the number of characters in a string




//Function to determine wether or not to buy depending on x Value
let sale = true; 
var x = 9;

//Sets boolean for sale depending on x value
if(x>10){sale = false;} 
else{sale=true;}

//Prints either encouragement or discouragement depending on sale boolean value
if(sale){
    console.log('Computer says Its time to buy');
}   else{ 
    console.log('Computer says wait for sale');
}




//variables are containers to hold a value,( number boolean or a string)
var nateDoggQuote = 'I got hoes';
var numOfHoes = 8;
console.log(nateDoggQuote);
console.log(numOfHoes);

// the Let container informs the processor that the value can be reassigned
let iGotHoes = false; 
console.log(iGotHoes);
iGotHoes = true;
console.log(iGotHoes);

// const containers are constants and can therefore not be changed. They must be declared upon creation.
const myName = 'Andzie'; 
console.log(myName);
myName = 'Gilberto';

