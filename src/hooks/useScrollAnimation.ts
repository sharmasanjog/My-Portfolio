import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean; // Animate only once or every time
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) observer.unobserve(ref.current);
        } else if (!once) {
          setIsVisible(false); // Animate out when scrolling out
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
};
