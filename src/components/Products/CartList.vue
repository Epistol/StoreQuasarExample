<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" v-for="post in posts" v-bind="{post}" :key="post.id">
      <img :src="post.thumbnailUrl"  :alt="post.title"/>
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>{{post.quantity}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>{{post.title}}</q-item-label>
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
import { AxiosInstance as axios } from 'axios'

export default {
  name: 'CartList',
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
  created () {
    this.addToCart(this.pageSelected)
  },
  methods: {
    removeFromCart (id) {
      this.$store.dispatch('cart/removeFromCart', id)
    },
    async getProductFromID (id) {
      this.isLoading = true
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums/' + id)
      this.isLoading = false
      return data
    }
  }
}
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 150px
</style>
