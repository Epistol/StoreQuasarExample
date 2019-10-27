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
            <q-btn flat class="q-mr-xs" to="/cart" label="Checkout" icon="fa fa-shopping-cart"/>
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
  }
}
</script>
