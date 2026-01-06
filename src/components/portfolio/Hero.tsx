import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaDocker,
  FaAws,
  FaLinux,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
} from "react-icons/si";

interface HeroProps {
  onContactClick: () => void;
}

const floatingIcons = [
  { Icon: FaDocker, top: "15%", left: "10%" },
  { Icon: SiKubernetes, top: "25%", right: "12%" },
  { Icon: FaAws, bottom: "30%", left: "8%" },
  { Icon: SiTerraform, bottom: "20%", right: "15%" },
  { Icon: SiGithubactions, top: "55%", left: "20%" },
  { Icon: FaLinux, bottom: "10%", left: "45%" },
];

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    "$ whoami",
    "hesbon_angwenyi",
    "$ cat profession.txt",
    "DevOps Engineer | Cloud Architect",
    "$ echo $SCHOOL",
    "Flatiron School 2025",
    "$ ./start_journey.sh",
    "Ready to build scalable infrastructure...",
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
          const lines = prev.split("\n");
          lines[currentLine] = line.slice(0, charIndex);
          return lines.join("\n");
        });
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setDisplayText((prev) => prev + "\n");
          setCurrentLine((prev) => prev + 1);
        }, 400);
      }
    }, 45);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* MATRIX GRID BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-purple-900/40" />
      </div>

      {/* FLOATING DEVOPS ICONS */}
      {floatingIcons.map(({ Icon, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400/30 z-0"
          style={pos as React.CSSProperties}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          <Icon size={42} />
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
              <span className="text-cyan-300 text-sm font-medium">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Hesbon Angwenyi
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-6">
              DevOps Engineer & Cloud Architect
            </h2>

            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Fresh graduate from Flatiron School 2025, passionate about building
              scalable, automated infrastructure and CI/CD pipelines that empower
              teams to ship faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:-translate-y-1"
              >
                View My Work
              </button>

              <button
                onClick={onContactClick}
                className="px-8 py-4 border border-cyan-400/40 text-white rounded-xl font-semibold text-lg hover:bg-cyan-400/10 transition-all"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* RIGHT TERMINAL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="bg-black/80 backdrop-blur rounded-2xl border border-cyan-400/30 overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.25)]">
              <div className="flex items-center gap-2 px-4 py-3 bg-black/60 border-b border-cyan-400/20">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-400 text-sm font-mono">
                  hesbon@devops:~
                </span>
              </div>

              <div className="p-6 font-mono text-sm">
                <pre className="text-green-400 whitespace-pre-wrap">
                  {displayText}
                  {isTyping && (
                    <span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1" />
                  )}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-slate-400"
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
      </motion.div>
    </section>
  );
};

export default Hero;
