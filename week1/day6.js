/*

Concepts to Learn

Destructuring Assignment

    Array destructuring

    Object destructuring

    Default values

    Nested destructuring

Modules in JS

    export / import

    Named vs Default exports

    Why modules are useful in real projects

More ES6+ Features

    Template literals (already done, quick recap)

    Default parameters in functions

    Optional chaining (?.)

    Nullish coalescing (??)

    Short-circuiting with || and &&

*/

/*---------------------------------------------------------------------------------------*/

/*

Task 1 – Array Destructuring
    const colors = ["red", "green", "blue"];

    // Destructure first two colors into variables
    const [color1, color2] = colors;
    console.log(color1); // "red"
    console.log(color2); // "green"


Task 2 – Object Destructuring with Defaults
    const person = { name: "Alice", age: 25 };

    // Destructure with default
    const { name, age, country = "Unknown" } = person;

    console.log(name);    // "Alice"
    console.log(age);     // 25
    console.log(country); // "Unknown"


Task 3 – Nested Destructuring
    const employee = {
        id: 1,
        info: { name: "Bob", dept: "IT" }
    };

    // Nested destructuring
    const { info: { name: empName, dept } } = employee;

    console.log(empName); // "Bob"
    console.log(dept);    // "IT"


Task 4 – Modules

    📁 math.js

        // Named exports
        export function add(a, b) {
            return a + b;
        }

        export function multiply(a, b) {
            return a * b;
        }

        // Default export
        export default function square(x) {
            return x * x;
        }


    📁 app.js

        // Import default and named exports
        import square, { add, multiply } from './math.js';

        console.log(add(2,3));      // 5
        console.log(multiply(2,3)); // 6
        console.log(square(4));     // 16



Task 5 – Optional Chaining + Nullish Coalescing
    const user = { profile: { email: "test@mail.com" } };

    // Optional chaining
    console.log(user?.profile?.email); // "test@mail.com"

    // Nullish coalescing
    const age = user.age ?? 18;
    console.log(age); // 18 (since user.age is undefined)


🔍 Debugging Challenge

❌ Buggy code:

const settings = { theme: "dark" };
const mode = settings.mode || "light";
console.log(mode); // Expected: "light"


👉 Fix with nullish coalescing (??):

const settings = { theme: "dark" };

// If mode is undefined or null, use "light"
const mode = settings.mode ?? "light";  
console.log(mode); // "light"


💡 Why fix?

With ||, values like "" (empty string) or 0 would incorrectly fallback.

With ??, only null or undefined trigger fallback.

*/

/*---------------------------------------------------------------------------------------*/

/*

Interview Questions & Answers
Q1. What is destructuring in JavaScript?

👉 Answer:
Destructuring is a feature introduced in ES6 that allows us to unpack values from arrays or properties from objects into distinct variables.
Example:

    const [a, b] = [10, 20]; // a=10, b=20
    const {name, age} = {name: "Alice", age: 25};


    ✅ Makes code cleaner and avoids repetitive property access.

Q2. What happens if the property you try to destructure doesn’t exist?

👉 Answer:
    It becomes undefined.
    You can also provide a default value:

    const { country = "Unknown" } = { name: "Alice" };
    console.log(country); // "Unknown"

Q3. Can you do nested destructuring?

👉 Answer: Yes.
    Example:

    const employee = { info: { name: "Bob", dept: "IT" } };
    const { info: { name, dept } } = employee;
    console.log(name, dept); // "Bob", "IT"

Q4. Difference between default export and named export in ES6 modules?

👉 Answer:

    Default Export → Only one per file. Import without curly braces.

    Named Export → Multiple per file. Import with curly braces.

    Example:

    // math.js
    export default function square(x) { return x*x; }
    export function add(a,b){ return a+b; }

    // app.js
    import square, { add } from './math.js';

Q5. What is optional chaining (?.) in JavaScript?

👉 Answer:
    It allows safe access of nested object properties without throwing errors if a property is null or undefined.

    Example:

    const user = {};
    console.log(user?.profile?.email); // undefined (instead of error)

Q6. Difference between || and ?? in JavaScript?

👉 Answer:

    || → Fallbacks for falsy values (false, 0, "", null, undefined).

    ?? → Fallbacks only for null or undefined.

    Example:

    const count = 0;
    console.log(count || 10); // 10  (wrong in some cases)
    console.log(count ?? 10); // 0   (correct, since 0 is valid)

Q7. Why do we need modules in JavaScript?

👉 Answer:

    Keep code organized & reusable

    Avoid global namespace pollution

    Allow import/export across files

    Essential for large-scale apps (React, Node.js projects).

Q8. Can we use destructuring in function parameters?

👉 Answer:
    Yes, we can directly unpack values from objects or arrays inside function arguments.

    Example:

    function printUser({name, age}) {
    console.log(`${name} is ${age} years old`);
    }
    printUser({name: "Alice", age: 25});

*/