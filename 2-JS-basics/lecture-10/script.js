/*---------------------------
LECTURE 10 - BASIC OPERATORS
--------------------------*/

var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
// minus sign is a math operator
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

// plus sign, division sign , and multiplication sign is a math operator
console.log(now + 2);
console.log(now / 2);
console.log(now * 2);

// logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
