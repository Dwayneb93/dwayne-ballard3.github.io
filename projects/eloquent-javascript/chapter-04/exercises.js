////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  var range = [];
  if (start === end) {
    return [];
  }
  if (step === undefined) {
    for (let i = start; i <= end; i++) {
      range.push(i);
      }
    } else {
      if (step < 0) {
        return [];
      } else {
        for (let i = start; i <= end; i+=step) {
          range.push(i);
        }
      }
    }
  return range;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  // iterate through array and collect a sum
  let sum = 0;
  for (var i = 0; i < array.length; i ++) {
    sum += array[i];
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  var reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) { // DESTRUCTIVELY [1, 2, 3] => [3, 2, 1]
  // [1, 2, 3, 4] // even number of values => [4, 3, 2, 1]
      // array[0] = array[3 - 0]
      // array[3] = array[3] = 1

      // array[1] = ...
      // array[2] = ...

  // [1, 2, 3, 4, 5] // odd number of values

  // if even number of array values
  if (array.length % 2 === 0) {
    // i divide length by 2 because if it is even, i only have to iterate through half the array
    // because it evenly swaps out each number at that point
    for (let i = 0; i < array.length / 2; i++) {
      let temp = array[i]; 
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  } else {
    // Math.floor ROUNDS DOWN to accomodate for that dead-set middle value of an odd array that will
    // never change or get touched when swapping 
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let temp = array[i]; 
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  var rest = null;
  for (let i = array.length - 1; i >= 0; i--) {
    rest = { value: array[i], rest }
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array = []) {
  if (list.rest === null) {
    array.push(list.value);
    return array;
  }
  array.push(list.value);
  return listToArray(list.rest, array);
};

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, object) {
  return {
    value: value,
    rest: object
  }
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  // base
  if (n === 0) {
    return list.value;
  } else if (n < 0) {
    return undefined;
  }
  // recursion
  return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  // if x and y are not objects
    // return the result of comparing x and y
  if (typeof x !== 'object' && typeof y !== 'object') {
    return x === y;
  }
  // if either x OR y is not an object, return false
  if (typeof x !== 'object' || typeof y !== 'object') {
    return false;
  }
  let xKeys = Object.keys(x); // [x keys]
  let yKeys = Object.keys(y); // [y keys]

  // if the length of xKeys is NOT equal to the length of yKeys
  if (xKeys.length !== yKeys.length) {
    return false;
  }

  // iterate through xKeys array
  for (var i = 0; i < xKeys.length; i++) {
    // determine if the curreny keys i not included in yKeys OR the 
      // result of calling deepEquals on x[xKeys[i]], y[yKeys[i]] returns false
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])) {
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
