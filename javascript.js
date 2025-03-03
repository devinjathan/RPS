//rock paper scissors script

// Global Variables
// Scores
let humanScore = 0;
let computerScore = 0;

// helper functions
function capitlize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Game Script
// computer choice
function getComputerChoice(){
    let tmpNum = Math.floor(Math.random() * 3); //returns number 0, 1, or 2
    // 0 = rock
    // 1 = paper
    // 2 = scissors
    if(tmpNum == 0){
        return "Rock";
    }else if(tmpNum == 1){
        return "Paper";
    }else if(tmpNum == 2){
        return "Scissors";
    }
    //if an error occurs
    return "getComputerChoice() ERROR";
}

//rock button
const rock = document.querySelector("#rockBtn");
rock.addEventListener("click", function(){
    const computerChoice = getComputerChoice();
    playRound("Rock", computerChoice);
});

//paper button
const paper = document.querySelector("#paperBtn");
paper.addEventListener("click", function(){
    const computerChoice = getComputerChoice();
    playRound("Paper", computerChoice);
});

//scissors button
const scissors = document.querySelector("#scissorsBtn");
scissors.addEventListener("click", function(){
    const computerChoice = getComputerChoice();
    playRound("Scissors", computerChoice);
});



// PlayRound function to calculate score
function playRound(humanChoice, computerChoice){
    // check for tie
    if(humanChoice == computerChoice){
        const Results = document.getElementById("Results");
        Results.textContent = "Tie! You both chose " + humanChoice + ".";
        Results.appendChild(content);
        return;
    }
    let win = humanChoice + computerChoice
    if(win == "RockScissors" || win == "ScissorsPaper" || win == "PaperRock"){
        const Results = document.getElementById("Results");
        Results.textContent = "You Win! " + humanChoice + " beats " + computerChoice +"!";
        updateScore("playerScore");
        return;
    }else{
        const Results = document.getElementById("Results");
        Results.textContent = "You lose! " + computerChoice + " beats " + humanChoice +"!";
        updateScore("computerScore");
        return;
    }
}

// Updates Score of passed in parameter
function updateScore(whoScored){
    const Scores = document.getElementById(whoScored);
    switch(whoScored){
        case 'playerScore':
            humanScore++;
            Scores.textContent = "Player Score: " + humanScore;
            break;
        case 'computerScore':
            computerScore++;
            Scores.textContent = "Computer Score: " + computerScore;
            break;
        default:
            break;
    }
    // check for ending score
    if(humanScore == 5){
        endGame("Human");
    }else if(computerScore == 5){
        endGame("Computer");
    }
    return;
}

// Ends the game and announces winner
function endGame(winner){
    const Announcment = document.getElementById("Announcment");
    Announcment.textContent = winner + " is the winner!\nFinal Score is "+ humanScore + " - " + computerScore;
    //Create play again button
    let playAgain = document.createElement("button");
    playAgain.id = "playAgain";
    playAgain.textContent = "Play Again?";
    playAgain.onclick = resetScore;
    
    Announcment.appendChild(playAgain);
    return;
}

// Reset Scores after play again
function resetScore(){
    humanScore = 0;
    computerScore = 0;

    //update scores on page
    const humanText = document.getElementById("playerScore");
    humanText.textContent = "Player Score: 0";

    const computerText = document.getElementById("computerScore");
    computerText.textContent = "Computer Score: 0";

    // Delete play again button
    let playAgain = document.getElementById("playAgain");
    playAgain.remove();
    
    //Remove Announcment
    let Announcment = document.getElementById("Announcment");
    Announcment.textContent = "";

    //Reset Last Played Round
    const Results = document.getElementById("Results");
    Results.textContent = "REMATCH! First to 5 points win!";

    return;
}