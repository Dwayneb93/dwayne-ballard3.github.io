// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    return function(value) {
      return value > base; // since this already results to true or false, we dont have to do if else if chain
    }

}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    return function(value) {
        return value < base;
    }
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    return function(string) {
        // turns out tests are CASE SENSITIVE
        return string[0].toUpperCase() === startsWith.toUpperCase();
    }
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    return function(string) {
        //tests are CASE SENSITIVE & REMEMBER that string.length - 1 results in just an index, so we have to call it on the string to get the value
        return string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
    }
}


/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) { // ["Alex", "Francis", "Aaron"]
    // create a variable to store modified strings
    var modified = [];
    // loop over the string
    for (var i = 0; i < strings.length; i++) {
        // create a variable  that will allow you to pass in each string into the tester function (modify parameter)
        var result = modify(strings[i]);
        // push each modified result into the output array
        modified.push(result);
    }
    // return output array
    return modified;
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

// var array = ["Dwayne", "Heather", "Dylan"]
/*function beginsWithA(str) {
    return str[0] === "D";
}
*/

function allStringsPass(strings, test) {
    // loop over array of strings
    for (var i = 0; i < strings.length; i++) {
        // pass the current array value to the test function
        // if at LEAST ONE item in the array returns FALSE! *(see above example array and test)*
        if (test(strings[i]) === false) {
              // we want to exit function and return false so the function overall returns false since one doest pass
            return false;
        }
    }
    // we return true OUTSIDE of loop because it'll pass all the conditions of loop and exit the loop after reaching end of length of array and we want to return true, because
    // all of the strings in the array passed the test at this point
      // want to make sure we do this outside so the loop goes over all items in array
    return true;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
