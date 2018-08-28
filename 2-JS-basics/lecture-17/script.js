/*---------------------------------------------------------
LECTURE 17 - TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS
---------------------------------------------------------*/

Falsy values: undefined, null, 0, '', NaN. Will be converted to false when evaluated.
Truthy values: The values that are not falsy.

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');
}

// Equality operator: ==
// Strict equality operator: ===
// !!! Best practice to use ===
if (height == '23') {
    console.log('The == operator does type coercion!');
}
