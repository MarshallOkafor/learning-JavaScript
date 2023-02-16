// Using the return statement
function bake(degree) {
    var message;

    if (degree > 100) {
        message = "Greater than boiling point";
    } else {
        message = "Less than boiling point";
    }

    return message;
}

// Print the status of the temperature
var statusOfTemp = bake(120); // Call to the bake function
console.log(statusOfTemp); // Prints the message returned on the console
