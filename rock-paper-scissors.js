function computerPlay() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Draw. You chose ${playerSelection} and the computer chose ${computerSelection}.`)
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            console.log(`You lose. ${computerSelection} beats ${playerSelection}.`)
            return ++computerScore;
        } else {
            console.log(`You win. ${playerSelection} beats ${computerSelection}.`)
            return ++playerScore;
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            console.log(`You win. ${playerSelection} beats ${computerSelection}.`)
            return ++playerScore;
        } else {
            console.log(`You lose. ${computerSelection} beats ${playerSelection}.`)
            return ++computerScore;
        }
    } else if (playerSelection === "SCISSOR") {
        if (computerSelection === "PAPER") {
            console.log(`You win. ${playerSelection} beats ${computerSelection}.`)
            return ++playerScore;
        } else {
            console.log(`You lose. ${computerSelection} beats ${playerSelection}.`)
            return ++computerScore;
        }
    } else {
        console.log(`${playerSelection} is not a valid choice.`)
    }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playRound("ROCK", computerPlay());
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound("PAPER", computerPlay());
});

const scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => {
    playRound("SCISSOR", computerPlay());
})

let playerScore = 0;
let computerScore = 0;
