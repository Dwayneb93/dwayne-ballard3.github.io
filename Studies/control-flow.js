/**
 * CONTROL FLOW:
 * 
 * 0. We are able to control the flow of an application or code by using conditional if or if-elseif-else statements OR
 * through the use of a switch statement. 
 * 
 */

// 1. Conditional Statements //
// Allow us to control the flow of our application by directing code based on conditions that are evaluated to a boolean value.
/* The anatomy of an if - else if - else statement is as follows:

if (condition tests for true) {
    do this
} else if (this condition tests true) {
    do this
} else { (this is the default statements... if all above tests for false, we come here)
    do this
}

Starts off with an if statement that tests a condition in parentheses. Inside the curly braces { } is the body of the
statement that is executed if the tested condition is true.
** Can have as many else-if statements and then the "else" statement at the end is a default to end the code chain. **

*/

var weatherToday = "sunny";
function weather() {
if (weatherToday === "cloudy") {
    console.log("No need for sunscreen!");
} else if (weatherToday === "rainy") {
    console.log("Nah, I'd rather an umbrella");
} else if (weatherToday === "sunny") {
    console.log("I'll take some sunscreen!")
}
}
weather(weatherToday); // prints --> "I'll take some sunscreen!"

// 2. Switch Statement //
// Switch statements are very similar to if-elseifs and can sometimes make for a cleaner code instead of writing out each condition separately.
// The switch statement evaluates an input expression, matching the expressions value to a case clause, and executes statements associated with that case.

var color = 'pink';
switch(color) {
    case 'orange':
    case 'red':
    case 'yellow':
        console.log("This is a warm color");
        break;
    case 'blue':
    case 'green':
    case 'purple':
        console.log("This is a cool color");
        break;
    default: // *** default is like "else" statement at end of if-elseif chain
    console.log("Sorry, that color isn't in my palette");
}
// Since we are checking for 'pink', the code goes all the way to the last statement and prints that one.