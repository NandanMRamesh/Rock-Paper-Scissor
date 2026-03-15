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

computerSelection = getComputerChoice();
humanSelection = getHumanChoice();


function playRound(computerS){}

