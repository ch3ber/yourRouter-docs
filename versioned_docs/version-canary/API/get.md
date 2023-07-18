---
sidebar_position: 2
---

# get

## Get the Router instance

You can get the instance of your Router in any file using the `get()` method.

### Example

Supose that you create your router in `src/index.js` and you want acces to your router instance in another file.
You can use the `get()` method to acces to the instance.

```js title="src/index.js"
import Router from "yourrouter";

const config = {
  path404: "/notFound",
  renderId: "#app",
};

const router = Router.create(config);
```

```js title="src/pages/about/index.js"
const router = Router.get();
```
