<template>
  <div id="app">
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view/>
  </div>
</template>

<script>
require('typeface-open-sans')

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
html, body {
  font-family: "Open Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #222;
}
</style>
