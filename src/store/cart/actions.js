export function addToCart ({ commit, state }, itemId) {
  // look if our article array already have the item id store
  // eslint-disable-next-line no-undef
  let product = state.articlesIds.find(function (o) { return o.itemId === itemId })
  if (product) {
    commit('increaseItemQuantity', product)
  } else {
    if (itemId) {
      commit('addProductToCart', itemId)
    }
  }
}

export function removeFromCart ({ commit, state }, itemId) {
  // look if our article array already have the item id store
  console.log(state.articlesIds)
  // eslint-disable-next-line no-undef
  let product = state.articlesIds.find(function (o) { return o.itemId === itemId })
  if (product) {
    commit('removeProductFromCart', product)
  }
}
