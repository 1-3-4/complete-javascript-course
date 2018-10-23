/*------------------------------------
CODING CHALLENGE 7 - CONSOLE QUIZ GAME
------------------------------------*/

// Code is made private by using an immediately invokeked function:
// ( function() {
    // No longer needed:
    // var userScore = 0;
    // Changed var to function creating a function constructor, not a function expression:
    // var Question = function( question, choices, solution ) {
    function Question( question, choices, solution ) {
        this.question = question;
        this.choices = choices;
        this.solution = solution;
        // Moved method to prototype property:
        // this.displayScore = function() {
        //     console.log( 'Your score is: ' + userScore);
        //     console.log('-------------------------');
        // }
    }

    // Moved Method displayQuestion out into the prototype property:
    // Renamed method from display to displayQuestion (here and where it is called).
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.choices.length; i++) {
            console.log( i + ': ' + this.choices[i] );
        }
    }

    // Moved method to check answer out of object and into prototype property:
    // Added callback function to display the score:
    Question.prototype.checkAnswer = function( userAnswer, keepScoreCallback ) {

        var score;

        if ( userAnswer === 'exit' ) {
            console.log( 'You have ended the game. :(' );
            // Instead of using a class method to keep score, use closures:
            // this.displayScore();
            score = keepScore(false);
        }
        else if ( parseInt( userAnswer ) === this.solution ) {
            console.log( 'That is correct! :)' );
            // userScore++;
            // this.displayScore();
            // score = keepScoreCallback( true );
            // askQuestion();
        }
        else {
            console.log( 'That is incorrect. :(' );
            // this.displayScore();
            // score = keepScoreCallback( false );
            // askQuestion();
        }
        // Display the score:
        this.displayScore( score );
    }

    Question.prototype.displayScore = function( score ) {
        console.log( 'Your current score is: ' + score);
        console.log('-------------------------------------');
    }

    // Instead of creating a seperate variable for each question, I've kept my questions in an array.
    var questions = [
        new Question( 'Is JavaScript the best programming language in the world?', ['Yes', 'No'], 0 ),
        new Question( 'What is the name of the teacher of this course?', ['John', 'Mike', 'Jonas'], 2 ),
        new Question( 'What word best defines coding?', ['Hard', 'Boring', 'Fun', 'Difficult'], 2 )
    ];

    askQuestion();
    function askQuestion() {
        // Changed var to let since the variables are only used inside the function.
        // var randomNum, userAnswer;
        let randomNum, userAnswer;
        // Changed Math.round() to Math.floor():
        // randomNum = Math.round( Math.random() * questions.length );
        randomNum = Math.floor( Math.random() * questions.length );
        questions[randomNum].displayQuestion();
        // Chose not to instantly parse the answer into an integer.
        userAnswer = prompt('Please write the number of your answer:');

        // Did not move the method call into the if-statement since checkAnswer performs an action if the user submits exit.
        // Added the keepScore function to the passed arguments:
        questions[randomNum].checkAnswer( userAnswer, keepScore );

        // Moved the functionality of automatically asking a new question into the askQuestion funtion, instead of having it in the checkAnswer method:
        if ( userAnswer !== 'exit' ) {
            askQuestion();
        }
    }

    // Using closures to keep score:
    function calculateScore() {
        var userScore = 0;
        return function( solution ) {
            if ( solution === true ) {
                userScore++;
            }
            return userScore;
        }
    }
    var keepScore = calculateScore();

// } ) ();
