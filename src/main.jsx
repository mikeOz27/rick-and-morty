import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// script.js
import "nes.css/css/nes.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
