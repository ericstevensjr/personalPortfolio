import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
