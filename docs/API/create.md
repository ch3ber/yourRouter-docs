---
sidebar_position: 1
---

# create

Create a route and return the instance.

```js title="src/index.js"
Router.create({
  path404: "/notFound",
  renderId: "#app",
});
```

## Configuration

- **path404**: Name of route with 404 HTTP status code.
- **renderId**: Optional id where the templates will be rendered. `renderId` use `document.querySelector()` to find the id, you can use `#app` in your html file to select an id or `.app` to css class.
