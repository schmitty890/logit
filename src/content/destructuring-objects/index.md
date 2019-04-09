---
title: "Destructuring JavaScript Objects"
date: "2019-04-08"
---

Destructuring is a big part of ES6. The more modern tech tutorials I go through, _especially react ones_, I see destructuring everywhere.

Destructuring is something you probably use daily, just like you probably use let, const, or arrow functions. I myself have primarily destructured variables within my node javascripts, however it could be written in client side javascripts as well.

Destructuring is a javascript expression that allows us to extract data from arrays, objects, maps and sets, into their own variables. In other words, destructring allows us to extract properties from an object or items from an array, multiple at a time.

Look what destructuring actually solves:

In this example, we define an object, and assign variables from the original defined object.

```js
// defined person object
const person = {
  firstName: "Jason",
  lastName: "Schmitt",
  city: "Hamilton",
  state: "New Jersey"
};

// defined variables
const firstName = person.firstName; // Jason
const lastName = person.lastName; // Schmitt
```

This can be fairly repetitive if you have a lot of variables you are defining from an object.

So instead, with destructuring, we can create multiple variables within a single line:

```js
// defined variables
const { firstName, lastName } = person;
```

Above is es6 destructuring syntax, it is create two variables, one named firstName, one named lastName, with properties from the person object. So taking the firstName and lastName property from the person object we've defined, and assigning those values to two new variables to be used in our application.

```js
console.log(firstName); // Jason
console.log(lastName); // Schmitt
```

It is also possible to nest deeper into your object as well while destructuring.

For example if we have

```js
const person = {
  firstName: "Jason",
  lastName: "Schmitt",
  city: "Hamilton",
  state: "New Jersey",
  links: {
    web: {
      blog: "jasonschmitt.io",
      portfolio: "thejasonschmitt.com",
      anotherLink: "anotherlink.com"
    }
  }
};
```

As seen here, we can assign variables from nested levels deep within the object.

```js
const { portfolio } = person.links.web; // thejasonschmitt.com
```
