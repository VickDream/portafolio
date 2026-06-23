import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // <- Asegúrate de importar BrowserRouter
import './App.css'
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import Proyects from './components/Proyects'
import Contact from './components/Contact'
import SpaceBackground from './components/SpaceBackground'

function App() {
  return (
    // Cambiamos <Router> por <BrowserRouter>
    <BrowserRouter>
      <div className="app-container">
        <SpaceBackground />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/proyects" element={<Proyects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App