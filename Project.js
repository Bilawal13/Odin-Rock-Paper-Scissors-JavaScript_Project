
let humanScore = 0;
let computerScore = 0;
const humanScoreEl = document.getElementById("humanScore");
const computerScoreEl = document.getElementById("computerScore");
const results = document.getElementById("result");
const rockBtn = document.getElementById("btn1");
const paperBtn = document.getElementById("btn2");
const scissorsBtn = document.getElementById("btn3");

rockBtn.addEventListener("click", () => {
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const randomIndex = Math.random() * choices.length;

    return choices[Math.floor(randomIndex)];
}

// function getHumanChoice() {
//     const choices = ['rock', 'Paper', 'Scissors'];

//     // let userInput = prompt("Please choose 1 for rock, 2 for Paper or 3 for Scissors:").toLowerCase();
//     let userInput = 0
//     if (onclick === playGame) {
//         userInput = 1;
//     } else if (onclick === playGame2) {
//         userInput = 2;
//     } else {
//         userInput = 3;
//     }
//     switch (userInput) {
//         case '1':
//             return 'rock';
//         case '2':
//             return 'Paper';
//         case '3':
//             return 'Scissors';
//         default:
//             alert("Invalid input, please try again.");
//             return getHumanChoice();
//     }


// }


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        humanScoreEl.textContent = humanScore;
        computerScoreEl.textContent = computerScore;
        return results.textContent = "It's a tie";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        humanScore++;
        humanScoreEl.textContent = humanScore;
        computerScoreEl.textContent = computerScore;

        return results.textContent = "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        humanScoreEl.textContent = humanScore;
        computerScoreEl.textContent = computerScore;
        return results.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
    }


}




// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game();


