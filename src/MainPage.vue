<template>
  <div id="MainPage">
    <div class="container">

      <div class="row header" v-if="cookieType == 'WirklichKeineCookies'">
        <div class="col-sm-12">
          <p>Du bekommst keine Cookies!</p>
        </div>
        <div class="col-sm-12">
          <img src="./assets/chaitanya-pillala-zDDdoYqQ64U-unsplash-smaller.jpg" alt="Smiley"/>
        </div>
        <div class="mx-auto m-3 photo-credits">
          Photo by <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@chaib2?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from chaitanya pillala"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">chaitanya pillala</span></a>
        </div>
        <div class="col-sm-12 mt-3">
          <div class="mx-auto introduction">
            Du lebst sehr gesund und hast einen eisernen Willen! Gleichzeitig ist es traurig, dass du keine Cookies bekommen hast. 
            Denn Cookies sind super lecker.
            Als Trotz kannst du dir gerne die unten aufgelisteten wunderbaren Websites anschauen, die Cookies verwenden.
            Falls du doch Cookies möchtest, kannst du deine Cookie-Auswahl übrigens jederzeit mit dem Cookie-Icon unten rechts ändern.
          </div>
        </div>
      </div>

      <div class="row header" v-if="cookieType == 'ChocolateChip'">
        <div class="col-sm-12">
          <p>Du bekommst Chocolate Chip Cookies! Yay!</p>
        </div>
        <div class="col-sm-12">
          <img src="./assets/john-dancy-j2yLCAi9brQ-unsplash-smaller.jpg" alt="Chocolate Chip Cookies"/>
        </div>
        <div class="mx-auto m-3 photo-credits">
          Photo by <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@johnnyd0805?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from John Dancy"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">John Dancy</span></a>
        </div>
        <div class="col-sm-12 mt-3">
          <div class="mx-auto introduction">
            Super Auswahl! Chocolate Chip Cookies sind super lecker!
            Du kannst dir gerne die unten aufgelisteten wunderbaren Websites anschauen, da du Cookies magst. Sie verwenden nämlich Cookies.
            Falls du doch keine Cookies mehr möchtest, kannst du deine Cookie-Auswahl übrigens jederzeit mit dem Cookie-Icon unten rechts ändern.
          </div>
        </div>
      </div>

      <div class="row header" v-if="cookieType == 'Macarons'">
        <div class="col-sm-12">
          <p>Du bekommst Macarons! Yay!</p>
        </div>
        <div class="col-sm-12">
          <img src="./assets/holly-stratton-KTP5X6SW_b4-unsplash-smaller.jpg" alt="Macarons"/>
        </div>
        <div class="mx-auto m-3 photo-credits">
          Photo by <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@holly_buildalifeyoulove?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Holly Stratton"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Holly Stratton</span></a>
        </div>
        <div class="col-sm-12 mt-3">
          <div class="mx-auto introduction">
            Super Auswahl! Macarons sind super lecker!
            Du kannst dir gerne die unten aufgelisteten wunderbaren Websites anschauen, da du Cookies magst. Sie verwenden nämlich Cookies.
            Falls du doch keine Cookies mehr möchtest, kannst du deine Cookie-Auswahl übrigens jederzeit mit dem Cookie-Icon unten rechts ändern.
          </div>
        </div>
      </div>

      <div id="links" class="container">
        <div class="row">
          <div class="col-sm-6 mt-2">
            <div class="row">
              <div class="col-sm-12 mt-5">
                <a href="https://www.esentri.com">
                  <img src="./assets/esentri_weiß-gruen.png" alt="esentri AG"/>
                </a>
              </div>
              <div class="col-sm-12">
                <a href="https://www.esentri.com/blog">esentri Blog</a>
              </div>
              <div class="col-sm-12 mt-2">
                IT-Blog für Neugierige: Meine Kollegen (und manchmal auch ich) schreiben im esentri Blog über alles, was uns bewegt.
                Unser Antrieb ist die Neugier auf Veränderungen, mit der wir gerne auch mal über den Tellerrand schauen.
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-5">
            <div class="row">
              <div class="col-sm-12">
                <a href="https://unverpackt-versand.de/">
                  <img src="./assets/Kornkiste.png" alt="Kornkiste"/>
                </a>
              </div>
              <div class="col-sm-12">
                <a href="https://unverpackt-versand.de/">Kornkiste - Unverpackt-Online</a>
              </div>
              <div class="col-sm-12 mt-2">
                Unverpackt für alle! Unverpackt online kaufen... wie soll das gehen? Geht auch nicht. 
                Hier kann man mit einem Mehrweg-System den Einkauf ohne Verpackungsmüll direkt nach Hause versenden und Müll vermeiden.
              </div>
            </div>
          </div>    
        </div>
        <div class="row mt-5">
          <div class="mx-auto subheader">
            <p>Die folgenden Websites sind praktisch Cookie-frei<span class="faded">*</span> und auf jeden Fall einen Besuch wert!</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 mt-5">
            <div class="row">
              <div class="col-sm-12">
                <a href="https://www.i-dont-care-about-cookies.eu/de">
                  <img src="./assets/u-j-e-s-h-7ySd00IGyx4-unsplash-smaller.jpg" alt="delete"/>
                </a>
              </div>
              <div class="col-sm-12">
                <a href="https://www.i-dont-care-about-cookies.eu/de">I don't care</a>
              </div>
              <div class="col-sm-12 mt-2">
                Die Browser-Erweiterung "I don't care about cookies" entfernt Cookie-Warnungen von fast allen Websites 
                und erspart dir Tausende unnötiger Klicks!
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-5">
            <div class="row">
              <div class="col-sm-12">
                <a href="https://www.oekoside.de">
                  <img src="./assets/dhruva-reddy-7NepJK9k8eM-unsplash-supersmall.jpg" alt="eokoside.de"/>
                </a>
              </div>
              <div class="col-sm-12">
                <a href="https://www.oekoside.de">oekoside.de</a>
              </div>
              <div class="col-sm-12 mt-2">
                Ökotipps für alle! Der Autor Thomas Winterhalter sammelt konkrete Möglichkeiten, 
                was jeder zum Schutz der Umwelt beitragen kann. Und nein: vieles ist nicht schwierig sondern oft erschreckend einfach!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="disclaimer" class="row">
        <div class="mx-auto">
          <p>
          * Praktisch Cookie-frei: Die Websites scheinen entweder keine Cookies oder wenig Cookies zu verwenden und kommen ohne einen Cookie-Hinweis zurecht.
          Ich prüfe die Cookie-Verwendung in den Drittwebsites nicht. Deshalb gilt: Praktisch Cookie-frei ohne Gewähr.
          </p>
        </div>
      </div>
      <NavigationBar/>
      <CookieBox/>
    </div>
  </div>
</template>

<script>
require('typeface-open-sans')
import NavigationBar from './components/NavigationBar.vue'
import CookieBox from './components/CookieBox.vue'

export default {
  name: 'MainPage',
  props: {
    cookieType: {
      type: String,
      default: 'WirklichKeineCookies'
    }
  },
  components: {
    NavigationBar,
    CookieBox
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
.header p {
  font-size: 2em;
  color: #f7ad3e;
}
.subheader p {
  font-size: 1.6em;
  color: #f7ad3e;
}
img {
    padding: 0;
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
}
#links, .introduction {
  font-size: 1em;
  color: #ccc;
}
a {
  font-size: 1em;
  color: #f7ad3e;
}
.photo-credits {
  font-size: 0.8em;
  color: #ccc;
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
</style>
