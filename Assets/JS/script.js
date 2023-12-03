// Assignment Code
var generateBtn = document.querySelector("#generate");

function numChar(x){
  x = prompt("please enter number of charachters in password (8-128)", "0");
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

function boolOptions (yesNO){
  yesNO = prompt("Please enter y/n for lower case.").toLocaleLowerCase();
  if (yesNO == "y") {
    yesNO = true;
  } else if (yesNO == "n") {
    yesNO = false;
  }

  while (typeof yesNO !== "boolean" || yesNO == null) {
    yesNO = prompt("Please enter y/n for lower case.").toLocaleLowerCase();
    if (yesNO === "y") {
      yesNO = true;
    } else if (yesNO === "n") {
      yesNO = false;
    }
  }
  return yesNO
}

function passwordOptions(){
  var numChar;
  var lowerCase;
  var upperCase;
  var numeric;
  var specChar;

  numChar = numChar();

  lowerCase = boolOptions();

  upperCase = boolOptions();

  numeric = boolOptions();

  specChar = boolOptions();
}

function generatePassword() {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordOptions());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
