// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


var greaterNum = function(x, y){
  if (x > y){
    console.log("The greater number of " + x + " and " + y + " is " + x);
  }
  else {
    console.log("The greater number of " + x + " and " + y + " is " + y);
  }
}
greaterNum(3, 6);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

var helloWorld = function(language){
  switch(language){
    case "en":
      console.log("Hello World");
      break;
    case "es":
      console.log("Hola Mundo");
      break;
    case "de":
      console.log("Hej Verden");
      break;
    default:
      console.log("Hello World");
  }
}
// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.


var assignGrade = function(score){
  switch(true){
    case score < 50:
      console.log("F");
      break;
    case score < 60:
      console.log("D");
      break;
    case score < 70:
      console.log("C");
      break;
    case score < 80:
      console.log("B");
      break;
    case score < 100:
      console.log("A")
      break;
  }
}
assignGrade(85);



// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".



var pluralizer = function(noun, num){
  if (num < 2){
    console.log(num + " " + noun);
  }
  else {
    console.log(num + " " + noun + "s");
  }
}
pluralizer("cat", 1);

