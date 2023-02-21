// Print the scores of the bubble solution and
// also print the total number of the solution
function printScores(data) {
    for (var i = 0; i < data.length; i++) {
        console.log('Bubble solution #' + i + ' score: ' + data[i]);
    }

    console.log('Bubbles tests: ' + data.length);
}