import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router'
import '../i18next.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>  
     <Suspense fallback="loading">
    <App />
    </Suspense></BrowserRouter>
  </StrictMode>,
  
)
