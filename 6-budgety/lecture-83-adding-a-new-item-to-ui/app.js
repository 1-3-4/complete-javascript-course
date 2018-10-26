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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
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

        // Pass an income or expense object as an argument
        addListItem: function ( obj, typ ) {

            var html, newHtml, container;

            // Create a HTML string w. placeholder text:
            if ( typ === 'income' ) {

                container = domStrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix">' +
                        '<div class="item__value">%value%</div>' +
                        '<div class="item__delete">' +
                            '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            }
            else if ( typ === 'expense' ) {

                container = domStrings.expenseContainer;

                html = '<div class="item clearfix" id="expense-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix">' +
                        '<div class="item__value">%value%</div>' +
                        '<div class="item__percentage">21%</div>' +
                        '<div class="item__delete">' +
                            '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            }

            // Replace placeholder text with actual data:
            newHtml = html.replace( '%id%', obj.id );
            newHtml = newHtml.replace( '%description%', obj.description );
            newHtml = newHtml.replace( '%value%', obj.value );

            // Insert HTML intp DOM:
            document.querySelector( container ).insertAdjacentHTML( 'beforeend', newHtml );

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
        uiCtrl.addListItem( newItem, input.type );

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
