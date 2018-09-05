/*--
IIFE
--*/

// IIFE can be used to create data privacy.
// An IIFE can only be called once, since it isn't assigned to a variable.

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// The last set of () invokes the function.
( function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
} )();

// console.log(score);

( function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
} )(5);
