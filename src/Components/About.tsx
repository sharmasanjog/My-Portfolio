import { User, GraduationCap, Code, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { label: 'Years of Study', value: '2+', icon: GraduationCap },
    { label: 'Projects Built', value: '10+', icon: Code },
    { label: 'Current Semester', value: '5th', icon: User },
    { label: 'Goal', value: 'Excellence', icon: Target }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technophile at heart and a life-long learner, I'm striving to be an effective Computer Engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">My Journey</h3>
  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
    I'm in my 5th semester, currently studying Computer Engineering. My interest is in AI and Data Science, creating effective software solutions, and discovering upcoming technologies that govern our online world.
  </p>
  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
    In my academic process, I've gained sound knowledge in programming languages, data structures. I'm a firm believer in learning through practice and continuously engaging myself with new projects and technology.
  </p>
</div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">What Drives Me</h3>
              <p className="leading-relaxed">
                I'm driven by the desire to create meaningful technology that solves real-world problems. 
                Every line of code I write is an opportunity to learn something new and contribute to 
                the ever-evolving tech landscape.
              </p>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center border border-slate-200 dark:border-slate-700 group about-stat-card delay-${index}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;