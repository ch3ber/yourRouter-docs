---
sidebar_position: 3
---
# Configuration

Set the configuration of your Router using `createInstance()` method.

## Create config

```js title="src/index.js"
import { Router } from 'yourrouter'

Router.createInstance({})
```

### path404
Name of route with 404 HTTP status code.

```js title="src/index.js"
import { Router } from 'yourrouter'

Router.createInstance({
  path404: '/notFound'
})
```

### renderId
Id where the templates will be rendered. Use #app to id and .app to css class.

```js title="src/index.js"
import { Router } from 'yourrouter'

Router.createInstance({
  renderId: '#app'
})
```