<template>
  <div id="app">
    <div class="container">
      <div id="warnung-box" class="row">
        <div class="col-sm-12">
            <div class="warnung header">Warnung!</div>
            <p>
              Diese Seite verwendet<br/>
              <span class="warnung">KEINE</span> Cookies!<span class="hide">*</span>
            </p>
        </div>
      </div>
    </div>
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <router-link to="/impressum">Impressum</router-link>
    </p>
  </div>
</template>

<script>
require('typeface-open-sans')

export default {
  name: 'LandingPage',
  components: {
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #222;
}
.warnung {
  color: #db1f1f;
  font-weight: bold;
}
.header {
  font-size: 3em;
}
@media(min-width:576px) {
  .header {
    font-size: 5em;
  }
}
p {
  font-size: 2em;
  color: #f7ad3e;
}
.hide {
  opacity: 40%;
}
a {
  font-size: 0.4em;
  color: #AAA;
}
</style>
