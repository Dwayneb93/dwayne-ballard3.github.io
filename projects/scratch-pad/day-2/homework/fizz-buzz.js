// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // create a for loop starting at 1 and ending at 100 to iterate through each number
    for (var i = 1; i <= 100; i++) {
        // we want to start with the multiples of BOTH 3 and 5, so they don't get "hit" earlier when they are singled out and exit the loop
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            // now if number is divisible by 3, print Fizz to console
        } else if (i % 3 === 0) {
            console.log("Fizz");
            // if divisible by 5, print Buzz to console
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            // now if number isn't any of those, print it to console (this way ALL numbers between 1 and 100 will be printed)
            console.log(i);
        }
    }

}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}