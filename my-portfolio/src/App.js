// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Affiliations from './components/Affiliations';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="pt-24">
          <div className="container mx-auto px-4 md:px-8">
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <AboutMe />
                  <Projects />
                  <Contact />
                </>
              } />
              <Route path="/blog" element={<Blog />} />
              <Route path="/affiliations" element={<Affiliations />}  />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
