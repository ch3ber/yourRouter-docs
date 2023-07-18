---
sidebar_position: 3
---

# addRoute

Add a new route to your app. If you want to render a template when the route is loaded you must return a function that returns your template. If you want to know more about the route types you can read [core concepts/static routes](../core-concepts/static-routes.md) and [core concepts/dynamic routes](../core-concepts/dynamic-routes.md)

You can use the `addRoute()` method to add a route in your router.

```js
import Router from "yourrouter";

const router = Router.get()

router.addRoute("/", () => {
  console.log("Hello world");
});
```

## Complete example

```js title="src/index.js"
import Router from "yourrouter";

const config = {
  path404: "/notFound",
};

const router = Router.create(config);

router.addRoute("/", () => {
  console.log("welcome to the main route!");
});

router.addRoute("/foo", () => {
  console.log("welcome to the foo route!");
});
```

### With template rendering

See [Core concepts/template rendering](../core-concepts/template-rendering.md) to know more about template rendering.

:::note

To **active** the template rendering you should set the `renderId` in your Router config.

:::

#### Create your template.

```js title="src/templates/Home.js"
export const Home = () => {
  // template logic

  const view = `
    <p>Home page!</p>
  `;
  return view;
};
```

#### Add a route for render your template.

```js title="src/index.js"
import Router from "yourrouter";
// highlight-next-line
import { Home } from "src/templates/Home"; // template to load

Router.create({
  path404: "/notFound",
  // highlight-next-line
  renderId: "#app", // or you can use a css class with .app
});
const router = Router.get();

router.addRoute("/", () => {
  console.log("Home page");

  // highlight-next-line
  return Home; // You must return a function
});
```
