import React from 'react';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from './BlogCard';

interface LatestPostsProps {
  onReadPost: (slug: string) => void;
  onViewAll: () => void;
}

const LatestPosts: React.FC<LatestPostsProps> = ({ onReadPost, onViewAll }) => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
              <span className="text-purple-300 text-sm font-medium">From the Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Latest{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
            <p className="text-gray-400 text-lg mt-2">
              DevOps tutorials, insights, and best practices
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl font-medium hover:bg-slate-700 hover:border-purple-500/50 transition-all duration-300 self-start sm:self-auto"
          >
            View All Posts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} onReadMore={onReadPost} />
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Updated with DevOps Insights
              </h3>
              <p className="text-gray-400">
                Subscribe to my newsletter and get the latest tutorials, tips, and best practices 
                delivered straight to your inbox. No spam, unsubscribe anytime.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
