import {  Phone, Mail } from "lucide-react";
export default function Footer() {
    return(
        <footer className="w-full  border-t mt-8  bg-slate-100 border-gray-300 ">
            
            <div className="max-w-6xl mx-auto sm:items-center px-6 py-12">
                <h2 className="  text-pink-300 text-xl">Contactanos</h2>
                <div className="py-5 flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    <span>(+57) 3175944368</span>
                    <Mail className="w-3 h-3" />
                    <span>giseltor1406@gmail.com</span>
                </div>
                <span className="">&copy; Todos los derechos reservados a el Fogon Dulce Panaderia Artesanal 2026</span>
            </div>    
        </footer>
    );
}