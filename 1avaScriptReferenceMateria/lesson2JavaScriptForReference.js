// Using  x= math operators to change let values += -= /= *= 
// Declaring original lets and values here
let a =1944 ;
let b =1337 ;
let c =420 ;
let d =69 ;

// Using operators to modify value
a += 56;
b -= 7;
c /= 10;
d *= 2;

// Printing resulting values of all let vars
console.log('The value of a: ' + a);
console.log('The value of b: ' + b);
console.log('The value of c: ' + c);
console.log('The value of d: ' + d);

// Increment and Decrement operators: ++; --; adds or subtract 1 to/from the value of a var
// Applying operators
a++;
b--;

// logging results
console.log('Value of A incremented by 1. New value:' + a);
console.log('Value of B decremented by 1. New value:' + b);




/* String Interpolation, we can print strings and vars in a console.log without worrying about quotation marks 
by using String Interpolation. This is done by writing out output within backticks and a dollar sign with curly braces
to print the string. EXAMPLE AS FOLLOWS
*/
const myName = 'Andzie';
const myDick = 420;
console.log(`My name is ${myName} and my dick is ${myDick} centimetres long.`);
// outputs: 'My name is Andzie and my dick is 420 centimetres long'




// typeof operator is useful to check what type of value a variable is (number, string or boolean)
let myBoolean = true; //sets myBoolean as a boolean
let myString = 'bigdikk'; //sets myString as a string
let myNum = 3; //sets myNum as a number

console.log(typeof myBoolean); // outputs: boolean
console.log(typeof myString); // outputs: string
console.log(typeof myNum); //outputs: number

myBoolean = 2; //changes type of myBoolean to a number
myString = true; //changes type of myString to a boolean
myNum = 'cock'; //changes type of nyNum to an entertaining string

console.log(typeof myBoolean); // outputs: number
console.log(typeof myString); // outputs: boolean
console.log(typeof myNum); //outputs: string