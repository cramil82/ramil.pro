import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Users, Rocket, Target, BarChart2, TrendingUp, Zap, Clock, MessageSquare, BookOpen, ChevronRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import CalendlyButton from '@/components/CalendlyButton';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Mentorías 1:1 con un Growth Partner | Carlos Ramil',
  description: 'Accede a mi cabeza de Growth Partner sin necesitar aún un socio a tiempo completo. Sesiones estratégicas para ordenar tu negocio, detectar quick wins y salir con un plan accionable.',
};

const faqItems = [
  {
    question: '¿En qué se diferencia una mentoría de trabajar contigo como Growth Partner?',
    answer: 'En la mentoría te guío: analizamos juntos, yo te doy perspectiva y un plan, tú ejecutas. En el rol de Growth Partner me implico en la ejecución contigo — diseñamos y hacemos juntos, con seguimiento de KPIs y presencia constante en tu negocio. La mentoría es una relación de alta intensidad pero por sesiones; el Growth Partner es una relación continua con compromiso de resultados.',
  },
  {
    question: '¿Puedo pasar de mentoría a Growth Partner después?',
    answer: 'Sí, y de hecho es el camino natural para muchos. La mentoría es la forma más directa de comprobar cómo pienso, qué me preocupa de un negocio y si nuestra forma de trabajar encaja. Los que más han avanzado conmigo han empezado por aquí.',
  },
  {
    question: '¿Qué tipo de negocio encaja mejor con las mentorías?',
    answer: 'Negocios digitales en funcionamiento: ecommerce, Amazon, Shopify, servicios online, infoproductos, agencias. Si aún estás en fase de idea, probablemente no es el momento. Si ya tienes tracción y necesitas claridad sobre qué hacer a continuación, sí.',
  },
  {
    question: '¿Cada cuánto son las sesiones?',
    answer: 'La cadencia más habitual es semanal — una hora, mismo día y hora cada semana. Esa constancia es lo que genera momentum real. También hay formato quincenal para quienes necesitan más tiempo entre sesiones para ejecutar.',
  },
  {
    question: '¿Qué pasa si en la primera sesión ves que no puedo ayudarte?',
    answer: 'Te lo digo directamente. No me interesa mantener una relación que no genere valor para ti. La honestidad no es opcional en este tipo de trabajo.',
  },
];

export default function Mentorias() {
  return (
    <>
      <style>{`
        .mentoria-levels { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .mentoria-level { border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; background: var(--bg-card); position: relative; transition: box-shadow 0.2s; }
        .mentoria-level.featured { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
        .mentoria-level-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: var(--accent); color: #fff; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; padding: 4px 14px; border-radius: 99px; white-space: nowrap; }
        .mentoria-level-num { font-size: 0.75rem; font-weight: 700; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px; }
        .mentoria-level h3 { font-size: 1.15rem; margin-bottom: 12px; }
        .mentoria-level p { font-size: 0.875rem; color: var(--text-2); line-height: 1.6; }
        .mentoria-level-items { margin-top: 20px; display: flex; flex-direction: column; gap: 8px; }
        .mentoria-level-item { display: flex; align-items: flex-start; gap: 8px; font-size: 0.82rem; color: var(--text-2); }
        .mentoria-level-item svg { flex-shrink: 0; margin-top: 2px; color: var(--accent); }
        .mentoria-arrow { display: flex; align-items: center; justify-content: center; gap: 0; margin-top: 32px; }
        .mentoria-arrow-step { display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .mentoria-arrow-label { font-size: 0.75rem; color: var(--text-3); font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
        .mentoria-arrow-icon { color: var(--text-3); }
        .compare-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
        .compare-table th { padding: 14px 20px; text-align: left; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-3); border-bottom: 2px solid var(--border); }
        .compare-table th:not(:first-child) { text-align: center; }
        .compare-table td { padding: 14px 20px; border-bottom: 1px solid var(--border); color: var(--text-2); vertical-align: middle; }
        .compare-table td:not(:first-child) { text-align: center; font-weight: 600; color: var(--text-1); }
        .compare-table tr:last-child td { border-bottom: none; }
        .compare-table thead th:nth-child(2) { color: var(--accent); }
        .session-detail { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        @media (max-width: 860px) {
          .mentoria-levels { grid-template-columns: 1fr; }
          .session-detail { grid-template-columns: 1fr; }
          .compare-table { font-size: 0.8rem; }
          .compare-table th, .compare-table td { padding: 10px 12px; }
        }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="section-eyebrow">Mentorías 1:1</span>
          <h1>Accede a mi cabeza<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>de Growth Partner.</em></h1>
          <p>Sin que me meta aún en la operación de tu negocio día a día. Si necesitas claridad, foco y un plan accionable para los próximos 90 días, empezamos por aquí.</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CalendlyButton className="btn btn-primary btn-lg">Reservar sesión <ArrowRight className="icon-lg" /></CalendlyButton>
            <Link href="/growth-partner" className="btn btn-secondary">Qué es un Growth Partner</Link>
          </div>
        </div>
      </section>

      {/* LAS TRES FORMAS DE TRABAJAR */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Cómo podemos trabajar juntos</span>
            <h2>Un mismo cerebro de Growth Partner.<br />Tres niveles de implicación.</h2>
            <p>No todos los negocios necesitan lo mismo. Hay un punto de entrada para cada momento.</p>
          </div>
          <div className="mentoria-levels">
            <FadeIn>
              <div className="mentoria-level featured">
                <div className="mentoria-level-badge">Empieza aquí</div>
                <div className="mentoria-level-num">Nivel 1</div>
                <h3>Mentoría estratégica 1:1</h3>
                <p>Sesiones semanales donde analizamos tu negocio, ordenamos prioridades y construimos un plan accionable. Yo pienso contigo, tú ejecutas.</p>
                <div className="mentoria-level-items">
                  {['Sesiones 1:1 por videollamada (60–90 min)', 'Grabación + resumen con foco y próximos pasos', 'Cadencia semanal o quincenal', 'Ideal para emprendedores que necesitan dirección'].map(i => (
                    <div key={i} className="mentoria-level-item"><Check size={13} />{i}</div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="mentoria-level">
                <div className="mentoria-level-num">Nivel 2</div>
                <h3>Sprint de acompañamiento</h3>
                <p>Períodos de 4–8 semanas con mayor implicación: además de sesiones, reviso ejecuciones, doy feedback sobre lo que estás implementando y co-diseñamos acciones concretas.</p>
                <div className="mentoria-level-items">
                  {['Sesiones semanales + revisión de entregas', 'Feedback directo sobre lo que ejecutas', 'Foco en un objetivo concreto (Amazon, Shopify, funnel…)', 'Ideal para lanzamientos o cambios de estrategia'].map(i => (
                    <div key={i} className="mentoria-level-item"><Check size={13} />{i}</div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="mentoria-level">
                <div className="mentoria-level-num">Nivel 3</div>
                <h3>Growth Partner ongoing</h3>
                <p>Implicación profunda y continua. Me meto hasta la cocina de tu negocio: diseñamos y ejecutamos juntos, con KPIs claros, reuniones periódicas y responsabilidad compartida en los resultados.</p>
                <div className="mentoria-level-items">
                  {['Relación continua y estratégica', 'Ejecución conjunta en todos los canales', 'KPIs y métricas de negocio compartidas', 'Para marcas que ya facturan y quieren escalar en serio'].map(i => (
                    <div key={i} className="mentoria-level-item"><Check size={13} />{i}</div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="mentoria-arrow">
              {['Mentoría', '', 'Sprint', '', 'Growth Partner'].map((label, i) => (
                label === '' ? (
                  <ChevronRight key={i} size={20} className="mentoria-arrow-icon" style={{ margin: '0 12px' }} />
                ) : (
                  <div key={i} className="mentoria-arrow-step">
                    <div className="mentoria-arrow-label">{label}</div>
                  </div>
                )
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-3)', marginTop: 12 }}>
              Muchos empiezan por la mentoría y, cuando hay encaje, evolucionan hacia un modelo más profundo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* POR QUÉ NECESITAS UN MENTOR */}
      <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">¿Es para ti?</span>
            <h2>Por qué alguien necesita<br />un mentor de negocio.</h2>
            <p>No es falta de capacidad. Es falta de perspectiva externa, de alguien que haya estado antes donde tú estás y que no tenga miedo a decirte lo que no quieres oír.</p>
          </div>
          <div className="grid-2">
            {[
              { icon: <Target size={22} />, title: 'Tienes movimiento pero no dirección', text: 'Trabajas muchísimo, hay cosas que avanzan, pero al final del mes no tienes claro si te estás acercando a donde quieres llegar. Un mentor te ayuda a separar lo urgente de lo importante y a construir un horizonte claro.' },
              { icon: <BarChart2 size={22} />, title: 'Tomas decisiones sin datos suficientes', text: 'No por falta de información, sino porque nadie te ha enseñado qué métricas mirar, cuándo una cifra es buena y cuándo es una señal de alarma que estás ignorando.' },
              { icon: <Users size={22} />, title: 'Estás solo ante problemas que ya han tenido solución', text: 'Los errores que estás a punto de cometer, alguien ya los ha cometido antes. Un mentor no te evita el trabajo duro, pero sí te ahorra los rodeos innecesarios.' },
              { icon: <Zap size={22} />, title: 'Necesitas velocidad, no más información', text: 'Ya has leído libros, cursos, podcasts. El problema no es que no sepas qué hacer en abstracto — es que no tienes claro qué hacer tú, en tu negocio, esta semana. Eso es lo que resuelve la mentoría.' },
              { icon: <TrendingUp size={22} />, title: 'Tienes tracción pero no sabes cómo escalar', text: 'El negocio funciona a un nivel, pero dar el siguiente salto requiere un cambio de sistema. Lo que te ha traído hasta aquí no es lo que te va a llevar al siguiente nivel.' },
              { icon: <MessageSquare size={22} />, title: 'Quieres a alguien que te diga la verdad', text: 'Tu equipo, tu familia, tus amigos — todos tienen un filtro. Un mentor con experiencia real en tu sector y sin interés en quedar bien contigo es uno de los activos más escasos que existen.' },
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

      {/* QUÉ INCLUYE UNA SESIÓN */}
      <section className="section">
        <div className="container">
          <div className="gp-content-grid">
            <div className="gp-main">
              <FadeIn>
                <span className="section-eyebrow">Formato y detalle</span>
                <h2>Qué ocurre en cada sesión</h2>
                <p>Una sesión de mentoría no es una charla informal. Es una hora o hora y media de trabajo enfocado: revisamos lo que ha pasado desde la última vez, analizamos los números que importan, identificamos el cuello de botella más urgente y salimos con acciones concretas para la semana siguiente.</p>
                <p style={{ marginTop: 16 }}>La diferencia con un coach genérico es que yo no te pregunto qué crees que deberías hacer. Te digo lo que yo haría en tu lugar — con argumentos, con datos y asumiendo que eres adulto y puedes manejar una perspectiva directa aunque no sea lo que esperabas escuchar.</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="session-detail" style={{ marginTop: 32 }}>
                  <div>
                    <h4 style={{ marginBottom: 16, fontSize: '1rem' }}>Lo que incluye cada sesión</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {[
                        'Videollamada 1:1 de 60–90 minutos',
                        'Grabación completa de la sesión',
                        'Resumen escrito con foco y próximos pasos',
                        'Revisión de métricas y canales clave',
                        'Plan de acción para los 7–14 días siguientes',
                      ].map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: 'var(--text-2)' }}>
                          <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}><Check size={14} /></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 16, fontSize: '1rem' }}>Para quién es</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {[
                        'Emprendedores con un negocio digital en marcha',
                        'Dueños de ecommerce, Amazon o Shopify',
                        'Fundadores que venden servicios o formación online',
                        'Directivos que quieren visión externa con criterio',
                        'Quienes no necesitan (aún) un socio a tiempo completo',
                      ].map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: 'var(--text-2)' }}>
                          <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}><Check size={14} /></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <aside className="gp-aside">
              <FadeIn delay={0.05}>
                <Image
                  src="/servicios.jpg"
                  alt="Carlos Ramil — Mentorías 1:1"
                  width={400}
                  height={480}
                  style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', objectFit: 'cover', objectPosition: 'top', boxShadow: 'var(--shadow)', border: '1px solid var(--border)', marginBottom: 20 }}
                />
              </FadeIn>
              <FadeIn delay={0.1} className="highlight-box">
                <h4>Mismo cerebro, diferente implicación</h4>
                <p>No es una mentoría genérica de "mindset emprendedor". Es trabajo estratégico con alguien que ha triplicado canales de Amazon, multiplicado por tres Shopify sin publicidad y construido negocios desde cero.</p>
              </FadeIn>
              <FadeIn delay={0.17} className="highlight-box" style={{ marginTop: 20 }}>
                <h4>La honestidad no es opcional</h4>
                <p>Si veo que tu estrategia está mal orientada, te lo digo. Si tu producto tiene un problema de posicionamiento, también. No vengo a validarte — vengo a ayudarte a crecer.</p>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* TABLA COMPARATIVA */}
      <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Comparativa</span>
            <h2>Mentoría vs Growth Partner.<br />Para que no haya confusión.</h2>
            <p>No son dos servicios distintos ni dos marcas distintas. Son dos niveles de implicación del mismo enfoque.</p>
          </div>
          <FadeIn>
            <div style={{ overflowX: 'auto' }}>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Aspecto</th>
                    <th>Mentoría 1:1</th>
                    <th>Growth Partner</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Tipo de relación', 'Sesiones de alta intensidad', 'Relación continua, socio estratégico'],
                    ['Implicación', 'Te guío, tú ejecutas', 'Diseñamos y ejecutamos juntos'],
                    ['Horizonte temporal', 'Corto plazo — claridad y plan', 'Medio/largo plazo — sistema de crecimiento'],
                    ['Dedicación', 'Por sesiones (semanal/quincenal)', 'Presencia constante en tu negocio'],
                    ['Métricas', 'Seguimiento en cada sesión', 'KPIs compartidos, responsabilidad conjunta'],
                    ['Ideal para', 'Validar ideas, desbloquear cuellos de botella', 'Escalar un negocio que ya factura y quiere crecer'],
                  ].map(([aspecto, mentoria, gp]) => (
                    <tr key={aspecto}>
                      <td style={{ fontWeight: 600, color: 'var(--text-1)' }}>{aspecto}</td>
                      <td>{mentoria}</td>
                      <td>{gp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">FAQ</span>
            <h2>Las dudas más habituales.</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="cta-section-inner">
          <span className="section-eyebrow">Siguiente paso</span>
          <h2>¿Llevas demasiado tiempo tomando decisiones sin la perspectiva correcta?</h2>
          <p>Una sesión es suficiente para saber si esto tiene sentido para ti. Sin compromisos a largo plazo, sin pitch de ventas — trabajo directo desde el minuto uno.</p>
          <CalendlyButton className="btn btn-primary btn-lg">
            Reservar mi primera sesión <ArrowRight className="icon-lg" />
          </CalendlyButton>
          <p className="cta-disclaimer">Plazas limitadas · Respuesta en menos de 24h · Sin compromiso de continuidad</p>
        </div>
      </section>
    </>
  );
}
