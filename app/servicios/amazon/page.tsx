import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Consultoría Amazon — SEO, PPC y Listings',
  description: 'Especialista en Amazon SEO, PPC y optimización de listings. Más visibilidad, mejor conversión, ACoS controlado.',
};

export default function Amazon() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-eyebrow">Consultoría Amazon</span>
          <h1>Más ventas en Amazon.<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Sin más gasto.</em></h1>
          <p>Optimización de listings, campañas PPC que convierten y estrategia de posicionamiento para vender más en Amazon España, Europa y EEUU.</p>
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
                <FadeIn className="services-group">
                  <div className="services-group-title">SEO y Optimización de Listings</div>
                  <div className="service-items">
                    {['Auditoría completa de listing (título, bullets, descripción, backend keywords, imágenes)','Reescritura y optimización de listing completo (copy + keywords)','Investigación de keywords y mapa de palabras clave para un producto','Optimización de imágenes: briefing visual completo (qué cambiar, en qué orden y por qué)','Creación de A+ Content / Enhanced Brand Content desde cero','Traducción y localización de listing para marketplace europeo (DE, FR, IT, UK)','Análisis de competidores y posicionamiento de un ASIN concreto'].map(item => (
                      <div key={item} className="service-item"><span className="service-item-check"><Check size={14} /></span>{item}</div>
                    ))}
                  </div>
                </FadeIn>
                <FadeIn className="services-group" delay={0.1}>
                  <div className="services-group-title">PPC y Publicidad en Amazon</div>
                  <div className="service-items">
                    {['Auditoría de cuenta publicitaria (estructura de campañas, ACoS, ineficiencias)','Setup inicial de campañas desde cero (estructura, tipos, segmentación, pujas)','Limpieza y reestructuración de cuenta publicitaria existente','Análisis de search term report + informe de acción con keywords negativas y oportunidades','Configuración de campaña Sponsored Brands o Sponsored Display específica','Diagnóstico de producto que no convierte: análisis causa-raíz + plan de acción'].map(item => (
                      <div key={item} className="service-item"><span className="service-item-check"><Check size={14} /></span>{item}</div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
            <div className="col-aside">
              <div style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <FadeIn className="highlight-box">
                  <h4>España · Europa · EEUU</h4>
                  <p>Experiencia gestionando cuentas en España, toda Europa (DE, FR, IT, UK) y mercado estadounidense. Estrategia adaptada a cada marketplace.</p>
                </FadeIn>
                <FadeIn className="highlight-box" delay={0.07}>
                  <h4>La ventaja que pocos conocen</h4>
                  <p>La mayoría de sellers de Amazon no tienen lista de emails propia. Dependen 100% de Amazon. Te ayudo a montar el sistema para captar tu audiencia propia.</p>
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
            <span className="section-eyebrow">Por qué trabajar conmigo</span>
            <h2>Experiencia real en las trincheras de Amazon</h2>
            <p>No aprendí Amazon en un curso. Lo aprendí optimizando cuentas reales con presupuestos reales.</p>
          </div>
          <div className="why-grid">
            {[['ES·EU·US','Marketplaces','Experiencia directa gestionando cuentas en España, Europa y EEUU'],['A–Z','Visión completa','Listings, PPC, imágenes, A+ Content, marca y expansión. El ecosistema completo'],['Día 1','Resultados accionables','Plan claro y ejecutable desde el primer día, sin semanas de onboarding']].map(([num,title,text],i) => (
              <FadeIn key={i} className="why-card" delay={i*0.07}>
                <span className="why-card-num">{num}</span><h4>{title}</h4><p>{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <span className="section-eyebrow">Siguiente paso</span>
            <h2 style={{ marginTop: 16, marginBottom: 16 }}>¿Tus ventas en Amazon están donde deberían?</h2>
            <p style={{ maxWidth: 560, margin: '0 auto 32px' }}>30 minutos de diagnóstico gratuito. Analizamos tu situación, identificamos los cuellos de botella y vemos qué palanca puede mover más el resultado.</p>
            <CalendlyButton className="btn btn-primary btn-lg">Quiero mi diagnóstico Amazon <ArrowRight className="icon-lg" /></CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
