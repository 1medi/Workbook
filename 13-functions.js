// 13-1-0 Functional Commenting

/** 13-1-1
Initialise a variable called chips to a function called chip box. Use camel case where needed. 
The first parameter is Doritos. 
The second parameter is 5. 
The third parameter is Pringles. 
The fourth parameter is 4.
Initialise a variable called calculation to the value of zero.
Set up the function of chip box to contain the default parameters of option one, number of option one, option two, number of option two. 
Inside the function add number of option one and number of option two together which is assigned to those values that are added. 
Then return a sentence to say:
I have 5 Doritos and 4 pringles. This gives me a total of 9 chips.
Write the description, four parameters and the return in documentation notes above the function.
Then console log out the chips at the end.
 */

var chips = chipBox("Doritos", 5, "Pringles", 4);
var calculation=0;

/**
 * @desc Seeing how many doritos and pringles are in the bag
 * @param {*} optionOne is doritos
 * @param {*} numberOfOptionOne is the number of doritos
 * @param {*} optionTwo is pringles
 * @param {*} numberOfOptionTwo is the number of pringles
 * @returns a string that tells us what chips and how many we have
 *  */ 

function chipBox(optionOne,numberOfOptionOne,optionTwo,numberOfOptionTwo){
  calculation = numberOfOptionOne + numberOfOptionTwo

  return "I have " + numberOfOptionOne + " " + optionOne + " and " + numberOfOptionTwo + " " + optionTwo + ". This gives me a total of "
  + calculation + " chips."
}
console.log(chips);

// 13-2-0 Functions with Returns

/** 13-2-1
 * initialise the var x to the function called my function. Multiply a times b in the function. Return the answer
 * console log the value below the function
 * Add the answer as a single line comment
 * comment above function to describe it
 */

var x = myFunction(80,8);
calculation = 0;

/**
 * @desc Seeing the total of a times b
 * @param {*} a is the first number in the equation
 * @param {*} b is the second number in the equation
 * @return a string that tells us the result of a times b
 */

function myFunction(a,b){
  calculation = a * b

  return "The result is " + calculation + "."
}
console.log(x); // 640

/**
 * 13-2-2
Initialise the variable shopping to the function called my shopping list. 
Have parameter values be 12 and 4. Multiply quantity time price in the function. Return the answer. 
Then console log the value below the function. Add the answer as a comment. 
Write a multiline comment above the function to describe it. */

var shopping=myShoppingList(12,4);
calculation = 0;

/**
 * @desc Find out how much our cans of soup is
 * @param {*} quantity 
 * @param {*} price how much 
 * @returns shows us the grand total of our soup
 */
function myShoppingList(quantity,price){
  calculation = quantity * price

  return "The " + quantity + " cans of soup cost $" + calculation + "."
}
console.log(shopping); // 48



/**
 * 13-2-3 
 * Initialise the variable x to the function called myFunction. 
Have the function take in the numbers 5 and 6. Return the answer a multiplied by b. 
Then console log the value below the function. Add the answer as a single line comment. 
Write a comment above the function to describe it.
Next, create a variable d and give it the value of 5. 
Initialise another variable z to the function called addingFive. 
Make addingFive take in the variables x and d. 
Then inside the function add the variables g and h.
After the function console log out the variable z. 
Write a comment above the function to describe it. Add a comment to give the answer.
 */

var x = myFunction(5,6);

/**
 * @desc The function that multiplies 2 values
 * @param {*} a 
 * @param {*} b 
 * @returns a string that shows the result of multiplying a and b
 */
function myFunction(a,b){

  return a * b; // 30
}
console.log(x);

var d = 5;
var z = addingFive(x,d)
/**
 * @desc A function that multiplies 2 values
 * @param {*} g the value of g
 * @param {*} h the value of h
 * @returns a string that displays the result of g times h
 */
function addingFive(g,h){
  return g + h;
}
console.log(z); //30.5

/** 13-2-4
 *Take the question 15-3 we just did above and organise it in terms of having the variables at the top
 then the function followed by the console log each time. */

var d = 5;
var x = myFunction(5, 6); var z = addingFive(x, d);
/**
* @desc the function that multiplies two values
@param {*} a the value of a
@param {*} b the value of b
* @returns the multiplied value of a and b
*/

function myFunction(a, b) {
return a * b;
};
console.log(x); // 30

/**
* @desc the function that multiplies two values
@param {*} g the value of g
@param {*} h the value of h
@returns the multiplied value of g and h
*/

function addingFive(g, h) {
return g + h;
};
console.log(z); // 35


/** 13-2-6 
 * Inialise a function called sentence function that takes in the name and age. 
 * This will return the sentence My name is __name__ and I am _age_ years old.
 * Write a variable called person one and make it equal to the sentence function that has the values George Smith and 25.
 * Then console log out person one. */

/**
 * @Desc Provides a description of a person
 * @param {*} name Provides first and last name of person
 * @param {*} age Provides the age of the person
 * @returns a sentence about the person
 */

function sentenceFunction(name, age){
  return "My name is " + name + " and I am " + age + " years old."
}
var personOne = sentenceFunction("George Smith" , 25)
console.log(personOne);

/** 13-2-7
 * Initialise a function in one line using the variable first name. 
 * This function should be called name fix. This will take in the value george which is all lowercase.
 * Initialise the second function to the variable person one. This function should be called sentence function.
 * This will take in the value of the first name we just created and also the number 25.
 * Below the variables just created write the function for sentence function which takes in the values first name and age.
 * Then have it return the sentence saying: My name is _firstName_ and I am _age_ years old. Write functional comments.
 * Initialise the second function that is called name fix and have it take in the first name.
 * Then have it return the name formatted the proper way with the first letter being capitalised. Write functional comments.
 * Lastly, at the bottom console log out person one. Write the output in a single line comment. */

var firstName = nameFix("george")
var personOne = sentenceFunction(firstName, 25)

function sentenceFunction(firstName, age){
  return "My name is " + firstName + " and I am " + age + " years old."
}

function nameFix(firstName){
  return firstName[0].toUpperCase() + firstName.substring(1);
}
console.log(personOne);

// 13-3-0 Functions Without Returns

/** 13-3-1
Initialise the variable number to the value of 10
Initialise the variable sentence to an empty string
Setup a function that is called info and has the parameter digit.
Inside the if statement add a if statement that checks to see if digit is equal to 10. 
If it is then console log out the sentence: You guessed right
Else then console log out: You did not guess correctly
Call the function info and pass the variable number in the brackets.
Write a single line comment as to what will be displayed. */

var number = 10;
var sentence = "";

function info(digit){
 if (digit == 10){
console.log("You guessed right");
} else {
  console.log("You did not guess correctly")
}
}
info(number); // You guessed right

/** 13-3-2
Initialise the variable hobby to the value of gardening Initialise the variable city to the value of vancouver
The word vancouver will be all lowercase.
Setup a function called sentence that has the parameters of activity and location
Inside the function setup an if statement that will check if activity is equal to gardening. 
If it is true then console log out(use concatenation and make sure the first letter of the location is capitalized):
I live in _location___ and I like ___activity____.
Else then console log out:
Not the right hobby.
Call the function sentence under the function that passes the variables hobby and city. */

var hobby = "gardening";
var city = "vancouver";

function Sentence(activity,location){
  if(activity == "gardening"){
    console.log("I live in " + location[0].toUpperCase() + location.slice(1) + " and I like " + activity + ".")
  } else {
    console.log("Not the right hobby.");
  }
}

Sentence(hobby,city); // i live in Vancouver and I like gardening

/** 13-3-3
Initialise the variable first name to the value of Steven
Initialise the variable age to the value of 14
Initialise the variable country to the value of Canada
Initialise the variable minimum age as a magic number to the value of 16 
Initialise the variable law in country as a magic number to the value of Canada
Setup a function called drive that takes in the parameters of name, year and location. 
Inside the function add an if statement that checks if year is greater than or equal to minimum age AND location is equal to law in country. 
If it is then console log out the sentence:
__name___ you are able to get your licence.
Else then console log out:
__name__ you are too young.
Call the function called drive that passes the values of first name, age and country */

var firstName = "Steven";
var age = 14;
var country = "Canada";
var MINIMUM_AGE = 16;
var LAW_IN_COUNTRY = "Canada";

/**
 * @desc To check if a person is eligible to drive based on where they live
 * @param {*} name first name of the person
 * @param {*} year the age of the person
 * @param {*} location country in which the person lives
 */

function drive(name,year,location){
  if (year >= MINIMUM_AGE && location == LAW_IN_COUNTRY){
    console.log(name + " you are able to get your license!")
  } else {
    console.log(name + " you are too young.")
  }
}
drive(firstName,age,country); // Steven you are too young

/** 13-3-4
Setup a function called find grade that has the parameters of name and marks 
Setup the following if/else statements (Use backticks)
If marks are greater than or equal to 85 AND less than or equal to 100. 
Then console log out the message: ______name____ you got an A.

Else If marks are greater than or equal to 70 AND less than 85. 
Then console log out the message: you got a B.

Else If marks are greater than or equal to 50 AND less than 70. 
Then console log out the message: name you got a C.

Else If marks are greater than or equal to 0 AND less than 50. 
Then console log out the message: _name______ you have failed.
Else then console log out the sentence: Invalid mark of _marks____.

Then under the function call the function with the following values 
(write a single line comment beside each one of them once you run it):

Sarah, 91
George, 85
Sam, 73
Emily, 53
Tom, 20
Wilson, 120 */

/**
 * @desc To check a students letter grade based on test score
 * @param {*} name first name of student
 * @param {*} marks score achieved in test
 */

function findGrade(name, marks){
  if(marks >= 85 && marks <= 100 ){
    console.log(name + " you got an A")
  } else if(marks >= 70 && marks < 85){
    console.log(name + " you got a B")
  } else if(marks >= 50 && marks < 70){
    console.log(name + " you got a C")
  } else if(marks >= 0 && marks < 50){
    console.log(name + " you have FAILED.")
  } else{
    console.log("Invalid mark of " + marks)
  }
}

findGrade("Sarah", 91); // Sarah you got an A
findGrade("George", 85); // George you got an A
findGrade("Sam", 73); // Sam you got a B
findGrade("Emily", 53); // Emily you got a C
findGrade("Tom", 20); // Tom you have FAILED.
findGrade("Wilson", 120); // Invalid mark of 120

/** 13-3-5
Setup a function that is called evaluate numbers that has the parameters of num1, num2, and operator
Inside the function add the following if/else statements
If the operator is equal to add then console log out the sentence:
Sum of _num1___ and ____num2____ is .
Else if the operator is equal to subtract then console log out the sentence: Difference of ____num1___ and _num2__is
Else if the operator is equal to multiply then console log out the sentence: Product of __num1____ and ____num2_is
Else if the operator is equal to divide then console log out the sentence: Division of ____num1___ and ____num2____ is
Else if the operator is equal to modulus then console log out the sentence: Modulus of ____num1____ and ____num2____ is
Else then console log out the sentence:
_operator____ is a invalid operation.
Call the function evaluate numbers with the following parameters (write a single line as to what will be displayed for each of them):

15,10, add
20, 8, subtract
12, 4, multiply
28, 7, divide
22, 3, modulus
31, 3, square
 */

function evaluateNumbers(num1, num2, operator){
  if(operator == "add"){
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}.`)
  } else if (operator == "subtract"){
    console.log(`Difference of ${num1} and ${num2} is ${num1 - num2}.`)
  } else if (operator == "multiply"){
    console.log(`Product of ${num1} and ${num2} is ${num1 * num2}.`)
  } else if (operator == "divide"){
    console.log(`Division of ${num1} and ${num2} is ${num1 / num2}.`)
  } else if (operator == "modulus"){
    console.log(`Modulus of ${num1} and ${num2} is ${num1 % num2}.`)
  } else {
    console.log(`${operator} is an invalid operation`)
  }
}
evaluateNumbers(15,10, "add");
evaluateNumbers(20, 8, "subtract");
evaluateNumbers(12, 4, "multiply");
evaluateNumbers(28, 7, "divide");
evaluateNumbers(22, 3, "modulus");
evaluateNumbers(31, 3, "square");