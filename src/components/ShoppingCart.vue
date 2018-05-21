<template>
<div id="cart">
  <div id="cart-box" v-for="(product, index) in shoppingCart" :key="index">
    <img :src="product.imgUrl" width="200px" height="200px"><br>
    {{product.item}} - {{product.price}}
  </div>
  {{ total }}
  </div>
</template>

<script>
export default {
  data: {
      show: false,
      taxes: 0,
      total: 0
    },
  computed: {
    shoppingCart () {
      return this.$store.getters.shoppingCart
    }
  },
  totalPrice () {
    // this.total = this.$store.getters.shoppingCart.forEach(product.price + product.price.length)
  }
}
</script>

<style scoped>
#cart {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: space-around;
  padding-top: 150px;
  margin-left: 150px;
  width: 100%;
  height: 100%;
}
#cart-box{
  overflow-wrap: normal;
  text-align: center;
  background-color: lightgray;
  border-radius: 15px;
  max-width: 200px;
  margin: 10px;
  margin: auto;
  list-style-type: none;
  color: #4183E0;
}
.text {
  position: fixed;
  bottom: 15;
  right: 15;
}
.total {
  background-color: #000;
  position: fixed;
  bottom: 8;
  right: 8;
  color: #4183E0;
}
</style>
