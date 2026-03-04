'use client';
import { ReactNode, useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/carlos-ramil?hide_gdpr_banner=1&primary_color=800020';

export default function CalendlyButton({ children, className, style }: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  useEffect(() => {
    // Load Calendly assets once
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const win = window as any;
    if (typeof win.Calendly !== 'undefined') {
      win.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank');
    }
  };

  return (
    <button onClick={handleClick} className={className} style={style}>
      {children}
    </button>
  );
}
