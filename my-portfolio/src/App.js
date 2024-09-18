// App.js
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <HeroSection />
          <AboutMe />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
