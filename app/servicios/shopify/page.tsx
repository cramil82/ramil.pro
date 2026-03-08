import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Consultoría Shopify — SEO, CRO y eCommerce',
  description: 'Especialista en Shopify: SEO técnico, optimización de conversión, Shopify Markets y funcionalidades avanzadas.',
};

export default function Shopify() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-eyebrow">Consultoría Shopify</span>
          <h1>Tu tienda tiene tráfico.<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Ahora necesita vender.</em></h1>
          <p>SEO técnico, optimización de conversión, funcionalidades avanzadas y estrategia de marketing. Todo lo que necesita una tienda Shopify para escalar de verdad.</p>
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
                  { title: 'SEO y Visibilidad Orgánica', items: ['Auditoría SEO técnica completa de tienda Shopify','Optimización SEO de una colección o página de producto específica','Investigación de keywords y arquitectura web de contenidos para la tienda','Setup de metadatos (title tags, meta descriptions) para toda la tienda'] },
                  { title: 'Conversión y Experiencia de Usuario', items: ['Auditoría de conversión (CRO): análisis de por qué no vende la tienda','Rediseño de página de producto para aumentar conversión (copy + estructura)','Creación o mejora de landing page de campaña o producto','Implementación de sección de reseñas, FAQs o urgencia en producto'] },
                  { title: 'Funcionalidades y Configuración Técnica', items: ['Implementación de funcionalidad nueva con app (filtros, bundles, suscripciones, comparador)','Integración de email marketing con la tienda (Klaviyo, Mailchimp)','Setup de píxeles y tracking: Google Analytics 4, Meta Pixel, eventos de conversión','Configuración de Shopify Markets para vender en múltiples países y monedas','Creación de página de colección o landing con código Liquid personalizado','Setup de flujos de recuperación de carrito abandonado (email + SMS)'] },
                ].map((group, i) => (
                  <FadeIn key={i} className="services-group" delay={i * 0.1}>
                    <div className="services-group-title">{group.title}</div>
                    <div className="service-items">
                      {group.items.map(item => (
                        <div key={item} className="service-item"><span className="service-item-check"><Check size={14} /></span>{item}</div>
                      ))}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            <div className="col-aside">
              <div style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <FadeIn className="highlight-box"><h4>El problema más común</h4><p>La mayoría de tiendas Shopify tienen tráfico. El problema es la conversión. Antes de invertir más en anuncios, necesitas saber por qué la gente no compra cuando llega.</p></FadeIn>
                <FadeIn className="highlight-box" delay={0.07}><h4>Shopify Markets</h4><p>Si ya vendes en España y quieres expandirte a Europa, Shopify Markets es la herramienta. Múltiples monedas, idiomas y dominios desde una sola cuenta.</p></FadeIn>
                <FadeIn delay={0.14}>
                  <Image src="/shopify-growth-partner.png" alt="Shopify Growth Partner" width={400} height={400}
                    style={{ width: '100%', borderRadius: 'var(--radius-lg)', objectFit: 'cover', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }} />
                </FadeIn>
                <CalendlyButton className="btn btn-primary" style={{ justifyContent: 'center', padding: 15 }}>Reservar diagnóstico gratuito <ArrowRight size={16} /></CalendlyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Por qué funciona</span>
            <h2>Shopify bien hecho vende solo.</h2>
            <p>Una tienda optimizada es la diferencia entre perder dinero en anuncios y tener un canal rentable que escala.</p>
          </div>
          <div className="why-grid">
            {[['SEO','Tráfico orgánico','Tráfico que llega sin pagar por cada clic. El SEO bien hecho es la inversión con mejor ROI a largo plazo'],['CRO','Más ventas, mismo tráfico','Duplicar la conversión dobla los ingresos sin gastar un euro más en publicidad'],['Tech','Infraestructura sólida','Tracking correcto, emails automatizados y herramientas integradas que trabajan mientras duermes']].map(([num,title,text],i) => (
              <FadeIn key={i} className="why-card" delay={i*0.07}><span className="why-card-num">{num}</span><h4>{title}</h4><p>{text}</p></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <span className="section-eyebrow">Siguiente paso</span>
            <h2 style={{ marginTop: 16, marginBottom: 16 }}>¿Tu Shopify está convirtiendo lo que debería?</h2>
            <p style={{ maxWidth: 560, margin: '0 auto 32px' }}>En 30 minutos analizamos tu tienda, identificamos los puntos de fuga y te digo exactamente qué hay que arreglar primero.</p>
            <CalendlyButton className="btn btn-primary btn-lg">Quiero mi diagnóstico Shopify <ArrowRight className="icon-lg" /></CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
