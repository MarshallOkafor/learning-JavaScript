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

<script src="https://gist.github.com/MarshallOkafor/d163b1590c638735b9393dce8482e359.js"></script>
```
var person = {};
```
### Creating an Object with Values
Below are example of objects with values.  

<script src="https://gist.github.com/MarshallOkafor/008b32753462ee4f97c5013cfbace3c2.js"></script>
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

<script src="https://gist.github.com/MarshallOkafor/5b9e5c027673237309a7888c110807bd.js"></script>
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

<script src="https://gist.github.com/MarshallOkafor/d790a02f52bb81b185f007520c994d34.js"></script>
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

<script src="https://gist.github.com/MarshallOkafor/3ab4c0c8284b213f729e2cc48554479d.js"></script>
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
#### Extending the behavior of our Car Object
Objects are very powerful because they can neatly hide and package the compexities of our data, thus allowing us to focus on the design of our code. In learrning more about JavaScript, I extended the behavior of the ```fiat``` car object. See the code below where I added more properties and methods to the object.

<script src="https://gist.github.com/MarshallOkafor/28a9b826ab3fca361c6423934d5d52dc.js"></script>
```
// Create a Fiat Car object
var fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Blue',
    passengers: 2, 
    convertible: false,
    mileage: 88000,
    started: false, // Added a new property
    fuel: 0, // Added a new property

    start: function() { // This is a new method
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert('The car is on empty, fill up before starting!')
        }
    },

    stop: function() { // This is a new method
        this.started = false;
    },

    drive: function() { // Modified the drive method
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + ' ' + this.model + ' goes zoom zoom!!');
                this.fuel = this.fuel - 1;
            } else {
                alert('Uh oh, you are out of fuel.');
                this.stop();
            }
        } else {
            alert('You need to start the engine first.');
        }
    },

    addFuel: function(amount) { // This is a new method
        this.fuel = this.fuel + amount;
    }
};

// Call fiat drive method
fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();

```

### Challenges  
1. **Objects are reference variables**. This one of the challenges that I encountered while working with objects. I noticed that a change to an object property locally within a function or anywhere in my code, changes the property of the object itself. In reading further and trying to undertand why this happens, I learned that objects are reference variables. Thus, the object's variable and property names are pointers to the object, and any change to them will ultimately change the object itself.
2. The **this** keyword. I had errors while trying to either call the object's method or use the property of the object when trying I was extending the state and behavior of the ```fiat``` car object.

### Summary
This brings me to the end of my week-5 learning experience on JavaScript programming language. It was very exciting working with JavaScript objects.  I learned alot and look forward to working more with JavaScript objects, properties and methods.

Feel free to visit my [GitHub repo](https://github.com/MarshallOkafor/learning-JavaScript/tree/main/week5) to see the complete codes that I wrote while learning JavaScript this week. Stay tuned for week-5 progress report, I can not wait to share my experience!
