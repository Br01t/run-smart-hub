import Layout from "@/components/Layout";
import { FlaskConical, ShieldCheck, BarChart3, Heart } from "lucide-react";

const Metodo = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Il Nostro Metodo
        </h1>
        <p className="mb-10 text-lg text-muted-foreground">
          Trasparenza totale su come funziona RunLab e perché puoi fidarti dei nostri strumenti.
        </p>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <FlaskConical className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Fonti scientifiche</h2>
              <p className="mt-1 text-muted-foreground">
                Tutti i calcolatori si basano su formule validate dalla letteratura scientifica: coefficienti MET per le calorie,
                linee guida ISSN per le proteine, tassi di sudorazione medi per gli elettroliti.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Nessuna sponsorizzazione</h2>
              <p className="mt-1 text-muted-foreground">
                Non riceviamo pagamenti da brand per promuovere prodotti specifici. I prodotti consigliati vengono filtrati
                automaticamente in base ai risultati dei calcolatori, non in base ad accordi commerciali.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Monetizzazione trasparente</h2>
              <p className="mt-1 text-muted-foreground">
                RunLab si sostiene tramite link affiliati (Amazon, Decathlon, Top4Running, WeightWorld).
                Quando acquisti tramite i nostri link, riceviamo una piccola commissione senza costi aggiuntivi per te.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Utility-first</h2>
              <p className="mt-1 text-muted-foreground">
                Non siamo un blog. Ogni pagina è uno strumento pratico che risolve un problema concreto.
                Il nostro obiettivo è darti risposte, non tenerti a leggere per minuti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Metodo;
