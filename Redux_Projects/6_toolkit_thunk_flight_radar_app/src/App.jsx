import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Map from "./pages/Map";
import List from "./pages/List";
import Header from "./components/Header"
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions';
import Modal from './components/Modal';

const App = () => {

  // detayi gösterilecek ucusun id'si
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, [])

  // console.log(detailId);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List />} />
      </Routes>

      {/* detailId state'i doluysa ekrana modal bas ve id propu gönder  */}
      {true && <Modal id={detailId} close={() => setDetailId(null)} />}

    </BrowserRouter>
  )
}

export default App