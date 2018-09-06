/*------------------------------------
CODING CHALLENGE 7 - CONSOLE QUIZ GAME
------------------------------------*/

( function() {
    var userScore = 0;
    // Changed var to function creating a function constructor, not a function expression:
    // var Question = function( question, choices, solution ) {
    function Question( question, choices, solution ) {
        this.question = question;
        this.choices = choices;
        this.solution = solution;
        /*
        this.display = function() {
            console.log(this.question);
            for (var i = 0; i < this.choices.length; i++) {
                console.log( i + ': ' + this.choices[i] );
            }
        }
        this.checkAnswer = function(userAnswer) {
            if ( userAnswer === 'exit' ) {
                console.log( 'You have ended the game. :(');
                this.displayScore();
            }
            else if ( parseInt( userAnswer ) === this.solution ) {
                console.log( 'That is correct! :)' );
                userScore++;
                this.displayScore();
                askQuestion();
            }
            else {
                console.log( 'That is incorrect. :(' );
                this.displayScore();
                askQuestion();
            }
        }
        */
        this.displayScore = function() {
            console.log( 'Your score is: ' + userScore);
            console.log('-------------------------');
        }
    }
    // Moved Method display out into the prototype property:
    Question.prototype.display = function() {
        console.log(this.question);
        for (var i = 0; i < this.choices.length; i++) {
            console.log( i + ': ' + this.choices[i] );
        }
    }
    // Moved method to check answer out of object and into prototype property:
    Question.prototype.checkAnswer = function( userAnswer ) {
        if ( userAnswer === 'exit' ) {
            console.log( 'You have ended the game. :(');
            this.displayScore();
        }
        else if ( parseInt( userAnswer ) === this.solution ) {
            console.log( 'That is correct! :)' );
            userScore++;
            this.displayScore();
            askQuestion();
        }
        else {
            console.log( 'That is incorrect. :(' );
            this.displayScore();
            askQuestion();
        }
    }
    var questions = [
        new Question( 'Is JavaScript the best programming language in the world?', ['Yes', 'No'], 0 ),
        new Question( 'What is the name of the teacher of this course?', ['John', 'Mike', 'Jonas'], 2 ),
        new Question( 'What word best defines coding?', ['Hard', 'Boring', 'Fun', 'Difficult'], 2 )
    ];
    askQuestion();
    function askQuestion() {
        var randomNum, userAnswer;
        // Changed Math.round() to Math.floor():
        // randomNum = Math.round( Math.random() * questions.length );
        randomNum = Math.floor( Math.random() * questions.length );
        questions[randomNum].display();
        userAnswer = prompt('Please write the number of your answer:');
        questions[randomNum].checkAnswer( userAnswer );
    }
} ) ();
