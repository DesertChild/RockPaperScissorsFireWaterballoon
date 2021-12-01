let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const fire_div = document.getElementById("f");
const water_div = document.getElementById("w");

function getComputerChoice(){
    const choices = ['r','p','s','f','w'];
    const randomNum = Math.floor(Math.random() *5);
    return choices[randomNum];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "f") return "Fire";
    if(letter === "w") return "Water Balloon";
    return "Scissors";
}

function win(user , comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(5).sup();
    const smallComp = "comp".fontsize(5).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUser} beats ${convertToWord(comp)}${smallComp} So congrats on wasting your time on this stupid game!!!!`;
    document.getElementById(user).classList.add("green-glow");
    setTimeout( () =>  document.getElementById(user).classList.remove("green-glow") , 300);
}
function lose(user , comp) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(5).sub();
    const smallComp = "comp".fontsize(5).sup();
    result_div.innerHTML = `${convertToWord(comp)}${smallComp} beats ${convertToWord(user)}${smallUser} So you suck at this game!!!!`;
    document.getElementById(user).classList.add("red-glow");
    setTimeout( () => document.getElementById(user).classList.remove("red-glow")  , 300)
}
function draw(user) {
    result_div.innerHTML = "Nothing happens. it's a draw!!!!";
    document.getElementById(user).classList.add("grey-glow");
    setTimeout(() => document.getElementById(user).classList.remove("grey-glow") , 300)
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
        case "rw":
        case "sf":
        case "pw":
        case "fr":
        case "fp":
        case "wf":
        case "ws":
            win(userChoice,compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
        case "wr":
        case "fs":
        case "wp":
        case "rf":
        case "pf":
        case "fw":
        case "sw":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ff":
        case "ww":
            draw(userChoice,compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function (){
        game("r");
    })
    scissor_div.addEventListener('click', function (){
        game("s");

    })
    paper_div.addEventListener('click', function (){
        game("p");

    })
    fire_div.addEventListener('click', function (){
        game("f");

    })
    water_div.addEventListener('click', function (){
        game("w");

    })
}
main();

