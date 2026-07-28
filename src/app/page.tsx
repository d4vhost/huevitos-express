'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Egg, Truck, Star, HandshakeIcon } from "lucide-react";

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
    nombre: "Cubeta de Huevos",
    desc: "30 huevos frescos seleccionados, empacados con cuidado para proteger su calidad durante el transporte.",
    precio: "Consultar precio",
  },
  {
    img: "/producto_carton.jpg",
    nombre: "Cartón de Huevos",
    desc: "12 huevos frescos en cartón, ideal para hogares y consumo familiar diario.",
    precio: "Consultar precio",
  },
  {
    img: "/hero_huevos.jpg",
    nombre: "Docena",
    desc: "12 huevos frescos de primera calidad, perfectos para el día a día en tu hogar.",
    precio: "Consultar precio",
  },
];

const ventajas = [
  {
    icon: <Egg size={28} color="#fff" />,
    title: "Frescura",
    desc: "Los huevos son seleccionados cuidadosamente antes de su distribución, asegurando que lleguen frescos a tu hogar.",
  },
  {
    icon: <Truck size={28} color="#fff" />,
    title: "Distribución",
    desc: "Entregas ágiles para mantener la frescura del producto. Cubrimos hogares, comercios y negocios en Guayaquil.",
  },
  {
    icon: <Star size={28} color="#fff" />,
    title: "Calidad",
    desc: "Compromiso con procesos responsables desde la selección hasta la entrega. Cada huevo pasa por control de calidad.",
  },
  {
    icon: <HandshakeIcon size={28} color="#fff" />,
    title: "Atención",
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
            src="/hero_huevos.jpg"
            alt="Huevos frescos Huevitos Express"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container-wp hero-content" style={{ width: '100%' }}>
          <div style={{ maxWidth: '680px' }}>
            <span className="section-eyebrow">Guayaquil · Ecuador</span>
            <h1 style={{ fontSize: '3.25rem', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '20px', textTransform: 'uppercase' }}>
              Huevos frescos,<br />
              <span style={{ color: 'var(--brand-yellow)' }}>calidad que llega</span><br />
              a tu mesa.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '36px', maxWidth: '560px' }}>
              En Huevitos Express trabajamos para ofrecer huevos seleccionados, frescos y distribuidos con rapidez, respaldados por la experiencia de la familia Uzcátegui en el sector avícola.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/productos" className="btn-yellow" id="hero-ver-productos">
                Ver productos
              </Link>
              <a
                href="https://wa.me/593999999999?text=Hola,%20quiero%20hacer%20un%20pedido%20de%20huevos%20frescos"
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

      {/* ========================================
          QUIÉNES SOMOS
          ======================================== */}
      <section className="section-white">
        <div className="container-wp">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
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
            <div style={{ position: 'relative', height: '420px', border: '4px solid var(--brand-yellow)' }}>
              <Image
                src="/hero_huevos.jpg"
                alt="Huevitos Express - Quiénes somos"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'var(--brand-green)', color: '#fff', padding: '20px 28px', fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', zIndex: 1 }}>
                Sede Guayaquil
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          POR QUÉ ELEGIRNOS
          ======================================== */}
      <section className="section-gray">
        <div className="container-wp">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">Nuestras ventajas</span>
            <h2 className="section-title">¿Por qué elegir Huevitos Express?</h2>
            <div className="section-divider" style={{ margin: '16px auto 0' }}></div>
          </div>
          <div className="grid-4">
            {ventajas.map((item, i) => (
              <div key={i} className="card-wp" style={{ textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', background: 'var(--brand-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
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
          PRODUCTOS (resumen)
          ======================================== */}
      <section className="section-white">
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
          NUESTRO PROCESO
          ======================================== */}
      <section className="section-green">
        <div className="container-wp">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>De origen a destino</span>
            <h2 className="section-title-white">Nuestro proceso</h2>
            <div className="section-divider-yellow" style={{ margin: '16px auto 0' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
            {[
              { num: '01', label: 'Selección' },
              { num: '02', label: 'Clasificación' },
              { num: '03', label: 'Empaque' },
              { num: '04', label: 'Distribución' },
              { num: '05', label: 'Entrega' },
            ].map((step, i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', padding: '0 8px' }}>
                  <div style={{
                    width: '72px', height: '72px', background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '3px solid var(--brand-yellow)',
                    margin: '0 auto 12px',
                  }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--brand-green)' }}>{step.num}</span>
                  </div>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ width: '48px', height: '2px', background: 'rgba(255,255,255,0.3)', flexShrink: 0, margin: '0 4px 20px' }}></div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/proceso" className="btn-yellow" id="home-ver-proceso">
              Ver proceso completo
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          PREGUNTAS FRECUENTES
          ======================================== */}
      <section className="section-gray">
        <div className="container-wp">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-title">Preguntas frecuentes</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                Resolvemos tus dudas sobre nuestros huevos frescos, pedidos, almacenamiento y más.
              </p>
              <Link href="/preguntas-frecuentes" className="btn-secondary" id="home-ver-faq">
                Ver todas las preguntas
              </Link>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    id={`faq-home-${i}`}
                  >
                    <span>{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp size={16} color="var(--brand-green)" style={{ flexShrink: 0, marginLeft: '16px' }} />
                      : <ChevronDown size={16} color="var(--brand-green)" style={{ flexShrink: 0, marginLeft: '16px' }} />
                    }
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">
                      <p style={{ margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
              href="https://wa.me/593999999999?text=Hola,%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              id="home-cta-whatsapp"
              style={{ fontSize: '1.05rem', padding: '16px 36px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <MessageCircle size={18} />
              Pedir por WhatsApp
            </a>
            <Link href="/contacto" className="btn-white" id="home-cta-contacto" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
              Ver formas de contacto
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
