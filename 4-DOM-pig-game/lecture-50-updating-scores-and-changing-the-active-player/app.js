/*

GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var globalScores, roundScore, activePlayer;

globalScores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Manipulate the DOM w. a 'setter':
// .textContent can only set plain text:
// document.querySelector( '#current-' + activePlayer ).textContent = dice;
// // If html is needed to be inserted, .innerHTML must be used:
// document.querySelector( '#current-' + activePlayer ).innerHTML = '<em>' + dice + '</em>';

// Read from the DOM w. a 'getter':
var x = document.querySelector( '#score-0' ).textContent;
console.log(x);

// Manipulating CSS:
document.querySelector( '.dice' ).style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// function btn() {}
// document.querySelector( '#btn-roll' ).addEventListener( 'click', btn ); // Callback function: A function that is not called by us, but another function. Therefore it isn't written as btn() but btn

document.querySelector( '.btn-roll' ).addEventListener( 'click', function() { // Anonymous function: A function that doesn't have a name and therefore can't be reused.
    // 1. Generate random number:
    var dice = Math.floor( Math.random() * 6 ) + 1;
    // 2. Display the result:
    var diceDOM = document.querySelector( '.dice' );
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Update the round score, IF random number != 1:
    if ( dice !== 1 ) {
        roundScore += dice;
        document.getElementById( 'current-' + activePlayer ).textContent = roundScore;
    }
    else {
        // Reset player score:
        roundScore = 0;
        document.getElementById( 'current-' + activePlayer ).textContent = roundScore;

        // Change active player:
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // Ternary operator.
        // Manually remove and add a class:
        // document.querySelector( '.player-0-panel' ).classList.remove( 'active' );
        // document.querySelector( '.player-1-panel' ).classList.add( 'active' );
        // .toggle removes a class if it is there and adds it if it isn't:
        document.querySelector( '.player-0-panel' ).classList.toggle( 'active' );
        document.querySelector( '.player-1-panel' ).classList.toggle( 'active' );

        // Hide the die:
        document.querySelector( '.dice' ).style.display = 'none';
    }
});
