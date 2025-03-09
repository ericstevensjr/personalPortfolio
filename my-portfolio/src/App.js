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
import LatestBlogPost from './components/LatestBlogPost';
import './App.css';
import { ThemeProvider } from "./context/ThemeContext";
import SEO from "./components/SEO";
import ErrorBoundary from "./components/ErrorBoundary";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ErrorBoundary>
          <SEO
            title="Eric Stevens Jr. | Portfolio"
            description="Eric Stevens Jr. is a U.S. Army Combat Infantryman turned Software Engineer and Businessman."
            keywords="Software Engineer, React Developer, Businessman, U.S. Army, Portfolio"
            url="https://ericstevensjr.com"
          />
          <div className="App">
            <Navbar />
            <main className="pt-24">
              <div className="container mx-auto px-4 md:px-8">
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <ErrorBoundary>
                        <HeroSection />
                        <LatestBlogPost />
                        <AboutMe />
                        <Projects />
                        <Contact />
                      </ErrorBoundary>
                    } 
                  />
                  <Route 
                    path="/blog" 
                    element={
                      <ErrorBoundary>
                        <SEO
                          title="Blog | Eric Stevens Jr."
                          description="Read my latest blog posts on technology, business, and life."
                          url="https://ericstevensjr.com/blog"
                        />
                        <Blog />
                      </ErrorBoundary>
                    } 
                  />
                  <Route
                    path="/blog/:id"
                    element={
                      <ErrorBoundary>
                        <SinglePost />
                      </ErrorBoundary>
                    }
                  />
                  <Route
                    path="/affiliations"
                    element={
                      <ErrorBoundary>
                        <SEO
                          title="Affiliations | Eric Stevens Jr."
                          description="Explore my professional affiliations and collaborations."
                          url="https://ericstevensjr.com/affiliations"
                        />
                        <Affiliations />
                      </ErrorBoundary>
                    }
                  />                  
                  <Route 
                    path="/contact" 
                    element={
                      <ErrorBoundary>
                        <SEO
                          title="Contact | Eric Stevens Jr."
                          description="Get in touch with Eric Stevens Jr."
                          url="https://ericstevensjr.com/#contact"
                        />
                        <Contact />
                      </ErrorBoundary>
                    }
                  />
                </Routes>
              </div>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;
