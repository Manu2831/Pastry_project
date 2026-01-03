import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

export default function CartDrawer() {
  const { items, total, isOpen, toggleCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div
        className="
          relative bg-white h-full flex flex-col
          w-full sm:w-[420px]
          p-4 sm:p-6
          animate-slide-in
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg sm:text-xl flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Carrito
          </h2>
          <button
            onClick={toggleCart}
            className="text-xl font-light"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Tu carrito está vacío
            </p>
          ) : (
            items.map(item => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t pt-4">
          <div className="flex justify-between mb-4 text-sm sm:text-base">
            <span className="font-medium">TOTAL</span>
            <span className="font-semibold">
              ${total.toLocaleString("es-CO")}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="w-full bg-black text-white py-3 rounded-full">
              Finalizar pedido
            </button>
            <button className="w-full bg-black text-white py-3 rounded-full">
              Ver carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
