import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import LatestBlogPost from '../components/LatestBlogPost';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <HeroSection />
      <AboutMe />
      <LatestBlogPost />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
