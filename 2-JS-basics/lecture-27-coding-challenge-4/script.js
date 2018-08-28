/*-----------------------------
LECTURE 27 - CODING CHALLENGE 4
-----------------------------*/

var john = {
    fullName: 'John Smith',
    weight: 79,
    height: 1.57,
    calcBmi: function () {
        const bmi = this.weight / (this.height * this.height);
        this.bmi = bmi;
        return bmi;
    }
};
var mark = {
    fullName: 'Mark Johnson',
    weight: 79,
    height: 1.57,
    calcBmi: function() {
        const bmi = this.weight / (this.height * this.height);
        this.bmi = bmi;
        return bmi;
    }
};

// johnBmi = john.calcBmi();
// markBmi = mark.calcBmi();
//
// console.log(john);
// console.log(mark);

// if (johnBmi < markBmi) {
if (john.calcBmi() < mark.calcBmi()) {
    console.log(mark.fullName + ' has the highest BMI of ' + mark.bmi);
// } else if (johnBmi > markBmi) {
} else if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has the highest BMI of ' + john.bmi);
} else {
    console.log('It is a tie. Both ' + john.fullName + ' and ' + mark.fullName + ' has a BMI of ' + john.bmi);
}
