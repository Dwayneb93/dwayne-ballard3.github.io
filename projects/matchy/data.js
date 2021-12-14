/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = "lizard";
animal['name'] = "Lizzy";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = "chirps";
noises.push("clicks");
noises.unshift("squeaks");
noises[noises.length] = "hisses";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal.noises.push('cries');
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 *  You can use either bracket or dot notation to access properties in objects
 * 
 * 2. What are the different ways of accessing elements on arrays?
 * 
 *  You can use bracket notation to access a specific index in the array. You can also
 * use various methods to manipulate elements in an array or add new ones.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);
console.log(animals);

var cat = {
  species: 'cat',
  name: 'Luna',
  noises: ['meow', 'hiss', 'purr']
}

animals.push(cat);

var horse = {
  species: 'horse',
  name: 'Harry',
  noises: ['whinney', 'neigh', 'huff']
}

animals.push(horse);

console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];
// I chose an array because it is the best data structure to hold a list of simple 
// data types

function getRandom(animals) {
  // math.random returns a random number between 0 and less than 1
  // math.floor returns the largest WHOLE integer rounded DOWN
 return Math.floor(Math.random() * animals.length);
}
//getRandom(animals) results to a random index within the length of animals array

// sooo friends.push(animals[at a random index within animals].name)
friends.push(animals[getRandom(animals)].name);

// add the friends array to one of the animals

// Sooo... animals[at index 1][at key of friends] = is equal to the friends array
animals[1]['friends'] = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}