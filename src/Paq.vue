<template>
  <div id="paq">
    <div class="container">
      <h1>PAQ</h1>

      <h2>Was ist ein PAQ?</h2>
      <p>
        PAQ steht für potentially askable questions.
        Da die Webseit erst im April 2020 veröffentlicht wurde und noch keiner Fragen gestellt hat, wäre eine FAQ nicht ehrlich gewesen.
      </p>

      <h2>Wieso gibt es diese Website?</h2>
      <p>
        Es gibt viel zu viele Websites, die uns unnötig mit Cookie-Hinweisen bombardieren, weil sie Cookies verwenden.
        Ich wollte endlich eine Website, die uns unnötig mit einem Cookie-Hinweis bombardiert, weil sie keine Cookies verwendet.
        Die Idee dieser Webseite entstand Anfang April 2020 während der Corona-Ausgangsperre in Karlsruhe.
      </p>
      <p>
        Ich habe mich in der Zeit tiefer in <a href="https://aws.amazon.com/de/">Amazon Web Services (AWS)</a> eingearbeitet, 
        mich als <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2020-03-31&ci=AWS01353022&dm=80">AWS Certified Cloud Practitioner</a> 
        zertifizieren lassen, wollte das frisch gelernte einsetzen und dabei neue Frameworks sowie Tools lernen. Diese Website wird in AWS betrieben.
        Diese Website ist übrigens open source und in <a href="https://github.com/ArtunSubasi/keinecookies">GitHub</a> zu finden.
      </p>

      <h2>Wie machst du mit dieser Website Geld?</h2>
      <p>
        Gar nicht. Von den verlinkten Websites in der Hauptseite bekomme ich keine Provision oder ähnliches.
        <a href="https://www.oekoside.de">oekoside.de</a> und die <a href="https://unverpackt-versand.de/">Kornkiste</a> habe ich verlinkt, 
        weil mir die Umwelt wichtig ist und ich der Meinung, dass die beiden Seiten sehr lobenswert sind.
      </p>
      <p>
        <a href="https://www.esentri.com/blog">esentri Blog</a> habe ich verlinkt, da ich die Blog-Artikel lesenswert finde 
        und von <a href="https://www.esentri.com/blog">esentri</a> als Arbeitgeber sehr begeistert bin.
        Fallst du übrigens zufällig (oder auch nicht zufällig) auch ein(e) neugierige(r) Informatiker(in) bist: 
        wir suchen bei <a href="https://www.esentri.com/blog">esentri</a> Mitstreiter!
        Ich freue mich diesbezüglich über Kontaktanfragen.
      </p>

      <h2>Sind Macarons Cookies?</h2>
      <p>
        Laut <a href="https://en.wikipedia.org/wiki/Cookie">Wikipedia</a> wird ein Cookie beschrieben als: 
        <strike>eine Textinformation, die im Browser auf dem Computer</strike> 
        <i> a baked or cooked food that is typically small, flat and sweet</i>.
        Das hört zuerst danach an, aber so flach sind Macarons auch nicht.
        Wiederum steht in der <a href="https://en.wikipedia.org/wiki/Macaron">Wikipedia-Beschreibung der Macarons</a>, 
        dass Macarons aus zwei Cookie-Teilen bestehen.
        <a href="https://www.quora.com/Is-a-macaroon-a-cookie">In einer Diskussion in Quora</a> gibt es unterschiedliche Meinungen dazu.
        Was ist deine Meinung?
      </p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue'
export default {
  name: 'Paq',
  components: {
    Footer
  }
}
</script>

<style scoped>
#paq {
  background-color: #222;
  color: #ccc;
}
h1,h2,h3 {
  color: #f7ad3e;
}
h2 {
  font-size: 1em;
}
a {
  color: #e0b36e;
}
</style>
