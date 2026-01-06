import React, { useState, useEffect } from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isTabActive, setIsTabActive] = useState(true);

  const terminalLines = [
    '$ who am i',
    'hesbon_angwenyi',
    '$ cat profession.txt',
    'DevOps Engineer | Cloud Architect',
    '$ echo $SCHOOL',
    'Moringa School 2025',
    '$ ./start_journey.sh',
    'Ready to build scalable infrastructure...',
  ];

  const LOOP_DELAY = 1500; // pause before restarting loop

  // Listen to tab visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isTabActive) return;

    if (currentLine >= terminalLines.length) {
      setIsTyping(false);

      const timeout = setTimeout(() => {
        if (!isTabActive) return;
        setDisplayText('');
        setCurrentLine(0);
        setIsTyping(true);
      }, LOOP_DELAY);

      return () => clearTimeout(timeout);
    }

    const line = terminalLines[currentLine];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (!isTabActive) {
        clearInterval(typeInterval);
        return;
      }

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
          if (!isTabActive) return;
          setDisplayText((prev) => prev + '\n');
          setCurrentLine((prev) => prev + 1);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentLine, isTabActive]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
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
              Fresh graduate from Moringa School (Flatiron) 2025, passionate about
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
          </div>

          {/* Right Content - Terminal */}
          <div className="hidden lg:block">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden shadow-2xl shadow-purple-500/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-400 text-sm font-mono">
                  hesbon@devops:~
                </span>
              </div>
              <div className="p-6 font-mono text-sm">
                <pre className="text-green-400 whitespace-pre-wrap">
                  {displayText}
                  {isTyping && (
                    <span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></span>
                  )}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
