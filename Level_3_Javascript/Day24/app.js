// let body = document.querySelector("body");
// let divmain = document.querySelector(".divmain");
// let d1 = document.querySelector("#d1");
// let d2 = document.querySelector("#d2");
// let d3 = document.querySelector("#d3");
// let d4 = document.querySelector("#d4");
let para = document.querySelector("p");

let gameseq = [];
let userseq = [];
let started = false;
let level = 0;

//  button flash.......................................

function btnflash(btn1) {
  btn1.classList.add("flash");
  setTimeout(() => {
    btn1.classList.remove("flash");
  }, 100);
}

// random btn....................................
function randombtn() {
  let arr = ["d1", "d2", "d3", "d4"];
  let randomnumber = Math.floor(Math.random() * 4);
  let ranindex = arr[randomnumber];
  let randbtn = document.querySelector(`.${ranindex}`);
  
  gameseq.push(ranindex)
  btnflash(randbtn);
 
}

//  levelup................................................
function levelup() {
  level++;
  para.innerText = `level : ${level}`;
  randombtn();
  
 
  
}
// main.......................................................
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");

    started = true;
    levelup();
}
else if(gameseq[level-1]==userseq[level-1]){
  console.log('correct pattern');
  levelup();
  userseq.splice(0,level)

  
}
else{
  para.innerText='gameover'
}




});

// userr flash...................................................
function userflash(btn2) {
  btn2.classList.add("userflash");
  setTimeout(() => {
    btn2.classList.remove("userflash");
  }, 100);
}

// btn press...................................................
function btnpress() {
  let btn2 = this;
  let bt = btn2.getAttribute("class");
  userseq.push(bt);

  userflash(btn2);
}
// button click by user...............................................
allbtns = document.querySelectorAll("#b");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}
