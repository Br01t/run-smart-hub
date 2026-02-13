import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const guides = [
  {
    slug: "come-scegliere-scarpe-running",
    title: "Come Scegliere le Scarpe da Running",
    excerpt: "Guida completa alla scelta delle scarpe giuste: ammortizzazione, drop, tipo di appoggio e terreno.",
  },
  {
    slug: "integratori-base-runner",
    title: "Integratori Base per Runner",
    excerpt: "Quali integratori servono davvero? Dalla vitamina D al magnesio, ecco cosa dice la scienza.",
  },
  {
    slug: "recupero-muscolare",
    title: "Recupero Muscolare dopo la Corsa",
    excerpt: "Stretching, foam rolling, alimentazione e sonno: le strategie per recuperare più velocemente.",
  },
];

const GuidesHub = () => {
  return (
    <Layout>
      <SEOHead
        title="Guide per Runner"
        description="Guide pratiche e scientifiche su scarpe da running, integratori e recupero muscolare per migliorare le tue performance."
        path="/guide"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Guide per Runner</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Approfondimenti pratici basati su evidenze scientifiche.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              to={`/guide/${guide.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">{guide.title}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">{guide.excerpt}</p>
              <div className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                Leggi la guida <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GuidesHub;
