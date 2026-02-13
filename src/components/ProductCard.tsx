import { ExternalLink } from "lucide-react";

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
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group flex flex-col rounded-lg border border-border bg-card p-4 shadow-card transition-all duration-300 hover:shadow-card-hover">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {product.brand}
          </p>
          <h4 className="font-display text-base font-semibold text-card-foreground">
            {product.nome}
          </h4>
        </div>
        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
          {product.prezzoRange}
        </span>
      </div>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">
        {product.descrizione}
      </p>
      <a
        href={product.linkAffiliato}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        Vedi Offerta <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
};

export default ProductCard;
export type { Product };
