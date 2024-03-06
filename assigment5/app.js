// var nam = prompt();
// if(nam.toUpperCase = "waseem" ){
//     console.log("correct")
// }
// else{
//     console.log("wrong");
// }

//answer1
var nam = prompt("Enter a character (number or string):");


var charCode = nam.charCodeAt(0);

if (!isNaN(nam)) {
    console.log(nam + " is a number.");
}
 else {
    
    if (charCode >= 65 && charCode <= 90) {
        console.log(userInput + " is an uppercase letter.");
    }
    
    else if (charCode >= 97 && charCode <= 122) {
        console.log(nam + " is a lowercase letter.");
    } else {
        console.log(nam + " is not a number or a letter.");
    }
}

//answer2

// Get user input for the first integer
var firstInteger = prompt("Enter the first integer:");

// Get user input for the second integer
var secondInteger = prompt("Enter the second integer:");

// Convert the user inputs to integers
var num1 = parseInt(firstInteger);
var num2 = parseInt(secondInteger);

// Check and display the larger integer
if (num1 > num2) {
    alert("The larger integer is: " + num1);
}
 else if (num1 < num2) {
    alert("The larger integer is: " + num2);
}
 else {
    alert("Both integers are equal.");
}

//answer3

var was = prompt("Enter a number:");

var number = parseFloat(was);

if (number > 0) {
    alert("The number is positive.");
}
 else if (number < 0) {
    alert("The number is negative.");
}
 else {
    alert("The number is zero.");
}

//answer4

// Get user input for a character
var fws = prompt("Enter a character:");

// Convert the user input to lowercase (optional, for case-insensitive comparison)
var character = fws.toLowerCase();

// Check if the character is a vowel
var isVowel = false;

if (character.length === 1 && /^[aeiou]$/.test(character)) {
    isVowel = true;
}

// Display the result
console.log(`Is ${character} a vowel? ${isVowel}`);

//answer5

//  Store correct password in a variable
var correctPassword = "Secret123";

//  Ask user to enter their password
var userEnteredPassword = prompt("Enter your password:");

//  Validate the passwords
if (!userEnteredPassword) {
    //  Check if the user has entered a password
    alert("Please enter your password.");
} else if (userEnteredPassword === correctPassword) {
    //  Check if both passwords are the same
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

//answer6

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//answer7

// Get user input for time in 24-hour clock format
var aws = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

// Convert the user input to a number
var time = parseInt(aws);

// Implement different cases using if, else if, and else statements
if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time format. Please enter a time between 0000 and 2359.");
}




