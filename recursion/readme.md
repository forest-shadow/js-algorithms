# Recursion

**Recursion** is different approach to finding solutions. Another approach called **iterative**.

> **Recursion** — a **process** (a function in our case) that calls **itself**.

Recursion are used everywhere:

- **`JSON.parse`** / **`JSON.stringify`**
- **`document.getElementById`** and DOM traversal algorithms
- Object traversal
- In complex data structures

Sometimes recursion is a cleaner alternative to iteration.

# Recursion: Call Stack

Before digging in writing recursive functions it's useful to clear understand how function calls works in JS, so we can understand what's going on then recursive function calls itself again and again.

In almost all program languages, there is a built-in data structure that manages what happens when functions are invoked. F.e. sometimes when functions invokes, it need to wait until other function ends it's execution. So, you need somehow that all functions will be invoked in some (right) order.

That data structure and functionality behind that in js called **Call Stack**.

> **Call Stack** — built-in data structure and functionality in JS that manages order of functions call.

**Call Stack** has a **Stack Data Structure**:

- any time a function is invoked it is placed (**pushed**) on the top of the Call Stack.
- when JS sees the **return** keyword or when the function ends, or there are no code in function to execute, the compiler will remove (**pop**) top item from the Call Stack.

It's like stack of paper on table: when you want to remove some paper, you will always remove first one from the top.

**When you work with recursion, you might be work with call stack, but in slightly different way.**

Consider:

- **using call stack without recursion:** you're used to functions being pushed on the call stack and popped off when they are done
- **using call stack with recursion:** when we write recursive functions, we keep pushing new functions (the same function) onto the call stack. And it's waiting to be called.

# Recursion: Agenda behind writing recursion functions

> **Agenda behind writing recursion functions** — invoke the **same** function with a different input until you reach your **base case**.

> **Base case** — the condition when the recursion ends. Since recursive function must stops somewhere and not execute itself again and again up to Infinity.

**There are two essential parts of a recursive function:**

- **Base Case**
- **Different Input** — each time you call the same function with different input values

# Recursion: Common Recursion Pitfalls

- **No base case**

    Forgetting about Base Case will cause Infinite Loop. You will get `RangeError: Maximum call stack size exceeded`

- **Forgetting to return or returning the wrong thing.**

    Usually it also will lead to Infinite Loop occurrence.

- **Stack overflow**

    Means that recursion is not stopping.