import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, MousePointerClick, Cpu, Globe } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Aplicaciones, Web e IA',
  description: 'Webs a medida, landing pages de venta, chatbots, GPTs personalizados e IA aplicada a negocio.',
};

export default function Aplicaciones() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-eyebrow">Aplicaciones, Web e IA</span>
          <h1>Tecnología que trabaja<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>para tu negocio.</em></h1>
          <p>Desde una landing page que vende hasta una aplicación web a medida. Más la integración de inteligencia artificial que automatiza lo repetitivo y multiplica tu productividad.</p>
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
                  { title: 'IA Aplicada a Negocio', items: ['Implementación de chatbot en web o tienda Shopify','Creación de prompt pack profesional para tu sector (Amazon, Shopify, RRSS)','Auditoría de herramientas de IA que usas + recomendación de stack optimizado','Creación de GPT personalizado o agente de IA para una tarea específica de tu negocio'] },
                  { title: 'Web y Landing Pages', items: ['Creación de landing page de captura de leads (una página, copy + diseño)','Creación de landing page de venta de producto o servicio (VSL o carta de ventas)','Setup de dominio, hosting, email profesional y web básica operativa','Redacción de copy completo para web (home, servicios, about, contacto) + imágenes','Creación de imágenes en acción: fotos lifestyle o vídeo corto desde fotografía de producto','Creación de aplicación web a medida con base de datos'] },
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
                <FadeIn className="highlight-box"><h4>La IA como ventaja competitiva</h4><p>La mayoría de negocios usan IA de forma genérica. Yo creo herramientas específicas para tu sector y tus procesos.</p></FadeIn>
                <FadeIn className="highlight-box" delay={0.07}><h4>Hosting propio: modelo recurrente</h4><p>Al disponer de infraestructura propia, puedo ofrecerte tu web + dominio + alojamiento como servicio mensual.</p></FadeIn>
                <FadeIn className="card" delay={0.14}>
                  <h4 style={{ marginBottom: 16 }}>Plazos orientativos</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[['Landing page','5–8 días'],['GPT personalizado','3–5 días'],['App web a medida','2–6 semanas'],['Chatbot','3–7 días']].map(([label, val], i, arr) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', paddingBottom: 12, borderBottom: i < arr.length-1 ? '1px solid var(--border)' : 'none' }}>
                        <span style={{ color: 'var(--text-2)' }}>{label}</span>
                        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{val}</span>
                      </div>
                    ))}
                  </div>
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
            <span className="section-eyebrow">Casos de uso</span>
            <h2>¿Para qué tipo de negocio tiene sentido?</h2>
          </div>
          <div className="grid-3">
            {[
              { icon: <MousePointerClick className="icon-xl" />, title: 'Tienda con tráfico pero sin ventas', text: 'Una landing page bien construida con copy orientado a la venta puede transformar el resultado de una campaña.' },
              { icon: <Cpu className="icon-xl" />, title: 'Negocio que quiere automatizar', text: 'Tareas repetitivas que consumen horas: atención al cliente, generación de contenido, análisis de datos. Las automatizo con IA.' },
              { icon: <Globe className="icon-xl" />, title: 'Profesional que necesita presencia online', text: 'Web profesional, email corporativo y presencia digital funcional. Lo configuro y lo dejo operativo.', neutral: true },
            ].map((item, i) => (
              <FadeIn key={i} className="card" delay={i*0.07}>
                <div className={`card-icon${item.neutral ? ' neutral' : ''}`}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <span className="section-eyebrow">¿Tienes un proyecto en mente?</span>
            <h2 style={{ marginTop: 16, marginBottom: 16 }}>Cuéntame qué necesitas.</h2>
            <p style={{ maxWidth: 560, margin: '0 auto 32px' }}>En 30 minutos vemos si tiene sentido trabajar juntos y cómo abordar tu proyecto.</p>
            <CalendlyButton className="btn btn-primary btn-lg">Hablamos <ArrowRight className="icon-lg" /></CalendlyButton>
          </div>
        </div>
      </section>
    </>
  );
}
