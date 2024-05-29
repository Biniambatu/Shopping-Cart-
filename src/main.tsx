import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './context/CartContext.tsx'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </React.StrictMode>,
)
