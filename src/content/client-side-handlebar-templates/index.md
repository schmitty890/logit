---
title: "Client Side Handlebar Templates"
date: "2019-04-15"
---

In todays world, webapps rely more on JavaScript to create dynamic user interfaces. Some sites may only need jQuery for simple dom maniuplation and insertion, others may need more of a templating engine especially if your page is updating data consistantly.

Handlebars helps you with that by dynamically generating your HTML. It helps you get into using the View/Controller pattern while keeping your code cleaner and more maintainable.

#### USING HANDLEBARS

First thing to do in order to start using handlebars on the client, is to install it in your page, we can do so with a handlebars cdn link.

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js" />
```

Handlebars is now ready to be used on the page.

The way handlebars works is that it generates HTML content from JSON data. In order for the browser to recognize a chunk of script as a Handlebars template we need to give it the type of text/x-handlebars-template and also an ID in order to reference it later. The markup for creating a simple template that will get someone’s name from JSON data and show it in your HTML is:

```js
<ul class="updates">
  <script id="template" type="text/x-handlebars-template">
    <li>
      <h2>{{ name }}</h2>
    </li>
  </script>
</ul>
```

Here we place the {{name}} to read the property from the JSON object. Our JSON object will be a simple object that looks like this:

```js
var data = {
  name: "Jason Schmitt"
};
```

All we’ve done so far was create a simple JSON object that only contains one property called name and the value of Jason Schmitt and this value is what we want to place in our HTML template, but before that we need to compile the code we just created and append it to the HTML and for that we use:

```js
var template = Handlebars.compile($("#template").html());
$(".updates").append(template(data));
```

Here, we compile whatever HTML is inside of the template script tag and then append it to the updates unordered list, passing data as a parameter. This is our JSON object we are passing to our handlebar template. We can add as many properties as we'd like to our JSON object, so lets add some more properties.

```js
var data = {
  name: "Jason Schmitt",
  age: 30,
  job: "Front end web developer",
  location: "New York"
};
```

Now in order to place these new parameters on our page we need to update our HTML like so:

```js
<li>
  <h2>{{ name }}</h2>
  <p>{{ age }}</p>
  <span>
    Job: {{ job }} - In: {{ location }}
  </span>
</li>
```

As you can see handlebars works in a very simple manner and this is fine for now but what if we want to add more than one user to our JSON object, like so:

```js
var data = {
  updates: [
    {
      name: "Jason Schmitt",
      age: 30,
      job: "Front end web developer",
      location: "New York"
    },
    {
      name: "John Doe",
      age: 25,
      job: "Lurker"
    }
  ]
};
```

After we place an array inside our JSON object and try to reload the page, we are not getting our new users. We need to place the handlebars built in each statement around our html we want to loop over.

```js
{{#each updates}}
  <li>
    <h2>{{name}}</h2>
    <p>{{age}}</p>
    <span>
      Job: {{job}} - In: {{location}}
    </span>
  </li>
{{/each}}
```

If you try reloading now you see that you get both the users in different list items.

One problem with our code is that John Doe does not actually provide us with his location but we still render the “- In:” and after that we have a blank space. This happens because we didn’t check for the existence of a location and we can do that using handlebars if statement, like so:

```js
{{#each updates}}
  <li>
    <h2>{{name}}</h2>
    <p>{{age}}</p>
    <span>
      Job: {{job}}
      {{#if location}}
        - In: {{location}}
      {{/if}}
    </span>
  </li>
{{/each}}
```

Now you can see that if we don’t set a location for the user none of the HTML will be rendered and that is exactly what we want. We can also have a message saying that this user did not provide his location by using and else statement like so:

```js
{{#if location}}
  - In: {{location}}</span>
{{else}}
  - Location not provided by the user</span>
{{/if}}
```

#### CONCLUSION

This is only some of what Handlebars is capable of out of the box. We have potential to add much more, but this is an option to render data through templates if you have data that flows through your UI views.
