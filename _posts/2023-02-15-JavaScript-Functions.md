---
title: "JavaScript Functions"
date: 2023-02-15
---

This is a recap of my week-3 learning experience in JavaScript programming language. I am excited to share all that I learned this past week.  

I delved into how to write and use functions in JavaScript. Recall that, a function is a code block that performs a specific task when 
invoked or called. The power of functions in programming is that functions can be reused multiple number of times without rewriting them. All you have to do is call the function to carry out a task for you.  

Using the concept of functions when writing comuter programs have so many benefits. Aside resusability, functions also help computer programs to look clean, clear to read, and less tedious to understand. More so, functions helps us to easily manage and maintain our programs.  

### Function Declaration And Function Call In JavaScript
There are many built-in function in JavaScript such as ```random()``` and ```log()```. These built-in functions can freely be used and do not have to be 
declared again.  

However, we can declare our own custom functions to perform task for us. I learned that to declare a function in JavaScript, you use the keyword 
**function** followed by the **name** of the function, followed by parenthesis **( )** and finally the code block within curly brackets **{ }**. While to call a function, we simply type out the name of the function followed by parenthesis **( )**. See below a syntax of function declaration and function call in JavaScript.  

```
function printCourse() { // This function has no parameter
  
  // Displays course name on the console
  console.log("I am taking CSCI 5300");
  
}

printCourse(); // This is a function call
```

As seen above, the function ```printCourse()``` is my own custom function declared without a paramter just like in other programming languages that allows functions to be declared  without a parameter. Conversely, we can also declare a function with parameter or parameters and pass the necessary argument(s) to the function when called. Lets see some examples.

```
// Declaring a function without parameter
function addNum() {

  var num1 = 3; // Variables
  var num2 = 6;
  
  console.log(num1 + num2) // Print the sum to the console
}

addNum(); // Function call
```
We can also declare a function with parameter or paramters.

```
// Declaring a function with two parameters
function addNum(num1, num2) {

  var sum = num1 + num2; // Sum the arguments
  
  console.log(sum)
}

addNum(3, 6); // Function call with two arguments
```

As seen above, the syntax to call a function in JavaScript is similar to many other programming languages such as Python. You simply type out the function name and pass the argument(s) if any to the function call.

#### What Can Be Passed To JavaScript Functions
JavaScript functions allow any type of arguments to be passed such as ```string```, ```int```, or ```boolean```. The arguments can be either values or varable names. It depends on the function declaration and what arguments are expected to be passed. For example:

```
saveProfile("Bill", "SLU", 3.87, true) // Values are passed directly to the function

saveProfile(student, school, GPA, hasGraduated) // Variable names are passed as arguments
```

#### Return Statement
The ```return``` keyword is used in a JavaScript function to return a result when the function is called. The use of the ```return``` statement is similar to the ```return``` statement in Python.

```
// Using the return statement
function bake(degree) {
    var message;

    if (degree > 100) {
        message = "Greater than boiling point";
    } else {
        message = "Less than boiling point";
    }

    return message; // message is returned to the caller
}

// Print the status of the temperature
var statusOfTemp = bake(120); // Call to the bake function
console.log(statusOfTemp); // Prints the message on the console.
```

### Global and Local Variables
I also learned about the concept of ```global``` and ```local``` variables in JavaScript. Variables declared outside of a function are global variables while variables declared within a function are local variables. Local variables can only be used within the function that they are defined. On the other hand, global variables can be accessed or used within the entire program. Lets take a look.

```
// Global variables
var personName = "Henry";
var age = 30;

// A function with local variables
function getAgeGrade(personAge) {

    teenAgeStart = 13; // Local variables
    teenAgeEnd = 17;  

    if (personAge < teenAgeStart) {
        console.log(personName + " you are not yet a teenager");
    } else if (personAge > teenAgeEnd) {
        console.log(personName + " you are older than a teenager");
    } else {
        console.log(personName + " you are a teenager"); // personName is a global variable
    }
}

// Call to getAgeGrade function with age variable passed
getAgeGrade(age); // Using the global variable here


// Call to getAgeGrade function without an argument
// This call gives a different result that is wrong
// I will explain in the Challenges section
getAgeGrade(); 
```

### Challenges

The challenges I faced while working with JavaScript functions are:  
1. When you do not pass enough arguments that a function requires during a call, JavaScript automatically assigns the ```undefined``` value to the parameters of the function that did not receive any argument. I noticed this problem while I was trying to test the JavaScript code on the ```Global``` and ```Local``` Variables``` section of this blog. Unlike some other programming languages, JavaScript do not indcate an error instead it assigns ```undefined``` to the parameter(s) which could lead to erroneous result like I experienced. Thus, we need to watch out when we make function calls and be sure to pass the required parameters to avoid bugs in our code.
2. I also learned that JavaScript do not indicate an error when you call a function with more parameters than it should use. JavaScript automatically ignores excessive paramters and uses those that are required by the function. This is also something we need to be mindful of to prevent runtime errors in our code since JavaScript will not catch them for us.  

### Summary
This brings me to the end of my week-3 learning experience on JavaScript programming language. It was very exciting working with JavaScript functions as I had to write programs that can be reused. I also look forward to learning more about JavaScript functions and how to use them to write cleaner programs.

Feel free to visit my [GitHub repo](https://github.com/MarshallOkafor/learning-JavaScript/tree/main/week3) to see the complete codes and examples that I wrote while learning JavaScript this week. Stay tuned for week-4 progress report, I can not wait to share my experience!
