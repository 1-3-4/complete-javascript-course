/*------------------------------
LECTURE 29 - LOOPS AND ITERATION
------------------------------*/

// Loops automates repetitive tasks.

// For loop:
for (var i = 0; i < 10; i++) {
    // Between the curly brackets is called the 'loop block'.
    console.log(i);
}

// Log each element in the array:
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop:
// - Only contains the condition:
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}

// Continue and break statements:
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue; // continue will break out of the current iteration and CONTINUE on to the next iteration.
    console.log(john[i]);
}
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break; // break will break out of the current iteration AND the loop.
    console.log(john[i]);
}

// Iteration through an array from end to beginning with a for loop:
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
