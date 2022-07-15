//Array of choices (rock, paper, scissor)
var choices = [
    "rock", "paper", "scissor"
];

//Create computerPlay() function
//    return random(rock, paper, or scissor)
function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)]
}

//Create playerSelection() function
//    takes input from user (prompt)
//    returns that input in all lowercase
function playerPlay() {
    let player = prompt("Enter rock, paper, or scissor.");
    return player.toLowerCase();
}

//Create playRound() function - takes 2 parameters (playerSelection, computerselection)
function playRound(playerSelection, computerSelection) {
//    if playerselection === computerplay
//        return "Tie"
    if (playerSelection === computerSelection) {
        return `Draw. You chose ${playerSelection} and the computer chose ${computerSelection}`

//    elif playerselection === "rock"
//        if computerselection === "paper"
//            return "You lose"
//        else
//            return "You win"
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return `You lose. ${computerSelection} beats ${playerSelection}.`
        } else {
            return `You win. ${playerSelection} beats ${computerSelection}.`
        }

//    elif playerselection === "paper"
//        if computerselection === "rock"
//            return "You win"
//        else
//            return "You lose"
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return `You win. ${playerSelection} beats ${computerSelection}.`
        } else {
            return `You lose. ${computerSelection} beats ${playerSelection}.`
        }

//    elif playerselection === "scissor"
//        if computerselection === "paper"
//            return "You win"
//        else
//            return "You lose"
    } else if (playerSelection === "scissor") {
        if (computerSelection === "paper") {
            return `You win. ${playerSelection} beats ${computerSelection}.`
        } else {
            return `You lose. ${computerSelection} beats ${playerSelection}.`
        }

//    else
//        return "${playerselection} is not a valid choice"
    } else {
        return `${playerSelection} is not a valid choice.`
    }
}

let playerSelection = playerPlay();
let computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

//Create Game() function
//    for loop 5 times
//       playRound()
