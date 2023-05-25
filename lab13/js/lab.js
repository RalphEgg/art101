// index.js - Lab 13 JS
// Author: Davis Goodman
// Date: 5/24/2023

// Format Text Results
function word() {
    $("#output").append("<div class=word>" + str + "!");
}

// FizzBuzzBoom
var str;
for(i=1; i<= 200; i++) {
    str = "";
    if (i%3 == 0) {
        str += "Fizz";
        word();
    }
    if (i%5 == 0) {
        str += "Buzz";
        word();
    }
    if (i%7 == 0) {
        str += "Boom";
        word();
    }
    else if (str == "") {
        str = i;
        $("#output").append("<div>" + str);
    }
}