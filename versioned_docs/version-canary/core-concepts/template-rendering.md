# Template rendering

Render the content of your route in the HTML. You should return a funtion into addRoute callback, this function can be sync or async and should return the template to render in the document.

:::note

To **active** the template rendering you should set the `renderId` in your Router config.

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
