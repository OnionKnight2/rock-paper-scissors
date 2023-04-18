/** This function will randomly return one of the options for the game, it is used for computer's choice 
 *  Random number between 0 and 2, inclusively, will be selected. 
 *  Based on that, either Rock, Paper or Scissors will be computer's choice for a single game and returned from the function.
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

/** This function simulates a single round of the game. It is well known what choice beats the other.
 *  It takes 2 string parameters, one for player's choice and one for randomly selected computer's choice.
 *  Based on those parameters, it selects a winner.
 *  Function returns a string that declares the winner of that round. 
 *  Player selection should be case insensitive.
 */
function playSingleRound(playerSelection, computerSelection) {
    playerSelectionLowerCase = playerSelection.toLowerCase();
    computerSelectionLowerCase = computerSelection.toLowerCase();
    switch(playerSelectionLowerCase) {
        case "rock":
            return (computerSelectionLowerCase === "rock") ? "Draw! Rock draws Rock" :
                (computerSelectionLowerCase === "paper") ? "You Lose! Paper beats Rock" :
                "You Win! Rock beats Scissors";
        
        case "paper":
            return (computerSelectionLowerCase === "rock") ? "You Win! Paper beats Rock" :
                (computerSelectionLowerCase === "paper") ? "Draw! Paper draws Paper" :
                "You Lose! Scissors beat Paper";
        
        case "scissors":
            return (computerSelectionLowerCases === "rock") ? "You Lose! Rock beats Scissors" :
                (computerSelectionLowerCase === "paper") ? "You Win! Scissors beat Paper" :
                "Draw! Scissors draw Scissors";

        default:
            return "Huge Error!";
    }
}

/** This function is used to play a 5 round game, keep the score and declare a winner. */
function game() {

}

/** Prompt user for his selection */
const userSelection = prompt("Rock|Paper|Scissors?");
