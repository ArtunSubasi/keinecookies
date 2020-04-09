<template>
  <div id="app">
    <div class="container">
      <div id="warnung-box" class="row">
        <div class="col-sm-12">
            <div class="warnung header">Warnung!</div>
            <p>
              Diese Seite verwendet<br/>
              <span class="warnung">KEINE</span> Cookies!<span class="faded">*</span>
            </p>        
        </div>
      </div>
      <div id="buttons" class="container">
        <div class="row">
          <div class="mx-auto">
              <div class="btn-toolbar">
                <button type="button" class="btn btn-primary btn-lg btn-block">Ich stimme zu!</button>
                <button type="button" class="btn btn-secondary btn-lg btn-block">Ich wollte aber doch Cookies :(</button>
              </div>
          </div>
        </div>
      </div>
      <div id="disclaimer" class="container">
        <div class="row">
          <div class="mx-auto">
            <p>
            * No Bullshit: Diese Seite speichert keine notwendigen Cookies, keine Statistik-Cookies, 
            keine Marketing-Cookies, keine Cookies für Partnerschaften oder ähnliches. Keine Cookies halt.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
require('typeface-open-sans')
import Footer from './Footer.vue'

export default {
  name: 'LandingPage',
  components: {
    Footer
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
#warnung-box p {
  font-size: 2em;
  color: #f7ad3e;
}
.faded {
  color: #777;
}
#disclaimer {
  margin: 20px;
  text-align: left;
  font-size: 0.8em;
  color: #777;
}
.btn-primary {
  background-color: #f7ad3e;
  color: #222;
  border-color: #000;
  font-weight: bold;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #e98c00;
  border-color: #db1f1f;
}
.btn-secondary {
 background-color: #777;
 color: #222;
 border-color: #000;
}
.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active, .btn-secondary.active, .open>.dropdown-toggle.btn-secondary {
  color: #fff;
  border-color: #f7ad3e;
}
</style>
