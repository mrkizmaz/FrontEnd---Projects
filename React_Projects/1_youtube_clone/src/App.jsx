import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Feed from "./pages/Feed"
import Detail from "./pages/Detail"

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<Detail />} />
        <Route path="/search" element={<h1>Search</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App