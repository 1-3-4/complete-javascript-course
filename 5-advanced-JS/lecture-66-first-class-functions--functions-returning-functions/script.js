// Returning a function is the same as returning an object.

function interviewQuestion( job ) {
    if (job === 'designer') {
        return function( name ) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function( name ) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

// These variables contain a function...
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
// ...and can be used as such:
teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

// A returned function can also be called instantly, because the function is evaluated from left to right:
interviewQuestion('teacher')('Mark');
