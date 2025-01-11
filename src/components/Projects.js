import websiteImg1 from '../assets/Taskify.jpg';
import websiteImg2 from '../assets/translator.jpg';
import websiteImg3 from '../assets/face reconition.jpg';
import websiteImg4 from '../assets/blog.jpg';
import websiteImg5 from '../assets/ecommerce.jpeg';  // Your eCommerce image import

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: 'Created a Task Management Application using MERN STACK',
        link: 'https://github.com/Naveenkumar1812/FocusGrid.git',
      },
      {
        image: websiteImg2,
        description: 'Developed a Python-based language translator using API and Tkinter',
        link: 'https://github.com/Naveenkumar1812/GlobaLingo.git',
      },
      {
        image: websiteImg3,
        description: 'Developed an advanced security system using facial recognition for enhanced home security.',
        link: 'https://github.com/Naveenkumar1812/Face-Recognization-for-Home-Security.git',
      },
      {
        image: websiteImg4,
        description: 'Developed a Blog Application using the MERN stack with CRUD functionality and dynamic content rendering.',
        link: 'https://github.com/Naveenkumar1812/TechStacks.git',
      },
      {
        image: websiteImg5,
        description: 'Built a Full Stack E-Commerce website with product listing, cart, and order placement functionalities.',
        link: 'https://github.com/Naveenkumar1812/Ecommerce-Website.git', // Update with the correct GitHub link
      },      
    ],
  };

  return (
    <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-full md:w-1/2 mx-auto">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[145px] font-bold">Projects</h1>
          <p>Here are some of the projects I've worked on, showcasing my technical skills and problem-solving abilities.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center w-full">
        {config.projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="relative w-full max-w-[400px] px-5">
              <img className="h-[300px] w-full object-cover rounded-lg" src={project.image} alt="Project" />
              <div className="absolute inset-0 bg-secondary opacity-0 duration-500 hover:opacity-100 flex flex-col items-center justify-center rounded-lg">
                <p className="text-center text-white px-4 mb-4">{project.description}</p>
                <a
                  className='btn'
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  View Project
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
