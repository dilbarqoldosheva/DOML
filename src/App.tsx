import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/custom/Navbar'
import Home from './pages/Home'
import { useState, useEffect } from 'react'
import Footer from './components/custom/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
        <Navbar darkMode={darkMode}  setDarkMode={setDarkMode} />
        <Routes>
          <Route  path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

