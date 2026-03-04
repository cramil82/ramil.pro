import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Package, ShoppingBag, Bot, ArrowRight, Zap,
  TrendingDown, Banknote, ShoppingCart, Compass, RefreshCw, BarChart2,
  Rocket, User, Check
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import FaqAccordion from '@/components/FaqAccordion';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Carlos Ramil — Consultor eCommerce · Amazon · Shopify · ramil.pro',
  description: 'Consultor especializado en Amazon, Shopify y eCommerce. Estrategia real, datos y resultados medibles. Reserva tu diagnóstico gratuito.',
};

const faqItems = [
  { question: '¿Necesito tener ya un negocio montado para trabajar contigo?', answer: 'No. Trabajo tanto con personas que quieren lanzarse desde cero como con sellers y tiendas que ya existen y quieren escalar. Cada punto de partida tiene su estrategia.' },
  { question: '¿Cuánto tiempo tarda en verse resultados?', answer: 'Depende de la palanca que accionemos. En Amazon SEO, los primeros resultados son visibles en 2–4 semanas. En PPC, en días. La llamada de diagnóstico sirve para establecer expectativas realistas según tu caso concreto.' },
  { question: '¿Haces tú el trabajo o me enseñas a hacerlo yo?', answer: 'Ambas cosas, según lo que necesites. Puedo hacer consultoría donde yo ejecuto la estrategia, o mentoría donde te enseño a implementarla tú. Lo decidimos en la llamada inicial.' },
  { question: '¿Trabajas con Amazon fuera de España?', answer: 'Sí. Tengo experiencia gestionando cuentas en toda Europa (DE, FR, IT, UK) y en EEUU. Si ya vendes en España y quieres expandirte, es uno de los movimientos con mayor ROI que puedes hacer.' },
  { question: '¿Cómo reservo la llamada de diagnóstico gratuita?', answer: 'Haz clic en el botón de abajo, rellena el formulario breve con tu situación actual y elige el hueco que mejor te venga. Te confirmo en menos de 24 horas.' },
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
              Consultor de eCommerce · España, Europa &amp; EEUU
            </div>
            <h1 className="hero-title">
              Deja de sobrevivir<br />
              en Amazon y Shopify.<br />
              <em>Empieza a dominarlos.</em>
            </h1>
            <p className="hero-subtitle">
              Soy Carlos Ramil. He gestionado cuentas de Amazon en España, Europa y EEUU. He escalado tiendas Shopify desde cero. No te vendo humo: te doy estrategia, datos y un plan que puedes ejecutar mañana.
            </p>
            <div className="hero-actions">
              <CalendlyButton className="btn btn-primary btn-lg">
                Diagnóstico Gratuito <ArrowRight className="icon-lg" />
              </CalendlyButton>
              <Link href="/servicios" className="btn btn-secondary btn-lg">Ver servicios</Link>
            </div>
            <div className="hero-stats">
              <div><span className="hero-stat-num">ES · EU · US</span><span className="hero-stat-label">Mercados Amazon</span></div>
              <div><span className="hero-stat-num">3</span><span className="hero-stat-label">Áreas de expertise</span></div>
              <div><span className="hero-stat-num">15 min</span><span className="hero-stat-label">Diagnóstico gratuito</span></div>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/FOTO_PORTADA.jpg" alt="Carlos Ramil — Consultor eCommerce" width={520} height={600} priority />
            <div className="hero-image-badge">
              <span className="hero-image-badge-icon"><Zap className="icon-lg" /></span>
              <div className="hero-image-badge-text">
                <strong>Resultados desde el día 1</strong>
                Estrategia real, no teoría
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOLOR */}
      <section className="section pain-section">
        <div className="container">
          <div className="pain-grid">
            <div>
              <span className="section-eyebrow">¿Te suena esto?</span>
              <h2>Seguramente ya lo has<br />intentado todo.</h2>
              <p style={{ marginTop: 16 }}>Has leído artículos, visto vídeos de YouTube, hecho algún curso… Y aun así, el negocio no despega. El problema no eres tú. El problema es que nadie te ha dado una estrategia real adaptada a tu negocio.</p>
              <CalendlyButton className="btn btn-primary" style={{ marginTop: 32 }}>
                Hablemos <ArrowRight size={16} />
              </CalendlyButton>
            </div>
            <div className="pain-list">
              {[
                { icon: <TrendingDown size={20} />, text: 'Tu listing en Amazon tiene pocas visitas y peor conversión' },
                { icon: <Banknote size={20} />, text: 'Inviertes en PPC y el dinero desaparece sin resultados claros' },
                { icon: <ShoppingCart size={20} />, text: 'Tu tienda Shopify tiene tráfico pero nadie compra' },
                { icon: <Compass size={20} />, text: 'No sabes por dónde empezar a vender online y el miedo te paraliza' },
                { icon: <RefreshCw size={20} />, text: 'Llevas meses dando vueltas sin avanzar de verdad' },
                { icon: <BarChart2 size={20} />, text: 'Tu ACoS está por las nubes y no sabes cómo bajarlo' },
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

      {/* QUIÉN SOY */}
      <section className="section" id="sobre-mi">
        <div className="container">
          <div className="about-inner">
            <div className="about-image">
              <Image src="/FOTO_PORTADA.jpg" alt="Carlos Ramil" width={400} height={480} />
              <div className="about-tags">
                <span className="tag">Amazon SEO</span>
                <span className="tag">Shopify</span>
                <span className="tag">PPC</span>
                <span className="tag">IA</span>
              </div>
            </div>
            <div className="about-content">
              <span className="section-eyebrow">Quién soy</span>
              <h2>No soy otro consultor<br />de PowerPoints.</h2>
              <p style={{ marginTop: 20 }}>Soy Carlos Ramil. He trabajado en las trincheras del ecommerce, no desde un despacho con teorías bonitas, sino optimizando listings reales, gestionando presupuestos de PPC reales y resolviendo problemas reales de sellers y tiendas online en España, Europa y EEUU.</p>
              <p style={{ marginTop: 16 }}>Mi enfoque: analizo lo que tienes, identifico dónde se pierde el dinero o el potencial, y te doy un plan para arreglarlo con métricas reales y pasos accionables desde el día uno.</p>
              <div className="skills">
                {['Amazon SEO','Amazon PPC','Shopify SEO','CRO & Conversión','Shopify Markets','IA aplicada','Miravia','Marca personal'].map(s => (
                  <span key={s} className="skill">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Para quién es esto</span>
            <h2>Trabajo contigo si eres…</h2>
            <p>Cada perfil tiene sus retos específicos. Aquí es donde entro yo.</p>
          </div>
          <div className="grid-2">
            {[
              { icon: <Package className="icon-xl" />, title: 'Seller de Amazon', text: 'Tus ventas están estancadas, tu ACoS está por las nubes o quieres escalar sin perder el control. Te ayudo a optimizar listings, afinar tus campañas PPC y posicionarte mejor que tu competencia.' },
              { icon: <ShoppingBag className="icon-xl" />, title: 'Dueño de tienda Shopify', text: 'Tienes tráfico o estás invirtiendo para conseguirlo, pero las conversiones no llegan. Algo falla en la tienda, el copy, el SEO o los anuncios. Lo encontramos juntos y lo arreglamos.' },
              { icon: <Rocket className="icon-xl" />, title: 'Emprendedor online', text: 'Quieres montar un negocio en Amazon o crear tu propia tienda pero no sabes por dónde empezar. Te ahorro meses de errores costosos con una hoja de ruta clara desde el día uno.' },
              { icon: <User className="icon-xl" />, title: 'Profesional con marca personal', text: 'Quieres posicionarte como referente en tu sector en LinkedIn o Instagram y que eso genere oportunidades reales de negocio, no solo likes.', neutral: true },
            ].map((item, i) => (
              <FadeIn key={i} className="card" delay={i * 0.07}>
                <div className={`card-icon${item.neutral ? ' neutral' : ''}`}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS OVERVIEW */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Servicios</span>
            <h2>Elige tu área de trabajo</h2>
            <p>Me centro en la consultoría estratégica en tres áreas clave. Sin plantillas genéricas: cada plan está adaptado a tu negocio.</p>
          </div>
          <div className="grid-3">
            <FadeIn delay={0}>
              <Link href="/servicios/amazon" className="card service-card">
                <ArrowRight className="card-arrow" />
                <span className="badge">Marketplace</span>
                <div className="card-icon"><Package className="icon-xl" /></div>
                <h3>Amazon</h3>
                <p>SEO de listings, PPC y publicidad, auditorías, A+ Content, expansión europea. Estrategia de seller completa.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.07}>
              <Link href="/servicios/shopify" className="card service-card">
                <ArrowRight className="card-arrow" />
                <span className="badge">eCommerce</span>
                <div className="card-icon"><ShoppingBag className="icon-xl" /></div>
                <h3>Shopify</h3>
                <p>SEO orgánico, optimización de conversión, funcionalidades técnicas, tracking y email marketing.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.14}>
              <Link href="/servicios/aplicaciones" className="card service-card">
                <ArrowRight className="card-arrow" />
                <span className="badge">Tech &amp; IA</span>
                <div className="card-icon neutral"><Bot className="icon-xl" /></div>
                <h3>Aplicaciones &amp; IA</h3>
                <p>Webs a medida, landing pages de venta, chatbots, GPTs personalizados e integración de IA en tu negocio.</p>
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
              { n: 1, title: 'Reserva tu llamada de diagnóstico gratuita', text: '30 minutos donde analizamos tu situación actual, identificamos los cuellos de botella y vemos si podemos trabajar juntos. Sin rodeos. Con valor real desde el minuto uno.' },
              { n: 2, title: 'Diseño tu estrategia personalizada', text: 'No hay plantillas genéricas aquí. Cada negocio es diferente. Creo un plan específico para tu situación, tus objetivos y tu presupuesto.' },
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
          <h2>Listo para dejar de improvisar.</h2>
          <p>Reserva tu llamada ahora. Es gratuita. Son 30 minutos. No te prometo milagros: te prometo estrategia real, feedback directo y un plan que puedes ejecutar desde mañana. Sin rodeos. Sin relleno.</p>
          <CalendlyButton className="btn btn-primary btn-lg">
            Quiero mi Diagnóstico Gratuito <ArrowRight className="icon-lg" />
          </CalendlyButton>
          <p className="cta-disclaimer">Plazas limitadas. Solo para personas comprometidas con su negocio online.</p>
        </div>
      </section>
    </>
  );
}
