/** This function will randomly return one of the options for the game, it is used for computer's choice 
 *  Random number between 0 and 2, inclusively, will be selected. 
 *  Based on that, either Rock, Paper or Scissors will be computer's choice for a single game.
*/
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    switch(randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Something went very wrong";
    }
}