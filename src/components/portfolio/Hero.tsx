import React, { useState, useEffect } from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    '$ who am i',
    'hesbon_angwenyi',
    '$ cat profession.txt',
    'DevOps Engineer | Cloud Architect',
    '$ echo $SCHOOL',
    ' Flatiron School  2025',
    '$ ./start_journey.sh',
    'Ready to build scalable infrastructure...',
  ];

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      setIsTyping(false);
      return;
    }

    const line = terminalLines[currentLine];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= line.length) {
        setDisplayText((prev) => {
          const lines = prev.split('\n');
          lines[currentLine] = line.slice(0, charIndex);
          return lines.join('\n');
        });
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setDisplayText((prev) => prev + '\n');
          setCurrentLine((prev) => prev + 1);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767688827715_b30ea45d.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-purple-900/50" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-purple-300 text-sm font-medium">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hesbon Angwenyi
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6">
              DevOps Engineer & Cloud Architect
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Fresh graduate from Flatiron School 2025, passionate about
              building scalable, automated infrastructure and CI/CD pipelines that
              empower development teams to ship faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              <button
                onClick={onContactClick}
                className="px-8 py-4 border-2 border-purple-500/50 text-white rounded-xl font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Contact Me</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/hesbonangwenyi606"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/hesbonangwenyi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Terminal */}
          <div className="hidden lg:block">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden shadow-2xl shadow-purple-500/10">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-400 text-sm font-mono">
                  hesbon@devops:~
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-green-400 whitespace-pre-wrap">
                  {displayText}
                  {isTyping && (
                    <span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></span>
                  )}
                </pre>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 text-center">
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 text-center">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-gray-400 text-sm">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;     