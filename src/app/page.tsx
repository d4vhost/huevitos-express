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
    nombre: "Docena Premium",
    desc: "12 huevos frescos de primera calidad, perfectos para el día a día en tu hogar.",
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
          <div style={{ maxWidth: '700px' }}>
            <span className="section-eyebrow" data-aos="fade-right">Guayaquil · Ecuador</span>
            <h1 data-aos="fade-right" data-aos-delay="100" style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', lineHeight: 1.08, marginBottom: '20px', textTransform: 'uppercase' }}>
              Huevos frescos,<br />
              <span style={{ color: 'var(--brand-yellow)' }}>calidad que llega</span><br />
              a tu mesa.
            </h1>
            <p data-aos="fade-right" data-aos-delay="200" style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '36px', maxWidth: '560px' }}>
              En Huevitos Express trabajamos para ofrecer huevos seleccionados, frescos y distribuidos con rapidez, respaldados por la experiencia de la familia Uzcátegui en el sector avícola.
            </p>
            <div data-aos="fade-up" data-aos-delay="300" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div data-aos="fade-right">
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
            <div data-aos="fade-left" style={{ position: 'relative', height: '420px', border: '4px solid var(--brand-yellow)' }}>
              <Image
                src="https://images.unsplash.com/photo-1569288052389-dac9b0ac9eac?q=80&w=1000&auto=format&fit=crop"
                alt="Huevos frescos en granja"
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
      <section className="section-alt">
        <div className="container-wp">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} data-aos="fade-up">
            <span className="section-eyebrow">Nuestras ventajas</span>
            <h2 className="section-title">¿Por qué elegir Huevitos Express?</h2>
            <div className="section-divider" style={{ margin: '16px auto 0' }}></div>
          </div>
          <div className="grid-4">
            {ventajas.map((item, i) => (
              <div key={i} className="card-wp" style={{ textAlign: 'center' }} data-aos="fade-up" data-aos-delay={i * 100}>
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
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div data-aos="fade-right" style={{ textAlign: 'left' }}>
              <Image
                src="/logo_abu.jpeg"
                alt="A.B.U. Alimentos Balanceados Uzcátegui"
                width={500}
                height={350}
                style={{ objectFit: 'contain', display: 'block', width: '100%', height: 'auto', maxHeight: '350px' }}
              />
            </div>
            <div data-aos="fade-left">
              <span className="section-eyebrow">Respaldo de calidad</span>
              <h2 className="section-title">El respaldo de la excelencia</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle" style={{ marginBottom: '20px' }}>
                <strong>Huevitos Express</strong> no es solo una marca, es el resultado de la pasión y la experiencia de la familia Uzcátegui. Nuestra producción está respaldada por la trayectoria y el profundo conocimiento de <strong>A.B.U. Alimentos Balanceados Uzcátegui</strong>.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
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
                  <div className="icon-box" style={{ width: '40px', height: '40px', fontSize: '1rem', background: 'var(--brand-orange)' }}>
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
          <div data-aos="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
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
              <div key={i} className="product-card" data-aos="fade-up" data-aos-delay={i * 100}>
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
          <div style={{ textAlign: 'center', marginBottom: '56px' }} data-aos="fade-up">
            <span className="section-eyebrow-light">De origen a destino</span>
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
              <div key={i} style={{ display: 'flex', alignItems: 'center' }} data-aos="zoom-in" data-aos-delay={i * 100}>
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
          <div data-aos="fade-up" style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/proceso" className="btn-yellow" id="home-ver-proceso">
              Ver proceso completo
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          UBICACIÓN — Sección Roja
          ======================================== */}
      <section className="section-red">
        <div className="container-wp">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <span className="section-eyebrow-light"><i className="fa-solid fa-location-dot" style={{ marginRight: '6px' }}></i> Encuéntranos</span>
              <h2 className="section-title-white">Nuestra sede en Guayaquil</h2>
              <div className="section-divider-yellow"></div>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Nos ubicamos en el corazón de Guayaquil, listos para atenderte y garantizar que siempre tengas huevos frescos a tu disposición.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-map-marker-alt" style={{ color: 'var(--brand-yellow)', marginTop: '4px', fontSize: '1.1rem' }}></i>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, marginBottom: '2px', fontSize: '0.95rem' }}>Dirección</p>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Rumichaca 1326, entre 19 de Agosto y Clemente Ballén.<br />
                      Parroquia Ximena, Cantón Guayas.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <i className="fa-solid fa-clock" style={{ color: 'var(--brand-yellow)', fontSize: '1.1rem' }}></i>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>Lun – Sáb: 7:00 – 18:00</p>
                </div>
              </div>
              <Link href="/contacto" className="btn-yellow">
                Ir a contacto
              </Link>
            </div>
            <div data-aos="fade-left" style={{ position: 'relative', height: '380px', border: '4px solid var(--brand-yellow)' }}>
              <Image
                src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1000&auto=format&fit=crop"
                alt="Guayaquil Ecuador"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(204,0,0,0.85)', padding: '16px 24px', textAlign: 'center' }}>
                <p style={{ color: '#fff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', margin: 0 }}>
                  <i className="fa-solid fa-map-pin" style={{ marginRight: '8px', color: 'var(--brand-yellow)' }}></i>
                  Guayaquil, Ecuador
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          PREGUNTAS FRECUENTES
          ======================================== */}
      <section className="section-alt">
        <div className="container-wp">
          <div className="grid-1-2" style={{ gap: '64px', alignItems: 'start' }}>
            <div data-aos="fade-right">
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
            <div data-aos="fade-left">
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
        <div className="container-wp" style={{ textAlign: 'center' }} data-aos="zoom-in">
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
