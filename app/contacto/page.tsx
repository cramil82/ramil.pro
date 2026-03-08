import type { Metadata } from 'next';
import Image from 'next/image';
import { Search, Target, ClipboardList, Clock, Mail, Linkedin, Instagram, ShieldCheck, CalendarCheck, Phone } from 'lucide-react';
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
        .contact-form-photo { display: grid; grid-template-columns: 2fr 1fr; gap: 48px; align-items: start; max-width: 960px; margin: 0 auto; }
        .contact-photo-aside { display: flex; flex-direction: column; gap: 16px; }
        .whatsapp-box { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow); text-align: center; }
        .whatsapp-box h4 { margin-bottom: 8px; }
        .whatsapp-box p { font-size: 0.875rem; color: var(--text-2); margin-bottom: 16px; }
        .btn-whatsapp { display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: #25D366; color: #fff; border-radius: var(--radius); padding: 12px 20px; font-weight: 600; font-size: 0.95rem; width: 100%; transition: background 0.2s; text-decoration: none; }
        .btn-whatsapp:hover { background: #1ebe5d; color: #fff; }
        @media (max-width: 900px) { .contact-split { grid-template-columns: 1fr; gap: 40px; } .contact-sidebar { position: static; } .calendly-inline-widget { height: 580px; } .contact-form-photo { grid-template-columns: 1fr; } }
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
                <a href="tel:+34652741346" className="contact-quick-link"><Phone size={15} /> +34 652 741 346</a>
                <a href="https://www.linkedin.com/in/carlos-ramil" target="_blank" rel="noopener" className="contact-quick-link"><Linkedin size={15} /> linkedin.com/in/carlos-ramil</a>
                <a href="https://www.instagram.com/cramil_pro" target="_blank" rel="noopener" className="contact-quick-link"><Instagram size={15} /> @cramil_pro</a>
              </div>
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
          <div className="contact-form-photo">
            <ContactForm />
            <div className="contact-photo-aside">
              <Image src="/FOTO-CARLOS.jpg" alt="Carlos Ramil" width={320} height={400}
                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', objectFit: 'cover', objectPosition: 'top', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }} />
              <div className="whatsapp-box">
                <h4>Escríbeme por WhatsApp</h4>
                <p>Respondo en el menor tiempo posible.</p>
                <a href="https://wa.me/34652741346" target="_blank" rel="noopener" className="btn-whatsapp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Abrir WhatsApp
                </a>
              </div>
            </div>
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
