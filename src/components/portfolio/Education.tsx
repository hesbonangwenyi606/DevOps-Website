import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'certification';
  highlights: string[];
}

const Education: React.FC = () => {
  const timeline: TimelineItem[] = [
    // Multimedia University - Computer Science
    {
      year: '2022 – 2024',
      title: 'Bachelor of Science in Computer Science',
      organization: 'Multimedia University of Kenya',
      description:
        'Studied core computer science concepts including data structures, algorithms, software engineering, databases, operating systems, and computer networks.',
      type: 'education',
      highlights: [
        'Data structures & algorithms',
        'Software engineering principles',
        'Databases & operating systems',
      ],
    },

    // Moringa School - Software Engineering
    {
      year: '2024',
      title: 'Software Engineering Program',
      organization: 'Moringa School (Flatiron Curriculum)',
      description:
        'Completed an intensive software engineering program focused on full-stack development, APIs, databases, and collaborative product development.',
      type: 'education',
      highlights: [
        'Full-stack web development',
        'REST APIs & databases',
        'Agile & team projects',
      ],
    },

    // Certifications
    {
      year: '2025',
      title: 'AWS Solutions Architect – Associate',
      organization: 'Amazon Web Services',
      description:
        'Validated ability to design and deploy secure, scalable, and highly available systems on AWS.',
      type: 'certification',
      highlights: [
        'Cloud architecture',
        'Security best practices',
        'Cost optimization',
      ],
    },
    {
      year: '2025',
      title: 'Certified Kubernetes Administrator (CKA)',
      organization: 'Cloud Native Computing Foundation',
      description:
        'Demonstrated skills in Kubernetes cluster administration, workload scheduling, networking, and troubleshooting.',
      type: 'certification',
      highlights: [
        'Cluster administration',
        'Kubernetes networking',
        'Troubleshooting',
      ],
    },
    {
      year: '2024',
      title: 'Terraform Associate',
      organization: 'HashiCorp',
      description:
        'Certified in Infrastructure as Code concepts, Terraform workflows, modules, and state management.',
      type: 'certification',
      highlights: [
        'Infrastructure as Code',
        'Terraform modules',
        'State management',
      ],
    },
    {
      year: '2024',
      title: 'Docker Certified Associate',
      organization: 'Docker Inc.',
      description:
        'Validated knowledge of containerization, Docker images, networking, and security fundamentals.',
      type: 'certification',
      highlights: [
        'Containerization',
        'Image optimization',
        'Docker security',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">
            Education & Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background and industry-recognized credentials
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-slate-950" />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    {/* Year & Type */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-purple-400">
                        {item.year}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          item.type === 'education'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {item.type === 'education'
                          ? 'Education'
                          : 'Certification'}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-purple-400 text-sm mb-3">
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-slate-700/50 rounded"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
