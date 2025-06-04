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

    for (let round = 1; round <= 5; round++) {
        console.log(`Runde ${round}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("\n **Spiel beendet!** ");
    console.log(`Endstand: Du ${humanScore} - Computer ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Glückwunsch, du hast das Spiel gewonnen!");
    } else if (humanScore < computerScore) {
        console.log("Der Computer hat gewonnen. Versuch's nochmal!");
    } else {
        console.log("Unentschieden!");
    }
}

playGame();
