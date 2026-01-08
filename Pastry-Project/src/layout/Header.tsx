import { useState, useEffect } from "react"; // 1. Importamos hooks
import { Search, User, Heart, ShoppingBag} from "lucide-react";
import { useCart } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import { useSearch } from "../context/SearchContext";
import { Link } from "react-router-dom";

export default function Header() {
    const { items, toggleCart } = useCart();
    const { query, setQuery } = useSearch();
    const [isSticky, setIsSticky] = useState(false); // 2. Estado para el scroll

    const TotalItems = items.reduce((total, item) => total + item.quantity, 0);

    // 3. Lógica para detectar el scroll (se activa al bajar 150px)
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <header className="w-full flex flex-col">
        <CartDrawer />
        
        {/* 🔹 Header principal (Se mantiene estático arriba) */}
        <div className="w-full border-b bg-gray-50 border-gray-300">
            <div className="max-w-6xl mx-auto flex items-center px-4 sm:px-6 lg:px-10 py-6 lg:py-10">
                {/* 1. Contenedor Izquierda */}
                <div className="flex-1 flex items-center gap-3 sm:gap-4">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-pink-400 transition-colors" />
                    <div className="relative flex items-center w-full max-w-[200px] bg-white">
                        <Search className="absolute left-2 w-4 h-4 text-gray-400" />
                        <input 
                            type="text" 
                            className="w-full border border-gray-300 rounded-full pl-8 pr-4 py-1 text-sm focus:outline-none focus:border-pink-300" 
                            placeholder="Buscar.."
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                        />
                    </div>
                </div>

                {/* 2. LOGO */}
                <div className="flex shrink-0 px-4">
                    <Link to="/inicio">
                        <img 
                            src="/assets/Logo.png" 
                            alt="Logo" 
                            className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain cursor-pointer transition-transform hover:scale-105" 
                        /> 
                    </Link>
                </div>

                {/* 3. Contenedor Derecha */}
                <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-pink-400 transition-colors" />
                    <button onClick={toggleCart} className="relative cursor-pointer group">
                        <ShoppingBag className="w-7 h-7 group-hover:text-pink-400 transition-colors" />
                        {TotalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                {TotalItems}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </div>

        {/* 🔹 Navbar STICKY */}
        {/* Usamos fixed, z-50 para que esté por encima, y shadow-md para la altura */}
        <nav className={`w-full transition-all duration-300 z-50  ${
            isSticky 
            ? "fixed top-0 left-0 bg-white shadow-md py-3" 
            : "relative bg-white py-4"
        }`}>
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-10">
                
                {/* Espaciador invisible a la izquierda solo en sticky para que los links sigan centrados */}
                {isSticky && <div className="flex-1 hidden sm:block"></div>}

                {/* Links de navegación */}
                <div className={`flex justify-center gap-6 sm:gap-10 text-sm sm:text-base font-medium  ${isSticky ? "flex-[2]" : "w-full"}`}>
                    <Link to="/inicio" className="hover:text-pink-300 transition-colors text-gray-700">Inicio</Link>
                    <Link to="/productos" className="hover:text-pink-300 transition-colors text-gray-700">Productos</Link>
                    <Link to="/contacto" className="hover:text-pink-300 transition-colors text-gray-700">Contacto</Link>
                </div>

                {/* Carrito a la derecha que SOLO aparece cuando es sticky */}
                {isSticky && (
                    <div className="flex-1 flex justify-end">
                        <button onClick={toggleCart} className="relative cursor-pointer group">
                            <ShoppingBag className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
                            {TotalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {TotalItems}
                                </span>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </nav>

        {/* 4. Spacer: evita que el contenido "salte" cuando la nav se vuelve fixed */}
        {isSticky && <div className="h-[56px]"></div>}

    </header>
  );
}