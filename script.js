/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Randomly chooses computer's play
function getComputerSelection() {
    let choice = getRandomInt(0,2);
    if(choice===0){
        return "ROCK";
    }
    else if(choice==1){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}

// Gets player's selection from a promt popup
function getPlayerSelection() {
    let choice = prompt("Type your choice:");
    return choice.toUpperCase();
}

// Simulates a round of the game
function playRound(playerSelection, computerSelection) {
    if(playerSelection==="ROCK"){
        if(computerSelection==="ROCK"){
            console.log("Rock and Rock it's a tie!")
            return 0;
        }
        else if(computerSelection==="PAPER"){
            console.log("Paper beats Rock. You lose!")
            return -1;
        }
        else{
            console.log("Rock beats Scissors. You win!")
            return 1;
        }
    }
    else if(playerSelection==="PAPER"){
        if(computerSelection==='ROCK'){
            console.log("Paper beats Rock. You win!")
            return 1;
        }
        else if(computerSelection==="PAPER"){
            console.log("Paper and paper it's a tie!")
            return 0;
        }
        else{
            console.log("Scissors beats Paper. You lose!")
            return -1;
        }
    }
    else{
        if(computerSelection==="ROCK"){
            console.log("Rock beats Scissors. You lost!")
            return -1;
        }
        else if(computerSelection==="PAPER"){
            console.log("Scissors beats paper. You win!")
            return 1;
        }
        else{
            console.log("Scissors and Scissors it's a tie!")
            return 0;
        }
    } 
}

// Game function
function game() {
    let count = 0;
    for(let i=0;i<5;i++){
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerSelection();
        console.log("Your selection: " + playerSelection + "\nComputer's selection: " + computerSelection)
        count += playRound(playerSelection, computerSelection);
    }
    if(count<0){
        console.log("You lost the game!")
    }
    else if(count===0){
        console.log("The game was a tie!")
    }
    else{
        console.log("You won the game!")
    }
}

game();