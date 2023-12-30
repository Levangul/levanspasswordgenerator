// Assignment Code
const generateBtn = document.querySelector("#generate");

//* series of prompts for lenght 8 to 128 and charactertypes 
//* validate input 
//* confirm and window prompt
//* const index = Math.floor(Math.random() * ....length);
//* for (let i = 0; i < ....length; i++)
//* kind of " if user choice += lowercase "
    //* arrays to hold all numbers letters and symbols for the password
    const upperCase = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ]
    const lowerCase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]
    const numbers = [ "1","2","3","4","5","6","7","8","9"]
    const symbols = [ "!","@","#","$","%","^","&","*",] 
    //* empty array to hold user choices after picking
    let choiceCharacters = []
    let characterLength = []
    let givenPassword = []
    let randomIndex = []
    


  


//* creating function to generate password and prompts for user
function generatePassword () {

  
    characterLength = window.prompt("how many characters your password would you like to contain? (please choose from 8 to 128)")
if (characterLength < 8 || characterLength > 128) {
  alert("Please choose from 8 to 128 characters")
  return generatePassword()
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

for (i = 0; i < characterLength.index; i++); {
    randomIndex = Math.floor(Math.random() * choiceCharacters.length)
    givenPassword += choiceCharacters[randomIndex]
}







return givenPassword;





}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



