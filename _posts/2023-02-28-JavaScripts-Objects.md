---
title: "A Trip To JavaScript Objectville"
data: 2023-02-28
---

This is a recap of my week-5 learning experience on JavaScript programming language.

In my previous blog posts, I have been learning more on JavaScript primitves and arrays. Most of the codes I wrote were procedural and made use of simple 
statements, conditionals, functions and iterations. This week I took a trip to JavaScript's Objectville and explored the world of JavaScript objects. I 
learned and created my own objects, and understood how powerful the concept of object-oriented programming is. I also learned that JavaScript objects are 
the key to understanding the browser's document object model (DOM) and plays a significant role in managing complex JavaScript codes.

### JavaScript Object
In JavaScript, an object is a **key-value** pair. A JavaScript object has a property or properties, and properties have values. The order of the keys of an object is not reserved and could be printed in any order. To create an object literal we use two curly brackets.

### Creating an empty Object
Below is a syntax of creating an empty object in JavaScript.  

<script src="https://gist.github.com/MarshallOkafor/d163b1590c638735b9393dce8482e359.js"></script>

### Creating an Object with Values
Below are example of JavaScript objects with values.  

<script src="https://gist.github.com/MarshallOkafor/008b32753462ee4f97c5013cfbace3c2.js"></script>

As we can see from the examples above, the properties of objects can hold any value such as number, string, boolean etc.

### Accessing the property of JavaScript Object
Accessing the properties of an object in JavaScript is similar to many other programming languages. To do this, we start with the object's name, followed my a period ```.``` (otherwise known as a dot), then the property name. This approach is called the dot notation. For example to access some of the properties of the objects we created above, we do the following:

<script src="https://gist.github.com/MarshallOkafor/5b9e5c027673237309a7888c110807bd.js"></script>

### Changing an Object's property
To change the value of an object's property, you simply assign the new value to the property. In addition, if you want to extend the properties of an object, i.e. add a new property, you can do that by specifying the name of the new property and give it a value. See examples below:

<script src="https://gist.github.com/MarshallOkafor/d790a02f52bb81b185f007520c994d34.js"></script>

### Adding Behavior to JavaScript Objects
Objects in JavaScript can have methods. The properties of an object define the state of the object, and the object's methods define the behavior of the object. See below an example of a method ```drive()``` added to the the ```fiat``` car object:

<script src="https://gist.github.com/MarshallOkafor/3ab4c0c8284b213f729e2cc48554479d.js"></script>

#### Extending the behavior of our Car Object
Objects are very powerful because they can neatly hide and package the compexities of our data, thus allowing us to focus on the design of our code. In learning more about JavaScript, I extended the behavior of the ```fiat``` car object. See the code below where I added more properties and methods to the object.

<script src="https://gist.github.com/MarshallOkafor/28a9b826ab3fca361c6423934d5d52dc.js"></script>

### Challenges  
1. **Objects are reference variables**: This is one of the challenges that I encountered while working with objects. I noticed that a change to an object property locally within a function or anywhere in my code, changes the property of the object itself. In reading further and trying to undertand why this happens, I learned that objects are reference variables. Thus, the object's variable and property names are pointers to the object, and any change to them will ultimately change the object itself.
2. The **this** keyword: I had errors while trying to either call the object's method or use the property of the object when I was trying to extend the state and behavior of the ```fiat``` car object. To achieve this, I learned about the **this** keyword which is used to refer to the same object when trying to access the property of the object within itself.

### Summary
This brings me to the end of my week-5 learning experience on JavaScript programming language. It was very exciting working with JavaScript objects.  I learned alot and look forward to working more with JavaScript objects, properties and methods.

Feel free to visit my [GitHub repo](https://github.com/MarshallOkafor/learning-JavaScript/tree/main/week5) to see the complete codes that I wrote while learning JavaScript this week. Stay tuned for week-6 progress report, I can not wait to share my experience!
