import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContextProvider from './Context/ContextProvider'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
