let articlesIds = window.localStorage.getItem('cart')

export default {
  articlesIds: articlesIds ? JSON.parse(articlesIds) : []
}
