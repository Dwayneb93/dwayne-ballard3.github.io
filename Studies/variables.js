/**
 * VARIABLES:
 * 
 * 0. Variables are named identifiers that are bound to a scope within our application. They can be considered as a container for values.
 * These values can either be primitive (types of data such as strings, numbers, and booleans) or complex (types of data such as
 * objects, arrays, and functions).
 * 
 * 1. A variable is created by using the var keyword, followed by an identifier or name. 
 * 2. There are two phases to using variables: declaration and initialization/assignment.
 */

// 1. Declaration //
// This is when we use the var, let, or const keywords and give it a name.
var firstName; // <--- Notice the camelCase when declaring variables. 
console.log(firstName); // prints --> undefined, since the variable has NOT yet been initialized.

// 2. Assignment or Initialization //
// This is when a value is assigned to the declared variable.
firstName = "Dwayne";
console.log(firstName); // prints --> Dwayne

// 3. Re-assignment //
// This is when you change or update the value of a previously assigned variable.
firstName = "Michael";
console.log(firstName); // prints --> Michael

// 4. var, let, const //
/**
 * These are the keywords that are used to declare variables. However, they each have different behaviors associated with them
 * when used. Let and const variables are declared in the same way as the var.
 * 
 * var, as shown above, CAN BE reassigned. This is ALSO TRUE for the let keyword.
 * HOWEVER, the const variable CANNOT be reassigned, and you are UNABLE to leave a const variable unassigned.
 *      i.e. const lastName; <--- will throw an error because it is not initialized
 */
let favCharacter;
favCharacter = "Tristana";
console.log(favCharacter); // prints --> Tristana
favCharacter = "Thresh";
console.log(favCharacter); // prints --> Thresh

const lanePref; // SYNTAX ERROR - cannot leave const variables unassigned
lanePref = "Bottom";
console.log(lanePref); // prints --> Bottom
lanePref = "Support";
console.log(lanePref); // prints --> TYPEERROR - assignment is made to a constant variable. CANNOT reassign variables declared with const

// 5. Scope //
/**
 * Refers to a space in the code where certain variables can be used after the variable has been declared. Every tiome a code 
 * block is created using either a loop, an if-elseif-else statement, or a function, a new scope is created. (loop blocks, if blocks, functions).
 * 
 * var values will be stuck to the function (function scoped) but will NOT be stuck to if-statements or loops.
 * 
 * let and const values will be stuck in the scope of ANY code block they are in, so they are considered block-scoped variables.
 */
for (var i = 0; i < 3; i++) {
    var chant = 'Go!';
}
console.log(chant); // prints --> Go! because var isn't stuck to if-statements or loops, However...

function exampleFunc() {
    var x = 5;
    let y = 10;
    const z = 15;
}
console.log(x, y, z); // prints --> undefined for all
exampleFunc(); // x, y, and z are all NOT accessible outside of the function. 

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a, b, c); // prints --> 10, undefined, undefined. Var variables are not block scoped.

for (var i = 0; i < 5; i++) {
    var d = 100;
    let e = 200;
    const f = 300;
}
console.log(d, e, f); // prints --> 100, undefined, undefined. Again, let and const are block scoped, while var is NOT.

// 6. Hoisting //
/**
 * In JavaScript, before the statements of a program are executed, ALL var and function declarations are dragged (hoisted)
 * to the top of the program. Because of this, var values will not return a reference error. If you try to refer to them BEFORE
 * they are declared, they will return undefined. ONLY the DECLARATION is brought to the top, NOT the initialization. 
 */

console.log(highestRank); // print --> undefined. The program sees the variable, but NOT the value.

var highestRank = "Platinum";

console.log(highestRank); // print --> Platinum. The variable has been declared at this point in the code, so the program can see the value.

// let and const values are NOT hoisted. Therefore, you will get a reference error if you try to refer to them before they are declared. 

console.log(age); // print --> REFERENCE ERROR
console.log(sign); // print --> REFERENCE ERROR

let age = 28;
const sign = "Scorpio"; // both of these values can be logged/accessed after this point since they have been declared. They don't get hoisted. 