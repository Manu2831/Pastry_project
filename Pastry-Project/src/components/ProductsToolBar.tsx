export default function ProductsToolbar() {
  return (
    <div className="w-full flex justify-end mb-6">

      <div className="flex flex-wrap items-center gap-6 text-sm">

        {/* ORDENAR */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Ordenar por</span>
          <select className="border rounded-full px-4 py-1 focus:outline-none">
            <option>Más vendidos</option>
            <option>Precio: menor a mayor</option>
            <option>Precio: mayor a menor</option>
            <option>Nombre</option>
          </select>
        </div>

        {/* MOSTRAR */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Mostrar</span>
          <select className="border rounded-full px-3 py-1 focus:outline-none">
            <option>12</option>
            <option>24</option>
            <option>36</option>
          </select>
        </div>

      </div>
    </div>
  );
}
