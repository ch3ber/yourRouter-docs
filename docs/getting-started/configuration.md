---
sidebar_position: 3
---
# Configuration

Set the configuration of your Router using `create()` method.

## Create config

```js title="src/index.js"
import Router from 'yourrouter'

const config = {
// your config
}

Router.create(config)
```

### path404

If the router cannot find a route, the user will be redirected to the route for HTTP status code 404.

```js title="src/index.js"
Router.create({
  path404: '/notFound'
})
```

### renderId

Optional id where the templates will be rendered. `renderId` use `document.querySelector()` to find the id, you can use `#app` in your html file to select an id or `.app` to css class.

```js title="src/index.js"
Router.create({
  renderId: '#app'
})
```
