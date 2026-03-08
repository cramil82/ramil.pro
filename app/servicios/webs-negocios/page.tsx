import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Webs y Negocios — Tráfico, Conversión y Crecimiento',
  description: 'Más visitas, más leads y más ventas para tu web de negocio o servicios. SEO, CRO, publicidad y estrategia de crecimiento con enfoque de Growth Partner.',
};

export default function WebsNegocios() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-eyebrow">Webs y Negocios</span>
          <h1>Tu web existe.<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Ahora necesita trabajar.</em></h1>
          <p>Tener una web no es suficiente. Necesitas que traiga visitas, que esas visitas se conviertan en leads y que esos leads se conviertan en clientes. Eso es lo que construimos juntos.</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CalendlyButton className="btn btn-primary btn-lg">Diagnóstico Gratuito <ArrowRight className="icon-lg" /></CalendlyButton>
            <Link href="/servicios" className="btn btn-secondary">Ver todos los servicios</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col-section">
            <div className="col-main">
              <div className="services-list">
                {[
                  {
                    title: 'Tráfico y Visibilidad Orgánica',
                    items: [
                      'Auditoría SEO completa: técnica, contenidos y autoridad',
                      'Investigación de palabras clave y arquitectura de contenidos',
                      'Optimización SEO de páginas de servicio o producto clave',
                      'Estrategia de contenidos para posicionarte como referente en tu sector',
                      'Optimización de velocidad y Core Web Vitals',
                      'Setup de Google Search Console y monitorización de posiciones',
                    ],
                  },
                  {
                    title: 'Conversión y Captación de Leads',
                    items: [
                      'Auditoría de conversión (CRO): por qué visitan pero no contactan',
                      'Rediseño de página de servicios o landing page de captación',
                      'Mejora de copy: propuesta de valor, titular, llamadas a la acción',
                      'Optimización del formulario de contacto y flujo de conversión',
                      'Implementación de elementos de confianza: testimonios, casos, garantías',
                      'Tests A/B en páginas clave para mejorar la tasa de conversión',
                    ],
                  },
                  {
                    title: 'Publicidad y Captación de Pago',
                    items: [
                      'Auditoría de campañas activas en Google Ads o Meta Ads',
                      'Setup y lanzamiento de campañas de captación desde cero',
                      'Estrategia de segmentación y públicos objetivos',
                      'Optimización de creatividades y mensajes publicitarios',
                      'Control de presupuesto, ROAS y rentabilidad por canal',
                      'Integración de campañas de pago con el funnel orgánico',
                    ],
                  },
                ].map((group, i) => (
                  <FadeIn key={i} className="services-group" delay={i * 0.08}>
                    <div className="services-group-title">{group.title}</div>
                    <div className="service-items">
                      {group.items.map(item => (
                        <div key={item} className="service-item">
                          <span className="service-item-check"><Check size={14} /></span>{item}
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="col-aside">
              <div style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <FadeIn className="highlight-box">
                  <h4>El problema más común</h4>
                  <p>La mayoría de webs de negocio tienen tráfico —a veces incluso bastante— pero convierten muy poco. Antes de invertir más en publicidad, hay que entender por qué la gente llega y se va sin hacer nada.</p>
                </FadeIn>
                <FadeIn className="highlight-box" delay={0.07}>
                  <h4>Enfoque de Growth Partner</h4>
                  <p>No trabajo sobre un canal suelto. Analizo tráfico, conversión, publicidad y propuesta de valor al mismo tiempo, porque el cuello de botella rara vez está donde crees que está.</p>
                </FadeIn>
                <FadeIn className="services-group" delay={0.14}>
                  <div className="services-group-title">Estrategia de Crecimiento y Retención</div>
                  <div className="service-items">
                    {[
                      'Diagnóstico de negocio: embudos, métricas, propuesta de valor y posicionamiento',
                      'Mapa de oportunidades y priorización de palancas de crecimiento',
                      'Setup de analítica avanzada: Google Analytics 4, eventos y conversiones',
                      'Estrategia de email marketing y automatizaciones de seguimiento',
                      'Plan de fidelización y recurrencia para clientes actuales',
                      'Acompañamiento en la ejecución con revisiones periódicas de KPIs',
                    ].map(item => (
                      <div key={item} className="service-item">
                        <span className="service-item-check"><Check size={14} /></span>{item}
                      </div>
                    ))}
                  </div>
                </FadeIn>
                <CalendlyButton className="btn btn-primary" style={{ justifyContent: 'center', padding: 15 }}>
                  Reservar diagnóstico gratuito <ArrowRight size={16} />
                </CalendlyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Por qué funciona</span>
            <h2>Crecer no es hacer más ruido.<br />Es encontrar las palancas correctas.</h2>
            <p>La mayoría de negocios no necesitan más tácticas. Necesitan claridad sobre qué está fallando y en qué orden arreglarlo.</p>
          </div>
          <div className="why-grid">
            {[
              ['SEO', 'Tráfico que no para de crecer', 'El SEO bien hecho es el activo con mejor ROI a largo plazo. Tráfico que llega solo, sin pagar por cada clic, mes tras mes.'],
              ['CRO', 'Más ventas con el mismo tráfico', 'Antes de invertir en traer más gente, hay que asegurarse de que los que ya llegan convierten. Duplicar la conversión dobla los ingresos.'],
              ['Estrategia', 'Una foto completa del negocio', 'Conectar tráfico, conversión, publicidad y retención en un solo sistema coherente. Eso es lo que marca la diferencia entre crecer y dar vueltas.'],
            ].map(([num, title, text], i) => (
              <FadeIn key={i} className="why-card" delay={i * 0.07}>
                <span className="why-card-num">{num}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <span className="section-eyebrow">Siguiente paso</span>
            <h2 style={{ marginTop: 16, marginBottom: 16 }}>¿Tu web está dejando leads sobre la mesa?</h2>
            <p style={{ maxWidth: 560, margin: '0 auto 32px' }}>En 30 minutos analizamos tu negocio, identificamos dónde se están perdiendo clientes y te digo exactamente qué hay que cambiar primero. Sin compromiso, sin pitch de ventas.</p>
            <CalendlyButton className="btn btn-primary btn-lg">
              Quiero mi diagnóstico gratuito <ArrowRight className="icon-lg" />
            </CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
