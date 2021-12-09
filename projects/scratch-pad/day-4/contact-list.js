// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of then contacts separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // create a factory function here. First create and empty object literal
    var obj = {};
    //now create each key/value pair using dot/bracket notation
    obj.id = id;
    obj.nameFirst = nameFirst;
    obj.nameLast = nameLast;
    // return that object
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            // loop over contacts array
            for (var i = 0; i < contacts.length; i++) {
                // check to see if fullName parameter is equal to lastName & firstName concatenated together
                // ** DONT FORGET THE SPACE BETWEEN THE NAMES **
                if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) {
                    // return the object containing the name if it exists
                    return contacts[i];
                } else {
                    // return undefined if it doesn't exist
                    return undefined;
                }
            }
        },
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++) {
                if (contact === contacts[i]) {
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function() {
            // create an output string to store the names
            var str = "";
            // loop over contacts array
            for (var i = 0; i < contacts.length; i++) {
                // if name isn't last name in list, add first and last names to new str followed by a line break
                if (contacts[i] !== contacts[contacts.length - 1]) {
                    str += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
                    // if name is last item in list, add first and last names to new str variable with NO line break
                } else if (contacts[i] === contacts[contacts.length - 1]) {
                    str += contacts[i].nameFirst + " " + contacts[i].nameLast;
                }
            }
            // now, return the new string
            return str;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
