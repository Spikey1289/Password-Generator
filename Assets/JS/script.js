// Assignment Code
var generateBtn = document.querySelector("#generate");

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

function boolOptions (x){

  var yesNO = prompt("Please enter y/n for " + x + ".").toLowerCase();
  if (yesNO == "y") {
    yesNO = true;
  } else if (yesNO == "n") {
    yesNO = false;
  }

  while (typeof yesNO !== "boolean" || yesNO == null) {
    yesNO = prompt("Please enter y/n for " + x + ".").toLowerCase();
    if (yesNO === "y") {
      yesNO = true;
    } else if (yesNO === "n") {
      yesNO = false;
    }
  }
  return yesNO
}

function passwordOptions(){
  var numCharOption;
  var lowerCase;
  var upperCase;
  var numeric;
  var specChar;

  numCharOption = numChar();

  lowerCase = boolOptions("lower case");

  upperCase = boolOptions("upper case");

  numeric = boolOptions("numerics");

  specChar = boolOptions("special characters");

  return numCharOption, lowerCase, upperCase, numeric, specChar;
}


// number, lower, upper, numeric, specChar
function generatePassword() {
  var lowerChars = "abcdefghijklmnopqrstuvwzyz";
  var upperChars = lowerChars.toUpperCase();
  var numericChars = "01234567890";
  var specChars = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/\"\\";

  console.log(lowerChars);
  console.log(upperChars);
  console.log(numericChars);
  console.log(specChars);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordOptions());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
