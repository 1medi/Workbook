/** Question (5-1-1)
 * Initalise a variable called x to the value of 12. Initalise another variable called sentence to the sentence "There were _ candies in the jar." Use backticks. 
 * Console log.
*/

var x = 12; 
var sentence = `There were ${x} candies in the jar.`;

console.log(sentence);

/** Question (5-1-2)
 * Initalise a variable called age to the value 45. Initialise another variable called sentence to the sentence "The adult was _ years old" Use backticks
 * Console log.
 */

var age = 45;
var sentence = `The adult was ${age} years old.`;

console.log(sentence);


/** Question (5-1-3)
 * Initalise a variable called first name to the value Mark. Initialise a variable called last name to the value Jameson. Initialise the variable Job to the value Graphic Designer.
 * Initialise another variable called Sentence to the sentence "_ _ was hired as a _"
 * Console log.
 */

var firstName = "Mark";
var lastName = "Jameson";
var job = "Graphic Designer";

var sentence = `${firstName} ${lastName} was hired as a ${job}.`;

console.log(sentence);

/** Question (5-1-4)
 * Initialise a variabled called pet name to the value Sandy. Initialise a variable called age to the value 2. Initialise a variable pet type to the value dog. Initialise another
 * variable called sentence to the sentence "_ is a _. She is _ years old"
 */

var petName = "Sandy";
var age = 2;
var petType = "dog";

var sentence = `${petName} is a ${petType}. She is ${age} years old.`;

console.log(sentence);

/** Question (5-1-5)
 * Initialise the variable called text to the sentence It's sunny outside today. Then console log
 */

var text = `It's sunny outside today.`;
console.log(`${text}`);

/** Question (3-1-6)
 * Initialise the variable called text to the sentence I don't have a pet dog. Then console log
 */

var text = `I don't have a pet dog.`;
console.log(`${text}`);

/** Question (5-1-7)
 * Initialise the variable called number to the number 3. Initialise the variable text to the sentence What are the _ Good Design Goals
 */

var number = 3;
var sentence = `What are the ${number} Good Design Goals`;

console.log(sentence);

/** Question (5-1-8)
 * Initialise the variable called text to the sentence The title of the book is called "Design Patterns"
 */

var text = `The title of the book is called 'Design Patterns.' `;
console.log(`${text}`);

/** Initialise the variable called symbol to the variable containing \\. Initialise the variable called text to the sentence The symbol of the backslash is \.
 * Then console.log
 */
 
var symbol = "\\";
var text = `The symbol of the backslash is ${symbol}.`;

console.log(`${text}`);

/** Concatenation 
 * Question (5-2-1) 
 * Intialise a variable called x to the value 12. Initialise another variable called sentence to the sentence "There were _ candies in the jar."
 * concatenate then conole log
*/

var x = 12;
var sentence = "There were " + x + " candies in the car.";

console.log(sentence);

/** Question (5-2-2)
 * Initialise a variable called age to the value 45. Initialise another variable called sentence to the sentence "The adult was _ years old."
 * Add using concatenation, Console log
 */

var age = 45;
var sentence = "The adult was " + age + " years old.";

console.log(sentence);

/** Question (5-2-3)
 * Initialise the variable called first name to the value Mark. Initialise a variable called last name to the last name Jameson. Initialise a variable called job to the value graphic 
 * designer. Initialise another variable called sentence to the sentence "__ was hired as a _"
 * Concatenation, console log 
 */

var firstName = "Mark";
var lastName = "Jameson";
var job = "Graphic Designer";

var sentence = firstName + " " + lastName + " was hired as a " + job

console.log(sentence);

/** Question (5-2-4)
 * Initialise a variable called pet name to the value Sandy. Initialise a variable called age to the value 2. Initialise a variable pet type to the value dog. Initialise another variable
 * called sentence to the sentence "_ is a _. She is _ years old."
 * Concatenation, Console log
 */

var petName = "Sandy";
var age = "2";
var petType = "dog";

var sentence = petName + " is a " + petType + ". She is " + age + " years old.";

console.log(sentence);

// Double Quotes

/** Question (5-3-1)
 * Initialise the variable called text to the sentence It's sunny outside today. 
 * use double quotes, console log
 */

var text = "It's sunny outside today."

console.log(text);

/** Question (5-3-2)
 * Initialise the variable called text to the sentence I don't have a pet dog. 
 */

var text = "I don't have a pet dog.";

console.log(text);

/** Question (5-3-3)
 * Initialise the variable called text to the sentence What are the 3 Good Design Goals?
 */

var text = "What are the 3 Good Design Goals?";

console.log(text);

/** Question (5-4-4) (MAYBE AKS)
 * Initialise the variable called text to the sentence The title of the book is called "Design Patterns"
 */

var text = "The title of the book is called 'Design Patterns.' ";

console.log(text);

/** Question 5-3-5
 * Initialise the variable called text to the sentence The symbol of the backlash is \
 */

var text = "The symbol of the backslash is \\.";

console.log(text);

//(5-4-0) Single Quotes

/** Question (5-4-1)
 * Initialise the variable called text to the sentence It's sunny outside today
 */

var text = ' It\'s sunny outside today.';

console.log(text);

/** Question (5-4-2)
 * Initialise the variable called text to the sentence I don't have a pet dog.
 */

var text = ' I don\'t have a pet dog.';

console.log(text);

/** Question (5-4-3)
 * Initialise the variable called text to the sentence WHat are 3 Good Design Goals?
 */

var text = 'What are the 3 Good Design Goals?';

console.log(text);

/** Question (5-4-4)
 * Initialise the variable called text to the sentence The title of the book is called 'Design Patterns.'
 */

var text = 'The title of the book is called \'Design Patterns.\' ';

console.log(text);

/** Question (5-4-5)
 * Initialise the variable called text to the sentence The syymbol of the backslash is \.
 */

var text = ' The symbol of the backslash is \\.'
 
console.log(text);

// (5-5-0) Format Specifiers 
/** Question (5-5-1)
 * Have the name Tom formatted in the console log directly using the specifier to format a string. The string will say Tom will be buying a car today
 */

console.log('%s will be buying a car today', "Tom");

/** Question (5-5-2)
 * Have the place Vancouver formatted in the console log directly using the specifier to format a string
 * The string will say Vancouver is an expensive place
 */

console.log('%s is an expensive place', "Vancouver");

/** Question (5-5-3)
 * Format as integer
 * Have the year 1975 formatted in the console log directly using the specifier to format an integer 
 * The string will say: Microsoft started in 1975
 */

console.log("Microsoft started in %i.", '1975');

/** Question (5-5-4)
 * Have the age 35 formatted in the console log using the specifier to format an integer 
 * John is 35 years old
 */

console.log('John is %d years old', "35");

/** Question (5-5-5)
 * Have the cups 3.5 formatted in the console log directly using the specifier to format a floating point
 * I drank 3.5 cups of water 
 */

console.log("I drank %f cups of water." , '3.5');

/** Question (5-5-6)
 * Have the value of PI, 3.14 formatted in the console log directly using the specifier to format a floating point 
 * THe value of pi is 3.14
 */

console.log("The value of pi is %f." , "3.14");

/** Question (5-5-7)
 * Format the sentence using a string and integer 
 * Have the name of sara and age 50 formatted in the console log directly using the specifier to format the string and interger 
 * Sara is 50 years old
 */

console.log("%s is %i years old." , 'Sara', 50);


/** Question (5-5-8)
 * Have the name John and age 45 formatted in the console log directly using the specifier to format the string and integer. 
 * John is 45 years old
 */

console.log("%s is %i years old", 'John', 45);
