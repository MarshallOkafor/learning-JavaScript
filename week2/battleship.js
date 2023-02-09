// Location variables for the ship
var loc1 = Math.floor(Math.random() * 5);
var loc2 = loc1 + 1;
var loc3 = loc2 + 1;

// Variables to hold the hits and guesses
var guess; // No value assigned yet
var hits = 0;
var guesses = 0;

// Initial state of the ship before the game start
var is_sunk = false; // Boolean variable

// Game logic to get user values compare with the ships locations
while (is_sunk == false) {
    guess = prompt('Ready, aim, fire! (enter a number from 0-6: ');
    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
    } else {
        guesses = guesses + 1;  
        
        if (guess == loc1 || guess == loc2 || guess == loc3){
            alert('It is a HIT!')
            hits += 1;

            if (hits == 3){
                is_sunk = true;
                alert('You sank my battleship');
            }
        } else {
            alert('It is a MISS!')
        } 
    }
}

// Compute user stats based on how many guesses
// Display User stats
var stats = 'You took ' + guesses + ' guesses to sink the battleship, ' + 
            'which means your shooting accuracy was ' + (3 / guesses) * 100 + '%';

alert(stats);