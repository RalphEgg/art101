// index.js - Lab 16 Javascript
// Author: Davis Goodman
// Date: 6/6/2023

// Using the core $.ajax() method

$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        var comicObj = data;
        $("#output").html("<h2>" + comicObj.title + "</h2>")
        $("#output").append("<img src=' " + comicObj.img + " '>");
        $('#output > img').attr('title', comicObj.alt);
        console.log("xkcd #" + comicObj.num + " - " + comicObj.month + "/" + comicObj.day + "/"+ comicObj.year);
        console.log("Title: " + comicObj.title)
        console.log("Image: " + comicObj.img)
        console.log("Alt: " + comicObj.alt)
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})