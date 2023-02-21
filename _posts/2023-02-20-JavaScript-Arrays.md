---
title: "JavaScript Arrays"
date: 2023-02-20
---

This is a recap of my week 4 learning experience on JavaScript programming language.

This week I learned about how to work with arrays in JavaScript. A JavaScript array is a type of variable that can hold more than one type of value or data.
With an array, we can store a collection of data in a single variable. JavaScript array is similar to the array in other programming languages. 

I used a worked on a mini project which has to do with performing several operations in an array. This helped me to further deepen my understanding of JavaScript
arrays.

#### How To Create Array In JavaScript
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

#### Accessing Elements In JavaScript Array
To access an element from an array in JavaScript, you use the index of the element. Note that JavaScript array indexing is zero-based, thus the index of the first element
is ```0``` just like in some other programming languages. Below is an example on how we can access an element in the ```myCar``` array variable we initially defined above.

```
// Accessing an element in the array
let car4 = myCar[3];

// Print Ford to the console
console.log(car4);
```

#### Changing An Element In JavaScript Array
To change an element in JavaScript array, you simple assign the new value to the index of the element you want to change in the array. For exampl, to change the forth element of ```myCar``` variable from ```Ford``` to ```Audi```, we do the following:

```
// Change the fourth value in the array
myCar[3] = "Audi";

console.log(myCar); // This prints all the elements of the array with new item updated
```
