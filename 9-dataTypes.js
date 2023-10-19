// String

/** Question (9-1-0)
 * initialise the var name to your name using camel case
 */

var name = "madiTabon";

/** Question (9-1-2)
 * var dog name to jake using camel case
 */

var dogName = "Jake";

/** Question (9-1-3)
 * var bird to the word budgie
 */

var bird = "budgie";

/** Question (9-1-4)
 * var electronics box to word cpu
 */

var electronicsBox = "cpu";

/** Question (9-1-5)
 * var slogan to the phrase I'm Lovin' it
 */

var slogan = "I'm Lovin' It";

// Numbers (9-2-0);

/** Question (9-2-1-1)
 * initialise the var age to the value 14
*/

var age = 14;

/** Question (9-2-1-2)
 * initialise the var meters to the value 100
 */

var meters = 100;

/** Question (9-2-1-3)
 * initialise a to the value 12, then b to the value 3 then a final var total to calculate a / b
 * console log
 */

var a = 12;
var b = 3;
var total = a/b;
console.log(total);

/** Question (9-2-1-4)
 * initialise var x to 10, then y to the value 2. initialise var total to calculate x divided by y
 */

var x = 10;
var y = 2;
var total = x/y;
console.log(total);

// Decimal Numbers/Float (9-2-2-0)

/** Question (9-2-2-1)
 * initialise the var screen size to 13.5
 */

var screenSize = 13.5;
console.log(screenSize);

/** Question (9-2-2-2)
 * initialise the var diameter to the value 2.5
 */

var diameter = 2.5;
console.log(screenSize);

// Magic Numbers (9-2-3-0)

/** Question (9-2-3-1)
 * var pi = 3.14, var radius = 2
 * calculate the area, console log
 */

var pi = 3.14;
var radius = 2;
var area = pi * (radius**2);

console.log(area);

/** Question (9-2-3-2)
 * var number days of the week = 7 use magic numbers
 * hours a day = 5
 * worked number weeks = 3
 * salary = 25.50
 * total by multiplying all values
 * console log
 */

var NUMBER_DAYS_OF_THE_WEEK = 7;
var HOURS_A_DAY = 5;
var WORKED_NUMBER_WEEKS = 3;
var SALARY = 25.50
var total = NUMBER_DAYS_OF_THE_WEEK * HOURS_A_DAY * WORKED_NUMBER_WEEKS * SALARY;

console.log(total.toFixed(2));

// Boolean (9-3-0)

/** Question (9-3-1)
 * initialise the var proceed to the value true
 */

var proceed = "true";

/** Question (9-3-2)
 * initialise the var proceed to the value false
 */

var proceed = "false";

// Object (9-4-0)

/** Question (9-4-1)
 * Create a var grannySmith and add the following values
 * color of the apple is green
 * Origin location is australia
 * origin date is 1868
 */

var grannySmith = {
  colour: "green",
  originLocation: "australia",
  originDate: 1868
}
console.log(grannySmith.colour);

/** Question (9-4-2)
 * create a var german shepard and add these values
 * weight kilograms is 30
 * colour is tan
 * eye color is brown
 */

var germanShepard = {
  weightKilograms: 30,
  colour: "tan",
  eyeColor: "brown"
}
console.log(germanShepard.eyeColor);

/** Question (9-4-3)
 * create a var person and add these values
 * eye colour is brown
 * hair colour is red
 * age is 30
 * console log hair colour
 */

var person = {
  eyeColor: "brown",
  hairColour: "red",
  age: 30
}

console.log(person.hairColour);

// Function (9-5-0)

/** Question (9-5-1)
 * Initialise the var x to a function called myFunction with the values 1 and 3 
 * multiply the two numbers and console log x
 */

var x = myFunction(1,3);

function myFunction(a,b){
  return a*b;
}
console.log(x); // 3

/** Question (9-5-2)
 * int the var addition to a function called function addition with the values 3 and 4
 * add the two numbers the function and return the calculated value
 * console log
 */

var addition = additionFunction(3,4);

function additionFunction(a,b){
  return a+b
}
console.log(addition);

/** Question (9-5-3)
 * inti the var subtraction to a subtraction function with the value 10 and 4
 * subtract and console log
 */

var subtraction = subtractionFunction(10,4);

function subtractionFunction(a,b){
  return a-b
}
console.log(subtraction); //6

/** Question (9-5-4)
 * Initialise the variable divide to a function called divide function with the parameters of 12 and 4
 * calculate 12 div by 4. console log
 */

var divide = divideFunction(12,4)
function divideFunction(a,b){
  return a/b
}
console.log(divide);