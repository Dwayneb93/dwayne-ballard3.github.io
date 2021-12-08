// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // create output array to store range
    var range = [];
    // first start off with if first arg is greater than or less than the second arg
     // if first arg is less than second, push range to array in normal order
    if (start < end) {
        for (var i = start; i <= end; i++) {
            range.push(i);
        } 
        // now return that range array for if start is less than end
        return range;
     // if 2nd arg is greater than first, push range to array in reverse
    } else if (start > end) {
        for (var i = start; i >= end; i--) {
            range.push(i);
        }
        return range;
    }
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
