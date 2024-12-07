import { FaFilm, FaShoppingCart, FaYoutube } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Modeling Project",
      description: "A creative modeling video showcasing the latest fashion trends.",
      type: "Modeling",
      video: "/video-sample.mp4",
      icon: <FaFilm className="text-4xl text-blue-500" />,
    },
    {
      id: 2,
      title: "E-Commerce Video",
      description: "A high-energy e-commerce video to promote a new product line.",
      type: "E-Commerce",
      video: "/video-sample.mp4",
      icon: <FaShoppingCart className="text-4xl text-yellow-500" />,
    },
    {
      id: 3,
      title: "YouTube Vlog",
      description: "A vlog-style video to engage a YouTube audience on a recent trip.",
      type: "YouTube",
      video: "/video-sample.mp4",
      icon: <FaYoutube className="text-4xl text-red-600" />,
    },
  ];

  return (
    <section id="projects" className="p-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:p-8 p-6 rounded-lg bg-gray-100 overflow-hidden">
              {/* Project Video */}
              <div className="relative w-full h-60 mb-4">
                {/* <video className="w-full h-full object-cover rounded-md" controls>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-opacity"></div>
              </div>
              {/* Project Details */}
              <div className="absolute inset-0 flex justify-center items-center text-white hover:text-black p-6 overflow-hidden  group-hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex justify-center items-center space-x-2">
                    {project.icon}
                    <span className="text-sm text-gray-200">{project.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
