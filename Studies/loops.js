/**
 * LOOPS:
 * 
 * Loops are built-in constructs of JavaScript that allow us to execute a block of code as many times
 * as needed. They are particularly handy for iterating over collections of data. In doing so, we can pull
 * out the values of a collection to work with them one by one. There are 3 different kinds of loops:
 * 
 * 1. for loop
 * 2. for-in loop
 * 3. while loop 
 * 
 */

// 1. for loop //
/* Is great for iterating over arrays and has 3 parts to its statement:
    for (start; stop condition; increment) {
        code block;
    }
The start condition is where the loop will begin iterating. The stop condition tells the loop when to stop looping.
And the increment tells the code to increment to the next iterable variable by a certain amount.

*/
// Looping over an array, forwards //
var namesArray = ["Blake", "Charlotte", "Linda", "Charles"];
for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}
/* This loop will log the following to the console:
"Blake"
"Charlotte"
"Linda"
"Charles"
*/

// Looping over an array, backwards //
var namesArray = ["Blake", "Charlotte", "Linda", "Charles"];
for (let i = namesArray.length - 1; i >= 0; i--) {
    console.log(namesArray[i]);
}
/* This loop will log the following to the console:
"Charles"
"Linda"
"Charlotte"
"Blake"
*/

// 2. for-in loop //
/* This is a special kind of loop that is designed to iterate over objects. This kind of loop gives us access
to the keys and values of an object which is what we want to manipulate. The structure for a for-in loop is:

    for (var key in object) {
        code block
    }
*/
// Loop through an object //
var studentObj = {
    name: "Dwayne Ballard",
    course: "Coding",
    age: 28,
    stressed: false
}
for (var key in studentObj) {
    console.log(key);
    console.log(studentObj[key]);
}
/* This loop will log the following to the console:
"name"
"Dwayne Ballard"
"course"
"Coding"
"age"
28
"stressed"
false
*/

// 3. While loop //
/* This loop is best for when we do not know the stopping condition of the loop. The structure of a while loop
is:
    while (condition is true) {
        do this code;
        increment this much;
    }
*/

// Loop any number of times counting up //
var count = -5;
while (count < 5) {
    console.log(count);
    count++;
}
/* This loop prints the following to the console: 
-5
-4
-3
-2
-1
0
1
2
3
4
*/

// Loop any number of times counting down to 0 //
var countDown = 7;
while (countDown >= 0) {
    console.log(countDown);
    countDown--;
}
/* This loop prints the following to the console:
7
6
5
4
3
2
1
0
*/

