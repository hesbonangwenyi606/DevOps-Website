import React, { useState, useEffect, useRef } from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const terminalLines = [
  '$ whoami',
  'hesbon_angwenyi',
  '$ cat profession.txt',
  'DevOps Engineer | Cloud Architect',
  '$ echo $SCHOOL',
  'Moringa School (Flatiron) 2025',
  '$ ./start_journey.sh',
  'Ready to build scalable infrastructure...',
];

const LOOP_DELAY = 4000;

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const loopTimeout = useRef<NodeJS.Timeout | null>(null);

  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [tabActive, setTabActive] = useState(true);

  /* Tab visibility */
  useEffect(() => {
    const onVisibility = () => setTabActive(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  /* Section visibility */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Reset animation when user returns */
  useEffect(() => {
    if (!isVisible || !tabActive) return;
    setDisplayText('');
    setCurrentLine(0);
    setIsTyping(true);
  }, [isVisible, tabActive]);

  /* Typing logic */
  useEffect(() => {
    if (!isTyping || !tabActive) return;

    if (currentLine >= terminalLines.length) {
      setIsTyping(false);
      loopTimeout.current = setTimeout(() => {
        if (isVisible && tabActive) {
          setDisplayText('');
          setCurrentLine(0);
          setIsTyping(true);
        }
      }, LOOP_DELAY);
      return;
    }

    const line = terminalLines[currentLine];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex <= line.length) {
        setDisplayText((prev) => {
          const lines = prev.split('\n');
          lines[currentLine] = line.slice(0, charIndex);
          return lines.join('\n');
        });
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayText((prev) => prev + '\n');
          setCurrentLine((prev) => prev + 1);
        }, 400);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [currentLine, isTyping, tabActive, isVisible]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767688827715_b30ea45d.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-purple-900/50" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Particles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">
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
              scalable infrastructure, CI/CD pipelines, and automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition"
              >
                View My Work
              </button>
              <button
                onClick={onContactClick}
                className="px-8 py-4 border border-purple-500/60 text-white rounded-xl font-semibold hover:bg-purple-500/10 transition"
              >
                Contact Me
              </button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              {[
                ['github', 'https://github.com/hesbonangwenyi606'],
                ['linkedin', 'https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/'],
                ['x', 'https://x.com/hesbonmanyi254'],
              ].map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition"
                >
                  {name.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* TERMINAL + STATS */}
          <div>
            <Terminal displayText={displayText} isTyping={isTyping} />

            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                ['15+', 'Projects'],
                ['20+', 'Technologies'],
                ['5+', 'Certifications'],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 text-center"
                >
                  <div className="text-2xl font-bold text-white">{num}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
        ↓
      </div>
    </section>
  );
};

export default Hero;

/* TERMINAL COMPONENT */
const Terminal = ({
  displayText,
  isTyping,
}: {
  displayText: string;
  isTyping: boolean;
}) => (
  <div className="bg-slate-800/80 rounded-2xl border border-slate-700 overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-700">
      <div className="w-3 h-3 bg-red-500 rounded-full" />
      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
      <div className="w-3 h-3 bg-green-500 rounded-full" />
      <span className="ml-3 text-gray-400 font-mono">hesbon@devops:~</span>
    </div>
    <div className="p-6 font-mono text-green-400 whitespace-pre-wrap text-sm">
      {displayText}
      {isTyping && <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse" />}
    </div>
  </div>
);
