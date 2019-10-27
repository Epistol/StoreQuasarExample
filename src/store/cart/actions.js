export function addToCart ({ commit, state }, itemId) {
  // look if our article array already have the item id store
  console.log(state.articlesIds)
  // eslint-disable-next-line no-undef
  // let product = _.find(state.articlesIds, ['itemId', itemId])
  let product = state.articlesIds.find(function (o) { return o.itemId === itemId })
  if (product) {
    commit('increaseItemQuantity', product)
  } else {
    commit('addProductToCart', itemId)
  }
}
