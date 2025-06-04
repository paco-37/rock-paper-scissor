function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice());


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Unentschieden! Beide haben ${humanChoice} gewählt.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`Du gewinnst! ${humanChoice} schlägt ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`Du verlierst! ${computerChoice} schlägt ${humanChoice}.`);
            computerScore++;
        }
    }

    let round = 1;
    while (round < 5) {
        playRound(humanChoice, humanSelection);
        round++;
    }
}