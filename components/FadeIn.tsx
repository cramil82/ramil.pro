'use client';
import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export default function FadeIn({ children, className, style, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`;

    const show = () => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    };

    // Safety fallback: if IntersectionObserver never fires (e.g. a third-party script
    // error in private browsing breaks the event loop), force elements visible after 3s
    // so the page is never stuck blank.
    const fallback = setTimeout(show, 3000 + delay * 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback);
          show();
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
