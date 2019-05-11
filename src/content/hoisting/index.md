---
title: "Hoisting in JavaScript"
date: "2019-01-27"
---

With JavaScript hoisting, variables are hoisted to the top of their containing scope.

For example we have the variable called `myvar` and we create an immediate invoked function expression which console logs our variable.

```js
var myvar = "my value";

(function() {
  console.log(myvar);
})();
```

This obviously logs out `my value` to the console when we test this in the console of our browser.

But if we add a local variable called `myvar` under our console log witin our iife. We can add another console log to see what `myvar` is after we define it in our iife as well.

```js
var myvar = "my value";

(function() {
  console.log(myvar);
  var myvar = "local value";
  console.log(myvar);
})();
```

As we see when we run this code snippet in the console of our browser, we get `undefined` and `local value` returned.

This is because variables get hoisted to the top of their scope. Behind the scenes, if you have a variable declared anywhere within a function scope, it will be brought to the top. But just the delcaration of the variable will be brought to the top, not the initialization.

So behind the scenes, its going to delcare `myvar` at the top of the iife.

```js
var myvar = "my value";

(function() {
  var myvar; // behind the scenes javascript hoists a variable declaration to the top of the function like this
  console.log(myvar);
  var myvar = "local value";
  console.log(myvar);
})();
```

This is why it is good practice to always declare your variables at the top of any function because it is happening behind the scenes anyway.

So behind the scene it declares `myvar`, then at the bottom we are initializing it to equal `local value`.

If you have variable declarations scattered throughout your function, you should move all of these to the top of your function as it is considered a best practice.

Functions are hoisted to the top as well, but not function expressions.

```js
var myvar = "my value";

(function() {
  newFunction();

  function newFunction() {
    console.log("hello world");
  }
})();
```

We see when we run this code snippet in the console of our browser, `hello world` is logged out even though newFunction() is called before even though we havent created it yet. So the function was hoisted at the top as well. We refer to these as function declarations.

If instead we had the expression form of this function like so

```js
var myvar = "my value";

(function() {
  newFunction();

  var newFunction = function() {
    console.log("hello world");
  };
})();
```

and if we run this in the console of our browser, we see we get nothing because the name of a function expression gets hoisted at the top, but not the implementation.
