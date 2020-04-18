<template>
  <div id="kontakt">
    <div class="container">
      <h1>Kontakt</h1>
      <a href="https://github.com/ArtunSubasi"><img src="@/assets/GitHub-Mark-Light-64px.png" alt="GitHub Icon" /></a>
      <a href="https://www.xing.com/profile/Artun_Subasi"><img src="@/assets/xing.png" alt="Xing Icon" /></a>
      <a href="https://www.linkedin.com/in/artunsubasi/"><img src="@/assets/linkedin-icon_64x64.png" alt="LinkedIn Icon" /></a>
      <a href="https://twitter.com/ArtunSubasi"><img src="@/assets/twitter-icon_64x64.png" alt="Twitter Icon" /></a>      
      <a href="mailto:wirklich@keinecookies.de"><img src="@/assets/iconfinder_mail_287559.png" alt="E-Mail Icon" /></a>
    </div>
    <TheNavigationBar/>
  </div>
</template>

<script>
import TheNavigationBar from '@/components/TheNavigationBar.vue'
export default {
  name: 'Kontakt',
  components: {
    TheNavigationBar
  }
}
</script>

<style scoped>
#kontakt {
  text-align: center;
  background-color: #222;
}
h1 {
  color: #f7ad3e;
}
a {
  margin: 5px;
}
img {
  border-radius: 32px;
  width: 64px;
}
</style>
