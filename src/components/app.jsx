import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/scrollUp';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Projects from './pages/project-page/Projects';
import About from './pages/about-page/About'; 
import Contact from './pages/contact-page/Contact'; 
import Home from './pages/Home'; 

function App() {
    return (
        <div>
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
