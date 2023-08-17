// Assignment code here
var lowercase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers =['0','1','2','3','4','5','6','7','8','9'];
var specialChars =['!','@','#','$','%','^','&','*','(',')','?','>','<',';',':'];


function generatePassword() {
  var passwordLength = parseInt(prompt("How many characters would you like in your password? Please choose a number between 8-128."));

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128");
    return "";
  }

  var confirmLower = confirm("Would you like to use lowercase letters?");
  var confirmUpper = confirm("Would you like to use uppercase letters?");
  var confirmNum = confirm("Would you like to use numbers?");
  var confirmSpec = confirm("Would you like to use special characters?");

  var allChars=[];
  if(confirmLower) {
    allChars = allChars.concat(lowercase);
  }
  if(confirmUpper) {
    allChars = allChars.concat(uppercase);
  }
  if(confirmNum) {
    allChars = allChars.concat(numbers);
  }
  if(confirmSpec) {
    allChars = allChars.concat(specialChars);
  }

  var randomPassword = "";

  for (var i =0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * allChars.length);
    randomPassword += allChars[index];
  }

  return randomPassword;

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
