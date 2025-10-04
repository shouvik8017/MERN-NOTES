/**
 
Functions Deep Dive
🔑 Topics to Learn

Function Declarations

    function greet(name) {
    return `Hello, ${name}!`;
    }
    console.log(greet("Alice")); // Hello, Alice!

Hoisted (can be called before they are defined).

    Function Expressions

    const greet = function(name) {
    return `Hello, ${name}!`;
    };
    console.log(greet("Bob")); // Hello, Bob!

    Not hoisted (must be defined before use).

Arrow Functions

    const greet = (name) => `Hello, ${name}!`;
    console.log(greet("Charlie")); // Hello, Charlie!

    Shorter syntax.

    Does not have its own this (important difference).

Default Parameters

    function multiply(a, b = 2) {
    return a * b;
    }
    console.log(multiply(5)); // 10
    console.log(multiply(5, 3)); // 15

📝 Practice Tasks

Write a function declaration add(a, b) that returns the sum.

    ✅ Solutions
    // Task 1: Function Declaration
    function add(a, b) {
    return a + b;
    }
    console.log(add(5, 3)); // 8


Write a function expression subtract(a, b) that returns the difference.

    // Task 2: Function Expression
    const subtract = function(a, b) {
    return a - b;
    };
    console.log(subtract(10, 4)); // 6


Write an arrow function multiply(a, b) that returns the product.

    // Task 3: Arrow Function
    const multiply = (a, b) => a * b;
    console.log(multiply(3, 4)); // 12


Write a function greet(name, greeting = "Hello") that returns "Hello, Name" if no custom greeting is passed.

    // Task 4: Default Parameters
    function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
    }
    console.log(greet("Alice")); // Hello, Alice!
    console.log(greet("Bob", "Hi")); // Hi, Bob!


Write a function power(base, exponent = 2) that returns base^exponent.

    // Task 5: Power Function
    function power(base, exponent = 2) {
    return base ** exponent;
    }
    console.log(power(3)); // 9
    console.log(power(2, 5)); // 32



🎤 Interview Q&A (Functions Focus)

Q1. What is the difference between function declaration and function expression?

    Function Declaration is hoisted, so you can call it before it’s defined.

    Function Expression is not hoisted; you must define it before calling.

Q2. Why do arrow functions not have their own this?

    Arrow functions inherit this from their surrounding scope (lexical scoping).

    This makes them useful for callbacks and when working with this inside classes.

Q3. What are default parameters and why are they useful?

    Default parameters allow you to set a value if none is provided.

    Example: function greet(name = "Guest") { ... } avoids undefined.

Q4. Difference between return in regular vs arrow function (one-liner)?

    Regular function needs {} and return.

    Arrow function with one line auto-returns without {}.

*/