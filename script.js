let gameseq = [];
let userseq = [];
let btnColors = ["red", "yellow", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let startbtn = document.querySelector(".start");

document.addEventListener("keypress", start);
startbtn.addEventListener("click",start);

function start(){
  if (started == false) {
    console.log("khela shuru ho gya ");
    started = true;
    levelup();
    startbtn.style.display = "none";
  }
}



function flash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randomBox = Math.floor(Math.random() * 3);
  let randomColor = btnColors[randomBox];
  let randomColorBtn = document.querySelector(`.${randomColor}`);
  gameseq.push(randomColor);
  console.log(gameseq);
  flash(randomColorBtn);
}

function cheakAns(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `game over!! Your Score was <b>${level}</b>`;
    startbtn.style.display = "inline";
    startbtn.innerText = "Restart";
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "burlywood";
    },100);
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "red";
    },200);
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "burlywood";
    },300);
    reset();
  }
}

function btnPress() {
  if (started == true) {
    userseq.push(this.classList[2]);
    flash(this);
    cheakAns(userseq.length - 1);
  }
}

let btns = document.querySelectorAll(".btn");
for (btn of btns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
