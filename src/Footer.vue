<template>
  <div id="footer">
    <router-link to="/impressum">Impressum</router-link>
    <router-link to="/datenschutz">Datenschutz</router-link>
  </div>
</template>

<script>
module.exports = {
}
</script>

<style scoped>
#footer {
  text-align: center;
}
a {
  font-size: 0.8em;
  color: #AAA;
  margin-right: 5px;
}
a.router-link-active {
  color: #777;
}
</style>
