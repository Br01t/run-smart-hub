import { ExternalLink, Star } from "lucide-react";

interface Product {
  id: string;
  nome: string;
  categoria: string;
  brand: string;
  tag: string[];
  prezzoRange: string;
  linkAffiliato: string;
  immagine: string;
  descrizione: string;
}

interface ProductCardProps {
  product: Product;
  variant?: "default" | "horizontal" | "compact";
}

const ProductCard = ({ product, variant = "default" }: ProductCardProps) => {
  if (variant === "horizontal") {
    return (
      <div className="group flex gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:shadow-card-hover sm:p-5">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-secondary sm:h-24 sm:w-24">
          <img src={product.immagine} alt={product.nome} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{product.brand}</p>
          <h4 className="mt-0.5 font-display text-sm font-bold text-card-foreground sm:text-base">{product.nome}</h4>
          <p className="mt-1 flex-1 text-xs text-muted-foreground line-clamp-2">{product.descrizione}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm font-bold text-foreground">{product.prezzoRange}</span>
            <a
              href={product.linkAffiliato}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-accent px-3 py-1.5 text-xs font-bold text-accent-foreground transition-opacity hover:opacity-90"
            >
              View <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={product.linkAffiliato}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all hover:shadow-card-hover hover:-translate-y-0.5"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
          <img src={product.immagine} alt={product.nome} className="h-full w-full rounded-lg object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="truncate text-sm font-semibold text-card-foreground">{product.nome}</p>
          <p className="text-xs text-muted-foreground">{product.brand} · {product.prezzoRange}</p>
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
      </a>
    );
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
      <div className="flex h-40 items-center justify-center bg-secondary/80 sm:h-48">
        <img src={product.immagine} alt={product.nome} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{product.brand}</p>
          <div className="flex items-center gap-0.5 text-accent">
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3" />
          </div>
        </div>
        <h4 className="font-display text-sm font-bold text-card-foreground sm:text-base">{product.nome}</h4>
        <p className="mt-1 flex-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{product.descrizione}</p>
        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <span className="text-base font-bold text-foreground">{product.prezzoRange}</span>
          <a
            href={product.linkAffiliato}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-accent px-4 py-2 text-xs font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            View Deal <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
export type { Product };
