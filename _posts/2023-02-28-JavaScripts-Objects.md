---
title: "A Trip To JavaScript Objectville"
data: 2023-02-28
---

This is a recap of my week-5 learning experience on JavaScript programming language.

In my previous blog posts, I have been learning more on JavaScript primitves and arrays. Most of the codes I wrote were procedural and made use of simple 
statements, conditionals, functions and iterations. This week I took a trip to JavaScript's Objectville and explored the world of JavaScript objects. I 
learned and created my own objects, and understood how powerful the concept of object-oriented programming is. I also learned that JavaScript objects are 
the key to understanding the browser's document object model (DOM) and also plays a significant role in managing complex JavaScript codes.

### JavaScript Object
In JavaScript, an object is a **key-value** pair. A JavaScript object has a property or properties, and properties have values. The order of the keys of an
object is not reserved and could be printed in any order. To create an object literal we use two curly brackets.

#### Creating an empty Object
Below is a syntax of creating an empty object.  
```
var person = {}
```
#### Creating an Object with Values
Below are example of objects with values.  
```
// These are few examples of objects with values
// Create a Fiat Car object
var fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Blue',
    passengers: 2, 
    convertible: false,
    mileage: 88000
}

// Create a rectangle object
var rectangle = {
    length: 20,
    width: 40,
}

// Create a person object
var person = {
    firstName: 'Marshall',
    lastName: 'Okafor',
    nationality: 'Nigerian',
    age: 50
}
```
