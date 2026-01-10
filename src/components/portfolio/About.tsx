import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast Learner',
      description: 'Quick to adapt and master new technologies and methodologies',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Security First',
      description: 'Implementing DevSecOps practices from day one',
    },
    {
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Team Player',
      description: 'Collaborative approach to solving complex infrastructure challenges',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Automation Expert',
      description: 'Passionate about automating repetitive tasks and workflows',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 sm:px-14 lg:px-9">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://devops.tiiny.site/devOps.jpg"
                alt="Hesbon Angwenyi"
                className="rounded-2xl shadow-2xl shadow-purple-500/20 w-full max-w-lg mx-auto"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl -z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-80 h-80 border-2 border-purple-500/30 rounded-2xl -z-0"></div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-300 text-sm font-medium">About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Passionate About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Building Infrastructure
              </span>
            </h2>

            <div className="space-y-4 text-gray-400 text-lg mb-8">
              <p>
                I'm Hesbon Angwenyi, a DevOps Engineer and Cloud Architect passionate about designing and managing scalable, resilient infrastructure. I specialize in automating workflows, implementing CI/CD pipelines, and optimizing cloud systems to help teams deliver software faster and more reliably.
              </p>
              <p>
                My experience includes containerization, Kubernetes orchestration, Terraform infrastructure as code, cloud platforms like AWS, Azure, and GCP, and monitoring & observability solutions. I thrive on solving complex challenges and improving operational efficiency.
              </p>
              <p>
                Beyond coding and automation, I enjoy mentoring peers, contributing to open-source projects, and staying ahead of emerging cloud and DevOps technologies.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
