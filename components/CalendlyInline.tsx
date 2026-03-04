'use client';
import { useEffect } from 'react';

export default function CalendlyInline() {
  useEffect(() => {
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

  return (
    <div className="calendly-wrapper">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/carlos-ramil?hide_gdpr_banner=1&primary_color=800020"
      />
    </div>
  );
}
