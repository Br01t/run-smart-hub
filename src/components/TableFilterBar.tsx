import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface TableFilterBarProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  showFilters: boolean;
  setShowFilters: (val: boolean) => void;
  activeFiltersCount: number;
  onClearFilters: () => void;
  children: React.ReactNode;
  title?: string;
  accentColor?: string; // e.g. "hsl(25, 95%, 50%)"
}

export const TableFilterBar = ({
  searchTerm,
  setSearchTerm,
  showFilters,
  setShowFilters,
  activeFiltersCount,
  onClearFilters,
  children,
  title = "Technical Comparison",
  accentColor = "hsl(var(--primary))"
}: TableFilterBarProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background glow */}
      <div 
        className="absolute -right-24 -top-24 h-64 w-64 opacity-[0.03] blur-3xl pointer-events-none transition-colors duration-500" 
        style={{ backgroundColor: accentColor }}
      />
      
      <div className="flex flex-wrap items-center justify-between gap-4 bg-muted/40 px-6 py-4 border-b border-border backdrop-blur-sm relative z-10">
        <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-foreground">
          <div 
            className="flex h-8 w-8 items-center justify-center rounded-lg shadow-sm transition-colors duration-500"
            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
          >
            <SlidersHorizontal className="h-4 w-4" />
          </div>
          {title}
        </h3>
        
        <Button 
          variant={showFilters ? "secondary" : "outline"} 
          size="sm" 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 h-9 rounded-xl border-border hover:bg-muted transition-all"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          <span className="font-semibold">{showFilters ? "Hide Filters" : "Filters & Search"}</span>
          {(searchTerm || activeFiltersCount > 0) && (
            <Badge 
              className="ml-1 h-5 min-w-[20px] p-0 flex items-center justify-center rounded-full text-[10px] font-bold border-none"
              style={{ backgroundColor: accentColor, color: "white" }}
            >
              {activeFiltersCount + (searchTerm ? 1 : 0)}
            </Badge>
          )}
        </Button>
      </div>

      {showFilters && (
        <div className="border-b border-border bg-card/50 p-6 animate-in fade-in slide-in-from-top-4 duration-300 relative z-10 backdrop-blur-md">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 px-1">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                <Input 
                  placeholder="Type to find..." 
                  className="pl-9 h-10 bg-background/50 border-border/50 focus:border-primary/50 transition-all rounded-xl" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {children}

            <div className="space-y-2 flex flex-col justify-end">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-xs font-bold text-muted-foreground hover:bg-primary/5 hover:text-primary w-fit h-10 px-4 rounded-xl transition-all" 
                onClick={onClearFilters}
              >
                Clear all filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
