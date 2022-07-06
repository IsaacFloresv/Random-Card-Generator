/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function RNumber() {
  let Reyes = ["J", "Q", "K", "A"];
  let card = Math.floor(Math.random() * 14);
  let num = 1;
  if (card <= 10) {
    return num;
  } else {
    let f = card - 10;
    return (num = Reyes[f]);
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
  generadorCard();
  AsigNumber();
  let BRecarga = document.querySelector("button");
  BRecarga.addEventListener("click", generadorCard);
};
