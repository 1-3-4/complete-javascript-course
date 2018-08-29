///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        // Function can not access var c because third() is in a different scope than second()
        third();
    }
}

function third() {
    var d = 'John';
    // console.log(a + b + c + d);
    // The only variables third() has access to:
    console.log(a + d);
}
