var name = prompt("Enter your name");
var name1 = prompt("Enter opponent name")
document.querySelector(".player1").innerHTML = name;
document.querySelector(".player2").innerHTML = name1;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1Image = "images/dice" + randomNumber1 + ".png";
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src",dice1Image);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2Image = "images/dice" + randomNumber2 + ".png";
var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src",dice2Image);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = name  + " won";
} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = name1 + " won";
} else {
  document.querySelector("h1").innerHTML = "Draw !";
}
