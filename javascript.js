//rock paper scissors script

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

// human choice
function getHumanChoice(){
    let flag = false;
    let human_answer;
    while(flag == false){
        human_answer = prompt("Enter Rock, Paper, or Scissors!");
        human_answer = capitlize(human_answer);
        if(human_answer == "Rock" || human_answer == "Paper" || human_answer == "Scissors"){
            flag = true;
        }else {
            alert("Error: Please enter valid input.");
        }
    }
    return human_answer;
}


// Function to run the game and calculate scores
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    // PlayRound function to calculate score
    function playRound(humanChoice, computerChoice){
        // check for tie
        if(humanChoice == computerChoice){
            console.log("Tie! You both chose " + humanChoice + ".")
            return;
        }
        let win = humanChoice + computerChoice
        if(win == "RockScissors" || win == "ScissorsPaper" || win == "PaperRock"){
            console.log("You Win! " + humanChoice + " beats " + computerChoice +"!");
            humanScore++;
            return;
        }else{
            console.log("You lose! " + computerChoice + " beats " + humanChoice +"!");
            computerScore++;
            return;
        }
    }

    // play 5 times
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    //log scores
    console.log("Final Score\nYour Score: " + humanScore + "\nComputer Score: " + computerScore);
    alert("Final Score\nYour Score: " + humanScore + "\nComputer Score: " + computerScore);
}

console.log(playGame());