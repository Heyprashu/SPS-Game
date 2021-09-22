const stone = document.querySelector(".stone");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const para = document.querySelector(".result");
const result = document.querySelector(".getResult");
const btnclick = document.querySelector("#clickme");

let colorArr = ["red", "pink", "aqua", "skyblue"];

for (var i = 0; i <= colorArr.length; i++) {
  let rand = Math.floor(Math.random() * 4);
  stone.style.color = colorArr[rand];
  paper.style.color = colorArr[rand];
  scissor.style.color = colorArr[rand];
}

result.addEventListener("mouseover", computerChoice);
result.addEventListener("mouseout", playagainMsg);
btnclick.addEventListener("click", pagereload);
stone.addEventListener("click", userChoiceStone);
paper.addEventListener("click", userChoicePaper);
scissor.addEventListener("click", userChoiceScissor);

// assigning value to array
let arr = ["STONE", "PAPER", "SCISSOR"];
let rand = Math.floor(Math.random() * 3);

function computerChoice() {
  result.innerText = arr[rand];
}

function playagainMsg() {
  result.innerText = "Press PLAY AGAIN to play again";
}
function pagereload() {
  location.reload();
}

function userChoiceStone() {
  let urValue = "STONE";

  if (arr[rand] == urValue) {
    result.innerText = "draw";
  } else if (arr[rand] == "PAPER") {
    result.innerText = "you lose!";
  } else if (arr[rand] == "SCISSOR") {
    result.innerText = "you won!";
  }
}
function userChoicePaper() {
  let urValue = "PAPER";

  if (arr[rand] == urValue) {
    result.innerText = "draw";
  } else if (arr[rand] == "STONE") {
    result.innerText = "you won!";
  } else if (arr[rand] == "SCISSOR") {
    result.innerText = "you lose!";
  }
}
function userChoiceScissor() {
  let urValue = "SCISSOR";

  if (arr[rand] == urValue) {
    result.innerText = "draw";
  } else if (arr[rand] == "PAPER") {
    result.innerText = "you won!";
  } else if (arr[rand] == "STONE") {
    result.innerText = "you lose!";
  }
}
