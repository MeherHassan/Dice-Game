
var randomNumber1 = Math.floor(Math.random() * 6) +1;
var image1 = "images/dice"+randomNumber1+".png";
var image1Change = document.querySelectorAll("img")[0];
image1Change.setAttribute("src", image1);




var randomNumber2 = Math.floor(Math.random() * 6) +1;
var image2 = "images/dice"+randomNumber2+".png";
var image2Change = document.querySelectorAll("img")[1];
image2Change.setAttribute("src", image2);


if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Won";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Won 🚩";
}
