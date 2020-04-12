<template>  
  <div id="footer">
    <router-link to="/" exact>Startseite</router-link>
    <router-link to="/paq">PAQ</router-link>
    <router-link to="/kontakt">Kontakt</router-link>
    <a href="https://github.com/ArtunSubasi/keinecookies">GitHub</a>
    <br/>
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
  margin: 20px;
  text-align: center;
}
a {
  font-size: 0.8em;
  color: #AAA;
  margin-right: 10px;
}
a.router-link-active {
  color: #f7ad3e;
}
</style>
