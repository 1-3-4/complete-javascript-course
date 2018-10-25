/*------------------------------------------------------------------------------
BUDGET (data) CONTROLLER
------------------------------------------------------------------------------*/
var budgetController = ( function() {

    // CLASS(ES)
    var Expense = function ( id, description, value ) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function ( id, description, value ) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    // METHOD(S)

    // VARIABLE(S)

    var data {
        allItems: {
            expenses: [],
            incomes: []
        },
        totals: {
            expenses: 0,
            incomes: 0
        }
    }

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

    // FUNCTION(S)

    var setupEventListeners = function () {

        var dom = uiCtrl.getDomStrings();

        document.querySelector( dom.inputBtn ).addEventListener( 'click', ctrlAddItem );

        document.addEventListener( 'keypress', function( event ) {
            if ( event.keyCode === 13 || event.which === 13 ) { // '13' is the keycode for both 'enter' keys.
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function () {

        // Get field input data:
        var input = uiCtrl.getInput();

        // Add item to budget controller:
        // Add new item to UI:
        // Calculate budget:
        // Display budget in the UI:

    }

    // PUBLIC FUNCTION(S)

    return {
        init: function () {
            console.log( 'Application has started.' );
            setupEventListeners();
        }
    }

} )( budgetController, uiController );

/*------------------------------------------------------------------------------
APP INITIALISATION
------------------------------------------------------------------------------*/

controller.init();
