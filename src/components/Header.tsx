'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/productos", label: "Productos" },
  { href: "/calidad", label: "Calidad" },
  { href: "/proceso", label: "Proceso" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-wp">
      <div className="container-wp" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>

        {/* Logo — now circular */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div className="logo-circle">
            <Image
              src="/logo_huevos.jpg"
              alt="Huevitos Express Logo"
              width={48}
              height={48}
              style={{ objectFit: 'cover', display: 'block', width: '100%', height: '100%' }}
              priority
            />
          </div>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Huevitos Express
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link-wp">
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/593999999999?text=Hola,%20me%20interesa%20hacer%20un%20pedido%20de%20Huevitos%20Express"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow"
            style={{ padding: '8px 16px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            id="header-whatsapp-btn"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#fff' }}
          id="hamburger-btn"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`} style={{ paddingTop: '80px' }}>
        <button
          onClick={() => setMenuOpen(false)}
          style={{ position: 'absolute', top: '20px', right: '24px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          aria-label="Cerrar menú"
        >
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link-wp"
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: '1.15rem' }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://wa.me/593999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-yellow"
          onClick={() => setMenuOpen(false)}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          id="mobile-whatsapp-btn"
        >
          <MessageCircle size={16} />
          Pedir por WhatsApp
        </a>
      </nav>
    </header>
  );
}
