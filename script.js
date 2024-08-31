let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const masage = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");

// random choice generated by computer

const gencompChoice = () =>{
    // rock,paper,scizzors
    const options = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random()*3);
return options[randomIndex];

}

const DrawGame = () =>{
    masage.innerText = "Game was draw, Play Again";
    masage.style.backgroundColor = "brown";
}

const showWinner = (userWin, userChoice, compChoice) =>{
   if(userWin){
    userScore++;
    userScorepara.innerText = userScore;
    masage.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
    masage.style.backgroundColor = "green";
   }
   else{
    compScore++;
    compScorepara.innerText = compScore;
    masage.innerText= `You Lose! ${compChoice} beats Your ${userChoice} ` ;
    masage.style.backgroundColor = "red";
   }
}

const playGame = (userChoice) =>{
         const compChoice = gencompChoice();
         if(userChoice===compChoice){
            // Draw game
            DrawGame();
         }
         else{
            let userWin = true;
            if(userChoice === "rock"){
             userWin =   compChoice === "paper" ? false : true;
            }
            else if(userChoice === "paper") {
             userWin =  compChoice === "scissors" ? false : true;
            }
            else{
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
          }

}

// choice generated by user

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})