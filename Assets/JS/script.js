// variable to link event listener to the generate options button
var generateBtn = document.querySelector("#optionsButton");

//object containing all the choices user made
const passwordOptions = {lengthOp: 0, lowerOp: "", upperOp: "", numericOp: "", specialOp: ""};

//function used to get the length in whole numbers of the password, using an input prompt
function numChar(){

  var x = prompt("please enter number of charachters in password (8-128)", "0");
  x = parseInt(x);

  while (typeof x !== "number" || isNaN(x) || 8 > x || x > 128 || x == null) {
    if (typeof x !== "number" || isNaN(x)) {
      x = prompt("Please enter WHOLE NUMBERS ONLY (8-128)", "0");
      x = parseInt(x);
    } else if (8 > x || x > 128) {
      x = prompt("Please enter 8-128", "0");
      x = parseInt(x);
    }
  }
  return x;
}

//repeatable function that takes a string input and outputs a true or false boolian based on user input of 'y' or 'n'
function boolOptions (x){

  var yesNO = prompt("Please enter y/n for " + x + ".", "y").toLowerCase();
  if (yesNO == "y") {
    yesNO = true;
  } else if (yesNO == "n") {
    yesNO = false;
  }

  while (typeof yesNO !== "boolean" || yesNO == null) {
    yesNO = prompt("Please enter y/n for " + x + ".", "y").toLowerCase();
    if (yesNO === "y") {
      yesNO = true;
    } else if (yesNO === "n") {
      yesNO = false;
    }
  }
  return yesNO
}

//function that handles the actual prompting of the user, and ensures that not all boolean propmts return as false (at least one true). saves the results to the passwordOptions object.
function passwordOptionsPrompt(){
  var numCharOption;
  var lowerCase;
  var upperCase;
  var numeric;
  var specChar;

  numCharOption = numChar();

  do {
    lowerCase = boolOptions("lower case");

    upperCase = boolOptions("upper case");

    numeric = boolOptions("numerics");

    specChar = boolOptions("special characters");

    if (!lowerCase && !upperCase && !numeric && !specChar){
      alert("you must have AT LEAST one set of characters selected");
    }
  } while (!lowerCase && !upperCase && !numeric && !specChar)

  passwordOptions.lengthOp = numCharOption;
  passwordOptions.lowerOp = lowerCase;
  passwordOptions.upperOp = upperCase;
  passwordOptions.numericOp = numeric;
  passwordOptions.specialOp = specChar;
}

//function that generates the password based on the contents of the passwordOptions object.
function generatePassword(number = passwordOptions.lengthOp, lower = passwordOptions.lowerOp, upper = passwordOptions.upperOp, numeric = passwordOptions.numericOp, specChar = passwordOptions.specialOp) {
  var lowerChars = "abcdefghijklmnopqrstuvwzyz";
  var upperChars = lowerChars.toUpperCase();
  var numericChars = "01234567890";
  var specChars = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/\"\\";

  var passLength = number;
  var passChars = "";
  var password = "";

  if (lower == true) {
    passChars += lowerChars;
  }
  if (upper == true) {
    passChars += upperChars;
  }
  if (numeric == true) {
    passChars += numericChars;
  }
  if (specChar == true) {
    passChars += specChars
  }
  
  for (var i = 0; i <= passLength; i++){
    var randNum = Math.floor(Math.random() * passChars.length);
    password += passChars.substring(randNum, randNum + 1);
  }
  
  return password;
}

//function that triggers the generation of a password when button is clicked, and that displays the password in the textarea
function writePassword() {
  var password = generatePassword(passwordOptionsPrompt());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
