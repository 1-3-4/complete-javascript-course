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

globalScores = [0, 0];
roundScore = 0;
activePlayer = 0;

/*--------------
INITIAL UI SETUP
--------------*/

// Manipulating CSS:
document.querySelector( '.dice' ).style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

/*--------------
EVENTLISTENER(S)
--------------*/

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
        nextPlayer();
    }
});
document.querySelector( '.btn-hold' ).addEventListener( 'click', function() {
    // 1. Add current score to global score:
    globalScores[activePlayer] += roundScore;
    // 2. Reset current score:
    roundScore = 0;
    // 3. Update the UI:
    document.getElementById( 'score-' + activePlayer ).textContent = globalScores[activePlayer];
    document.getElementById( 'current-' + activePlayer ).textContent = roundScore;
    // 3. Check if the player has won the game:
    if (globalScores[activePlayer] >= 10 ) {
        // alert('Player ' + ( activePlayer + 1 ) + ' has won the pig game with ' + globalScores[activePlayer] + ' points!');
        document.querySelector( '#name-' + activePlayer ).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }
    // 4. Change active player:
    else {
        nextPlayer();
    }
});

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

// // Reset game data:
// globalScores = [0, 0];
// // Reset game UI:
// document.getElementById( 'score-0' ).textContent = globalScores[activePlayer];
// document.getElementById( 'score-1' ).textContent = globalScores[activePlayer];
