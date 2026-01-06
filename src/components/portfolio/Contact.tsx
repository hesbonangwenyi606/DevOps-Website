import React, { useState } from 'react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('idle');
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-slate-700">

        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Get In Touch</h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Let's discuss your next project
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-600 transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">

          {/* Contact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">

            {/* Email */}
            <a
              href="mailto:hesbonmanyinsa96@gmail.com"
              className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                ✉
              </div>
              <div className="min-w-0">
                <div className="text-white text-sm font-medium">Email</div>
                <div className="text-gray-400 text-xs break-all">
                  Message me here
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                in
              </div>
              <div>
                <div className="text-white text-sm font-medium">LinkedIn</div>
                <div className="text-gray-400 text-xs">Connect with me</div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/hesbonangwenyi606"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                GH
              </div>
              <div>
                <div className="text-white text-sm font-medium">GitHub</div>
                <div className="text-gray-400 text-xs">View my code</div>
              </div>
            </a>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
              />
            </div>

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
            >
              <option value="">Select Subject</option>
              <option value="job">Job Opportunity</option>
              <option value="project">Project Collaboration</option>
              <option value="consulting">Consulting</option>
              <option value="mentorship">Mentorship</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-400 text-center text-sm">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
