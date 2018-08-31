/*

GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*---------
VARIABLE(S)
---------*/

var globalScores, roundScore, activePlayer;

// State variable: A variable that tells us the condition of a system.
var gameIsPlaying;

/*--------------
INITIAL UI SETUP
--------------*/

init();

/*--------------
EVENTLISTENER(S)
--------------*/

document.querySelector( '.btn-roll' ).addEventListener( 'click', function() { // Anonymous function: A function that doesn't have a name and therefore can't be reused.
    if (gameIsPlaying) {
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
            nextPlayer();
        }
    }
});
document.querySelector( '.btn-hold' ).addEventListener( 'click', function() {
    if (gameIsPlaying) {
        // 1. Add current score to global score:
        globalScores[activePlayer] += roundScore;
        // 2. Reset current score:
        roundScore = 0;
        // 3. Update the UI:
        document.getElementById( 'score-' + activePlayer ).textContent = globalScores[activePlayer];
        document.getElementById( 'current-' + activePlayer ).textContent = roundScore;
        // 3. Check if the player has won the game:
        if (globalScores[activePlayer] >= 100 ) {
            // alert('Player ' + ( activePlayer + 1 ) + ' has won the pig game with ' + globalScores[activePlayer] + ' points!');
            document.querySelector( '#name-' + activePlayer ).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            // Make sure game can't be played after a winner has been declared:
            gameIsPlaying = false;
        }
        // 4. Change active player:
        else {
            nextPlayer();
        }
    }
});
document.querySelector( '.btn-new' ).addEventListener( 'click', init);

/*---------
FUNCTION(S)
---------*/

function nextPlayer() {
    // 1. Reset active player's score:
    roundScore = 0;
    document.getElementById( 'current-' + activePlayer ).textContent = roundScore;

    // 2. Change active player:
    // Ternary operator; if activePlayer is equal to 0, change it to 1, else change it to 0:
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // .toggle removes a class if it is there and adds it if it isn't:
    document.querySelector( '.player-0-panel' ).classList.toggle( 'active' );
    document.querySelector( '.player-1-panel' ).classList.toggle( 'active' );

    // 3. Hide the die (clearing table for next player):
    document.querySelector( '.dice' ).style.display = 'none';
}
function init() {
    // Set state variable to true:
    gameIsPlaying = true;
    // Reset global scores:
    globalScores = [0, 0];
    // Reset current score:
    roundScore = 0;
    // Set active player to 0:
    activePlayer = 0;
    // Hide die on table:
    document.querySelector( '.dice' ).style.display = 'none';
    // Update UI:
    document.getElementById( 'name-0').textContent = 'Player 1';
    document.getElementById( 'name-1').textContent = 'Player 2';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
