// Compute user stats based on how many guesses
// Display User stats
var stats = 'You took ' + guesses + ' guesses to sink the battleship, ' + 
            'which means your shooting accuracy was ' + (3 / guesses) * 100 + '%';

alert(stats);