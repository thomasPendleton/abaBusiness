import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Services } from "./pages"
import "./App.css"
import Home from "./pages/Home"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<Home />} />
        <Route path='/blog' element={<Home />} />
        <Route path='/contact' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
