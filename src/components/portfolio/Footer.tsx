import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const currentYear = new Date().getFullYear();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
      { name, email, message },
      'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
    ).then(
      () => {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      },
      () => setStatus('Failed to send message. Try again later.')
    );
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">HA</span>
            </div>
            <span className="text-white font-semibold text-lg">
              Hesbon<span className="text-purple-400">.dev</span>
            </span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            DevOps Engineer passionate about building scalable, automated infrastructure 
            and empowering teams to ship faster.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Education</li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li>CI/CD Pipeline Setup</li>
            <li>Cloud Infrastructure</li>
            <li>Docker & Kubernetes</li>
            <li>Monitoring & Logging</li>
            <li>Automation & Scripting</li>
          </ul>
        </div>

        {/* Contact Form Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <form onSubmit={sendEmail} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded text-black"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 rounded text-black"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-gray-300">{status}</p>}
          </form>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 flex items-center gap-4 bg-slate-950 px-20 py-3 rounded-full shadow-lg">
        <a href="https://github.com/hesbonangwenyi606" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8 text-gray-400 hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-8 h-8 text-gray-400 hover:text-white" />
        </a>
        <a href="https://x.com/hesbonmanyi254" target="_blank" rel="noopener noreferrer">
          <SiX className="w-8 h-8 text-gray-400 hover:text-white" />
        </a>
        <a href="https://wa.me/254743573380" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-8 h-8 text-green-500 hover:text-white" />
        </a>
      </div>

      <p className="text-gray-400 text-sm absolute bottom-2 right-4">
        © {currentYear} Hesbon Angwenyi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
