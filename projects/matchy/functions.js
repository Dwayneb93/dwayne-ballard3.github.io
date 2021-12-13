/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
    //loop through array
    for (var i = 0; i < animals.length; i++) {
        // if iterated animals name is equal to input name, then return animal object
        if (animals[i].name === name) {
            return animals[i];
        }          
    }
    // if not, return null OUTSIDE of loop because what if first animal didnt pass?
    // we would want the loop to still test all of the elements of the animals array
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    // loop through animals array
    for (var i = 0; i < animals.length; i++) {
        // if that animal with that name exists
        if (animals[i].name === name) {
            // remove it with splice (start index, how many to delete) start index
            // is whatever iteration (i) and we want to delete just that one item
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name !== animal.name) {
            animals.push(animal);
        } else {
            return false;
        }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
