---
title: "Callbacks"
date: "2019-04-22"
---

Callback functions in JavaScript are also called higher order functions.

Just like you can pass objects to functions as an argument, you can pass other functions into functions as arguments.

Here is an example of function `x` and function `y`.

```js
let x = function() {
  console.log("I am called inside a function");
};

let y = function(callback) {
  console.log("do something");
  callback();
};

y(x);
```

Function y has an argument called `callback`. We call function `y`, passing function `x` as a parameter to function `y` so we can execute it at some point.

<hr>

Okay awesome, that example was simple. Lets look at a slightly more in depth example to drive the point of callback functions home. We will first complete this without callbacks, then add callbacks to see the benefits callbacks have within our code.

Lets build a simple calculator that takes in two numbers and either adds, divides, multiplies or subtracts depending on the operation the user wants done with the numbers.

```js
let calc = function(num1, num2, calcType) {
  // do awesome calculation stuff here
};
```

So for example if the argument is `add`, it will take number 1 and number 2 and add them together, returning the sum of those numbers.

```js
let calc = function(num1, num2, calcType) {
  if (calcType === "add") {
    return num1 + num2;
  } else if (calcType === "multiply") {
    return num1 * num2;
  } else if (calcType === "subtract") {
    return num1 - num2;
  } else if (calcType === "divide") {
    return num1 / num2;
  }
};

console.log(calc(3, 2, "add"));
```

Now when we run this in the console of our browser, we can see we get 5. That is because we are passing the value 3 and the value 2 for our num1 and num2 values, and passing add as our calcType.

This works fine, but we can make this function more abstract.

We can build an add function, which takes two arguments, a and b, and return a + b.

```js
let add = function(a, b) {
  return a + b;
};
```

Now we have a separate add function that handles adding our two values together.

We can easily create functions for subtract, multiply and divide as well real quick.

```js
let add = function(a, b) {
  return a + b;
};

let subtract = function(a, b) {
  return a - b;
};

let multiply = function(a, b) {
  return a * b;
};

let divide = function(a, b) {
  return a / b;
};
```

Now we can change our `calc` function to include our callback function, which passes our numbers to the appropriate operation function instead of calculating the values in an if else, like so.

```js
let calc = function(num1, num2, callback) {
  return callback(num1, num2);
};
```

It is also good practice to ensure the callback function being passed is a function itself and not anything else like a string, number or object.

To do this we can check the `typeof` for the callback to ensure it is a function.

```js
let calc = function(num1, num2, callback) {
  if (typeof callback === "function") {
    return callback(num1, num2);
  } else {
    console.log("error: the callback was not a function.");
  }
};
```

and we can now make our calls like so.

```js
console.log(calc(3, 2, add));
```

So to clarify, our new script for this will look like this

```js
let add = function(a, b) {
  return a + b;
};

let subtract = function(a, b) {
  return a - b;
};

let multiply = function(a, b) {
  return a * b;
};

let divide = function(a, b) {
  return a / b;
};

let calc = function(num1, num2, callback) {
  if (typeof callback === "function") {
    return callback(num1, num2);
  } else {
    console.log("error: the callback was not a function.");
  }
};

console.log(calc(3, 2, add)); // 5
console.log(calc(3, 2, subtract)); // 1
console.log(calc(3, 2, multiply)); // 6
console.log(calc(3, 2, divide)); // 1.5
```

In addition, if we wanted to write the callback directly as an argument, as an anonymous function. Here we write an anonymous callback function which takes in `3` and `2` as parameters `a` and `b`, and `returns a + b`.

```js
console.log(
  calc(3, 2, function(a, b) {
    return a + b;
  })
);
```

<hr>

Here is a practical example of using a callback with sorting.

```js
var myArr = [
  {
    num: 5,
    str: "apple"
  },
  {
    num: 7,
    str: "kale"
  },
  {
    num: 1,
    str: "banana"
  }
];

myArr.sort(function(val1, val2) {
  if (val1.num > val2.num) {
    return -1;
  } else {
    return 1;
  }
});

console.log(myArr);
```

We have an array of objects, and we use javascripts built in .sort() function to pass two values, and we are sorting by the `num` key from our objects. In this case, the objects will be printed in order where the `num` keys are greatest to least.
