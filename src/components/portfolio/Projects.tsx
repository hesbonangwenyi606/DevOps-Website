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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
      demo: '#',
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
      demo: '#',
      highlights: ['10x faster releases', 'Zero-downtime deployments', 'Automated security compliance'],
    },
    {
      id: 3,
      title: 'AWS Infrastructure with Terraform',
      description: 'AWS infrastructure provisioned and managed with Terraform.',
      longDescription: 'Created reusable Terraform modules for AWS VPCs, EKS clusters, RDS, and Lambda. Managed state in S3 with DynamoDB locking, enabling modular and repeatable infrastructure.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689202952_f4759bfd.jpg',
      technologies: ['Terraform', 'AWS', 'Python', 'CloudWatch', 'IAM'],
      category: 'iac',
      github: 'https://github.com/hesbonangwenyi/terraform-aws',
      demo: '#',
      highlights: ['100+ resources managed', 'Modular architecture', 'Cost optimization 40%'],
    },
    {
      id: 4,
      title: 'Monitoring & Observability Stack',
      description: 'Metrics, logs, and tracing for full observability.',
      longDescription: 'Built observability stack with Prometheus, Grafana, Loki, and Jaeger. Created dashboards and alerts to monitor system health and performance.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689257689_f53f0573.jpg',
      technologies: ['Prometheus', 'Grafana', 'Loki', 'Jaeger'],
      category: 'monitoring',
      github: 'https://github.com/hesbonangwenyi/observability-stack',
      demo: '#',
      highlights: ['Real-time alerting', '50+ dashboards', 'End-to-end tracing'],
    },
    {
      id: 5,
      title: 'Serverless Event Processing',
      description: 'Event-driven serverless architecture for AWS.',
      longDescription: 'Implemented serverless pipeline using AWS Lambda, SQS, and EventBridge for real-time event processing. Scaled automatically and reduced costs.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689202952_f4759bfd.jpg',
      technologies: ['AWS Lambda', 'SQS', 'EventBridge', 'DynamoDB', 'Python'],
      category: 'cloud',
      github: 'https://github.com/hesbonangwenyi/serverless-events',
      demo: '#',
      highlights: ['1M+ events/day', 'Sub-second latency', '90% cost reduction'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'containers', label: 'Containers' },
    { id: 'cicd', label: 'CI/CD' },
    { id: 'iac', label: 'Infrastructure as Code' },
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

                {/* GitHub & Demo Buttons with Icons */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-slate-700 text-white text-center rounded-lg hover:bg-slate-600 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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
