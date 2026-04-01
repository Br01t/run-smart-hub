import { Link, useLocation } from "react-router-dom";
import { Activity, Menu, X } from "lucide-react";
import { useState } from "react";

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

  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip to content – critical for accessibility / Lighthouse */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2" aria-label="RunLab homepage">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
              <Activity className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">RunLab</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={location.pathname === link.to ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
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
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-nav" className="border-t border-border bg-background px-4 py-3 md:hidden" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                aria-current={location.pathname === link.to ? "page" : undefined}
                className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="font-display text-sm font-semibold text-foreground">RunLab</span>
            </div>
            <nav aria-label="Footer navigation" className="flex gap-4 text-sm text-muted-foreground">
              <Link to="/method" className="hover:text-foreground transition-colors">Our Method</Link>
              <Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
            </nav>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} RunLab. For informational purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
