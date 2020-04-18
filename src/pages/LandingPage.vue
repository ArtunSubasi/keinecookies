<template>
  <div id="app">
    <div class="container">
      <div id="warnung-box" class="row">
        <div class="col-sm-12">
            <div class="warnung"><h1>{{ headerText }}</h1></div>
            <h2>
              Diese Seite verwendet<br/>
              <span class="warnung">{{ negationText }}</span> Cookies!<span class="faded">*</span>
            </h2>        
        </div>
      </div>
      <div  class="container">
        <div id="buttons" class="row">
          <div class="mx-auto">
              <div class="btn-toolbar">
                <b-button variant="primary" size="lg" block to="wirklich-keine-cookies">Ich stimme zu!</b-button>
                <b-button variant="secondary" size="lg" block to="cookie-auswahl">Ich wollte aber doch Cookies :(</b-button>
              </div>
          </div>
        </div>
      </div>
      <div id="disclaimer" class="row">
        <div class="mx-auto">
          <p>
          * No Bullshit: Diese Seite speichert keine notwendigen Cookies, keine Statistik-Cookies, 
          keine Marketing-Cookies, keine Cookies für Partnerschaften o.ä. Keine Cookies halt.
          </p>
        </div>
      </div>
      <NavigationBar/>
    </div>
  </div>
</template>

<script>
require('typeface-open-sans')
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'LandingPage',
  props: {
    headerText: {
      type: String,
      default: 'Warnung!'
    },
    negationText: {
      type: String,
      default: 'KEINE'
    }
  },
  components: {
    NavigationBar
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
h1 {
  font-size: 3em;
}
@media(min-width:576px) {
  h1 {
    font-size: 5em;
  }
}
h2 {
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
