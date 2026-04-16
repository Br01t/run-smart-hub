import { useState, useMemo } from 'react';

export function useProductTable<T>(data: T[], searchFields: (keyof T)[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});

  const filteredData = useMemo(() => {
    return data.filter((item: any) => {
      // Search logic
      const matchesSearch = searchTerm === "" || searchFields.some(field => 
        String(item[field]).toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      // Categorical filters logic
      const matchesFilters = Object.entries(activeFilters).every(([key, value]) => {
        return value === "all" || value === "" || String(item[key]) === value;
      });
      
      return matchesSearch && matchesFilters;
    });
  }, [data, searchTerm, activeFilters, searchFields]);

  const toggleSelection = (name: string) => {
    setSelectedNames(prev => {
      if (prev.includes(name)) {
        return prev.filter(n => n !== name);
      }
      if (prev.length >= 4) return prev; // Limit to 4 for readability
      return [...prev, name];
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setActiveFilters({});
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedNames,
    setSelectedNames,
    toggleSelection,
    activeFilters,
    setActiveFilters,
    filteredData,
    clearFilters
  };
}
