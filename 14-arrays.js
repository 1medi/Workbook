var pets = ["bird", "cat", "dog"]
console.log(pets);

var cellPhones = ["iphone" , "Samsung"]
console.log(cellPhones);

var schoolPrograms = ["Computer Science" , "Business" , "Arts"];
console.log(schoolPrograms);

var supplies = ["erasers" , "" , "pens", "", "paper"];
console.log(supplies);

var pets = ["bird", "cat", "dog"]
pets.pop()
console.log(pets);

var supplies = ["erasers" , "" , "pens", "", "paper"];
supplies.pop()
console.log(supplies);

var schoolPrograms = ["Computer Science" , "Business" , "Arts"];
schoolPrograms.push("Medicine")
console.log(schoolPrograms);

var schoolPrograms = ["Computer Science" , "Business" , "Arts"];
schoolPrograms[1] = "Medicine"
console.log(schoolPrograms);

var cars = new Array("Toyota", "Ford", "BMW", "Nissan");
console.log(cars);

var starbucksHotDrinks = new Array("Hot Chocolate","Caramel Apple spice", "Steamed Milk", "Vanilla Steamer")
console.log(starbucksHotDrinks);

var schoolPrograms = [];
schoolPrograms[0] = ["Computer Systems (Database)", "Computer Systems (Human Computer Interface", "Computer Systems (Network Security Administration"]
schoolPrograms[1] = "business";
schoolPrograms[2] = "arts";
console.log(schoolPrograms);

var schoolPrograms = ["computer science", "business" , "arts"];
var schoolProgramsTwo = ["medicine", "construction"];
console.log(schoolPrograms.concat(schoolProgramsTwo))

var schoolProgramsOne = ["computer science", "business", "arts"]
var schoolProgramsTwo = ["medicine", "contruction"]
var totalSchoolPrograms = schoolPrograms.concat(schoolProgramsTwo);
console.log(totalSchoolPrograms.slice(1,4));

function swap(arr){
  var hold = arr[0]
  arr[0] = arr[1];
  arr[1] = hold;
  return arr;
}
var item = ["hello", "world"]
console.log(item);

console.log(swap(item));

function fruitBasket(arrayFruits, size){
  var sentence = ''
  sentence = `The number of fruits in the basket is ${size}.\n The types of fruits in the basket are: ${arrayFruits[0]}, ${arrayFruits[1]}, ${arrayFruits[2]}.`
  console.log(sentence);
}
var fruits = ["apple", "oranges", "bananas"];
fruitBasket(fruits, fruits.length);

/**
 * @desc 
 * @param {*} 
 * @param {*} 
 * @returns 
 */

function space(arrayPlanets, size){
  if (arrayPlanets[2] == "Earth" && size == 9){  
    return sentence = `You are on planet ${arrayPlanets[2]}.`
  } return sentence = "Not the right planet."
}

var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
var sentence = space(planets,planets.length)
console.log(sentence);
