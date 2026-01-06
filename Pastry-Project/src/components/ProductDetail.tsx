import { useState } from "react";
import { Heart, ShoppingCart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductDetail({ product }: { product: any }) {
  const { addToCart, toggleCart, isOpen } = useCart();
  
  // --- ESTADOS ---
  const [quantity, setQuantity] = useState(1);
  // Inicializamos con la primera talla disponible en el array del producto
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  // --- LÓGICA DE PRECIO ---
  const getPriceBySize = (size: string) => {
    if (size === "M") return product.price + 10000;
    if (size === "XL") return product.price + 25000;
    return product.price; // Talla S o base
  };

  const currentUnitPrice = getPriceBySize(selectedSize);
  const totalValue = currentUnitPrice * quantity;

  // --- ACCIÓN: AGREGAR AL CARRITO ---
  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedSize}`, 
      name: `${product.name} (${selectedSize})`,
      price: currentUnitPrice,
      image: product.image,
      quantity: quantity
    });
    
    if (!isOpen) toggleCart();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-12 animate-in fade-in duration-500">
      {/* Lado Izquierdo: Imagen */}
      <div className="flex-1">
        <div className="sticky top-10 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
          <img src={product.image} alt={product.name} className="w-full h-[400px] object-contain" />
        </div>
      </div>

      {/* Lado Derecho: Detalles */}
      <div className="flex-1 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-3xl text-pink-400 font-medium">
            ${currentUnitPrice.toLocaleString()}
          </p>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          {product.description}
        </p>

        {/* SELECCIÓN DE TALLAS */}
        <div className="space-y-4">
          <span className="font-bold text-gray-700 uppercase tracking-wider text-sm">Seleccionar Tamaño:</span>
          <div className="flex gap-3">
            {product.sizes.map((size: string) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-14 h-14 flex items-center justify-center rounded-full border-2 transition-all duration-200 font-bold ${
                  selectedSize === size
                    ? "border-pink-400 bg-pink-50 text-pink-500 shadow-md"
                    : "border-gray-200 text-gray-400 hover:border-pink-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* CANTIDAD Y SUBTOTAL */}
        <div className="flex flex-wrap items-center gap-10 py-6 border-y border-gray-100">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase">Cantidad</span>
            <div className="flex items-center border-2 border-gray-200 rounded-full px-2 py-1">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center text-xl hover:text-pink-500">-</button>
              <span className="w-10 text-center font-bold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center text-xl hover:text-pink-500">+</button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-gray-400 uppercase">Total a pagar</span>
            <span className="text-2xl font-bold text-gray-800">
              ${totalValue.toLocaleString()}
            </span>
          </div>
        </div>

        {/* BOTONES DE ACCIÓN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 bg-pink-500 text-white py-4 rounded-full font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-100"
          >
            <ShoppingCart className="w-5 h-5" /> Agregar al Carrito
          </button>
          
          <button className="flex items-center justify-center gap-2 bg-white border-2 border-pink-500 text-pink-500 py-4 rounded-full font-bold hover:bg-pink-50 transition-all">
            Comprar Ahora
          </button>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4 text-green-500" />
            <span>{product.available ? 'En stock' : 'Agotado'}</span>
          </div>
          <button className="flex items-center gap-1 hover:text-pink-500 transition-colors font-medium">
            <Heart className="w-4 h-4" /> Añadir a deseos
          </button>
        </div>
      </div>
    </div>
  );
}