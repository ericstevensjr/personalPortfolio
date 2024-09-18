// src/components/Projects.js
import projectOneCover from "../assets/pOneCover.png"

function Projects() {
  const projectList = [
    {
      name: 'Eric Stevens Jr.\'s Portfolio',
      description: 'This is my personal portfolio website built using React and Tailwind CSS. It showcases my skills, experience, and personal projects.',
      technologies: ['React', 'Tailwind CSS', 'Netlify'],
      image: projectOneCover, // You can add a relevant image if you have one
      link: 'https://github.com/ericstevensjr/personalPortfolio', // Replace with your actual GitHub repo link
      liveDemo: 'https://ericstevensjr.com', // Replace with your actual live site link
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="my-16 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
            {/* Add width and height classes to the image to resize */}
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-49 h-auto mx-auto mt-4"  /* Set width to 32 and auto height for maintaining aspect ratio */
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="mb-4"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <div className="text-center flex space-x-4 justify-center">
                <a href={project.liveDemo} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
