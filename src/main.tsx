import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SOIL from './components/SOIL.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SOIL/>
    <App/>
  </StrictMode>,
)
