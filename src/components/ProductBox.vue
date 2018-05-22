<template>
  <div class="boxes">
    <img :src="product.imgUrl" width="200px" height="200px">
    <br>
    {{product.item}} - {{product.price | currencyFmt}}
    <span v-show="showDescription"><br>{{product.description}}</span>
    <br>
    <button @click="showDescription = !showDescription">Details</button>
    <button @click="addToCart(product)">Add to Cart</button>
   </div>
</template>
<script>
export default {
  name: 'ProductBox',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showDescription: false
    }
  },
  methods: {
    addToCart (product) {
      this.$store.commit('addToCart', product)
    }
  }
}
</script>
