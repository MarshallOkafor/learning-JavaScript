// Get solutions with the highest score
function solutionWithHighest(data, highestScore) {
    var bestSolutions = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i] == highestScore) {
            bestSolutions.push('#' + i);
        }
    }

    console.log('Solution with highest score: ' + bestSolutions);
}