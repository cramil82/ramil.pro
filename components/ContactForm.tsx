'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: connect to API route when backend is ready
    setTimeout(() => setStatus('sent'), 1000);
  };

  return (
    <div className="contact-form">
      <h3>Envíame un mensaje</h3>
      <p>¿Tienes dudas antes de reservar? Cuéntame tu situación y te respondo en menos de 24 horas.</p>
      {status === 'sent' ? (
        <div className="highlight-box" style={{ marginTop: 24, textAlign: 'center' }}>
          <h4>✓ Mensaje enviado</h4>
          <p>Te respondo en menos de 24 horas.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate style={{ marginTop: 24 }}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="tu@email.com" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="tipo">¿En qué puedo ayudarte?</label>
            <select id="tipo" name="tipo">
              <option value="" disabled>Selecciona una opción</option>
              <option value="amazon">Consultoría Amazon</option>
              <option value="shopify">Consultoría Shopify</option>
              <option value="web">Web o Landing Page</option>
              <option value="ia">IA aplicada a negocio</option>
              <option value="marca">Marca personal</option>
              <option value="otro">Otro / No sé exactamente</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Tu situación y qué buscas conseguir</label>
            <textarea id="mensaje" name="mensaje" placeholder="Cuéntame sobre tu negocio y qué resultado buscas." />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 15, fontSize: '1rem' }} disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : <>{`Enviar mensaje`} <Send size={16} /></>}
          </button>
          <p className="form-note">Al enviar aceptas la <a href="#">política de privacidad</a>. Tus datos no se comparten con terceros.</p>
        </form>
      )}
    </div>
  );
}
