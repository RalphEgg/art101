// index.js - Lab 15 JS
// Author: Davis Goodman
// Date: 5/31/2023

// Random Pokemon API

function getStuff(){
    console.log("Click");
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + Math.floor((Math.random() * 1008)) + "/",
        type: "GET",
        data: {},
    })
    .done(function(data){
        // console.log(data);
        $("#output").html("It's <b>" + data.name + "</b>!");
        console.log(data.name + ": " + data.id);
    })
}

$("button").click(getStuff);