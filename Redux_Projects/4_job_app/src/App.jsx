import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Create from './pages/create'
import Header from './components/header'
import api from './utills/api'
import { useDispatch } from 'react-redux'
import { setError, setJobs, setLoading } from './redux/slices/jobSlices'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    // reducera haber ver, veriler yüklendikten sonra setLoading'i false cek
    dispatch(setLoading());

    // api istegi at
    api.get("jobs")
      // basarili olursa reducera verilerin geldiginin haberini ver
      .then((res) => dispatch(setJobs(res.data)))
      // basarisiz olursa reducera hatanin haberini ver
      .catch((err) => dispatch(setError(err)))
  }, [])

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App