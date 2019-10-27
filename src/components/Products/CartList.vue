<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" v-for="cartElement in this.localData" v-bind="{cartElement}" :key="cartElement.id">
     <q-list bordered class="rounded-borders">
        <q-item>
          <q-item-section side>
            <q-item-label>x {{getItemQtt(cartElement.id)}}</q-item-label>
          </q-item-section>
          <q-item-section thumbnail>
            <img :src="cartElement.thumbnailUrl" :alt="cartElement.title"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{cartElement.title}}</q-item-label>
          </q-item-section>
          <q-item-section center side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="12px" flat dense icon="delete" @click="removeFromCart(cartElement.id)" :loading="loadingItem">
                Remove
                <template v-slot:loading>
                  <q-spinner-radio/>
                </template>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CartList',
  data () {
    return {
      loadingItem: false,
      localData: []
    }
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  created () {
    if (this.posts) {
      this.localData = this.loadProductsFromCart()
    }
  },
  methods: {
    removeFromCart (id) {
      this.$store.dispatch('cart/removeFromCart', id)
    },
    loadProductsFromCart () {
      let localData = []
      this.posts.forEach(function (element) {
        axios.get('https://jsonplaceholder.typicode.com/photos/' + element.itemId)
          .then((r) => {
            element = r.data
            localData.push(element)
            console.log(element)
          })
      })
      return localData
    },
    getItemQtt (id) {
      return this.posts.find(function (i) {
        return i.itemId === id
      }).quantity
    }
  },
  watch: {
    posts: function (newData, oldData) {
      this.localData = this.loadProductsFromCart()
    }
  }
}
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
</style>
