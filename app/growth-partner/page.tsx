import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart2, TrendingUp, Zap, X, Check, Users, Target, RefreshCw } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: '¿Qué es un Growth Partner? | Carlos Ramil',
  description: 'Un growth partner es un socio de crecimiento que entra hasta la cocina de tu negocio, se moja con tus números y vive obsesionado con hacerlos crecer de forma rentable.',
};

export default function GrowthPartner() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-eyebrow">Growth Partner</span>
          <h1>¿Qué es un<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Growth Partner?</em></h1>
          <p>Un growth partner es mucho más que un consultor: es un socio de crecimiento que entra hasta la cocina de tu negocio, se moja con tus números y vive —como tú— obsesionado con hacerlos crecer de forma rentable.</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CalendlyButton className="btn btn-primary btn-lg">Diagnóstico Gratuito <ArrowRight className="icon-lg" /></CalendlyButton>
            <Link href="/servicios" className="btn btn-secondary">Ver servicios</Link>
          </div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="section">
        <div className="container">
          <div className="gp-content-grid">
            <div className="gp-main">
              <FadeIn>
                <span className="section-eyebrow">Definición real</span>
                <h2>Qué es realmente un growth partner</h2>
                <p>Un growth partner es un profesional que se implica como socio estratégico para diseñar, ejecutar y optimizar un sistema de crecimiento continuo, no solo para "hacer campañas". A diferencia del consultor clásico que entrega un PowerPoint y se va, el growth partner trabaja contigo en el día a día, toma decisiones basadas en datos y se responsabiliza de KPIs muy concretos: facturación, margen, recurrencia, LTV, ROAS, MRR, retención, etc.</p>
                <p style={{ marginTop: 16 }}>En la práctica, mezcla estrategia de negocio, marketing digital, producto, operaciones y analítica, conectando puntos que normalmente en una empresa están dispersos entre varios departamentos o proveedores. Su foco no es "hacer más ruido", sino encontrar las pocas palancas que cambian de verdad la curva de crecimiento.</p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="gp-kpi-row">
                  {['Facturación', 'Margen', 'LTV', 'ROAS', 'MRR', 'Retención', 'Recurrencia'].map(kpi => (
                    <span key={kpi} className="gp-kpi">{kpi}</span>
                  ))}
                </div>
              </FadeIn>
            </div>
            <aside className="gp-aside">
              <FadeIn delay={0.15} className="highlight-box">
                <h4>En una frase</h4>
                <p>No te hablo de crecer en abstracto. Me implico en tus números, diseño el sistema y me responsabilizo de los resultados contigo.</p>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* QUÉ NO ES */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Aclarando conceptos</span>
            <h2>Qué <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>NO</em> es un growth partner</h2>
          </div>
          <div className="grid-2">
            <FadeIn className="gp-no-card">
              <div className="gp-no-icon"><X size={20} /></div>
              <div>
                <h4>No es una agencia</h4>
                <p>Una agencia suele estar orientada a entregables (anuncios, creatividades, emails). Un growth partner está orientado a resultados de negocio y a construir un sistema escalable alrededor de ellos. No subcontrata "X campañas al mes" ni entra a apagar un fuego puntual.</p>
              </div>
            </FadeIn>
            <FadeIn className="gp-no-card" delay={0.07}>
              <div className="gp-no-icon"><X size={20} /></div>
              <div>
                <h4>No es solo un growth marketer</h4>
                <p>El crecimiento no va solo de anuncios. Va de propuesta de valor, pricing, funnels, experiencia post-venta, fidelización, automatizaciones y decisiones estratégicas que impactan caja, no solo clics. Por eso su posición está mucho más cerca de la dirección —fundador, CEO, CMO— que de un rol puramente operativo.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* QUIÉN LO NECESITA */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">¿Es para ti?</span>
            <h2>Quién necesita un growth partner</h2>
            <p>Hay ciertos perfiles y momentos en los que un growth partner pasa de ser "interesante" a ser casi obligatorio si quieres dejar de jugar en pequeño.</p>
          </div>
          <div className="grid-2">
            {[
              {
                icon: <TrendingUp size={22} />,
                title: 'Fundadores de ecommerce con techo',
                text: 'Ya facturan, pero sienten que han tocado techo con sus recursos actuales y repiten siempre las mismas tácticas sin romper la barrera siguiente.',
              },
              {
                icon: <BarChart2 size={22} />,
                title: 'Marcas en marketplaces',
                text: 'Venden en Amazon o similares y saben que están lejos de exprimir su potencial: posicionamiento orgánico, campañas, pricing, catálogo, reviews, logística.',
              },
              {
                icon: <RefreshCw size={22} />,
                title: 'Negocios digitales dependientes',
                text: 'Formación, servicios, membresías, DTC. Dependen demasiado de uno o dos canales de captación y viven en una montaña rusa de ingresos.',
              },
              {
                icon: <Users size={22} />,
                title: 'Directivos saturados de ruido',
                text: 'Tienen equipo, proveedores y herramientas, pero nadie que conecte la foto completa y diga "esto sobra, esto falta y esto hay que hacerlo ya, así y por estos números".',
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

      {/* CÓMO PUEDE AYUDARTE */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="gp-content-grid">
            <div className="gp-main">
              <FadeIn>
                <span className="section-eyebrow">El trabajo real</span>
                <h2>Cómo puede ayudarte un growth partner</h2>
                <p>El trabajo empieza por un diagnóstico brutalmente honesto de tu negocio: embudos, métricas, producto, pricing, operaciones, márgenes, posicionamiento, experiencia de cliente. A partir de ahí, convierte ese caos en un mapa de oportunidades priorizadas: qué atacar primero, qué ignorar, qué optimizar y qué escalar, siempre conectado con objetivos numéricos claros.</p>
                <p style={{ marginTop: 16 }}>Después, diseña y acompaña la ejecución de un sistema de experimentación continua: tests en captación, en landings, en creatividades, en ofertas, en onboarding, en recurrencia… midiendo todo con una analítica seria y tomando decisiones basadas en datos, no en corazonadas. El resultado no es solo "crecer ahora", sino construir una máquina de crecimiento que puedas entender, controlar y seguir haciendo evolucionar.</p>
              </FadeIn>
            </div>
            <aside className="gp-aside">
              <FadeIn delay={0.1} className="highlight-box">
                <h4>El objetivo final</h4>
                <p>No solo crecer ahora. Construir una máquina de crecimiento que puedas entender, controlar y seguir haciendo evolucionar.</p>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* POR QUÉ YO */}
      <section className="section">
        <div className="container">
          <div className="gp-content-grid">
            <div className="gp-main">
              <FadeIn>
                <span className="section-eyebrow">Mi posicionamiento</span>
                <h2>Por qué yo hablo de growth partner (y no solo de consultoría)</h2>
                <p>Trabajo en ecommerce y negocios digitales acompañando a marcas en Amazon, tiendas online y ecosistemas digitales que necesitan algo más que "gestión de campañas" o "un SEO más". Mi obsesión es conectar la parte estratégica —dónde quieres llevar tu negocio y con qué números— con la parte táctica —qué hacemos hoy, esta semana y este mes para acercarnos ahí.</p>
                <p style={{ marginTop: 16 }}>Además, no te hablo de growth partner desde la teoría: yo mismo tengo mi propia growth partner, Sophia, con quien trabajo mi propio crecimiento profesional y de negocio, precisamente porque sé lo fácil que es autoengañarse cuando vas solo. Esa experiencia desde los dos lados de la mesa —como profesional y como cliente de crecimiento— hace que tenga cero paciencia con el humo y mucha tolerancia con la verdad incómoda pero accionable.</p>
              </FadeIn>
            </div>
            <aside className="gp-aside">
              <FadeIn delay={0.1} className="highlight-box">
                <h4>Desde los dos lados</h4>
                <p>Yo mismo tengo mi propia growth partner. Sé lo que se siente en ambos lados de la mesa, y eso cambia cómo trabajo.</p>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* MI ENFOQUE — 3 PRINCIPIOS */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Cómo trabajo</span>
            <h2>Mi enfoque como growth partner</h2>
            <p>Tres principios que aplico siempre, en cualquier negocio.</p>
          </div>
          <div className="grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
            {[
              { icon: <BarChart2 size={24} />, title: 'Datos por encima de opiniones', text: 'Sin medición seria, todo es teatro.' },
              { icon: <TrendingUp size={24} />, title: 'Crecimiento rentable', text: 'No me interesa que tus ventas se disparen si tu margen se hunde.' },
              { icon: <Target size={24} />, title: 'Ejecución sencilla', text: 'Si el plan no se puede explicar en una página y ejecutar en 90 días, no sirve.' },
            ].map((p, i) => (
              <FadeIn key={i} className="card" style={{ textAlign: 'center' }} delay={i * 0.08}>
                <div className="card-icon" style={{ margin: '0 auto 20px' }}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <p style={{ textAlign: 'center', maxWidth: 760, margin: '48px auto 0', fontSize: '1rem' }}>
              Desde ahí, trabajamos sobre tus canales principales (tráfico orgánico, marketplaces, paid media, email, funnels), tu propuesta de valor y tu modelo de monetización, buscando los cuellos de botella que más limitan tu crecimiento y diseñando experimentos concretos para romperlos. No vamos a hacer "más de lo mismo", sino a cuestionar lo que ya haces y a reconstruir lo que haga falta para que tenga sentido con tus objetivos reales.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CÓMO SERÍA TRABAJAR JUNTOS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">El proceso</span>
            <h2>Cómo sería trabajar juntos</h2>
          </div>
          <div className="process-steps">
            {[
              { n: 1, title: 'Diagnóstico sin filtros', text: 'Revisamos negocio, números, canales y procesos para entender dónde estás realmente, no dónde crees que estás.' },
              { n: 2, title: 'Mapa de oportunidades y riesgos', text: 'Identificamos las pocas palancas que pueden cambiar tu curva en los próximos 3–6 meses y los riesgos que hoy estás ignorando.' },
              { n: 3, title: 'Plan de crecimiento a 90 días', text: 'Diseñamos un roadmap claro, accionable y medible: qué hacemos, quién lo hace, con qué recursos y qué métricas vamos a mirar.' },
              { n: 4, title: 'Ejecución acompañada', text: 'No te dejo solo con un PDF: te acompaño en la implementación, tomando decisiones, ajustando el rumbo y priorizando cuando la realidad golpea.' },
              { n: 5, title: 'Revisión, aprendizaje y escalado', text: 'Cerramos ciclos, analizamos qué ha funcionado, qué no y por qué, y a partir de ahí escalamos lo que da dinero y matamos sin piedad lo que no.' },
            ].map((step, i) => (
              <FadeIn key={i} className="process-step" delay={i * 0.07}>
                <div className="process-num">{step.n}</div>
                <div className="process-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="cta-section-inner">
          <span className="section-eyebrow">¿Listo para avanzar?</span>
          <h2>¿Tu negocio tiene más potencial del que muestran tus números?</h2>
          <p>Si estás dispuesto a que alguien entre hasta el fondo para ayudarte a desbloquearlo —y también a decirte lo que no quieres oír— entonces probablemente ha llegado el momento de tener tu propio growth partner.</p>
          <CalendlyButton className="btn btn-primary btn-lg">
            Reservar diagnóstico gratuito <ArrowRight className="icon-lg" />
          </CalendlyButton>
          <p className="cta-disclaimer">100% gratuito · Sin compromiso · Respuesta en menos de 24h</p>
        </div>
      </section>
    </>
  );
}
