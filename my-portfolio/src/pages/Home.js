function Home() {

  return (

    <div className="container mx-auto p-4">

      <h2 className="text-4xl font-bold text-center mb-4">Welcome to My Portfolio</h2>
      <p className="text-center mb-8">I’m Eric Stevens, a software engineer with a passion for building efficient and scalable web applications.</p>

      <section className="my-8">
        
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        
        <p>
          I have a Bachelor's degree in Computer Science, and I specialize in web development, digital marketing, and SEO. 
          I enjoy working on innovative projects and helping businesses grow by leveraging technology.
        </p>
      
      </section>

      <section className="my-8">

        <h3 className="text-2xl font-bold mb-4">Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 border border-gray-300 rounded">
            <h4 className="text-xl font-bold mb-2">Project Name 1</h4>
            
            <p>A brief description of the project goes here. You can describe its purpose, the technologies used, and what makes it unique.</p>
            
            <a href="#" className="text-blue-500">View Project</a>
         
          </div>

          <div className="p-4 border border-gray-300 rounded">
            
            <h4 className="text-xl font-bold mb-2">Project Name 2</h4>
            
            <p>A brief description of the project goes here. You can describe its purpose, the technologies used, and what makes it unique.</p>
            
            <a href="#" className="text-blue-500">View Project</a>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
