# Introduction

This project provides a full typescript support. You can use `yourrouter` in any typescript project.

If you found an issue please reach out to us at @ch3ber_dev on twitter.

## Example of code in typescript project

All _yourrouter_ types can be found in `yourrouter/types`.

```ts title="src/index.ts"
import Router from "yourrouter";
// highlight-next-line
// Import types
import { RouterConfig, Template } from "yourrouter/types";

// highlight-next-line
// Set the router config
const config: RouterConfig = {
  path404: "/notFound",
  renderId: "#app",
};

// highlight-next-line
// Create router and get the instance
const router: Router = Router.create(config);

// highlight-next-line
// Template to render
const homePage: Template = () => {
  return "<p>home</P>"
};

router.addRoute("/", () => {
  console.log("welcome to the main route!");

  return homePage
});

router.addRoute("/foo", () => {
  console.log("welcome to the foo route!");

  return () => "<h1>Foo route</h1>"
});
```
