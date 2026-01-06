import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaDocker,
  FaAws,
  FaLinux,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaServer,
  FaCloud,
} from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiGithubactions } from "react-icons/si";

/* =========================
   COUNT UP HOOK (Optimized)
========================= */
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

/* =========================
   TERMINAL COMPONENT
========================= */
const terminalLines = [
  "$ whoami",
  "hesbon_angwenyi",
  "$ kubectl get nodes",
  "node-1   Ready",
  "node-2   Ready",
  "$ terraform apply",
  "Infrastructure successfully provisioned 🚀",
  "$ aws eks list-clusters",
  "prod-cluster",
];

const Terminal: React.FC = () => {
  const [terminalText, setTerminalText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const currentLine = terminalLines[lineIndex];
    if (!currentLine) {
      // Fade out and reset
      setTimeout(() => {
        setFade(true);
        setTimeout(() => {
          setTerminalText("");
          setLineIndex(0);
          setCharIndex(0);
          setFade(false);
        }, 500);
      }, 2000);
      return;
    }

    const timeout = setTimeout(() => {
      if (charIndex < currentLine.length) {
        setTerminalText((prev) => prev + currentLine[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTerminalText((prev) => prev + "\n");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }
    }, 40);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex]);

  return (
    <motion.div
      className={`bg-black/80 border border-cyan-400/30 rounded-2xl shadow-[0_0_60px_rgba(34,211,238,0.3)] transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="px-4 py-2 border-b border-cyan-400/20 text-slate-400 text-sm font-mono">
        hesbon@cloud:~
      </div>
      <pre
        className="p-4 font-mono text-green-400 text-sm whitespace-pre-wrap"
        aria-live="polite"
      >
        {terminalText}
        <span className="animate-pulse">█</span>
      </pre>
    </motion.div>
  );
};

/* =========================
   FLOATING ICONS COMPONENT
========================= */
const floatingIcons = [
  { Icon: FaDocker, top: "10%", left: "8%" },
  { Icon: SiKubernetes, top: "25%", right: "12%" },
  { Icon: FaAws, bottom: "35%", left: "10%" },
  { Icon: SiTerraform, bottom: "20%", right: "15%" },
  { Icon: SiGithubactions, top: "55%", left: "18%" },
  { Icon: FaLinux, bottom: "10%", left: "45%" },
];

const FloatingIcons: React.FC = () => (
  <>
    {floatingIcons.map(({ Icon, ...pos }, i) => (
      <motion.div
        key={i}
        className="absolute text-cyan-400/30"
        style={pos as React.CSSProperties}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
      >
        <Icon size={40} />
      </motion.div>
    ))}
  </>
);

/* =========================
   SOCIAL LINKS COMPONENT
========================= */
const SocialLinks: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => (
  <div className="flex gap-4 mb-10">
    <a
      href="https://github.com/hesbonangwenyi606"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub className="text-2xl text-slate-400 hover:text-white transition-colors" />
    </a>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-2xl text-slate-400 hover:text-white transition-colors" />
    </a>
    <button onClick={onContactClick}>
      <FaEnvelope className="text-2xl text-slate-400 hover:text-white transition-colors" />
    </button>
  </div>
);

/* =========================
   STATS COMPONENT
========================= */
const Stats: React.FC = () => {
  const projects = useCountUp(15);
  const technologies = useCountUp(20);
  const certs = useCountUp(5);

  return (
    <div className="grid grid-cols-3 gap-4">
      {[
        { value: projects, label: "Projects" },
        { value: technologies, label: "Technologies" },
        { value: certs, label: "Certifications" },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center hover:scale-105 transition-transform"
        >
          <div className="text-3xl font-bold text-white">{stat.value}+</div>
          <div className="text-slate-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

/* =========================
   HERO COMPONENT
========================= */
const Hero: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => (
  <section
    id="hero"
    className="relative min-h-screen overflow-hidden bg-[#020617] flex items-center"
  >
    {/* MATRIX GRID */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-900/40" />
    </div>

    <FloatingIcons />

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
      {/* LEFT */}
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
        <h1 className="text-5xl font-bold text-white mb-4">
          Hesbon{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Angwenyi
          </span>
        </h1>

        <h2 className="text-2xl text-slate-300 mb-6">
          DevOps Engineer • Cloud • Kubernetes
        </h2>

        <p className="text-slate-400 max-w-xl mb-8">
          Automating infrastructure, deploying cloud-native applications, and designing
          scalable Kubernetes platforms.
        </p>

        <SocialLinks onContactClick={onContactClick} />

        <Stats />
      </motion.div>

      {/* RIGHT */}
      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
        <Terminal />

        {/* AWS / K8s ARCHITECTURE */}
        <div className="relative bg-slate-900/60 border border-slate-700 rounded-2xl p-6 flex justify-between items-center">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
            <FaCloud className="text-4xl text-cyan-400" />
            <p className="text-xs text-center text-slate-400 mt-1">AWS</p>
          </motion.div>

          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            <SiKubernetes className="text-4xl text-blue-400" />
            <p className="text-xs text-center text-slate-400 mt-1">Kubernetes</p>
          </motion.div>

          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
            <FaServer className="text-4xl text-purple-400" />
            <p className="text-xs text-center text-slate-400 mt-1">Services</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
