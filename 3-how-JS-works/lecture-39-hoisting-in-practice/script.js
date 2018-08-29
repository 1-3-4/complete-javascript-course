/*---------------
Lecture: Hoisting
---------------*/

// Function Hoisting

// This works because of hoisting - but only for function statements.
// The function is stored in the creation phase, and the function is then run in the execution phase afterwards.
calcAge(1965);
function calcAge(year) {
    console.log(2016 - year);
}
calcAge(1990);

// Hoisting does not work the same way for function expressions:

// The following does not work because the function expression is stored in a variable which is undefined until the execution phase.
// retirement(1965);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
retirement(1990);

// Variable Hoisting

// In the creation phase the code is scanned for variable declarations and each variable is set to undefined.
console.log(age);
// This variable is defined in the global execution context.
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    // This variable is in its own execution context and is not affected by or affects its namesake in the global execution contaxt.
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
