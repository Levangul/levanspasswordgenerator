// Assignment Code
const generateBtn = document.querySelector("#generate");

//* series of prompts for lenght 8 to 128 and charactertypes 
//* validate input 
//* confirm and window prompt
//* const index = Math.floor(Math.random() * ....length);
//* for (let i = 0; i < ....length; i++)
//* kind of " if user choice += lowercase "

//* arrays to hold all numbers letters and symbols for the password
  let upperCase = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ]
  let lowerCase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]
  let numbers = [ "1","2","3","4","5","6","7","8","9"]
  let symbols = [ "!","@","#","$","%","^","&","*",] 
  //* empty array to hold user choices
  let  choiceCharacters = []


//* creating function to generate password and prompts for user
function generatePassword () {


   let characterLength = window.prompt("Please choose how many characters you would like your password to contain? (please choose from 8 to 128)")
if (characterLength < 8 || characterLength > 128) {
  return alert("Please choose from 8 to 128 characters")
} 


if  (confirm("Do you want your password to include uppercase letters?"))  {
    choiceCharacters = choiceCharacters.concat(upperCase) 
}
    
if (confirm("Do you want your password to include lowercase letters?") ) {
    choiceCharacters = choiceCharacters.concat(lowerCase)
    
  
}

if (confirm("Do you want your password to include numbers? ") ) {
    choiceCharacters = choiceCharacters.concat(numbers)
    
}

if (confirm("Do you want your password to include symbols?") )  {
    choiceCharacters = choiceCharacters.concat(symbols)
    
}

for (let i = 0; i < characterLength; i++);
 Math.floor(Math.random() * choiceCharacters.length);





return choiceCharacters;




}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



