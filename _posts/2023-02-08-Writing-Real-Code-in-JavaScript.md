---
title: "Writing Real Code in JavaScript"
date: 2023-02-08
---
I am excited to share the recap of my week-two learning experience of learning JavaScript.

Recall that in week-one, I learned a lot about the basics of JavaScript programming language. Some of these basics include variables, data types, expressions and so on.
This week was mostly exciting for me because I started writing real JavaScript code, that is, a meaningful code that has a simple logic and is usable. I built a simple Battleship game using JavaScript. While implementing this little project, I was able to learn how JavaScript GET input from a user via the web browser, performs CONDITIONAL operations (the game logic) on data, and DISPLAY output to a user, again via the web browser. 

### The Battleship Game
The idea of the game is that the browser prompts the user to enter a guess (an integer) for a unlimited number of times until the ship is sunk. The game randomly generates integer numbers and compare each of them with the guesses entered by the user. At the end of the game, the score (a rating of the guesses) is displayed to the user informing them that they sank the battleship.

### The Game Web Page
To set up the game, I had to first create a HTML web page where the user with interact with the game. This reinforced my learning of how to plug in a JavaScript code to a web page. Below is the home page of the battleship game.

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
Doing this reminded me if how to link our JavaScript code file on our HTML page using the script tag as seen above. The JavaScript code that has the game implementation was stored in ```batteship.js```.

### The Location Variables
To implement the position of the ship, I assigned random integer numbers between 0 and 6 to three location variables. While doing we this, I learned about JavaScript ```Math``` object and its ```floor()``` and ```random()``` methods. One challenge that I faced is using the ```random()``` method. I learned that in JavaScript, the ```random()``` method only generates decimal numbers between 0 and 1 (like 0.113 to 0.999). So, to get a random value between say 0 and 6, you will have to multiply the decimal number returned by 7 such as ```Math.random() * 7```, then use ```Math.floor()``` method to retrieve the integer number. Okay let us get the code I implemented for the location variables.

```
// Location variables for the ship position
var loc1 = Math.floor(Math.random() * 7);
var loc2 = loc1 + 1;
var loc3 = loc2 + 1;
```
Adding 1 each to ```loc2``` and ```loc3``` variables was to ensure that the ship's location is contiguous. 

### Other Variables
I need to get the user guess, I need to know how many times the user hit the ship and I need to know how many guesses the user made before the was sunk. Also I need to set the initial state of the ship to be ```false``` since is has not been sunk yet. Below are the variables declared.

```
// Variables to hold the hits and guesses
var guess;
var hits = 0;
var guesses = 0;

// Initial state of the ship before the game start
var is_sunk = false;
```
### The Game Logic
Here, I was faced with implementing the main logic of the game. I need to ask the user for an input, compare the input to the values stored in the location variables, update the necessary variables, and display the user score once the ship is sunk.

To do this, I learned about JavaScript ```while``` loop and how it is written. It is similar to how it is written in Python other than you have to enclose the condition with parenthesis and the code block with curly brackets. Below is the first code statement I started with.

```
while (is_sunk == false) {

    // Game logic goes here
    
}
```
#### The Alert and Prompt Functions
Recall that in week 1, I talked about the ```console.log()``` built-in function which is used to display information to the console section of the web browser. To display information directly on the web browser to a user, I learned about the ```alert()``` built-in function. In addtion, I learned about another built-in function call ```prompt()``` which is used to get data from a user. Using this two functions together with some conditional statements, I was able to implement the logic of the game. Take a look.

```
while (is_sunk == false) {
    guess = prompt('Ready, aim, fire! (enter a number from 0-6: )');
}
```
As seen above the ```prompt()``` takes the string argument I passed to it and will display that to the user on the web browser along with a text box to receive the user input. After getting the user's guess, I updated the ```guess`` variable with the value the user entered.

Next, I had to check that the value the user is allowed to enter is between ```0 - 6```, otherwise we call on the ```alert()``` to inform the user of the allowed value range.

```
if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
```
Unlike Python, JavaScript uses ```||``` as its ```or``` operator. This was another challenge that I faced as initially I tried using ```or``` to compare and I got an error. The ```alert()``` takes in the string argument I passed to it and displays the information to the user.

#### The Rest of Game Logic
If the user enters a valid number, the game continues until the ship the is sunk. See below the rest of the code logic.

```
// Get user values, compare with the ships locations and update variables
while (is_sunk == false) {
    guess = prompt('Ready, aim, fire! (enter a number from 0-6: ');
    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
    } else {
        guesses = guesses + 1;  
        
        if (guess == loc1 || guess == loc2 || guess == loc3){
            alert('It is a HIT!')
            hits += 1;

            if (hits == 3){
                is_sunk = true;
                alert('You sank my battleship');
            }
        } else {
            alert('It is a MISS!')
        } 
    }
}
```
As we can see above, I updated the user's guesses and check if there is a ```HIT``` or ```MISS```. The user is **alerted** if they hit the ship or not, until they successfully sink the ship.

Finally, after the ship is sunk, the user rating is displayed on the browser again using the built-in ```alert()``` function. Anothing that I learned while trying to display the rating to the user is that JavaScript uses a concept called **coercion**. Coercion enables JavaScript to use ```+``` operator to concatenate the operands as long as one of the operands is a ```string```, no need to change the type of the other operand. That was amazing to learn. See below the code I used to display the user rating.

```
// Display User stats
var stats = 'You took ' + guesses + ' guesses to sink the battleship, ' + 
            'which means your shooting accuracy was ' + (3 / guesses) * 100 + '%';

alert(stats);
```
As you can see, I did not have to convert the data type of ```guesses```. JavaScript also automatically concatenated the of the computation ```(3 / guesses) * 100``` with the rest of the string. This was really cool to learn.

### Challenges
The challenges I had as I stated earlier were:
1. Figuring out how to generate random numbers within a certain range. One has to be careful when trying to generate random numbers in JavaScript since the ```Math.random()``` built-in method only returns decimal numbers between 0 and 1 (excluding 1).  
2. Figuring out JavaScript logical operator for ```or```. JavaScript uses the symbol ```||``` unlike the usual English word ```or``` that I am used to in Python.
3. Another challenge that I would say that I faced was keeping up the parenthesis and curly brackets

### Summary
This brings me to the end of my week 2 learning experience on JavaScript Programming language. I was very excited while learning JavaScript this week as I had to write a meaningful program. Trying to understand and figure out every parts of the project helped me learn new concepts as well as practice those that I learned before.

You can check out my GitHub repo to see the codes while learning and implementing this project. I can not wait for another awesome week of learning JavaScript and sharing my progress with you!!
