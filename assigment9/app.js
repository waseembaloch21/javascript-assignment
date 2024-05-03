
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}


function playGuessingGame() {
    
    var secretNumber = rollDie();

   
    var chances = 2;
    var points = 0;

    while (chances > 0) {
        
        var guess = parseInt(prompt("Guess the secret number between 1 and 6:"));

        
        if (guess === secretNumber) {
           
            if (chances === 2) {
                points = 6;
            } else {
                points = 3;
            }
            console.log("Congratulations! You guessed the secret number. You earned " + points + " points.");
            break;
        } else {
            
            console.log("Sorry, that's incorrect.");
            chances--;
        }
    }

    
    if (chances === 0) {
        console.log("Sorry, you failed to guess the secret number. The secret number was " + secretNumber + ".");
    }
}


playGuessingGame();
