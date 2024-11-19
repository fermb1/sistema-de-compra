import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbars from "./components/navbar.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbars/>
    <App/>
  </StrictMode>,
)
