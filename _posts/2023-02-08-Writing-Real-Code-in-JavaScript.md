---
title: "Writing Real Code in JavaScript"
date: 2023-02-08
---
I am excited to share the recap of my week-two learning experience of learning JavaScript.

Recall that in week-one, I learned a lot about the basics of JavaScript programming language. Some of these basics include variables, types, expressions and so on.
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
To implement the position of the ship, I assigned random integer numbers between 0 and 6 to three location variables. While doing we this, I learned about JavaScript ```Math``` object and its ```floor()``` and ```random()``` methods. One challenge that I faced is using the ```random()``` method. I learned that in JavaScript, the ```random()``` method only generates decimal numbers between 0 and 1 (like 0.113 to 0.999). So, to get a random value between say 0 and 6, you will have to multiply the decimal number returned by the ```Math.random() * 7``` and then use ```Math.floor()``` method to retrieve the integer number. Okay let us get the code I implemented for the location variables.

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
