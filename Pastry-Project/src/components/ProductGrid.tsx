import ProductCard from "./ProductCard";

const mockproducts = [
    {id:1, name:"Pastel de Chocolate", price: 25000, image:"/assets/pastel-chocolate.jpg"},
    {id:2, name:"Tarta de Fresa", price: 30000, image:"/assets/tarta-fresa.jpg"},
    {id:3, name:"Brownie", price: 15000, image:"/assets/brownie.jpg"},
    {id:4, name:"Donas", price: 12000, image:"/assets/donas.jpg"},
    {id:5, name:"Cupcake de Vainilla", price: 18000, image:"/assets/cupcake-vainilla.jpg"},
    {id:6, name:"Galletas de Avena", price: 10000, image:"/assets/galletas-avena.jpg"}

];

export  default function ProductGrid(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {mockproducts.map(product => (
                <ProductCard key={product.id} Product={product} />
            ))}
        </div>
    );
}