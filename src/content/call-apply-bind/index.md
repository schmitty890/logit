---
title: "Call, Apply and Bind"
date: "2019-04-23"
---

In JavaScript, the functions `call`, `apply` and `bind` seem to be doing the same thing. But sometimes it is confusing on how they really work.

Traditionally we have objects with properties and methods. Object 1 can have its own property, object 2 can have its own property, and they can both share the same methods.

So lets look at this example, where we start by building an object
This object has a property called `num`, with a property of `2`.

```js
var obj = {
  num: 2
};
```

We will now create a variable called `addToThis` which is a function that adds our `obj.num` with a number we pass to it.

```js
var obj = {
  num: 2
};

var addToThis = function(a) {
  return this.num + a;
};
```

So lets say if `num` is 2, and `a` is 3, it will return 5.

#### Call

So if we want to take action on our `obj` using the `addToThis` method, we would do

```js
addToThis.call(obj, 3); // functionname.call(obj, functionarguments);
```

Where we do a `call` and we pass as our first parameter our `obj`, and the second parameter is whatever we want to add.

_NOTE: the first parameter has to be our object._

<hr>

Now say we want to pass multiple arguments instead of just one.

```js
var obj = {
  num: 2
};

var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

addToThis.call(obj, 1, 2, 3);
```

.call attaches the `addToThis` to our `obj` temporarily, runs it then gives the result back.

#### Apply

`apply` is very similar.

Instead we will create an array, and pass this array as our arguments.

```js
var obj = {
  num: 2
};

var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

var arr = [1, 2, 3];

addToThis.apply(obj, arr);
```

Syntax wise, theres not much difference and it does pretty much the exact same thing.

<hr>

#### Bind

Bind is a little different. When we bind our obj to the addToThis function, assign it to a variable, it attaches addToThis as a methed to our obj and allows us to use this later.

```js
var obj = {
  num: 2
};

var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

var arr = [1, 2, 3];

var bound = addToThis.bind(obj); // we create bound variable to execute later

// we can now use our bound variable and pass our arguments to get our value in our code
bound(1, 2, 3);
```

#### So to recap

We have an object.

We can call using function name .call, we pass in arguments.

We can apply using function name .apply, passing an array as our arguments.

We can bind using function name .bind, passing the object itself, which returns a bound function. We can execute this bound function at a later time by passing arguments.
