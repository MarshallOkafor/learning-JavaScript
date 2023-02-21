// Get the bubble solution with the highest score
function getHighestScore(data) {
    var highest = 0;

    for (var i = 0; i < data.length; i++) {
        if (data[i] > highest) {
            highest = data[i];
        }
    }

    console.log('Highest bubble score: ' + highest);

    return highest;
}