/*------
CLOSURES
------*/

// An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.
// After a function returns, its execution context is removed from the execution stack, but the variable object is still in memory.

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log( (retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIcelande = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIcelande(1990);
// retirement(66)(1990);

// Challenge.
// Different from the former function in that it uses closures; the job variable is used by the returned function.
function interviewQuestion( job ) {
    return function( name ) {
        if ( job === 'teacher' ) {
            console.log('What subject do you teach, ' + name + '?');
        } else if ( job === 'designer' ) {
            console.log(name + ', can you please explain what UX design is?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
interviewQuestion('teacher')('John');
