/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/


// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  event.preventDefault();
  
  const lengthResponse = prompt(
  'How many characters would you like your password to be? (Must be between 8 and 128 characters):',
  'enter response'
  );

  if (
    lengthResponse <= 7 &
    lengthResponse >= 129
  ) {
    alert('please enter a valid number between 8 and 128');
  } else {
    const length = document.createElement(lengthResponse);
    length.passwordText = `Your password length is ${lengthResponse}.`;
    document.body.appendChild(length);
  }

  const specialCharacters = confirm ('Would you like to add any special characters?');

  if (specialCharacters === true) {
    const special = prompt(
      'Please enter the character(s) you would like to include (ex.!#$%&()*+,-./:;<=>?@[]^_`{|}~):',
      'enter character here'
    );
    if (
      special !== '!' &&
      special !== '#' &&
      special !== '$' &&
      special !== '%' &&
      special !== '&' &&
      special !== '(' &&
      special !== ')' &&
      special !== '*' &&
      special !== '+' &&
      special !== ',' &&
      special !== '-' &&
      special !== '.' &&
      special !== '/' &&
      special !== ':' &&
      special !== ';' &&
      special !== '<' &&
      special !== '=' &&
      special !== '>' &&
      special !== '?' &&
      special !== '@' &&
      special !== '[' &&
      special !== ']' &&
      special !== '^' &&
      special !== '_' &&
      special !== '`' &&
      special !== '{' &&
      special !== '|' &&
      special !== '}' &&
      special !== '~' 
    ) {
      alert ('please enter a valid special character');
    } else {
      const special = document.createElement(special);
      special.passwordText
    }
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
