// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // use a for loop to loop over the array and print them to the console
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // use for loop to loop over array, BUT start at end of array, and you decrement by 1 each time and stop when index reaches 0
  for (var i = array.length - 1; i >= 0; i--) {
  // print these values to console
  console.log(array[i]);
  }
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // create an output array to store the keys
  var outputArr = [];
  // use a for in loop to loop through an object's keys
  for (var key in object) {
    // push each iterated key to the output array
    outputArr.push(key);
  }
  // return output array
  return outputArr;
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // use for in loop to loop through objects keys
  for (var key in object) {
    // now print ONLY the keys to the CONSOLE
    console.log(key);
  }

}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // create an output array to store the values of each key
  var outputArr = [];
  // use a for in loop to loop through an object and go through its key/value pairs
  for (var key in object) {
    // iterate through the key's VALUES and PUSH to output array
    outputArr.push(object[key]);
  }
  // return output array
  return outputArr;
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // use for in loop to iterate through object's key/value pairs
  for (var key in object) {
  // print each of the object's key's VALUES to the console
    console.log(object[key]);
  }
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // create an output array to store the keys OR values from the object (will allow us to .length it later)
  var outputArr = [];
  // use for in loop to loop through the object
  for (var key in object) {
  // push the key OR value to the output array
    outputArr.push(key);
  }
  // return the output array's length to get the number of pairs
  return outputArr.length;
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // we should probably create an output array to push the values into, and loop over that array in reverse and print values to console
  // create output array
  // *** SEE AN ALTERNATE METHOD BELOW ***
  var outputArr = [];
  // loop through object using a for in loop
  for (var key in object) {
  // push the oject's key's VALUES to the output array
  outputArr.push(object[key]);
  } 
  // now loop through the output array (which is storing our object's values) starting at the last index
  for (var i = outputArr.length - 1; i >= 0; i--) {
  // print each value to the console
    console.log(outputArr[i]);
  }
} 
//  ***** COULDVE ALSO USED var array = Object.values(object); to get an array of objects valus




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
