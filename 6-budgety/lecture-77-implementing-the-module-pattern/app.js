// Keeping the controller module private by enclosing it in an Immediately Invoked Function Expression:
var budgetController = ( function() {
    // These variables are 'in the closure' and is therefore private:
    var x = 23;
    var add = function(a) {
        return x + a;
    }

    // The object that the IIFE return is 'outside of the closure' and is therefore public:
    return {
        publicTest: function(b) {
            return add(b);
        }
    }
} )();

var uiController = ( function() {

} )();

// This module is aware of the two other modules:
var controller = ( function( budgetCtrl, uiCtrl ) {
    var z = budgetCtrl.publicTest(5);
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
} )( budgetController, uiController );
