'use client';
import { useEffect, useRef } from 'react';

const CALENDLY_URL = 'https://calendly.com/carlos-ramil?hide_gdpr_banner=1&primary_color=800020';

export default function CalendlyInline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWidget = () => {
      const win = window as any;
      if (win.Calendly && containerRef.current) {
        win.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current,
        });
      }
    };

    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    const existing = document.querySelector('script[src*="calendly"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      // Script ya cargado, inicializar directamente
      initWidget();
    }
  }, []);

  return (
    <div className="calendly-wrapper">
      <div
        ref={containerRef}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}
