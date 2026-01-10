import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'Education Background' | 'Certification';
  highlights: string[];
}

const EducationBackground: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      year: '2019 – 2023',
      title: 'Computer Science',
      organization: 'Multimedia University of Kenya',
      description: 'Studied programming, software, and computer basics.',
      type: 'Education Background',
      highlights: ['Programming', 'Data & Algorithms', 'Software design'],
    },
    {
      year: '2024',
      title: 'Software Engineering',
      organization: 'Moringa School',
      description: 'Learned to code full-stack apps, work in teams, and build real projects.',
      type: 'Education Background',
      highlights: ['Web development', 'APIs & Databases', 'Team projects'],
    },
    {
      year: '2025',
      title: 'DevOps Program',
      organization: 'Flatiron School',
      description:
        'Learned to run servers, manage cloud stuff, make CI/CD pipelines, and work with containers.',
      type: 'Education Background',
      highlights: [
        'Cloud (AWS, Azure, GCP)',
        'CI/CD pipelines',
        'Docker & Kubernetes',
        'Infra as Code',
        'Monitoring systems',
      ],
    },
    {
      year: '2025',
      title: 'AWS Solutions Architect',
      organization: 'Amazon Web Services',
      description: 'Got certified to build apps on AWS the right way.',
      type: 'Certification',
      highlights: ['Cloud setup', 'Security', 'Cost saving'],
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">
            School & Certificates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What I learned and the certificates I got
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Neon Purple Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-900 shadow-[0_0_20px_rgba(128,0,255,0.5)]" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Glowing Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-900 ring-4 ring-purple-500 z-10 shadow-[0_0_15px_rgba(128,0,255,0.8)]" />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="group rounded-xl p-6 border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-purple-500 transition-all duration-300">
                    {/* Year & Type */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-white">
                        {item.year}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-white group-hover:bg-purple-500 transition-all duration-300">
                        {item.type === 'Education Background' ? 'School' : 'Certificate'}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{item.organization}</p>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gray-800 rounded group-hover:bg-purple-700 transition-all duration-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationBackground;
