//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
   return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var objectVals = [];
    for (var key in object) {
        if (typeof object[key] === "string") {
            objectVals.push(object[key]);
        }
    }
    return objectVals.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return "array";
    } else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var separateStrings = string.split(" ");
    var capital = [];
    for (var i = 0; i < separateStrings.length; i++) {
        capital.push(separateStrings[i][0].toUpperCase() + separateStrings[i].slice(1));
    }
    return capital.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + object.name.replace(object.name[0], object.name[0].toUpperCase()) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // since the tests are case sensitive, I must account for it so im making new variables to do so
    // .replace() is a good method to replace something WITHIN a STRING
    var capitalName = object.name.replace(object.name[0], object.name[0].toUpperCase());

    var capitalSpecies = object.species.replace(object.species[0], object.species[0].toUpperCase());
    // now return as full string using string interpolation or string concatenation!
    return `${capitalName} is a ${capitalSpecies}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // check to see if noises array exists using truthy/falsey and if noises array has a length greater than 0
    if (!object.noises || object.noises.length === 0) {
        // if EITHER, return statement:
        return "there are no noises";
    } else {
    // else, if it does exist, return that array where each item is joined at the space
    return object.noises.join(" ");
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // create a split version of the string to get an array of words we can loop through
    var arrOfWords = string.split(" ");
    // loop through array strings to see if word is in it
    for (var i = 0; i < arrOfWords.length; i++) {
        if (arrOfWords[i] === word) {
    // return true if word is included
            return true;
        }
    }
    // otherwise, return false outside loop, so loop loops fully
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // hasOwnProperty checks to see if an object contains a certain key/prop
    // .includes can be used on an array (which is what object["friends"] results to, and we can see if array includes name parameter)
    if(object.hasOwnProperty("friends") && object["friends"].includes(name)) {
        return true;
    }
    return false;
}



//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // create output array to return list of names that a certain person is not friends with
    var list = [];
    // loop through array parameter (can loop through an ARRAY of OBJECTS)
    for (var i = 0; i < array.length; i++) {
        // if the .includes returns false (if name parameter isnt in iterated object's friends list)
        // AND if the iterated object's name isn't the name we are passing in (iterated object
        // won't have THEIR OWN name in their friends list..)
        if (array[i].friends.includes(name) === false && array[i].name !== name) {
            list.push(array[i].name);
        } 
    }
    return list;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // just creating that key and assigning it a value will EITHER, reassign the value of
    // that object key's value if it exists; OR it will create the key and assign it to the value
    // parameter
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// loop through the objects keys
 for (var key in object) {
     // for each key in object, iterate through the input array
     for (var i = 0; i < array.length; i++) {
         // if an iteration in the array is EQUAL to a key in the object
        if (array[i] === key) {
            // then delete that key
            // this should loop over each key in the object in reference to each item in the array
            delete object[key];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //.indexOf method returns the FIRST INDEX at which a given a given element can be
    // found in the array, *** OR -1 if it is not present
    // create an output arr variable to store items of new array
    var output = [];
    // loop through array parameter
    for (var i = 0; i < array.length; i++) {
        // if the output array doesnt contain current array iteration (if .indexOf iteration is 
        // equal to -1, we know it doesnt exist)
        if(output.indexOf(array[i]) === -1) {
            // if it doesn't exist yet, then put to output array
            output.push(array[i]);
            // on next iteration, if the value already exists in output array, it will not be pushed
            // because .indexOf iteration will NOT equal to -1 anymore
        }
    }
    // return output storing our UNIQUE values
    return output;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}