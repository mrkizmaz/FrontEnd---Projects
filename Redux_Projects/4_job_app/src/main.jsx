import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles//style.scss'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={2000} theme={"dark"} />
    </Provider>
  </StrictMode>,
)
