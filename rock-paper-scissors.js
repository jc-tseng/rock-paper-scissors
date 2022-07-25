function computerPlay() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`DRAW - PLAYER: ${playerSelection} | COMPUTER: ${computerSelection}`)
        content.textContent = `Draw. You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            console.log(`LOSE - PLAYER: ${playerSelection} | COMPUTER: ${computerSelection}`)
            content.textContent = `You lose. You chose ${playerSelection} and the computer chose ${computerSelection}.`;
            return ++computerScore;
        } else {
            console.log(`WIN - PLAYER: ${playerSelection} | COMPUTER: ${computerSelection}`)
            content.textContent = `You win. You chose ${playerSelection} and the computer chose ${computerSelection}.`;
            return ++playerScore;
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            console.log(`WIN - PLAYER: ${playerSelection} | COMPUTER: ${computerSelection}`)
            content.textContent = `You win. You chose ${playerSelection} and the computer chose ${computerSelection}.`;
            return ++playerScore;
        } else {
            console.log(`LOSE - PLAYER: ${playerSelection} | COMPUTER: ${computerSelection}`)
            content.textContent = `You lose. You chose ${playerSelection} and the computer chose ${computerSelection}.`;
            return ++computerScore;
        }
    } else if (playerSelection === "SCISSOR") {
        if (computerSelection === "PAPER") {
            console.log(`WIN - PLAYER: ${playerSelection} | COMPUTER: ${computerSelection}`)
            content.textContent = `You win. You chose ${playerSelection} and the computer chose ${computerSelection}.`;
            return ++playerScore;
        } else {
            console.log(`LOSE - PLAYER: ${playerSelection} | COMPUTER: ${computerSelection}`)
            content.textContent = `You lose. You chose ${playerSelection} and the computer chose ${computerSelection}.`;
            return ++computerScore;
        }
    }
}

function game() {
    const rock = document.querySelector('.rock');
    rock.addEventListener('click', () => {
        playRound("ROCK", computerPlay());
        score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
        checkWinner();
    });

    const paper = document.querySelector('.paper');
    paper.addEventListener('click', () => {
        playRound("PAPER", computerPlay());
        score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
        checkWinner();
    });

    const scissor = document.querySelector('.scissor');
    scissor.addEventListener('click', () => {
        playRound("SCISSOR", computerPlay());
        score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
        checkWinner();
    });
}

function checkWinner() {
    if (playerScore === 5) {
        alert("Congratulations, you beat the computer!")
        playerScore = 0;
        computerScore = 0;
        score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    } else if (computerScore === 5) {
        alert("Aw man, the computer beat you!")
        playerScore = 0;
        computerScore = 0;
        score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    }
}

const results = document.querySelector('.results');
const content = document.createElement('div');
content.classList.add('content');
results.appendChild(content);

const score = document.querySelector('.score');
const scores = document.createElement('div');
scores.classList.add('scores');
score.appendChild(scores);

let playerScore = 0;
let computerScore = 0;

score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

game();