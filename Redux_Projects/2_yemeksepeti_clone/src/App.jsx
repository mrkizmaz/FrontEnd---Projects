import React, { useEffect } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Restaurant from './pages/Restaurant'
import Cart from './pages/Cart'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { getRestaurants } from './redux/acions/restActions'

const App = () => {

  // reducerdaki verilere abone ol
  const dispatch = useDispatch();

  // 2. yöntem (thunk ile)
  useEffect(() => {
    dispatch(getRestaurants());
  }, [])


  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/restaurant/:id' element={<Restaurant />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App