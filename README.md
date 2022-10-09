
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

## Technologies
<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.icons8.com/color/452/typescript.png" alt="Typescript" width="40" height="40"/> </a>
<a href="https://docusaurus.io/" target="_blank"> <img src="https://d33wubrfki0l68.cloudfront.net/ea8e37a6a30e9c260a8936d95c579af4a2dd3df7/6ee7e/img/docusaurus_keytar.svg" alt="Typescript" width="40" height="40"/> </a>




# Quick Setup

Start with the quick configuration of yourrouter.

## Import yourrouter

Import yourrouter to your index file.

```js title="src/index.js"
import { Router } from "yourrouter";
```

## Set your configuration

Set the configuration of your Router to start creating routes using `createInstance()` method.

```js title="src/index.js"
Router.createInstance({
  path404: "/notFound", // name of route with 404 HTTP status code
  renderId: "#app", // Id where the templates will be rendered
});
```
### path404
Name of route with 404 HTTP status code.
### renderId
Id where the templates will be rendered. Use #app to id and .app to css class.
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

Add a new route to your app

[addRoute](./docs/API/Router/addRoute.md)

[getRouteParam](./docs/API/Router/getRouteParam.md)

[redirectTo](./docs/API/Router/redirectTo.md)



# Examples list
## Devstore
SPA created without javascript frameworks

- Repo: https://github.com/ch3ber/devstore
- Live demo: https://ch3ber-devstore.netlify.app

## Feedback

If you have any feedback, please reach out to us at @ch3ber_dev on twitter

## Contributing

[Contribution guideline](./CONTRIBUTING.md)

## Authors

- [@ch3ber](https://www.github.com/ch3ber)
