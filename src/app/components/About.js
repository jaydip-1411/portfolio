import Image from 'next/image';
import { FaAward, FaLightbulb, FaUsers } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className=" items-center w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image src="/ProfilePic.png"  alt="Jaydip Patel"
            className="rounded-lg shadow-lg w-72 h-80 object-cover" width={100} height={100} unoptimized />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">About Me</h2>
          <p className="text-gray-600 text-lg animate-fade-in-up">
            I am <span className="text-blue-500 font-semibold">Jaydip Patel</span>, a dedicated video editor with
            <span className="text-blue-500 font-semibold"> 3 years of experience</span>. My passion lies in crafting visually engaging stories through videos, leveraging tools like Photoshop, Adobe After Effects, and Premiere Pro.
          </p>
          <p className="mt-4 text-gray-600 animate-fade-in-up">
            I have worked on a diverse range of projects, including <span className="font-semibold">modeling, e-commerce videos, blogs, YouTube content, and documentaries</span>. My mission is to transform ideas into captivating visuals that leave a lasting impact.
          </p>
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center space-x-3">
              <FaAward className="text-2xl text-yellow-500 animate-fade-in-up" />
              <p className="text-gray-600 animate-fade-in-up">Delivered over 50+ successful projects</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaLightbulb className="text-2xl text-blue-500 animate-fade-in-up" />
              <p className="text-gray-600 animate-fade-in-up">Creative problem-solving expertise</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaUsers className="text-2xl text-green-500 animate-fade-in-up" />
              <p className="text-gray-600 animate-fade-in-up">Collaborated with 20+ clients globally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
