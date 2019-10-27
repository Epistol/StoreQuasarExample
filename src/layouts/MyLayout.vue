<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title to="/">
          Shop App
        </q-toolbar-title>

        <div class="nav-item is-tab" :class="{ 'active-bottom-border': $route.path === '/products' }">
          <q-btn flat class="q-mr-xs" to="/products" label="Products"/>
        </div>

        <div class="nav-item is-tab" :class="{ 'active-bottom-border': $route.path === '/cart' }">
          <div class="field is-grouped">
            <q-btn flat class="q-mr-xs" to="/cart" :label="cartLabel" icon="fa fa-shopping-cart"/>
          </div>
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      model: 'one'
    }
  },
  created () {
    this.$store.watch(
      (state, getters) => getters.articlesIds,
      (newValue, oldValue) => {
        console.log(`Updating from ${oldValue} to ${newValue}`)

        // Do whatever makes sense now
        if (newValue) {
          // eslint-disable-next-line no-undef
          let total = _.reduce(this.$store.state.cart.articlesIds,
            function (memoizer, value) {
              return memoizer + value.quantity
            }, 0)
          return 'Cart (' + total + ')'
        }
      }
    )
  },
  computed: {
    cartLabel () {
      // eslint-disable-next-line no-undef
      let total = _.reduce(this.$store.state.cart.articlesIds,
        function (memoizer, value) {
          return memoizer + value.quantity
        }, 0)
      return 'Cart (' + total + ')'
    }
  }
}
</script>
