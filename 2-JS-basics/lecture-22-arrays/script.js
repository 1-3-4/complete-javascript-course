/*-----------------
LECTURE 22 - ARRAYS
-----------------*/

// Different ways to initialize/declare arrays:
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array date:
names[1] = 'Ben';
names[names.length] = 'Mary';

console.log(names);

// Different datatypes:
var john = ['John', 'Smith', 1990, 'designer', false];

// Arrays has functions called methods.

// Add element to end of array:
john.push('blue');
// Add element to beginning of array:
john.unshift('Mr.');

console.log(john);

// Remove element from end of array:
john.pop();
// Remove element from beginning of array:
john.shift();

console.log(john);

// Get the index of the passed element in the array:
console.log(john.indexOf(1990));
// indexOf returns -1 if the passes element does not exists in the array:
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John is a designer.'
console.log(isDesigner);
