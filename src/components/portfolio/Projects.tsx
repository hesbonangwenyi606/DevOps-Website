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
      description: 'Enterprise-grade Kubernetes platform with multi-cluster management and GitOps workflows.',
      longDescription: 'Built a comprehensive Kubernetes platform supporting multiple clusters across AWS and GCP. Implemented ArgoCD for GitOps-based deployments, Istio service mesh for traffic management, and custom operators for automated scaling.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689187853_a1d06ae4.png',
      technologies: ['Kubernetes', 'ArgoCD', 'Istio', 'Helm', 'Prometheus'],
      category: 'containers',
      github: 'https://github.com/hesbonangwenyi/k8s-platform',
      demo: '#',
      highlights: ['99.99% uptime SLA', '50% reduction in deployment time', 'Auto-scaling based on custom metrics'],
    },
    {
      id: 2,
      title: 'CI/CD Pipeline Automation',
      description: 'Fully automated CI/CD pipeline with security scanning and multi-environment deployments.',
      longDescription: 'Designed and implemented a complete CI/CD pipeline using GitHub Actions and Jenkins. Integrated SAST/DAST security scanning, automated testing, and blue-green deployments across dev, staging, and production environments.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689187853_a1d06ae4.png',
      technologies: ['GitHub Actions', 'Jenkins', 'SonarQube', 'Docker', 'AWS'],
      category: 'cicd',
      github: 'https://github.com/hesbonangwenyi/cicd-automation',
      demo: '#',
      highlights: ['10x faster deployments', 'Zero-downtime releases', 'Automated security compliance'],
    },
    {
      id: 3,
      title: 'AWS Infrastructure with Terraform',
      description: 'Complete AWS infrastructure provisioned and managed using Terraform modules.',
      longDescription: 'Created reusable Terraform modules for provisioning AWS infrastructure including VPCs, EKS clusters, RDS databases, and Lambda functions. Implemented state management with S3 and DynamoDB locking.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689202952_f4759bfd.jpg',
      technologies: ['Terraform', 'AWS', 'Python', 'CloudWatch', 'IAM'],
      category: 'iac',
      github: 'https://github.com/hesbonangwenyi/terraform-aws',
      demo: '#',
      highlights: ['100+ resources managed', 'Modular architecture', 'Cost optimization by 40%'],
    },
    {
      id: 4,
      title: 'Docker Microservices Architecture',
      description: 'Containerized microservices platform with service discovery and load balancing.',
      longDescription: 'Architected and deployed a microservices-based application using Docker containers. Implemented service discovery with Consul, load balancing with Traefik, and centralized logging with ELK stack.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689220862_058bddbe.jpg',
      technologies: ['Docker', 'Docker Compose', 'Traefik', 'Consul', 'ELK'],
      category: 'containers',
      github: 'https://github.com/hesbonangwenyi/docker-microservices',
      demo: '#',
      highlights: ['12 microservices', 'Auto-healing containers', 'Centralized configuration'],
    },
    {
      id: 5,
      title: 'Infrastructure as Code with Pulumi',
      description: 'Cloud infrastructure defined using TypeScript with Pulumi for multi-cloud deployments.',
      longDescription: 'Developed infrastructure as code using Pulumi with TypeScript, enabling type-safe infrastructure definitions. Deployed resources across AWS and Azure with shared modules and automated testing.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689240259_a3e0a2a1.png',
      technologies: ['Pulumi', 'TypeScript', 'AWS', 'Azure', 'GitHub Actions'],
      category: 'iac',
      github: 'https://github.com/hesbonangwenyi/pulumi-infra',
      demo: '#',
      highlights: ['Multi-cloud support', 'Type-safe IaC', 'Automated drift detection'],
    },
    {
      id: 6,
      title: 'Monitoring & Observability Stack',
      description: 'Complete observability solution with metrics, logs, and distributed tracing.',
      longDescription: 'Implemented a full observability stack using Prometheus for metrics, Grafana for visualization, Loki for logs, and Jaeger for distributed tracing. Created custom dashboards and alerting rules.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689257689_f53f0573.jpg',
      technologies: ['Prometheus', 'Grafana', 'Loki', 'Jaeger', 'AlertManager'],
      category: 'monitoring',
      github: 'https://github.com/hesbonangwenyi/observability-stack',
      demo: '#',
      highlights: ['Real-time alerting', '50+ custom dashboards', 'End-to-end tracing'],
    },
    {
      id: 7,
      title: 'Ansible Configuration Management',
      description: 'Automated server configuration and application deployment using Ansible playbooks.',
      longDescription: 'Created comprehensive Ansible playbooks for server provisioning, security hardening, and application deployment. Implemented roles for common configurations and integrated with AWX for centralized management.',
      image: 'https://d64gsuwffb70l.cloudfront.net/695cc9c2458cbb190ad7e869_1767689276422_59d214b4.jpg',
      technologies: ['Ansible', 'AWX', 'Python', 'Vault', 'Linux'],
      category: 'iac',
      github: 'https://github.com/hesbonangwenyi/ansible-automation',
      demo: '#',
      highlights: ['200+ servers managed', 'Idempotent deployments', 'Secrets management'],
    },
    {
      id: 8,
      title: 'Serverless Event Processing',
      description: 'Event-driven serverless architecture for real-time data processing on AWS.',
      longDescription: 'Built a serverless event processing pipeline using AWS Lambda, SQS, and EventBridge. Implemented data transformation, validation, and storage with automatic scaling and cost optimization.',
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
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-purple-300 text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world DevOps projects showcasing infrastructure automation, CI/CD, and cloud architecture
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
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                  >
                    View Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
            {/* Modal Header */}
            <div className="relative h-64">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                {selectedProject.category.toUpperCase()}
              </span>
              
              <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                {selectedProject.title}
              </h3>
              
              <p className="text-gray-400 mb-6">
                {selectedProject.longDescription}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Highlights</h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  {selectedProject.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg"
                    >
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-300 text-sm rounded-lg border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-slate-700 text-white rounded-xl font-medium text-center hover:bg-slate-600 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
