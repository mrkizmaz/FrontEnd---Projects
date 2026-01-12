import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store} >
      <App />
      <ToastContainer autoClose={2000} />
    </Provider>
  </StrictMode>,
)
