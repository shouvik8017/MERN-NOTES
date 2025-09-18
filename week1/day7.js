/*

📖 Concepts to Learn

First-Class Functions – functions can be stored in variables, passed as arguments, and returned from other functions.

Closures – inner functions accessing variables from outer functions even after the outer function has finished.

Scope Chain – how JS looks for variables (local → function → global).

The this Keyword

In global scope

Inside objects

Inside classes

Arrow functions vs normal functions

🖥 Coding Tasks

Task 1 – Function Returning Function (Closure Basics)

function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2


Task 2 – Scope Chain

let globalVar = "I am global";

function outer() {
    let outerVar = "I am outer";
    function inner() {
        let innerVar = "I am inner";
        console.log(globalVar); // ?
        console.log(outerVar);  // ?
        console.log(innerVar);  // ?
    }
    inner();
}
outer();


👉 Predict what will be printed.

Task 3 – this inside Object vs Function

const user = {
    name: "Alice",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

user.greet(); // ?


Task 4 – this with Arrow Function

const user = {
    name: "Bob",
    greet: () => {
        console.log("Hello " + this.name);
    }
};

user.greet(); // ?


Task 5 – Closure for Private Variables

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            balance -= amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
console.log(account.deposit(50));   // 150
console.log(account.withdraw(30));  // 120
console.log(account.getBalance());  // 120

🔍 Debugging Challenge
const person = {
  name: "Shouvik",
  greet: function() {
    setTimeout(function() {
      console.log("Hello " + this.name);
    }, 1000);
  }
};

person.greet(); // Expected: "Hello Shouvik"

*/

/*

Solutions
Task 1 – Function Returning Function (Closure Basics)
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


✔ Correct because count is preserved in closure.

Task 2 – Scope Chain
let globalVar = "I am global";

function outer() {
    let outerVar = "I am outer";
    function inner() {
        let innerVar = "I am inner";
        console.log(globalVar); // I am global
        console.log(outerVar);  // I am outer
        console.log(innerVar);  // I am inner
    }
    inner();
}
outer();


✔ JS looks upward in scope chain: inner → outer → global.

Task 3 – this inside Object vs Function
const user = {
    name: "Alice",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

user.greet(); // Hello Alice


✔ Works because this refers to the calling object.

Task 4 – this with Arrow Function
const user = {
    name: "Bob",
    greet: () => {
        console.log("Hello " + this.name);
    }
};

user.greet(); // Hello undefined


⚠ Arrow functions don’t have their own this. They take this from outer scope (here: global).
So it prints Hello undefined.

Task 5 – Closure for Private Variables
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            balance -= amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
console.log(account.deposit(50));   // 150
console.log(account.withdraw(30));  // 120
console.log(account.getBalance());  // 120


✔ This is how private variables are created in JS.

Debugging Challenge

❌ Bug: this inside setTimeout points to window (or undefined in strict mode).

✅ Fix using arrow function:

const person = {
  name: "Shouvik",
  greet: function() {
    setTimeout(() => {
      console.log("Hello " + this.name);
    }, 1000);
  }
};

person.greet(); // "Hello Shouvik"


OR use .bind(this):

setTimeout(function() {
  console.log("Hello " + this.name);
}.bind(this), 1000);

🎤 Day 7 Interview Q&A
Q1. What are closures in JavaScript?

    👉 A closure is when a function remembers variables from its outer scope even after that scope has finished execution.
    Example: a counter function remembering its count.

Q2. Why are closures useful?

    Data privacy (like private variables).

    Function factories (returning new customized functions).

    Maintaining state between function calls.

Q3. Explain the scope chain in JS.

    👉 When you use a variable, JS looks for it in:

    Local scope

    Parent (outer) scopes

    Global scope

Q4. Difference between this in arrow functions vs normal functions.

    Normal function: this depends on how function is called.

    Arrow function: this is taken from the surrounding scope (lexical binding).

Q5. How do you fix the classic setTimeout + this bug?

    Use arrow function

    Or .bind(this)

    Or save reference let self = this

Q6. Can you give a real-life example of closure in MERN projects?

    👉 For example, in a React hook (useState). React internally uses closures to "remember" the state between re-renders.

*/