
var p1_name = prompt("enter first player 1 name")
var p2_name = prompt("enter first player 2 name")

document.querySelectorAll(".dice")[0].querySelector("P").innerHTML = p1_name;
document.querySelectorAll(".dice")[1].querySelector("P").innerHTML = p2_name;


function play() {
  var p1_rng = Math.ceil(Math.random() * 6);
  var p2_rng = Math.ceil(Math.random() * 6);

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + p1_rng + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + p2_rng + ".png");

  if (p1_rng > p2_rng) {
    document.querySelector("h1").innerHTML = "Player 1 wins ";
  } else if (p1_rng < p2_rng) {
    document.querySelector("h1").innerHTML = "Player 2 wins ";
  } else {
    document.querySelector("h1").innerHTML = "Draw ";
  }
}
