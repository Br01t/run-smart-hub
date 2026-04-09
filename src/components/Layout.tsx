import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cookie, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import CookieConsent, { resetCookieConsent } from "./CookieConsent";
import logo from "@/assets/logo1.webp";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/tools", label: "Tools" },
  { to: "/hub", label: "Product Hubs" },
  { to: "/comparisons", label: "Comparisons" },
  { to: "/guides", label: "Guides" },
  { to: "/quiz", label: "Quiz" },
  { to: "/method", label: "Our Method" },
  { to: "/about", label: "About" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/95 backdrop-blur-xl shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3" aria-label="Runners Hub homepage">
            <img src={logo} alt="Runners Hub logo" className="h-10 w-10 object-contain" aria-hidden="true" />
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              Runners Hub
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={location.pathname === link.to ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
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
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-nav" className="border-t border-border bg-background px-4 py-2 md:hidden" aria-label="Mobile navigation">
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
                Science-backed tools and unbiased gear reviews for runners of every level.
              </p>
            </div>

            {/* Tools */}
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/40">Tools</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><Link to="/tools/hydration" className="hover:text-primary-foreground transition-colors">Hydration Calculator</Link></li>
                <li><Link to="/tools/calories" className="hover:text-primary-foreground transition-colors">Calories Burned</Link></li>
                <li><Link to="/tools/bmi" className="hover:text-primary-foreground transition-colors">BMI Analysis</Link></li>
                <li><Link to="/tools/protein" className="hover:text-primary-foreground transition-colors">Protein Needs</Link></li>
                <li><Link to="/tools/shoes" className="hover:text-primary-foreground transition-colors">Shoe Finder</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/40">Resources</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><Link to="/guides" className="hover:text-primary-foreground transition-colors">Guides</Link></li>
                <li><Link to="/comparisons" className="hover:text-primary-foreground transition-colors">Comparisons</Link></li>
                <li><Link to="/hub" className="hover:text-primary-foreground transition-colors">Product Hubs</Link></li>
                <li><Link to="/quiz" className="hover:text-primary-foreground transition-colors">Profile Quiz</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/40">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
                <li><Link to="/method" className="hover:text-primary-foreground transition-colors">Our Method</Link></li>
                <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
                <li><Link to="/disclaimer" className="hover:text-primary-foreground transition-colors">Disclaimer</Link></li>
                <li><Link to="/affiliate-disclosure" className="hover:text-primary-foreground transition-colors">Affiliate Disclosure</Link></li>
                <li>
                  <button onClick={resetCookieConsent} className="inline-flex items-center gap-1 hover:text-primary-foreground transition-colors">
                    <Cookie className="h-3.5 w-3.5" /> Cookie Settings
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Runners Hub. For informational purposes only.
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
};

export default Layout;
