import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Services, Blog, Contact, About } from "./pages"
import ScrollToTop from "./scrollToTop"
import Home from "./pages/Home"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
