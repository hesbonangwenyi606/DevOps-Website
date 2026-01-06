import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaDocker,
  FaAws,
  FaLinux,
  FaServer,
  FaCloud,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiGithubactions } from 'react-icons/si';

interface HeroProps {
  onContactClick: () => void;
}

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(target / (duration / 30));
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [target, duration]);
  return count;
};

const terminalLines = [
  '$ whoami',
  'hesbon_angwenyi',
  '$ cat profile.txt',
  'DevOps Engineer | Cloud Architect | CI/CD & Cloud Automation Specialist',
  '$ ./start_journey.sh',
  'Building scalable infrastructure, automating pipelines, and empowering teams to ship faster...',
  '$ ./deploy_projects.sh',
  'Projects: Infrastructure as Code, Kubernetes Clusters, CI/CD Pipelines, Cloud Automation, Monitoring & Logging',
  '$ ./skills_summary.sh',
  'Skills: AWS | Azure | GCP | Docker | Kubernetes | Terraform | Python | Bash | CI/CD | GitOps',
  '$ ./career_focus.sh',
  'Passionate about optimizing cloud systems, reducing deployment times, and enabling high-performing teams',
];

const floatingIcons = [
  { Icon: FaDocker, top: '20%', left: '45%' },
  { Icon: SiKubernetes, top: '30%', left: '55%' },
  { Icon: FaAws, top: '50%', left: '40%' },
  { Icon: SiTerraform, top: '60%', left: '50%' },
  { Icon: SiGithubactions, top: '40%', left: '60%' },
  { Icon: FaLinux, top: '55%', left: '45%' },
];

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [displayText, setDisplayText] = useState('');
  const currentLine = useRef(0);
  const charIndex = useRef(0);
  const typingInterval = useRef<NodeJS.Timeout | null>(null);

  const startTyping = () => {
    typingInterval.current = setInterval(() => {
      const line = terminalLines[currentLine.current];
      if (charIndex.current <= line.length) {
        setDisplayText((prev) => {
          const lines = prev.split('\n');
          lines[currentLine.current] = line.slice(0, charIndex.current);
          return lines.join('\n');
        });
        charIndex.current++;
      } else {
        charIndex.current = 0;
        currentLine.current++;
        if (currentLine.current >= terminalLines.length) {
          currentLine.current = 0;
          setDisplayText('');
        } else {
          setDisplayText((prev) => prev + '\n');
        }
      }
    }, 50);
  };

  useEffect(() => {
    startTyping();
    return () => {
      if (typingInterval.current) clearInterval(typingInterval.current);
    };
  }, []);

  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const projects = useCountUp(20);
  const technologies = useCountUp(12);
  const certs = useCountUp(5);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]" id="hero">
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
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Floating DevOps Icons */}
        {floatingIcons.map(({ Icon, ...pos }, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/50"
            style={pos as React.CSSProperties}
            animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
          >
            <Icon size={50} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-purple-300 text-sm font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hesbon Angwenyi
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300">DevOps Engineer & Cloud Architect</h2>

            <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0">
              Fresh graduate from Flatiron School 2025, passionate about building scalable, automated
              infrastructure and CI/CD pipelines that empower development teams to ship faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                View My Work
              </button>
              <button
                onClick={onContactClick}
                className="px-8 py-4 border-2 border-purple-500/50 text-white rounded-xl font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start flex-wrap">
              <FaGithub size={36} className="text-gray-400 hover:text-white cursor-pointer" onClick={() => window.open('https://github.com/hesbonangwenyi606', '_blank')} />
              <FaLinkedin size={36} className="text-gray-400 hover:text-white cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/', '_blank')} />
              <FaTwitter size={36} className="text-gray-400 hover:text-white cursor-pointer" onClick={() => window.open('https://twitter.com/hesbonangwenyi', '_blank')} />
              <FaEnvelope size={36} className="text-gray-400 hover:text-white cursor-pointer" onClick={onContactClick} />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Terminal */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden shadow-2xl shadow-purple-500/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-400 text-sm font-mono">hesbon@devops:~</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <pre className="text-green-400 whitespace-pre-wrap">
                  {displayText}
                  <span className={`inline-block w-2 h-5 bg-green-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
                </pre>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: projects, label: 'Projects' },
                { value: technologies, label: 'Technologies' },
                { value: certs, label: 'Certifications' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 text-center hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-white">{stat.value}+</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* AWS/K8s/Services */}
            <div className="flex justify-between items-center mt-6">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="flex flex-col items-center text-cyan-400">
                <FaCloud size={50} />
                <span className="text-xs text-gray-400 mt-1">AWS</span>
              </motion.div>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center text-blue-400">
                <SiKubernetes size={50} />
                <span className="text-xs text-gray-400 mt-1">Kubernetes</span>
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="flex flex-col items-center text-purple-400">
                <FaServer size={50} />
                <span className="text-xs text-gray-400 mt-1">Services</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
