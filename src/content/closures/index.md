---
title: "Closures in JavaScript"
date: "2019-01-20"
---

A closure is a combination of a function and the environment within which that function was declared. The environment consists of any local variables that were in scope at the time the closure was created. In javascript all functions form closures. In other languages without closures, the local variables within a function only exist for the duration of that functions execution.

For example here we have our `closureExample` function, which has a variable defined as `name` within it. It also has a `displayName` function defined in it where it console logs the name. The `closureExample` function is going to return the `displayName` function. We then are making a variable called `myFunction` and setting it to our `closeureExample`, then we call our `myFunction` variable.

```js
function closureExample() {
  var name = "Jason";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunction = closureExample();

myFunction();
```

Because of closures, the `displayName` function that has been returned has access to the `name` variable even though the `name` is not defined in the `displayName` function itself. This is basically what closure is, the `displayName` function has access to any variable within the scope or environment it was created in.

<br>
<hr>
<br>

A more practical example is shown below. Here we have a variable called `counter`, assigned to an anonymous function that is invoked as soon as it is defined, we know this because of the two parentheses at the end of this function. This is known as an `immediate invoked function expression` (IIFE).

When the function is invoked, it is going to return the functions `increment`, `decrement` and `getValue` into the variable `counter`. Since we are not returning our `privateCounter` variable and our `changeBy` function, those will stay private within our `counter` module. They will only be able to be accessed by the functions we returned.

```js
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    incrementCount: function() {
      changeBy(1);
    },
    decrementCount: function() {
      changeBy(-1);
    },
    getValue: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.getValue()); // 0
counter.incrementCount();
counter.incrementCount();
console.log(counter.getValue()); // 2
counter.decrementCount();
console.log(counter.getValue()); // 1
```

So neither the `privateCounter` variable or the `changeBy` function are able to be accessed directly from outside of the anonymous function, they are only able to be accessed by the three public functions that are returned.
