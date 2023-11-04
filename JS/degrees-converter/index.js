// kelvin constant -> 293 degrees
const kelvin = 0;

// celsius constant -> kelvin - 273 degrees
const celsius = kelvin - 273;

// fahrenheit var -> Fahrenheit = Celsius * (9/5) + 32
var fahrenheit = celsius * (9/5) + 32;
//  to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// newton var 
var newton = celsius * (33/100);
//  to round down the Fahrenheit temperature
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);