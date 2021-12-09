// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {

    return Array.isArray(value);

}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    
    // if object is an object and NONE of the other values that return 'object', return TRUE
    if (typeof value === 'object' && value !== null && Array.isArray(value) !== true && value instanceof Date === false) {
        return true;
    } else {
        return false;
    }    
   
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
   
    // if collection is an object. return true
    if (typeof value === 'object' && value !== null && Array.isArray(value) !== true && !(value instanceof Date)) {
        return true;
        // if collection is an array, return true
    } else if (Array.isArray(value) === true) {
        return true;
    } else {
        // otherwise, return false
        return false;
    }   
   
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    
    // if value is everything but a typeof value that returns "object" ... string, num, undefined, boolean, function
    if (typeof value !== "object") {
        return typeof value;
        // if value is object
    } else if (typeof value === 'object' && value !== null && Array.isArray(value) !== true && !(value instanceof Date)) {
        return "object";
        // what if value is array
    } else if (Array.isArray(value) === true) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return "date"
    }

}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
