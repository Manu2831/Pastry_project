import {  Phone, Mail } from "lucide-react";
import { MapPin, Clock } from "lucide-react";
export default function Footer() {
    return(
        <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Columna Sedes */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#4a2c2a] font-bold">
              <MapPin className="w-5 h-5 text-pink-400" />
              <h3>Nuestras Sedes</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>#</li>
              
            </ul>
          </div>

          {/* Columna Horarios */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#4a2c2a] font-bold">
              <Clock className="w-5 h-5 text-pink-400" />
              <h3>Horarios de atención</h3>
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-pink-500">Lunes a Domingo</p>
              <p>6:30 am - 9:00 pm</p>
            </div>
          </div>

          {/* Columna Contacto Rápido */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#4a2c2a] font-bold">
              <Phone className="w-5 h-5 text-pink-400" />
              <h3>Líneas de atención</h3>
            </div>
            <p className="text-sm text-gray-600">
              ¿Tienes dudas? comunicate al <br />
              <span className="font-bold text-lg text-[#4a2c2a]">(+57) 317 594 4368</span>
            </p>
          </div>

        </div>
      </section>
    );
}