import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailWrapper from "./pages/ProductDetailWrapper.tsx"; // Crearemos este

import Productos from './pages/Productos.tsx'
function App() {

  return (
   <BrowserRouter>
      <Routes>
        
        
        <Route path="/productos" element={<Productos />} />
        <Route path="/product/:id" element={<ProductDetailWrapper />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
