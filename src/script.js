const choice = ["stone", "paper", "scissors"];

var playerChoice = "";
var Result = "";
let playerScore = 0;
let computerScore = 0;
var playerChoiceImg = "";
var computerChoiceImg = "";
var computerChoice = "";

function randomFunction() {
  computerChoice = choice[Math.floor(Math.random() * choice.length)];
  if (computerChoice === "stone") {
    computerChoiceImg = "stoneround.png";
  } else if (computerChoice === "paper") {
    computerChoiceImg = "paperround.png";
  } else {
    computerChoiceImg = "scissorround.png";
  }
}

function Winner() {
  console.log("computerChoice", computerChoice);
  if (computerChoice === playerChoice) {
    console.log("tie match");
    playerScore++;
    document.getElementById("playerScore").innerHTML = playerScore;
    computerScore++;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById(
      "result"
    ).innerText = `You chose ${playerChoice}, computer chose ${computerChoice}, Tie match`;
  } else if (
    (playerChoice === "stone" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "stone") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("you win");
    playerScore++;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById(
      "result"
    ).innerText = `You chose ${playerChoice}, computer chose ${computerChoice}, You win!`;
  } else {
    console.log("you lose");
    computerScore++;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById(
      "result"
    ).innerText = `You chose ${playerChoice}, computer chose ${computerChoice}, You lose!`;
  }
  updateImg(playerChoiceImg, computerChoiceImg);
}

function Updateresult() {
  document.getElementById("stone").addEventListener("click", () => {
    console.log("player clicked stone");
    playerChoice = "stone";
    playerChoiceImg = "stone.png";
    randomFunction();
    Winner();
  });

  document.getElementById("paper").addEventListener("click", () => {
    console.log("player clicked paper");
    playerChoice = "paper";
    playerChoiceImg = "paper.png";
    randomFunction();
    Winner();
  });

  document.getElementById("scissors").addEventListener("click", () => {
    console.log("player clicked scissors");
    playerChoice = "scissors";
    playerChoiceImg = "scissor.png";
    randomFunction();
    Winner();
  });
}

function updateImg(playerChoiceImg, computerChoiceImg) {
  document.getElementById("playerChoiceImg").src = playerChoiceImg;
  document.getElementById("computerChoiceImg").src = computerChoiceImg;
}

function gameReset() {
  document.getElementById("Reset").addEventListener("click", () => {
    location.reload();
  });
}

Updateresult();
gameReset();






// const choice = ["stone", "paper", "scissor"];

// var playerChoice = " ";
// var Result = "";
// let playerScore = 0;
// let computerScore = 0;
// var playerChoiceImg = "";
// var computerChoiceImg = "";
// var computerChoice = ``;
// function randomFunction(){
//     computerChoice = choice[Math.floor(Math.random() * choice.length)];
// }
// function Winner() {

//   if(computerChoice === "stone"){
//     computerChoiceImg = "stoneround.png"
//   }else if (computerChoice === "paper"){
//     computerChoiceImg = "paperround.png"
//   }else{
//     computerChoiceImg = "scissorround.png"
//   }
//   console.log("computerChoice", computerChoice);
//   if (computerChoice === playerChoice) {
//     console.log("tie match");
//     document.getElementById("playerScore").innerHTML = playerScore++;
//     document.getElementById("computerScore").innerHTML = computerScore++;
//     document.getElementById("result").innerText = `You chose ${playerChoice}, computer chose ${computerChoice} , Tie match`;
//     document.getElementById("playerChoiceImg").src = `${playerChoiceImg}`;
//     document.getElementById("computerChoiceImg").src = `${computerChoiceImg}`;

//   } else if (
//     (playerChoice === "stone" && computerChoice === "scissors") ||
//     (playerChoice === "paper" && computerChoice === "stone") ||
//     (playerChoice === "scissors" && computerChoice === "paper")
//   ) {
//     console.log("you win");

//     document.getElementById("playerScore").innerHTML = playerScore++;
//     document.getElementById( "result").innerText = `You chose ${playerChoice}, computer chose ${computerChoice},you win`;
//     document.getElementById("playerChoiceImg").src = `${playerChoiceImg}`;
//     document.getElementById("computerChoiceImg").src = `${computerChoiceImg}`;
//   } else {
//     console.log("you lose");

//     document.getElementById("computerScore").innerHTML = computerScore++;
//     document.getElementById( "result").innerText = `You choose ${playerChoice}, computer choose ${computerChoice},you lose`;
//     document.getElementById("playerChoiceImg").src = `${playerChoiceImg}`;
//     document.getElementById("computerChoiceImg").src = `${computerChoiceImg}`;
//   }
// }

// function Updateresult() {
//   document.getElementById("stone").addEventListener("click", () => {
//     console.log("player click stone");
//     playerChoice = "stone";
//     playerChoiceImg = "stone.png";
//     // computerChoiceImg = "stone.png";
//     console.log(playerChoiceImg);
//     console.log(computerChoiceImg);

//     updateImg(playerChoiceImg, computerChoiceImg);
//     Winner()
//     randomFunction()

//   });

//   document.getElementById("paper").addEventListener("click", () => {
//     console.log("player click paper");
//     playerChoice = "paper";
//     playerChoiceImg = "paper.png";
//     // computerChoiceImg = "scissor.png";
//     console.log(computerChoiceImg);

//     console.log(playerChoiceImg);

//     updateImg(playerChoiceImg, computerChoiceImg);

//     Winner();
//     randomFunction()
//   });

//   document.getElementById("scissors").addEventListener("click", () => {
//     console.log("player click scissors");
//     playerChoiceImg = "scissor.png";
//     // computerChoiceImg = "scissor.png";
//     console.log(playerChoiceImg);
//     console.log(computerChoiceImg);

//     updateImg(playerChoiceImg, computerChoiceImg);
//     playerChoice = "scissors";
//     Winner();
//     randomFunction()
//   });
// }
// Updateresult();

// function updateImg(playerChoiceImg, computerChoiceImg) {
//   document.getElementById("playerChoiceImg").src = playerChoiceImg;

//   document.getElementById("computerChoiceImg").src = computerChoiceImg;

// }

// function gameReset(){

//  document.getElementById("Reset").addEventListener("click",()=>{

//  location.reload()
//  })
// }
// gameReset()
