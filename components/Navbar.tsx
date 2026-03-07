'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Package, ShoppingBag, Bot, ArrowRight,
  Home, Briefcase, Mail, ChevronDown, TrendingUp
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isScrolled = scrolled || pathname !== '/';

  useEffect(() => {
    if (pathname !== '/') { setScrolled(true); return; }
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className={`nav${isScrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Navegación principal">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Ramil<span>.pro</span></Link>
          <ul className="nav-links">
            <li><Link href="/" className={isActive('/') ? 'active' : ''}>Inicio</Link></li>
            <li><Link href="/growth-partner" className={isActive('/growth-partner') ? 'active' : ''}>Growth Partner</Link></li>
            <li className="nav-item">
              <Link href="/servicios" className={isActive('/servicios') ? 'active' : ''}>
                Servicios
                <ChevronDown className="nav-arrow" strokeWidth={2.5} />
              </Link>
              <div className="nav-dropdown">
                <Link href="/servicios/amazon">
                  <span className="nav-dropdown-icon"><Package size={16} /></span>
                  Amazon
                </Link>
                <Link href="/servicios/shopify">
                  <span className="nav-dropdown-icon"><ShoppingBag size={16} /></span>
                  Shopify
                </Link>
                <Link href="/servicios/aplicaciones">
                  <span className="nav-dropdown-icon"><Bot size={16} /></span>
                  Aplicaciones &amp; IA
                </Link>
              </div>
            </li>
            <li><Link href="/contacto" className={isActive('/contacto') ? 'active' : ''}>Contacto</Link></li>
          </ul>
          <div className="nav-cta">
            <Link href="/contacto" className="btn btn-primary btn-sm">Llamada Gratuita</Link>
          </div>
          <button
            className="nav-toggle"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Menú móvil">
        <Link href="/"><Home size={16} /> Inicio</Link>
        <Link href="/growth-partner"><TrendingUp size={16} /> Growth Partner</Link>
        <Link href="/servicios"><Briefcase size={16} /> Servicios</Link>
        <Link href="/servicios/amazon"><Package size={16} /> Amazon</Link>
        <Link href="/servicios/shopify"><ShoppingBag size={16} /> Shopify</Link>
        <Link href="/servicios/aplicaciones"><Bot size={16} /> Aplicaciones &amp; IA</Link>
        <Link href="/contacto"><Mail size={16} /> Contacto</Link>
        <div className="mobile-cta">
          <Link href="/contacto" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Llamada Gratuita <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
