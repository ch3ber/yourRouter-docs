# Dynamic routes

They allow to receive data and change their path name depending on their configuration. They can be accessed from any part of the app.

You can use a dynamic route using the method `addRoute()` of your router instance. To know more about the `addRoute` method you can read [API/addRoute](../API/addRoute.md).

## Code example

For this example we will add a new route in `/books/history` to show all history books, but if we want know what is the specific book we pass a `idBook` at the end of the route, like this `/books/history/:idBook`.

```js title="src/index.js"
import Router from "yourrouter";

const router = Router.get();

// static route
router.addRoute("/books/history", () => {
  console.log("You are in the history category!");
});

// highlight-start
// add the route /books/history/:idBook
// The: idBook is the id to know which book the user wants to access.
router.addRoute("/books/history/:idBook", () => {
// highlight-end
  console.log("You are in the detail of a book in the history category!");

  // highlight-next-line
  const param = router.getRouteParam(); // returns value of :idBook
  console.log("The route param is: ", param);
});
```
