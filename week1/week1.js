// This is a single line comment  
// This is another single line comment  
// Did you notice that you use two forward slashes to make a single-line comment.

/*  
This is a multi-line comment  
Multiple line comments can span many lines  
To start a multi-line comment, use a single forward slash first and then a star symbol as shown above  
To end a multi-line comment, enter a star symbol first, followed by the forward slash as shown here  
*/

// My first JavaScript program
console.log('Hello, World!')
console.log('I', 'am', 'learning', 'JavaScript!')

// JavaScript Syntax
// Output Text
console.log('This text is enclosed in single quotes')  
console.log("This is enclosed in double quotes")  
console.log(This is wrong and would trigger an error) // Hint: text must be within quotes

// Numbers and Arithmetics
console.log(2023) // Displays 2023  
console.log(1 + 2) // Addition  
console.log(5 - 3) // Subtraction  
console.log(3 * 1) // Multiplication  
console.log(4 / 3) // Division  
console.log(10 % 5) // Modulo  
console.log(3 ** 1) // Exponentiation  
console.log(6 + '3') // This is not a mathematical operatiion because of the quotes used.

/* 
JavaScript Data types and 
variable declaration
*/

let courseName = 'Software Engineering' 
console.log(courseName) // Output is the string value: Software Engineering

let isRaining
console.log(isRaining) // Output is Undefined because no value was assigned

let noValue = null
console.log(noValue) // Value is null

// To check the data type of a value or variable
console.log(typeof courseName) // string type
console.log(typeof false) // boolean type
console.log(typeof 100) // number type

// More examples on valid variable declaration
let firstName = 'Marshall' 
let courseCode = 'CSCI 5300'
let year = 2023
let school = 'Saint Louis University'
let isRegistered = true

// Output the information of the student
console.log(firstName, courseCode, year, isRegistered)