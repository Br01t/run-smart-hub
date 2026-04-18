import { useState } from "react";
import ProductCard, { type Product } from "./ProductCard";
import productsData from "@/data/products.json";
import { ShoppingBag, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

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
  const [searchQuery, setSearchQuery] = useState("");

  const allRelevantProducts = (productsData as Product[])
    .map((p) => ({
      ...p,
      _score: p.tag.filter((t) => tags.includes(t)).length,
    }))
    .filter((p) => p._score > 0)
    .sort((a, b) => b._score - a._score);
    
  const filteredProducts = allRelevantProducts
    .filter(p => {
      const searchLower = searchQuery.toLowerCase();
      return (
        p.nome.toLowerCase().includes(searchLower) ||
        p.brand.toLowerCase().includes(searchLower) ||
        p.tag.some(t => t.toLowerCase().includes(searchLower))
      );
    })
    .slice(0, maxProducts);

  if (allRelevantProducts.length === 0) return null;

  return (
    <div className="mt-6 rounded-xl border border-border bg-card p-4 sm:mt-8 sm:p-6 transition-all hover:shadow-md">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-primary" />
          <h3 className="font-display text-base font-semibold text-card-foreground sm:text-lg">
            {title}
          </h3>
        </div>
        
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9 bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary/50"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 rounded-full bg-muted p-3">
            <Search className="h-6 w-6 text-muted-foreground opacity-20" />
          </div>
          <p className="text-sm font-medium text-muted-foreground">No products match your search.</p>
          <button 
            onClick={() => setSearchQuery("")}
            className="mt-2 text-xs font-semibold text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      <p className="mt-6 text-[10px] text-muted-foreground italic border-t border-border pt-4">
        * Links contain affiliate codes. Purchasing through these links supports the project at no extra cost to you.
      </p>
    </div>
  );
};

export default RecommendedProducts;
