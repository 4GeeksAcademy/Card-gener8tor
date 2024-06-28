/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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

  let suitNumber = Math.floor(Math.random() * 4);
  let cardNumber = Math.floor(Math.random() * 13);
  let card = document.querySelector(".card");

  let suitList = card.querySelectorAll(".suit");
  for (let i = 0; i < suitList.length; i++) {
    suitList[i].innerHTML = suits[suitNumber];
  }
  let numberList = card.querySelectorAll(".numbers");
  for (let i = 0; i < numberList.length; i++) {
    numberList[i].innerHTML = numbers[cardNumber];
  }
  //console.log(numbers[cardNumber]);* testing math
  console.log("Hello Rigo from the console!");
};
