import { Search, User, Heart, ShoppingBag, Phone, Mail } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartDrawer from "../components/cartDrawer";


export default function Header() {
  const { items, toggleCart } = useCart();
  return (
    <header className="w-full flex flex-col">
        <CartDrawer />
        {/* 🔹 Top bar (teléfono + mail) */}
        <div className="w-full bg-gray-100">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-2 gap-2 sm:gap-4 text-xs">
                <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    <span>(+57) 3175944368</span>
                    <Mail className="w-3 h-3" />
                    <span>giseltor1406@gmail.com</span>
                </div>
            </div>
        </div>

        {/* 🔹 Header principal */}
        <div className="w-full border-b border-gray-300">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-6 lg:py-10">

            {/* Íconos izquierda */}
            <div className="flex items-center gap-3 sm:gap-4">
                <User className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                <Search className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
            </div>

            {/* LOGO */}
            <div className="flex justify-center">
                <img src="/assets/Logo.png" alt="Logo" className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain cursor-pointer" />
            </div>
            {/* Íconos derecha */}
            <div className="flex items-center gap-3 sm:gap-4">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                <button onClick={toggleCart} className="relative cursor-pointer">
                    <ShoppingBag className="w-7 h-7" />
                    {items.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {items.length}
                    </span>
                    )}
                </button>
            </div>
            </div>
        </div>

        {/* 🔹 Navbar */}
        <nav className="w-full">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-10 px-4 py-4 text-sm sm:text-base">
                <a href="/" className="hover:text-pink-300">Inicio</a>
                <a href="/about" className="hover:text-pink-300">Quiénes Somos</a>
                <a href="/products" className="hover:text-pink-300">Productos</a>
            </div>
        </nav>

    </header>
  );
}
