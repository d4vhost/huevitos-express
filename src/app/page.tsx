'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Egg, Truck, Star, HandshakeIcon, ShieldCheck, Leaf, Award } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto duran los huevos frescos?",
    a: "Los huevos frescos pueden durar hasta 3 semanas a temperatura ambiente y hasta 5 semanas refrigerados. Te recomendamos guardarlos siempre en un lugar fresco y seco, alejados de olores fuertes.",
  },
  {
    q: "¿Cómo almacenar correctamente los huevos?",
    a: "Lo ideal es almacenarlos con la punta hacia abajo en el refrigerador, lejos de alimentos con olores intensos. Evita lavarlos antes de guardarlos, ya que la cáscara tiene una capa protectora natural.",
  },
  {
    q: "¿Cómo realizar un pedido?",
    a: "Puedes contactarnos directamente por WhatsApp, por correo electrónico o visitarnos en nuestra sede en Guayaquil. Atendemos pedidos para hogares, comercios y negocios en general.",
  },
  {
    q: "¿Tienen venta al por mayor?",
    a: "Sí, atendemos pedidos al por mayor para restaurantes, tiendas, supermercados y distribuidores. Contáctanos para coordinar volúmenes, precios y logística de entrega.",
  },
];

const productos = [
  {
    img: "/producto_cubeta.jpg",
    nombre: "Cubeta de Huevos de Codorniz",
    desc: "Huevos de codorniz frescos seleccionados, empacados con cuidado para proteger su calidad durante el transporte.",
    precio: "Consultar precio",
  },
  {
    img: "/producto_carton.jpg",
    nombre: "Cartón de Huevos de Codorniz",
    desc: "Huevos de codorniz frescos en cartón, ideal para hogares y consumo familiar diario.",
    precio: "Consultar precio",
  },
  {
    img: "/docena_premium.jpg",
    nombre: "Huevos Naturales Variados",
    desc: "Selección premium de huevos naturales de codorniz y huevos de color, frescos y de primera calidad.",
    precio: "Consultar precio",
  },
];

const ventajas = [
  {
    icon: <Egg size={28} color="#fff" />,
    title: "Frescura Garantizada",
    desc: "Los huevos son seleccionados cuidadosamente antes de su distribución, asegurando que lleguen frescos a tu hogar.",
  },
  {
    icon: <Truck size={28} color="#fff" />,
    title: "Distribución Ágil",
    desc: "Entregas rápidas para mantener la frescura del producto. Cubrimos hogares, comercios y negocios en Guayaquil.",
  },
  {
    icon: <Star size={28} color="#fff" />,
    title: "Calidad Superior",
    desc: "Compromiso con procesos responsables desde la selección hasta la entrega. Cada huevo pasa por control de calidad.",
  },
  {
    icon: <HandshakeIcon size={28} color="#fff" />,
    title: "Atención Personalizada",
    desc: "Servicio cercano y personalizado para clientes particulares y negocios. Siempre disponibles por WhatsApp.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ width: '100%' }}>

      {/* ========================================
          HERO
          ======================================== */}
      <section className="hero-wp">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/img_inicio.jpg"
            alt="Huevos frescos Huevitos Express"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container-wp hero-content" style={{ width: '100%' }}>
          <div style={{ maxWidth: '700px' }}>
            <span className="section-eyebrow">Guayaquil · Ecuador</span>
            <h1 className="hero-heading" style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', lineHeight: 1.08, marginBottom: '20px', textTransform: 'uppercase' }}>
              Huevos frescos,<br />
              <span style={{ color: 'var(--brand-yellow)' }}>calidad que llega</span><br />
              a tu mesa.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '36px', maxWidth: '560px' }}>
              En Huevitos Express trabajamos para ofrecer huevos de codorniz y huevos naturales de color, seleccionados, frescos y distribuidos con rapidez, respaldados por la experiencia de la familia Uzcátegui en el sector avícola.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/productos" className="btn-yellow" id="hero-ver-productos">
                Ver productos
              </Link>
              <a
                href="https://wa.me/593995489413?text=Hola,%20quiero%20hacer%20un%20pedido%20de%20huevos%20frescos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                id="hero-whatsapp"
              >
                <MessageCircle size={16} />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER / MARQUEE */}
      <div className="ticker-strip">
        <div className="ticker-track">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="ticker-content" aria-hidden={j === 1}>
              {['HUEVOS FRESCOS', 'DISTRIBUCIÓN EN GUAYAQUIL', 'PEDIDOS POR WHATSAPP', 'CALIDAD GARANTIZADA', 'DESDE 2003', 'ENTREGAS A DOMICILIO', 'HUEVITOS EXPRESS'].map((text, i) => (
                <span key={i} className="ticker-item">
                  <span className="ticker-dot">●</span>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================
          QUIÉNES SOMOS
          ======================================== */}
      <section className="section-white">
        <div className="container-wp">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">Quiénes somos</span>
              <h2 className="section-title">Una marca comprometida con la frescura</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle" style={{ marginBottom: '20px' }}>
                Huevitos Express es una marca dedicada a la comercialización y distribución de huevos frescos, comprometida con ofrecer productos de calidad para hogares, comercios y negocios.
              </p>
              <p className="section-subtitle">
                Nuestra experiencia en el sector avícola nos permite mantener altos estándares de selección, almacenamiento y distribución, garantizando que cada huevo llegue en las mejores condiciones a tu mesa.
              </p>
              <div style={{ marginTop: '32px' }}>
                <Link href="/nosotros" className="btn-primary" id="home-conoce-historia">
                  Conoce nuestra historia
                </Link>
              </div>
            </div>
            <div style={{ position: 'relative', height: '420px', border: '4px solid var(--brand-yellow)', overflow: 'hidden' }}>
              {/* Custom Native-Looking Place Card */}
              <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#fff', padding: '12px 16px', borderRadius: '2px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '24px', minWidth: '280px', fontFamily: 'Roboto, Arial, sans-serif' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, fontSize: '14px', color: '#1a73e8', marginBottom: '2px', whiteSpace: 'nowrap' }}>Huevitos Express</div>
                  <div style={{ fontSize: '12px', color: '#555', whiteSpace: 'nowrap' }}>Sede Guayaquil</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href="https://www.google.com/maps/dir//-2.19394,-79.88697" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: '#f1f3f4', transition: 'background 0.2s', textDecoration: 'none' }} title="Cómo llegar" onMouseOver={(e) => e.currentTarget.style.background = '#e8eaed'} onMouseOut={(e) => e.currentTarget.style.background = '#f1f3f4'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                  </a>
                  <a href="https://maps.google.com/?q=-2.19394,-79.88697" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: '#f1f3f4', transition: 'background 0.2s', textDecoration: 'none' }} title="Ver el mapa más grande" onMouseOver={(e) => e.currentTarget.style.background = '#e8eaed'} onMouseOut={(e) => e.currentTarget.style.background = '#f1f3f4'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d-79.88697!3d-2.19394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMTEnMzguMiJTIDc5wrA1MycxMy4xIlc!5e0!3m2!1ses!2sec!4v1720000000000!5m2!1ses!2sec"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Huevitos Express - Guayaquil"
              ></iframe>
              <div className="image-overlap-badge" style={{ position: 'absolute', bottom: '0', left: '0', background: 'var(--brand-green)', color: '#fff', padding: '20px 28px', fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', zIndex: 1 }}>
                Sede Guayaquil
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          POR QUÉ ELEGIRNOS
          ======================================== */}
      <section className="section-alt">
        <div className="container-wp">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">Nuestras ventajas</span>
            <h2 className="section-title">¿Por qué elegir Huevitos Express?</h2>
            <div className="section-divider" style={{ margin: '16px auto 0' }}></div>
          </div>
          <div className="grid-4">
            {ventajas.map((item, i) => (
              <div key={i} className="card-wp" style={{ textAlign: 'center' }}>
                <div className="icon-box" style={{ margin: '0 auto 20px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px', color: 'var(--fg)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--fg-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          A.B.U. — RESPALDO DESTACADO
          ======================================== */}
      <section className="section-white">
        <div className="container-wp">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'stretch' }}>
            <div className="abu-logo-mobile" style={{ position: 'relative', width: '100%', minHeight: '350px' }}>
              <Image
                src="/logo_abu.jpeg"
                alt="A.B.U. Alimentos Balanceados Uzcátegui"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
            </div>
            <div>
              <span className="section-eyebrow">Respaldo de calidad</span>
              <h2 className="section-title">El respaldo de la excelencia</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle" style={{ marginBottom: '20px' }}>
                <strong>Huevitos Express</strong> no es solo una marca, es el resultado de la pasión y la experiencia de la familia Uzcátegui. Nuestra producción está respaldada por la trayectoria y el profundo conocimiento de <strong>A.B.U. Alimentos Balanceados Uzcátegui</strong>.
              </p>
              <div className="features-mini-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                    <Leaf size={18} color="#fff" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>Nutrición Especializada</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', lineHeight: 1.5 }}>Fórmulas propias de más de 20 años.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                    <ShieldCheck size={18} color="#fff" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>Garantía Total</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', lineHeight: 1.5 }}>Control de todo el ciclo productivo.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                    <Award size={18} color="#fff" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>Miembro AFABA</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', lineHeight: 1.5 }}>Reconocidos en el sector avícola.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                    <Egg size={18} color="#fff" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>Desde 2003</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', lineHeight: 1.5 }}>Más de dos décadas de experiencia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          PRODUCTOS
          ======================================== */}
      <section className="section-alt">
        <div className="container-wp">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-eyebrow">Catálogo</span>
              <h2 className="section-title" style={{ margin: 0 }}>Nuestros productos</h2>
              <div className="section-divider" style={{ marginBottom: 0 }}></div>
            </div>
            <Link href="/productos" className="btn-secondary" id="home-ver-catalogo">
              Ver catálogo completo →
            </Link>
          </div>
          <div className="grid-3">
            {productos.map((p, i) => (
              <div key={i} className="product-card">
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <Image
                    src={p.img}
                    alt={p.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="product-card-body">
                  <h3 style={{ fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', marginBottom: '8px' }}>{p.nombre}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--fg-muted)', marginBottom: '20px', lineHeight: 1.6 }}>{p.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--fg-light)', fontWeight: 600, textTransform: 'uppercase' }}>{p.precio}</span>
                    <Link href="/productos" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.8rem' }}>
                      Ver detalle
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================
          CTA FINAL
          ======================================== */}
      <section className="cta-strip">
        <div className="container-wp" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 900, fontSize: '2.25rem', textTransform: 'uppercase', marginBottom: '16px' }}>
            ¿Necesitas abastecer tu hogar o negocio?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Contáctanos hoy mismo y te ayudamos a encontrar la presentación ideal para ti. Atendemos pedidos de cualquier volumen.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/593995489413?text=Hola,%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              id="home-cta-whatsapp"
              style={{ fontSize: '1.05rem', padding: '16px 36px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <MessageCircle size={18} />
              Pedir por WhatsApp
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}
