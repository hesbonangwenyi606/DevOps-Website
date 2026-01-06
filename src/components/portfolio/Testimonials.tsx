import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Kimani',
      role: 'Technical Mentor',
      company: 'Moringa School',
      content: 'Hesbon demonstrated exceptional problem-solving skills throughout the DevOps program. His ability to quickly grasp complex concepts like Kubernetes orchestration and implement CI/CD pipelines was impressive. He consistently helped fellow students and showed natural leadership qualities.',
      avatar: 'SK',
    },
    {
      id: 2,
      name: 'James Ochieng',
      role: 'Senior DevOps Engineer',
      company: 'Tech Solutions Ltd',
      content: 'I had the pleasure of mentoring Hesbon during his internship. His dedication to learning and applying DevOps best practices was remarkable. He successfully automated our deployment pipeline, reducing release time by 60%. A true asset to any team.',
      avatar: 'JO',
    },
    {
      id: 3,
      name: 'Grace Wanjiku',
      role: 'Cloud Architect',
      company: 'CloudFirst Kenya',
      content: 'Hesbon\'s understanding of cloud infrastructure and IaC is beyond his experience level. During our collaboration, he designed and implemented a multi-region AWS architecture using Terraform that exceeded our expectations. Highly recommend!',
      avatar: 'GW',
    },
    {
      id: 4,
      name: 'Michael Otieno',
      role: 'Program Director',
      company: 'Moringa School',
      content: 'As one of our top graduates, Hesbon exemplifies what we aim to produce at Moringa School. His technical skills, combined with his collaborative spirit and continuous learning mindset, make him an outstanding DevOps professional.',
      avatar: 'MO',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-purple-300 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What People{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feedback from mentors, colleagues, and collaborators I've worked with
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-purple-500/20">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: '15+', label: 'Projects Completed' },
            { value: '5+', label: 'Certifications' },
            { value: '1000+', label: 'Hours of Training' },
            { value: '100%', label: 'Commitment' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
