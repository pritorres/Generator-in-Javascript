/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function GetRandomByMax(max) {
    return Math.floor(Math.random() * (max - 0) + 0);
  }

  const whoPosition = GetRandomByMax(who.length);
  const whatPosition = GetRandomByMax(what.length);
  const whenPosition = GetRandomByMax(when.length);
  const NewString =
    who[whoPosition] + " " + what[whatPosition] + " " + when[whenPosition];

  document.getElementById("excuse").innerHTML = NewString;
};
