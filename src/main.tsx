import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Header&Footer/Header.tsx'
import Home from './components/fichires/Acceuil.tsx'
import NavBars from './components/Header&Footer/NavBar.tsx'
import NotFound from './components/fichires/erreurs_pages/page_not_found_404.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <App />
  </StrictMode>
)
