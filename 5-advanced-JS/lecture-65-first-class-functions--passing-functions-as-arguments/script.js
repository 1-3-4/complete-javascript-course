/*----------------------------
PASSING FUNCTIONS AS ARGUMENTS
----------------------------*/

// Call-back functions: Functions that are passed to other functions that will call them later.
// Call-back functions are written without ().

var years = [1990, 1965, 1937, 2005, 1998];

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
function isFullAge( elem ) {
    return elem >= 18;
}
function maxHeartRate( elem ) {
    if ( elem >= 18 && elem <= 81 ) {
        return Math.round( 206.9 - 0.67 * elem );
    }
    else {
        return -1;
    }
}

var ages = arrayCalc( years, calcAge );
console.log(ages);
var fullAges = arrayCalc( ages, isFullAge );
console.log(fullAges);
var maxHeartRates = arrayCalc( ages, maxHeartRate );
console.log(maxHeartRates);
