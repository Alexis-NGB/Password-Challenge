// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options  
function chooseParameters() {
  let selectedChars = []
  let validSelection = false
  let validLenght = false
  let confirmLowerCased = false
  let confirmUpperCased = false
  let confirmNumeric = false
  let confirmSpecial = false
  let passwordLenght = 0
  do {
    confirmLowerCased = confirm("Would you like your password to have lower cased letters?");
    confirmUpperCased = confirm("Would you like your password to have upper cased letters?");
    confirmSpecial = confirm("Would you like your password to have special characters?");
    confirmNumeric = confirm("Would you like your password to have numbers?");
    validSelection = !confirmLowerCased && !confirmUpperCased && !confirmSpecial && !confirmNumeric
    if (validSelection) {
      alert("You must choose at least one type of character! Try again!");
    }
  } while (validSelection)

  do {
    passwordLenght = parseInt(prompt("How many characters would you like your password to have? Inster a number between 10 and 64"));
    validLenght = passwordLenght < 10 || passwordLenght > 64
    if (validLenght) {
      alert("You must choose a length between 10 and 64! Try again!");
    }
  } while (validLenght);

  if (confirmSpecial === true) {
    selectedChars = [...selectedChars, ...specialCharacters]
  }
  if (confirmNumeric === true) {
    selectedChars = [...selectedChars, ...numericCharacters]
  }
  if (confirmLowerCased === true) {
    selectedChars = [...selectedChars, ...lowerCasedCharacters]
  }
  if (confirmUpperCased === true) {
    selectedChars = [...selectedChars, ...upperCasedCharacters]
  }

  return {
    selectedChars,
    passwordLenght
  }
}

// Function for getting a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * (arr).length)];
}


function generatePassword() {
  let password = "";
  let configuration = chooseParameters()
  for (let i = 0; i < configuration.passwordLenght; i++) {
    password += getRandomElement(configuration.selectedChars);
  }
  return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value += "\n" + password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);