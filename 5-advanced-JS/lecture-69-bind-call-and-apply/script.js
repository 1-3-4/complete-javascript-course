/*---------------------------
BIND, CALL, AND APPLY METHODS
---------------------------*/

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }
        else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

// The call method calls a method from one object, but changes where the 'this' variable points to.
// This is called method borrowing.
john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

// Currying: Create a function based on another function but with some preset parameters:
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('evening');
johnFriendly('night');
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

ar years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc( arr, fn ) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push( fn( arr[i] ) );
    }
    return arrRes;
}

function calcAge( elem ) {
    return 2016 - elem;
}
function isFullAge( limit, elem ) {
    return elem >= limit;
}

var ages = arrayCalc(years, calcAge);
