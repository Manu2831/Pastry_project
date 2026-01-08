import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface SearchContextType {
    query: string;
    setQuery: (query: string) => void;
    sortOrder: string; 
    setSortOrder: (order: string) => void; 
    SelectedTag: string | null;
    setSelectedTag: (tag: string | null) => void;
    ItemsPerPage: number;
    setItemsPerPage: (n: number) => void;
    currentPage: number;
    setCurrentPage: (n: number) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
    const [query, setQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("Más vendidos"); // Estado inicial
    const [SelectedTag, setSelectedTag] = useState<string | null>(null);
    const [ItemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const handleQueryChange = (q: string) => { setQuery(q); setCurrentPage(1); };

    return (
        <SearchContext.Provider value={{ query, setQuery: handleQueryChange, sortOrder, setSortOrder, SelectedTag, setSelectedTag, ItemsPerPage, setItemsPerPage, currentPage, setCurrentPage }}>
        {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) throw new Error("useSearch must be used within a SearchProvider");
    return context;
}