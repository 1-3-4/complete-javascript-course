/*-----------------------
Lecture: The this keyword
-----------------------*/

// console.log(this);

// Regular function call:

calcAge(1985);

function calcAge(year) {
    console.log(2016 - year);
    console.log(this);
}

// Methid call:

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        // This is a regular function, even though it is written inside a method:
        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
};

john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method borrowing:
mike.calcAge = john.calcAge;
mike.calcAge(); // Proves that 'this' is only set when the method is called.
