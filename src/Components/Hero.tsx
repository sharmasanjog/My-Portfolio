import { ChevronDown, Github, Linkedin, Mail, Download, Eye } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import profilePic from '../assets/Profile.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const subtitles = ['Computer Engineering Student', 'Web Developer'];
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 1000);
  };

  const handleViewCertificates = () => {
    navigate('/certificates');
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-16 md:pt-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 
                 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden transition-all duration-500"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT: Profile Picture */}
        <div
          className={`flex justify-center transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
         <div
  className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 select-none cursor-default"
  draggable={false} // prevent drag
>
  <img
    src={profilePic}
    alt="Profile"
    className="rounded-full object-cover w-full h-full relative z-10 shadow-lg object-top sm:object-center transition-transform duration-300 hover:scale-105 select-none cursor-default"
    draggable={false} // prevent drag
  />
</div>
        </div>
        {/* RIGHT: Text Content */}
        <div
          className={`text-center md:text-left transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Sanjog Sharma
          </h1>

          {/* Animated Subtitle */}
          <motion.h2
            key={currentSubtitleIndex}
            className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6 min-h-[2.5rem]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={handleAnimationComplete}
          >
            {subtitles[currentSubtitleIndex].split('').map((char, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>

          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto md:mx-0">
            Passionate about technology and building innovative solutions. Uncovering the realm of computer engineering, algorithms, and new technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
            <AnimatedButton
              variant="primary"
              size="md"
              icon={Eye}
              onClick={handleViewCertificates}
            >
              View My Certificates
            </AnimatedButton>

            <a href="/Resume.pdf" download>
              <AnimatedButton variant="outline" size="md" icon={Download}>
                Download Resume
              </AnimatedButton>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 justify-center md:justify-start">
            <a
              href="https://github.com/sharmasanjog"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 
                         hover:text-black hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjog-gautam-7a5a82313/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 
                         hover:text-blue-600 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sharmasanjog2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
              className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 
                         hover:text-red-500 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        title="Scroll to About section"
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white/10 dark:bg-slate-800/50 
                   text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all duration-300 animate-bounce hover:bg-white/20"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
