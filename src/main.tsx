import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/auth.context.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ToolsProvider } from './context/tools.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToolsProvider>
          <App />
        </ToolsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)