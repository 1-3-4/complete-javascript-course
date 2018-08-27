// console.log('Hello World!!!');

// Lecture 8 - Variables and Datatypes
// var firstName = 'John';
// console.log(firstName);
//
// var lastName = 'Smith';
// var age = 28;
//
// var fullAge = true;
// console.log(fullAge);
//
// var job;
// console.log(job);
//
// job = 'Teacher';
// console.log(job);
//
// // naming rules
// // variable names can't start with numbers
// // can be preceded by an underscore _ or a dolloar sign $
// var _3years = 3;
// // variable names canøt contain special characters
// // var john/mark = 'John and Mark';
// var johnMark = 'John and Mark';
// // variable names can't contain reserved js keywords
// // var if = 23;

// Lecture 9 - Variable mutation and type coercion
// var firstName = 'John';
// var age = 28;
//
// console.log(firstName + ' ' + age);
//  var job, isMarried;
//  job = 'teacher';
//  isMarried = false;
//
//  console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//  // Variable mutation
//  age = 'twenty eight';
// job = 'driver';
//
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/***************************
LECTURE 10 - BASIC OPERATORS
***************************/

// var now, yearJohn, yearMark, ageJohn, ageMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// // minus sign is a math operator
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
//
// console.log(yearJohn);
//
// // plus sign, division sign , and multiplication sign is a math operator
// console.log(now + 2);
// console.log(now / 2);
// console.log(now * 2);
//
// // logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);
//
// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

// LECTURE 11 - OPERATOR PRECEDENCE
// Which operator is executed first?

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;
//
// // Multiple operators:
// var isfullAge = now - yearJohn >= fullAge;
// console.log(isfullAge);
//
// // Grouping:
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);
//
// // Multiple assignments:
// // Think about 'precedence' and 'associativity'!
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 2 - 6 // 32 - 6 // 26
// console.log(x, y);
//
// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// // Different ways to add one to a variable:
// x = x + 1;
// x += 1;
// x++;

/****************************
LECTURE 12 - CODING CHALLENGE
****************************/
// var johnHeight, johnWeight, johnBmi, markHeight, markWeight, markBmi, markBmiHigherThanJohn;
// johnHeight = 1.85;
// johnWeight = 92;
// johnBmi = johnWeight / (johnHeight * johnHeight);
// markHeight = 1.63;
// markWeight = 85;
// markBmi = markWeight / (markHeight * markHeight);
//
// markBmiHigherThanJohn = markBmi > johnBmi;
//
// console.log('Is Mark\'s BMI higher than John\'s? ' + markBmiHigherThanJohn);
// console.log(markBmi, johnBmi);

/********************************
LECTURE 14 - IF / ELSE STATEMENTS
********************************/
// var firstName = 'John';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// }
// else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }
//
// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// }
// else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }
//
// var johnHeight, johnWeight, johnBmi, markHeight, markWeight, markBmi;
//
// johnHeight = 1.85;
// johnWeight = 92;
// johnBmi = johnWeight / (johnHeight * johnHeight);
//
// markHeight = 1.63;
// markWeight = 85;
// markBmi = markWeight / (markHeight * markHeight);
//
// if (markBmi > johnBmi) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// }
// else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// }

/*************************
LECTURE 15 - BOOLEAN LOGIC
*************************/
// var firstName = 'John';
// var age = 16;
//
// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// }
// else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// }
// else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// }
// else {
//     console.log(firstName + ' is a man.');
// }

/*-----------------------------------------------------
LECTURE 16 - THE TERNARY OPERATOR AND SWITCH STATEMENTS
-----------------------------------------------------*/
// var firstName = 'John';
// var age = 16;
//
// // The ternary operator:
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
//
// var drink = age >= 18 ? 'beer' : 'juice';
// // The above can also be written w. and if/else statement:
// // if (age >= 19) {
// //     var drink = 'beer';
// // }
// // else {
// //     var drink = 'juice';
// // }
//
// console.log(drink);
//
// // Switch statement:
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + 'teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + 'drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + 'designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }
//
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
//
// }

/*---------------------------------------------------------
LECTURE 17 - TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS
---------------------------------------------------------*/

// Falsy values: undefined, null, 0, '', NaN. Will be converted to false when evaluated.
// Truthy values: The values that are not falsy.

// var height;
//
// height = 23;
//
// if (height || height === 0) {
//     console.log('Variable is defined.');
// } else {
//     console.log('Variable has NOT been defined.');
// }
//
// // Equality operator: ==
// // Strict equality operator: ===
// // !!! Best practice to use ===
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }

/*-----------------------------
LECTURE 18 - CODING CHALLENGE 2
-----------------------------*/

// var teamJohnScoreOne, teamJohnScoreTwo, teamJohnScoreThree, teamJohnAvg, teamMikeScoreOne, teamMikeScoreTwo, teamMikeScoreThree, teamMikeAvg, teamMaryScoreOne, teamMaryScoreTwo, teamMaryScoreThree, teamMaryAvg;
//
// teamJohnScoreOne = 89;
// teamJohnScoreTwo = 120;
// teamJohnScoreThree = 103;
// teamMikeScoreOne = 116;
// teamMikeScoreTwo = 94;
// teamMikeScoreThree = 123;
// teamMaryScoreOne = 97;
// teamMaryScoreTwo = 134;
// teamMaryScoreThree = 105;
//
// teamJohnAvg = (teamJohnScoreOne + teamJohnScoreTwo + teamJohnScoreThree) / 3;
// teamMikeAvg = (teamMikeScoreOne + teamMikeScoreTwo + teamMikeScoreThree) / 3;
// teamMaryAvg = (teamMaryScoreOne + teamMaryScoreTwo + teamMaryScoreThree) / 3;
//
// // if (teamJohnAvg > teamMikeAvg) {
// //     console.log('Team John wins on average w. ' + teamJohnAvg + ' points.');
// // }
// // else if (teamJohnAvg < teamMikeAvg) {
// //     console.log('Team Mike wins on average w. ' + teamMikeAvg + ' points.');
// // }
// // else {
// //     console.log('The teams draws on average w. ' + teamMikeAvg + ' points.');
// // }
//
// switch (true) {
//     // wins
//     case teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg:
//         console.log('Team John wins on average w. ' + teamJohnAvg + ' points.');
//         break;
//     case teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg:
//         console.log('Team Mike wins on average w. ' + teamMikeAvg + ' points.');
//         break;
//     case teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg:
//         console.log('Team Mary wins on average w. ' + teamMaryAvg + ' points.');
//         break;
//     // draws
//     case teamJohnAvg === teamMikeAvg && teamJohnAvg === teamMaryAvg:
//         console.log('All teams draws on average w. ' + teamJohnAvg + ' points.');
//         break;
//     case teamJohnAvg === teamMikeAvg && teamJohnAvg > teamMaryAvg:
//         console.log('Team John and Team Mike ties w. ' + teamJohnAvg + ' points, but both wins over Team Mary.');
//         break;
//     case teamJohnAvg === teamMikeAvg && teamJohnAvg < teamMaryAvg:
//         console.log('Team John and Team Mike ties w. ' + teamJohnAvg + ' points, but both loses to Team Mary.');
//         break;
//     case teamJohnAvg === teamMaryAvg && teamJohnAvg > teamMikeAvg:
//         console.log('Team John and Team Mary ties w. ' + teamJohnAvg + ' points, but both wins over Team Mike.');
//         break;
//     case teamJohnAvg === teamMaryAvg && teamJohnAvg < teamMikeAvg:
//         console.log('Team John and Team Mary ties w. ' + teamJohnAvg + ' points, but both loses to Team Mike.');
//         break;
//     case teamMikeAvg === teamMaryAvg && teamMikeAvg > teamJohnAvg:
//         console.log('Team Mike and Team Mary ties w. ' + teamMikeAvg + ' points, but both wins over Team John.');
//         break;
//     case teamMikeAvg === teamMaryAvg && teamMikeAvg < teamJohnAvg:
//         console.log('Team Mike and Team Mary ties w. ' + teamMikeAvg + ' points, but both loses to Team John.');
//         break;
//     case teamMikeAvg === teamMaryAvg && teamMikeAvg > teamJohnAvg:
//         console.log('Team Mike and Team Mary ties w. ' + teamMikeAvg + 'points, but both wins over Team John.');
//         break;
// }

/*--------------------
LECTURE 20 - FUNCTIONS
--------------------*/

// // A function can take an 'argument' inside the brackets.
// function calculateAge(birthYear) {
//     // Inside the curly brackets are called the 'function block'.
//     return 2018 - birthYear;
// }
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);
//
// function yearsUntilRetirement(year, firstName) {
//     // Functions can call other functions:
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
//
// }
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/*----------------------------------------------
LECTURE 21 - FUNCTION STATEMENTS AND EXPRESSIONS
----------------------------------------------*/

// // Function (statement) declaration - performs an action, but does not produce any immidiate result/value:
// // function whatDoYoDio(job, firstName) {
// //
// // }
//
// // Function expression - always produces a single value:
// var whatDoYouDo = function(job, firstName) {
//     switch (job) {
//         case 'teacher':
//             // The return keyword returns the value AND finishes/breaks from the function.
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon,';
//         case 'designer':
//             return firstName + ' designs beautiful websites.';
//         default:
//             return firstName + ' does something else.';
//     }
// }
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));


/*-----------------
LECTURE 22 - ARRAYS
-----------------*/

// // Different ways to initialize/declare arrays:
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
//
// console.log(names[2]);
// console.log(names.length);
//
// // Mutate array date:
// names[1] = 'Ben';
// names[names.length] = 'Mary';
//
// console.log(names);
//
// // Different datatypes:
// var john = ['John', 'Smith', 1990, 'designer', false];
//
// // Arrays has functions called methods.
//
// // Add element to end of array:
// john.push('blue');
// // Add element to beginning of array:
// john.unshift('Mr.');
//
// console.log(john);
//
// // Remove element from end of array:
// john.pop();
// // Remove element from beginning of array:
// john.shift();
//
// console.log(john);
//
// // Get the index of the passed element in the array:
// console.log(john.indexOf(1990));
// // indexOf returns -1 if the passes element does not exists in the array:
// console.log(john.indexOf(23));
//
// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John is a designer.'
// console.log(isDesigner);

/*-----------------------------
LECTURE 23 - CODING CHALLANGE 3
-----------------------------*/
// var bills = [124, 48, 268];
// var tips = [];
// var totals = [];
//
// function calculateTip(bill) {
//     let tip;
//     let total;
//     switch (true) {
//         case bill < 50:
//             // Calculate tip amount:
//             tip = bill * 0.2;
//             // Add tip to tips array:
//             tips.push(tip);
//             // Calculate total amount paid:
//             total = bill + tip;
//             // Add total to totals array:
//             totals.push(total);
//             break;
//         case bill >= 50 && bill < 200:
//             tip = bill * 0.15;
//             tips.push(tip);
//             total = bill + tip;
//             totals.push(total);
//             break;
//         // Bill is more than $200:
//         default:
//             tip = bill * 0.1;
//             tips.push(tip);
//             total = bill + tip;
//             totals.push(total);
//             break;
//     }
// }
//
// calculateTip(bills[0]);
// calculateTip(bills[1]);
// calculateTip(bills[2]);
//
// console.log('Bills: ' + bills);
// console.log('Tips: ' + tips);
// console.log('Totals: ' + totals);

/*---------------------------------
LECTURE 25 - OBJECTS AND PROPERTIES
---------------------------------*/

// // In objects, the order of values does not matter.
//
// // Object declared w. object literal, curly brackets {}:
// var john = {
//     // key-value pair:
//     // firstName is the property of the john object.
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };
// console.log(john);
// // Accessing object properties - use the dot notation:
// console.log(john.firstName);
// // Accessing an element in an object by using brackets:
// // Keep in mind that the value inside the brackets has to be a string.
// console.log(john['lastName']);
// var x = 'birthYear'
// console.log(john[x]);
//
// // Mutate an object:
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
//
// // Another way to create an object:
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/*------------------------------
LECTURE 26 - OBJECTS AND METHODS
------------------------------*/

// // Functions attached to an object is called a method.
// // Only objects has methods - arrays are also objects.
// // Objects has a keyword 'this' which points to itself.
//
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     // Adding a mathod to the object via a function expression:
//     // calcAge: function (birthYear) {
//     //     return 2018 - birthYear;
//     // }
//     // calcAge: function () {
//     //     return 2018 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2018 - this.birthYear;
//     }
// };
// // console.log(john.calcAge(1990));
// // console.log(john.calcAge());
// // john.age = john.calcAge();
// john.calcAge();
// console.log(john);

/*-----------------------------
LECTURE 27 - CODING CHALLENGE 4
-----------------------------*/

// var john = {
//     fullName: 'John Smith',
//     weight: 79,
//     height: 1.57,
//     calcBmi: function () {
//         const bmi = this.weight / (this.height * this.height);
//         this.bmi = bmi;
//         return bmi;
//     }
// };
// var mark = {
//     fullName: 'Mark Johnson',
//     weight: 79,
//     height: 1.57,
//     calcBmi: function() {
//         const bmi = this.weight / (this.height * this.height);
//         this.bmi = bmi;
//         return bmi;
//     }
// };
//
// // johnBmi = john.calcBmi();
// // markBmi = mark.calcBmi();
// //
// // console.log(john);
// // console.log(mark);
//
// // if (johnBmi < markBmi) {
// if (john.calcBmi() < mark.calcBmi()) {
//     console.log(mark.fullName + ' has the highest BMI of ' + mark.bmi);
// // } else if (johnBmi > markBmi) {
// } else if (john.bmi > mark.bmi) {
//     console.log(john.fullName + ' has the highest BMI of ' + john.bmi);
// } else {
//     console.log('It is a tie. Both ' + john.fullName + ' and ' + mark.fullName + ' has a BMI of ' + john.bmi);
// }

/*------------------------------
LECTURE 29 - LOOPS AND ITERATION
------------------------------*/

// // Loops automates repetitive tasks.
//
// // For loop:
// for (var i = 0; i < 10; i++) {
//     // Between the curly brackets is called the 'loop block'.
//     console.log(i);
// }
//
// // Log each element in the array:
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }
//
// // While loop:
// // - Only contains the condition:
// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// // Continue and break statements:
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue; // continue will break out of the current iteration and CONTINUE on to the next iteration.
//     console.log(john[i]);
// }
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break; // break will break out of the current iteration AND the loop.
//     console.log(john[i]);
// }
//
// // Iteration through an array from end to beginning with a for loop:
// for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }

/*-----------------------------
LECTURE 30 - CODING CHALLANGE 5
-----------------------------*/

var johnBills, johnAvgTip, markBills, markAvgTip;
johnBills = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calcTips: function() {
        for (var i = 0; i < this.bills.length; i++) {
            var bill, percentage, tip, total;
            bill = this.bills[i];
            if (bill < 50) {
                percentage = 0.2;
                tip = bill * percentage;
                total = bill + tip;
                this.tips.push(tip);
                this.totals.push(total);
            }
            else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = 0.15;
                tip = bill * percentage;
                total = bill + tip;
                this.tips.push(tip);
                this.totals.push(total);
            }
            else {
                percentage = 0.1;
                tip = bill * percentage;
                total = bill + tip;
                this.tips.push(tip);
                this.totals.push(total);
            }
        }
    }
};
markBills = {
    bills: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calcTips: function() {
        for (var i = 0; i < this.bills.length; i++) {
            var bill, percentage, tip, total;
            bill = this.bills[i];
            if (bill < 100) {
                percentage = 0.2;
                tip = bill * percentage;
                total = bill + tip;
                this.tips.push(tip);
                this.totals.push(total);
            }
            else if (bill >= 100 && bill < 300) {
                percentage = 0.1;
                tip = bill * percentage;
                total = bill + tip;
                this.tips.push(tip);
                this.totals.push(total);
            }
            else {
                percentage = 0.25;
                tip = bill * percentage;
                total = bill + tip;
                this.tips.push(tip);
                this.totals.push(total);
            }
        }
    }
};

function calcTipAvg(tips) {
    var numOfTips, sumOfTips, avgTip;
    numOfTips = tips.length;
    sumOfTips = 0;
    for (var i = 0; i < numOfTips; i++) {
        sumOfTips = sumOfTips + tips[i];
    }
    avgTip = sumOfTips / numOfTips;
    return avgTip;
}

johnBills.calcTips();
markBills.calcTips();

johnAvgTip = calcTipAvg(johnBills.tips);
markAvgTip = calcTipAvg(markBills.tips);

if (johnAvgTip < markAvgTip) {
    console.log('Mark\'s family tips the most on average: ' + markAvgTip);
}
else if (markAvgTip < johnAvgTip) {
    console.log('John\'s family tips the most on average: ' + johnAvgTip);
}
else {
    console.log('Both families tips equaly on average: ' + johnAvgTip);
}
