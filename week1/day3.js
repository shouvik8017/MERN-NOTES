/*

(Promises & Async JS)
📌 Topics to Learn

Promises

    Object representing eventual completion/failure of async task.

    States: pending → fulfilled → rejected.

        Example:

        const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 1000);
        });
        promise.then(result => console.log(result));


async / await

    Cleaner syntax for handling Promises.

    async function fetchData() {
    return "Data received!";
    }
    fetchData().then(console.log);


Error Handling

    .catch() for promises.

    try...catch with async/await.

*/

/*---------------------------------------------------------------------------------------*/

// 🖥 Coding Tasks
// Task 1 – Basic Promise
// Create a promise that resolves after 2 seconds with "Hello World"
// Consume it using .then()

//SOLUTION:
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello World"), 2000);
//     setTimeout(() => reject("Error occured"), 2000);
// });

// promise1.then(result => console.log(result)).catch(error => console.log(error));

// promise1.then(
//     function (value) { console.log(value); },
//     function (error) { console.log(error); }
// );


// Task 2 – Async/Await
// Create an async function `greet` that waits 1 second and then returns "Hi there!"
// Call greet() and log the result

// SOLUTION:
// async function greet() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Hi there!"), 1000);
//     });
// }

// greet().then(result => console.log(result));


// Task 3 – Promise with Error
// Create a promise that randomly resolves ("Success") or rejects ("Error")
// Handle both cases with .then() and .catch()

// SOLUTION:
// const promise2 = new Promise((resolve, reject) => {
//     let number = Math.random();
//     console.log("Number generated: ", number);
    
//     const decision =  number > 0.5; // Randomly decide success or failure

//     if(decision) { resolve("Success"); }
//     else { reject("Error"); }
// });

// promise2.then(result => console.log(result)).catch(error => console.log(error));


// Task 4 – API Simulation
// Simulate an API call using setTimeout:
// - If "id > 0", resolve with "User found"
// - Otherwise reject with "Invalid ID"
// Use async/await + try...catch to handle it

// SOLUTION:
/*
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve("User found");
      else reject("Invalid ID");
    }, 1000);
  });
}

async function run() {
  try {
    const res = await getUser(1);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
run();
*/


// 🔍 Debugging Challenge

// Fix this code:
// async function getData() {
//   return "Data received!";
// }
// const data = getData();
// console.log(data); // Expected: "Data received!"

// SOLUTION:
// getData().then(console.log); // Correct way to log the resolved value


/*---------------------------------------------------------------------------------------*/


/*
Interview Q&A (with Answers)

Q1. What problem do Promises solve compared to callbacks?

    Callbacks often lead to callback hell (nested functions, hard to read/debug).

    Promises make async code more readable & maintainable by chaining with .then() and .catch().

    Promises handle errors more cleanly (via .catch) vs callbacks where you must pass error objects manually.


Q2. What’s the difference between .then/.catch and async/await?

    .then/.catch:

    fetchData()
    .then(result => console.log(result))
    .catch(err => console.log(err));


    async/await:

    try {
    const result = await fetchData();
    console.log(result);
    } catch (err) {
    console.log(err);
    }


    👉 Both do the same thing.

    .then/.catch → chaining style.

    async/await → synchronous-looking code, easier to read.


Q3. How do you handle multiple promises at once?

    Use Promise.all when you want to run promises in parallel and wait for all results:

    Promise.all([fetchUser(), fetchPosts()])
    .then(([user, posts]) => console.log(user, posts))
    .catch(err => console.log(err));


    Use Promise.race to get the first resolved/rejected promise.

    Use Promise.allSettled if you want results of all promises, regardless of success/failure.


Q4. What happens if you don’t handle a rejected Promise?

    In modern JS, you’ll get an “UnhandledPromiseRejectionWarning” (Node.js) or error in console.

    Best practice: always handle errors using .catch or try...catch with async/await.


Q5. Difference between synchronous and asynchronous code in JS?

    Synchronous → executes line by line, blocking.

    Asynchronous → non-blocking, runs in background (like setTimeout, fetch, DB calls), allows other code to continue.
*/