<template>
  <div>
    <p id="primary">categories</p>
    <p class="cata" @click="setCategory(null)">Random Deals</p>
    <p class="cata" v-for="category in categories" :key="category" @click="setCategory(category)"> {{ category }} </p>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  },
  methods: {
    setCategory (category) {
      this.$store.commit('setSelectedCategory', category)
    }
  }
}
</script>

<style scoped>
div {
  margin-top: 130px;
  height: 100%;
  width: 150px;
  position: fixed;
  z-index: 1;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  background-color: #4183E0;
  text-align: center;
}
#primary {
  text-align: center;
  border-bottom: 1px solid black;
  color: #000;
  font-size: 1.25rem;
}

.cata {
  color: #fff;
}

.cata:hover {
  transform: scale(1.10);
}
</style>
