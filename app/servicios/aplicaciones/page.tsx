import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Zap, TrendingUp, Cpu, Clock, Bot, BarChart2 } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'IA aplicada al negocio — Productividad y Crecimiento | Carlos Ramil',
  description: 'Implanta la inteligencia artificial en tu negocio para trabajar más rápido, automatizar lo repetitivo y tomar mejores decisiones. Enfoque Growth Partner: resultados, no tecnología por tecnología.',
};

export default function Aplicaciones() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-eyebrow">IA &amp; Productividad</span>
          <h1>Tu negocio con IA.<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Más rápido. Más rentable.</em></h1>
          <p>La inteligencia artificial no es el futuro. Es la diferencia que ya existe hoy entre los negocios que avanzan y los que se quedan atrás. Te ayudo a implantarla en tus procesos reales para que trabajes menos en lo que no importa y más en lo que hace crecer tu negocio.</p>
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
                  <div className="services-group-title">Implantación de IA en tu Negocio</div>
                  <div className="service-items">
                    {[
                      'Diagnóstico de procesos: identificamos dónde la IA puede tener mayor impacto',
                      'Selección e integración del stack de herramientas de IA adecuado para tu sector',
                      'Automatización de tareas repetitivas: atención al cliente, contenido, análisis, reporting',
                      'Creación de GPTs y agentes de IA personalizados para tu negocio',
                      'Implementación de chatbot inteligente en web o tienda Shopify',
                      'Integración de IA en flujos de trabajo existentes sin romper lo que ya funciona',
                    ].map(item => (
                      <div key={item} className="service-item"><span className="service-item-check"><Check size={14} /></span>{item}</div>
                    ))}
                  </div>
                </FadeIn>
                <FadeIn className="services-group" delay={0.1}>
                  <div className="services-group-title">Productividad y Velocidad de Ejecución</div>
                  <div className="service-items">
                    {[
                      'Auditoría de productividad: dónde se van las horas y cómo recuperarlas',
                      'Sistemas de prompts profesionales para tu equipo y tu sector',
                      'Automatización de procesos con IA + herramientas de integración (n8n, Make, Zapier)',
                      'Reducción drástica del tiempo en creación de contenido, análisis y toma de decisiones',
                      'Formación práctica para que tú y tu equipo uséis la IA de verdad, no de forma genérica',
                      'Dashboards y sistemas de seguimiento que te dan la foto del negocio en tiempo real',
                    ].map(item => (
                      <div key={item} className="service-item"><span className="service-item-check"><Check size={14} /></span>{item}</div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
            <div className="col-aside">
              <div style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <FadeIn className="highlight-box">
                  <h4>No es tecnología por tecnología</h4>
                  <p>No te vendo herramientas. Te ayudo a identificar qué procesos de tu negocio se pueden automatizar o acelerar con IA, y lo implantamos con un objetivo claro: que ganes tiempo o dinero.</p>
                </FadeIn>
                <FadeIn className="services-group" delay={0.07}>
                  <div className="services-group-title">Aplicaciones y Herramientas a Medida</div>
                  <div className="service-items">
                    {[
                      'Aplicación web con IA integrada adaptada a tu proceso de negocio',
                      'Landing pages y webs de alto rendimiento orientadas a conversión',
                      'Integraciones entre plataformas: CRM, ecommerce, email, analytics',
                      'Setup de dominio, hosting, email profesional y web operativa',
                      'Creación de copy completo para web (home, servicios, sobre mí, contacto)',
                    ].map(item => (
                      <div key={item} className="service-item"><span className="service-item-check"><Check size={14} /></span>{item}</div>
                    ))}
                  </div>
                </FadeIn>
                <FadeIn className="highlight-box" delay={0.14}>
                  <h4>Enfoque Growth Partner</h4>
                  <p>La IA que implantamos está al servicio de tu crecimiento, no de la tecnología en sí. Antes de elegir ninguna herramienta, entendemos tu negocio, tus procesos y dónde está el cuello de botella real.</p>
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
            <span className="section-eyebrow">Por qué importa ahora</span>
            <h2>La IA no te va a reemplazar.<br />Pero sí lo hará alguien que la usa mejor que tú.</h2>
            <p>No se trata de estar al día con las tendencias. Se trata de usarla estratégicamente para hacer más con menos y avanzar más rápido que tu competencia.</p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: <Zap className="icon-xl" />,
                title: 'Velocidad de ejecución',
                text: 'Lo que antes tardaba días puede hacerse en horas. Contenido, análisis, propuestas, informes. La IA bien configurada multiplica tu capacidad de ejecución sin multiplicar el equipo.',
              },
              {
                icon: <TrendingUp className="icon-xl" />,
                title: 'Decisiones más rápidas y mejores',
                text: 'Con los sistemas adecuados, tienes la foto de tu negocio en tiempo real. Sin depender de hojas de cálculo manuales ni de que alguien te prepare el informe del mes.',
              },
              {
                icon: <Cpu className="icon-xl" />,
                title: 'IA diseñada para tu negocio',
                text: 'No herramientas genéricas que usas a medias. Sistemas entrenados con tu contexto, tu sector y tus procesos. La diferencia entre una IA útil y una que da respuestas de manual.',
              },
            ].map((item, i) => (
              <FadeIn key={i} className="card" delay={i * 0.07}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">¿Es para ti?</span>
            <h2>Quién puede sacarle más partido</h2>
          </div>
          <div className="grid-2">
            {[
              {
                icon: <Bot size={22} />,
                title: 'Empresas que quieren implantar IA sin perderse',
                text: 'Sabes que la IA puede ayudarte pero no sabes por dónde empezar, qué herramientas elegir ni cómo integrarlo en tu operativa real. Eso es exactamente lo que resolvemos.',
              },
              {
                icon: <Clock size={22} />,
                title: 'Emprendedores y freelances con poco tiempo',
                text: 'Si trabajas solo o con un equipo pequeño, la IA puede ser tu mejor empleado: siempre disponible, rápido y sin curva de aprendizaje si está bien configurado.',
              },
              {
                icon: <BarChart2 size={22} />,
                title: 'Negocios que quieren escalar sin escalar el equipo',
                text: 'Automatizar lo repetitivo, sistematizar procesos y liberar tiempo del equipo para lo que realmente genera valor. El crecimiento no siempre requiere más personas, sino mejores sistemas.',
              },
              {
                icon: <TrendingUp size={22} />,
                title: 'Marcas que ya usan IA pero de forma genérica',
                text: 'Usas ChatGPT para cosas sueltas pero no tienes un sistema. Te ayudo a pasar de usar la IA de forma improvisada a integrarla como una palanca real en tu negocio.',
              },
            ].map((item, i) => (
              <FadeIn key={i} className="card" delay={i * 0.07}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section-inner">
          <span className="section-eyebrow">Siguiente paso</span>
          <h2>¿Cuánto tiempo estás perdiendo en cosas que la IA podría hacer por ti?</h2>
          <p>En 30 minutos analizamos tus procesos, identificamos dónde tiene más impacto implantar IA y te digo exactamente qué hay que hacer primero.</p>
          <CalendlyButton className="btn btn-primary btn-lg">
            Quiero mi diagnóstico de IA <ArrowRight className="icon-lg" />
          </CalendlyButton>
          <p className="cta-disclaimer">100% gratuito · Sin compromiso · Respuesta en menos de 24h</p>
        </div>
      </section>
    </>
  );
}
