let mem1 = document.querySelector("#Member_A");
let mem2 = document.querySelector("#Member_B");
let mem3 = document.querySelector("#Member_C");
let winner = document.querySelector("#win");
let x = Math.floor(Math.random() * 6);
let y = Math.floor(Math.random() * 6);
let z = Math.floor(Math.random() * 6);
mem1.firstChild.src = "./assets/" + x + ".svg";
mem2.firstChild.src = "./assets/" + y + ".svg";
mem3.firstChild.src = "./assets/" + z + ".svg";
let count=1;
let array=document.querySelectorAll("img");
document.querySelector("button").addEventListener("click", function (e) {
  array.forEach(function(e){
    if(count%2){
      e.style.transform="rotateZ(360deg)";
    }else{
      e.style.transform="rotateZ(0deg)";
    }
    count++;
  });
  x = Math.floor(Math.random() * 6);
  y = Math.floor(Math.random() * 6);
  z = Math.floor(Math.random() * 6);
  mem1.firstChild.src = "./assets/" + x + ".svg";
  mem2.firstChild.src = "./assets/" + y + ".svg";
  mem3.firstChild.src = "./assets/" + z + ".svg";

  if (x == y) {
    mem1.firstChild.style.background = "rgb(0, 138, 252)";
    mem2.firstChild.style.background = "rgb(0, 138, 252)";
  } else if (x == z) {
    mem3.firstChild.style.background = "rgb(0, 138, 252)";
    mem1.firstChild.style.background = "rgb(0, 138, 252)";
  } else if (y == z) {
    mem2.firstChild.style.background = "rgb(0, 138, 252)";
    mem3.firstChild.style.background = "rgb(0, 138, 252)";
  }
  if (x > y && x > z) {
    winner.innerHTML = "Member A";
    mem1.firstChild.style.background = "rgb(2, 252, 2)";
    if (y > z) {
      mem2.firstChild.style.background = "rgb(252, 248, 2)";
      mem3.firstChild.style.background = "rgb(253, 25, 25)";
    } else {
      mem3.firstChild.style.background = "rgb(252, 248, 2)";
      mem2.firstChild.style.background = "rgb(253, 25, 25)";
    }
  } else if (y > z && y > x) {
    winner.innerHTML = "Member B";
    mem2.firstChild.style.background = "rgb(2, 252, 2)";
    if (x > z) {
      mem1.firstChild.style.background = "rgb(252, 248, 2)";
      mem3.firstChild.style.background = "rgb(253, 25, 25)";
    } else {
      mem3.firstChild.style.background = "rgb(252, 248, 2)";
      mem1.firstChild.style.background = "rgb(253, 25, 25)";
    }
  } else if (z > y && z > x) {
    winner.innerHTML = "Member C";
    mem3.firstChild.style.background = "rgb(2, 252, 2)";
    if (y > z) {
      mem2.firstChild.style.background = "rgb(252, 248, 2)";
      mem3.firstChild.style.background = "rgb(253, 25, 25)";
    } else {
      mem3.firstChild.style.background = "rgb(252, 248, 2)";
      mem2.firstChild.style.background = "rgb(253, 25, 25)";
    }
  }
});
