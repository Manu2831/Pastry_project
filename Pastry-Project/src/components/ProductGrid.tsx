import ProductCard from "./ProductCard";
import { useSearch } from "../context/SearchContext";
import { mockproducts } from "../data/products";



export  default function ProductGrid(){
    const { query, sortOrder,SelectedTag } = useSearch();
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

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} Product={product} />
            ))}
        </div>
    );
}