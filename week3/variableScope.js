// Global variables
var personName = "Henry";
var age = 30;

// A function with a local variable
function getAgeGrade(personAge) {

    teenAgeStart = 13; // Local variables
    teenAgeEnd = 17;  

    if (personAge < teenAgeStart) {
        console.log(personName + " you are not yet a teenager"); 
    } else if (personAge > teenAgeEnd) {
        console.log(personName + ' you are older than a teenager');
    } else {
        console.log(personName + ' you are a teenager'); // personName is a global variable
    }
}

// Call to getAgeGrade function
getAgeGrade(age); // Using the global variable here

// Call to getAgeGrade function without an argument
// This call gives a different result that is wrong
// I will explain in the Challenges section
getAgeGrade(); 