"use strict";

// Selecting all buttons and elements
const yellowBtn = document.querySelector(".yellow");
const blueBtn = document.querySelector(".blue");
const redBtn = document.querySelector(".red");
const greenBtn = document.querySelector(".green");
const resetBtn = document.querySelector(".reset");
const randomBtn = document.querySelector(".random");

const body = document.querySelector("body");
const header = document.querySelector("header");

// Colors for the buttons
const yellowColor = "rgb(255, 255, 0)";
const blueColor = "rgb(0, 0, 255)";
const redColor = "rgb(255, 0, 0)";
const greenColor = "rgb(0, 255, 0)";
const resetColor = "#FFFFFF";

// Functions

// Changes the background color
function changeBackgroundColor(color) {
  body.style.backgroundColor = color;
}

// Creates a random color
function setRandomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  changeBackgroundColor(randomColor);
}

// Handling click events for each button
yellowBtn.addEventListener(
  "click",
  changeBackgroundColor.bind(null, yellowColor)
);

blueBtn.addEventListener("click", changeBackgroundColor.bind(null, blueColor));

redBtn.addEventListener("click", changeBackgroundColor.bind(null, redColor));

greenBtn.addEventListener(
  "click",
  changeBackgroundColor.bind(null, greenColor)
);

resetBtn.addEventListener("click", changeBackgroundColor.bind(null, "#FFFFFF"));

randomBtn.addEventListener("click", setRandomColor.bind(null));
