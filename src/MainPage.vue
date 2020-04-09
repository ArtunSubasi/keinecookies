<template>
  <div id="MainPage">
    <div class="container">
      <div id="header" class="row">
        <div class="col-sm-12">
            <p>
              Du bekommst heute: TODO
            </p>        
        </div>
      </div>
      <div id="links" class="container">
        <div class="row">
          <div class="col-sm-6">
            https://www.esentri.com
          </div>
          <div class="col-sm-6">
            https://www.oekoside.de
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
  name: 'MainPage',
  components: {
    Footer
  }
}
</script>

<style scoped>
#MainPage {
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
