<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" v-for="post in posts" v-bind="{post}" :key="post.id">
      <img :src="post.thumbnailUrl"  :alt="post.title"/>
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label> {{post.title}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-btn @click="addToCart(post.id)" :loading="loadingItem">ADD TO CART
              <template v-slot:loading>
                <q-spinner-radio />
              </template>
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      loadingItem: false
    }
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    addToCart (id) {
      this.$store.commit('cart/addToCart', id)
    }
  }
}
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 250px
</style>
