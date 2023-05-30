// index.js - Lab 10 Javascript
// Author: Davis Goodman
// Date: 5/15/2023

// Event
var button = document.getElementById("my-button");
console.log("Define button")

// sortUserName
function sortUserName () {
  userName = document.getElementById('user-name').value;
  console.log("userName =", userName);
   // Remove spaces
   userNameSpaceless = userName.replaceAll(" ", "");
  // Split string to array
  var nameArray = userNameSpaceless.split('');
  console.log("nameArray =", nameArray);
  // Sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // Join array back to a string
  var nameSorted = nameArraySort.join(', ');
  console.log("nameSorted =", nameSorted);
 
  // Output Results
  outputEl =
  document.getElementById("output");
  outputEl.innerHTML = nameSorted
}

// Event Listener
button.addEventListener('click', sortUserName)