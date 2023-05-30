// Author: Davis Goodman
// Date: 5-1-2023

// Define Variables
myTransport = ["Honda CR-V", "Bus"];
myTransportString = myTransport.join(', ');

// Main Object
myMainRide = {
  make: "Honda",
  model: "CR-V",
  color: "Glacier Blue",
  year: 2007,
  age: function() {
      return 2023 - this.year;
  }
}

// Output
document.writeln("My everyday transportation: ", myTransportString, "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");