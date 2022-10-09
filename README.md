
![Logo](./static/img/full-logo.png)


# yourRouter

A powerful router based on client-side routing

## Features

- Support for dynamic routes
- Doesn't reload the page
- Full typescript support

## Documentation

[Documentation repo](https://github.com/ch3ber/yourRouter-docs)

[Documentation website](https://ch3ber.github.io/yourRouter)


# Installation
### NPM dependencies

```bash
npm i yourrouter
```

### NPM devDependencies

```bash
npm i -D yourrouter
```




# Quick Setup

Start with the quick configuration of yourrouter.

### Import yourrouter

Import yourrouter to your index file.

```js title="src/index.js"
import { Router } from "yourrouter";
```

# Set your configuration

Set up the configuration of your Router to start creating routes using `createInstance()` method.
### Create config

```js title="src/index.js"
import { Router } from 'yourrouter'

Router.createInstance({})
```

### path404
Name of route with 404 HTTP status code.

### renderId
Id where the templates will be rendered. Use #app to id and .app to css class.

```js title="src/index.js"
Router.createInstance({
  path404: "/notFound", // name of route with 404 HTTP status code
  renderId: "#app", // Id where the templates will be rendered
});
```

## Use the router

"Router" use the singleton pattern, you can get the instance of your Router with your config options in any file using getInstance() method.

```js title="src/index.js"
const router = Router.getInstance();
```

## Render a route

Print the content of your route in the HTML.

### Without template rendering

You chose how to render the content.

```js title="src/index.js"
import { Router } from "yourrouter";

Router.createInstance({
  path404: "/notFound",
});
const router = Router.getInstance();

router.addRoute("/", () => {
  console.log("Hello home page");

  // highlight-start
  // render the route content
  document.querySelector("body").innerHTML = "<p>Home page!</p>";
  // highlight-end
});
```

### With template rendering

You can use yourrouter's template rendering support by defining the "renderId" in your configuration.

```js title="src/index.js"
import { Router } from "yourrouter";

Router.createInstance({
  path404: "/notFound",
  // highlight-start
  // important to enable template rendering
  renderId: "#app", // use #app to id and .app to css class
  // highlight-end
});
const router = Router.getInstance();

router.addRoute("/", () => {
  console.log("Hello home page");

  // highlight-next-line
  return () => "<p>Home page!</p>"; // you must return a function
});
```



# addRoute

Add a new route to your app. If you want to render a template when the route is loaded you must return a function that returns your template.

### Without template rendering

```js title="src/index.js"
import { Router } from "yourrouter";

Router.createInstance({
  path404: "/notFound",
});
const router = Router.getInstance();

router.addRoute("/", () => {
  console.log("Home page");

  // highlight-next-line
  document.querySelector("body").innerHTML = "<p>Home page!</p>";
});
```

### With template rendering

```js title="src/templates/Home.js"
const Home = () => {
  // template logic

  const view = `
    <p>Home page!</p>
  `;
  return view;
};
```

```js title="src/index.js"
import { Router } from "yourrouter";
// highlight-next-line
import { Home } from "src/templates/Home"; // your template to load

Router.createInstance({
  path404: "/notFound",
  // highlight-next-line
  renderId: "#app", // or you can use a css class with .app
});
const router = Router.getInstance();

router.addRoute("/", () => {
  console.log("Home page");

  // highlight-next-line
  return Home; // You must return a function
});
```

## Static routes

The static routes are simple to use, use the method `addRoute()` of your router instance. The route that you declare will be available on your app.

Code example:

```js title="src/index.js"
import { Router } from "yourrouter";

const router = Router.getInstance();

// highlight-next-line
router.addRoute("/books/history", () => {
  // add the route /books/history
  console.log("You are in the history category!");
});
```

## Dynamic routes

```js title="src/index.js"
import { Router } from "yourrouter";

const router = Router.getInstance();

// highlight-next-line
router.addRoute("/books/history/:idBook", () => {
  // add the route /books/history/:idBook
  console.log("You are in the detail of a book in the history category!");

  // highlight-next-line
  const param = router.getRouteParam(); // returns value of :idBook
  console.log("The route param is: ", param);
});
```
# getRouteParam

Get information from the URL in a dynamic path.

## How to use?

Imports the Router instance and uses the getRouteParam method that returns the route param.

```js title="src/index.js"
import { Router } from "yourrouter";

const router = Router.getInstance();

const DynamicRoute = () => {
  // highlight-next-line
  const param = router.getRouteParam();
  const view = `<p>The route param is: ${param}</p>`;
  return view;
};
```

## Use example

Complete example of how to use the getRouteParam method.

For this example the dynamic route is `/product/:id` and your current path is `/product/AFZ2LS8` the expected output of getRouteParam method is `AFZ2LS8`.

### Create config

Create the config for your router

```js title="src/index.js"
import { Router } from "yourrouter";

Router.createInstance({
  path404: "/notFound",
});
```

### Create template

Create a template to render your route param.

```js title="src/index.js"
import { Router } from "yourrouter";

const router = Router.getInstance();

const DynamicRoute = () => {
  // highlight-next-line
  const param = router.getRouteParam();
  const view = `
    <main>
      <h1>Route Params</h1>
      <p>The route param is: ${param}</p>
    </main>
  `;
  return view;
};
```

### Render

Render your dynamic route with route param

```js title="src/index.js"
import { Router } from "yourrouter";

const router = Router.getInstance();

router.addRoute("/product/:id", () => {
  return DynamicRoute;
});
```

# redirectTo
Redirect your URL to another URL without reloading the browser.

## Use example
For this example you are in `/books/drama` and click on a button that changes the url to `/books/history`.

```js title="src/index.js"
import { Router } from 'yourrouter'

const router = Router.getInstance()

const goToSectionButton = document.querySelector('#myButton')

goToSectionButton.addEventListener('click', () => {
  // highlight-next-line
  router.redirectTo('/books/history')
})
```

# Examples list
## Devstore
SPA created without javascript frameworks

- Repo: https://github.com/ch3ber/devstore
- Live demo: https://ch3ber-devstore.netlify.app

## Feedback

If you have any feedback, please reach out to us at @ch3ber_dev on twitter


## Authors

- [@ch3ber](https://www.github.com/ch3ber)
