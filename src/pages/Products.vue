<template>
  <div>
    <div class="flex flex-center">
      <h1>Products</h1>
    </div>
    <q-page class="q-mx-auto">
      <product-list :posts="posts" v-show="!isLoading"></product-list>
    </q-page>
  </div>

</template>

<script>
import ProductList from '../components/Products/ProductList'
import axios from 'axios'
export default {
  name: 'PageIndex',
  components: { ProductList },
  data () {
    return {
      isLoading: false,
      posts: [],
      pageSelected: 1
    }
  },
  created () {
    this.getProducts(this.pageSelected)
  },
  methods: {
    async getProducts (pageNumber) {
      this.isLoading = true
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos?_page=' + pageNumber + '&_limit=10')
      this.isLoading = false
      this.posts = data
    }
  }
}
</script>
