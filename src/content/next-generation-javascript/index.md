---
title: "Next Generation Javascript"
date: "2019-05-04"
---

Diving into `let` and `const`. Let and const are different ways of creating variables. `var` is the traditional way of creating variables in javascript. With es6, `let` and `const` were introduced. `let` is the new `var`, use `const` when you want to apply something with a constant value that does not change.

```js
var myName = "Jason";
console.log(myName); // Jason

myName = "Bill";
console.log(myName); // Bill
```

If we change the `var` keyword to `let`, it will work the exact same as we can reassign a `let` value.

```js
let myName = "Jason";
console.log(myName); // Jason

myName = "Bill";
console.log(myName); // Bill
```

However if we change the variable to be a const, we will get an error because we are attempting to reassign a constant variable.

```js
const myName = "Jason";
console.log(myName); // Jason

myName = "Bill"; // 'Error' TypeError: Assignment to constant variable.
```

<br>
<hr>

#### Arrow Functions

Arrow functions have a different syntax for creating JavaScript functions. The traditional way to create a function in JavaScript is like so

```js
function myFunc() {
  ...
}
```

While arrow functions are defined with this type of syntax

```js
const myFunc = () => {
  ...
}
```

Here we store the function in a constant, with an empty () where our arguments would be passed, and then a fat arrow, and then the function body. This solves a lot of the issues with the `this` keyword in JavaScript. When we use `this` inside of an arrow function, it will always keep its context and not change surpringly on run time.

```js
function printMyName(name) {
  console.log(name);
}

printMyName("Jason");
```

Here is a traditional way on writing a function that prints a users name, where a string is passed to the function as an argument, and the function simply console logs the name.

If we wanted to rewrite this as an arrow function, the syntax would look like

```js
const printMyName = name => {
  console.log(name);
};

printMyName("Jason");
```

If you only have one argument being passed to an arrow function, the parentheses are optional, like so

```js
const printMyName = name => {
  console.log(name);
};

printMyName("Jason");
```

Additionally, if we only have a return statement, we can shorten our arrow functions from an example like this where we have a function called multiply, where we muliply the number passed to our function by 2, returning the product.

```js
const multiply = number => {
  return number * 2;
};

console.log(multiply(2));
```

We can shorten this to

```js
const multiply = number => number * 2;

console.log(multiply(2));
```

Note that since we are only passing one argument to our arrow function, we don't need the parentheses if we don't want () around our argument, and we also removed the `return` keyword as well as the curly braces.

<br>
<hr>

#### Imports and Exports (Modules)

JavaScript code typically is split up over multiple files. Inside of a JavaScript file we can import content from another file, so that the JavaScript files themselves know their dependencies.

```js
// person.js file
const person = {
  name: "Jason"
};

export default person;
```

Here we have a person object in our person.js file, and we see we export our person object so it can be used in other JavaScript files.

Now lets say we have another file called utility.js

```js
// utility.js

export const clean = () => {...};

export const baseData = 10;
```

Here we export a clean function and a baseData constant variable.

Now we can import these in our App.js for example

```js
import person from "./person.js";

import { baseData } from "./utility.js"; // curly braces here are to specifically target exports from the utility.js file, these are named exports
import { clean } from "./utility.js";
```

And we could also import both imports from our utility.js file on one line, like so

```js
import { baseData, clean } from "./utility.js";
```

<br>
<hr>

#### Classes

A class is created with the `class` keyword, and can contain properties and methods.

Methods are simply functions attached to classes where propeties are variables attached to classes you could say.

```js
class Person {
  name = 'Jason'       // property
  call = () => {...}   // method
}
```

A class is instantiated with the `new` keyword. Classes are kind of a more convienent way of created constructor functions.

```js
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);
```

For example here we create a new class named Person, then we have curly braces to mark the class body. Now we can start adding properties. We can begin by adding a constructor, which will be a default function that will be executed whenever you instantiate a class. Then we create properties within the constructor named this.name. We also create a method called printMyName and it will console.log the this.name property.

```js
class Person {
  constructor() {
    this.name = "Jason";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();

person.printMyName();
```

Classes can also inherit. So we can create another class `Human`. Notice that we have to extend Human on our Person class, we now inherit our Human properties and methods. Another note is that if we are extending another class and we are implmenting the constructor, then we have to add the `super` method, which is a keyword that simply executes the parent constructor

```js
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Jason";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();

person.printMyName();
person.printGender();
```

Classes are used by react to create components. Classes are just blueprints for JavaScript objects and are very compareable to constructor functions where inheritance is comparable to prototypes.

<br>
<hr>

#### Classes, Properties & Methods

Next generation JavaScript offers a differnet syntax of initializing properties and methods.

We've already seen that properties are like variables attached to classes and objects, methods are like functions attached to classes and objects.

Here we learned how we can set up properties in a constructor function like so.

```js
constructor() {
  this.myProperty = 'value'
}
```

However there is a more modern syntax now which spares us using this constructor function.

Using es7 we can assign a property directly within a class. So we skip the constructor function call. Behind the scenes this will still be transformed to use constructor functions.

```js
myProperty = "value";
```

The same goes for how we set up methods, we can simply think of a method as a property which stores a function as a value.

```js
// es6
myMethod(){...}

// es7
myMethod = () => {...}
```

The great advantage of this syntax is since you use an arrow function as a property value here, you have no problems with the `this` keyword.

So now going back to our Human and Person classes we had worked with in our Classes section on this read, we can remove our constructor function name and set the property directly, as well as change the printGender function to an arrow function. We do the same for the Person class, we remove the this.name and just set it to name, and turn the printMyName into an arrow function.

```js
class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Jason";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();

person.printMyName();
person.printGender();
```

<br>
<hr>

#### Spread & Rest Operators

These operators are just `...` three dots.

Spread is used to split up an array of elements OR object properties.

For example if we had an old array, and wanted to make a new array, with the old array included in our new array, with elements 1 and 2 added to the end of the array.

Same with an object, we create a newObject and pull in the properties and values of the oldObject, and add a newProp with a value of 3 added to it.

```js
const newArray = [...oldArray, 1, 2];
const newObject = { ...oldObject, newProp: 3 };
```

The Rest operator is the same operator, but used in a differently. Rest is used to merge a list of function arguments into an array. We use it in a function argument list.

```js
function sortArgs(...args) {
  return args.sort();
}
```

sortArgs recieves an unlimited amount of arguments, these arguments will all be merged together into an array. So then we can apply array methods to our argument list, or do whatever we want to do with our convienently stored arguments.

Example using the spread operator. We have an array of numbers, and an array of newNumbers, which uses the spread operator to add the values from our numbers array to the beginning of the newNumbers array, and adds 4 and 5 at the end of our newNumbers array.

```js
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // 1, 2, 3, 4, 5
```

Now lets look at the same but with an object. We have a person object with a name property defined. And then we have a newPerson object where we use the spread operator to include all of the properties from our person object. When we console log newPerson we see these values being combined into one object.

```js
const person = {
  name: "Jason"
};

const newPerson = {
  ...person,
  age: 30
};

console.log(newPerson);
```

Now the rest operator, which is used less, is used in a function. Here we pass our args as a parameter to our arrow function, notice the three dots `...` and from there we can return the args and we use the built in filter method, which filter exectutes a function on every element in the passed in array.

```js
const filter = (...args) => {
  return args.filter(element => element === 1);
};

console.log(filter(1, 2, 3)); // [1]
```

We log out [1] as an array. So to recap, we passed in three parameters to our filter arrow function, used the rest operator to put those three values into an array, and used the built in JavaScript filter method to return the elements that are equal to the number of 1.

<br>
<hr>

#### Destructuring

Destructuring allows you to easily extract array elements or object properties and store them in variables.

Destructirng allows you to pull out single elements or properties and store them in variables or arrays.

So an example where we can use destructuring to pull our values from an array of numbers, we have num1 and num2 which get defined as variables, and they look at the first 2 indexes in our array.

```js
const numbers = [1, 2, 3];

[num1, num2] = numbers;
console.log(num1, num2); // 1, 2
```

If you wanted the first and last element and skip the middle element here. We would provide an empty value in our destruction.

```js
const numbers = [1, 2, 3];

[num1, , num3] = numbers;
console.log(num1, num3); // 1, 3
```

Object destructing example

```js
{ name } = { name: 'Jason', age: 30 }
console.log(name); // Jason
```
