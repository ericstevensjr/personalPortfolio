// Projects.js
function Projects() {
    const projectList = [
      {
        name: 'Project Name 1',
        description: 'A brief description of the project highlighting key features.',
        technologies: ['React', 'Node.js', 'Express'],
        image: 'path-to-image',
        link: 'https://github.com/ericstevensjr/project1',
        liveDemo: 'https://project1-demo.com',
      },
      // Add more projects as needed
    ];
  
    return (
      <section id="projects" className="my-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <p className="mb-4"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                <div className="flex space-x-4">
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
  