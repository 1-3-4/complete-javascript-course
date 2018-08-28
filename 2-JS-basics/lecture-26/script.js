/*------------------------------
LECTURE 26 - OBJECTS AND METHODS
------------------------------*/

// Functions attached to an object is called a method.
// Only objects has methods - arrays are also objects.
// Objects has a keyword 'this' which points to itself.

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    // Adding a mathod to the object via a function expression:
    // calcAge: function (birthYear) {
    //     return 2018 - birthYear;
    // }
    // calcAge: function () {
    //     return 2018 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2018 - this.birthYear;
    }
};
// console.log(john.calcAge(1990));
// console.log(john.calcAge());
// john.age = john.calcAge();
john.calcAge();
console.log(john);
