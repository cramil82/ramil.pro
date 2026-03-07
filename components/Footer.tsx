import Link from 'next/link';
import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Ramil<span>.pro</span></div>
            <p>Carlos Ramil — Growth Partner Online. Ayudo a marcas y negocios a crecer y vender más en su negocio online.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/carlos-ramil" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/cramil_pro" target="_blank" rel="noopener" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <ul>
              <li><Link href="/servicios/webs-negocios">Webs y Negocios</Link></li>
              <li><Link href="/servicios/amazon">Amazon</Link></li>
              <li><Link href="/servicios/shopify">Shopify</Link></li>
              <li><Link href="/servicios/aplicaciones">Aplicaciones &amp; IA</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Navegación</h5>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/growth-partner">Growth Partner</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <ul>
              <li><Link href="/contacto">Reservar llamada</Link></li>
              <li><a href="mailto:carlos@ramil.pro">carlos@ramil.pro</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Carlos Ramil · ramil.pro</p>
          <div className="footer-bottom-links">
            <Link href="#">Aviso legal</Link>
            <Link href="#">Política de privacidad</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
