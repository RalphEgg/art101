// index.js - Lab 11 jQuery
// Author: Davis Goodman
// Date: 5/17/2023

// Buttons

$("#challenge").append("<br><button type='button' class='button challenge-button'>Challenge</button>");
console.log("Create Challenge Button");

$("#problems").append("<br><button type='button' class='button problems-button'>Problems</button>");
console.log("Create Problems Button");

$("#output").append("<br><button type='button' class='button results-button'>Results</button>");
console.log("Create Results Button");

// Button Functions

$("button.challenge-button").click(function(){
    $("#challenge").toggleClass("small");
    console.log("Toggle Challenge Styling");
});

$("button.problems-button").click(function(){
    $("#problems").toggleClass("big");
    console.log("Toggle Problems Styling");
});

$("button.results-button").click(function(){
    $("#output").toggleClass("green");
    console.log("Toggle Results Styling");
});