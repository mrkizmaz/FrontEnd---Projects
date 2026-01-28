import React from 'react'
import Home from './pages/home'
import Detail from './pages/detail'
import Favorites from './pages/favorites'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  window.addEventListener('error', (e) => {
    if (e.message.includes('postMessage')) {
      e.stopImmediatePropagation();
    }
  });
  return (

    <BrowserRouter>

      <div className='p-5 md:p-10 lg:px-15 xl:px-20 flex flex-col min-h-screen'>

        <Header />

        <div className='flex-1'>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />

          </Routes>

        </div>

        <Footer />

      </div>

    </BrowserRouter>

  )
}

export default App