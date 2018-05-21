<template>
 <footer>
   <p>copyright &copy; 2018</p>
   <p>Jake M. adams</p>
 </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 100px;
  bottom: 0;
  position: fixed;
  background-color: gray;
}

p {
  text-align: center;
  color: #4183E0;
  text-shadow: 1px 1px black;
}
</style>
