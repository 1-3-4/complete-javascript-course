/*------------------------------------------------------------------------------
BUDGET (data) CONTROLLER
------------------------------------------------------------------------------*/
var budgetController = ( function() {

    // CLASS(ES)
    var Expense = function ( id, description, value ) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function ( id, description, value ) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // METHOD(S)

    // VARIABLE(S)

    var data = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        }
    };

    // PUBLIC FUNCTION(S)

    return {
        addItem: function ( typ, des, val ) {

            var newItem, id;

            var dataArr = data.allItems[typ];
            var dataArrLastElem = dataArr.length - 1;

            // Create new id:
            if ( dataArr.length > 0 ) {
                id = dataArr[dataArrLastElem].id + 1;
            }
            else {
                id = 0;
            }

            // Create new item based on type:
            if ( typ === 'expense' ) {
                newItem = new Expense( id, des, val );
            } else if ( typ === 'income' ) {
                newItem = new Income( id, des, val);
            }

            // Add (push) new item to data structure:
            data.allItems[typ].push( newItem );

            // Return new item:
            return newItem;
        },
        testing: function () {
            console.log(data);
        }
    };

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

        var input, newItem;

        // Get field input data:
        input = uiCtrl.getInput();

        // Add item to budget controller:
        newItem = budgetCtrl.addItem( input.type, input.description, input.value );

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
