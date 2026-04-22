import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, ShoppingCart, Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CategoryProductBannerProps {
  products: any[];
  accentColor: string;
  accentHsl?: { h: number; s: number; l: number };
  title?: string;
}

export const CategoryProductBanner = ({ products, accentColor, accentHsl, title }: CategoryProductBannerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Custom Scrollbar States
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [thumbWidthPercentage, setThumbWidthPercentage] = useState(20);

  // Fallback HSL if accentHsl is missing
  const h = accentHsl?.h ?? 230;
  const s = accentHsl?.s ?? 80;
  const l = accentHsl?.l ?? 60;

  const themedMain = `hsl(${h} ${s}% ${l}%)`;
  const themedLight = `hsl(${h} ${s}% ${l}% / 0.15)`;
  const themedOpaque = `hsl(${h} ${s}% ${l}% / 1)`;

  const updateScrollMetrics = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // Update Button States
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Update Scrollbar Metrics
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollPercentage(progress);
      
      const widthRatio = scrollWidth > 0 ? (clientWidth / scrollWidth) * 100 : 20;
      setThumbWidthPercentage(Math.max(widthRatio, 10)); // Minimum 10% width
    }
  };

  useEffect(() => {
    updateScrollMetrics();
    // Add a small delay to capture final layout
    const timer = setTimeout(updateScrollMetrics, 100);
    window.addEventListener('resize', updateScrollMetrics);
    return () => {
      window.removeEventListener('resize', updateScrollMetrics);
      clearTimeout(timer);
    };
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!products || products.length === 0) return null;

  return (
    <div className="relative mt-8 mb-16 group/banner">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
            <div 
                className="h-8 w-1 rounded-full transition-colors duration-500"
                style={{ backgroundColor: themedMain }}
            />
            <h3 className="font-display text-lg font-bold text-foreground">
                {title || "Featured Selection"}
            </h3>
        </div>
        <div className="hidden sm:flex gap-2">
           <Button 
                variant="outline" 
                size="icon" 
                className={`h-9 w-9 rounded-full border-2 bg-background/50 backdrop-blur-sm transition-all duration-300 ${!canScrollLeft ? 'opacity-10 cursor-not-allowed' : 'btn-depth btn-depth-hover'}`}
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                style={{ 
                  borderColor: canScrollLeft ? themedMain : '#e2e8f0',
                  color: canScrollLeft ? themedMain : '#94a3b8'
                }}
                onMouseEnter={(e) => {
                    if (canScrollLeft) {
                        e.currentTarget.style.backgroundColor = themedLight;
                        e.currentTarget.style.boxShadow = `0 0 15px ${themedLight}`;
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                }}
           >
                <ChevronLeft className="h-5 w-5" />
           </Button>
           <Button 
                variant="outline" 
                size="icon" 
                className={`h-9 w-9 rounded-full border-2 bg-background/50 backdrop-blur-sm transition-all duration-300 ${!canScrollRight ? 'opacity-10 cursor-not-allowed' : 'btn-depth btn-depth-hover'}`}
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                style={{ 
                  borderColor: canScrollRight ? themedMain : '#e2e8f0',
                  color: canScrollRight ? themedMain : '#94a3b8'
                }}
                onMouseEnter={(e) => {
                    if (canScrollRight) {
                        e.currentTarget.style.backgroundColor = themedLight;
                        e.currentTarget.style.boxShadow = `0 0 15px ${themedLight}`;
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                }}
           >
                <ChevronRight className="h-5 w-5" />
           </Button>
        </div>
      </div>

      <div className="relative">
        <div 
            ref={scrollRef}
            onScroll={updateScrollMetrics}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-10 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth scrollbar-hide"
        >
            {products.map((product, idx) => (
            <div 
                key={product.name + idx}
                className="flex-none w-[230px] sm:w-[280px] snap-start group"
            >
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 card-depth card-depth-hover">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-4">
                    <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {product.emphasized && (
                    <Badge 
                        className="absolute right-4 top-4 border-none shadow-lg text-[9px] font-bold uppercase tracking-widest px-2"
                        style={{ backgroundColor: themedMain, color: 'white' }}
                    >
                        <Star className="mr-1 h-3 w-3 fill-current" /> Expert Choice
                    </Badge>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col h-[180px] justify-between">
                    <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{product.brand}</span>
                        <span className="font-display text-sm font-black text-foreground/80">{product.price || "€--"}</span>
                    </div>
                    <h4 className="font-display text-base font-bold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-1">{product.name}</h4>
                    <p className="mt-2 text-[11px] font-medium leading-relaxed text-muted-foreground line-clamp-2 italic">
                        "{product.bestFor}"
                    </p>
                    </div>

                    <div className="mt-4 flex gap-2">
                    <Button 
                        asChild 
                        className="w-full h-9 rounded-xl text-xs font-bold gap-2 shadow-sm transition-all"
                        style={{ backgroundColor: themedMain, color: 'white' }}
                    >
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                        Shop Now <ShoppingCart className="h-3.5 w-3.5" />
                        </a>
                    </Button>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-9 w-9 rounded-xl border-border hover:bg-muted group/btn"
                        asChild
                    >
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover/btn:text-foreground" />
                        </a>
                    </Button>
                    </div>
                </div>
                </div>
            </div>
            ))}
            
        </div>

        {/* Custom Themed Scrollbar (Always Visible) */}
        <div className="absolute bottom-0 left-0 right-0 h-2 px-4 sm:px-0 pointer-events-none">
            <div className="relative h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                <div 
                    className="absolute h-full rounded-full shadow-sm border border-white/50"
                    style={{ 
                        backgroundColor: themedOpaque,
                        width: `${thumbWidthPercentage}%`,
                        left: `${scrollPercentage * (1 - thumbWidthPercentage/100)}%`,
                        boxShadow: `0 0 10px ${themedLight}`,
                        transition: 'width 0.3s ease-out'
                    }}
                />
            </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .scrollbar-hide {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />
    </div>
  );
};
