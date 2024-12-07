'use client'

import { useState } from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Contact() {

  const [phoneNumber , setPhoneNumber] =useState('')
  const [message , setMessage] =useState('')

   const redirectToWhatsApp = (message) => {
    console.log('pppppp')
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/+917096276382?text=${encodedMessage}`;
    window.open(url, '_blank')
  };

  const handleRedirect = () => {
    console.log('pppp')
    // const phoneNumber = '+919712795696'; // Replace with the recipient's phone number
    // const message = 'Hello, I would like to know more about your services.'; // Customize the message
    redirectToWhatsApp( message);
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-200 mb-8 animate-fade-in-up">Contact Me</h2>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          {/* <form method="POST" onSubmit={handleRedirect}> */}
            <div className="space-y-4">
              {/* Name Field */}
              
              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="6"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                  onClick={() => {
                    handleRedirect()
                  }}
                  disabled={message == ''}>
                  Send Message
                </button>
              </div>
            </div>
          {/* </form> */}
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex flex-row justify-center items-center space-x-6">
          <a
            href="https://www.instagram.com/_jdy_1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
