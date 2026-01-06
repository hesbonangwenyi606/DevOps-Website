import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // X icon

interface FooterProps {
  onContactClick: () => void;
  onBlogClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick, onBlogClick }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              and empowering teams to ship faster. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Education', id: 'education' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              {onBlogClick && (
                <li>
                  <button
                    onClick={onBlogClick}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="flex flex-col gap-3">
              {/* Location */}
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Nairobi, Kenya
              </li>

              {/* Phone Number */}
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <FaPhone className="text-green-500 w-5 h-5 flex-shrink-0" />
                <a href="tel:+254743573380" className="flex-1 hover:text-white transition-colors">
                  +254 743 573 380
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <FaEnvelope className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hesbonmanyinsa96@gmail.com" className="flex-1 hover:text-white transition-colors">
                  hesbonmanyinsa96@gmail.com
                </a>
              </li>

              {/* Contact Button */}
              <li className="pt-2">
                <button
                  onClick={onContactClick}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium text-sm
                             hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Send Message
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
          
          {/* Floating Social Icons Above Footer */}
          <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 flex items-center gap-4 bg-slate-950 px-20 py-3 rounded-full shadow-lg">
            <a href="https://github.com/hesbonangwenyi606" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:-translate-y-1 hover:scale-125">
              <FaGithub className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:-translate-y-1 hover:scale-125">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="https://x.com/hesbonmanyi254" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:-translate-y-1 hover:scale-125">
              <SiX className="w-8 h-8" />
            </a>
            <a href="https://wa.me/254743573380" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:-translate-y-1 hover:scale-125">
              <FaWhatsapp className="w-8 h-8 text-green-500" />
            </a>
          </div>

          {/* Copyright in bottom-right */}
          <p className="text-gray-400 text-sm absolute bottom-2 right-4">
            © {currentYear} Hesbon Angwenyi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
