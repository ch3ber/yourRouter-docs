# getQueryParams

Returns all [query params](../core-concepts/query-params.md) of the current route.

## Code example

For this example you add the route `/product` to your router and you are in `/product?name=foo,category=bar` route, if you want to know the name and the cagegory of the current product you should use the `getQueryParams()` method.

```js
router.addRoute('/product', () => {
  const queryParams = router.getQueryParams()

  console.log(queryParams) // expected output: { name: 'foo', category: 'bar' }
})
```
