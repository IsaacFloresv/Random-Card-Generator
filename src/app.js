/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function random() {
  let card = math.floor(math.random() * 14);
  let num = 0;
  if (card >= 11) {
    switch (card) {
      case 11:
        return (num = J);
        break;
      case 12:
        return (num = Q);
        break;
      case 13:
        return (num = K);
        break;
      case 14:
        return (num = A);
        break;
    }
  } else return num;
}
function generadorcard() {
  let card = null;
  return card;
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
