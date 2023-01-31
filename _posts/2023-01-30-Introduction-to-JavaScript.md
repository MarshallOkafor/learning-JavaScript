---
title: "Introduction to JavaScript"
date: 2023-01-30
---
This is a recap of my first week of learning JavaScript.

Most of what I learned was more on introduction to the JavaScript programming language. Many of the aspects touched were familiar to me as they had similar concepts to other programming languages. Some of these aspects include data types, variable declarations, comments, etc. Although I was able to refresh myself again with some of these programming concepts, I learned many new and interesting things about JavaScript, how it works, it syntaxes, code structure and others. Below are the things that I learned in the first week of my learning JavaScript 

### How JavaScript Works
If you could recall, websites before now used to be static pages displaying contents to users. There is no interactivity on web pages, just static information shown. HyperText Markup Language known as HTML is used to build the content and structure of web pages. You use tags to specify the type of content such as paragraphs and headings. Cascading Style Sheet also known as CSS is used to add styling to the pages. These styles include fonts, colors, layout, etc. However, both HTML and CSS are used to only create static web pages with still contents.

With JavaScript, we can ingest interactivity and beahavior into our making pages making it more attractive and usable for our users. JavaScript allows us to react to events on our web pages like when a user clicks a button, grab input data directly on the page and manipulate them, validate input data on the fly. JavaScript enables powerful programmming behavior directly on the page resulting to a dynamic, interactive, and reactive web page.

### The Browser Console
When we write JavaScript on a text editor and attach it to our HTML program, the code goes to the web browser console from where it is converted to machine code and interpreted. One interesting thing that I learned is that JavaScript code can directly be run from the browser console. Although, the console is expected to be used mainly for debugging purpose, it was fascinating to learn that we could test JavaScript code using the browser console. Another interesting thing that I picked up from here is the shortcut to open Google Chrome browser console on MacOS which is the computer that I am using:

###### Mac
Command+Option+I

JavaScript code can be written on any browser console, be sure to check how to open the console of your browser and try out a simple JavaScript code there.

Note that, while working on the browser console, you do not need the console.log() function to run JavaScript code there. You can just write the statements and JavaScript will interprete them. However, most JavaScript program are written on a code editor, thus must use the console.log() function to output anything to the browser console.

### My First JavaScript program
I wrote my first JavaScript program which is a one line code that prints 'Hello, World!'. Unlike other languages like python which uses the print() function to display information to the user, JavaScript uses console.log() to display information on the browser console. consol.log() is a built-in function that can take any argument such as integer, string, boolean, and variables as input and displays the corresponding output. In my first JavaScript program, I passed the string 'Hello, World! as input to the function console.log() and it displayed the string as an output.

console.log('Hello, World!)  
console.log('I', 'am', 'learning', 'JavaScript!')

The console.log() function can take multiple arguments just as seen above in the second code snippet. Another discovery that blowed my mind is that although it recommended to delimit every JavaScript statement with a semicolon: ;, you can skip it and the code will still run without errors. I learned that JavaScript uses what is called Automatic Semicolon Insertion, that is, the interpreter adds any missing semicolons behind the scenes for us. So we do not have to worry about semicolons. This is amazing! Feel free to try it out.

### Comments
Comments are statement that describe our program. Comments are ignored by the interpreter and are not exceuted. In JavaScript, there are two types of syntax to write comments:

##### Single-line Comments
// This is a single line comment  
// This is another single line comment  
// Did you notice that you use two forward slashes to make a single comment.

##### Multi-line Comment
/* 
This is a multi-line comment  
Multiple line comments can span many lines  
To start a multi-line comment, use a single forward slash first and then a star character as shown above  
To end a multi-line comment, enter a star character first, followed by the forward slash as shown here  
*/

### JavaScript Code Syntax
Just like every other pramming language, JavaScript has its own syntax. Syntax is basically the rules that dictate or guides the structure of statements in a particular language. This means that, when writing JavaScript code, we must stick to these rules otherwise, the interpreter will not understand our code and display errors. Remember my first JavaScript program: console.log('Hello, World!'), I will use that function again to describe what I learned about JavaScript syntactic structure.

##### Text
To output text using the console.log() function, the text must be enclosed in a single or double quotation mark as shown in the example below:

console.log('This text is enclosed in single quotes')  
console.log("This is enclosed in double quotes")  
console.log(This is wrong and would trigger an error) // Hint: text must be within quotes

##### Numbers and Arithmetics
Using the console.log() function, we can operate on numbers and display the results on the browser console. To display numbers, we do not need to enclose them within quotes. More so, we can carry out arithmetic operations on the numbers, JavaScript will operate on them and output the result. Some examples are shown below:  

console.log(2023) // Displays 2023  
console.log(1 + 2) // Addition  
console.log(5 - 3) //Subtraction  
console.log(3 * 1) // Multiplication  
console.log(4 / 3) // Division  
console.log(10 % 5) // Modulo  
console.log(3 ** 1) // Exponentiation  
console.log(6 + '3') // This is not a mathematical operatiion because of the quotes used.

### How to add JavaScript to a Web Page
After learning and testing some JavaScript code directly on the browser console, I learned how to add JavaScript code to a web page using a code editor. There are three different methods to add JavaScript code to your web page:

- Inline script
- Internal script
- External script

##### Inline script

