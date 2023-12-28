// Assignment Code
const generateBtn = document.querySelector("#generate");

//* series of promts for lenght 8 to 128 and charactertypes 
//* validate input 

function generatePassword () {
const lowerCase = "qwertyuiooplkjhgfdsazxcvbnm"
const uperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM"
const numbers  = "123456789"
const symbols = "!@#$%^&*()"

return "there must be some generated password which i couldn't approach any way (yet)"


}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const lowerCase = "qwertyuiooplkjhgfdsazxcvbnm"
const uperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM"
const numbers  = "123456789"
const symbols = "!@#$%^&*()"