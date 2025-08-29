/*

Topics to Learn Today

let vs const vs var

    var → function-scoped, hoisted

    let → block-scoped, re-assignable

    const → block-scoped, cannot be re-assigned

Template Literals

    Use backticks `

    Allows string interpolation: `Hello ${name}`

Arrow Functions

    Shorter syntax: const add = (a, b) => a + b;

    Do not have their own this (important in callbacks/events)

Destructuring

    Extract values from arrays/objects

    const { name, role } = user;
    const [first, second] = [10, 20];

*/

/*---------------------------------------------------------------------------------------*/

//Task 1 – Object Destructuring + Template Literals

// Input
// const user = { name: "Shouvik", role: "Backend Developer" };

// Expected Output
// "Hello Shouvik, you are a Backend Developer!"

//SOLUTION:
//Use destructuring + template literals
// const {name, role} = user;
// console.log(`Hello ${name}, you are a ${role}`);

/*---------------------------------------------------------------------------------------*/

//Task 2 – Arrow Functions
// Write an arrow function `square` that returns the square of a number
// Example: square(5) → 25

//SOLUTION
// const square = (a) => a*a;
// console.log(square(5));

/*---------------------------------------------------------------------------------------*/

//Task 3 – Array Destructuring
// Input
// const numbers = [10, 20, 30];

// Expected Output
// first = 10, second = 20

//SOLUTION
// const [first, second, third] = numbers;
// console.log(`first = ${first}, second = ${second} and third = ${third}`);

/*---------------------------------------------------------------------------------------*/

// 🎤 Interview-Style Questions

// 🎤 Interview Question Quick Notes (Model Answers)

// var vs let vs const:

//     var: function-scoped, can be redeclared, hoisted.

//     let: block-scoped, re-assignable, not redeclarable.

//     const: block-scoped, cannot be reassigned.

// Why template literals > concatenation?

//     Easier to read, especially with variables & multi-line strings.

// Normal vs Arrow functions (this):

//     Normal functions: this depends on how they are called.

//     Arrow functions: don’t have their own this, they inherit it from the surrounding scope (lexical this).

// Destructuring improves readability:

//     Avoids repetitive obj.key calls.

//     Cleaner, especially when extracting multiple values.

/*---------------------------------------------------------------------------------------*/

// Debugging Challenge

// Fix this buggy code:

// const name = "Shouvik";
// const role = "Backend Dev";
// console.log("Hello " + {name} + " you are a " + {role});

// SOLUTION:

// console.log("Hello " + name + " you are a " + role);
// console.log(`Hello ${name} you are a ${role}`);

/*---------------------------------------------------------------------------------------*/

// 📌 Function Scope vs Block Scope
// Function Scope

// A variable is accessible anywhere inside the function where it is declared.

// Created using var.

// It ignores blocks like if, for, while (unless those blocks are functions).

// 👉 Example:

// function test() {
//   if (true) {
//     var x = 10; // function-scoped
//   }
//   console.log(x); // ✅ Works! Output: 10
// }
// test();


// Here, x is visible outside the if block because var is function-scoped.

// Block Scope

// A variable is accessible only inside the block {} in which it is defined.

// Created using let and const.

// 👉 Example:

// function test() {
//   if (true) {
//     let y = 20; // block-scoped
//     const z = 30; // block-scoped
//     console.log(y, z); // ✅ Works
//   }
//   console.log(y); // ❌ ReferenceError: y is not defined
// }
// test();


// Here, y and z exist only inside the if block. Outside of it → they don’t exist.

// 🔑 Interview-style Difference Summary

// Function scope (var): Variable lives in the entire function.

// Block scope (let, const): Variable lives only inside {} where it is defined.

/*---------------------------------------------------------------------------------------*/

// 🧩 Exercise: Predict the Output
// Code Snippet 1
// function test1() {
//   if (true) {
//     var x = 10;
//     let y = 20;
//   }
//   console.log(x); // ?
//   console.log(y); // ?
// }
// test1();


// 👉 Question: What will this print? Why?
// Ans: ReferenceError: y is not defined

// Code Snippet 2
// function test2() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log("i =", i), 100);
//     console.log("i =", i)
//   }
//   for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log("j =", j), 100);
//     console.log("j =", j)
//   }
// }
// test2();


// 👉 Question: What will this print? Why is there a difference?
// ANS: 
// i = 3 | i = 0
// i = 3 | i = 1
// i = 3 | i = 2
// j = 0 | j = 0 
// j = 1 | j = 1 
// j = 2 | j = 2 
