---
title: "JavaScript Functions"
date: 2023-02-15
---

This is a recap of my week-3 learning experience in JavaScript programming language and I am excited to share all I learned.  

This week I delved into how to write and use functions in JavaScript. If we could recall, a function is a code block that performs a specific task when 
invoked or called. The power of functions in programming is that functions can be reused multiple number of times without rewriting them. All you have to 
do is call the function to carry out a task for you.  

Using the concept of functions when writing our programs have so many benefits. Aside resusability, functions also help our programs to look clean and 
clear to read, and less tedious to understand. More so, functions helps us to easily manage and maintain our programs.  

### Function Declaration And Function Call In JavaScript
There are many built-in function in JavaScript such as ```random()``` and ```log()```. These built-in functions can freely be used and do not have to be 
declared again.  

However, we can declare our own custom functions to perform task for us. I learned that to declare a function in JavaScript, you use the keyword 
**function** followed by the **name** of the function, followed by parenthesis **( )** and finally the code block within curly brackets **{ }**. While to
call a function, we simply type out the name of the function followed by parenthesis **( )**. See below a syntax of function declaration and function call 
in JavaScript.  

```
function myFunc() { // This function has no parameter
  
  // Some code statements here
  
}

myFunc(); // This is a function call
```

As seen above, the function ```myFunc()``` is declared without a paramter just like in other programming languages that allows functions to be declared 
without a parameter. Conversely, we can also declare a function with parameter and pass the necessary argument to the function when called. Lets see some 
examples.

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
