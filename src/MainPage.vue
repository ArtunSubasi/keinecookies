<template>
  <div id="MainPage">
    <div class="container">
      <div id="header" class="row">
        <div class="col-sm-12">
            <p>
              Du bekommst heute: {{ cookieType }}
            </p>        
        </div>
      </div>
      <div id="links" class="container">
        <div class="row">
          <div class="col-sm-6">
            <a href="https://www.esentri.com">esentri.com</a>
          </div>
          <div class="col-sm-6">
            <a href="https://www.oekoside.de">oekoside.de</a>
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
  props: {
    cookieType: {
      type: String,
      default: 'WirklichKeineCookies'
    }
  },
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
#header p {
  font-size: 2em;
  color: #f7ad3e;
}
a {
  font-size: 1em;
  color: #f7ad3e;
}
</style>
