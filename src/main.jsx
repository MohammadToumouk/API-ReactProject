import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ApiServer from './components/Api.jsx'
import ApiComments from './components/Comments.jsx'
import ApiUsers from './components/Users.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Popover } from 'react-bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <App /> 
    <ApiUsers />
    <ApiServer />
    
  </React.StrictMode>,
)
