<template>
  <div id="app">
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
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
  margin: 0;
  padding: 0;
  font-family: "Open Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #222;
}
a {
  font-size: 0.4em;
  color: #AAA;
}
</style>
