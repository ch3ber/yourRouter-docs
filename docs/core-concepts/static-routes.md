# Static routes

Static routes are routes that will always have the same path and can be accessed from anywhere in the application.

You can use a static route using the method `addRoute()` of your router instance. To know more about the `addRoute` method you can read [API/addRoute](../API/addRoute.md).

## Code example

For this example we will add a new route in /books/history to show all history books.

```js title="src/index.js"
import Router from "yourrouter";

const router = Router.get();

// highlight-start
// add the route /books/history
router.addRoute("/books/history", () => {
// highlight-end
  console.log("You are in the history category!");
});
```
