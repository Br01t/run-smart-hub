import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Disclaimer = () => {
  return (
    <Layout>
      <SEO title="Disclaimer" description="Informazioni importanti sugli strumenti, i dati e i link di affiliazione di Runners Hub." path="/disclaimer" />
      <div className="container mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <h1 className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl">Disclaimer</h1>
        <div className="space-y-4 text-sm text-muted-foreground sm:text-base">
          <p>
            Le informazioni fornite da Runners Hub hanno uno scopo puramente informativo e non sostituiscono
            il parere di un medico, di un nutrizionista o di un professionista sanitario qualificato.
          </p>
          <p>
            I calcolatori utilizzano formule scientifiche generali che forniscono stime indicative.
            I risultati possono variare in base a fattori individuali non considerati dagli strumenti.
          </p>
          <p>
            I link su questo sito possono essere link di affiliazione. Ciò significa che Runners Hub potrebbe ricevere una commissione
            se effettui un acquisto tramite questi link, senza alcun costo aggiuntivo per te.
          </p>
          <p>
            Runners Hub non è responsabile per eventuali decisioni prese sulla base delle informazioni fornite
            dagli strumenti del sito. Consulta sempre un professionista prima di modificare la tua dieta o il tuo programma di allenamento.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
