/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const random = arr => {
  let randomNumber = Math.floor(Math.random() * (arr.length - 1));
  return arr[randomNumber];
};

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let suit = "";
  let button = document.querySelector("#generator");
  let cardSuitIcon = document.querySelectorAll(".suitIcon");
  let cardNumber = document.querySelector("#number");
  let parentCard = document.querySelector('#parentCard');
  button.addEventListener("click", () => {
    suit = random(suits);
    cardSuitIcon.forEach(a => {
      a.textContent = `${suit}`;
      suit === "♦" || suit === "♥"
        ? (a.style.color = "red")
        : (a.style.color = "black");
    });
    cardNumber.textContent = `${random(numbers)}`;
  });

  setTimeout(() => {
    suit = random(suits);
    cardSuitIcon.forEach(a => {
      a.textContent = `${suit}`;
      suit === "♦" || suit === "♥"
        ? (a.style.color = "red")
        : (a.style.color = "black");
    });
    cardNumber.textContent = `${random(numbers)}`;
  }, 5000);




  
};
