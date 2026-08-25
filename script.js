let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3 )) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
        default:
            return null;
    }
}

function getHumanChoice() {
    return prompt("Enter rock, paper or scissors.").toUpperCase();
}

function playRound(humanChoice, computerChoice)  {

    if(humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You Win! Rock beats scissors.");
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK" ) {
        console.log("You Win! Paper beats rock.");
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You Win! Scissors beats paper.");
    } else if (humanChoice === computerChoice) {
      console.log("Its a tie!");  
    } else {
        console.log(`You lost! ${computerChoice.charAt(0) + computerChoice.slice(1).toLowerCase()} beats ${humanChoice.charAt(0) + humanChoice.slice(1).toLowerCase()}.`)
    }
}