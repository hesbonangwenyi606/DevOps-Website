import React from 'react';

const Education: React.FC = () => {
  const timeline = [
    {
      year: '2025',
      title: 'DevOps Engineering Graduate',
      organization: 'Moringa School (Flatiron School)',
      description: 'Completed intensive DevOps engineering program covering cloud infrastructure, containerization, CI/CD, and infrastructure as code. Graduated with distinction.',
      type: 'education',
      highlights: ['Full-stack DevOps curriculum', 'Hands-on project experience', 'Industry mentorship'],
    },
    {
      year: '2025',
      title: 'AWS Solutions Architect Associate',
      organization: 'Amazon Web Services',
      description: 'Achieved certification demonstrating expertise in designing distributed systems on AWS, including compute, networking, storage, and database services.',
      type: 'certification',
      highlights: ['Cloud architecture design', 'Cost optimization', 'Security best practices'],
    },
    {
      year: '2025',
      title: 'Certified Kubernetes Administrator (CKA)',
      organization: 'Cloud Native Computing Foundation',
      description: 'Earned CKA certification validating skills in Kubernetes cluster administration, networking, storage, and troubleshooting.',
      type: 'certification',
      highlights: ['Cluster management', 'Workload scheduling', 'Network policies'],
    },
    {
      year: '2024',
      title: 'HashiCorp Terraform Associate',
      organization: 'HashiCorp',
      description: 'Certified in Terraform fundamentals including IaC concepts, Terraform workflow, modules, and state management.',
      type: 'certification',
      highlights: ['Infrastructure as Code', 'Module development', 'State management'],
    },
    {
      year: '2024',
      title: 'Docker Certified Associate',
      organization: 'Docker Inc.',
      description: 'Demonstrated proficiency in containerization, Docker networking, orchestration, and security best practices.',
      type: 'certification',
      highlights: ['Container orchestration', 'Image optimization', 'Security scanning'],
    },
    {
      year: '2024',
      title: 'Linux Foundation Certified System Administrator',
      organization: 'Linux Foundation',
      description: 'Validated Linux system administration skills including user management, networking, storage, and security.',
      type: 'certification',
      highlights: ['System administration', 'Shell scripting', 'Performance tuning'],
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-purple-300 text-sm font-medium">Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Education &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My learning journey and professional credentials in DevOps and cloud technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-slate-950 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                    {/* Year Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-full">
                        {item.year}
                      </span>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        item.type === 'education' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {item.type === 'education' ? 'Education' : 'Certification'}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-purple-400 font-medium mb-3">{item.organization}</p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Moringa School Highlight */}
        <div className="mt-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Moringa School Experience
              </h3>
              <p className="text-gray-400 mb-6">
                At Moringa School (powered by Flatiron School curriculum), I underwent rigorous training 
                in modern DevOps practices. The program emphasized hands-on learning, real-world projects, 
                and industry-relevant skills that prepared me for the demands of enterprise infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-gray-400 text-sm">Hours of Training</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-gray-400 text-sm">Technologies Learned</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-white">5</div>
                  <div className="text-gray-400 text-sm">Certifications</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700">
                <h4 className="text-white font-semibold mb-4">Core Curriculum</h4>
                <ul className="space-y-3">
                  {[
                    'Cloud Infrastructure (AWS, Azure, GCP)',
                    'Container Orchestration (Docker, Kubernetes)',
                    'CI/CD Pipeline Design & Implementation',
                    'Infrastructure as Code (Terraform, Ansible)',
                    'Monitoring & Observability',
                    'DevSecOps & Security Best Practices',
                    'Agile & Scrum Methodologies',
                    'Linux System Administration',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
