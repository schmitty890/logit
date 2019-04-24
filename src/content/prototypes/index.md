---
title: "Prototypes"
date: "2019-04-24"
---

Lets say you have food in your webapp, and you want to make more kinds of food. And we really want to add waffles and carrots to our program. Well, `food` would be our `prototype` for our `waffles` and `carrots`.

So lets create our `food` object.

```js
const food = {
  init: function(type) {
    this.type = type;
  },
  eat: function() {
    console.log(`you ate the ${this.type}`);
  }
};
```

Now that we have our food object, we can create our new `food`, which is a `waffle`.

```js
food.init("waffle");
food.eat();
```

Now when we run this in the console of our browser, we can see we are logging `you ate the waffle`.

Cool. But what if we want more other foods instead of just waffles? This is where `Object.create` comes in.

```js
const waffle = Object.create(food);
waffle.init("waffle");
waffle.eat();

const carrot = Object.create(food);
carrot.init("carrot");
carrot.eat();
```

Now we have a waffle and a carrot object, created from the same `food` prototype.

Now lets add to our food prototype this `food.eat` function

```js
food.eat = function() {
  console.log(`YOU TOTALLY JUST ATE THE ${this.type.toUpperCase()}`);
};
```

and now if we run

```js
waffle.eat();
carrot.eat();
```

We get our new method in all CAPS. This means `Object.create()` does not create copies of our food object. Instead it creates a new empty object for `waffle` and `carrot`, and assigns `food` to be a fallback. So whenever our `waffle` does not have method or property that we are calling, by default it checks the prototype object, the `food` object. Then if that property or method is there, it will use that method. So `waffle` and `carrot` will only fall back to food if it lacks the property being called. If it has the property, it will use that property.

We can also use prototypes to do type checking.

```js
console.log("waffle is food ", food.isPrototypeOf(waffle));
```

Here we see that the `waffle` is a `prototype` of our `food` object we created, as the boolean value of `true` is returned.
