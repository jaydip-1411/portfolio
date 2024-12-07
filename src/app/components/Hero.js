import { FaAdobe, FaVideo, FaCameraRetro } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeaftereffects, SiAdobepremierepro } from 'react-icons/si';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 bg-video-overlay opacity-30 pointer-events-none"></div>
      <div className="container mx-auto flex flex-col justify-center items-center text-center h-screen space-y-6 px-4">
        <h1 className="text-5xl font-extrabold animate-fade-in-up">Jaydip Patel</h1>
        <p className="text-lg animate-fade-in-up text-gray-300">
          A Video Editor with <span className="text-blue-400 font-bold">3 years of experience</span>, skilled in <span className="text-blue-400 font-bold">Photoshop</span>, <span className="text-blue-400 font-bold">Adobe After Effects</span>, and <span className="text-blue-400 font-bold">Premiere Pro</span>.
        </p>
        <p className="animate-fade-in-up text-gray-400 max-w-2xl">
          I specialize in creating e-commerce videos, blog edits, YouTube content, and documentaries, delivering engaging stories with precision and creativity.
        </p>
        <div className="flex space-x-4 justify-center animate-fade-in-up">
          <SiAdobephotoshop className="text-4xl text-blue-500" />
          <SiAdobeaftereffects className="text-4xl text-purple-500" />
          <SiAdobepremierepro className="text-4xl text-indigo-500" />
          <FaCameraRetro className="text-4xl text-pink-500" />
          <FaVideo className="text-4xl text-red-500" />
        </div>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg animate-pulse">
          View My Work
        </a>
      </div>
    </section>
  );
}
