import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="container m-6">
      <App />
    </div>
  </React.StrictMode>,
)
