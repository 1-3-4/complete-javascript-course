/*-------------------------------
LECTURE 11 - OPERATOR PRECEDENCE
Which operator is executed first?
------------------------------ */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators:
var isfullAge = now - yearJohn >= fullAge;
console.log(isfullAge);

// Grouping:
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments:
// Think about 'precedence' and 'associativity'!
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 2 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
// Different ways to add one to a variable:
x = x + 1;
x += 1;
x++;
