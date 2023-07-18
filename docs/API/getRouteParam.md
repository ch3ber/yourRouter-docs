---
sidebar_position: 5
---

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
