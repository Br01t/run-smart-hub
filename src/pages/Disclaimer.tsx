import Layout from "@/components/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-4 font-display text-3xl font-bold text-foreground">Disclaimer</h1>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Le informazioni fornite da RunLab hanno scopo puramente informativo e non sostituiscono
            il parere di un medico, nutrizionista o professionista sanitario qualificato.
          </p>
          <p>
            I calcolatori utilizzano formule scientifiche generali che forniscono stime indicative.
            I risultati possono variare in base a fattori individuali non considerati dagli strumenti.
          </p>
          <p>
            I link presenti nel sito possono essere link affiliati. Ciò significa che RunLab potrebbe
            ricevere una commissione in caso di acquisto tramite tali link, senza alcun costo aggiuntivo
            per l'utente.
          </p>
          <p>
            RunLab non è responsabile per eventuali decisioni prese sulla base delle informazioni
            fornite dagli strumenti del sito. Si consiglia sempre di consultare un professionista
            prima di modificare la propria alimentazione o programma di allenamento.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
