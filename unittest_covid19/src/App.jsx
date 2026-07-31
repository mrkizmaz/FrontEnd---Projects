import React from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Header from './components/header'
import Layout from './components/layout'

// routerlari tanimladik
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/detail/:code", element: <Detail /> },
    ],
  },
])

// routerprovider ile routeri uygulamaya dahil ettik
const App = () => {

  return (

    <RouterProvider router={router} />

    // <BrowserRouter>

    //   <div className='flex flex-col min-h-screen'>
    //     <Header />

    //     <Routes>

    //       <Route path='/' element={<Home />} />
    //       <Route path='/detail/:code' element={<Detail />} />

    //     </Routes>
    //   </div>

    // </BrowserRouter>
  )
}

export default App