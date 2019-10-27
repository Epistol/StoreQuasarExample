export function addProductToCart (state, itemId) {
  state.articlesIds.push({
    itemId,
    quantity: 1
  })
}

export function increaseItemQuantity (state, product) {
// item references the state so you should be able to increase without state mutation warnings
  if (product.quantity > 0) {
    product.quantity = parseInt(product.quantity) + 1
  }
}

export function decreaseItemQuantity (state, product) {
  if (product.quantity > 0) {
    product.quantity = parseInt(product.quantity) - 1
  }
}
