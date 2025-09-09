/*
JavaScript Objects & OOP Basics
📌 Topics to Learn

Objects in JavaScript

    Key-value pairs ({ key: value }).

    Accessing properties (obj.key, obj["key"]).

    Adding/updating/deleting properties.

Object Methods

    Object.keys(obj), Object.values(obj), Object.entries(obj).

    Object.assign (shallow copy).

    Spread operator for objects.

Constructor Functions

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const p1 = new Person("Alice", 25);


Classes & this keyword

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            return `Hello, my name is ${this.name}`;
        }
    }
    const p = new Person("Bob", 30);
    console.log(p.greet());


Inheritance with extends

    class Employee extends Person {
        constructor(name, age, role) {
            super(name, age);
            this.role = role;
        }
        describe() {
            return `${this.name} is a ${this.role}`;
        }
    }

*/

/*---------------------------------------------------------------------------------------*/

// 🖥 Coding Tasks


// Task 1 – Object Manipulation
// Create an object car with properties: brand, model, year
// 1. Print brand
// 2. Add a new property "color"
// 3. Delete "year"
// 4. Print final object

// Solution:
// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020
// };

// console.log(car.brand); // Print brand

// car.color = "Red"; // Add new property "color"

// delete car.year; // Delete "year"

// console.log(car); // Print final object


// Task 2 – Object Methods
// Use Object.keys, Object.values, Object.entries on:
// const user = { name: "Alice", age: 25, role: "Admin" }

// Solution:
// const user = { name: "Alice", age: 25, role: "Admin" };
// console.log(Object.keys(user)); // ["name", "age", "role"]
// console.log(Object.values(user)); // ["Alice", 25, "Admin"]
// console.log(Object.entries(user)); // [["name", "Alice"], ["age", 25], ["role", "Admin"]]



// Task 3 – Constructor Function
// Create a constructor function "Book" with title & author
// Add a method getDetails that returns "Title by Author"

// Solution:
// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     };
//     getDetails() {
//         return `${this.title} by ${this.author}`;
//     }
// }
// const book1 = new Book("1984", "George Orwell");
// console.log(book1.getDetails()); // "1984 by George Orwell"


// Task 4 – Class & Inheritance
// Create a class Animal with a method speak()
// Extend Dog from Animal, override speak() to print "Woof!"

// Solution:
// class animal{
//     speak(){
//         console.log("Animal speaks");
//     }
// }

// class dog extends animal{
//     speak(){
//         console.log("Woof!");
//     }
// }

// const myDog = new dog;
// myDog.speak(); // "Woof!"


// Task 5 – this Keyword Debugging
// const person = {
//   name: "Shouvik",
//   greet: function() {
//     setTimeout(function() {
//       console.log("Hello, " + this.name);
//     }, 1000);
//   }
// };
// person.greet(); // Fix so it prints "Hello, Shouvik"

// Solution:
// const person = {
//   name: "Shouvik",
//   greet: function(name = this.name) {
//     setTimeout(function() {
//       console.log("Hello, " + name);
//     }, 1000);
//   }
// };
// person.greet(); // "Hello, Shouvik"


// 🔍 Debugging Challenge
// Fix this:

// class Person {
//   constructor(name) {
//     name = name; // Bug here
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
// const p = new Person("Alice");
// p.greet(); // Expected: "Hello, my name is Alice"

// Solution:
// class Person {
//   constructor(name) {
//     this.name = name; // Bug here
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
// const p = new Person("Alice");
// p.greet(); // Expected: "Hello, my name is Alice"


/*---------------------------------------------------------------------------------------*/

/* 
🎤 Interview-Style Questions (Day 4)

What are the differences between Object.keys, Object.values, and Object.entries?
    Object.keys returns an array of a given object's own property names, 
    Object.values returns an array of a given object's own property values, 
    Object.entries returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

What is the difference between constructor functions and classes in JS?
    Constructor functions are regular functions that are used to create objects and are called with the 'new' keyword.
    Classes are syntactic sugar over constructor functions, providing a clearer and more concise syntax for creating objects and handling inheritance.

How does inheritance work in JavaScript classes?
    Inheritance in JavaScript classes is implemented using the 'extends' keyword. 
    A class can inherit properties and methods from another class, allowing for code reuse and the creation of hierarchical relationships between classes.

What are some common pitfalls when using the this keyword in JavaScript?
    Common pitfalls include losing the correct context of 'this' in callbacks or event handlers, especially when using regular functions instead of arrow functions. 
    Another pitfall is forgetting to bind 'this' when passing methods as callbacks.

How does the this keyword behave differently in normal functions vs arrow functions?
    In normal functions, 'this' refers to the object that called the function, which can change based on how the function is invoked.
    In arrow functions, 'this' is lexically bound, meaning it retains the value of 'this' from the surrounding context where the arrow function was defined.

Explain prototypal inheritance in simple words.
    Prototypal inheritance is a way for objects to inherit properties and methods from other objects.
    Each object has a prototype, and when you try to access a property or method on an object, JavaScript first looks for it on the object itself.
    If it doesn't find it there, it looks up the prototype chain until it finds the property/method or reaches the end of the chain.

*/