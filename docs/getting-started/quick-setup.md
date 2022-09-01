---
sidebar_position: 1
---
# Quick Setup
Start with the quick configuration of yourrouter.

## Import yourrouter
Import yourrouter to your index file.

```js title="src/index.js"
import { Router } from 'yourrouter'
```

## Set your configuration
Set up the configuration you needs to start creating routes.

```js title="src/index.js"
Router.createInstance({
  path404: '/notFound', // name of route with 404 HTTP status code
  renderId: '#app' // Id where the templates will be rendered
})
```

## Use the router
"Router" use the singleton pattern, you can get the instance of your Router with your seted config in any file using getInstance() method.

```js title="src/index.js"
const router = Router.getInstance()
```

## Render a route
Print the content of your route in the HTML.

### Without template rendering
You chose how to render the content.

```js title="src/index.js"
import { Router } from 'yourrouter'

Router.createInstance({
  path404: '/notFound',
})
const router = Router.getInstance()

router.addRoute('/', () => {
  console.log('Hello home page')

  // highlight-start
  // render the route content
  document.querySelector('body').innerHTML = '<p>Home page!</p>'
  // highlight-end
})
```

### With template rendering
You can use yourrouter's template rendering support by defining the "renderId" in your configuration.

```js title="src/index.js"
import { Router } from 'yourrouter'

Router.createInstance({
  path404: '/notFound',
  // highlight-start
  // important to enable template rendering
  renderId: '#app' // use #app to id and .app to css class
  // highlight-end
})
const router = Router.getInstance()

router.addRoute('/', () => {
  console.log('Hello home page')

  // highlight-next-line
  return () => '<p>Home page!</p>' // you must return a function
})
```