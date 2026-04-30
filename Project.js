

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'Paper', 'Scissors'];

    const randomIndex = Math.random() * choices.length;

    return choices[Math.floor(randomIndex)];
}

function getHumanChoice() {
    const choices = ['rock', 'Paper', 'Scissors'];

    let userInput = prompt("Please choose 1 for rock, 2 for Paper or 3 for Scissors:").toLowerCase();

    switch (userInput) {
        case '1':
            return 'rock';
        case '2':
            return 'Paper';
        case '3':
            return 'Scissors';
        default:
            alert("Invalid input, please try again.");
            return getHumanChoice();
    }


}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if ((playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        humanScore++;
        console.log("Player Score: " + humanScore);
        console.log("Computer Score: " + computerScore);

        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        console.log("Player Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }


}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
