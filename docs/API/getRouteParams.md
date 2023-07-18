---
sidebar_position: 5
---

# getRouteParams

Method to get information from the URL in a dynamic path.

## Code example

For this example you are in the dynamic route `/product/:id/detail` and your current path is `/product/AFZ2LS8/detail` the expected output of `getRouteParams()` method is `{ id: 'AFZ2LS8' }`.

```js
router.addRoute('/product/:id/detail', () => {
  // highlight-next-line
  const params = router.getRouteParams();

  console.log(params) // expected output: { id: 'AFZ2LS8' }
})
```

:::tip

You can use destructuring to extract only the necessary param.

`const { id } = router.getRouteParams();`

:::

## Complete example with template rendering

Continuing with the last example, your code should look something like this.

```js title="src/index.js"
import Router from "yourrouter";

const router = Router.create({
  path404: "/notFound",
  renderId: "#app",
});

// template to get the product info
const DynamicRoute = () => {
  // highlight-next-line
  const { id } = router.getRouteParams();

  const view = `
    <main>
      <h1>Route Params</h1>
      <p>The product id is: ${id}</p>
    </main>
  `;
  return view;
};

router.addRoute("/product/:id/detail", () => {
  return DynamicRoute;
});
```
