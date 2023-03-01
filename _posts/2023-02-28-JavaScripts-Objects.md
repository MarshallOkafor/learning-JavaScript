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

### Creating an empty Object
Below is a syntax of creating an empty object.  
```
var person = {};
```
### Creating an Object with Values
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
};

// Create a rectangle object
var rectangle = {
    length: 20,
    width: 40,
};

// Create a person object
var person = {
    firstName: 'Marshall',
    lastName: 'Okafor',
    nationality: 'Nigerian',
    age: 50
};
```
As we can see from the examples above, the properties of objects can hold any value such as number, string, boolean etc.
### Accessing the property of JavaScript Object
Accessing the properties of an object in JavaScript and retrieving the values is similar to many other programming languages. To do this, we start with the object name, followed my a period ```.``` (otherwise known as a dot), then the property name. This approach is called the dot notation. For example to access some of the properties of the objects we created above:
```
// Access the mileage property of the Fiat car object
console.log(fiat.mileage);

//Access the first name property of the person object
console.log(person.firstName);

// Access the width property of the rectangle property
console.log(rectangle.width);
```
### Changing an Object's property
To change the value of an object's property, you simple assign the new value to the property. In addition, if you want to extend the properties of an object, i.e. add a new property, you can do that by specifying the new property and give it a value. See examples below:
```
// Change the value of the car mileage
fiat.mileage = 10000;

// Change the value of the person age
person.age = 55;

// Add a new property to the Fiat car object
fiat.needWashing = true;

// Add s new property to the person object
person.address = 'St Louis';
```
### Adding Behavior to JavaScript Objects
Objects in JavaScript can have methods. The properties of an object define the state of the object, while the object's methods define the behavior of the object. See below an example of a method ```drive()``` added to the the ```fiat``` car object:
```
// Add a drive method to the Fiat car object
var fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Blue',
    passengers: 2, 
    convertible: false,
    mileage: 88000,
    
    drive: function() { // This is a method
        alert('Zoom! Zoom!!');
    }
};

// Call to the drive method
fiat.drive();
```
### Challenges  
1. **Objects are reference variables**. This one of the challenges that I encountered while working with objects. I noticed that a change to an object property locally within a function or anywhere in my code, changes the property of the object itself. In reading further and trying to undertand why this happens, I learned that objects are reference variables. Thus, the object's variable and property names are pointers to the object, and any change to them will ultimately change the object itself.
