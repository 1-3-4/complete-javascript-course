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

    // VARIABLE(S)

    var data = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        },
        budget: 0,
        percentage: -1
    };

    // PRIVATE FUNCTION(S)

    var calculateTotal = function ( type ) {

        var sum = 0;

        data.allItems[type].forEach( function ( currentElement ) {
            sum = sum + currentElement.value;
        } );

        data.totals[type] = sum;

    }

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

        deleteItem: function ( typ, id ) {

            var ids, idIndex;

            // Find the index of the passed id in the correct type array:

            // Create an array of the ids of the correct type in the data structure:
            ids = data.allItems[typ].map( function ( currentElement ) {

                return currentElement.id;

            } );

            // Get the index of the id passed to the function:
            idIndex = ids.indexOf( id );

            // Remove the element from the data structure:
            if ( idIndex !== -1 ) { // In case the function did not find the id:

                data.allItems[typ].splice( idIndex, 1 ); // The splice method is used to remove elements from an array.

            }

        },

        calculateBudget: function () {

            // Calculate total income and expenses:
            calculateTotal( 'expense' );
            calculateTotal( 'income' );

            // Calculate budget (income - expenses):
            data.budget = data.totals.income - data.totals.expense;

            // Calculate the % of income spent (if there is an income):
            if ( data.totals.income > 0 ) {
                data.percentage = Math.round((data.totals.expense / data.totals.income) * 100);
            }
            else {
                data.percentage = -1;
            }

        },

        getBudget: function () {

            return {
                budget: data.budget,
                totalIncome: data.totals.income,
                totalExpense: data.totals.expense,
                percentage: data.percentage
            };

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
        expenseContainer: '.expenses__list',
        labelBudget: '.budget__value',
        labelIncome: '.budget__income--value',
        labelExpenses: '.budget__expenses--value',
        labelPercentage: '.budget__expenses--percentage',
        itemContainer: '.container'
    }

    // PUBLIC FUNCTION(S)
    return {
        getInput: function () {
            return {
                type: document.querySelector( domStrings.inputType ).value, // Will be either 'income' or 'expense', not øinc' or 'exp'.
                description: document.querySelector( domStrings.inputDescription ).value,
                value: parseFloat( document.querySelector( domStrings.inputValue ).value )
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

        clearFields: function () {

            var fields, fieldsArray;

            fields = document.querySelectorAll( domStrings.inputDescription + ', ' + domStrings.inputValue ); // The querySelectorAll returns the data type list.

            // Turn the returned list into an array:
            fieldsArray = Array.prototype.slice.call( fields );

            // Loop through array and clear fields:
            fieldsArray.forEach( function ( currentElement, indexNumber, entireArray ) { // forEach loop is supplied a callback function that is applied to every element in the array.
                currentElement.value = '';
            });

            // Move focus to first (description) input field:
            fieldsArray[0].focus();
        },

        displayBudget: function ( obj ) {

            document.querySelector( domStrings.labelBudget ).textContent = obj.budget;
            document.querySelector( domStrings.labelIncome ).textContent = '+ ' + obj.totalIncome;
            document.querySelector( domStrings.labelExpenses ).textContent = '- ' + obj.totalExpense;
            if ( obj.percentage > 0 ) {
                document.querySelector( domStrings.labelPercentage ).textContent = obj.percentage + '%';
            }
            else {
                document.querySelector( domStrings.labelPercentage ).textContent = '---';
            }

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

        document.querySelector(dom.itemContainer).addEventListener( 'click', ctrlDeleteItem );
    }

    var updateBudget = function () {

        var budget;

        // Calculate budget:
        budgetCtrl.calculateBudget();

        // Return the budget:
        budget = budgetCtrl.getBudget();

        // Display budget in the UI (method from the uiController):
        uiCtrl.displayBudget( budget );

    }

    var ctrlAddItem = function () {

        var input, newItem;

        // Get field input data:
        input = uiCtrl.getInput();

        // Validate the data from the input fields:
        if ( input.description !== '' && !isNaN(input.value) && input.value > 0 ) {

            // Add item to budget controller:
            newItem = budgetCtrl.addItem( input.type, input.description, input.value );

            // Add new item to UI:
            uiCtrl.addListItem( newItem, input.type );

            // Clear input fields in UI:
            uiCtrl.clearFields();

            // Calculate budget and display budget in the UI:
            updateBudget();

        }

    }

    var ctrlDeleteItem = function ( event ) {

        var itemId;

        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if ( itemId ) {

            var spliItemId, id, type;

            // Break up the string where it contains a dash:
            spliItemId = itemId.split( '-' ); // Returns an array.

            type = spliItemId[0];
            id = spliItemId[1];

            // Delete item from data structure:
            budgetCtrl.deleteItem( type, id );

            // Delete item from UI:

            // Update and show new budget:

        }

    }

    // PUBLIC FUNCTION(S)

    return {
        init: function () {
            console.log( 'Application has started.' );
            setupEventListeners();
            uiCtrl.displayBudget( { budget: 0, totalIncome: 0, totalExpense: 0, percentage: -1 } );
        }
    }

} )( budgetController, uiController );

/*------------------------------------------------------------------------------
APP INITIALISATION
------------------------------------------------------------------------------*/

controller.init();
