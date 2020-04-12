<template>
  <div id="impressum">
    <div class="container">
      <h1>Impressum</h1>

      <p>Artun Subasi<br/>
      Vorbergstr. 5<br/>
      76228 Karlsruhe<br/>
      Deutschland</p>

      <p>Telefon: +49 151 554 79 199<br/>
      E-Mail: wirklich@keinecookies.de</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue'
export default {
  name: 'Impressum',
  components: {
    Footer
  }
}
</script>

<style scoped>
#impressum {
  text-align: center;
  background-color: #222;
  color: #ccc;
}
h1,h2,h3 {
  color: #f7ad3e;
}
</style>
