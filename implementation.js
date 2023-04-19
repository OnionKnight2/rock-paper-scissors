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

// Find player selection based on what the user clicked
function playSingleRound(buttonClicked) {
    playerSelectionLowerCase = buttonClicked.textContent.toLowerCase();
    computerSelectionLowerCase = getComputerChoice().toLowerCase();

    // Return who won the round or if it's a draw
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
    
    // Create 3 buttons with ids, one for each selection and append them to a container div
    const resContainer = document.querySelector('.res-container');
    const rockBtn = document.createElement('button');
    rockBtn.textContent = "Rock";
    rockBtn.setAttribute("id", "rock")
    const paperBtn = document.createElement('button');
    paperBtn.textContent = "Paper";
    paperBtn.setAttribute("id", "paper");
    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = "Scissors";
    scissorsBtn.setAttribute("id", "scissors");
    document.querySelector('.btnimg1').appendChild(rockBtn); 
    document.querySelector('.btnimg2').appendChild(paperBtn);
    document.querySelector('.btnimg3').appendChild(scissorsBtn);

    // Add event listener to each button
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const result = playSingleRound(button);
            switch(result) {
                case 'computer':
                    computerScore++;
                    draw.style.visibility = "hidden";
                    display.textContent = `PLAYER ${playerScore} - ${computerScore} COMPUTER`;
                    break;
                case 'player':
                    playerScore++;                
                    draw.style.visibility = "hidden";
                    display.textContent = `PLAYER ${playerScore} - ${computerScore} COMPUTER`;
                    break;
                default:
                    draw.style.visibility = "visible";
                    display.textContent = `PLAYER ${playerScore} - ${computerScore} COMPUTER`;
                    break;
            }
            // Follow the score
            if (playerScore === 5 || computerScore === 5) {
                if (playerScore === 5) {
                    display.textContent = "You Win!!!!!";
                } else display.textContent = "Oops, Computer Won :(";
                computerScore = 0;
                playerScore = 0;
            }
        });
    });

    // Add a div for displaying results 
    const display = document.createElement('div');
    display.setAttribute("id", "display");
    display.textContent = `PLAYER ${playerScore} - ${computerScore} COMPUTER`;
    resContainer.appendChild(display);
    
    // Add an information if the round ended in draw
    const draw = document.querySelector('.result');
    draw.textContent = "draw";
    draw.style.visibility = "hidden";
}

game();