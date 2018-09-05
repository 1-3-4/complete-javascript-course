/*--------------------
PRIMITIVES VS. OBJECTS
--------------------*/

// Variables containing primitives, contains the data inside the variable themselves.
// Variables associated w. objects does not contain the object. They contain a reference to the place in memory where the object is stored.

// Primitives, each variable holds its own copy of the data:

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects, each object points to the stored object in memory:
// Both obj1 and obj2 is the same object.

var obj1 = {
    name: 'John',
    age: 26
}
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};
function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
// When a primitive is passed to a function a copy of it is created.
// When an object is passed it isn't the object itself but a reference to it.
// Therefore the original primitive remains unchanged while the object is changed:
change(age, obj);

console.log(age);
console.log(obj.city);
