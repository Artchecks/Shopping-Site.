import Vue from 'vue'
import Vuex from 'Vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    selectedCategory: null
  },
  getters: {
    products: state => state.products,
    shoppingCart: state => state.cart,
    // creates a list of all the category types, and prints to SideBar.
    categories: (state) => {
      return state.products.reduce((catList, product) => {
        if (catList.indexOf(product.category) === -1) {
          catList.push(product.category)
        }
        return catList
      }, [])
    },
    // deals of day, generates 4 random items to display
    dealsOfDay: (state) => {
      return state.products.sort(() => 0.5 - Math.random()).slice(0, 4)
    },
    // ensures each item is the correct selected category
    productsByCategory: (state) => {
      return (category) => {
        return state.products.filter(product => {
          return product.category === category
        })
      }
    },
    // displays selected category
    selectedProducts: (state, getters) => {
      return getters.productsByCategory(state.selectedCategory)
    }
  },
  mutations: {
    pushProducts (state, products) {
      state.products = products
    },
    setSelectedCategory (state, category) {
      state.selectedCategory = category
    },
    // pushes selected items to Shopping Cart
    addToCart: (state, product) => {
      state.cart.push(product)
    }
  },
  actions: {
    fetchProducts ({commit}) {
      axios.get('http://www.json-generator.com/api/json/get/bTHWQacIFu?indent=2')
        .then((response) => {
          console.log(response.data.products)
          commit('pushProducts', response.data.products)
        })
        .catch(error => alert(error))
    }
  }
})
