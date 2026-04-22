import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  
  if (selectedNames.length === 0) return null;

  return (
    <div className={`fixed bottom-24 sm:bottom-12 left-1/2 z-[100] flex w-[calc(100%-2rem)] sm:w-auto -translate-x-1/2 flex-col sm:flex-row items-center justify-between sm:justify-start gap-4 sm:gap-8 rounded-3xl sm:rounded-[2.5rem] border-2 border-primary/40 bg-background/90 p-4 sm:p-5 shadow-[0_0_40px_rgba(var(--primary-rgb),0.3),0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-all duration-500 ring-4 ring-primary/5 ${
      isOpen ? "opacity-0 pointer-events-none scale-95 translate-y-10" : "opacity-100 scale-100 translate-y-0"
    }`}>
      <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-4 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-8">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Selected</span>
          <span className="text-sm font-bold text-primary">{selectedNames.length} Products</span>
        </div>
        <div className="flex -space-x-2 sm:-space-x-3">
          {selectedNames.map((name, i) => (
            <div 
              key={name} 
              className="h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-background flex items-center justify-center text-[10px] sm:text-xs font-black text-white uppercase shadow-xl transition-transform hover:-translate-y-1 hover:z-10"
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
      
      <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-4">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              className="flex-1 sm:flex-none h-12 px-10 rounded-2xl font-black text-sm uppercase tracking-wider shadow-[0_10px_20px_rgba(var(--primary-rgb),0.3)] transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 border-none text-white overflow-hidden whitespace-nowrap"
            >
              <ArrowRightLeft className="mr-2 h-4 w-4" /> Compare Now
            </Button>
          </DialogTrigger>
          <DialogContent className="z-[150] w-[95vw] sm:max-w-5xl rounded-3xl sm:rounded-[4rem] border-white/10 bg-background/95 backdrop-blur-3xl shadow-2xl p-4 sm:p-12">
            <DialogHeader className="mb-6 sm:mb-10 text-center sm:text-left">
              <DialogTitle className="font-display text-2xl sm:text-5xl font-black text-foreground flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center sm:justify-start">
                <div className="h-14 w-14 sm:h-20 sm:w-20 rounded-2xl sm:rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-inner text-left">
                  <ArrowRightLeft className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div>
                  <span className="block text-primary text-sm uppercase tracking-[0.3em] font-black mb-1">Analysis Mode</span>
                  Head-to-Head
                </div>
              </DialogTitle>
            </DialogHeader>
            <div className="relative max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {renderComparisonTable()}
            </div>
          </DialogContent>
        </Dialog>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-12 w-12 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all hover:rotate-90 shrink-0" 
          onClick={onClear}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
