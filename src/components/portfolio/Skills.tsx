import React, { useState } from 'react';

type SkillCategory = 'all' | 'cloud' | 'containers' | 'cicd' | 'iac' | 'monitoring' | 'scripting';

interface Skill {
  name: string;
  icon: string;
  category: SkillCategory[];
  proficiency: number;
  color: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: 'All Skills' },
    { id: 'cloud', label: 'Cloud Platforms' },
    { id: 'containers', label: 'Containers' },
    { id: 'cicd', label: 'CI/CD' },
    { id: 'iac', label: 'Infrastructure as Code' },
    { id: 'monitoring', label: 'Monitoring' },
    { id: 'scripting', label: 'Scripting' },
  ];

  const skills: Skill[] = [
    { name: 'AWS', icon: '☁️', category: ['cloud'], proficiency: 90, color: 'from-orange-400 to-orange-600' },
    { name: 'Azure', icon: '☁️', category: ['cloud'], proficiency: 75, color: 'from-blue-400 to-blue-600' },
    { name: 'GCP', icon: '☁️', category: ['cloud'], proficiency: 70, color: 'from-red-400 to-yellow-500' },
    { name: 'Docker', icon: '🐳', category: ['containers'], proficiency: 95, color: 'from-blue-400 to-cyan-500' },
    { name: 'Kubernetes', icon: '☸️', category: ['containers'], proficiency: 85, color: 'from-blue-500 to-indigo-600' },
    { name: 'Helm', icon: '⛵', category: ['containers'], proficiency: 80, color: 'from-blue-300 to-blue-500' },
    { name: 'Jenkins', icon: '🔧', category: ['cicd'], proficiency: 85, color: 'from-red-500 to-red-700' },
    { name: 'GitHub Actions', icon: '⚡', category: ['cicd'], proficiency: 90, color: 'from-gray-600 to-gray-800' },
    { name: 'GitLab CI', icon: '🦊', category: ['cicd'], proficiency: 80, color: 'from-orange-500 to-red-600' },
    { name: 'ArgoCD', icon: '🔄', category: ['cicd'], proficiency: 75, color: 'from-orange-400 to-pink-500' },
    { name: 'Terraform', icon: '🏗️', category: ['iac'], proficiency: 90, color: 'from-purple-500 to-purple-700' },
    { name: 'Ansible', icon: '📜', category: ['iac'], proficiency: 85, color: 'from-red-500 to-red-700' },
    { name: 'CloudFormation', icon: '📋', category: ['iac'], proficiency: 75, color: 'from-orange-400 to-orange-600' },
    { name: 'Pulumi', icon: '🎯', category: ['iac'], proficiency: 70, color: 'from-purple-400 to-pink-500' },
    { name: 'Prometheus', icon: '📊', category: ['monitoring'], proficiency: 85, color: 'from-orange-500 to-red-500' },
    { name: 'Grafana', icon: '📈', category: ['monitoring'], proficiency: 90, color: 'from-orange-400 to-yellow-500' },
    { name: 'ELK Stack', icon: '🔍', category: ['monitoring'], proficiency: 75, color: 'from-teal-400 to-green-500' },
    { name: 'Datadog', icon: '🐕', category: ['monitoring'], proficiency: 70, color: 'from-purple-500 to-purple-700' },
    { name: 'Python', icon: '🐍', category: ['scripting'], proficiency: 85, color: 'from-blue-400 to-yellow-500' },
    { name: 'Bash', icon: '💻', category: ['scripting'], proficiency: 90, color: 'from-green-500 to-green-700' },
    { name: 'Go', icon: '🔵', category: ['scripting'], proficiency: 65, color: 'from-cyan-400 to-blue-500' },
    { name: 'YAML/JSON', icon: '📝', category: ['scripting'], proficiency: 95, color: 'from-gray-400 to-gray-600' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category.includes(activeCategory));

  return (
    <section id="skills" className="py-20 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-purple-300 text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and maintaining modern cloud infrastructure
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Skill Icon */}
              <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <h3 className="text-white font-semibold text-sm mb-2">{skill.name}</h3>
              
              {/* Proficiency Bar */}
              <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500`}
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              
              {/* Proficiency Percentage */}
              <div className="text-gray-400 text-xs mt-1">{skill.proficiency}%</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Certifications & Credentials
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', year: '2025', color: 'from-orange-400 to-orange-600' },
              { name: 'Certified Kubernetes Admin', issuer: 'CNCF', year: '2025', color: 'from-blue-400 to-indigo-600' },
              { name: 'HashiCorp Terraform', issuer: 'HashiCorp', year: '2025', color: 'from-purple-400 to-purple-600' },
              { name: 'Docker Certified Associate', issuer: 'Docker Inc.', year: '2024', color: 'from-blue-400 to-cyan-500' },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
                <p className="text-purple-400 text-sm mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
