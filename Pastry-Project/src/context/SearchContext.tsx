import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  sortOrder: string; 
  setSortOrder: (order: string) => void; 
  SelectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
    const [query, setQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("Más vendidos"); // Estado inicial
    const [SelectedTag, setSelectedTag] = useState<string | null>(null);

    return (
        <SearchContext.Provider value={{ query, setQuery, sortOrder, setSortOrder, SelectedTag, setSelectedTag }}>
        {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) throw new Error("useSearch must be used within a SearchProvider");
    return context;
}