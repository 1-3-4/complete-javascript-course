/*---------------------------------
LECTURE 25 - OBJECTS AND PROPERTIES
---------------------------------*/

// In objects, the order of values does not matter.

// Object declared w. object literal, curly brackets {}:
var john = {
    // key-value pair:
    // firstName is the property of the john object.
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);
// Accessing object properties - use the dot notation:
console.log(john.firstName);
// Accessing an element in an object by using brackets:
// Keep in mind that the value inside the brackets has to be a string.
console.log(john['lastName']);
var x = 'birthYear'
console.log(john[x]);

// Mutate an object:
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// Another way to create an object:
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
