import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Activity, Mail, Target, Users, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo1.webp";

const About = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Informazioni su Runners Hub",
      description: "Piattaforma indipendente per la corsa che fornisce strumenti basati su evidenze scientifiche, guide e recensioni di prodotti per runner di ogni livello.",
      url: "https://www.runners-hub.org/about",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Runners Hub",
      url: "https://www.runners-hub.org",
      logo: "https://www.runners-hub.org/og-image.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@runners-hub.org",
        contactType: "customer support",
      },
      sameAs: [],
    },
  ];

  return (
    <Layout>
      <SEO
        title="Chi Siamo — La Nostra Missione e la Nostra Storia"
        description="Runners Hub è nato dalla passione per la corsa. Scopri perché esiste questo progetto, chi c'è dietro e come aiutiamo i runner a prendere decisioni più consapevoli."
        path="/about"
        schema={{
          "@context": "https://schema.org",
          "@graph": jsonLd
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-hero py-14 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden mb-6">
            <img src={logo} alt="Logo Runners Hub" width={96} height={96} loading="eager" decoding="async" className="h-24 w-24 object-contain" aria-hidden="true" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Su Runners Hub
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-primary-foreground/80">
            Creato da un runner, per i runner — perché i consigli onesti non dovrebbero essere difficili da trovare.
          </p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Chi Sono</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Ciao, sono la persona dietro Runners Hub. Sono un runner amatoriale — non un atleta d'élite, né un coach certificato, solo qualcuno che si è innamorato della corsa e non ha mai smesso di approfondirne ogni aspetto.
            </p>
            <p>
              Ho iniziato a correre qualche anno fa per liberare la mente e rimettermi in forma. Quella che era iniziata come un'abitudine occasionale si è trasformata rapidamente in una vera passione. Sono passato dal faticare per finire i miei primi 5 km ad allenarmi per mezze maratone, inseguendo obiettivi di tempo e appassionandomi alla scienza della nutrizione, delle scarpe e dell'allenamento.
            </p>
            <p>
              Lungo la strada, mi sono reso conto di una cosa frustrante: trovare consigli affidabili e imparziali sulla corsa online è sorprendentemente difficile. Molti siti sono pieni di contenuti sponsorizzati travestiti da recensioni, o sono così tecnici da scoraggiare i principianti. Volevo qualcosa di diverso — un posto dove i runner potessero trovare informazioni pratiche e oneste senza troppi giri di parole.
            </p>
          </div>
        </div>
      </section>

      {/* Why Running */}
      <section className="py-10 sm:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Perché la Corsa?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              La corsa ha cambiato la mia vita. Mi ha dato disciplina, chiarezza mentale e una comunità che non mi aspettavo. Mi ha insegnato che la costanza conta più del talento e che l'attrezzatura e la nutrizione giuste possono fare una reale differenza — non solo nelle prestazioni, ma in quanto ti godi il percorso.
            </p>
            <p>
              Ho creato Runners Hub perché credo che ogni runner meriti l'accesso a informazioni di qualità, sia che stia allacciando le scarpe per la prima volta o che si stia preparando per la sua decima maratona. La corsa è uno degli sport più democratici al mondo — tutto ciò di cui hai bisogno è un paio di scarpe e la volontà di iniziare.
            </p>
          </div>
        </div>
      </section>

      {/* What This Site Is */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Cos'è Runners Hub</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Runners Hub unisce tre cose che avrei voluto avere quando ho iniziato:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong>Strumenti interattivi</strong> — calcolatori per idratazione, calorie, proteine, BMI e altro, tutti basati su formule validate dalla scienza dello sport.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong>Recensioni e confronti onesti</strong> — analisi reali dei prodotti con pro, contro e raccomandazioni pratiche. Nessun posizionamento a pagamento.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong>Guide pratiche</strong> — dalla scelta delle prime scarpe alla nutrizione avanzata per la maratona, scritte con un linguaggio semplice.</span>
              </li>
            </ul>
            <p>
              Ogni contenuto è ricercato, scritto e revisionato con cura. Utilizzo studi peer-reviewed quando disponibili, incrocio più fonti e do sempre priorità a ciò che funziona davvero rispetto a ciò che sembra solo impressionante.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-foreground mb-6">Cosa Guida Questo Progetto</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Runners Hub non è solo un sito web; è un impegno per la trasparenza in un settore spesso offuscato dal marketing. Questi sei pilastri guidano ogni contenuto che produciamo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full shadow-hero"><Link to="/method">Leggi la Nostra Metodologia</Link></Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Target, title: "Scientifico", desc: "Raccomandazioni basate sulla scienza dello sport e sull'esperienza reale." },
                { icon: Users, title: "Per Tutti i Livelli", desc: "Valore per chiunque, dai neofiti ai veterani della maratona." },
                { icon: TrendingUp, title: "Recensioni Oneste", desc: "Indipendenza totale. Se un prodotto non funziona, lo diciamo." },
                { icon: Heart, title: "Prima il Runner", desc: "Strumenti e guide che uso io stesso nel mio allenamento." },
                { icon: Activity, title: "Basato sui Dati", desc: "I calcolatori usano formule validate dalla fisiologia dell'esercizio." },
                { icon: Mail, title: "Aperto ai Feedback", desc: "Miglioramento continuo basato su ciò di cui hai realmente bisogno." },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
                  <v.icon className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-display text-sm font-bold text-foreground mb-1">{v.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Trasparenza e Monetizzazione</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Runners Hub è una risorsa gratuita. Per sostenerla, partecipo a programmi di affiliazione con <strong>Amazon Associates</strong>, <strong>Myprotein</strong> e <strong>Onnit</strong>. Quando acquisti un prodotto tramite uno dei miei link, potrei guadagnare una piccola commissione — senza alcun costo aggiuntivo per te.
            </p>
            <p>
              Queste partnership <strong>non influenzano mai i miei contenuti</strong>. Seleziono i prodotti in base alla qualità, alla pertinenza e al valore — non in base alle percentuali di commissione. Per tutti i dettagli, leggi la mia{" "}
              <Link to="/affiliate-disclosure" className="text-primary hover:underline font-medium">Informativa sulle Affiliazioni</Link> e la mia{" "}
              <Link to="/method" className="text-primary hover:underline font-medium">metodologia</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10 sm:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Contattami</h2>
          <p className="text-muted-foreground mb-6">
            Hai una domanda, un suggerimento o una proposta di collaborazione? Mi farebbe piacere sentirti.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Richieste Generali</p>
                <a href="mailto:info@runners-hub.org" className="text-sm text-primary hover:underline">info@runners-hub.org</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Partnership e Affiliazioni</p>
                <a href="mailto:info@runners-hub.org" className="text-sm text-primary hover:underline">info@runners-hub.org</a>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">In genere rispondo entro 24–48 ore.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground mb-3">Inizia a Esplorare</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Scopri gli strumenti, leggi le ultime guide o trova l'attrezzatura perfetta per la tua prossima corsa.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild><Link to="/tools">Esplora Strumenti</Link></Button>
            <Button asChild variant="outline"><Link to="/guides">Leggi le Guide</Link></Button>
            <Button asChild variant="outline"><Link to="/hub">Hub Prodotti</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
