import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailWrapper from "./pages/ProductDetailWrapper.tsx"; // Crearemos este
import Inicio from './pages/Inicio.tsx'
import Productos from './pages/Productos.tsx'
function App() {

  return (
   <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Productos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/product/:id" element={<ProductDetailWrapper />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
