/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function textRandom() {
    return;
  }

  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const whoPosition = Math.floor(Math.random() * (who.length - 0) + 0);
  const WhatPosition = Math.floor(Math.random() * (what.length - 0) + 0);
  const whenPosition = Math.floor(Math.random() * (when.length - 0) + 0);

  const NewString =
    who[whoPosition] + " " + what[whoPosition] + " " + when[whenPosition];

  document.getElementById("excuse").innerHTML = NewString;

  console.log(NewString);
};
