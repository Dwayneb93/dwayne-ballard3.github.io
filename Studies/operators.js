/**
 * OPERATORS:
 * 
 * 0. Operators act on our data. They do so by assigning data to variables, comparing them, or performing arithmetic operations. 
 * Operators are classed by what they do and by how many operands they require. Operands are the values that the operators
 * act on. 
 */

// 1. Assignment Operators //
// By using ONLY an (=) sign, we can assign a value to a variable. 
let firstName = "Dwayne"; // The "=" sign assigns the variable firstName to a string value of "Dwayne".

// You can also simultaneously add AND assign something to an already existing variable.
firstName += " Ballard"; // <-- accounted for a space before the rest of string here. The "+=" operator adds and reassigns the variable
// firstName to whatever firstName is PLUS what follows the operator.
console.log(firstName); // prints --> "Dwayne Ballard"

// The other operators include -=, /=, *=, %= (remainder); All of these do the same thing as += above, but in respect to their math (except %).

// 2. Arithmetic Operators //
// These are operators that take numerical values, either constant expressions or statements, as their operands and returns a single value.
// subtraction (-), addition (+), division (/), multiplication (*), remainder (%), exponent (**)
var subtract = 9 - 2;
var addition = 10 + 5;
var division = 25 / 5;
var multiplication = 6 * 6;
var remainder = 4 % 2; // 4 divided by 2 leaves a remainder of what
var exponent = 5**3; // 5 to the power of 3
console.log(subtract, addition, division, multiplication, remainder, exponent); // prints --> 7, 15, 5, 36, 0, 125

// 3. Comparison Operators //
// A comparison operator compares its operands and returns a boolean value based on whether the comparison is true or false.
/*
    ==      !=              ===                !==                 >                >=               <              <=
   Equal  Not Equal   Strictly Equal   Strictly Not Equal     Greater Than   Greater/Equal to    Less Than    Less/ Equal to

   Strictly AND Not Strictly refers to being the EXACT SAME/DIFFERENT as in the same data type AND the same value
*/
var looseEquals = "555" == 555; // If logged, would print: true, because this is a "loose equal" which doesn't consider data types of string vs number.

var strictEqual = "Braum" === "braum"; // If logged, would print: false, because this is a "strictly equal" comparison which means it has to be the EXACT same value.

var isItBigger = 5 > 4; // If logged, would print true because 5 is greater than the number 4.

var lessThanOrEqual = 100 <= 100; // If logged, would print true because 100 is less than or equal to the number 100.

// 4. Logical Operators //
// These are used to determine the logic between certain variables, values, statements, etc. They resolve to either true or false.
    // a. Logical And (&&) Operator
        // Will return true if BOTH of the operands pass for true, and will return false otherwise
        let x = 500;
        console.log(x > 450 && x < 499); // prints --> false, because 500 is greater than 450 BUT NOT less than 499.

    // b. Logical Or (||) Operator
        // Will return true if ONE of the operands test true, and false if NEITHER pass. 
        let y = 4;
        console.log(y < 5 || y > 2); // prints --> true, because y is NOT less than 5 BUT it IS greater than 2
    
    // c. Logical Not (!) Operator or Bang Operator
        // Will flip the logic of the statement. It will return false if its operand can be converted to true, otherwise true will return. 
        var flippedLogic = "Dwayne" !== "dwayne"; 
        console.log(flippedLogic); // prints --> true, because "D" IS NOT EQUAL to "d" on these two strings

// 5. Unary Operators (!, typeof, -) //
// Is an operation with ONLY ONE operand. Examples include typeof and delete
var randomObj = {
    name: "Heather",
    age: 27
};
delete randomObj.name;
console.log(randomObj); // prints --> { age: 27 };
// In this case, the single operand only did one thing. It deleted one item.

// 6. Ternary Operators (1 ? b : c) //
/* The conditional operator is the ONLY JS operator that takes 3 operands. The operator can have one of two values based on a
condition.

condition ? if true, if false
condition ? val1: val2;

*/
var status = (21 >= 18) ? true : false;
console.log(status); // prints --> true

