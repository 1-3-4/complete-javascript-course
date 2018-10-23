/*------------------------------------
CODING CHALLENGE 7 - CONSOLE QUIZ GAME
------------------------------------*/

// Code is made private by using an immideately invokeked function:
( function() {
    var userScore = 0;
    // Changed var to function creating a function constructor, not a function expression:
    // var Question = function( question, choices, solution ) {
    function Question( question, choices, solution ) {
        this.question = question;
        this.choices = choices;
        this.solution = solution;
        /*
        this.displayQuestion = function() {
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
    // Moved Method displayQuestion out into the prototype property:
    // Renamed method from display to displayQuestion (here and where it is called).
    Question.prototype.displayQuestion = function() {
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

    // Instead of creating a seperate variable for each question, I've kept my questions in an array.
    const questions = [
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
        questions[randomNum].checkAnswer( userAnswer );
    }
} ) ();
