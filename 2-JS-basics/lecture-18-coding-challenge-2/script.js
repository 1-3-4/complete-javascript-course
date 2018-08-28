/*-----------------------------
LECTURE 18 - CODING CHALLENGE 2
-----------------------------*/

var teamJohnScoreOne, teamJohnScoreTwo, teamJohnScoreThree, teamJohnAvg, teamMikeScoreOne, teamMikeScoreTwo, teamMikeScoreThree, teamMikeAvg, teamMaryScoreOne, teamMaryScoreTwo, teamMaryScoreThree, teamMaryAvg;

teamJohnScoreOne = 89;
teamJohnScoreTwo = 120;
teamJohnScoreThree = 103;
teamMikeScoreOne = 116;
teamMikeScoreTwo = 94;
teamMikeScoreThree = 123;
teamMaryScoreOne = 97;
teamMaryScoreTwo = 134;
teamMaryScoreThree = 105;

teamJohnAvg = (teamJohnScoreOne + teamJohnScoreTwo + teamJohnScoreThree) / 3;
teamMikeAvg = (teamMikeScoreOne + teamMikeScoreTwo + teamMikeScoreThree) / 3;
teamMaryAvg = (teamMaryScoreOne + teamMaryScoreTwo + teamMaryScoreThree) / 3;

// if (teamJohnAvg > teamMikeAvg) {
//     console.log('Team John wins on average w. ' + teamJohnAvg + ' points.');
// }
// else if (teamJohnAvg < teamMikeAvg) {
//     console.log('Team Mike wins on average w. ' + teamMikeAvg + ' points.');
// }
// else {
//     console.log('The teams draws on average w. ' + teamMikeAvg + ' points.');
// }

switch (true) {
    // wins
    case teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg:
        console.log('Team John wins on average w. ' + teamJohnAvg + ' points.');
        break;
    case teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg:
        console.log('Team Mike wins on average w. ' + teamMikeAvg + ' points.');
        break;
    case teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg:
        console.log('Team Mary wins on average w. ' + teamMaryAvg + ' points.');
        break;
    // draws
    case teamJohnAvg === teamMikeAvg && teamJohnAvg === teamMaryAvg:
        console.log('All teams draws on average w. ' + teamJohnAvg + ' points.');
        break;
    case teamJohnAvg === teamMikeAvg && teamJohnAvg > teamMaryAvg:
        console.log('Team John and Team Mike ties w. ' + teamJohnAvg + ' points, but both wins over Team Mary.');
        break;
    case teamJohnAvg === teamMikeAvg && teamJohnAvg < teamMaryAvg:
        console.log('Team John and Team Mike ties w. ' + teamJohnAvg + ' points, but both loses to Team Mary.');
        break;
    case teamJohnAvg === teamMaryAvg && teamJohnAvg > teamMikeAvg:
        console.log('Team John and Team Mary ties w. ' + teamJohnAvg + ' points, but both wins over Team Mike.');
        break;
    case teamJohnAvg === teamMaryAvg && teamJohnAvg < teamMikeAvg:
        console.log('Team John and Team Mary ties w. ' + teamJohnAvg + ' points, but both loses to Team Mike.');
        break;
    case teamMikeAvg === teamMaryAvg && teamMikeAvg > teamJohnAvg:
        console.log('Team Mike and Team Mary ties w. ' + teamMikeAvg + ' points, but both wins over Team John.');
        break;
    case teamMikeAvg === teamMaryAvg && teamMikeAvg < teamJohnAvg:
        console.log('Team Mike and Team Mary ties w. ' + teamMikeAvg + ' points, but both loses to Team John.');
        break;
    case teamMikeAvg === teamMaryAvg && teamMikeAvg > teamJohnAvg:
        console.log('Team Mike and Team Mary ties w. ' + teamMikeAvg + 'points, but both wins over Team John.');
        break;
}
