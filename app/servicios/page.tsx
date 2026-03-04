import type { Metadata } from 'next';
import Link from 'next/link';
import { Package, ShoppingBag, Bot, ArrowRight, Check } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Servicios — Consultor eCommerce',
  description: 'Consultoría especializada en Amazon, Shopify y aplicaciones personalizadas. Estrategia real para tu negocio online.',
};

export default function Servicios() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-eyebrow">Lo que hago</span>
          <h1>Consultoría <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>real</em> para negocios reales</h1>
          <p>Sin plantillas genéricas. Sin teorías vacías. Cada estrategia está diseñada específicamente para tu negocio, tus objetivos y tu mercado.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {[
              { href: '/servicios/amazon', badge: 'Marketplace líder', icon: <Package className="icon-xl" />, title: 'Amazon', desc: 'Listings optimizados, campañas PPC rentables y posicionamiento real en España, Europa y EEUU.', items: ['SEO de listings y keywords','Gestión y auditoría PPC','A+ Content & Brand Content','Expansión Europa y EEUU'] },
              { href: '/servicios/shopify', badge: 'eCommerce propio', icon: <ShoppingBag className="icon-xl" />, title: 'Shopify', desc: 'SEO técnico, experiencia de usuario, copy de producto e infraestructura de marketing que convierte.', items: ['Auditoría SEO técnica','Optimización de conversión','Shopify Markets','Email marketing y tracking'] },
              { href: '/servicios/aplicaciones', badge: 'Tech & IA', icon: <Bot className="icon-xl" />, title: 'Aplicaciones & IA', desc: 'Landing pages de venta, aplicaciones web a medida e integración de IA que automatiza y escala.', items: ['Webs y landing pages','Chatbots e IA aplicada','GPTs personalizados','Apps web a medida'], neutral: true },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <Link href={s.href} className="card service-card">
                  <ArrowRight className="card-arrow" />
                  <span className="badge">{s.badge}</span>
                  <div className={`card-icon${s.neutral ? ' neutral' : ''}`} style={{ width: 56, height: 56, borderRadius: 14 }}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p style={{ marginBottom: 20 }}>{s.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {s.items.map(item => (
                      <li key={item} className="service-item">
                        <span className="service-item-check"><Check size={14} /></span>{item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 64 }}>
            <div>
              <span className="section-eyebrow">Mi enfoque</span>
              <h2>La consultoría como debería ser siempre.</h2>
              <p style={{ marginTop: 16 }}>No cobro por "estar disponible". Cobro por entregar resultados concretos. Cada proyecto empieza con un diagnóstico honesto: si no puedo ayudarte, te lo digo.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
                <div className="highlight-box"><h4>Basado en datos, no en tendencias</h4><p>Cada decisión se toma con métricas reales: keywords con volumen, ACoS por campaña, tasa de conversión por página.</p></div>
                <div className="highlight-box"><h4>Ejecutable desde el día uno</h4><p>No recibirás un PDF de 80 páginas que nadie implementa. Recibirás un plan de acción claro, priorizado y con pasos concretos.</p></div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { num: 'ES · EU · US', title: 'Mercados de Amazon', text: 'Experiencia en España, Europa (DE, FR, IT, UK) y mercado estadounidense' },
                { num: '3', title: 'Áreas especializadas', text: 'Amazon, Shopify e IA: el ecosistema completo del negocio online' },
                { num: "15'", title: 'Para empezar', text: 'Una llamada de 30 minutos es suficiente para saber si podemos trabajar juntos' },
              ].map((w, i) => (
                <div key={i} className="why-card">
                  <span className="why-card-num">{w.num}</span>
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <span className="section-eyebrow">¿Por dónde empezamos?</span>
            <h2 style={{ marginTop: 16, marginBottom: 16 }}>Reserva tu diagnóstico gratuito</h2>
            <p style={{ maxWidth: 540, margin: '0 auto 32px' }}>30 minutos. Sin compromiso. Con un plan real al final de la llamada. Solo para personas que van en serio con su negocio online.</p>
            <CalendlyButton className="btn btn-primary btn-lg">
              Reservar ahora <ArrowRight className="icon-lg" />
            </CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
