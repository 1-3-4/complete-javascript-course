( function() {
    // var score;
    // console.log( 'sb ' + score);
    // score = calculateScore()(true);
    // console.log( 'cb ' + score);
    // // score = keepScore(true);
    // // score = keepScore(true);
    // // console.log(score);

    /*--------------------------------------------------------------------------
    CLASS(ES)
    --------------------------------------------------------------------------*/
    function Question( question, choices, solution) {
        this.question = question;
        this.choices = choices;
        this.solution = solution;
    }

    /*--------------------------------------------------------------------------
    METHOD(S)
    --------------------------------------------------------------------------*/
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.choices.length; i++) {
            console.log( i + ': ' + this.choices[i] );
        }
    }

    Question.prototype.checkAnswer = function( userAnswer, keepScoreCallback ) {
        let userScore;
        // If the user's answer is correct:
        if ( userAnswer === this.solution ) {
            console.log( 'That is correct! :)');
            // Calculate new score:
            userScore = keepScoreCallback( true );
        }
        // If the user's answer is incorrect:
        else {
            console.log( 'That is incorrect. :( Try again.');
            userScore = keepScoreCallback( false );
        }
        this.displayScore( userScore );
    }

    Question.prototype.displayScore = function( score ) {
        console.log( 'Your current score is: ' + score);
    }

    /*--------------------------------------------------------------------------
    VARIABLE(S)
    --------------------------------------------------------------------------*/
    var questions = [
        new Question( 'Is JavaScript the best programming language in the world?', ['Yes', 'No'], 0 ),
        new Question( 'What is the name of the teacher of this course?', ['John', 'Mike', 'Jonas'], 2 ),
        new Question( 'What word best defines coding?', ['Hard', 'Boring', 'Fun', 'Difficult'], 2 )
    ];

    /*--------------------------------------------------------------------------
    FUNCTION(S)
    --------------------------------------------------------------------------*/
    function askQuestion() {
        let n, userAnswer;
        n = Math.floor( Math.random() * questions.length );
        // Display question:
        questions[n].displayQuestion();
        // Get user's answer:
        userAnswer = prompt( 'Please write the number of your answer:');
        // Check that user does not want to exit the game:
        if ( userAnswer !== 'exit' ) {
            // Check user's answer:
            questions[n].checkAnswer( parseInt( userAnswer ), keepScore );
            console.log( '' );
            askQuestion();
        }
    }

    function calculateScore() {
        let userScore = 0;
        return function( isAnswerCorrect ) {
            if ( isAnswerCorrect ) {
                userScore++;
            }
            return userScore;
        }
    }

    var keepScore = calculateScore();

    /*--------------------------------------------------------------------------
    INITIATION
    --------------------------------------------------------------------------*/
    askQuestion();

    // // var score;
    // // console.log(score);
    // score = calculateScore()(true);
    // console.log( 'ce ' + score);
    // score = keepScore(true);
    // score = keepScore(true);
    // console.log( 'ke ' + score);

}) ();
