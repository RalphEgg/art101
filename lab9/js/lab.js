// index.js - Lab 9 Javascript File
// Author: Davis Goodman
// Date: 5/10/2023

// Elements

challengeEl =
document.getElementById("challenge");
console.log("Define challengeEl")

problemsEl =
document.getElementById("problems")
console.log("Define problemsEl")

outputEl =
document.getElementById("output");
console.log("Define outputEl");

// Additional Text

new1El =
document.createElement("p");
new1El.innerHTML = "This is new!"
console.log("Create new1El");

new2El =
document.createElement("p");
new2El.innerHTML = "So is this!"
console.log("Create new2El");

// Attributes

setTimeout(function() {
  challengeEl.style.fontSize = "10pt"
  console.log("Shrink Challenge")
}, 1000);

setTimeout(function() {
problemsEl.style.fontStyle = "italic"
console.log("Italicize Problems")
}, 2000);

// Append

setTimeout(function() {
  outputEl.appendChild(new1El),
  console.log("Append new1El")
}, 3000);


setTimeout(function() {
  outputEl.appendChild(new2El),
  console.log("Append new2El")
}, 4000);