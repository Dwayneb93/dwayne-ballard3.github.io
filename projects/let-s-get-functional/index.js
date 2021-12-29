// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./dwayne-ballard3.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // use FILTER to return array of customers that are MALE
    let males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    }); // => resolves to an array of only male customer objects
    return males.length;
};

var femaleCount = function(array) {
    // use REDUCE to return total number of FEMALE customers
    var females = _.reduce(array, function(accumulator, current, index) {
        //if the current customer object is female
        if (current.gender === 'female') {
            // add 1 to accumulator
            accumulator += 1;
        }
        return accumulator;
    }, 0);
    return females;
};

var oldestCustomer = function (array) {
    // I feel like I should use reduce... to keep checking to see if LAST value of age
    // is less than NEXT iteration of age and then reassigning a declared variable to 
    // that name and returning it in the end?
    var oldest = _.reduce(array, function(prevCust, currentCust, index) {
        // if prevCust(which starts at 0 index).age is less than the currentCust
        // iterations.age, return that currentCust's Object
        // i.e first index's age is 37 in customer.json
        // next iterations object's age is 26... the first indexed object
        // has an age that is older, SO that object is returned.
        // eventually it will iterate through the entire array and keep
        // comparing the age values from prev to current
        if (prevCust.age < currentCust.age) {
            return currentCust;
        } else {
            // else, return that original person's object
            return prevCust;
        }
    });
    // return that oldest person's object's name value
    return oldest.name;
};

// pretty much followed last problem but switched logic around to account
// for the YOUNGEST instead of oldest
var youngestCustomer = function(array) {
    var youngest = _.reduce(array, function(prevCust, currCust, index) {
        if (prevCust.age > currCust.age) {
            return currCust;
        } else {
            return prevCust;
        }
    });
    return youngest.name;
};

var averageBalance = function(array) {
    var balance = _.reduce(array, function(total, currCust, index) {
        // this is where i must manipulate the data to be able to add the
        // balances together
        // how do i remove the dollar sign $? from the data... slice off at index 1 
        var noDollarSign = currCust.balance.slice(1);
        // balance now looks like = 3,440.25
        // remove the commas? can use the replaceAll method
        var noCommas = noDollarSign.replaceAll(",", "");
        // now we need to change string to an integer using parseFloat
        var integar = parseFloat(noCommas);
        return total + integar;
    }, 0);
    // now we want to return the average! so divide the balance by total number of customers
    return balance / array.length;
};

var firstLetterCount = function(array, letter) {
    var firstLetters = _.filter(array, function(customer) {
        if (customer.name[0].toLowerCase() === letter.toLowerCase()) {
            return customer;
        }
    });
    return firstLetters.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    // first we need to filter out the customers array to find the specific customer we input as the parameter
   var personList = _.filter(array, function(person) {
        return person.name === customer;
   }); // this results in an array with just that ONE customer's object in it [ { .... } ], so it is at index 0 inherently
   // so if we set a variable friends list to equal that filtered output at index[0].friends, we get their friends list
   var friendsList = personList[0].friends;
   // now we are filtering through that specific customer's friend list
   // so this filter function takes that filteredFriendsList array and looks at each individual friend in it
   var letterCount = _.filter(friendsList, function(friend) {
       // if that individual friend's name's first letter is equal to the letter we are passing through
        if (friend.name[0].toLowerCase() === letter.toLowerCase()) {
            // return that friend to the new filtered array 
            return friend;
        }
   });
   // return the length of the filteredLetterCount array to get the total number of friend's names that start with the 
   // corresponding letter input
   return letterCount.length;
};

var friendsCount = function(array, name) {
    var friendsList = _.filter(array, function(customer) {
        var friends = customer.friends;
        for (var i = 0; i < friends.length; i++) {
            if (friends[i]["name"] === name) {
                return true;
            }
        }
    }); // friends list currently contains the objects of customers who's friends list contained name
    // now map through each of those customer objects in the friendsList(array of objects) and return
    // just the name value of those customers and return them  in an array
    return friendsList.map(customer => customer.name);
};

var topThreeTags = function(array) {
    // first let's use our map function to return an array of the tag arrays
    var tagArrays = _.map(array, function(customer) {
        return customer.tags;
        // now how can we combine each array into one array? reduce + concat?
    });
    var combinedTags = tagArrays.reduce(function(prev, curr, index) {
        // return prevArray.concat(currentArray); this will combine all out arrays into one.
        return prev.concat(curr);
    }, []);
    // to count and store the values we can store them in pairs in an empty object
    var tagObject = {};
    // now we can loop through our combined tags list
    for (var i = 0; i < combinedTags.length; i++) {
        // if, for within our new object, if this current iteration (current tag) in the combined tag
        // list doesn't exist, then create it and assign it a value of 1
        if (tagObject[combinedTags[i]] === undefined) {
            tagObject[combinedTags[i]] = 1;
        } else {
            // else if it is defined, add 1 to the value (to increase the "count");
            tagObject[combinedTags[i]] += 1;
        }
    }
    // our tagObject ={} now has a list of ALL the tags and the amount of times they occur 
    // as key/value pairs
    // now convert this object into an array of each key/value pair as an individual array by using
    // Object.entries
    var arrayPairs = Object.entries(tagObject);
    // now we can use the SORT method to arrange these arrays in an order that we decide
    var sorted = arrayPairs.sort(function(a, b) {
        return b[1] - a[1];
    });
    // now this has sorted our array pairs by value from high to low
    // now we can create an output array that just has the top 3 VALUES in it
    var output = [];
    // i pushed like this because the data is now set up as an array with subarrays like this
    // [ [ 'Lorem', 1 ], [ 'Aquiem', 4 ], [ 'leno', 5 ]];
    // so we just want to push the names (the 0 index) of each of the first 3 indexes
    output.push(sorted[0][0], sorted[1][0], sorted[2][0]);
    return output;
};

var genderCount = function(array) {
    var genders = _.reduce(array, function(count, person, index) {
        if (count[person.gender]) {
            count[person.gender] += 1;
        } else {
            count[person.gender] = 1;
        }
        return count;
    }, {});
    return genders;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
