import React from 'react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

            {/* Removed the social icons here */}
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

              {/* WhatsApp */}
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.373 0 0 5.373 0 12a11.92 11.92 0 001.66 6.02L0 24l6.05-1.58A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12a11.91 11.91 0 00-3.48-8.52zm-8.52 18c-1.94 0-3.83-.52-5.45-1.5l-.39-.23-3.6.94.96-3.51-.25-.39A9.931 9.931 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.44-7.56c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.33.22-.61.07-.27-.15-1.14-.42-2.17-1.33-.8-.71-1.34-1.59-1.5-1.87-.16-.28-.02-.43.13-.57.13-.13.3-.33.45-.5.15-.17.2-.28.3-.47.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.04 1.01-1.04 2.46s1.07 2.85 1.22 3.05c.15.2 2.1 3.2 5.1 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.3-.2-.6-.35z" />
                </svg>
                <a
                  href="https://wa.me/254743573380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 hover:text-white transition-colors"
                >
                  +254 743 573 380
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:hesbonmanyinsa96@gmail.com"
                  className="flex-1 hover:text-white transition-colors"
                >
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Hesbon Angwenyi. All rights reserved.
          </p>

          {/* Centered Social Icons */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 flex items-center gap-4 bg-slate-950 px-3 py-1 rounded-full shadow-lg">
            {/* GitHub */}
            <a href="https://github.com/hesbonangwenyi606" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* X */}
            <a href="https://x.com/hesbonmanyi254" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Email */}
            <a href="mailto:hesbonmanyinsa96@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Right side: Back to Top & Built with React */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Back to Top
            </button>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              Built with
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              & React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
