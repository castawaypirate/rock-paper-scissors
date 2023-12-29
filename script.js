const buttons = document.querySelectorAll('.button');

// Add the same event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        let playerSelection = getPlayerSelection(this);
        let computerSelection = getComputerSelection();
        playRound(playerSelection, computerSelection);
    });
});

//Returns a random integer in a range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Randomly chooses computer's selection
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

// Gets player's selection when a button is pressed
function getPlayerSelection(context) {
    let choice = context.textContent;
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
