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
  computed: {
  },
  methods: {
    addToCart (product) {
      if (product.stock <= 0) {
        alert('That item is currently out of stock.')
      } else {
        this.$store.commit('reduceStock', product)
        this.$store.commit('addToCart', product)
      }
    }
  }
}
</script>
<style scoped>
#haha {
  display: none;
  width: 350px;
  height: 350px;
  background-color: red;
  color: white;
}
</style>
