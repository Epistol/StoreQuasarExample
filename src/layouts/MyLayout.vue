<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title to="/">
          Shop App
        </q-toolbar-title>

        <div class="nav-right nav-menu">
          <q-btn to="/products" label="Products" color="purple"/>

          <div class="nav-item is-tab" :class="{ 'active-bottom-border': $route.path === '/cart' }">
            <div class="field is-grouped">
              <p class="control">
                <router-link to='/cart' class="button is-info">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>
                  <!--                  <span>Checkout ({{itemsInCart}})</span>-->
                </router-link>
              </p>
            </div>
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
// import { mapGetters } from 'vuex'

export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      model: 'one'
    }
  },

  computed: {
    /* itemsInCart () {
        let cart = this.$store.getters.cartProducts
        return cart.reduce((accum, item) => accum + item.quantity, 0)
      } */
  }
}
</script>
