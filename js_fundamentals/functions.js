// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var fortuneTeller = function(childNum, partName , location , title) {

console.log("You will be ", title, "with a name of ", partName, "in the area of", location, "with this amount of children", child);

fortuneTeller(3, "Fredrick", "Toronto", "Google intern");
fortuneTeller(5, "Georgie", "San-fransico", "Apple engineer");
fortuneTeller(9000, "Jimmy", "Monteal", "Bitmaker king");


}

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var ageCalculator = function(currentYear, birthYear){
console.log("You are either", + (currentYear - birthYear) + " or " + (currentYear - birthYear - 1));
}

ageCalculator("2015", "1992")







// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var calculateSupply = function(age, perDay) {
  console.log("You will need " + ((100 - age) * 365 * perDay) + " to last you until the ripe old age of 100");
}

}


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".


var calcCircumfrence = function(radius) {
  console.log("The circumference is " + Math.round( ((2 * Math.PI * radius)*100))/100 );
}
calcCircumfrence(10);


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsiusToFahrenheit = function(c) {
 console.log(c + "C is " + ((c*1.8)+32) + "F");
}
celsiusToFahrenheit(10)

var celsiusToCelius = function(f) {
console.log(f + "F is " + Math.round((f-32.0)/1.8) + "c");
}

celsiusToFahrenheit(10)



