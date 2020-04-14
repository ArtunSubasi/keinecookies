<template>
  <div id="techStack">
    <div class="container">
      <h1>Tech Stack</h1>
      <p>Auch für keine Cookies braucht man ein Tech Stack. 
        Diese Seite ist für alle IT-interessierte adressiert und zeigt eine Übersicht des genutzten Tech Stacks.</p>
      <p>In Arbeit...</p>
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
