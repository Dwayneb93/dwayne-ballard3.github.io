/**
 * DATA TYPES:
 * 
 * 0. Data types refer to the types of data our values can be. We will see and work with each 
 * kind of data type while coding. There are 2 main data types: 
 *      1. Simple/Primitive
 *      2. Complex
 * 
 */

// 1. Primitive/Simple Data Types//
/* These types do not hold or collect other values (i.e numbers, strings). Operations on primitive data
values will return a NEW primitive value. They do not alter the original. Primitive data
types copy by value; which means that when assigning or passing, simple data types
are COPIED from one variable to the next. 
*/
    // COPY BY VALUE //
var a = 8;
var b = a; // value b is pointing to its OWN COPY of 8 from var a.
b = 3; // this is not affecting var a because a is pointing to a primitive data type.. 
//so at this point we are pointing to our OWN COPY of 8

console.log(a); // prints --> 8
console.log(b); // prints --> 3

// 2. Complex Data Types //
/* These data types aggregate other values and are indefinite in size. They are copied by REFERENCE, which
means that when assigning or passing them, they are passed by reference. Arrays, objects, and functions
are considered complex data types.
*/
    // COPY BY REFERENCE //
var x = {
    name: "Nami"
};

var y = x; // y and x are pointing to the SAME value in code because x is a COMPLEX data type
// which means that it is copied by REFERENCE

y.name = "Fizz";
console.log(x); // prints --> an object x = { name: "Fizz" };

x.role = "Mage";
console.log(y); // prints --> an object y = { name: "Fizz", role: "Mage" };

// Changes to EITHER variable will cause the data they both point towards to change.

// 3. Number //
// This is a primitive data type used to represent numerical data such as numbers, decimals, etc.
let num = 1500;
console.log(num); // prints --> 1500 to the console as a *NUMBER* data type

// 4. String //
// A string is a primitive data type represented by a sequence of characters and/or digits wrapped in quotes "".
const string = "I am changing my future!";
console.log(string); // prints --> "I am changing my future!"

// 5. Boolean //
// Is a primitive data type that is used for logic and can ONLY be either TRUE or FALSE.
var customerBalance = {
    name: "Dwayne",
    creditAvailable: 3420,
    nextBill: 50,
    statusPaid: false
};
console.log(customerBalance.statusPaid); // prints --> false

// 6. Array //
// An array is a complex data type. It is an indexed list-like object that holds data withing brackets [ ].
let myBestFriends = ["Heather", "Nick", "Tia", "Dylan", "Myles"];

// use bracket notation to access certain values at their index.
console.log(myBestFriends[0]); // prints the value at 0 index --> "Heather"

// Arrays can hold objects, functions, and other arrays, too!
var randomArr = [{ name: "Anivia", role: "Mage", main: true }, ["Bananas", 8], ["Dwayne", 28]];
console.log(randomArr[1]); // prints --> ["Bananas", 8]

// 7. Object //
/* An object is a complex data type that stores various KEY-VALUE pairs. The KEY is always a string
that refers to a specific property. The VALUE refers to the actual data being stored to the key. An object
is enclosed with curly braces { }.
*/
var pokemon = {
    name: "Cramorant",
    type: "Water",
    abilities: ["Dive", "Whirlpool", "Air Slash"]
};
// Use dot OR bracket notation to access a certain key's value within an object
console.log(pokemon.abilities[2]); // prints --> "Air Slash"

// 8. Function //
/* A function is a complex data type that is a set of statements that perform a task or calculates
a value. A function definition (or function declaration) consists of the *function* keyword followed
by the name of the function, then the list of parameters that are enclosed in parentheses, then the
code block which is enclosed by curly braces { }.
*/
function capitalize(string) {
    console.log(string.toUpperCase());
}
// Below, is a function CALL or how you INVOKE a function
capitalize("hello"); // prints --> "HELLO"

// 9. Undefined //
// Is a primitive data type that has no value or has not been initialized.
let secret;
console.log(secret); // prints --> undefined

// 10. Null //
// Is a primitive data type that has no value and is INTENTIONALLY nullified by a programmer
var nonExistent = null;
console.log(nonExistent); // prints --> null

// 11. NaN //
// Is a primitive data type that represents not-a-number.
let num = 5;
let string = "Yoshi";
console.log(isNan(string)); // prints --> true because "Yoshi" is, indeed, NOT a number.
console.log(isNaN(num)); // prints --> false, because num IS, actually, a number.

// 12. Infinity and -Infinity //
/* These are primitive data types represented as a numeric value. Infinity represents a positive number
that is greater than no other. -Infinity represents a number that is smaller than no other.
*/
var number1 = 777 * Infinity;
console.log(number1); // prints --> Infinity
var number2 = 888 * -Infinity;
console.log(number2); // prints --> -Infinity

console.log(number2 > number1); // prints --> false, because negative infinity is smaller than positive infinity


