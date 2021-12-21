// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    if (typeof value === 'string') {
        return "string";
    } else if (typeof value === "number") {
        return "number";
    } else if (Array.isArray(value)) {
        return "array";
    } else if (typeof value === 'function') {
        return 'function';
    } else if (typeof value === "boolean") {
        return 'boolean';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'object' && value !== null && Array.isArray(value) === false && value instanceof Date === false) {
        return 'object';
    } else {
        return "null";
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    // if array isn't an array, do what? OR if number isn't positive
    if (!Array.isArray(array) || number < 0) {
        return [];
        // if number parameter isn't given OR isn't a number, do what?
    } else if (number === undefined || typeof number !== "number") {
        return array[0];
        // if number parameter is greater than array.length, return the entire array
    } else if (number > array.length) {
        return array;
        // Otherwise, return the amount of items = to number parameter(starting from the beginning)
    } else {
        // return a new array that starts at the beginning index, and deletes everything following the
        // input parameter index. i.e slice(0, number); Will start at 0 index, and end at the index given 
        // by "number"
        return array.slice(0, number);
    }
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function (array, number) {
    // if input array is not an array or if input parameter is negative, return empty array
    if (!Array.isArray(array) || number < 0) {
        return [];
        // if number parameter is not given or is not a number, return LAST element in input array
    } else if (number === undefined || typeof number !== "number") {
        return array[array.length - 1];
        // if number parameter is greater than array length, return entire array input
    } else if (number > array.length) {
        return array;
        // now return a new array that starts at LAST INDEX and ends at the number input
        // slicing at a negative index will return an array that starts at that index(deleting that index) counting backward, and printing to array from there
        // FORWARDS 
    } else {
        return array.slice(-number);
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    //if collection is an array
    if (Array.isArray(collection)) {
        // iterate through the collection
        for (var i = 0; i < collection.length; i++) {
            // pass in the element, the index, and collection into the func
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    var uniqueArr = [];
    for (let i = 0; i < array.length; i++) {
        // if the the indexOf function checks the uniqueArr and array[i] (iterated item in input array) is not in there (= to -1) push that item into unique array
        if (uniqueArr.indexOf(array[i]) === -1) {
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
    // create output filtered array
    var filtered = [];
    // loop through input array
    for (var i = 0; i < array.length; i++) {
        // if func called with current element (array[i]), it's index (i), and the array (array) returns a true result
        if (func(array[i], i, array) === true) {
            // then push that current element into the filtered array
            filtered.push(array[i]);
        }
    }
    // return output
    return filtered;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
    var rejected = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            rejected.push(array[i]);
        }
    }
    return rejected; 
}



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    var truthy = [];
    var falsey = [];
    var partitioned = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
        truthy.push(array[i]);
    } else {
        falsey.push(array[i]);
        }
    }
    partitioned.push(truthy);
    partitioned.push(falsey);
    return partitioned;
}



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    var mapped = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            mapped.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection) {
            mapped.push(func(collection[key], key, collection));
        }
    }
    return mapped;
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property) {
    // we must use our new map function
    // so plucked will be equal to the mapped array of object's properties
    // map takes in the array of objects and a function that tests each object in the array
    var plucked = _.map(array, function(object) {
        // we just want map to return an array of the values at each object that have the property we are passing in
        // so we look at objects[that have this property] <--- returns the value
        return object[property];
    });
    // then we just return that mapped variable
    return plucked;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function(collection, func) {
    // create a default result statement that can be easily reassigned if a test returns false in a loop
    let result = true;
    // if function is not given...
    if(func === undefined) {
        // loop through collection
        for (var i = 0; i < collection.length; i++) {
            // if current iteration results in a truthy value return true
            if(collection[i]) {
                return true;
                //otherwise return false
            } else {
                return false;
            } 
        }
    }
    // if collection is an array
    if (Array.isArray(collection)) {
        // call the function on the current element, its index, and the collection itself
        for (var i = 0; i < collection.length; i++) {
            // if any iteration returns a false statement
            if (func(collection[i], i, collection) === false) {
                //reassign result to = false;
                result = false;
            }
        }
    } else {
        // if collection is an object
        for (var key in collection) {
            // call function on current value, key, and collection
            // if ANY item returns false, reassign result to false
            if (func(collection[key], key, collection) === false) {
                result = false;
            }
        }
    }
    // return our final result
    return result;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
