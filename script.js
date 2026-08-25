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
        humanScore = humanScore + 1;
        console.log(`You: ${humanScore} | Computer: ${computerScore} You won this round! Rock beats scissors.`);
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK" ) {
        humanScore = humanScore + 1;
        console.log(`You: ${humanScore} | Computer: ${computerScore} You won this round! Paper beats rock.`);
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore = humanScore + 1;        
        console.log(`You: ${humanScore} | Computer: ${computerScore} You won this round! Scissors beats paper.`);
    } else if (humanChoice === computerChoice) {
      console.log(`You: ${humanScore} | Computer: ${computerScore} No one won this round!`);  
    } else {
        computerScore = computerScore + 1;
        console.log(`You: ${humanScore} | Computer: ${computerScore} You lost this round! ${computerChoice.charAt(0) + computerChoice.slice(1).toLowerCase()} beats ${humanChoice.charAt(0) + humanChoice.slice(1).toLowerCase()}.`)
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`You: ${humanScore} | Computer: ${computerScore} You Win!`);
    } else if (humanScore < computerScore) {
        console.log(`You: ${humanScore} | Computer: ${computerScore} You Lost!`)
    } else {
        console.log(`You: ${humanScore} | Computer: ${computerScore} Its a tie!`);
    }
    
    humanScore = 0;
    computerScore = 0;
}