// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var child = 9.3;
var name = "Laquisha";
var location = "Sun";
var title = "Professional Twerker";

console.log("You will be a " + title + " in " + location + ", and married to " + name + " with " + child + " kids.");





// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

 currentYear = 2015;
 birthYear = 1992;

console.log("You are either " + (CurrentYear - birthYear) + " or " + (currentYear - birthYear - 1));

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

age = 24;
perDay = 2;
console.log("You will need " + ((100 - age) * 365 * perDay) + " to last you until the ripe old age of 100");


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


c = 10;
f = 10;

console.log(c + "C is " + ((c*1.8)+32) + "F");
console.log(f + "F is " + Math.round((f-32.0)/1.8) + "c");


