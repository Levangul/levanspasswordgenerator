// Assignment Code
const generateBtn = document.querySelector("#generate");

//* series of prompts for lenght 8 to 128 and charactertypes 
//* validate input 
//* confirm and window prompt
//* const index = Math.floor(Math.random() * ....length);
//* for (let i = 0; i < ....length; i++)

const   userChoice = ""
const   characterLength = 8;
const   upperCase = [ 'abcdefghijklmopqrstuvwxyz' ]
const   lowerCase = [ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ]
const   numbers = [ '123456789']
const   symbols = [ '!@#$%^&*()']




//* creating function to generate password and prompts for user
function generatePassword () {

const characterLength = window.prompt("How many characters would you like your password to contain? (please choose from 8 to 128)")
if (characterLength < 8 || characterLength > 128) {
alert("Please choose from 8 to 128 characters")
}




return ;


}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



