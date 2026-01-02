interface Props{
    Product: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
}

export default function ProductCard({ Product }: Props) {
    return(
        <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <img src={Product.image} alt={Product.name} className="w-32 h-32 object-cover mb-4" />
            <h3 className="text-lg font-semibold mb-2">{Product.name}</h3>
            <p className="text-gray-600 mb-4">${Product.price.toFixed(2)}</p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300">
                Agregar al carrito
            </button>
        </div>
    );
}