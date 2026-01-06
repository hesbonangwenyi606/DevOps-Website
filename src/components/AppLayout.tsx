import React, { useState } from 'react';
import Header from './portfolio/Header';
import Hero from './portfolio/Hero';
import About from './portfolio/About';
import Skills from './portfolio/Skills';
import Services from './portfolio/Services';
import Projects from './portfolio/Projects';
import Education from './portfolio/Education';
import Testimonials from './portfolio/Testimonials';
import LatestPosts from './portfolio/LatestPosts';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';
import BlogList from './portfolio/BlogList';
import BlogPost from './portfolio/BlogPost';

type View = 'home' | 'blog' | 'post';

const AppLayout: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [currentPostSlug, setCurrentPostSlug] = useState<string>('');

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const goToBlog = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPost = (slug: string) => {
    setCurrentPostSlug(slug);
    setCurrentView('post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Blog List View
  if (currentView === 'blog') {
    return (
      <div className="min-h-screen bg-slate-900">
        <BlogList onReadPost={goToPost} onBack={goToHome} />
      </div>
    );
  }

  // Blog Post View
  if (currentView === 'post') {
    return (
      <div className="min-h-screen bg-slate-900">
        <BlogPost slug={currentPostSlug} onBack={goToBlog} onReadPost={goToPost} />
      </div>
    );
  }

  // Home View
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <Header onContactClick={openContact} onBlogClick={goToBlog} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onContactClick={openContact} />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Latest Blog Posts */}
        <LatestPosts onReadPost={goToPost} onViewAll={goToBlog} />

        {/* Testimonials Section */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer onContactClick={openContact} onBlogClick={goToBlog} />

      {/* Contact Modal */}
      <Contact isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default AppLayout;
