// components/SidebarFilters.tsx
import { useSearch } from "../context/SearchContext";
import { X } from "lucide-react"; // Importa un icono de X

export default function SidebarFilters() {
  const { SelectedTag, setSelectedTag } = useSearch();
  
  const etiquetas = [
    "Almendras", "Arequipe", "Banano", "Bocadillo", "Chocolate", 
    "Frutos Rojos", "Red Velvet", "Vainilla"
  ];

  return (
    <aside className="w-full p-6 bg-white border-t lg:border-t-0 lg:border-r border-gray-100">
      <button 
        onClick={() => setSelectedTag(null)} 
        className={`w-full font-bold text-left mb-6 px-6 py-2 rounded-full transition-all duration-300 flex justify-between items-center group ${
          SelectedTag ? 'bg-amber-300 shadow-md' : 'bg-amber-200 hover:bg-amber-300'
        }`}
      >
        <span>{SelectedTag ? `Filtrando: ${SelectedTag}` : "Etiquetas"}</span>
        {SelectedTag && <X className="w-4 h-4 group-hover:scale-125 transition-transform" />}
      </button>

      <ul className="flex flex-wrap lg:flex-col gap-3 lg:space-y-2">
        {etiquetas.map((sabor) => (
          <li 
            key={sabor} 
            onClick={() => setSelectedTag(sabor)}
            className={`cursor-pointer border-b border-gray-100 pb-2 lg:w-full transition-colors ${
              SelectedTag === sabor 
                ? "text-pink-600 font-bold border-pink-200" 
                : "text-gray-700 hover:text-pink-500"
            }`}
          >
            {sabor}
          </li>
        ))}
      </ul>
    </aside>
  );
}