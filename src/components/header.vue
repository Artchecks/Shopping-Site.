<template>
 <div>
 <header>
   <h1> {{ title }} </h1>
   <p> {{ info }} </p>
 </header>
 </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Congo',
      info: 'Welcome to the 2nd largest online shopping application'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
header {
  z-index: 2;
  position: fixed;
  margin: 0px;
  background-color: gray;
  width: 100%;
  height: 150px;
  top: 0;
  left: 0;
  right: 0;
}
h1, p {
  font-family: helvetica;
  padding-top: 15px;
  color: #4183E0;
  text-align: center;
  font-weight: bolder;
}

h1 {
  font-size: 2rem;
  text-shadow: 2px 2px black;
}

p {
  font-size: 1.2rem;
  text-shadow: 1.5px 1.5px black;
}
</style>
