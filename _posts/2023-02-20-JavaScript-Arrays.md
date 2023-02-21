---
title: "JavaScript Arrays"
date: 2023-02-20
---

This is a recap of my week 4 learning experience on JavaScript programming language.

This week I learned about how to work with arrays in JavaScript. A JavaScript array is a type of variable that can hold more than one type of value or data. With an array, we can store a collection of data in a single variable. JavaScript array is similar to the array in other programming languages. 

I worked on a mini project which has to do with performing several operations in an array. This helped me to further deepen my understanding of JavaScript arrays.

### How To Create Array In JavaScript
First let us discuss some of the fundamentals. Below is the syntax to create an array in JavaScript:

```
let arrayName = [item1, item2, item3, ...];
```
For example, you can define an array to hold the list of cars like this:

```
let myCars = ["Benz", "Honda", "Toyota", "Ford"];
```
From the above, ```myCars``` is the name of the array variable and it used to hold the group of string values ```Benz```, ```Honda```, ```Toyota```, and 
```Ford```. Note that a JavaScript array variable can hold values of different data types such as number, string, boolean etc. 

### Accessing Elements In JavaScript Array
To access an element from an array in JavaScript, you use the index of the element. Note that JavaScript array indexing is zero-based, thus the index of the first element is ```0``` just like in some other programming languages. Below is an example on how we can access an element in the ```myCar``` array variable we initially defined above.

```
// Accessing an element in the array
let car4 = myCar[3];

// Print Ford to the console
console.log(car4);
```

### Changing An Element In JavaScript Array
To change an element in JavaScript array, you simple assign the new value to the index of the element you want to change in the array. For exampl, to change the forth element of ```myCar``` variable from ```Ford``` to ```Audi```, we do the following:

```
// Change the fourth value in the array
myCar[3] = "Audi";

console.log(myCar); // This prints all the elements of the array with new item updated
```

There are so many operations that can be done in array that are useful to solve different tasks. In the rest of this blog, I will be goin through a mini project thas to do with generating different reports from an array of number data. Working on this project helped me practice some of the concepts I learned about JavaScript arrays.

### Mini Project
Given the following array containing different tests ```scores``` and ```costs``` for a bubble solution from a hyothetical chemical company:

```
// Scores of the bubble solutions
var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];
              
// Costs of the bubble solutions
var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];
 ```
 
The goal is to generate the reports listed below:
1. Print each score of the bubble solution to the console.
2. Print the total number of values in the ```scores``` array.
3. Print the highest score in the bubble solution.
4. Print the index of the solution(s) with the highest score.
5. Using the ```scores``` and ```cost ``` arrays, get the index of the solution(s) that is most cost effective.

#### Print Each Score and the Total number of the Bubble Solutions to the Console
To achieve this, I learned about JavaScript ```for``` loop and how to use it to iterate through an array. I combined my knowledge of JavaScript funnctions which I learned last with a ```for``` loop to sove this task. See code below:

```
// Print the scores of the bubble solution and
// also print the total number of the solution
function printScores(data) {
    for (var i = 0; i < data.length; i++) {
        console.log('Bubble solution #' + i + ' score: ' + data[i]);
    }

    console.log('Bubbles tests: ' + data.length);
}
```
While implmenting this, I learned about the ```length``` property of an array which is used to retrieve the size of the array. Also the ```for``` loop syntax seem to be different from that of Python, and it was interesting to learn how to write this in JavaScript.

#### Print the Highest Score in the Bubble Solution
To solve this task, I defined a function and used a ```for``` loop to scan through the array. During each iteration, I used a variable ```highest``` to store the highest solution score. See code below:

```
// Get the bubble solution with the highest score
function getHighestScore(data) {
    var highest = 0;

    for (var i = 0; i < data.length; i++) {
        if (data[i] > highest) {
            highest = data[i];
        }
    }

    console.log('Highest bubble score: ' + highest);

    return highest;
}
```

#### Print the index of the Solution(s) with the Highest Score
In solving this task, I learned about the array method ```push``` which is used to add a new element to the end of an array. Since, I already have the highest score from the previous function ```getHighestScore```, I used a ```for``` loop again to iterate trhough the array while checking for the scores that are equal to the ```highestScore```. I declared a local variable: an empty variable ```bestSolutions``` and used it to store the indices of the solutions that have the highest score. See code below:

```
// Get solutions with the highest score
function solutionWithHighest(data, highestScore) {
    var bestSolutions = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i] == highestScore) {
            bestSolutions.push('#' + i);
        }
    }

    console.log('Solution with highest score: ' + bestSolutions);
}
```

#### Print the most cost effective Solution
In this task, we are expected to combine the ```scores``` and ```costs``` array. Both arrays of are of the same size, thus each entry in the ```costs``` array is assumed to be the cost it takes to make the corresponding solution in ```scores``` array. The task is to get the solution with the highest score and lowest cost. See code below written to solve this task:

```
function getMostCostEffective(scores, costs, highest) {
    var cost = 100; // Assigning an arbitrary value to cost here
    var index;

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highest) {
            if (cost > costs[i]) {
                index = i; // Getting the index of the most cost effective during each iteration
                cost = costs[i]; // Updating the cost variable to the lowest found
            }
        }
    }

    console.log('Bubble solution #' + index + ' is the most cost effect!');
}
```

Below are the code for the calls to the functions implemented above.

```
// Function calls
printScores(scores);
highest = getHighestScore(scores);
solutionWithHighest(scores, highest);
getMostCostEffective(scores, costs, highest);
```
### Challenges
1. One challenge that I faced was writing of the ```for``` loop in JavaScript. I thought that it was going to be a similar syntax to that of python wit a slight difference. Interestingly, it is very different from that of Python. 














