import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Package, ShoppingBag, Bot, ArrowRight, Zap,
  TrendingDown, ShoppingCart, Compass, RefreshCw, BarChart2,
  Rocket, TrendingUp, Users, Globe,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import FaqAccordion from '@/components/FaqAccordion';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Carlos Ramil | Growth Partner Online',
  description: 'Ayudo a marcas a crecer y aumentar ventas a nivel online: Canal directo, Tiendas Shopify, cuentas de Amazon y marketplaces. Estrategia real, resultados medibles. Diagnóstico gratuito en 30 min.',
};

const faqItems = [
  { question: '¿En qué se diferencia un Growth Partner de un consultor?', answer: 'Un consultor te da recomendaciones. Yo me implico en la ejecución y me mido por resultados de negocio, no por horas facturadas. Trabajo contigo como si fuera socio tuyo — con visión de todos los canales al mismo tiempo.' },
  { question: '¿Necesito tener ya todos los canales activos para trabajar contigo?', answer: 'No. Trabajo con marcas en distintos momentos: desde las que quieren lanzar su primer canal hasta las que ya tienen Amazon, Shopify y marketplaces funcionando pero sin estrategia común.' },
  { question: '¿Cuánto tiempo tarda en verse resultados?', answer: 'Depende de la palanca que accionemos. En Amazon SEO los primeros resultados son visibles en 2–4 semanas. En PPC, en días. La llamada de diagnóstico sirve para establecer expectativas realistas según tu caso.' },
  { question: '¿Trabajas con marcas fuera de España?', answer: 'Sí. Tengo experiencia gestionando canales en toda Europa (DE, FR, IT, UK) y en EEUU. Si ya vendes en España y quieres expandirte, es uno de los movimientos con mayor ROI que puedes hacer.' },
  { question: '¿Cómo funciona el diagnóstico gratuito?', answer: 'Son 30 minutos donde analizamos tu situación actual, identificamos los cuellos de botella y vemos si tiene sentido trabajar juntos. Sin rodeos. Con valor real desde el minuto uno.' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Growth Partner online para la mejora de tu proyecto
            </div>
            <h1 className="hero-title">
              Tus ventas online<br />
              no están donde<br />
              <em>podrían estar.</em>
            </h1>
            <p className="hero-subtitle">
              Cada mes sin la estrategia correcta es dinero que se queda en el bolsillo de tu competencia. Trabajo contigo para identificar exactamente qué está fallando y ejecutar el plan para arreglarlo.
            </p>
            <div className="hero-actions">
              <CalendlyButton className="btn btn-primary btn-lg">
                Diagnóstico Gratuito <ArrowRight className="icon-lg" />
              </CalendlyButton>
              <Link href="/servicios" className="btn btn-secondary btn-lg">Ver servicios</Link>
            </div>
            <div className="hero-trust">
              <Zap size={14} />
              Resultados desde el primer mes · Estrategia real, no teoría
            </div>
          </div>
          <div className="hero-image">
            <Image src="/CARLOS-PORTADA.png" alt="Carlos Ramil — Growth Partner Online" width={520} height={600} priority />
            <div className="hero-image-badge">
              <span className="hero-image-badge-icon"><Zap className="icon-lg" /></span>
              <div className="hero-image-badge-text">
                <strong>Resultados desde el primer mes</strong>
                Estrategia real, no teoría
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="section-sm metrics-section">
        <div className="container">
          <div className="metrics-grid">
            {[
              { num: '×3,4', label: 'Crecimiento en Amazon', desc: 'De 500K a 1,7M€ en canal de una marca líder nacional' },
              { num: '×3,25', label: 'Canal Shopify propio', desc: 'Sin invertir un euro en publicidad de pago' },
              { num: '×5', label: 'Marketplace emergente', desc: 'Lanzado y escalado desde prácticamente cero' },
              { num: '#1 EU', label: 'Proveedor en Groupon', desc: 'Mayor proveedor europeo — negocio propio construido desde cero' },
            ].map((m, i) => (
              <FadeIn key={i} className="metric-card" delay={i * 0.07}>
                <span className="metric-num">{m.num}</span>
                <span className="metric-label">{m.label}</span>
                <span className="metric-desc">{m.desc}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DOLOR */}
      <section className="section pain-section">
        <div className="container">
          <div className="pain-grid">
            <div>
              <span className="section-eyebrow">¿Te suena esto?</span>
              <h2>Seguramente ya lo has<br />intentado resolver solo.</h2>
              <p style={{ marginTop: 16, marginBottom: 32 }}>No es falta de trabajo ni de ganas. Es que falta visión de conjunto y un plan que tenga en cuenta todos los canales al mismo tiempo. Para eso trabajo yo.</p>
              <CalendlyButton className="btn btn-primary">
                Hablemos <ArrowRight size={16} />
              </CalendlyButton>
            </div>
            <div className="pain-list">
              {[
                { icon: <BarChart2 size={20} />, text: 'Tus canales venden, pero cada uno va por su cuenta. No hay estrategia común y sientes que se están "comiendo" entre ellos.' },
                { icon: <TrendingDown size={20} />, text: 'Tu Amazon tiene tráfico pero el ACoS no baja. Pagas más en PPC cada mes y el margen se encoge.' },
                { icon: <ShoppingCart size={20} />, text: 'Tu tienda en Shopify convierte poco. No sabes si es el tráfico, el diseño o el precio — y no tienes tiempo para averiguarlo.' },
                { icon: <Compass size={20} />, text: 'No tienes claro si escalar más en Amazon, abrir nuevos marketplaces o apostar fuerte por el canal directo. Las tres opciones cuestan dinero y tiempo.' },
                { icon: <RefreshCw size={20} />, text: 'Llevas meses dando vueltas a lo mismo. Las cosas mejoran un poco, pero nunca dan el salto que esperas.' },
                { icon: <Globe size={20} />, text: 'Tienes una web de negocio o servicios que no genera leads. Tienes visitas pero nadie contacta, y no sabes si el problema es el copy, el SEO o la estructura.' },
              ].map((item, i) => (
                <FadeIn key={i} className="pain-item" delay={i * 0.07}>
                  <span className="pain-icon">{item.icon}</span>
                  <span className="pain-text">{item.text}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MI HISTORIA */}
      <section className="section" id="sobre-mi">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Quién soy</span>
            <h2>He estado donde tú estás.<br /><em>Y también donde quieres llegar.</em></h2>
          </div>
          <div className="history-chapters">
            {[
              {
                icon: <Rocket className="icon-xl" />,
                chapter: 'Capítulo 1',
                title: 'El emprendedor',
                text: 'Empecé construyendo mi propio negocio desde cero. Sin inversión externa. Sin manual de instrucciones. Aprendí a vender online cuando nadie hablaba todavía de eCommerce en España. Trabajé con Groupon, Letsbonus, Groupalia y decenas de plataformas más, llegamos a ser el mayor proveedor europeo en Groupon. Construí el negocio canal por canal, cometí los errores que cuestan dinero de verdad, y aprendí lo que se rompe cuando creces demasiado rápido sin los cimientos correctos. Esa experiencia vale más que cualquier certificación.',
              },
              {
                icon: <TrendingUp className="icon-xl" />,
                chapter: 'Capítulo 2',
                title: 'El gestor de marca',
                text: 'Luego vine a trabajar desde dentro de una marca líder nacional. En un año y medio, tripliqué la cuenta de Amazon — de 500.000€ a 1.700.000€. Multipliqué por más de tres el canal Shopify sin invertir un euro en publicidad de pago. Y pusimos en marcha el canal de Miravia, que pasó de casi nada a cinco veces su tamaño inicial. Cada canal con su estrategia propia, pero todos empujando en la misma dirección: hacer crecer el negocio.',
              },
              {
                icon: <Users className="icon-xl" />,
                chapter: 'Capítulo 3',
                title: 'El Growth Partner',
                text: 'Ahora trabajo de forma independiente. No vengo a gestionar una herramienta ni a venderte horas de consultoría. Vengo a entender tu negocio, a identificar dónde está el dinero que no estás captando, y a construir contigo el plan concreto para ir a por él. Como si fuera socio tuyo — pero sin tener que contratarme a jornada completa.',
              },
            ].map((ch, i) => (
              <FadeIn key={i} className="history-chapter" delay={i * 0.1}>
                <div className="history-chapter-icon">{ch.icon}</div>
                <div className="history-chapter-content">
                  <span className="history-chapter-label">{ch.chapter}</span>
                  <h3>{ch.title}</h3>
                  <p>{ch.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CASO DE ÉXITO */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Caso de éxito</span>
            <h2>Como tripliqué las ventas de una<br />marca líder de audio en España</h2>
            <p>Una marca consolidada con canales online funcionando de forma aislada. Sin estrategia común, el margen se estaba viendo presionado por un PPC sin control de rentabilidad.</p>
          </div>
          <div className="case-results">
            {[
              { channel: 'Amazon', from: '500.000 €/año', to: '1.700.000 €/año', pct: '+240%', note: 'SEO + PPC + estrategia de canal' },
              { channel: 'Shopify (canal directo)', from: '20.000 €/año', to: '65.000 €/año', pct: '+225%', note: 'Sin publicidad de pago' },
              { channel: 'Miravia (marketplace)', from: '5.000 €/año', to: '25.000 €/año', pct: '+400%', note: 'Lanzamiento y escala desde cero' },
            ].map((r, i) => (
              <FadeIn key={i} className="case-card" delay={i * 0.1}>
                <span className="case-channel">{r.channel}</span>
                <span className="case-from">{r.from}</span>
                <ArrowRight size={16} className="case-arrow" />
                <span className="case-to">{r.to}</span>
                <span className="case-pct">{r.pct}</span>
                <span className="case-note">{r.note}</span>
              </FadeIn>
            ))}
          </div>
          <p className="case-footer">El resultado más relevante no son los números individuales: es que los tres canales crecieron de forma coordinada, sin canibalizarse entre sí y con márgenes protegidos.</p>
        </div>
      </section>

      {/* SERVICIOS OVERVIEW */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Servicios</span>
            <h2>Todos los canales. Una sola estrategia.</h2>
            <p>Trabajo los canales por separado para optimizarlos, pero siempre con visión de conjunto. Cada canal debe empujar en la misma dirección.</p>
          </div>
          <div className="grid-2">
            <FadeIn delay={0}>
              <Link href="/servicios/amazon" className="card service-card">
                <ArrowRight className="card-arrow" />
                <span className="badge">Marketplace</span>
                <div className="card-icon"><Package className="icon-xl" /></div>
                <h3>Amazon</h3>
                <p>SEO de listings, PPC y publicidad, auditorías, A+ Content, expansión europea. Estrategia de canal completa.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.07}>
              <Link href="/servicios/shopify" className="card service-card">
                <ArrowRight className="card-arrow" />
                <span className="badge">Canal directo</span>
                <div className="card-icon"><ShoppingBag className="icon-xl" /></div>
                <h3>Shopify</h3>
                <p>SEO orgánico, optimización de conversión, arquitectura de contenidos, tracking y email marketing.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.14}>
              <Link href="/servicios/aplicaciones" className="card service-card">
                <ArrowRight className="card-arrow" />
                <span className="badge">Tech &amp; IA</span>
                <div className="card-icon neutral"><Bot className="icon-xl" /></div>
                <h3>Aplicaciones &amp; IA</h3>
                <p>Webs a medida, chatbots, GPTs personalizados e integración de IA en procesos de negocio.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.21}>
              <Link href="/servicios/webs-negocios" className="card service-card">
                <ArrowRight className="card-arrow" />
                <span className="badge">Negocio &amp; Servicios</span>
                <div className="card-icon"><Globe className="icon-xl" /></div>
                <h3>Web &amp; Ventas Online</h3>
                <p>SEO, copy y arquitectura para webs de negocio o servicios que necesitan generar más leads y clientes de forma constante.</p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Cómo funciona</span>
            <h2>El proceso es directo.</h2>
            <p>Sin burocracia, sin semanas de onboarding. Resultados reales desde el primer contacto.</p>
          </div>
          <div className="process-steps">
            {[
              { n: 1, title: 'Diagnóstico gratuito en 30 minutos', text: 'Analizamos tu situación actual, identificamos los cuellos de botella y vemos si tiene sentido trabajar juntos. Sin rodeos. Con valor real desde el minuto uno.' },
              { n: 2, title: 'Plan de crecimiento personalizado', text: 'No hay plantillas genéricas. Cada negocio es diferente. Creo un plan específico para tu situación, tus canales y tus objetivos.' },
              { n: 3, title: 'Ejecutamos y medimos', text: 'Implementamos la estrategia con seguimiento real de métricas. Ajustamos, iteramos y escalamos lo que funciona.' },
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

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">FAQ</span>
            <h2>Las dudas más comunes.</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="cta-section-inner">
          <span className="section-eyebrow">¿Listo para avanzar?</span>
          <h2>¿Tu negocio online te está dando los resultados que deseas?</h2>
          <p>En 30 minutos te digo si puedo ayudarte — y si no puedo, también. Sin compromiso, sin pitch de ventas.</p>
          <CalendlyButton className="btn btn-primary btn-lg">
            Reservar diagnóstico gratuito <ArrowRight className="icon-lg" />
          </CalendlyButton>
          <p className="cta-disclaimer">100% gratuito · Sin compromiso · Respuesta en menos de 24h</p>
        </div>
      </section>
    </>
  );
}
