import { Code2, Database, Globe, Cpu } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect } from 'react';
import CountUp from 'react-countup'; // For number animation
import './Skills.css';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'C', level: 85 },
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'React', level: 75 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Node.js', level: 65 },
        { name: 'TypeScript', level: 60 },
        { name: 'Tailwind CSS', level: 80 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 75 },
        { name: 'MongoDB', level: 60 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Linux', level: 70 },
        { name: 'VS Code', level: 95 },
      ],
    },
    {
      title: 'Core Subjects',
      icon: Cpu,
      skills: [
        { name: 'Data Structures', level: 85 },
        { name: 'Algorithms', level: 80 },
        { name: 'Computer Networks', level: 75 },
        { name: 'Operating Systems', level: 70 },
        { name: 'DBMS', level: 80 },
      ],
    },
  ];

  // Animation effect
  useEffect(() => {
    const bars = document.querySelectorAll<HTMLDivElement>('.skill-bar');

    bars.forEach((el) => {
      const width = el.getAttribute('data-skill-width');
      const delay = el.getAttribute('data-delay');

      if (isVisible) {
        el.style.setProperty('--skill-bar-width', width ? `${width}%` : '0%');
        el.style.setProperty('--skill-bar-delay', delay ? `${delay}ms` : '0ms');
        el.classList.add('skill-bar-animate');
      } else {
        // Reset when not visible
        el.style.setProperty('--skill-bar-width', '0%');
        el.style.setProperty('--skill-bar-delay', '0ms');
        el.classList.remove('skill-bar-animate');
      }
    });
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Skills
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I work with.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 transition-all duration-1000 transform"
              >
                <div className="flex items-center mb-4">
                  <span className="mr-3">
                    <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                          {isVisible ? (
                            <CountUp end={skill.level} duration={1.5} />
                          ) : (
                            0
                          )}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transform origin-left skill-bar"
                          data-skill-width={skill.level}
                          data-delay={index * 200 + skillIndex * 100}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Technologies */}
        <div
          className={`mt-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center mb-8">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Machine Learning', 'Cloud Computing', 'Cybersecurity', 'IoT'].map(
              (tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full text-slate-700 dark:text-slate-300 font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/40 dark:hover:to-purple-800/40 transition-all duration-300 transform hover:scale-105 border border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
