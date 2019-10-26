<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title to="/">
          Shop App
        </q-toolbar-title>
        <q-btn to="/products" label="Products"  color="purple"/>
        <q-btn to="/cart" label="Cart"  color="red"/>
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
