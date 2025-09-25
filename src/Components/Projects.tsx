import { useState } from 'react';
import { ExternalLink, Github, Code, Shield, Brain } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedButton from './AnimatedButton';

// Importing local images from the assets folder
 import project1Img from '../assets/project1.jpg';
 import project2Img from '../assets/project2.png';
 import project3Img from '../assets/project3.jpg';
 import project4Img from '../assets/project4.png';
//  import project5Img from '../assets/project5.jpg';
//  import project6Img from '../assets/project6.jpg';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);

  // All projects list
  const projects = [
    {
      title: 'Smart Farming Platform',
      description:
        'A smart farming solution integrating IoT sensors and real-time crop price tracking. Helps farmers make data-driven decisions.',
      image: project1Img,
      tech: ['React', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      icon: Code,
    },
    {
      title: 'Mental Health Assistant',
      description:
        'An AI-driven mental health platform with stress detection, relaxation games, and a chatbot for emotional support.',
      image: project2Img,
      tech: ['React', 'Node.js', 'Socket.IO'],
      category: 'AI & ML',
      icon: Brain,
    },
    {
      title: 'Robotics Club-Locus 2025 Hardware Fellowship',
      description: `Participated in an intensive 8-day Hardware Fellowship organized by LOCUS 2025 and Robotics Club, IOE Pulchowk Campus, focusing on advanced hardware systems, robotics, and innovation.`,
  image: project3Img,
      tech: ['Robotics', 'Hardware Systems'],
      category: 'IOT',
      icon: Shield,
    },
    {
      title: 'Portfolio Website',
      description:
        'A fully responsive portfolio website built with modern UI design principles and smooth animations.',
      image: project4Img,
      tech: ['React', 'TailwindCSS'],
      category: 'Frontend',
      icon: Code,
    },
  //   {
  //     title: 'Real-Time Chat App',
  //     description:
  //       'A full-stack real-time chat application with WebSocket integration and secure private chat rooms.',
  //     image: project5Img,
  //     tech: ['React', 'Node.js', 'Socket.IO'],
  //     category: 'Full Stack',
  //     icon: Brain,
  //   },
  //   {
  //     title: 'Weather Forecasting AI',
  //     description:
  //       'An AI-based weather forecasting platform using predictive models and real-time weather data APIs.',
  //     image: project6Img,
  //     tech: ['Python', 'Django', 'Pandas'],
  //     category: 'AI & ML',
  //     icon: Shield,
  //   },
  
   ];

  // Show first three projects by default
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my featured projects that demonstrate my skills and passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`project-card bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 group border border-slate-200 dark:border-slate-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                data-animation-delay={index * 200}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-2 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105">
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                    <button className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105">
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <AnimatedButton
            variant="primary"
            size="lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
