/*-----------
OBJECT.CREATE
-----------*/

/*
Object.create creates an object which inherits directly from the one passed in the first argument (the prototype).
Function constructor creates an object that inherits from the constructor's prototype property.
*/

// Writing the prototype as an object:
var personProto = {
    calcAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

// Create an object, and manually add properties after its creation:
var john = Object.create( personProto );
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// Create an object, and add properties to it during its creation:
var jane = Object.create( personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: {value: 'designer' }
});
