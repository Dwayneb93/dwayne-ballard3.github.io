/**
 * FUNCTIONS:
 * 
 * 0. Functions allow us to encapsulate a block of code, and execute that block of code whenever we want and
 * however many times we want. Functions take in parameters (inputs) when they are created and they accept arguments
 * (values) at the time of function call or when you invoke the function.
 * 
 * 1. There are two phases of using functions:
 *      1. declaration/definition: Is creating the function. You create a function with the function keyword &
 *          the following structure:
 *          function name (parameters) {
 *                  function body
 *              }
 * 
 *      2. invocation/calling/executing/applying: Is actually using the function.
 *          name(arguments);
 * 
 * 2. A function's parameters are the placeholders for the inputs, and the arguments are the actual inputs we use
 * to call the function, after it has been created, in order to use it.
 * 
 * 3. The syntax for a NAMED function is as follows:
 *  var myFunction = function namedFunction(parameters) {
 *      statements/code block
 *  }
 * 
 * 4. Above, is also how you ASSIGN a function to a variable. You declare the variable, and assign it to a function.
 * 
 * 5. Functions can OPTIONALLY take inputs and OPTIONALLY return a single value
 * 
 * // This is done via ARROW FUNCTIONS //
 * 
 * Arrow functions don't use the function keyword.
 * 
 * var nameOfFunction = (parameters/inputs) => {
 *      function body
 * }
 * 
 */
var greeting = () => {
    return "Hello World!";
}
greeting(); // prints --> "Hello World!"

// 6. Scope //
/* Scope refers to what variables or constants are accessible, where. There is Glboal and local scope.
Global scope is anything outside of functions, and local scopes are local to the function body. Generally,
functions enclose a scope and protect their variables from parent scopes, including global. Functions can access
the variables in their parent scopes but parent scopes CANNOT access variables in child scopes.
*/
// Global Scope //
let a = 1;
function doSomething() {
    a = 2;
}
console.log(a); // prints --> 1
doSomething();
console.log(a); // prints --> 2
// Above, a is accessible within the body or scope of doSomething(), and can therefore alter the value a contains.

// Function Scope or Local Scope //
function doSomething() {
    var a = 1;
    console.log(a);
}
console.log(a); // prints --> REFERENCE ERROR because a is not defined outside of the function scope

// Block Scope //
if (true) {
    var a = 1;
    let b = 2;
}
console.log(a); // prints 1, a is NOT block scoped
console.log(b); // throws a reference error because b is not defined.
// Variables declared with let or const are block scoped.

// 7. Closures //
/* Refers to maintaining access to values by enclosing them in function bodies. The function definition forms
a closure around the encironment in which it was defined. This means the invocation of the function has access to
variables of its parent scope. Functions form closures around the data they house. If an object returned from the function
is held in memory somwehere(referenced), that closure stays ALIVE, and data can continue to exist in these closures.
*/

function makePerson(nameFirst, nameLast) {
    var friends = [];
    return {
        nameFirst: nameFirst,
        nameLast: nameLast,
        addFriends: function() {
            Array.push.apply(friends, Array.slice.call(arguments));
        },
        getNumFriends: function() {
            return friends.length;
        },
        getFriendNames: function() {
            return friends.map(function(friend) {
                return friend.nameFirst + ' ' + friend.nameLast;
            })
            .join(", ");
        }
    };
};
/*
Above, when invoking makePerson(), the inner function definitions of addFriends(), getNumFriends(), getFriendNames() form closures
that carry with them a reference to the array stored in the friends variable.
*/
