/*------------------------------------------------------------------------------
BUDGET CONTROLLER
------------------------------------------------------------------------------*/
var budgetController = ( function() {



} )();

/*------------------------------------------------------------------------------
USER INTERFACE CONTROLLER
------------------------------------------------------------------------------*/
var uiController = ( function() {
    // VARIABLE(S)
    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    // PUBLIC FUNCTION(S)
    return {
        getInput: function () {
            return {
                type: document.querySelector( domStrings.inputType ).value, // Will be either 'income' or 'expense', not øinc' or 'exp'.
                description: document.querySelector( domStrings.inputDescription ).value,
                value: document.querySelector( domStrings.inputValue ).value
            };
        },
        getDomStrings: function () {
            return domStrings;
        }
    };

} )();

/*------------------------------------------------------------------------------
GLOBAL APP CONTROLLER
------------------------------------------------------------------------------*/
var controller = ( function( budgetCtrl, uiCtrl ) {

    // VARIABLE(S)
    var dom = uiCtrl.getDomStrings();

    // FUNCTION(S)
    var ctrlAddItem = function () {

        // Get field input data:
        var input = uiCtrl.getInput();
        console.log(input);

        // Add item to budget controller:
        // Add new item to UI:
        // Calculate budget:
        // Display budget in the UI:

    }

    // Event listener for btn click:
    document.querySelector( dom.inputBtn ).addEventListener( 'click', ctrlAddItem );

    // Event listener for enter key press:
    document.addEventListener( 'keypress', function( event ) {

        // Check if pressed key is enter:
        if ( event.keyCode === 13 || event.which === 13 ) {

            ctrlAddItem();

        }

    } );

} )( budgetController, uiController );
