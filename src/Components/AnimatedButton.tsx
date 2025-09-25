import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: typeof LucideIcon;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  className = ''
}) => {
  const baseClasses = "relative overflow-hidden font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:hover:bg-blue-400"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="relative flex items-center justify-center space-x-2">
        {Icon && <Icon className="w-5 h-5" />}
        <span>{children}</span>
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </button>
  );
};

export default AnimatedButton;