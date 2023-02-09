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
Doing this reminded me if how to link our JavaScript code file on our HTML page using the script tag as seen above. 

### The Location Variables
To implement the posotion of the ship, I assigned random integer numbers between 0 and 6 to three location variables. While doing we this, I learned about JavaScript Math object and its ```floor()``` and ```random()``` methods.
