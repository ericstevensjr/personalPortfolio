// src/components/Projects.js

function Projects() {
    const projectList = [
      {
        name: 'Project Name 1',
        description: 'A brief description of the project highlighting key features.',
        technologies: ['React', 'Node.js', 'Express'],
        image: 'path-to-image', // Replace with actual image path or URL
        link: 'https://github.com/ericstevensjr/project1',
        liveDemo: 'https://project1-demo.com',
      },
      // Add more projects as needed
    ];
  
    return (
      <section id="projects" className="my-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100 transition-colors duration-300">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden dark:border-gray-700"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
  
              {/* Project Details */}
              <div className="p-4">
                {/* Project Name */}
                <h3 className="text-center text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                  {project.name}
                </h3>
  
                {/* Project Description */}
                <p className="text-center mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
  
                {/* Technologies Used */}
                <p className="text-center mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
  
                {/* Centered Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.liveDemo}
                    className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  