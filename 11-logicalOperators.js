// 11-1-0 And &&

/** 11-1-1
 * Initialise the variable x to the value 10. Initialise the variable y to the value 6. First console log out x > 5 (greater than)
 * && (and) y < 11 (less than)
 * Add single line comment
 */

var x = 10;
var y = 6;
console.log(x > 5 && y < 11); // true

/** 11-1-2
 * Initialise the variable x to the value 10. Initialise the variable y to the value 6. First console log out x > 11 (greater than)
 * && (and) y < 11 (less than)
 * Add single line comment
 */

var x = 10;
var y = 6;
console.log(x > 11 && y < 11); //false

/** 11-1-3
 * Initialise the variable x to the value 10. Initialise the variable y to the value 6. First console log out x > 15 (greater than)
 * && (and) y < 8 (less than)
 * Add single line comment
 */

var x = 10;
var y = 6;
console.log(x > 15 && y < 8); //false

// 11-2-0 OR ||

/** 11-2-1
 * Initialise the variable x to the value 10. Initialise the variable y to the value 6. First console log out x > 5 (greater than)
 * || (or) y < 11 (less than)
 * Add single line comment
 */

var x = 10;
var y = 6;
console.log(x > 5 || y < 11); // true

/* 11-2-2
 * Initialise the variable x to the value 10. Initialise the variable y to the value 6. First console log out x > 5 (greater than)
 * || (or) y < 11 (less than)
 * Add single line comment
 */

var x = 10;
var y = 6;
console.log(x > 5 || y < 11); //true

// 11-3-0 NOT !

/** 11-3-1
 * Initialise the variable x to the value 10. Initialise the variable y to the value 6. First console log out x > 5 (greater than)
 * && (and) ! (not) y < 11 (less than)
 * Add single line comment
 */

var x = 10;
var y = 6;
console.log(x > 5 && !(y < 11)); // false

/** 11-3-2
 * Initialise the variable x to the value 10. Initialise the variable y to the value 6. First console log out !(not) x > 5 (greater than)
 * && (and) y < 11 (less than)
 * Add single line comment
 */

var x = 10;
var y = 6;
console.log(!(x > 5) && y < 11); // false

/** 11-3-3
 * Initialise the variable x to the value 10. Initialise the variable y to the value 6. First console log out ! (not) x > 15 (greater than)
 * || (or) y < 11 (less than)
 * Add single line comment
 */

var x = 10;
var y = 6;
console.log(!(x > 15) || y < 11); // true
