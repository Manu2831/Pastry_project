interface Props{
    Product: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
}

export default function ProductCard({ Product }: Props) {
    return (
        <div className="border border-gray-300 rounded-lg flex flex-col items-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
            
            {/* Contenedor de la Imagen (Fondo Blanco) */}
            <div className="bg-white w-full flex justify-center p-4">
                <img src={Product.image} alt={Product.name} className="w-32 h-32 object-cover" />
            </div>

            {/* Nueva zona con fondo Gris */}
            <div className="bg-stone-100 w-full p-4 flex flex-col items-center grow">
                <h3 className="text-lg font-semibold mb-2 text-center">
                    {Product.name}
                </h3>
                <p className="text-gray-700 mb-4 font-medium">
                    ${Product.price.toLocaleString()}
                </p>
                <button className="w-full bg-white border border-pink-400 text-black px-4 py-2 rounded-4xl hover:bg-pink-500 hover:text-white transition-colors duration-300">
                    Agregar al carrito
                </button>
            </div>

        </div>
    );
}