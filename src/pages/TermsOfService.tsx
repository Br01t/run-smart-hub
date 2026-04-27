import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Termini di Servizio – Runners Hub",
    description: "Termini e condizioni per l'utilizzo del sito web e degli strumenti di Runners Hub.",
    url: "https://www.runners-hub.org/terms",
  };

  return (
    <Layout>
      <SEO
        title="Termini di Servizio"
        description="Termini e condizioni che regolano l'uso del sito web, degli strumenti e dei contenuti di Runners Hub."
        path="/terms"
        schema={schema}
      />

      <div className="container mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <h1 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">
          Termini di Servizio
        </h1>
        <p className="mb-6 text-xs text-muted-foreground">Ultimo aggiornamento: 2 aprile 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">1. Accettazione dei Termini</h2>
            <p>
              Accedendo e utilizzando Runners Hub (www.runners-hub.org), accetti di essere vincolato dai presenti Termini di Servizio.
              Se non accetti questi termini, ti preghiamo di non utilizzare il nostro sito web.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">2. Descrizione del Servizio</h2>
            <p>
              Runners Hub fornisce gratuitamente strumenti per la corsa basati sulla scienza, calcolatori, recensioni di attrezzatura e contenuti
              educativi. I nostri servizi sono progettati esclusivamente a scopo informativo e non costituiscono
              consulenza medica, nutrizionale o professionale per l'allenamento.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">3. Utilizzo degli Strumenti e dei Calcolatori</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Tutti i risultati dei calcolatori sono stime basate su formule scientifiche generali.</li>
              <li>I risultati possono variare in base a fattori individuali non considerati dai nostri strumenti.</li>
              <li>È necessario consultare un professionista sanitario qualificato prima di apportare modifiche alla propria dieta, allenamento o regime di salute basandosi sui nostri strumenti.</li>
              <li>Tutti i dati inseriti nei nostri calcolatori vengono elaborati localmente nel tuo browser e non vengono memorizzati sui nostri server.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">4. Link di Affiliazione e Recensioni Prodotti</h2>
            <p className="mb-2">
              Runners Hub partecipa a programmi di marketing di affiliazione. Questo significa:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Alcuni link sul nostro sito sono link di affiliazione che potrebbero farci guadagnare una commissione se effettui un acquisto.</li>
              <li>I rapporti di affiliazione non influenzano i nostri contenuti editoriali o le valutazioni dei prodotti.</li>
              <li>Dichiariamo chiaramente i rapporti di affiliazione in conformità con le linee guida internazionali.</li>
              <li>La disponibilità dei prodotti e i prezzi sono soggetti a modifiche e sono determinati dal rivenditore.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">5. Proprietà Intellettuale</h2>
            <p>
              Tutti i contenuti di Runners Hub — inclusi testi, grafiche, loghi, immagini e software — sono di
              proprietà di Runners Hub e sono protetti dalle leggi internazionali sul copyright. Non è consentito riprodurre,
              distribuire o creare opere derivate senza il nostro esplicito permesso scritto.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">6. Condotta dell'Utente</h2>
            <p>Utilizzando Runners Hub, accetti di non:</p>
            <ul className="ml-4 list-disc space-y-1 mt-2">
              <li>Utilizzare sistemi automatizzati (bot, scraper) per accedere al sito senza autorizzazione.</li>
              <li>Tentare di interferire con la funzionalità o la sicurezza del sito web.</li>
              <li>Riprodurre o ridistribuire i nostri contenuti senza autorizzazione.</li>
              <li>Utilizzare il sito per scopi illeciti.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">7. Esclusione di Garanzia</h2>
            <p>
              Runners Hub viene fornito "così com'è" e "come disponibile" senza garanzie di alcun tipo, esplicite
              o implicite. Non garantiamo che il sito sarà ininterrotto, privo di errori o privo di
              componenti dannosi. Non forniamo garanzie riguardo all'accuratezza o alla completezza di qualsiasi
              contenuto o risultato dei calcolatori.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">8. Limitazione di Responsabilità</h2>
            <p>
              Nella misura massima consentita dalla legge, Runners Hub non sarà responsabile per eventuali danni indiretti,
              incidentali, speciali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare
              il nostro sito web, gli strumenti o i contenuti. Ciò include danni per perdita di profitti, dati o altre
              perdite intangibili.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">9. Link di Terze Parti</h2>
            <p>
              Il nostro sito web contiene link a siti web e servizi di terze parti. Non siamo responsabili per
              il contenuto, le pratiche sulla privacy o i termini di siti di terze parti. La visita di questi link è
              a tuo rischio esclusivo.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">10. Modifiche</h2>
            <p>
              Ci riserviamo il diritto di modificare i presenti Termini di Servizio in qualsiasi momento. Le modifiche saranno efficaci
              immediatamente dopo la pubblicazione. L'uso continuato di Runners Hub dopo le modifiche costituisce accettazione
              dei termini aggiornati.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">11. Legge Applicabile</h2>
            <p>
              I presenti Termini saranno regolati e interpretati in conformità con le leggi dell'Unione Europea
              e le leggi nazionali applicabili. Eventuali controversie saranno risolte nei tribunali competenti
              della nostra giurisdizione registrata.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">12. Contatti</h2>
            <p>
              Per domande su questi Termini di Servizio, contattaci all'indirizzo{" "}
              <span className="text-primary">info@runners-hub.org</span>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
