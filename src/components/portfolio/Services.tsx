import React from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
        </svg>
      ),
      title: 'Full-Stack Web Development',
      description:
        'Crafting responsive and efficient web applications using modern technologies like React, Node.js, and Express, focused on seamless user experiences and maintainable code.',
      features: [
        'Responsive design with React & Tailwind',
        'Server-side logic with Node.js & Express',
        'Clean, maintainable code architecture',
      ],
      technologies: ['React', 'Node.js', 'Express', 'Tailwind', 'TypeScript'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: 'API Design & Integration',
      description:
        'Developing secure, scalable RESTful APIs and integrating third-party services to ensure smooth communication between applications.',
      features: [
        'RESTful API design with Node.js & Express',
        'Third-party service integration',
        'Authentication & authorization best practices',
      ],
      technologies: ['REST API', 'GraphQL', 'Node.js', 'Postman', 'JWT'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Database Architecture',
      description:
        'Designing and optimizing SQL and NoSQL databases for high performance, reliability, and scalability in production environments.',
      features: [
        'SQL database optimization (PostgreSQL, MySQL)',
        'NoSQL solutions (MongoDB, DynamoDB)',
        'Data modeling and indexing for performance',
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'DevOps & Cloud Infrastructure',
      description:
        'Building robust CI/CD pipelines, automating deployments, and managing cloud platforms like AWS, Docker, and Kubernetes for scalable infrastructure.',
      features: [
        'CI/CD pipelines with GitHub Actions & Jenkins',
        'Containerization with Docker & Kubernetes',
        'Cloud deployment on AWS with scaling',
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'CI/CD Automation',
      description:
        'Implement automated deployment pipelines with testing, security scanning, and zero-downtime releases for fast and safe software delivery.',
      features: [
        'Automated testing & linting',
        'Security scanning integration',
        'Blue-green & rolling deployments',
      ],
      technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Monitoring & Observability',
      description:
        'Implement comprehensive monitoring with Prometheus, Grafana, Loki, and distributed tracing for full visibility into systems.',
      features: [
        'Real-time metrics & dashboards',
        'Alerts & notifications',
        'Tracing and log aggregation',
      ],
      technologies: ['Prometheus', 'Grafana', 'Loki', 'Jaeger', 'Alertmanager'],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-purple-300 text-sm font-medium">What I Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Services &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive software and DevOps solutions to streamline development and infrastructure
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6">{service.description}</p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-300 text-sm transform transition-all duration-300 hover:translate-x-2 hover:text-green-400"
                  >
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-purple-500/40 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
