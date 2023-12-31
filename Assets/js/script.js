// Assignment Code
const generateBtn = document.querySelector("#generate");
//* arrays to hold all numbers letters and symbols for the password
let upperCase =[ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ]
let lowerCase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]
let numbers = [ "0","1","2","3","4","5","6","7","8","9"]
let symbols = [ "!","@","#","$","%","^","&","*",] 
//* empty array to hold user choices after picking
let choiceCharacters = []
let characterLength = []


//* creating function to generate password and prompts for user
function generatePassword () {

    characterLength = window.prompt("how many characters would you like your password to contain? (please choose from 8 to 128)")
//* if statement in case user choses lower or higher numbers
    if (characterLength < 8 || characterLength > 128)  {
        alert("Please choose from 8 to 128 characters")   
        return generatePassword()
    } 
    
//* variables for user choices for characters
    let upperChoice = confirm("Do you want your password to include uppercase letters?")   
    let lowerChoice = confirm("Do you want your password to include lowercase letters?") 
    let numberChoice = confirm("Do you want your password to include numbers? ") 
    let symbolChoice = confirm("Do you want your password to include symbols?") 
//* if statement in case user doesn't choose none of the characters
if (!upperChoice && !lowerChoice && !numberChoice && !symbolChoice) {
    alert("please choose at least one character")
    return generatePassword()
} 
//* adding characters into array based on user choices
if (upperChoice) {
    choiceCharacters = choiceCharacters.concat(upperCase)
}
if (lowerChoice) {
    choiceCharacters = choiceCharacters.concat(lowerCase)
}
if (numberChoice) {
    choiceCharacters = choiceCharacters.concat(numbers)
}
if (symbolChoice) {
    choiceCharacters = choiceCharacters.concat(symbols)
}
//* var loop to count user chosen length and method for choosing random letters
    
let result = ""
  for (i = 0; i < characterLength; i++) {
  let random = Math.floor(Math.random() * choiceCharacters.length)
  result += choiceCharacters[random]
  }

    return result

   


}
    





// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



