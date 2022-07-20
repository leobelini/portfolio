import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App'
import './index.css'

// Moment config
import moment from 'moment'
import 'moment/dist/locale/pt-br'
moment.locale('pt-BR')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
