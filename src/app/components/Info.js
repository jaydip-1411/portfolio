import Image from 'next/image';

export default function Info() {
  return (
    <section className="bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex items-center justify-center p-4 ">
            <Image
              src="/logo.png"
              alt="Company Logo"
              className="w-72 h-72 object-contain"
              width={0}
              height={0}
              unoptimized
              aria-hidden
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h3 className="text-2xl font-bold text-gray-200 mb-4 animate-fade-in-up">Innovative Solutions.</h3>
          <p className="text-gray-600 text-lg animate-fade-in-up mb-4">
            We are committed to providing creative and effective solutions that bring your vision to life. Our team of experts collaborates closely with clients to deliver impactful and meaningful results.
          </p>
        </div>
      </div>
    </section>
  );
}
