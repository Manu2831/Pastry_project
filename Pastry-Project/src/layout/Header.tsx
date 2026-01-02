import { Search, User, Heart, ShoppingBag, Phone } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full  flex-col items-center ">
            <div className="w-full   bg-gray-100 flex items-center justify-between box-shadow-md">
                <div className=" pt-3 px-4 md:px-15 items-center flex gap-2 mb-4">
                    <Phone className="w-3 h-3 cursor-pointer" />
                    <p className="text-xs text-black ">(+57) 3175944368</p>
                </div>    
            </div>
            {/*Los cositos de la izquierda*/}
            <div className="w-full mx-auto border-b border-gray-300 flex items-center justify-between px-10 py-7">
                <div className="items-center flex gap-4">
                    <User className="w-7 h-7 cursor-pointer" />
                    <Search className="w-7 h-7 cursor-pointer" />
                </div>
                {/*Logo*/}
                <div className="flex items-center justify-center">
                    <img src="../assets/Logo.png" alt="Logo" className="h-14 object-contain" />
                </div>
                {/*cositos derecha*/}
                <div className=" items-center flex gap-4">
                    <Heart className="w-7 h-7 cursor-pointer" />
                    <ShoppingBag className="w-7 h-7 cursor-pointer" />
                </div>
            </div>
            <nav className="w-full  bg-white ">
                <div className="justify-center max-w-6xl mx-auto flex gap-10 px-4 py-3 text-sm ">
                    <a href="/">Inicio</a>
                    <a href="/about">Quiénes Somos</a>
                    <a href="/products">Productos</a>
                </div>
            </nav>
        </header>
    
    );
}
