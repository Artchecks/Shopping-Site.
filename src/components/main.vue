<template>
 <div id="flexy">
   <product-box v-if="selectedProducts.length === 0" v-for="product in dealsOfDay" :key="product.sku" :product="product" />
   <product-box v-for="product in selectedProducts" :key="product.sku" :product="product"/>
   <router-link to="/shopping-cart"><img id="cartsie" @click="show = !show" src="https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_960_720.png" alt="Shopping Cart"></router-link>
 </div>
</template>

<script>
import ProductBox from './ProductBox'
import ShoppingCart from './ShoppingCart'
// populates the list.
export default {
  name: 'Main',
  components: {
    'product-box': ProductBox,
    'shopping-cart': ShoppingCart
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    dealsOfDay () {
      return this.$store.getters.dealsOfDay
    },
    selectedProducts () {
      return this.$store.getters.selectedProducts
    }
  },
  methods: {
  }
}
</script>

<style scoped>
h1 p {
  color: #4183E0;
  position: center center;
}

#flexy {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: space-around;
  padding-top: 150px;
  margin-left: 150px;
  width: 100%;
  height: 100%;
}

.boxes {
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

#cartsie {
  position: fixed;
  width: 50px;
  height: 50px;
  padding-right: 25px;
  padding-bottom: 125px;
  right: 0;
  bottom: 0;
}

#cartsie:hover {
  transform: scale(1.10);
  -webkit-filter: drop-shadow(4px 4px 1px #222);
    filter:         drop-shadow(4px 4px 1px #222);
}
</style>
