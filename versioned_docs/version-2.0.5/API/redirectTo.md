---
sidebar_position: 4
---
# redirectTo

You can use the `redirectTo()` method to redirect the user to another URL without reloading the browser.

```js title="src/section.js"
import Router from 'yourrouter'

const router = Router.get()

console.log(window.location.hash) // Output: #/foo

// highlight-next-line
router.redirectTo('/bar')

console.log(window.location.hash) // Output: #/bar
```

:::info

You can pass the route with (`'#/foo'`) and without hash (`/foo`).

:::

## Example
For this example you are in `/books/drama` and click on a button that changes the url to `/books/history`.

```js title="src/section.js"
import Router from 'yourrouter'

const router = Router.get()

const goToSectionButton = document.querySelector('#myButton')

goToSectionButton.addEventListener('click', () => {
  // highlight-next-line
  router.redirectTo('/books/history')
})
```
