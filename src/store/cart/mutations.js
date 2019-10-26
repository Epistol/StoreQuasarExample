export function addToCart ({ commit, state }, itemId) {
  // look if our article array already have the item id store
  // eslint-disable-next-line no-undef
  let product = _.find(state.cart.articlesIds, ['id', itemId.id])
  console.log(product)
  if (product) {
    commit('increaseItemQuantity', product)
  } else {
    commit('addProductToCart', itemId)
  }
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

export function addProductToCart (state, itemId) {
  state.articlesIds.push({
    itemId,
    quantity: 1
  })
}
