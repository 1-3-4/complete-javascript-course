/*------------------------------------------------------------------------------
BUDGET CONTROLLER
------------------------------------------------------------------------------*/
var budgetController = ( function() {

} )();

/*------------------------------------------------------------------------------
USER INTERFACE CONTROLLER
------------------------------------------------------------------------------*/
var uiController = ( function() {

} )();

/*------------------------------------------------------------------------------
GLOBAL APP CONTROLLER
------------------------------------------------------------------------------*/
var controller = ( function( budgetCtrl, uiCtrl ) {

    var ctrlAddItem = function () {

        // Get field input data:
        // Add item to budget controller:
        // Add new item to UI:
        // Calculate budget:
        // Display budget in the UI:

        console.log('!!!');

    }

    // Event listener for btn click:
    document.querySelector('.add__btn').addEventListener( 'click', ctrlAddItem );

    // Event listener for enter key press:
    document.addEventListener( 'keypress', function( event ) {

        // Check if pressed key is enter:
        if ( event.keyCode === 13 || event.which === 13 ) {

            ctrlAddItem();

        }

    } );

} )( budgetController, uiController );
