import { X } from "lucide-react";
import {  useCart } from "../context/CartContext";
import type { CartItem as ItemType, } from "../context/CartContext";

export default function CartItem({ item }: { item: ItemType }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />

      <div className="flex-1">
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-600">
          ${item.price.toLocaleString("es-CO")} x {item.quantity}
        </p>
      </div>

      <button onClick={() => removeFromCart(item.id)}>
        <X className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
}
