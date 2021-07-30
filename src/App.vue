<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <part-1 />
</template>

<script>
import part1 from './components/part1'
export default {
  name: 'App',
  components: {
    part1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
