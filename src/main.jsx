import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/styles/styleGlobal.css'
import HomePage from './pages/Home/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductPage />
  </StrictMode>,
)
