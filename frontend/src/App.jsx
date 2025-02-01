import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/Users/kushalarogyaswami/Documents/ideathon-1/frontend/src/assets/Logo.jpeg'
//dont use app.css
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/shared/Header"
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Resources from './components/Resources'
import Team from './components/Team'
import Gallery from './components/Gallery'

import Registration from './components/Registration'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Registration" element= {<Registration />} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="/resources" element= {<Resources />} />
      <Route path="/gallery" element= {<Gallery />} />
      <Route path="/team" element= {<Team />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
