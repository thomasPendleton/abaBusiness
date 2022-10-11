import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Services, Blog } from "./pages"
import "./App.css"
import Home from "./pages/Home"
import Header from "./components/Header"
import Sidebar from './components/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
