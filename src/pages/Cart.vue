<template>
  <div>
    <div class="flex flex-center">
      <h1>Cart</h1>
    </div>
    <q-page class="q-mx-auto">
      <template v-if="!cartIds">
        <p>Your cart is empty</p>
      </template>
      <template v-else>
        <cart-list :posts="cart" v-show="!isLoading"></cart-list>
      </template>
    </q-page>
  </div>
</template>
<script>
import CartList from '../components/Products/CartList'

export default {
  name: 'PageIndex',
  data () {
    return {
      isLoading: false,
      posts: [],
      pageSelected: 1
    }
  },
  components: { CartList },
  computed: {
    cartIds () {
      return this.$store.getters['cart/getCartIds']
    },
    cart () {
      return this.$store.getters['cart/getCart']
    }
  }
}
</script>
