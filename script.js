// your JavaScript file
function getComputerChoice()
{
    let random = Math.random(0,0.9)
    console.log(random)
    let computerChoice = "";
    if(random <= 0.3){
        computerChoice = "rock";
    }
    else if(random <= 0.6){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
     const humanChoice = prompt("Enter item of choice:");
    return humanChoice;
}

 let humanSelection = getHumanChoice();
 let computerSelection = getComputerChoice();

 let humanScore = 0;
 let computerScore = 0;


// console.log(humanSelection);    

 
function playGame(){
    console.log("w0rking");
     humanSelection = humanSelection.toLowerCase();
   
    function playRound(humanSelection,computerSelection){
    //rock logic
        if(humanSelection=="rock" && computerSelection=="rock"){
            console.log("Tie!");
        }
        else if (humanSelection=="rock" && computerSelection=="paper"){
            computerScore+=1;
            console.log("You lose! Paper beats Rock!");
        }
        else if (humanSelection=="rock" && computerSelection=="scissors"){
            humanScore+=1;
            console.log("You win! Rock beats Scissors!");
        }
        //paper logic
        else if (humanSelection=="paper" && computerSelection=="paper"){
            console.log("Tie!");
        }
        else if (humanSelection=="paper" && computerSelection=="rock"){
            humanScore+=1;
            console.log("You win! Paper beats Rock!");

        }
        else if (humanSelection=="paper" && computerSelection=="scissors"){
            computerScore+=1;
            console.log("You lose! Scissors beats Paper!");
        }
        //scissors logic
        else if (humanSelection=="scissors" && computerSelection=="scissors"){
            console.log("Tie!");
        }
        else if (humanSelection=="scissors" && computerSelection=="rock"){
            computerScore+=1;
            console.log("You lose! Rock beats Scissors!");
        }
        else if (humanSelection=="scissors" && computerSelection=="paper"){
            humanScore+=1;
            console.log("You win! Scissors beats Paper!");
        }
        else{
            console.log("Error!");
        }
    }

    for (let i=0;i<5;i++){
        playRound(humanSelection,computerSelection);
        console.log("You: ",humanScore);
        console.log("Computer: ",computerScore);
       if(i<=4){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
       }
       else {
        console.log("Game end!");
       }
       
    }
   
}

playGame();