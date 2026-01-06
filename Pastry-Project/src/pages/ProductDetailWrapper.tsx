import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import Header from "../layout/Header";
import { mockproducts } from "../data/products";



export default function ProductDetailWrapper() {
  const { id } = useParams(); // Obtiene el ID de la URL
  
  const product = mockproducts.find((p) => p.id === id);

  if (!product) {
    return <div className="p-10 text-center">Producto no encontrado</div>;
  }

  return (
    <>
      <Header />
      <div className="pt-10">
        <ProductDetail product={product} />
      </div>
    </>
  );
}
    