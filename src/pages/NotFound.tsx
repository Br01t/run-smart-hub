import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { HelpCircle, ArrowRight, Home, Wrench, BarChart3, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { name: "Pagina Iniziale", path: "/", icon: Home, desc: "Ritorna alla home page di Runners Hub." },
    { name: "Strumenti & Calcolatori", path: "/tools", icon: Wrench, desc: "Calcola idratazione, calorie, BMI e proteine." },
    { name: "Hub Prodotti & Scarpe", path: "/hub", icon: BarChart3, desc: "Confronta scarpe, integratori e accessori." },
    { name: "Guide Scientifiche", path: "/guides", icon: BookOpen, desc: "Approfondimenti su allenamento e nutrizione." }
  ];

  return (
    <Layout>
      <SEO 
        title="Pagina non trovata - 404" 
        description="La pagina che stai cercando non esiste o è stata spostata. Esplora i calcolatori, le guide e gli hub di confronto per runner su Runners Hub."
        path="/404"
      />
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mb-6 shadow-sm">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Errore 404: Pagina Non Trovata
          </h1>
          <p className="mx-auto max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
            La risorsa all'indirizzo <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-mono break-all">{location.pathname}</code> potrebbe essere stata rimossa, rinominata o temporaneamente non disponibile.
          </p>
        </div>

        <div className="border border-border bg-card/50 rounded-3xl p-6 sm:p-10 shadow-sm backdrop-blur-sm">
          <h2 className="text-lg font-bold text-foreground mb-6 text-center sm:text-left">
            Cosa puoi fare adesso?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex flex-col justify-between p-5 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-all hover:scale-[1.01] hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {link.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary group-hover:underline">
                    Esplora <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-muted-foreground">
          <p>Hai riscontrato un problema tecnico persistente? Contattaci o prova a ricaricare la pagina iniziale.</p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
