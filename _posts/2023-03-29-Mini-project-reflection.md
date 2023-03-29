---
title: "Mini-project reflection"
date: 2023-03-29
---

In the past week, all the students learning JavaScript were grouped together and tasked with developing a mini-application in JavaScript. We were carefully advised to think of a small application that can be completed in one week.  

### Choosing the project
My team comprised of five students. We wanted to ensure that everyone contributes considerable amount of code in the project. Hence, we decided to work on a backend **JavaScript ToDo Application** with five APIs.
1. **GET** to get all todos
2. **POST** to add a new todo
3. **DELETE** to delete a todo
4. **PUT** to modify a todo
5. **POST/done** to mark todo as completed  

### The ToDo Application
The development of the application was done using ```Node.js``` and ```Express.js```. ```Node.js``` is a cross-platform, open-source back-end JavaScript 
runtime environment. ```Express.js``` is a flexible ```Node.js``` web application framework. We used GitHub as our version control system and created fives **_issues_** and **_milestones_** for all the APIs to be developed. I was assigned the **DELETE** API.  

### The Driver code
We have the **main** code stored in a file ```main.js``` which has an interface to all of our separate APIs that we developed. The ```main.js``` is a critical piece of this applcication because it is what starts the ```Node.js``` server and holds the routes to all other todo enpoints that implements the APIs.  

Below is the ```main.js``` file upon which we added routes to our APIs.

<script src="https://gist.github.com/MarshallOkafor/9558304e5a3536c3402d4ec5ab043c8d.js"></script>

### The DELETE API
This API uses the ```express.js``` and ```express router``` to handle the delete request. The API retrievs the ```id``` from the request body and searches through the ```todos``` array for the ```todo``` object that has that ```id```. If the search is successful, the todo object is deleted, else the user gets a response failure stating that the todo could not be found. Below is the code of the ```deleteTodo.js``` API.

<script src="https://gist.github.com/MarshallOkafor/4bd980eabf3507ccbaaa01175c6c67ec.js"></script>

### Skills/Knowledge learned earlier in the semester that were useful
One important skill that I learned earlier in the semester that was very useful in the implementation of this project was use decoupling and modularization of code towards achieving a flexible and scalable application. This project made me understand and appreciate more the importance of using APIs and interfaces to ensure that our code bases have loosed inter-dependence and are substantially modularized. That is why we built the ```main.js``` file, worked on our APIs seprately and included the routes in the ```main.js``` file.

### Additional skills/knowledge learned to complete the project
The additional skills I learned during the project were:
1. **GitHub Issues** and **Milestones**: I learned about this for the first time and it was really cool knowing how it works and how to use it.
2. **Node.js** and **Express.js**: I am glad the we decided to work on a JavaScript backend project because it made me learn about server-side scripting using JavaScript.
3. **API** and **Interfaces**: The project further enhanced my understanding of how APIs work, how to write them and use them.

### Challenge
I would say the biggest challenge that I faced during this project was learning about **Node.js** and **Express.js**. This is because as at when this project was assigned, I had not started writing server side-scripts in JavaScript. Hence, I had to understand a little bit of **Node.js** and **Express.js** that is enough to get me to deliver on my API and understand the project in general. Nonetheless, I am very excited about the project because of how much I learned and the understanding I built about team collaboration when developing a software product.

### Conclusion
This brings me to the end of my reflection on the mini-project that we developed. It was very exciting and I am happy that I had to learn server-side scripting with ```Node.js``` and ```Express.js```. In the future, I plan to develop a user interface perhaps with **React** or **Flutter** that can be used to test the application from the client-side. In the meantime, you can test the application using **[Postman](https://www.postman.com/downloads/)**. The complete code of the project is in this [GitHub repo](https://github.com/SLUSE-Spring2022/miniproject-javascript_team).  

