/*
Arrays & Advanced Array Methods in JavaScript

Arrays are the backbone of handling collections of data in JavaScript. Today we’ll go from basics to advanced.

📖 Topics to Learn

Array Basics

    Creating arrays

    Accessing elements

    Modifying arrays (push, pop, shift, unshift, splice)

Iterating Arrays

    for loop

    for...of

    forEach()

Array Methods for Transformation

    map() – transform each element

    filter() – select elements that satisfy a condition

    reduce() – accumulate values

    find() and findIndex()

    some() and every()

Spread & Rest with Arrays

    Copy arrays

    Merge arrays

    Function parameters
*/


/*---------------------------------------------------------------------------------------*/

// 🖥 Coding Tasks

// Task 1 – Basic Array Operations

// let fruits = ["apple", "banana", "orange"];

// Add "grape" to the end
// Remove the first element
// Insert "mango" at index 1
// Print final array

// Solution:
// let fruits = ["apple", "banana", "orange"];
// fruits.push("grape"); // Add "grape" to the end
// fruits.shift(); // Remove the first element
// fruits.splice(1, 0, "mango"); // Insert "mango" at index 1
// console.log(fruits); // Print final array



// Task 2 – Map & Filter

// let numbers = [1, 2, 3, 4, 5];

// Use map to double all numbers
// Use filter to get only even numbers

// Solution:
// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2); // Double all numbers
// let evens = numbers.filter(num => num % 2 === 0); // Get only even numbers
// console.log(doubled); // [2, 4, 6, 8, 10]
// console.log(evens); // [2, 4]


// Task 3 – Reduce

// let prices = [10, 20, 30];

// Use reduce to calculate total sum

// Solution:
// let prices = [10, 20, 30];
// let total = prices.reduce((sum, price) => sum + price, 0); // Calculate total sum
// console.log(total); // 60


// Task 4 – Find & Some/Every

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 }
// ];

// Find user with name "Charlie"
// Check if some users are under 18
// Check if every user is above 15

// Solution:
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 }
// ];
// let charlie = users.find(user => user.name === "Charlie"); // Find user with name "Charlie"
// let hasMinor = users.some(user => user.age < 18); // Check if some users are under 18
// let allAbove15 = users.every(user => user.age > 15); // Check if every user is above 15
// console.log(charlie); // { name: "Charlie", age: 30 }
// console.log(hasMinor); // true
// console.log(allAbove15); // true



// Task 5 – Spread & Rest

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// Merge arr1 and arr2 into newArr using spread

// function sum(...nums) {
//   Return sum of all numbers passed
// }

// console.log(sum(1,2,3,4)); // 10

// Solution:
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let newArr = [...arr1, ...arr2]; // Merge arr1 and arr2 using spread
// console.log(newArr); // [1, 2, 3, 4]

// function sum(...nums) {
//   return nums.reduce((total, num) => total + num, 0); // Sum all numbers passed
// }

// console.log(sum(1,2,3,4)); // 10


/*---------------------------------------------------------------------------------------*/

/*

🎯 Interview Questions

Difference between map(), forEach(), and filter()?
    map() transforms each element and returns a new array, 
    forEach() executes a function on each element but does not return a new array, 
    filter() selects elements that satisfy a condition and returns a new array.

Explain how reduce() works with an example.
    reduce() accumulates values in an array to a single value.
    Example: [1,2,3].reduce((acc, curr) => acc + curr, 0) results in 6.

When would you use some() vs every()?
    some() checks if at least one element satisfies a condition,
    every() checks if all elements satisfy a condition.

What is the difference between shallow copy & deep copy of arrays?
    Shallow copy copies the reference of nested objects,
    deep copy creates a new copy of nested objects.

How does the spread operator help with immutability?
    It allows creating new arrays by copying existing ones without modifying the original.

*/