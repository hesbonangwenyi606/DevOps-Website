import React, { useState } from 'react';

type SkillCategory = 'all' | 'devops' | 'software';

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
    { id: 'devops', label: 'DevOps / Cloud' },
    { id: 'software', label: 'Software / Full-Stack' },
  ];

  const skills: Skill[] = [
    // DevOps / Cloud Skills
    { name: 'Docker', icon: '🐳', category: ['devops'], proficiency: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'Kubernetes', icon: '☸️', category: ['devops'], proficiency: 85, color: 'from-blue-500 to-indigo-600' },
    { name: 'CI/CD Pipelines', icon: '⚡', category: ['devops'], proficiency: 90, color: 'from-green-400 to-green-600' },
    { name: 'AWS', icon: '☁️', category: ['devops'], proficiency: 80, color: 'from-orange-400 to-orange-600' },
    { name: 'Terraform', icon: '🏗️', category: ['devops'], proficiency: 85, color: 'from-purple-500 to-purple-700' },
    { name: 'Prometheus', icon: '📊', category: ['devops'], proficiency: 80, color: 'from-orange-500 to-red-500' },
    { name: 'Grafana', icon: '📈', category: ['devops'], proficiency: 80, color: 'from-orange-400 to-yellow-500' },
    { name: 'Python', icon: '🐍', category: ['devops'], proficiency: 85, color: 'from-blue-400 to-yellow-500' },
    { name: 'Bash', icon: '💻', category: ['devops'], proficiency: 80, color: 'from-green-500 to-green-700' },

    // Software / Full-Stack Skills
    { name: 'Node.js', icon: '🟢', category: ['software'], proficiency: 80, color: 'from-green-400 to-green-600' },
    { name: 'Express.js', icon: '🚂', category: ['software'], proficiency: 75, color: 'from-gray-500 to-gray-700' },
    { name: 'React.js', icon: '⚛️', category: ['software'], proficiency: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'REST APIs', icon: '🔗', category: ['software'], proficiency: 85, color: 'from-purple-400 to-purple-600' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category.includes(activeCategory));

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">
            Skills & Technologies
          </h2>
          <p className="text-gray-400">
            Core tools and technologies for DevOps, Cloud, and Full-Stack Development
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
                  : 'bg-slate-800 text-gray-400 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map(skill => (
            <div
              key={skill.name}
              className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-purple-500/50 transition"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <h3 className="text-white text-sm font-semibold mb-2">{skill.name}</h3>
              <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: `${skill.proficiency}%` }}
                />
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
