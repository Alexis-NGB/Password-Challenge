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
let confirmLowerCased = false;
let confirmUpperCased = false;
let confirmSpecial = false;
let confirmNumeric = false;
let passwordLenght = 0
let password = ""

function chooseParameters() {
  confirmLowerCased = confirm("Would you like your password to have lower cased letters?");
  confirmUpperCased = confirm("Would you like your password to have upper cased letters?");
  confirmSpecial = confirm("Would you like your password to have special characters?");
  confirmNumeric = confirm("Would you like your password to have numbers?");
  passwordLenght = prompt("How many characters would you like your password to have? Inster a number between 10 and 64");

  if (!confirmLowerCased && !confirmUpperCased && !confirmSpecial && !confirmNumeric) {
    alert("You must choose at least one type of character! Try again!");
    return generatePassword();
  }
  if (passwordLenght < 10 || passwordLenght > 64) {
    alert("You must choose a length between 10 and 64! Try again!");
    return generatePassword();
  }
}

/* while (confirmLowerCased === false && confirmUpperCased === false && confirmSpecial === false && confirmNumeric === false) {
  confirmLowerCased = confirm("Would you like your password to have lower cased letters?")
  confirmUpperCased = confirm("Would you like your password to have upper cased letters?")
  confirmSpecial = confirm("Would you like your password to have special characters?")
  confirmNumeric = confirm("Would you like your password to have numbers?")
}
passwordLenght = prompt("How many characters would you like your password to have? Inster a number between 10 and 64")
if (10 < passwordLenght < 64) {

} else { } */


// Function for getting a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * (arr).length)];

}
/* let randomLowerCased = getRandomElement(lowerCasedCharacters)
 console.log(randomLowerCased) */


// Function to generate password with user input
let selectedChars = []
function generatePassword(passwordLenght) {
  chooseParameters()
  if (confirmSpecial = true) {
    selectedChars.push(specialCharacters)
  } if (confirmNumeric = true) {
    selectedChars.push(numericCharacters)
  } if (confirmLowerCased = true) {
    selectedChars.push(lowerCasedCharacters)
  } if (confirmUpperCased = true) {
    selectedChars.push(upperCasedCharacters)
  }
  for (let i = 0; i < passwordLenght; i++) {
    password += getRandomElement(selectedChars);
  }
  return password;
}
generatePassword()

console.log(password)


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

/* pseudo código: le damos al usuario a elegir qué tipo de caracteres quiere que aparezca 
en su contraseña mediante una serie de "confirm()" Al menos una categoría tiene que ser seleccionada. 
Una vez sabiendo qué conjunto de variables vamos a usar, tenemos que saber qué longitud hay que obtener,
cuantos caracteres. For loop para obtener un*/