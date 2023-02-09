---
title: "Writing Real Code in JavaScript"
date: 2023-02-08
---
I am excited to share the recap of my week-two learning experience of learning JavaScript.

Recall that in week-one, I learned a lot about the basics of JavaScript programming language. Some of these basics include variables, data types, expressions and so on.

This week was mostly exciting for me because I started writing real JavaScript code, that is, a meaningful code that has a simple logic and is usable. I built a simple Battleship game using JavaScript. While implementing this little project, I was able to learn how JavaScript GET input from a user via the web browser, performs CONDITIONAL operations (the game logic) on data, and DISPLAY output to a user on the web browser. 

### The Battleship Game
The idea of the game is that the browser prompts the user to enter a guess (an integer) for unlimited number of times until the ship is sunk. The game randomly generates integer numbers and compare each of them with the guesses entered by the user. At the end of the game, the score (a rating of the number of guesses) is displayed to the user informing them that they sank the battleship.

### The Game Web Page
To set up the game, I had to first create a HTML web page where the user will interact with the game. This reinforced my learning of how to plug in a JavaScript code to a web page. Below is the home page of the battleship game.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Battle Ship Game</title>
    </head>
    <body>
        <h1>Play Battleship!</h1>
        <script src="battleship.js"></script>
    </body>
</html>
```
Doing this reminded me of how to link my JavaScript code file on a HTML page using the ```<script>``` tag and assign the JavaScript file to the ```src``` attribute as seen above. The JavaScript code that has the game implementation was stored in ```battleship.js``` file.

### The Location Variables
To implement the position of the ship, I assigned random integer numbers between 0 and 6 to three location variables. While doing this, I learned about JavaScript ```Math``` object and its ```floor()``` and ```random()``` methods. One challenge that I faced was using the ```random()``` method. I learned that in JavaScript, the ```random()``` method only generates decimal numbers between 0 and 1 (for example 0.113 to 0.999). So, to get a random value between say 0 and 6, you will have to multiply the decimal number returned by 7 like this: ```Math.random() * 7```, then use ```Math.floor()``` method to retrieve the integer number. Okay let us get to the code I implemented for the location variables for clarity.

```
// Location variables for the ship position
var loc1 = Math.floor(Math.random() * 7);
var loc2 = loc1 + 1;
var loc3 = loc2 + 1;
```
Adding 1 each to ```loc2``` and ```loc3``` variables was to ensure that the ship's location is contiguous. 

### Other Variables
I needed to get the user guess, I needed to know how many times the user hits the ship and I needed to know how many guesses the user made before the ship was sunk. Also I needed to set the initial state of the ship to be ```false``` since it has not been sunk yet when the game starts. Below are the variables declared.

```
// Variables to hold the hits and guesses
var guess; // No value assigned yet
var hits = 0;
var guesses = 0;

// Initial state of the ship before the game starts
var is_sunk = false; // Boolean variable
```
### The Game Logic
Here, I was faced with implementing the main logic of the game. I needed to ask the user for an input, compare the input to the values stored in the location variables, update the necessary variables, and display the user score once the ship is sunk.

To do this, I learned about JavaScript ```while``` loop and how it is written. It is similar to how it is written in Python other than you have to enclose the condition within parenthesis and the code block within curly brackets. Below is the first code statement I started with.

```
while (is_sunk == false) {

    // Game logic goes here
    
}
```
The ```while``` loop and the comparison ```==``` operator continuously check if the ship is sunk or not.  

#### The Alert and Prompt Functions
Recall that in week-one, I talked about the ```console.log()``` built-in function which is used to display information to the console section of the web browser. To display information directly on the web browser to a user, I learned about the ```alert()``` built-in function. In addtion, I learned about another built-in function called ```prompt()``` which is used to get data from a user. Using these two functions together with some conditional statements, I was able to implement the logic of the game. Let's take a look.

```
while (is_sunk == false) {
    guess = prompt('Ready, aim, fire! (enter a number from 0-6: )');
}
```
As seen above, the ```prompt()``` function takes the string argument I passed to it and will display that to the user on the web browser along with a text box to receive the user input. After getting the user's guess, I updated the ```guess``` variable with the value the user entered.

Next, I had to check that the value the user is allowed to enter is between ```0 - 6```, otherwise we call on the ```alert()``` function to inform the user of the allowed value range.

```
if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
        }
```
Unlike Python, JavaScript uses ```||``` as its ```or``` operator. This was another challenge that I faced as initially I tried using ```or``` to compare and I got an error. The ```alert()``` function takes in the string argument I passed to it and displays the information to the user.

#### The Rest of the Game Logic
If the user enters a valid number, the game continues until the ship the is sunk. See below the rest of the code.

```
// Get user values, compare with the ship's locations and update variables
while (is_sunk == false) {
    guess = prompt('Ready, aim, fire! (enter a number from 0-6: ');
    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
    } else {
        guesses = guesses + 1;  
        
        if (guess == loc1 || guess == loc2 || guess == loc3){
            alert('It is a HIT!') // The user is informed of a HIT
            hits += 1;

            if (hits == 3){
                is_sunk = true;
                alert('You sank my battleship'); // The user is informed that the ship is sunk
            }
        } else {
            alert('It is a MISS!') // The user is informed of a MISS
        } 
    }
}
```
As we can see above, I updated the user's guesses and check if there is a ```HIT``` or ```MISS```. The user is **alerted** if they hit the ship or not, until they successfully sink the ship.

Finally, after the ship is sunk, the user rating is displayed on the browser using the built-in ```alert()``` function. Another thing that I learned while trying to display the rating to the user is that JavaScript uses a concept called **coercion**. Coercion enables JavaScript to use the ```+``` operator to concatenate operands as long as one of the operands is a ```string```, no need to change the type of the other operand. That was amazing to learn. See below the code I used to display the user rating.

```
// Display User stats
var stats = 'You took ' + guesses + ' guesses to sink the battleship, ' + 
            'which means your shooting accuracy was ' + (3 / guesses) * 100 + '%';

alert(stats);
```
As you can see, I did not have to convert the data type of ```guesses```. JavaScript also automatically concatenated the of value of the computation ```(3 / guesses) * 100``` with the rest of the string. This was really cool to learn.

### Challenges
The challenges I had as I stated earlier were:
1. Figuring out how to generate random numbers within a certain range. One has to be careful when trying to generate random numbers in JavaScript since the ```Math.random()``` built-in method only returns decimal numbers between 0 and 1 (excluding 1).  
2. Figuring out JavaScript's logical operator for ```or```. JavaScript uses the symbol ```||``` unlike the usual English word ```or``` that I am used to in Python. I am curious to learn about other symbols used in JavaScript.
3. Another challenge that I would say that I faced was keeping up with the parenthesis and curly brackets when writing conditional statements and code blocks.

### Summary
This brings me to the end of my week-2 learning experience on JavaScript Programming language. I was very excited while learning JavaScript this week as I had to write a meaningful program. Trying to understand and figure out every parts of the project helped me to learn new concepts as well as practice those that I learned before.

You can check out my [GitHub repo](https://github.com/MarshallOkafor/learning-JavaScript/tree/main/week2) to see the full codes I wrote while learning and implementing this project. I can not wait for another awesome week of learning JavaScript and sharing my progress with you. Stay tuned!!
