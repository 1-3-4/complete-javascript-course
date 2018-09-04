// CREATING OBJECTS: FUNCTION CONSTRUCTORS
// - Function constructors are named in PascalCase.

// How we formerly created objects:
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calcAge = function () {
    //     console.log( 2016 - this.yearOfBirth );
    // }
}
// Method placed in the prototype property of the function constructor:
// - Inheritance in practice.
Person.prototype.calcAge = function calcAge() {
    console.log( 2016 - this.yearOfBirth );
}
// Properties are not commonly placed in the prototype property but it can be done:
Person.prototype.lastName = 'Smith';

// Instansiation: Creating an instance of the Person object:
// - The 'new' operator creates an empty object, and points 'this' to it.
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
