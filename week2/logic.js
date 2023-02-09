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