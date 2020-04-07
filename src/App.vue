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
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Open Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
</style>
