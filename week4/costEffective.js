// Get solutions with the most cost effective
function getMostCostEffective(scores, costs, highest) {
    var cost = 100; // Assigning an arbitrary value to cost here
    var index;

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highest) {
            if (cost > costs[i]) {
                index = i; // Getting the index of the most cost effective during each iteration
                cost = costs[i]; // Updating the cost variable to the lowest found
            }
        }
    }

    console.log('Bubble solution #' + index + ' is the most cost effect!');
}
