import type { Metadata } from 'next';
import Image from 'next/image';
import { Search, Target, ClipboardList, Clock, Mail, Linkedin, Instagram, ShieldCheck, CalendarCheck, Send } from 'lucide-react';
import CalendlyInline from '@/components/CalendlyInline';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto — Reserva tu llamada de 30 minutos',
  description: 'Reserva tu llamada de diagnóstico gratuita de 30 minutos. Analizamos tu negocio y diseñamos un plan de acción real.',
};

export default function Contacto() {
  return (
    <>
      <style>{`
        .calendly-wrapper { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow); }
        .calendly-inline-widget { min-width: 320px; height: 700px; }
        .contact-split { display: grid; grid-template-columns: 1fr 1.6fr; gap: 56px; align-items: start; }
        .contact-sidebar { position: sticky; top: 96px; display: flex; flex-direction: column; gap: 24px; }
        .divider-or { display: flex; align-items: center; gap: 16px; margin: 56px 0 40px; color: var(--text-3); font-size: 0.82rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
        .divider-or::before, .divider-or::after { content: ''; flex: 1; height: 1px; background: var(--border); }
        .contact-quick-link { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--text-2); transition: color 0.2s; }
        .contact-quick-link:hover { color: var(--accent); }
        @media (max-width: 900px) { .contact-split { grid-template-columns: 1fr; gap: 40px; } .contact-sidebar { position: static; } .calendly-inline-widget { height: 580px; } }
      `}</style>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-eyebrow">Diagnóstico Gratuito</span>
          <h1>Reserva tu llamada<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>de 30 minutos.</em></h1>
          <p>Sin compromiso. Sin ventas agresivas. Analizamos tu negocio, identificamos los cuellos de botella y sales con un plan real que puedes ejecutar desde mañana.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-split">
            {/* Sidebar */}
            <div className="contact-sidebar">
              <div>
                <span className="section-eyebrow">Lo que incluye</span>
                <h2 style={{ fontSize: '1.7rem', marginTop: 12, lineHeight: 1.2 }}>30 minutos.<br />Con un plan real al final.</h2>
                <p style={{ marginTop: 16 }}>No es una llamada de ventas. Es un diagnóstico honesto de tu situación con acciones concretas que puedes implementar inmediatamente.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { icon: <Search size={18} />, label: 'Analizamos tu situación actual', strong: 'Amazon, Shopify o tu proyecto online' },
                  { icon: <Target size={18} />, label: 'Identificamos los cuellos de botella', strong: 'Dónde se pierde el dinero o el potencial' },
                  { icon: <ClipboardList size={18} />, label: 'Sales con un plan accionable', strong: 'Pasos concretos para empezar mañana' },
                  { icon: <Clock size={18} />, label: 'Duración y precio', strong: '30 minutos · Totalmente gratuita' },
                ].map((d, i) => (
                  <div key={i} className="contact-detail">
                    <div className="contact-detail-icon">{d.icon}</div>
                    <div className="contact-detail-text">{d.label}<strong>{d.strong}</strong></div>
                  </div>
                ))}
              </div>
              <div className="highlight-box">
                <h4>Solo para personas comprometidas</h4>
                <p>Si vas en serio con tu negocio online y quieres estrategia real, esta llamada es para ti. Si no puedo ayudarte, te lo digo directamente.</p>
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginBottom: 4 }}>También puedes escribirme directamente</p>
                <a href="mailto:carlos@ramil.pro" className="contact-quick-link"><Mail size={15} /> carlos@ramil.pro</a>
                <a href="https://www.linkedin.com/in/carlos-ramil" target="_blank" rel="noopener" className="contact-quick-link"><Linkedin size={15} /> linkedin.com/in/carlos-ramil</a>
                <a href="https://www.instagram.com/cramil_pro" target="_blank" rel="noopener" className="contact-quick-link"><Instagram size={15} /> @cramil_pro</a>
              </div>
              <Image src="/CARLOS-PORTADA.jpg" alt="Carlos Ramil" width={320} height={400}
                style={{ width: '100%', maxWidth: 320, borderRadius: 'var(--radius-lg)', objectFit: 'cover', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }} />
            </div>

            {/* Calendly inline */}
            <div>
              <CalendlyInline />
              <p style={{ fontSize: '0.76rem', color: 'var(--text-3)', textAlign: 'center', marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <ShieldCheck size={14} />
                Reserva segura a través de Calendly · Confirmación automática por email
              </p>
            </div>
          </div>

          {/* Divider + form */}
          <div className="divider-or">O si prefieres escribir primero</div>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="section-sm" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid-3" style={{ gap: 20 }}>
            {[
              { icon: <ShieldCheck className="icon-xl" />, title: 'Sin compromiso', text: 'La llamada es gratuita y sin obligación de contratar nada.' },
              { icon: <CalendarCheck className="icon-xl" />, title: 'Confirmación inmediata', text: 'Recibirás un email de confirmación con el enlace a la videollamada al instante.' },
              { icon: <Target className="icon-xl" />, title: 'Honestidad ante todo', text: 'Si no puedo ayudarte o no es el momento, te lo digo directamente.' },
            ].map((g, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 24 }}>
                <div style={{ width: 48, height: 48, background: 'var(--accent-bg)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', margin: '0 auto 16px' }}>
                  {g.icon}
                </div>
                <h4 style={{ marginBottom: 8 }}>{g.title}</h4>
                <p style={{ fontSize: '0.875rem' }}>{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
