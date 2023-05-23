// index.js - Lab 12 JS
// Author: Davis Goodman
// Date: 5/22/2023

// Sort Function
function sortUserName (str) {
  len = str.length;
  mod = len % 4;
  if (mod==0) {
    return "Truck Freak"
  }
  else if (mod==1) {
    return "Crazy Ass"
  }
  else if (mod==2) {
    return "друг"
  }
  else if (mod==3) {
    return "The Fighter"
  }
}

// Click Listener
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var friend = sortUserName(name);
  newText = "<p>Out of your friends, you are: <span id='answer'>" + friend + "</span></p>"
  document.getElementById("output").innerHTML = newText;
  console.log("Mod = " + mod);
  console.log("Result = " + friend);
})