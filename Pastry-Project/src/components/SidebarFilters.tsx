export default function SidebarFilters() {
  const etiquetas = [
    "Almendras", "Arequipe", "Banano", "Bocadillo", "Chocolate", 
    "Frutos Rojos", "Red Velvet", "Vainilla"
  ];

  return (
    
    <aside className="w-full p-6 bg-white border-t lg:border-t-0 lg:border-r border-gray-100">
      <button className=" w-full font-bold text-0.9xl text-left mb-6 bg-amber-200 px-6 py-2 rounded-full hover:bg-amber-300  hover:shadow-lg transition-shadow duration-300">
        Etiquetas
      </button>

      {/* En móvil podemos mostrar las etiquetas en fila para ahorrar espacio */}
      <ul className="flex flex-wrap lg:flex-col gap-3 lg:space-y-2">
        {etiquetas.map((sabor) => (
          <li key={sabor} className="text-gray-700 cursor-pointer hover:text-pink-500 border-b border-gray-100 pb-2 lg:w-full">
            {sabor}
          </li>
        ))}
      </ul>
    </aside>
  );
}