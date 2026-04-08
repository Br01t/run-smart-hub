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
  title = "Recommended Products",
  maxProducts = 3,
}: RecommendedProductsProps) => {
  const products = (productsData as Product[])
    .map((p) => ({
      ...p,
      _score: p.tag.filter((t) => tags.includes(t)).length,
    }))
    .filter((p) => p._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, maxProducts);

  if (products.length === 0) return null;

  return (
    <div className="mt-6 rounded-xl border border-border bg-card p-4 sm:mt-8 sm:p-6">
      <div className="mb-3 flex items-center gap-2 sm:mb-4">
        <ShoppingBag className="h-5 w-5 text-primary" />
        <h3 className="font-display text-base font-semibold text-card-foreground sm:text-lg">
          {title}
        </h3>
      </div>
      <p className="mb-4 text-sm text-muted-foreground sm:mb-5">
        Based on your results, here are products that could help you:
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        * Links contain affiliate codes. Purchasing through these links supports the project at no extra cost to you.
      </p>
    </div>
  );
};

export default RecommendedProducts;
