/*----------------------------------------------
LECTURE 21 - FUNCTION STATEMENTS AND EXPRESSIONS
----------------------------------------------*/

// Function (statement) declaration - performs an action, but does not produce any immidiate result/value:
// function whatDoYoDio(job, firstName) {
//
// }

// Function expression - always produces a single value:
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            // The return keyword returns the value AND finishes/breaks from the function.
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon,';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
