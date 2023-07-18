---
sidebar_position: 3
---
# redirectTo
Redirect your URL to another URL without reloading the browser.

## Use example
For this example you are in `/books/drama` and click on a button that changes the url to `/books/history`.

```js title="src/index.js"
import { Router } from 'yourrouter'

const router = Router.getInstance()

const goToSectionButton = document.querySelector('#myButton')

goToSectionButton.addEventListener('click', () => {
  // highlight-next-line
  router.redirectTo('/books/history')
})
```