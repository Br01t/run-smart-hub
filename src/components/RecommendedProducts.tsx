import ProductCard, { type Product } from "./ProductCard";
import productsData from "@/data/products.json";
import { ShoppingBag } from "lucide-react";

interface RecommendedProductsProps {
  tags: string[];
  title?: string;
  maxProducts?: number;
}

const RecommendedProducts = ({
  tags,
  title = "Prodotti Consigliati",
  maxProducts = 3,
}: RecommendedProductsProps) => {
  const products = (productsData as Product[])
    .filter((p) => p.tag.some((t) => tags.includes(t)))
    .slice(0, maxProducts);

  if (products.length === 0) return null;

  return (
    <div className="mt-8 rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <ShoppingBag className="h-5 w-5 text-primary" />
        <h3 className="font-display text-lg font-semibold text-card-foreground">
          {title}
        </h3>
      </div>
      <p className="mb-5 text-sm text-muted-foreground">
        In base ai tuoi risultati, ecco i prodotti che potrebbero aiutarti:
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        * I link contengono codici affiliati. Acquistando tramite questi link supporti il progetto senza costi aggiuntivi.
      </p>
    </div>
  );
};

export default RecommendedProducts;
