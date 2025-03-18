"use strict";

// Selecting all buttons and elements
const yellowBtn = document.querySelector(".yellow");
const blueBtn = document.querySelector(".blue");
const redBtn = document.querySelector(".red");
const greenBtn = document.querySelector(".green");
const resetBtn = document.querySelector(".reset");

const body = document.querySelector("body");

// Functions
function changeBackgroundColor(color) {
  body.style.backgroundColor = color;
}

// Handling click events for each button
yellowBtn.addEventListener(
  "click",
  changeBackgroundColor.bind(changeBackgroundColor, "yellow")
);

blueBtn.addEventListener(
  "click",
  changeBackgroundColor.bind(changeBackgroundColor, "blue")
);

redBtn.addEventListener(
  "click",
  changeBackgroundColor.bind(changeBackgroundColor, "red")
);

greenBtn.addEventListener(
  "click",
  changeBackgroundColor.bind(changeBackgroundColor, "green")
);

resetBtn.addEventListener(
  "click",
  changeBackgroundColor.bind(changeBackgroundColor, "#FFFFFF")
);
