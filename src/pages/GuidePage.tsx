import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import RecommendedProducts from "@/components/RecommendedProducts";

interface GuideContent {
  title: string;
  description: string;
  tags: string[];
  sections: { heading: string; body: string }[];
}

const guidesContent: Record<string, GuideContent> = {
  "come-scegliere-scarpe-running": {
    title: "Come Scegliere le Scarpe da Running",
    description: "Guida completa alla scelta delle scarpe da corsa giuste per il tuo tipo di appoggio, terreno e obiettivi.",
    tags: ["scarpe", "corsa", "ammortizzazione"],
    sections: [
      {
        heading: "Perché le scarpe giuste sono importanti",
        body: "Le scarpe da running sono l'investimento più importante per un corridore. Scarpe inadatte possono causare infortuni, dolori articolari e ridurre le performance. La scelta dipende da tipo di appoggio (neutro, pronatore, supinatore), terreno (asfalto, trail, misto), distanza e frequenza di allenamento.",
      },
      {
        heading: "Tipo di appoggio",
        body: "Il tipo di appoggio del piede è il fattore principale. Un appoggio neutro ha bisogno di scarpe con ammortizzazione bilanciata. I pronatori hanno bisogno di supporto mediale. I supinatori necessitano di scarpe con ammortizzazione extra sul lato esterno. Un test del bagnato o un'analisi del passo possono aiutarti a capire il tuo tipo.",
      },
      {
        heading: "Drop e ammortizzazione",
        body: "Il drop è la differenza di altezza tra tallone e punta. Drop alto (8-12mm) favorisce chi atterra sul tallone. Drop basso (0-6mm) è per chi ha un appoggio di mesopiede o avampiede. L'ammortizzazione va scelta in base al peso e alla distanza: più km corri, più ammortizzazione ti serve.",
      },
      {
        heading: "Quando cambiare le scarpe",
        body: "In media le scarpe da corsa durano 600-1000 km. Segnali di usura: suola liscia, intersuola appiattita, dolori nuovi. Tieni traccia dei km percorsi con ogni paio per sapere quando sostituirle.",
      },
    ],
  },
  "integratori-base-runner": {
    title: "Integratori Base per Runner",
    description: "Quali integratori servono davvero per la corsa? Guida basata su evidenze scientifiche.",
    tags: ["integratori", "elettroliti", "proteine"],
    sections: [
      {
        heading: "Servono davvero gli integratori?",
        body: "Per la maggior parte dei runner amatoriali, un'alimentazione equilibrata è sufficiente. Tuttavia, alcuni integratori hanno evidenze solide per migliorare performance e recupero: magnesio, vitamina D, proteine whey, elettroliti e caffeina.",
      },
      {
        heading: "Magnesio",
        body: "Il magnesio è coinvolto in oltre 300 reazioni enzimatiche. Per i runner è cruciale: riduce crampi, supporta la funzione muscolare e migliora la qualità del sonno. La forma citrato è la più biodisponibile. Dosaggio consigliato: 300-400mg/giorno.",
      },
      {
        heading: "Proteine",
        body: "Le proteine sono fondamentali per il recupero muscolare. Per runner che si allenano 4+ volte a settimana, 1.4-1.8g/kg di peso corporeo al giorno sono ottimali. Le proteine whey isolate entro 30 minuti post-allenamento accelerano il recupero.",
      },
      {
        heading: "Elettroliti",
        body: "Per corse oltre i 60 minuti o in condizioni di caldo, gli elettroliti sono essenziali. Sodio, potassio e magnesio vengono persi con il sudore. Le compresse effervescenti sono il formato più pratico durante l'attività.",
      },
    ],
  },
  "recupero-muscolare": {
    title: "Recupero Muscolare dopo la Corsa",
    description: "Strategie scientifiche per recuperare più velocemente: stretching, foam rolling, alimentazione e sonno.",
    tags: ["recupero", "massaggio", "proteine"],
    sections: [
      {
        heading: "Perché il recupero è fondamentale",
        body: "L'allenamento crea micro-danni muscolari. È durante il recupero che il corpo si adatta e diventa più forte. Saltare il recupero porta a overtraining, infortuni e calo delle performance.",
      },
      {
        heading: "Foam rolling",
        body: "Il foam rolling (o SMR - Self-Myofascial Release) riduce il DOMS (indolenzimento muscolare ritardato) del 50% secondo alcuni studi. 10-15 minuti post-allenamento sui gruppi muscolari principali (quadricipiti, polpacci, IT band) sono sufficienti.",
      },
      {
        heading: "Alimentazione post-corsa",
        body: "La finestra anabolica entro 30-60 minuti dopo l'allenamento è il momento ottimale per assumere proteine (20-30g) e carboidrati (1g/kg). Un frullato con proteine whey e una banana è una soluzione pratica ed efficace.",
      },
      {
        heading: "Sonno",
        body: "Il sonno è il fattore di recupero più sottovalutato. Durante il sonno profondo viene rilasciato l'ormone della crescita (GH), essenziale per la riparazione muscolare. Obiettivo: 7-9 ore a notte, con orari regolari.",
      },
    ],
  },
};

const GuidePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guidesContent[slug] : null;

  if (!guide) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Guida non trovata</h1>
          <Link to="/guide" className="mt-4 inline-block text-sm text-primary hover:underline">Torna alle guide</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead title={guide.title} description={guide.description} path={`/guide/${slug}`} />
      <article className="container mx-auto max-w-3xl px-4 py-8">
        <Link to="/guide" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Tutte le guide
        </Link>

        <header className="mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{guide.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{guide.description}</p>
        </header>

        <div className="space-y-8">
          {guide.sections.map((section, i) => (
            <section key={i}>
              <h2 className="mb-3 font-display text-xl font-semibold text-foreground">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <RecommendedProducts tags={guide.tags} title="Prodotti correlati" />
      </article>
    </Layout>
  );
};

export default GuidePage;
