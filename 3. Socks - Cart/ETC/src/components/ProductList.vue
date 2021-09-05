<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li :v-for= "product in products">{{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>

<script>

import shop from '@/api/shop'; // IMPORTING OUR FAKE API SERVER
import store from '@/store/index.js'
export default {
  computed: {
   products () {
     return store.state.products
   } 
  },
  created() { // THIS WILL TAKE INFO FROM OUR FAKE API SERVER
    shop.getProducts(products => {
      store.commit('setProducts',products) 
    });
  }
}
</script>
