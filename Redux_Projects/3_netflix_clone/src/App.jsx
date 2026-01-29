import React, { useEffect } from 'react'
import Home from './pages/home'
import Detail from './pages/detail'
import Favorites from './pages/favorites'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getWatchList } from './redux/actions'

const App = () => {

  // hata oldugu zaman egale et
  window.addEventListener('error', (e) => {
    if (e.message.includes('postMessage')) {
      e.stopImmediatePropagation();
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchList());
  }, [])

  // izleme listesine eklenmis olan filmleri al ve storea aktar
  return (

    <BrowserRouter>

      <div className='p-5 md:p-10 lg:px-15 xl:px-20 flex flex-col min-h-screen'>

        <Header />

        <div className='flex-1'>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/watch-list" element={<Favorites />} />

          </Routes>

        </div>

        <Footer />

      </div>

    </BrowserRouter>

  )
}

export default App