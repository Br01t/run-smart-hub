import { X, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";

interface ComparisonTrayProps {
  selectedNames: string[];
  selectedProducts: any[];
  onClear: () => void;
  renderComparisonTable: () => React.ReactNode;
}

export const ComparisonTray = ({
  selectedNames,
  selectedProducts,
  onClear,
  renderComparisonTable
}: ComparisonTrayProps) => {
  if (selectedNames.length === 0) return null;

  return (
    <div className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 rounded-[2rem] border border-white/20 bg-background/60 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl animate-in slide-in-from-bottom-8 duration-500 ring-1 ring-white/10">
      <div className="flex items-center gap-4 border-r border-white/10 pr-6">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Selected</span>
          <span className="text-sm font-bold text-foreground">{selectedNames.length} Products</span>
        </div>
        <div className="flex -space-x-3">
          {selectedNames.map((name, i) => (
            <div 
              key={name} 
              className="h-10 w-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-black text-white uppercase shadow-xl transition-transform hover:-translate-y-1 hover:z-10"
              style={{ 
                background: `linear-gradient(135deg, hsl(${i * 60 + 200}, 80%, 60%), hsl(${i * 60 + 230}, 80%, 40%))`,
                zIndex: selectedNames.length - i
              }}
            >
              {name.charAt(0)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="h-12 px-8 rounded-2xl font-black text-sm uppercase tracking-wider shadow-[0_10px_20px_rgba(var(--primary-rgb),0.3)] transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-400 border-none text-white"
            >
              <ArrowRightLeft className="mr-2 h-4 w-4" /> Compare Now
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border-white/10 bg-background/95 backdrop-blur-3xl shadow-2xl p-8">
            <DialogHeader className="mb-8">
              <DialogTitle className="font-display text-4xl font-bold text-foreground flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <ArrowRightLeft className="h-6 w-6" />
                </div>
                Head-to-Head Comparison
              </DialogTitle>
            </DialogHeader>
            <div className="relative">
              {renderComparisonTable()}
            </div>
          </DialogContent>
        </Dialog>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-10 w-10 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors" 
          onClick={onClear}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
