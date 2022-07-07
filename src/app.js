/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function RNumber() {
  let Reyes = ["J", "Q", "K", "A"];
  let card = Math.floor(Math.random() * 14);
  if (card <= 10) {
    if (card == 0) return (card = 1);
    return (card = card);
  } else {
    let num = card - 10;
    return (num = Reyes[num]);
  }
}

function AsigNumber() {
  let ANumb = document.querySelector("#Number");
  ANumb.innerHTML = RNumber();
}

function generadorCard() {
  AsigNumber();
  let SimbTop = document.querySelector("#SimbTop");
  let SimbBotom = document.querySelector("#SimbBottom");
  let Simb = ["♠", " ♥", " ♣", " ♦️"];
  let x = Math.floor(Math.random() * 4);
  console.log(x);
  SimbTop.innerHTML = SimbBottom.innerHTML = Simb[x];
}

window.onload = function() {
  //write your code here
  console.log(Math.floor(Math.random() * 14));
  //generadorCard();
  //AsigNumber();
  let BRecarga = document.querySelector("button");
  BRecarga.addEventListener("click", generadorCard);
};
