import React, { useState } from 'react';

type SkillCategory =
  | 'all'
  | 'cloud'
  | 'containers'
  | 'cicd'
  | 'iac'
  | 'monitoring'
  | 'scripting'
  | 'software';

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
    { id: 'cloud', label: 'Cloud' },
    { id: 'containers', label: 'Containers' },
    { id: 'cicd', label: 'CI/CD' },
    { id: 'iac', label: 'IaC' },
    { id: 'monitoring', label: 'Monitoring' },
    { id: 'scripting', label: 'Scripting' },
    { id: 'software', label: 'Software' },
  ];

  const skills: Skill[] = [
    // Cloud
    { name: 'AWS', icon: '☁️', category: ['cloud'], proficiency: 90, color: 'from-orange-400 to-orange-600' },
    { name: 'Azure', icon: '☁️', category: ['cloud'], proficiency: 70, color: 'from-blue-400 to-blue-600' },
    { name: 'GCP', icon: '☁️', category: ['cloud'], proficiency: 65, color: 'from-green-400 to-green-600' },

    // Containers
    { name: 'Docker', icon: '🐳', category: ['containers'], proficiency: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'Kubernetes', icon: '☸️', category: ['containers'], proficiency: 85, color: 'from-blue-500 to-indigo-600' },

    // CI/CD
    { name: 'GitHub Actions', icon: '⚡', category: ['cicd'], proficiency: 85, color: 'from-gray-600 to-gray-800' },
    { name: 'Jenkins', icon: '🔧', category: ['cicd'], proficiency: 80, color: 'from-red-500 to-red-700' },

    // Infrastructure as Code
    { name: 'Terraform', icon: '🏗️', category: ['iac'], proficiency: 85, color: 'from-purple-500 to-purple-700' },
    { name: 'Ansible', icon: '📜', category: ['iac'], proficiency: 80, color: 'from-red-500 to-red-700' },

    // Monitoring
    { name: 'Prometheus', icon: '📊', category: ['monitoring'], proficiency: 85, color: 'from-orange-500 to-red-500' },
    { name: 'Grafana', icon: '📈', category: ['monitoring'], proficiency: 90, color: 'from-orange-400 to-yellow-500' },

    // Scripting
    { name: 'Python', icon: '🐍', category: ['scripting'], proficiency: 85, color: 'from-blue-400 to-yellow-500' },
    { name: 'Bash', icon: '💻', category: ['scripting'], proficiency: 90, color: 'from-green-500 to-green-700' },

    // Software / Full-Stack Essentials
    { name: 'Node.js', icon: '🟢', category: ['software'], proficiency: 75, color: 'from-green-400 to-green-600' },
    { name: 'REST APIs', icon: '🔗', category: ['software'], proficiency: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'SQL / PostgreSQL', icon: '🗄️', category: ['software'], proficiency: 70, color: 'from-blue-400 to-blue-600' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category.includes(activeCategory));

  // DevOps skill check
  const isDevOps = (skill: Skill) =>
    skill.category.some(cat => ['cloud', 'containers', 'cicd', 'iac', 'monitoring', 'scripting'].includes(cat));

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Skills & Technologies</h2>
          <p className="text-gray-400">
            DevOps-first tools, cloud technologies, and essential software skills
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map(skill => (
            <div
              key={skill.name}
              className={`bg-slate-800/50 rounded-xl p-4 border border-slate-700 transition-all duration-300
                          hover:-translate-y-2 hover:scale-105 
                          ${isDevOps(skill)
                            ? 'border-blue-400 shadow-blue-400/50 shadow-xl animate-pulse'
                            : 'hover:border-purple-500/50 hover:shadow-purple-500/30'}`}
            >
              {/* Icon with continuous glow for DevOps */}
              <div
                className={`text-3xl mb-2 transition-transform duration-300 ${
                  isDevOps(skill) ? 'text-blue-400 animate-pulse' : ''
                }`}
              >
                {skill.icon}
              </div>
              <h3 className="text-white text-sm font-semibold mb-2">{skill.name}</h3>
              <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${skill.color}`} style={{ width: `${skill.proficiency}%` }} />
              </div>
              <p className="text-xs text-gray-400 mt-1">{skill.proficiency}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
