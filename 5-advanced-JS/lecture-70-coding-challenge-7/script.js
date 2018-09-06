/*------------------------------------
CODING CHALLENGE 7 - CONSOLE QUIZ GAME
------------------------------------*/

// // 1. Function Constructor:
// var Question = function( question, choices, solution ) {
//     this.question = question;
//     this.choices = choices;
//     this.solution = solution;
//     // 4. Hint: Method To Write Question And Choices In Console:
//     this.display = function() {
//         console.log(this.question);
//         for (var i = 0; i < this.choices.length; i++) {
//             console.log( i + ': ' + this.choices[i] );
//         }
//     }
//     // 6. Check If Answer Is Correct:
//     this.checkAnswer = function(userAnswer) {
//         if ( parseInt( userAnswer ) === this.solution ) {
//             console.log( 'That is correct! :)' );
//         }
//         else {
//             console.log( 'That is incorrect. :(' );
//         }
//     }
// }

// // 2. Questions Created Using the Constructor:
// var question1 = new Question( 'Is JavaScript the best programming language in the world?', ['Yes', 'No'], 0 );
// var question2 = new Question( 'What is the name of the teacher of this course?', ['John', 'Mike', 'Jonas'], 2 );
// var question3 = new Question( 'What word best defines coding?', ['Hard', 'Boring', 'Fun', 'Difficult'], 2 );

// // 3. Store Questions Inside An Array:
// var questions = [
//     new Question( 'Is JavaScript the best programming language in the world?', ['Yes', 'No'], 0 ),
//     new Question( 'What is the name of the teacher of this course?', ['John', 'Mike', 'Jonas'], 2 ),
//     new Question( 'What word best defines coding?', ['Hard', 'Boring', 'Fun', 'Difficult'], 2 )
// ];

// // 4. Select A Random Question And Log It In The Console:
// var randomNum = Math.round( Math.random() * questions.length );
// questions[randomNum].display();

// // 5. Prompt User For Answer:
// var userAnswer = prompt('Please write the number of your answer:');

// // 6. Check If Answer Is Correct:
// questions[randomNum].checkAnswer( userAnswer );

// 7. Make Code Private By Using IIFE:
( function() {
    // 10. Keeping Track Of Users Score By Using Closures:
    var userScore = 0;
    // 1. Function Constructor:
    var Question = function( question, choices, solution ) {
        this.question = question;
        this.choices = choices;
        this.solution = solution;
        // 4. Hint: Method To Write Question And Choices In Console:
        this.display = function() {
            console.log(this.question);
            for (var i = 0; i < this.choices.length; i++) {
                console.log( i + ': ' + this.choices[i] );
            }
        }
        // 6. Check If Answer Is Correct:
        this.checkAnswer = function(userAnswer) {
            // 9. Check If User Wants To Quit:
            if ( userAnswer === 'exit' ) {
                console.log( 'You have ended the game. :(');
                // 11. Showing The User's Final Score:
                this.displayScore();
            }
            else if ( parseInt( userAnswer ) === this.solution ) {
                console.log( 'That is correct! :)' );
                // 11. Add To And Display Current User Score:
                userScore++;
                this.displayScore();
                // 8. Automatically Ask New Question:
                askQuestion();
            }
            else {
                console.log( 'That is incorrect. :(' );
                // 11. Display Previous User Score:
                this.displayScore();
                // 8. Automatically Ask New Question:
                askQuestion();
            }
        }
        // 11. Display Score In The Console:
        this.displayScore = function() {
            console.log( 'Your score is: ' + userScore);
            console.log('-------------------------');
        }
    }
    // 3. Store Questions Inside An Array:
    var questions = [
        new Question( 'Is JavaScript the best programming language in the world?', ['Yes', 'No'], 0 ),
        new Question( 'What is the name of the teacher of this course?', ['John', 'Mike', 'Jonas'], 2 ),
        new Question( 'What word best defines coding?', ['Hard', 'Boring', 'Fun', 'Difficult'], 2 )
    ];
    /*
    // 4. Select A Random Question And Log It In The Console:
    var randomNum = Math.round( Math.random() * questions.length );
    questions[randomNum].display();
    // 5. Prompt User For Answer:
    var userAnswer = prompt('Please write the number of your answer:');
    // 6. Check If Answer Is Correct:
    questions[randomNum].checkAnswer( userAnswer );
    */
    // 8. Create A Function To Ask The User A Random Question:
    askQuestion();
    function askQuestion() {
        var randomNum, userAnswer;
        randomNum = Math.round( Math.random() * questions.length );
        questions[randomNum].display();
        userAnswer = prompt('Please write the number of your answer:');
        questions[randomNum].checkAnswer( userAnswer );
    }
} ) ();
