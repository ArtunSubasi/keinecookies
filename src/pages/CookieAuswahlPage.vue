<template>
  <div id="CookieAuswahl">
    <div class="container">
      <div id="header" class="row">
        <div class="col-sm-12">
            <p>
              Was für Cookies möchtest du?<span class="faded">*</span>
            </p>        
        </div>
      </div>
      <div id="buttons" class="container">
        <div class="row">
          <div class="mx-auto col-lg-6">
              <div class="btn-toolbar">
                <b-button variant="primary" size="lg" block to="chocolate-chip-cookies">Chocolate Chip Cookies</b-button>
                <b-button variant="primary" size="lg" block to="macarons">Macarons</b-button>
                <b-button variant="secondary" size="lg" block to="wirklich-keine-cookies">Ich möchte doch keine Cookies</b-button>
                <b-button variant="secondary" size="lg" block to="cookies-mit-echten-cookies">Ich wollte aber Cookies mit echten Cookies</b-button>
              </div>
          </div>
        </div>
      </div>
      <div id="disclaimer" class="row">
        <div class="mx-auto">
          <p>
          * Mir ist klar, dass meine Cookie-Auswahl ohne Cookies gespeichert und beim nächsten Besuch dieser Seite verloren gehen wird.
          </p>
        </div>
      </div>
      <TheNavigationBar/>
    </div>
  </div>
</template>

<script>
require('typeface-open-sans')
import TheNavigationBar from '@/components/TheNavigationBar.vue'

export default {
  name: 'CookieAuswahl',
  components: {
    TheNavigationBar
  }
}
</script>

<style scoped>
#CookieAuswahl {
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
#header p {
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
