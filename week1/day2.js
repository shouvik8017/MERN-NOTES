/*
📌 Topics to Learn Today

Spread Operator (...)

    Expands elements of arrays/objects.

    const arr = [1, 2, 3];
    const arr2 = [...arr, 4, 5]; // [1,2,3,4,5]


Rest Operator (...)

    Gathers remaining arguments into an array.

    function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
    }
    console.log(sum(1, 2, 3, 4)); // 10


Array Methods

    map → transforms each element

    filter → keeps elements that match a condition

    reduce → accumulates values into one result


    Example:

    const nums = [1, 2, 3, 4];
    console.log(nums.map(n => n*2)); // [2,4,6,8]
    console.log(nums.filter(n => n%2===0)); // [2,4]
    console.log(nums.reduce((sum, n) => sum+n, 0)); // 10
    
*/

/*---------------------------------------------------------------------------------------*/

// Coding Tasks

// Task 1 – Spread Operator
    // const nums1 = [1, 2, 3];
    // const nums2 = [4, 5, 6];

    // Merge both arrays using spread
    // Expected Output: [1,2,3,4,5,6]

    // SOLUTION:

    // const newNums = [...nums1, ...nums2];
    // console.log(newNums);


// Task 2 – Rest Operator
    // Write a function `multiplyAll` that takes ANY number of arguments
    // and returns their product
    // Example: multiplyAll(2, 3, 4) → 24

    // SOLUTION:

    // function multiplyAll(...nums)
    // {
    //     return nums;
    //     return nums.reduce((a, b) => a * b, 1);
    //     return nums.reduce((a, b) => a + b, 10);
    // }

    // console.log(multiplyAll(2, 3, 4));


// Task 3 – Array Methods
    // const numbers = [1, 2, 3, 4, 5];

    // 1. Use map to square each number
    // 2. Use filter to get only even numbers
    // 3. Use reduce to calculate the sum

    // console.log(numbers.map(n => n*n));
    // console.log(numbers.filter(n => n%2===0));
    // console.log(numbers.reduce((sum, n) => sum+n, 0));


// Task 4 – Combined Challenge
    // Input:
    // const users = [
    //     { name: "Alice", age: 25 },
    //     { name: "Bob", age: 30 },
    //     { name: "Charlie", age: 22 }
    // ];

    // Expected Output:
    // ["ALICE", "BOB"]  → names in uppercase of users whose age >= 25

    // console.log(users.filter(n => n.age >= 25).map(n => n.name.toUpperCase()))

/*---------------------------------------------------------------------------------------*/
    
/*

Interview-Style Questions

    What’s the difference between spread and rest?

    Spread (...) → Expands arrays/objects into individual elements.
    Example:

    const arr = [1,2,3];
    const copy = [...arr, 4]; // [1,2,3,4]


    Rest (...) → Collects remaining arguments into a single array.
    Example:

    function sum(...nums) { return nums.reduce((a,b)=>a+b,0); }
    sum(1,2,3); // 6

    👉 Rule of thumb: Spread = expand, Rest = collect.

    ------------------------------------------------------------------

    How does map differ from forEach?

    map → Returns a new array with transformed elements.

    forEach → Executes a function for each element but returns undefined.
    Example:

    const nums = [1,2,3];
    console.log(nums.map(n => n*2));   // [2,4,6]
    console.log(nums.forEach(n => n*2)); // undefined

    -------------------------------------------------------------------

    Can reduce be used to flatten arrays? How?

    ✅ Yes! Example:

    const arr = [[1,2],[3,4],[5]];
    const flat = arr.reduce((acc, val) => acc.concat(val), []);
    console.log(flat); // [1,2,3,4,5]


    👉 In modern JS, you can also use arr.flat(), but reduce works for more custom logic.

    ---------------------------------------------------------------------

    Why is immutability important when working with arrays/objects in JavaScript?

    Prevents unexpected side effects (when multiple parts of code share references).

    Makes debugging easier (state doesn’t change silently).

    Plays well with functional programming & React (state updates should create new objects instead of mutating existing ones).
    Example:

    const arr = [1,2,3];
    const newArr = [...arr, 4]; // immutable update

*/

/*---------------------------------------------------------------------------------------*/

// 🔍 Debugging Challenge

    // Fix this code:

    // const numbers = [1, 2, 3];
    // const doubled = numbers.forEach(n => n*2);
    // console.log(doubled); // Expected: [2,4,6]

    // SOLUTION:
    // const numbers = [1, 2, 3];
    // const doubled = numbers.map(n => n*n);
    // console.log(doubled);

/*---------------------------------------------------------------------------------------*/