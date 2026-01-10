import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  demo: string;
  highlights: string[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Kubernetes Multi-Cluster Platform',
      description: 'Enterprise Kubernetes platform with multi-cluster GitOps workflows.',
      longDescription: 'Built a Kubernetes platform supporting multiple clusters across AWS and GCP. Implemented ArgoCD for GitOps-based deployments, Istio for traffic management, and custom operators for scaling.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689187853_a1d06ae4.png',
      technologies: ['Kubernetes', 'ArgoCD', 'Istio', 'Helm', 'Prometheus'],
      category: 'containers',
      github: 'https://github.com/hesbonangwenyi/k8s-platform',
      demo: 'https://k8s-demo.example.com',
      highlights: ['99.99% uptime SLA', '50% faster deployments', 'Auto-scaling clusters'],
    },
    {
      id: 2,
      title: 'CI/CD Pipeline Automation',
      description: 'Automated CI/CD pipeline with security scanning and multi-env deployments.',
      longDescription: 'Implemented CI/CD using GitHub Actions and Jenkins. Integrated SAST/DAST security scans, automated testing, and blue-green deployments across dev, staging, and prod.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689187853_a1d06ae4.png',
      technologies: ['GitHub Actions', 'Jenkins', 'Docker', 'AWS'],
      category: 'cicd',
      github: 'https://github.com/hesbonangwenyi/cicd-automation',
      demo: 'https://cicd-demo.example.com',
      highlights: ['10x faster releases', 'Zero-downtime deployments', 'Automated security compliance'],
    },
    {
      id: 3,
      title: 'Monitoring & Observability Stack',
      description: 'Metrics, logs, and tracing for full observability.',
      longDescription: 'Built observability stack with Prometheus, Grafana, Loki, and Jaeger. Created dashboards and alerts to monitor system health and performance.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689257689_f53f0573.jpg',
      technologies: ['Prometheus', 'Grafana', 'Loki', 'Jaeger'],
      category: 'monitoring',
      github: 'https://github.com/hesbonangwenyi/observability-stack',
      demo: 'https://monitoring-demo.example.com',
      highlights: ['Real-time alerting', '50+ dashboards', 'End-to-end tracing'],
    },
    {
      id: 4,
      title: 'Serverless Event Processing',
      description: 'Event-driven serverless architecture for AWS.',
      longDescription: 'Implemented serverless pipeline using AWS Lambda, SQS, and EventBridge for real-time event processing. Scaled automatically and reduced costs.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689202952_f4759bfd.jpg',
      technologies: ['AWS Lambda', 'SQS', 'EventBridge', 'DynamoDB', 'Python'],
      category: 'cloud',
      github: 'https://github.com/hesbonangwenyi/serverless-events',
      demo: 'https://serverless-demo.example.com',
      highlights: ['1M+ events/day', 'Sub-second latency', '90% cost reduction'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'containers', label: 'Containers' },
    { id: 'cicd', label: 'CI/CD' },
    { id: 'monitoring', label: 'Monitoring' },
    { id: 'cloud', label: 'Cloud' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Key DevOps, cloud, and automation projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/80 text-white text-xs font-medium rounded-full">
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub & Live Demo */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-slate-700 text-white text-center rounded-lg hover:bg-slate-600 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm flex items-center justify-center gap-2"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
