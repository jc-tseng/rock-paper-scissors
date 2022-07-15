//Create computerPlay() function
//    Array of choices (rock, paper, scissor)
//    return random(array)
function computerPlay() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[Math.floor(Math.random()*choices.length)]
}

//Create playerSelection() function
//    takes input from user (prompt)
//    returns that input in all lowercase
function playerPlay() {
    let player = prompt("Enter ROCK, PAPER, or SCISSOR.");
    return player.toUpperCase();
}

//Create playRound() function - takes 2 parameters (playerSelection, computerselection)
function playRound(playerSelection, computerSelection) {
//    if playerselection === computerplay
//        return "Tie"
    if (playerSelection === computerSelection) {
        console.log(`Draw. You chose ${playerSelection} and the computer chose ${computerSelection}.`)

//    elif playerselection === "rock"
//        if computerselection === "paper"
//            return "You lose"
//        else
//            return "You win"
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            console.log(`You lose. ${computerSelection} beats ${playerSelection}.`)
            return ++computerScore;
        } else {
            console.log(`You win. ${playerSelection} beats ${computerSelection}.`)
            return ++playerScore;
        }

//    elif playerselection === "paper"
//        if computerselection === "rock"
//            return "You win"
//        else
//            return "You lose"
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            console.log(`You win. ${playerSelection} beats ${computerSelection}.`)
            return ++playerScore;
        } else {
            console.log(`You lose. ${computerSelection} beats ${playerSelection}.`)
            return ++computerScore;
        }

//    elif playerselection === "scissor"
//        if computerselection === "paper"
//            return "You win"
//        else
//            return "You lose"
    } else if (playerSelection === "SCISSOR") {
        if (computerSelection === "PAPER") {
            console.log(`You win. ${playerSelection} beats ${computerSelection}.`)
            return ++playerScore;
        } else {
            console.log(`You lose. ${computerSelection} beats ${playerSelection}.`)
            return ++computerScore;
        }

//    else
//        return "${playerselection} is not a valid choice"
    } else {
        console.log(`${playerSelection} is not a valid choice.`)
    }
}

//Create Game() function
//    for loop - iterate 5 times
//       playRound()
//    compare player and computer scores

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
//        console.log(computerSelection);   <--- check what the computer is choosing
        playRound(playerSelection, computerSelection)
    }

    if (playerScore > computerScore) {
        console.log(`Congrats, you won the game! Your score - ${playerScore} | Computer's score - ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`Sorry, you lose the game. Your score - ${playerScore} | Computer's score - ${computerScore}`)
    } else {
        console.log(`Tie game! Your score - ${playerScore} | Computer's score - ${computerScore}`)
    }
}

let playerScore = 0;
let computerScore = 0;

game();