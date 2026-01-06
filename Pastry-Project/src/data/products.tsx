export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tags: string[];
  description: string;
  sizes: string[];
  available: boolean;
}

export const mockproducts: Product[] = [
    {
    id: "1",
    name: "Pastel de Chocolate",
    price: 25000,
    image: "/assets/Logo.png",
    tags: ["Chocolate", "Vainilla"],
    description: "Pastel esponjoso de cacao puro, relleno con crema suave de vainilla y cubierto con una ganache de chocolate intenso.",
    sizes: ["S", "M", "XL"],
    available: true
  },
  {
    id: "2",
    name: "Tarta de Fresa",
    price: 30000,
    image: "/assets/tarta-fresa.jpg",
    tags: ["Frutos Rojos", "Almendras"],
    description: "Tarta fresca con capas de crema ligera, fresas naturales y base crujiente de almendras tostadas.",
    sizes: ["S", "M"],
    available: true
  },
  {
    id: "3" ,
    name: "Cheesecake Clásico",
    price: 32000,
    image: "/assets/cheesecake.jpg",
    tags: ["Queso", "Cremoso"],
    description: "Cheesecake horneado al estilo clásico, textura ultra cremosa y base de galleta artesanal.",
    sizes: ["M", "XL"],
    available: true
  },
  {
    id: "4",
    name: "Brownie de Chocolate",
    price: 18000,
    image: "/assets/brownie.jpg",
    tags: ["Chocolate", "Intenso"],
    description: "Brownie húmedo con chocolate semi amargo, centro fundente y costra crujiente por fuera.",
    sizes: ["S", "M"],
    available: true
  },
  {
    id: "5",
    name: "Pastel de Zanahoria",
    price: 28000,
    image: "/assets/pastel-zanahoria.jpg",
    tags: ["Zanahoria", "Nueces"],
    description: "Pastel especiado de zanahoria fresca con nueces, relleno y cubierto con frosting de queso crema.",
    sizes: ["S", "M", "XL"],
    available: true
  },
  {
    id: "6",
    name: "Torta Red Velvet",
    price: 35000,
    image: "/assets/red-velvet.jpg",
    tags: ["Chocolate", "Queso Crema"],
    description: "Clásica Red Velvet de textura aterciopelada con capas generosas de crema de queso.",
    sizes: ["M", "XL"],
    available: true
  },
  {
    id: "7",
    name: "Pastel de Limón",
    price: 26000,
    image: "/assets/pastel-limon.jpg",
    tags: ["Cítrico", "Refrescante"],
    description: "Pastel suave de limón natural con glaseado ligero y un equilibrio perfecto entre dulce y ácido.",
    sizes: ["S", "M"],
    available: true
  },
  {
    id: "8",
    name: "Tarta de Manzana",
    price: 29000,
    image: "/assets/tarta-manzana.jpg",
    tags: ["Manzana", "Canela"],
    description: "Tarta tradicional con manzanas caramelizadas, toque de canela y base crujiente horneada.",
    sizes: ["M", "XL"],
    available: true
  },
  {
    id: "9",
    name: "Cupcakes de Vainilla",
    price: 15000,
    image: "/assets/cupcakes-vainilla.jpg",
    tags: ["Vainilla", "Clásico"],
    description: "Cupcakes esponjosos de vainilla natural con frosting suave y delicadamente dulce.",
    sizes: ["S"],
    available: true
  },
  {
    id: "10",
    name: "Cupcakes de Chocolate",
    price: 16000,
    image: "/assets/cupcakes-chocolate.jpg",
    tags: ["Chocolate", "Cacao"],
    description: "Cupcakes intensos de cacao con crema de chocolate sedosa y acabado artesanal.",
    sizes: ["S"],
    available: true
  },
  {
    id: "11",
    name: "Tarta Tres Leches",
    price: 34000,
    image: "/assets/tres-leches.jpg",
    tags: ["Leche", "Tradicional"],
    description: "Bizcocho suave bañado en mezcla de tres leches, con crema ligera y toque de canela.",
    sizes: ["M", "XL"],
    available: true
  },
  {
    id: "12",
    name: "Pastel de Coco",
    price: 27000,
    image: "/assets/pastel-coco.jpg",
    tags: ["Coco", "Tropical"],
    description: "Pastel húmedo de coco natural con relleno cremoso y cobertura de coco rallado.",
    sizes: ["S", "M"],
    available: true
  },
  {
    id: "13",
    name: "Tarta de Oreo",
    price: 36000,
    image: "/assets/tarta-oreo.jpg",
    tags: ["Oreo", "Chocolate"],
    description: "Tarta cremosa con base y topping de galleta Oreo, perfecta para amantes del chocolate.",
    sizes: ["M", "XL"],
    available: true
  },
  {
    id: "14",
    name: "Pastel de Café",
    price: 29000,
    image: "/assets/pastel-cafe.jpg",
    tags: ["Café", "Intenso"],
    description: "Pastel aromático de café con crema suave y sabor profundo ideal para acompañar una tarde.",
    sizes: ["S", "M"],
    available: true
  },
  {
    id: "15",
    name: "Tarta de Durazno",
    price: 31000,
    image: "/assets/tarta-durazno.jpg",
    tags: ["Frutal", "Durazno"],
    description: "Tarta ligera con duraznos jugosos, crema pastelera y base horneada crujiente.",
    sizes: ["M"],
    available: true
  },
  {
    id: "16",
    name: "Pastel de Almendras",
    price: 33000,
    image: "/assets/pastel-almendras.jpg",
    tags: ["Almendras", "Gourmet"],
    description: "Pastel delicado de almendras molidas con textura suave y aroma tostado.",
    sizes: ["S", "M"],
    available: true
  },
  {
    id: "17",
    name: "Tarta de Chocolate Blanco",
    price: 35000,
    image: "/assets/chocolate-blanco.jpg",
    tags: ["Chocolate Blanco", "Cremoso"],
    description: "Tarta sedosa de chocolate blanco con equilibrio perfecto entre dulzor y cremosidad.",
    sizes: ["M", "XL"],
    available: true
  },
  {
    id: "18",
    name: "Pastel Marmoleado",
    price: 24000,
    image: "/assets/marmoleado.jpg",
    tags: ["Chocolate", "Vainilla"],
    description: "Pastel clásico marmoleado combinando vainilla y chocolate en cada rebanada.",
    sizes: ["S", "M"],
    available: true
  },
  {
    id: "19",
    name: "Tarta de Maracuyá",
    price: 34000,
    image: "/assets/maracuya.jpg",
    tags: ["Maracuyá", "Ácido"],
    description: "Tarta refrescante de maracuyá con crema suave y base crocante.",
    sizes: ["M"],
    available: true
  },
  {
    id: "20",
    name: "Pastel de Frutos Rojos",
    price: 37000,
    image: "/assets/frutos-rojos.jpg",
    tags: ["Frutos Rojos", "Premium"],
    description: "Pastel premium con mezcla de frutos rojos, capas de crema y sabor equilibrado.",
    sizes: ["M", "XL"],
    available: true
  }

];