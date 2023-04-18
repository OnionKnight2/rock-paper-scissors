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
 * 
 * Function must be rewritten to just return a result.
 * It calls another function to write out the result.
 * This function now only returns who won: player or computer or if it's a tie
 */
function playSingleRound(playerSelection, computerSelection) {
    playerSelectionLowerCase = playerSelection.toLowerCase();
    computerSelectionLowerCase = computerSelection.toLowerCase();
    console.log(writeResult(playerSelectionLowerCase, computerSelectionLowerCase));

    switch(playerSelectionLowerCase) {
        case "rock":
            return (computerSelectionLowerCase === "rock") ? "draw" :
            (computerSelectionLowerCase === "paper") ? "computer" : "player";
        
        case "paper":
            return (computerSelectionLowerCase === "rock") ? "player" :
            (computerSelectionLowerCase === "paper") ? "draw" : "computer";
        
        case "scissors":
            return (computerSelectionLowerCase === "rock") ? "computer" :
            (computerSelectionLowerCase === "paper") ? "player" : "draw";

        default:
            return "error!";
    }
}

/** This is a helper function used to write out outcome for a single game. 
 *  It takes 2 parameters, player selection and a computer selection.
 *  Based on them, it returns a string containing a result, the winner and the loser.
 */
function writeResult(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            return (computerSelection === "rock") ? "Draw! Rock draws Rock" :
                (computerSelectionLowerCase === "paper") ? "You Lose! Paper beats Rock" :
                "You Win! Rock beats Scissors";
        
        case "paper":
            return (computerSelection === "rock") ? "You Win! Paper beats Rock" :
                (computerSelection === "paper") ? "Draw! Paper draws Paper" :
                "You Lose! Scissors beat Paper";
        
        case "scissors":
            return (computerSelection === "rock") ? "You Lose! Rock beats Scissors" :
                (computerSelection === "paper") ? "You Win! Scissors beat Paper" :
                "Draw! Scissors draw Scissors";

        default:
            return "Please enter a valid word";
    }
}

/** This function is used to play a 5 round game, keep the score and declare a winner. 
 *  Function playSingleRound() must be rewritten to return a result, not to write out outcome.
 *  This function should take the output from that function and use it to keep score. It should loop 5 times.
 *  Every time, the user is asked to enter his choice. Based on that choice, one game will be played. 
 *  Based on the result, score will be updated.
 *  When 5 games are played, final winner will be declared.
*/
function game() {    
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        /** Prompt user for his selection */
        const playerSelection = prompt("Rock|Paper|Scissors?");
        const outcome = playSingleRound(playerSelection, getComputerChoice());

        switch(outcome) {
            case "player":
                playerScore++;
                break;
            
            case "computer":
                computerScore++;
                break;
        }

        console.log(`Current score: ${playerScore} - ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log(`Player Wins! Final score: ${playerScore} - ${computerScore}`);
    }
    else if (computerScore > playerScore) {
        console.log(`Computer Wins! Final score: ${playerScore} - ${computerScore}`);
    }
    else {
        console.log(`It's a Draw! Final score: ${playerScore} - ${computerScore}`);
    }
}

game();