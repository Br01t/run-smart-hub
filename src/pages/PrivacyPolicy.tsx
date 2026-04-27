import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Informativa sulla Privacy – Runners Hub",
    description: "Come Runners Hub raccoglie, utilizza e protegge i tuoi dati personali.",
    url: "https://www.runners-hub.org/privacy",
  };

  return (
    <Layout>
      <SEO
        title="Informativa sulla Privacy"
        description="Come Runners Hub raccoglie, utilizza e protegge i tuoi dati personali in conformità con il GDPR e le normative internazionali sulla privacy."
        path="/privacy"
        schema={schema}
      />

      <div className="container mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <h1 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">
          Informativa sulla Privacy
        </h1>
        <p className="mb-6 text-xs text-muted-foreground">Ultimo aggiornamento: 2 aprile 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">1. Chi Siamo</h2>
            <p>
              Runners Hub ("noi", "ci", "nostro") gestisce il sito web www.runners-hub.org. Ci impegniamo a proteggere
              la tua privacy e a gestire i tuoi dati personali in modo trasparente. Per qualsiasi richiesta relativa alla privacy,
              contattaci all'indirizzo <span className="text-primary">info@runners-hub.org</span>.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">2. Dati che Raccogliamo</h2>
            <p className="mb-2">Potremmo raccogliere le seguenti categorie di dati:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Dati di utilizzo:</strong> pagine visitate, tempo trascorso sul sito, fonte di provenienza, tipo di browser e informazioni sul dispositivo raccolte tramite cookie analitici.</li>
              <li><strong>Input dei calcolatori:</strong> i dati inseriti nei nostri strumenti (peso, altezza, età, ecc.) vengono elaborati localmente nel tuo browser e non vengono mai trasmessi ai nostri server.</li>
              <li><strong>Dati di contatto:</strong> se ci invii un'e-mail, memorizziamo il tuo indirizzo e-mail e il contenuto del messaggio per rispondere alla tua richiesta.</li>
              <li><strong>Preferenze sui cookie:</strong> le tue scelte di consenso vengono memorizzate localmente sul tuo dispositivo.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">3. Come Utilizziamo i tuoi Dati</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Per migliorare i contenuti del nostro sito web e l'esperienza dell'utente attraverso analisi aggregate.</li>
              <li>Per rispondere alle tue richieste e fornire supporto.</li>
              <li>Per visualizzare raccomandazioni di prodotti in affiliazione pertinenti.</li>
              <li>Per adempiere agli obblighi di legge.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">4. Cookie e Tracciamento</h2>
            <p className="mb-2">Utilizziamo i seguenti tipi di cookie:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Cookie essenziali:</strong> necessari per il corretto funzionamento del sito web (es. preferenze sul consenso ai cookie). Questi non possono essere disattivati.</li>
              <li><strong>Cookie analitici:</strong> ci aiutano a capire come i visitatori interagiscono con il nostro sito (es. Google Analytics). Questi vengono attivati solo con il tuo consenso.</li>
              <li><strong>Cookie di marketing:</strong> utilizzati dai nostri partner di affiliazione per tracciare i rinvii. Questi vengono attivati solo con il tuo consenso.</li>
            </ul>
            <p className="mt-2">Puoi gestire le tue preferenze sui cookie in qualsiasi momento utilizzando il pulsante delle impostazioni dei cookie nel piè di pagina.</p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">5. Base Giuridica del Trattamento (GDPR)</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Consenso:</strong> per i cookie analitici e di marketing, raccolti tramite il nostro banner dei cookie.</li>
              <li><strong>Legittimo interesse:</strong> per la sicurezza del sito web e le funzionalità di base.</li>
              <li><strong>Necessità contrattuale:</strong> per rispondere alle tue richieste quando ci contatti.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">6. I tuoi Diritti</h2>
            <p className="mb-2">Ai sensi del GDPR e delle leggi sulla privacy applicabili, hai il diritto di:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Accedere ai dati personali che conserviamo su di te.</li>
              <li>Richiedere la correzione o la cancellazione dei tuoi dati.</li>
              <li>Revocare il consenso in qualsiasi momento.</li>
              <li>Opporti al trattamento dei dati basato sul legittimo interesse.</li>
              <li>Richiedere la portabilità dei dati.</li>
              <li>Presentare un reclamo all'autorità locale per la protezione dei dati.</li>
            </ul>
            <p className="mt-2">Per esercitare uno di questi diritti, inviaci un'e-mail a <span className="text-primary">info@runners-hub.org</span>.</p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">7. Servizi di Terze Parti</h2>
            <p>Potremmo condividere dati con i seguenti servizi di terze parti, solo con il tuo consenso ove richiesto:</p>
            <ul className="ml-4 list-disc space-y-1 mt-2">
              <li><strong>Google Analytics:</strong> analisi del sito web (IP anonimizzato).</li>
              <li><strong>Reti di affiliazione:</strong> tracciamento dei rinvii dei prodotti (es. Amazon Associates).</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">8. Conservazione dei Dati</h2>
            <p>Conserviamo i dati personali solo per il tempo necessario agli scopi sopra descritti. I dati analitici vengono conservati per un massimo di 26 mesi. I dati di contatto vengono conservati per un massimo di 2 anni dopo la tua ultima interazione.</p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">9. Sicurezza dei Dati</h2>
            <p>Implementiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati, inclusa la crittografia in transito (HTTPS) e un'infrastruttura di hosting sicura.</p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">10. Modifiche alla Presente Informativa</h2>
            <p>Potremmo aggiornare periodicamente questa Informativa sulla Privacy. Le modifiche saranno pubblicate su questa pagina con una data di revisione aggiornata. Ti invitiamo a consultare regolarmente questa pagina.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
