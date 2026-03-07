import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Package, ShoppingBag, Bot, ArrowRight, Check } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Servicios — Growth Partner Online',
  description: 'Webs y negocios, Amazon, Shopify y aplicaciones. Estrategia de crecimiento real para tu negocio online: más tráfico, más conversión, más ventas.',
};

export default function Servicios() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-eyebrow">Servicios</span>
          <h1>No gestiono canales.<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Hago crecer negocios.</em></h1>
          <p>Cada servicio está diseñado para un canal concreto, pero siempre con visión de conjunto. El objetivo no es "hacer cosas": es mover los números que importan.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {[
              {
                href: '/servicios/webs-negocios',
                badge: 'Negocio & Servicios',
                icon: <Globe className="icon-xl" />,
                title: 'Webs y Negocios',
                desc: 'Más tráfico, mejor conversión y publicidad rentable para webs de negocio o servicios. SEO, CRO, Google Ads, Meta Ads y estrategia de captación de leads.',
                items: ['SEO y visibilidad orgánica', 'Conversión y captación de leads', 'Publicidad en Google y Meta', 'Estrategia de crecimiento'],
              },
              {
                href: '/servicios/amazon',
                badge: 'Marketplace líder',
                icon: <Package className="icon-xl" />,
                title: 'Amazon',
                desc: 'Listings optimizados, campañas PPC rentables y posicionamiento real en España, Europa y EEUU. ACoS bajo control y márgenes protegidos.',
                items: ['SEO de listings y keywords', 'Gestión y auditoría PPC', 'A+ Content & Brand Content', 'Expansión Europa y EEUU'],
              },
              {
                href: '/servicios/shopify',
                badge: 'Canal directo',
                icon: <ShoppingBag className="icon-xl" />,
                title: 'Shopify',
                desc: 'SEO técnico, experiencia de usuario, copy de producto e infraestructura de marketing. Canal directo que convierte y no depende de marketplaces.',
                items: ['Auditoría SEO técnica', 'Optimización de conversión', 'Shopify Markets', 'Email marketing y tracking'],
              },
              {
                href: '/servicios/aplicaciones',
                badge: 'Tech & IA',
                icon: <Bot className="icon-xl" />,
                title: 'Aplicaciones & IA',
                desc: 'Webs a medida, landing pages de venta e integración de IA que automatiza procesos y escala tu negocio sin escalar el equipo.',
                items: ['Webs y landing pages', 'Chatbots e IA aplicada', 'GPTs personalizados', 'Apps web a medida'],
                neutral: true,
              },
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
              <span className="section-eyebrow">El enfoque Growth Partner</span>
              <h2>Lo que cambia cuando trabajas con un socio, no con un proveedor.</h2>
              <p style={{ marginTop: 16 }}>No cobro por "estar disponible" ni por entregar informes. Me implico en la ejecución, me mido por los mismos KPIs que tú y trabajo como si el negocio fuera mío. Esa es la diferencia entre un consultor y un Growth Partner.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
                <div className="highlight-box">
                  <h4>Visión de conjunto, no de canal</h4>
                  <p>Analizo todos tus canales al mismo tiempo porque el cuello de botella rara vez está donde crees que está.</p>
                </div>
                <div className="highlight-box">
                  <h4>Resultados, no entregables</h4>
                  <p>No recibirás un PDF de 80 páginas. Recibirás un plan ejecutable, priorizado y con métricas concretas desde el primer día.</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { num: '×3,4', title: 'Crecimiento en Amazon', text: 'De 500K a 1,7M€ en el canal de una marca líder nacional en tres años' },
                { num: '×3,25', title: 'Canal Shopify propio', text: 'Sin invertir un euro en publicidad de pago' },
                { num: '×5', title: 'Marketplace emergente', text: 'Canal de Miravia lanzado y escalado desde prácticamente cero' },
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
            <h2 style={{ marginTop: 16, marginBottom: 16 }}>¿Tu negocio online te está dando los resultados que deseas?</h2>
            <p style={{ maxWidth: 560, margin: '0 auto 32px' }}>En 30 minutos analizamos tu situación, identificamos los cuellos de botella y te digo exactamente qué hay que cambiar primero. Sin compromiso, sin pitch de ventas.</p>
            <CalendlyButton className="btn btn-primary btn-lg">
              Reservar diagnóstico gratuito <ArrowRight className="icon-lg" />
            </CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
