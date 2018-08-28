/*---------------------------
LECTURE 12 - CODING CHALLENGE
---------------------------*/
var johnHeight, johnWeight, johnBmi, markHeight, markWeight, markBmi, markBmiHigherThanJohn;
johnHeight = 1.85;
johnWeight = 92;
johnBmi = johnWeight / (johnHeight * johnHeight);
markHeight = 1.63;
markWeight = 85;
markBmi = markWeight / (markHeight * markHeight);

markBmiHigherThanJohn = markBmi > johnBmi;

console.log('Is Mark\'s BMI higher than John\'s? ' + markBmiHigherThanJohn);
console.log(markBmi, johnBmi);
