
// scores section

let userScore = 0;
let compScore = 0;

const userScoreBoard = document.querySelector("#user-score")
const compScoreBoard = document.querySelector("#comp-score")

function scores() {
    userScore = localStorage.getItem('userScore', userScore) || 0;
    compScore = localStorage.getItem('compScore', compScore) || 0;

    userScoreBoard.textContent = userScore;
    compScoreBoard.textContent = compScore;
}
scores()

// rule-box-section

const ruleBtn = document.querySelector(".rule-btn");
const ruleBox = document.querySelector(".rule-box")
const crossBtn = document.querySelector(".cross");

ruleBtn.addEventListener("click", () => {
    ruleBox.classList.add("rule-box-show")
    crossBtn.classList.add("cross-show")
});

crossBtn.addEventListener("click", () => {
    ruleBox.classList.remove("rule-box-show")
    crossBtn.classList.remove("cross-show")
});




// user-choice section

const choices = document.querySelectorAll(".choices")

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id
        const compChoice = genCompChoice();

        const result = gamePlay(userChoice, compChoice);

        if (result === "user") {
            userScore++;
            userScoreBoard.textContent = userScore;
            localStorage.setItem('userScore', userScore);
        }
        else if (result === "computer") {
            compScore++;
            compScoreBoard.textContent = compScore;
            localStorage.setItem('compScore', compScore);
        }

        showResultScreen(userChoice, compChoice, result);

    })
});

// computer choice section

const genCompChoice = function () {
    const options = ['rock', 'paper', 'scissor']
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx]
}

//Game play logic

const gamePlay = function (userChoice, compChoice) {

    if (userChoice === compChoice) {
        return "Tie Up"
    }
    if ((userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        return "user";
    } else {
        return "computer";
    }

}


const resultScreen = document.querySelector(".result-container");
const gameScreen = document.querySelector(".triangle-container");
const hurrayScreen = document.querySelector('.hurray-screen');
const ScoreBoard = document.querySelector('.score-board-container')

//winner animation div
const userCircle = document.querySelector("#user-result");
const compCircle = document.querySelector("#comp-result");

const userResultImg = document.querySelector("#user-result img");
const compResultImg = document.querySelector("#comp-result img");

const winTexth1 = document.querySelector(".win-text h1");
const winTexth2 = document.querySelector(".win-text h2");
const playAgainBtn = document.querySelector(".win-text button");

const hurrayNxtBtn = document.querySelector(".hurray-btn");
const hurrayPlayAgainBtn = document.querySelector('.hurray-screen button')

const images = {
    rock: "./public/stone.png",
    paper: "./public/paper.png",
    scissor: "./public/scissor.png"
};

function showResultScreen(userChoice, compChoice, result) {


    userResultImg.src = images[userChoice];
    compResultImg.src = images[compChoice];

    gameScreen.classList.add("triangle-container-hide");
    resultScreen.classList.add("result-container-hide");

    if (result === "user") {
        winTexth1.textContent = "YOU WIN";
        winTexth2.textContent = "AGAINST PC"
        playAgainBtn.textContent = "play again"
        userCircle.classList.add("winner");
        hurrayNxtBtn.classList.add('hurray-btn-show')
    }
    else if (result === "computer") {
        winTexth1.textContent = "YOU LOST";
        winTexth2.textContent = "AGAINST PC"
        playAgainBtn.textContent = "play again"
        compCircle.classList.add("winner");
        hurrayNxtBtn.classList.remove('hurray-btn-show')
    }
    else {
        winTexth1.textContent = "TIE UP";
        winTexth2.textContent = ""
        playAgainBtn.textContent = "replay"
        hurrayNxtBtn.classList.remove('hurray-btn-show')
        userCircle.classList.remove("winner");
        compCircle.classList.remove("winner");
    }
}


playAgainBtn.addEventListener("click", () => {
    gameScreen.classList.remove("triangle-container-hide");
    resultScreen.classList.remove("result-container-hide");

    hurrayNxtBtn.classList.remove('hurray-btn-show')

    userCircle.classList.remove("winner");
    compCircle.classList.remove("winner");
});

hurrayNxtBtn.addEventListener('click', () => {
    resultScreen.classList.remove("result-container-hide");
    hurrayScreen.classList.add('hurray-screen-show')
    ScoreBoard.classList.add('score-board-container-hide')
    hurrayNxtBtn.classList.remove('hurray-btn-show')
})

hurrayPlayAgainBtn.addEventListener('click',()=>{
    hurrayScreen.classList.remove('hurray-screen-show')
    gameScreen.classList.remove("triangle-container-hide");
    ScoreBoard.classList.remove('score-board-container-hide')
})
