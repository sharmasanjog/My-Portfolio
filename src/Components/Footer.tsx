import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Sanjog Sharma</h3>
          <p className="text-slate-400 dark:text-slate-500 mb-8 max-w-md mx-auto">
            Computer Engineering Student passionate about creating innovative solutions and learning new technologies.
          </p>
          
          
          <div className="mt-4 text-slate-500 dark:text-slate-600 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl"
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;