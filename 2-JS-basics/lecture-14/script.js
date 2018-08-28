/********************************
LECTURE 14 - IF / ELSE STATEMENTS
********************************/
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var johnHeight, johnWeight, johnBmi, markHeight, markWeight, markBmi;

johnHeight = 1.85;
johnWeight = 92;
johnBmi = johnWeight / (johnHeight * johnHeight);

markHeight = 1.63;
markWeight = 85;
markBmi = markWeight / (markHeight * markHeight);

if (markBmi > johnBmi) {
    console.log('Mark\'s BMI is higher than John\'s.');
}
else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
