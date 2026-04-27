import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const AffiliateDisclosure = () => {
  return (
    <Layout>
      <SEO
        title="Informativa sulle Affiliazioni"
        description="Trasparenza totale su come Runners Hub genera entrate attraverso partnership di affiliazione con Amazon, Myprotein e Onnit."
        path="/affiliate-disclosure"
      />

      <section className="bg-gradient-hero py-14 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Informativa sulle Affiliazioni
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-primary-foreground/80">
            Massima trasparenza su come sosteniamo questo progetto
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <div className="space-y-8 text-muted-foreground leading-relaxed">

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Come Generiamo Entrate</h2>
            <p>
              Runners Hub è una risorsa gratuita. Per mantenerla tale, partecipiamo a programmi di marketing di affiliazione. Ciò significa che quando clicchi su determinati link di prodotti sul nostro sito ed effettui un acquisto, potremmo guadagnare una piccola commissione — <strong>senza alcun costo aggiuntivo per te</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Partnership di Affiliazione</h2>
            <p>
              Alcuni dei link su Runners Hub puntano a prodotti venduti da rivenditori e marchi di terze parti. Collaboriamo con aziende selezionate nel settore della corsa, del fitness e della nutrizione sportiva attraverso i loro programmi di affiliazione. Quando clicchi su questi link e fai un acquisto, potremmo ricevere una piccola commissione di segnalazione.
            </p>
            <p className="mt-3">
              Queste partnership ci aiutano a coprire i costi di gestione di questo sito web — inclusi hosting, ricerca e creazione di contenuti — mantenendo tutto gratuito per te.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Indipendenza Editoriale</h2>
            <p>
              Le nostre partnership di affiliazione <strong>non influenzano mai i nostri contenuti editoriali</strong>. Ogni recensione di prodotto, confronto e raccomandazione si basa su una ricerca indipendente, test nel mondo reale ed evidenze della scienza dello sport. Raccomandiamo solo prodotti che crediamo sinceramente possano beneficiare i runner.
            </p>
            <p className="mt-3">
              Se un prodotto non soddisfa i nostri standard di qualità, non lo presenteremo — indipendentemente dalla potenziale commissione. La nostra reputazione dipende dalla tua fiducia.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Il tuo Supporto è Importante</h2>
            <p>
              Acquistando tramite i nostri link, sostieni direttamente il tempo e lo sforzo necessari per creare strumenti gratuiti, scrivere guide approfondite e mantenere questa piattaforma. Grazie per aiutarci a mantenere Runners Hub gratuito e indipendente.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-secondary/30 p-6">
            <p className="text-sm">
              Per domande sui nostri rapporti di affiliazione, contattaci all'indirizzo{" "}
              <a href="mailto:info@runners-hub.org" className="text-primary hover:underline font-medium">info@runners-hub.org</a>.
              Puoi anche leggere il nostro{" "}
              <Link to="/disclaimer" className="text-primary hover:underline font-medium">Disclaimer</Link>, l'{" "}
              <Link to="/privacy" className="text-primary hover:underline font-medium">Informativa sulla Privacy</Link> e{" "}
              <Link to="/method" className="text-primary hover:underline font-medium">Il nostro Metodo</Link>{" "}
              per ulteriori informazioni su come operiamo.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default AffiliateDisclosure;
