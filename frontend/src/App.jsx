import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Registration from './components/Registration';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this to handle scrolling on navigation */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;