import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header.tsx';
import Footer from '../layout/Footer.tsx';

export default function Inicio() {
    // 1. Lógica para el Roll de Imágenes
    const imagenes = [
        "/assets/Fondo-pan.jpg",
        "/assets/Fondo-E.png", // Añade aquí tus rutas de imágenes
        "/assets/FondoN.png"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 5000); // Cambia cada 5 segundos
        return () => clearInterval(intervalo);
    }, [imagenes.length]);

    return (
        <Fragment>
            <Header />
            <div className="flex flex-col w-full bg-[#fdf8f3]">
                
                {/* 🔹 SECCIÓN HERO: Roll de imágenes */}
                <section className="flex flex-col items-center w-full">
                    <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
                        {imagenes.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Slide ${i}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                    i === index ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Botón debajo de las imágenes */}
                    <div className="py-8 bg-[#fdf8f3] w-full flex justify-center">
                        <Link
                            to="/productos"
                            className="bg-[#4a2c2a] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#5d3a38] transition-all hover:scale-105 shadow-xl"
                        >
                            Realiza tu pedido
                        </Link>
                    </div>
                </section>

                {/* 🔹 SECCIÓN HISTORIA: Lado a lado en PC, Columna en Celular */}
                <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#4a2c2a] mb-2">
                            Panadería y Postrería
                        </h2>
                        <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full"></div>
                    </div>

                    {/* Flex col para móvil, flex row para pantallas md en adelante */}
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        
                        {/* Ilustración (Izquierda en PC) */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]  ">
                                <img
                                    src="/assets/Fondo.png"
                                    alt="Nuestra historia"
                                    className="w-full h-full object-contain rounded-full shadow-lg shadow-gray-50 "
                                />
                            </div>
                        </div>

                        {/* Texto (Derecha en PC) */}
                        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em]">Sobre nosotros</span>
                            <h3 className="text-2xl font-semibold text-[#4a2c2a]">El Fogón Dulce</h3>
                            <p className="text-gray-700 leading-relaxed text-lg italic">
                                "La panadería y postrería el fogón dulce..."
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Nuestro producto estrella siempre ha sido nuestro pastel con semillas de amapola, 
                                cuya preparación del más alto nivel nos permite seguir manteniendo el sabor 
                                auténtico que nos caracteriza.
                            </p>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </Fragment>
    );
}