export function getCartIds (state) {
  if (state.articlesIds.length > 0) {
    // eslint-disable-next-line no-undef
    return _.pluck(state.articlesIds, 'itemId')
  }
  return null
}

export function getCart (state) {
  if (state.articlesIds.length > 0) {
    // eslint-disable-next-line no-undef
    return state.articlesIds
  }
  return null
}
