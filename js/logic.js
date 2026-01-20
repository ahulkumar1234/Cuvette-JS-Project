
// // user-choice section

// const choices = document.querySelectorAll(".choices")

// choices.forEach(choice => {
//     choice.addEventListener("click", () => {
//         const userChoice = choice.id
//         const compChoice = genCompChoice();

//         const result = gamePlay(userChoice, compChoice);

//         if (result === "user") {
//             userScore++;
//             userScoreBoard.textContent = userScore;
//             localStorage.setItem('userScore', userScore);
//             console.log("User Win");
//         } else if (result === "computer") {
//             compScore++;
//             compScoreBoard.textContent = compScore;
//             localStorage.setItem('compScore', compScore);
//             console.log("Comp Win");
//         } else {
//             console.log("Tie Up");
//         }


//         console.log("User =" + userChoice)
//         console.log("Comp =" + compChoice)
//         console.log(`Score You: ${userScore} Comp Score:${compScore}`)
//     })
// });

// // computer choice section

// const genCompChoice = function () {
//     const options = ['rock', 'paper', 'scissor']
//     const randomIdx = Math.floor(Math.random() * 3);
//     return options[randomIdx]
// }

// //Game play logic

// const gamePlay = function (userChoice, compChoice) {

//     if (userChoice === compChoice) {
//         return "Tie Up"
//     }
//     if ((userChoice === "rock" && compChoice === "scissor") ||
//         (userChoice === "paper" && compChoice === "rock") ||
//         (userChoice === "scissor" && compChoice === "paper")
//     ) {
//         return "user";
//     } else {
//         return "computer";
//     }

// }


// const resultScreen = document.getElementById("result-screen");

// const userResultImg = document.querySelector("#user-result img");
// const compResultImg = document.querySelector("#comp-result img");

// const winText = document.querySelector(".win-text h1");
// const playAgainBtn = document.querySelector(".win-text button");


// const images = {
//     rock: "/public/stone.png",
//     paper: "/public/paper.png",
//     scissor: "/public/scissor.png"
// };

// function showResultScreen(userChoice, compChoice, result) {

//   // screen show
//   resultScreen.classList.remove("hidden");

//   // images change
//   userResultImg.src = images[userChoice];
//   compResultImg.src = images[compChoice];

//   // text change
//   if (result === "user") {
//     winText.innerText = "YOU WIN";
//   } 
//   else if (result === "computer") {
//     winText.innerText = "YOU LOST";
//   } 
//   else {
//     winText.innerText = "DRAW";
//   }
// }

// showResultScreen(userChoice, compChoice, result);

// playAgainBtn.addEventListener("click", () => {
//   resultScreen.classList.add("hidden");
// });
