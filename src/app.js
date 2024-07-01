/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  colorChange();
};
function colorChange() {
  let suitNum = document.getElementById("top");
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let cardNumber = Math.floor(Math.random() * 13);
  let suitNumber = Math.floor(Math.random() * 4);
  let card = document.querySelector(".card");

  let topSuit = document.querySelector("#topSuit");
  let bottomSuit = document.querySelector("#bottomSuit");
  topSuit.innerHTML = suits[suitNumber];
  bottomSuit.innerHTML = suits[suitNumber];
  let numberList = card.querySelectorAll(".numbers");
  for (let i = 0; i < numberList.length; i++) {
    numberList[i].innerHTML = numbers[cardNumber];
  }
  if (suitNumber == 0 || suitNumber == 1) {
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
  }
}
