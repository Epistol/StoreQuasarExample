export function addProductToCart (state, itemId) {
  state.articlesIds.push({
    itemId,
    quantity: 1
  })
}

export function removeProductFromCart (state, itemId) {
  state.articlesIds.splice(state.articlesIds.findIndex(function (i) {
    return i.itemId === itemId
  }), 1)
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

export function saveCart (state) {
  window.localStorage.setItem('cart', JSON.stringify(state.articlesIds))
}
