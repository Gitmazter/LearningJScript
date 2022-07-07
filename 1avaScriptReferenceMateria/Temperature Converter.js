/* todays temperature forecast described in a Kelvin
constant */
const kelvin = 293;
console.log(`Todays temperature forecast is: ${kelvin}*K`);

/* Todays temperature forecast described in celsius
by subtracting 273 from the Kelvin scale */
let celsius = kelvin - 273;
console.log(`Todays temperature forecast is: ${celsius}*C`);

/*Formula to describe celsius in farenheit 
Fahrenheit = Celsius * (9/5) + 32
*/
let fahrenheit = celsius * (9/5) + 32;
/*Using Math.floor to round temperature down 
to nearest integer*/
console.log('Todays temperature forecast is: ' + Math.floor(fahrenheit) + '*F');

/* Adding temp in Newton for good measure */
let newton = celsius * (33/100);
console.log(`Todays temperature forecast is: ${Math.floor(newton)}*N`);