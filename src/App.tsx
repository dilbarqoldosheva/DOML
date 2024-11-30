import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/custom/Navbar';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import Footer from './components/custom/Footer';

export default function App() {
  // Check localStorage for the saved darkMode setting
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  useEffect(() => {
    // Save the darkMode state to localStorage
    localStorage.setItem('darkMode', darkMode.toString());

    // Apply the dark class to the body element
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
