// Assignment code here


function generatePassword (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=<>?";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

if(length <=0){
  return `(password length must be at least 1)`;

}
if(allowedChars.length === 0){
  return `(At least 1 set of charachter needs to be selected)`;
}

for(let i = 0; i < length; i++){
  const randomIndex = Math.floor(Math.random() * allowedChars.length);
  password += allowedChars[randomIndex];
}

  return password;
}
  

  const passwordLength = 12;
  const includeUppercase = true;
  const includeLowercase = true;
  const includeNumbers = true;
  const includeSymbols = true

  const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

  console.log(`Generated password: ${password}`);
  
  
  
  



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
