import React from 'react'
import { Router } from 'react-chrome-extension-router'
import ReactDOM from 'react-dom/client'
import { MainPage } from './pages/MainPage'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <MainPage />
    </Router>
  </React.StrictMode>
)
