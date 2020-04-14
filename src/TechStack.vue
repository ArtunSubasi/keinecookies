<template>
  <div id="techStack">
    <div class="container">
      <h1>Tech Stack</h1>
      <p>Auch für keine Cookies braucht man ein Tech Stack. 
        Diese Seite ist für alle IT-interessierte adressiert und zeigt eine Übersicht des genutzten Tech Stacks.</p>
      <a frameborder="2" data-theme="light" data-layers="1,2,3,4" data-stack-embed="true" 
          href="https://embed.stackshare.io/stacks/embed/de7e4a1814d141d1f8338893ca2edd"/>    

    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue'

export default {
  name: 'TechStack',
  components: {
    Footer
  },
  mounted() {
      let stackshareClientScript = document.createElement('script')
      stackshareClientScript.setAttribute('src', 'https://cdn1.stackshare.io/javascripts/client-code.js')
      stackshareClientScript.setAttribute('charset', 'utf-8')
      document.head.appendChild(stackshareClientScript)
    }
}
</script>

<style scoped>
#techStack {
  text-align: center;
  background-color: #222;
  color: #ccc;
}
h1 {
  color: #f7ad3e;
}
.dark {
  background-color: #222 !important;
}
</style>
