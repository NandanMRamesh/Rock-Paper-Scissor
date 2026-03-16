console.log("welcome to the game");
function getComputerChoice () {
    rand = Math.random();
    if(rand < 0.333333)
        return "rock";
    else if(rand > 0.333333 && rand < 0.666666)
        return "paper";
    else
        return "scissor";
}
function getHumanChoice() {
    let HumanInput = prompt("enter your Choice");
    return HumanInput.toLowerCase();
}

ComputerScore = 0;
HumanScore = 0;


function playRound(computerSelection, humanSelection){
    console.log("human choice = "+humanSelection);
    console.log("computer choice = "+computerSelection);
    if(computerSelection=='rock' && humanSelection=='scissor'){
        ComputerScore++;
        console.log("Computer wins "+" ComputerScore="+ComputerScore + "  HumanScore="+HumanScore);
    }
    if(computerSelection=='rock' && humanSelection=='paper'){
        HumanScore++;
        console.log("Human wins "+" ComputerScore="+ComputerScore + "  HumanScore="+HumanScore);
    }
    if(computerSelection=='paper' && humanSelection=='rock'){
        ComputerScore++;
        console.log("Computer wins "+" ComputerScore="+ComputerScore + "  HumanScore="+HumanScore);
    }
    if(computerSelection=='paper' && humanSelection=='scissor'){
        HumanScore++;
        console.log("Human wins "+" ComputerScore="+ComputerScore + "  HumanScore="+HumanScore);
    }
    if(computerSelection=='scissor' && humanSelection=='paper'){
        ComputerScore++;
        console.log("Computer wins "+" ComputerScore="+ComputerScore + "  HumanScore="+HumanScore);
    }
    if(computerSelection=='scissor' && humanSelection=='rock'){
        HumanScore++;
        console.log("Human wins "+" ComputerScore="+ComputerScore + "  HumanScore="+HumanScore);
    }
    if(computerSelection == humanSelection){
        console.log("round draw");
    }
}
for(i = 0; i < 5; i++){
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound (computerSelection, humanSelection)
}

