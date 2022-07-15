//Array of choices (rock, paper, scissor)
var choices = [
    "rock", "paper", "scissor"
];

//Create computerPlay() function
function computerPlay() {
//    return random(rock, paper, or scissor)
    return choices[Math.floor(Math.random()*choices.length)]
}

//Create playerSelection() function
function playerSelection() {
//    takes input from user (prompt)
    let player = prompt("Enter rock, paper, or scissor.");
//    returns that input in all lowercase
    return player.toLowerCase();
}


//Create playRound() function - takes 2 parameters (playerSelection(), computerPlay())
//    if playerselection === computerplay
//        return "Tie"
//    elif playerselection === "rock"
//        if computerselection === "paper"
//            return "You lose"
//        else
//            return "You win"
//    elif playerselection === "scissor"
//        if computerselection === "paper"
//            return "You win"
//        else
//            return "You lose"
//    else
//        if computerselection === "rock"
//            return "You win"
//        else
//            return "You lose"

//Create Game() function
//    for loop 5 times
//       playRound()
