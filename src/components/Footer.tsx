import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-wp">

      {/* Main Footer */}
      <div style={{ padding: '64px 0 48px' }}>
        <div className="container-wp">
          <div className="grid-4" style={{ gap: '40px' }}>

            {/* Col 1 — Brand */}
            <div>
              <div style={{ marginBottom: '20px' }}>
                <div className="logo-box" style={{ width: '64px', height: '64px' }}>
                  <Image
                    src="/logo_huevos.jpg"
                    alt="Huevitos Express"
                    width={64}
                    height={64}
                    style={{ objectFit: 'contain', display: 'block', width: 'auto', height: '100%' }}
                  />
                </div>
              </div>
              <p style={{ color: '#aaa', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Huevitos Express — una marca respaldada por la experiencia de la familia Uzcátegui en el sector avícola.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="https://www.facebook.com/huevitosfoodtruck/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  style={{ width: '34px', height: '34px', background: 'var(--brand-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram"
                  style={{ width: '34px', height: '34px', background: 'var(--brand-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://wa.me/593995489413" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                  style={{ width: '34px', height: '34px', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Col 2 — Links */}
            <div>
              <h4 style={{ color: 'var(--brand-yellow)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #2a2a2a' }}>
                Páginas
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {[
                  { href: '/', label: 'Inicio' },
                  { href: '/nosotros', label: 'Nosotros' },
                  { href: '/productos', label: 'Productos' },
                  { href: '/calidad', label: 'Calidad' },
                  { href: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
                  { href: '/blog', label: 'Blog' },
                  { href: '/contacto', label: 'Contacto' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contacto */}
            <div>
              <h4 style={{ color: 'var(--brand-yellow)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #2a2a2a' }}>
                Contacto
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={16} color="var(--brand-green)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: '#aaa', fontSize: '0.875rem', lineHeight: 1.5 }}>Guayaquil, Ecuador</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={16} color="var(--brand-green)" style={{ flexShrink: 0 }} />
                  <a href="https://wa.me/593995489413" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.875rem' }}>
                    +593 99 548 9413
                  </a>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={16} color="var(--brand-green)" style={{ flexShrink: 0 }} />
                  <a href="mailto:info@huevitosexpress.com" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.875rem' }}>
                    info@huevitosexpress.com
                  </a>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Clock size={16} color="var(--brand-green)" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#aaa', fontSize: '0.875rem' }}>Lun – Sáb: 7:00 – 18:00</span>
                </li>
              </ul>
            </div>

            {/* Col 4 — Respaldo */}
            <div>
              <h4 style={{ color: 'var(--brand-yellow)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #2a2a2a' }}>
                Respaldo de calidad
              </h4>
              <p style={{ color: '#aaa', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Nuestra trayectoria en el sector avícola con la familia Uzcátegui garantiza cada huevo que llega a tu mesa.
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ background: '#fff', padding: '6px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image
                    src="/logo_abu.jpeg"
                    alt="A.B.U."
                    width={56}
                    height={32}
                    style={{ objectFit: 'contain', display: 'block', width: 'auto', height: '32px' }}
                  />
                </div>
                <div style={{ background: '#fff', padding: '6px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image
                    src="/logo_grupouzcategui.jpeg"
                    alt="Grupo Uzcátegui"
                    width={56}
                    height={32}
                    style={{ objectFit: 'contain', display: 'block', width: 'auto', height: '32px' }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#0a0a0a', padding: '16px 0', borderTop: '1px solid #1f1f1f' }}>
        <div className="container-wp" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ color: '#444', fontSize: '0.8rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} Huevitos Express. Todos los derechos reservados.
          </p>
          <p style={{ color: '#444', fontSize: '0.8rem', margin: 0 }}>
            Una marca de la familia Uzcátegui · Guayaquil, Ecuador
          </p>
        </div>
      </div>

    </footer>
  );
}
