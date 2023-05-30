// Author: Davis Goodman 
// Date: 5-3-2023

// sortUserName
function sortUserName () {
  var userName = window.prompt ("Enter your name and something funny will happen...");
  console.log("userName =", userName);
  // Remove spaces
  userNameSpaceless = userName.replaceAll(" ", "");
  console.log ("userNameSpaceless= ", userNameSpaceless);
  // Split string to array
  var nameArray = userNameSpaceless.split('');
  console.log("nameArray =", nameArray);
  // Sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // Join array back to a string
  var nameSorted = nameArraySort.join(', ');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// Output
document.writeln("Hehehe... Here you go: ",
  sortUserName(), "</br>");