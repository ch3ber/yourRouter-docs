---
sidebar_position: 1
---

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
