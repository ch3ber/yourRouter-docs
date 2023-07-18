---
sidebar_position: 2
---

# ⏱️ Quick Setup

## Installation
You can chose the best installation method for your project.

```bash
  npm i yourrouter
```

```bash
  pnpm add yourrouter
```

```bash
  yarn add yourrouter
```

## Import yourrouter

Import yourrouter to your index file.

```js
// src/index.js

import Router from "yourrouter";
```

## Set your configuration

Set the configuration of your Router to start creating routes using `create()` method.

```js title="src/index.js"
Router.create({
  path404: "/notFound",
  renderId: "#app",
});
```

:::info

**path404**
Name of route with 404 HTTP status code.

**renderId**
Optional id where the templates will be rendered. `renderId` use `document.querySelector()` to find the id, you can use `#app` in your html file to select an id or `.app` to css class.

:::

## Execute code in a route

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

## Get the Router instance

You can get the instance of your Router in any file using the `get()` method.

```js title="src/pages/about/index.js"
const router = Router.get();
```

## Template rendering 🏭

Render the content of your route in the HTML. You should return a funtion into addRoute callback, this function can be sync or async and should return the template to render in the document.

:::note

To active the template rendering you should set the `renderId` in your Router config.

:::

```js title="src/index.js"
import Router from "yourrouter";

const router = Router.create({
  path404: "/notFound",
  renderId: "#app", // use #app to id and .app to css class
});

router.addRoute("/", () => {
  console.log("Hello home page");

  return () => "<p>Home page!</p>"; // function to that return's the teamplate to render in your page
});
```

### Example with template rendering disable

```js title="src/index.js"
import Router from "yourrouter";

const router = Router.create({
  path404: "/notFound",
});

router.addRoute("/", () => {
  console.log("Hello home page");

  // render the content in the #app element
  document.querySelector("#app").innerHTML = "<p>Home page!</p>";
});
```
