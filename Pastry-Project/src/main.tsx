import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CartProvider } from './context/CartContext.tsx'
import { SearchProvider } from './context/SearchContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CartProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
      </CartProvider>
  </StrictMode>,
)
