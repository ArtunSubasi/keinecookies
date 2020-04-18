<template>
  <div id="datenschutz">
    <div class="container">
      <h1>Datenschutzerklärung</h1>
      <h2>Allgemeiner Hinweis und Pflichtinformationen</h2>
      <h3>Benennung der verantwortlichen Stelle</h3>
      <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
      <p>
        <span id="s3-t-firma">Artun Subasi</span><br>
        <span id="s3-t-strasse">Vorbergstr. 5</span><br>
        <span id="s3-t-plz">76228</span> <span id="s3-t-ort">Karlsruhe</span>
      </p>
      <p></p>
      <p>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>

      <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
      <p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

      <h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
      <p>Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:<br/>
      <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a></p>

      <h3>Recht auf Datenübertragbarkeit</h3>
      <p>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

      <h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
      <p>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</p>

      <h3>SSL- bzw. TLS-Verschlüsselung</h3>
      <p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>

      <h3>Server-Log-Dateien</h3>
      <p>In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
      <ul>
          <li>Besuchte Seite auf unserer Domain</li>
          <li>Datum und Uhrzeit der Serveranfrage</li>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>IP-Adresse</li>
      </ul>
      <p>Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>

      <h3>Links zu Drittseiten</h3>
      <p>Beim Besuch der Webseite könnten Inhalte angezeigt werden, die mit den Webseiten Dritter verlinkt sind. Der Betreiber hat keinen Zugang zu den Cookies oder anderen Funktionen, die von Drittseiten eingesetzt werden, noch kann der Betreiber diese kontrollieren. Solche Drittseiten unterliegen nicht den Datenschutzbestimmungen des Betreibers.</p>

      <p class="quelle"><small>Quelle: Datenschutz-Konfigurator von <a href="http://www.mein-datenschutzbeauftragter.de" target="_blank">mein-datenschutzbeauftragter.de</a></small></p>
    </div>

    <TheNavigationBar/>
    
  </div>
</template>

<script>
import TheNavigationBar from '@/components/TheNavigationBar.vue'

export default {
  name: 'DatenschutzPage',
  components: {
    TheNavigationBar
  }
}
</script>

<style scoped>
#datenschutz {
  background-color: #222;
  color: #ccc;
}
h1,h2,h3 {
  color: #f7ad3e;
}
a {
  color: #f7ad3e;
  font-size: 1em;
}
.quelle {
  color: #999;
}
</style>
