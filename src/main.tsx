import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

// Moment config
import moment from 'moment'
import 'moment/dist/locale/pt-br'
moment.locale('pt-BR')

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/portifolio/">
      <App />
    </Router>
  </React.StrictMode>
)
