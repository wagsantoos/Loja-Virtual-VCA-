import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/Home/styles/style.css'
import HomePage from './pages/Home/HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
