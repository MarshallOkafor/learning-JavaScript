---
title: "Introduction to JavaScript"
date: 2023-01-30
---
This is a recap of my first week of learning JavaScript.

Most of what I learned were more on introduction to the JavaScript programming language. Many of the aspects touched were a bit familiar to me as they had similar concepts with other programming languages. The materials I am using are [Head First JavaScript Programming](https://www.amazon.com/Head-First-JavaScript-Programming-Brain-Friendly/dp/144934013X/ref=asc_df_144934013X/?tag=hyprod-20&linkCode=df0&hvadid=312280575053&hvpos=&hvnetw=g&hvrand=16348106577059334759&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9022887&hvtargid=pla-452402059136&psc=1&region_id=674469) and other online materials.

### How JavaScript Works
Websites before now used to be static pages displaying contents to users. There were no interactivity on web pages, just static information shown. HyperText Markup Language known as HTML is used to build the content and structure of web pages. Cascading Style Sheet also known as CSS is used to add styling to the pages. These styles include fonts, colors, layout, etc. However, both HTML and CSS are used to only create static web pages with static contents.

With JavaScript, we can add behavior into ourweb pages making them interactive and usable to our users. JavaScript allows us to react to events on our web pages like when a user clicks a button, grab input data directly on the page, manipulate, and validate input data on the fly. JavaScript enables powerful programmming behavior directly on the page resulting to a dynamic, interactive, and reactive web page.

### The Browser Console
One interesting thing that I learned is that JavaScript code can directly be run from the browser console, although, the console is expected to be used mainly for debugging purpose. Another interesting thing that I picked up from here is the shortcut to open Google Chrome browser console on MacOS which is the computer that I am using.
```
  Mac
  Command+Option+I  
```

JavaScript code can be written on any browser console, be sure to check how to open the console of your browser and try out a simple JavaScript code there.

Note that, when working on the browser console, you can just write the code statements and JavaScript will interprete them. However, most JavaScript programs are written using a code editor, thus you must use the console.log() built-in function to output anything to the browser console.

### My First JavaScript program
I wrote my first JavaScript program which is a one line code that prints 'Hello, World!'. Unlike other languages like python which uses the print() function to display information to the user, JavaScript uses console.log() to display information on the browser console. console.log() is a built-in function that can take any argument such as integer, string, boolean, and variables as input and displays the corresponding output. In my first JavaScript program, I passed the string 'Hello, World!' as input to the function console.log() and it displayed the string as an output.
```
  console.log('Hello, World!)  
  console.log('I', 'am', 'learning', 'JavaScript!')
```
The console.log() function can take multiple arguments just as seen above in the second code snippet. Although it is recommended to delimit every JavaScript statement with a semicolon: ;, you can skip it and the code will still run without errors. I learned that JavaScript uses what is called Automatic Semicolon Insertion (ASI), that is, the interpreter adds any missing semicolons behind the scenes for us. So we do not have to worry about semicolons. This is amazing! Feel free to try it out.

### Comments
Comments are statement that describe our programs. Comments are ignored by the interpreter and are not exceuted. In JavaScript, there are two types of syntax to write comments:

#### Single-line Comments
```
  // This is a single line comment  
  // This is another single line comment  
  // Did you notice that you use two forward slashes to make a single-line comment.
```
#### Multi-line Comment
```
  /*  
  This is a multi-line comment  
  Multiple line comments can span many lines  
  To start a multi-line comment, use a single forward slash first and then a star symbol as shown above  
  To end a multi-line comment, enter a star symbol first, followed by the forward slash as shown here  
  */
```
### JavaScript Code Syntax
Just like every other programming language, JavaScript has its own syntax. Syntax is basically the rule that dictates or guides the structure of statements in a particular language. This means that, when writing JavaScript code, we must stick to these rules otherwise, the interpreter will not understand our code and display errors. Remember my first JavaScript program: console.log('Hello, World!'), I will use that function again to describe what I learned about JavaScript syntactic structure.

#### Text
To output text using the console.log() function, the text must be enclosed in single or double quotation marks as shown in the examples below:
```
  console.log('This text is enclosed in single quotes')  
  console.log("This is enclosed in double quotes")  
  console.log(This is wrong and would trigger an error) // Hint: text must be within quotes
```
#### Numbers and Arithmetics
Using the console.log() built-in function, we can operate on numbers and display the results on the browser console. To display numbers, we do not need to enclose them within quotes. More so, we can carry out arithmetic operations on the numbers, JavaScript will operate on them and output the result. Some examples are shown below:  
```
  console.log(2023) // Displays 2023  
  console.log(1 + 2) // Addition  
  console.log(5 - 3) //Subtraction  
  console.log(3 * 1) // Multiplication  
  console.log(4 / 3) // Division  
  console.log(10 % 5) // Modulo  
  console.log(3 ** 1) // Exponentiation  
  console.log(6 + '3') // This is not a mathematical operatiion because of the quotes used.
```
### How to add JavaScript to a Web Page
After learning and testing some JavaScript code directly on the browser console, I learned how to add JavaScript code to a web page using a code editor. There are three different methods to add JavaScript code to your web page:

- Inline script
- Internal script
- External script

#### Inline script
The inline method is when you add the JavaScript code directly on a HTML tag. For example:  
```
  <button onclick="alert('I am Learning JS!');">Click</button>
```
The alert() built-in function used above is a JavaScript code that is added to the onclick attribute of the button tag.

#### Internal script

In this method, the JavaScript code is added within a script tag either in the **head** or the **body** section of the HTML file.  
```  
  <script>
    console.log('I am taking Software Engineering!')
  </script>
```
#### External script

In this method, the JavaScript code is saved in a different file with a **.js** extension within the project directory. Then in our HTML code either in the **head** or **body** section, we create a link or reference to our JavaScript file. The link is created with a script tag and the **path** to our JavaScript file is passed to the **src** attribute in the script tag. See example below:  
```  
  <script src="name_of_JavaScript_file.js"></script>
```

### JavaScript Data Types

Just like other programming languages, JavaScript has several data types. These types include:  

- String: This consist of one or more characters enclosed within quotation marks as seen earlier.  
- Numbers: This consist of integer and decimal numbers.
- Boolean: This holds true or false values.
- Null: This is assigned to a variable when we intentionally do not want the variable to have a value
- Undefined: This is for a variable that has not been assigned a value.  

Other data types in JavaScript include Objects, Bigint and Symbols. We can use the **typeof** operator to check the data type of a variable or value. Some examples are shown below:
```  
  console.log(typeof true) // boolean
  console.log(typeof 'CS 5300') // string
```

### JavaScript Variables

Variable declaration in JavaScript is done using **var**, **let** and **const** keywords. One new and interesting thing that I learned is the use of the **let** keyword to define variables. The difference is that variables defined using **let** within a code block can not be redefined or redeclared in that same code block. The **let** keyword protects a variable from being changed erroneously. On the other hand, the **var** keyword is either globally or locally scoped (within a function) and allows a variable to be changed with respect to its scope. The **const** keyword is very similar to the **let** keyword, the difference is that variables declared with the **const** keyword can not be changed or updated but the **let** keyword allows variables to be updated (not redeclared).

#### Valid Variable Names in JavaScript

In JavaScript valid variable names must follow the rules outlined below:  

- Can only contain digits, letters, underscore, and the dollar symbol
- Variable names are case sensitive
- Must only begin with a letter
- Reserved keywords can not be used to name variables
- Variable names should not have spaces in between the words

This marks the end of the recap of my first week learning experience in JavaScript programing language. It was an amazing experience and I got my feet wet from writing several JavaScript programs.

You can check out my [GitHub repo](https://github.com/MarshallOkafor/learning-JavaScript/tree/main/week1 "Week1 of learning JavaScript") to see the codes, examples and comments that I wrote while learning. I can not wait for another awesome week of learning JavaScript and sharing my progress with you!!
