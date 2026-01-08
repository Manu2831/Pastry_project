import ProductCard from "./ProductCard";
import { useSearch } from "../context/SearchContext";
import { mockproducts } from "../data/products";



export  default function ProductGrid(){
    const { query, sortOrder,SelectedTag, ItemsPerPage, currentPage,setCurrentPage,setItemsPerPage } = useSearch();
    const filteredProducts = mockproducts
        .filter(product => {
            const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
            const matchesTag = SelectedTag ? product.tags.includes(SelectedTag) : true;
            return matchesQuery && matchesTag;
        })
        .sort((a, b) => {
            if (sortOrder === "Precio: menor a mayor") return a.price - b.price;
            if (sortOrder === "Precio: mayor a menor") return b.price - a.price;
            if (sortOrder === "Nombre") return a.name.localeCompare(b.name);
            return 0;
        });
    const indexOfLastItem = currentPage * ItemsPerPage;
    const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / ItemsPerPage);

    return (
    <div className="flex flex-col items-center">
      {/* Grid de productos visibles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
        {currentItems.map(product => (
          <ProductCard key={product.id} Product={product} />
        ))}
      </div>

      {/* BARRA DE NAVEGACIÓN (Paginación) */}
      {totalPages > 1 && (
        <div className="flex gap-2 mt-8 mb-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Subir al inicio
              }}
              className={`w-10 h-10 rounded-full border transition-colors ${
                currentPage === page 
                ? "bg-pink-500 text-white border-pink-500" 
                : "bg-white text-gray-600 hover:border-pink-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}