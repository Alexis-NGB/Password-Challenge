# Module 5 Challenge: Password Generator

## Overview

This week’s challenge requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

## Instructions

* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

## Method

I did use 4 functions to achieve this; 

1. chooseParameters() in order to get the adequate parameters for the password. To ensure that the user select only acceptable parameters, I put the choices on a "do while"; do (questions) while (parameters are within the expected). That way I ensure that at least one type of character is selected and that the lenght is between 10 and 64.

After the right parameters were chosen, I created an array of "selected characters, adding the array of each character type to this variable if and only if they were selected. 

This function returns two variables, PasswordLenght (selected by the user) and SelectedCharacters (an array of characters including those selected by the user)

2. GenerateRandomElement() a simple function to select a random element from an array, in this case we are going to select a character from our freshly created SelectedCharacter array.

3. GeneratePassword() is a function that grabs the data selected and creates a for loop, selecting a random element from the array, and addidng it to the password. This is repeated on a for loop for as many times as the passwordLenght

4. writePassword() in order to print the password in the selected div of the html. I added a += "/n" in order to stack up the passwords, in case the user needed more than one.