---
title: "JavaScript Arrays"
date: 2023-02-20
---

This is a recap of my week-4 learning experience on JavaScript programming language.

This week I learned about how to work with arrays in JavaScript. An array is a type of variable that can hold more than one type of value or data. With an array, we can store a collection of data in a single variable. JavaScript array is similar to the array in other programming languages. 

I worked on a mini project which has to do with performing several operations in an array. This helped me to further deepen my understanding of JavaScript arrays. I will get to the project in a second.

### How To Create Array In JavaScript
First, let us discuss some of the fundamentals. Below is the syntax to create an array in JavaScript:

```
let arrayName = [item1, item2, item3, ...];
```
For example, you can define an array to hold the list of cars like this:

<script src="https://gist.github.com/MarshallOkafor/e4c076017dc6dd6fd8a8490355534f78.js"></script>

From the above, ```myCars``` is the name of the array variable and it used to hold a group of string values ```Benz```, ```Honda```, ```Toyota```, and 
```Ford```. Note that a JavaScript array variable can hold values of different data types such as number, string, boolean etc. 

### Accessing Elements In JavaScript Array
To access an element from an array in JavaScript, you use the index of the element. JavaScript array indexing is zero-based, thus the index of the first element is ```0``` just like in some other programming languages. Below is an example on how we can access an element in the ```myCars``` array variable we initially defined above.

<script src="https://gist.github.com/MarshallOkafor/0223dfb5a0e10b0fd608e597fbccdf61.js"></script>

### Changing An Element In JavaScript Array
To change an element in JavaScript array, you simply assign the new value to the index of the element you want to change in the array. For example, to change the fourth element of ```myCars``` variable from ```Ford``` to ```Audi```, we do the following:

<script src="https://gist.github.com/MarshallOkafor/86986f2d55f2cb615fb574cf5a7c6940.js"></script>

There are so many operations that can be done in array that are useful to solve different tasks. In the rest of this blog, I will be going through a mini project that has to do with generating different reports from an array. Working on this project helped me practice some of the concepts I learned about JavaScript arrays.

### Mini Project
Given the following array containing different tests ```scores``` and ```costs``` for a bubble solution from a hyothetical chemical company:

<script src="https://gist.github.com/MarshallOkafor/03e117969f0cb99ae28147c6feb0d674.js"></script>
 
The goal is to generate the reports listed below:
1. Print each score of the bubble solution to the console.
2. Print the total number of values in the ```scores``` array.
3. Print the highest score in the bubble solution.
4. Print the index of the solution(s) with the highest score.
5. Using the ```scores``` and ```costs``` arrays, get the index of the solution(s) that is most cost effective.

#### Print Each Score And The Total Number Of The Bubble Solutions To The Console
To achieve this, I learned about JavaScript ```for``` loop and how to use it to iterate through an array. I combined my knowledge of JavaScript functions which I learned in the previous week with a ```for``` loop to solve this task. See code below:

<script src="https://gist.github.com/MarshallOkafor/cc3505061fa9c084d9f7f96984cf9682.js"></script>

While implementing this, I learned about the ```length``` property of an array which is used to retrieve the size of the array. Also the ```for``` loop syntax seem to be different from that of Python, and it was interesting to learn how to write this in JavaScript.

#### Print The Highest Score In The Bubble Solution
To solve this task, I defined a function and used a ```for``` loop to scan through the array. During each iteration, I used a variable ```highest``` to store the highest solution score. See code below:

<script src="https://gist.github.com/MarshallOkafor/d97fce0e76b234cd1ebbc94e276aa6fd.js"></script>

#### Print The Index Of The Solution(s) With The Highest Score
In solving this task, I learned about the array method ```push``` which is used to add a new element to the end of an array. Since, I already have the highest score from the previous function ```getHighestScore```, I used a ```for``` loop again to iterate though the array while checking for the scores that are equal to the ```highestScore```. I declared a local variable: an empty array variable called ```bestSolutions``` and used it to store the indices of the solutions that have the highest score. See code below:

<script src="https://gist.github.com/MarshallOkafor/c8da92d9e93796e5bcc3967f46452d6c.js"></script>

#### Print The Most Cost Effective Solution
In this task, we are expected to combine the ```scores``` and ```costs``` arrays. Both arrays are of the same size, thus each entry in the ```costs``` array is assumed to be the cost it takes to make the corresponding solution in the ```scores``` array. The task is to get the solution with the **_highest_** score but the **_lowest_** cost. See code below written to solve this task:

<script src="https://gist.github.com/MarshallOkafor/42e5c9989a4313d28921340c1a2a88d1.js"></script>

Below are the code for the calls to the functions implemented above.

<script src="https://gist.github.com/MarshallOkafor/0c3bc7853745703cfa38cdb64cabf149.js"></script>

### Challenges
1. One challenge that I faced was writing the ```for``` loop in JavaScript. I thought that it was going to be a similar syntax to that of Python wit a slight difference. Interestingly, it is very different from that of Python. Writing a ```for``` loop in JavaScript has three parts, namely, **initialization**, **conditional-test**, and **increment**.

### Summary
This brings me to the end of my week-4 learning experience on JavaScript programming language. It was very exciting working with JavaScript array. The mini project made me write several codes to carry out different operations on a JavaScript array while learning more about the language. I look forward to leeaning more and working with JavaScript arrays, properties and methods.

Feel free to visit my [GitHub repo](https://github.com/MarshallOkafor/learning-JavaScript/tree/main/week4) to see the complete codes and that I wrote while learning JavaScript this week. Stay tuned for week-5 progress report, I can not wait to share my experience!




