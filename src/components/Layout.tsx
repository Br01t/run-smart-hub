import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cookie, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import CookieConsent, { resetCookieConsent } from "./CookieConsent";
import logo from "@/assets/logo1.webp";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/tools", label: "Strumenti" },
  { to: "/hub", label: "Hub Prodotti" },
  { to: "/guides", label: "Guide" },
  { to: "/quiz", label: "Quiz" },
  { to: "/method", label: "Metodo" },
  { to: "/about", label: "Chi Siamo" },
];

const Layout = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        Vai al contenuto principale
      </a>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md shadow-card inner-glow"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3" aria-label="Pagina iniziale Runners Hub">
            <img src={logo} alt="Logo Runners Hub" className="h-10 w-10 object-contain" aria-hidden="true" />
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              Runners Hub
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigazione principale">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={location.pathname === link.to ? "page" : undefined}
                className={`relative rounded-md px-2 lg:px-3 py-2 text-[13px] font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-2 text-muted-foreground md:hidden"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-nav" className="border-t border-border bg-background px-4 py-2 md:hidden" aria-label="Navigazione mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                aria-current={location.pathname === link.to ? "page" : undefined}
                className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-border" />
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-gradient-editorial text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="h-9 w-9 object-contain brightness-0 invert" aria-hidden="true" />
                <span className="font-display text-lg font-bold">Runners Hub</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
                Strumenti basati sulla scienza e recensioni imparziali per runner di ogni livello.
              </p>
            </div>

            {/* Tools */}
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/40">Strumenti</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><Link to="/tools/hydration" className="hover:text-primary-foreground transition-colors">Calcolatore Idratazione</Link></li>
                <li><Link to="/tools/calories" className="hover:text-primary-foreground transition-colors">Calorie Bruciate</Link></li>
                <li><Link to="/tools/bmi" className="hover:text-primary-foreground transition-colors">Analisi BMI</Link></li>
                <li><Link to="/tools/protein" className="hover:text-primary-foreground transition-colors">Fabbisogno Proteico</Link></li>
                <li><Link to="/tools/shoes" className="hover:text-primary-foreground transition-colors">Trova Scarpe</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/40">Risorse</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><Link to="/guides" className="hover:text-primary-foreground transition-colors">Guide</Link></li>
                <li><Link to="/hub" className="hover:text-primary-foreground transition-colors">Hub Prodotti</Link></li>
                <li><Link to="/quiz" className="hover:text-primary-foreground transition-colors">Quiz Profilo</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/40">Azienda</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Chi Siamo</Link></li>
                <li><Link to="/method" className="hover:text-primary-foreground transition-colors">Il nostro Metodo</Link></li>
                <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">Termini di Servizio</Link></li>
                <li><Link to="/disclaimer" className="hover:text-primary-foreground transition-colors">Disclaimer</Link></li>
                <li><Link to="/affiliate-disclosure" className="hover:text-primary-foreground transition-colors">Affiliazione</Link></li>
                <li>
                  <button onClick={resetCookieConsent} className="inline-flex items-center gap-1 hover:text-primary-foreground transition-colors">
                    <Cookie className="h-3.5 w-3.5" /> Impostazioni Cookie
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-[10px] text-primary-foreground/20">
            <p className="mb-1.5 italic">In qualità di Affiliato Amazon, ricevo un guadagno per ciascun acquisto idoneo.</p>
            <p>© {new Date().getFullYear()} Runners Hub.</p>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
};

export default Layout;
