---
title: "Lexical Scope (this)"
date: "2018-12-14"
---

Lexical this! In JavaScript, every function brings its own `this` context. In complex JavaScript applications, this can become very confusing, very quickly when you have functions inside of functions inside of functions.

Fat arrow notation (arrow functions) creates a lexical `this`, so it passes the lexical scope of `this` into the function which is created.

Lets say you are created a function for the nintendo character, Mario. And in that function you have the number of lives, and a function to add new lives to Mario.

```js
function startGame() {
  this.lives = 0;
  this.addLives = function() {
    this.oneUp = setTimeout(function() {
      console.log(++this.lives);
    }, 1000);
  };
}

var mario = new startGame();

mario.addLives();
```

However, there is a problem here. If we run this code in the console of our browser, you will see we have a console log returning `NaN` (Not a Number).

When we `console.log(++this.lives)`, the `this` is referring to the setTimeout function. It does not find any lives property defined within the setTimeout function, so it throws a `NaN`.

The traditional JavaScript fix in this instance, would be to create a variable named `that` where we want to refer to `this`, and set it to `this`. Then change `++this.lives` to refer to our newly created variable, `++that.lives`, as shown here.

```js
function startGame() {
  this.lives = 0;
  var that = this;
  this.addLives = function() {
    this.oneUp = setTimeout(function() {
      console.log(++that.lives);
    }, 1000);
  };
}

var mario = new startGame();

mario.addLives();
```

Now if we run this code in the console of our browser, we can see that we get the console log of 1 after one second. Which is what we expect! But we can enhance this with an arrow function.

We don't need to create a variable called `that` that is equal to `this`, we can instead remove the function keywords and replace them with `arrow functions`.

```js
function startGame() {
  this.lives = 0;
  this.addLives = () => {
    this.oneUp = setTimeout(() => {
      console.log(++this.lives);
    }, 1000);
  };
}

var mario = new startGame();

mario.addLives();
```

We can now run this code snippet in the console of our browser and see the value of 1 logged after one second as expected.

When we use the traditional function we are creating a different `this` scope for each and every function.

What is happening when we use arrow functions is each arrow function is passing the lexical `this` as the scope within the function. Now we do not have to create a variable named `that` which is equal to `this`, we can know that `this` is referring to `this.lives` that was defined in the root of our startGame function.
