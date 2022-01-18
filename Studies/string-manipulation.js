/**
 * STRING MANIPULATION
 * 
 * 0. Refers to how strings are manipulated, changed, moved, handled, used, etc. in JavaScript. There are two 
 * ways in which strings may be manipulated. This is either by string methods or by assignment operators. 
 * 
 */

// 1. You can manipulate strings by using assignment operators (+=) //
var time = "The time of day is...";
console.log(time); // prints --> "The time of day is..."
time += "nighttime";
console.log(time); // prints --> "The time of day is...nighttime"

// You can also just add different string variables together with a single operator. ** Account for spaces **
var string1 = "My favorite colors are";
var string2 = "black & blue";
var string3 = string1 + " " + string2;
console.log(string3); // prints --> "My favorite colors are black & blue"

// To avoid having to account for spaces, we can use STRING INTERPOLATION
// enclose string in backticks ``, and enclose each variable like so ${variableName}
var string4 = `${string1} ${string2}`;
console.log(string4); // prints --> "My favorite colors are black & blue"

// 2. String Manipulation via Methods //
// There are various built-in methods used to manipulate strings.

// You can use the slice() method to extract a part of a string and return that extraction as a new string.
let string = "kittens";
let lonelyKitty = string.slice(0, string.length-1); // starts at 0 index and ends at the length of the string - 1. Slices out these values and places them into a new string
console.log(string); // prints --> "kitten"

// You can also use the replace( ) method to replace a specified value with another value in a string.
let text = "Thanks for visiting Louisiana!";
let newText = text.replace("Louisiana", "New Orleans");
console.log(newText); // prints --> "Thanks for visiting New Orleans!"

// You can also use .toUpperCase or .toLowerCase() to change the case of a string.
let favSupport = "nami";
let capitalFirst = favSupport[0].toUpperCase() + favSupport.slice(1);
console.log(capitalFirst); // prints --> "Nami"

let mockery = "YoU sHoUlD WaLk FaSTeR";
let advice = mockery.toLowerCase();
console.log(advice); // prints --> "you should walk faster"

// You can also turn values that aren't strings INTO a string by using toString();
let myFavNum = 11;
let numString = myFavNum.toString();
console.log(numString); // prints --> "11"

// Another string manipulation method is split which turns a string into an array of strings separated at the indiciated character between the ("").
let plea = "I want to leave";
let wordsArray = plea.split(" ");
console.log(wordsArray); // prints --> ["I", "want", "to", "leave"]

