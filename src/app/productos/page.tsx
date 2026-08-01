import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Heart, Leaf, Utensils, Box, Egg, Truck, Coins, Thermometer, ArrowDown, Ban, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Productos | Huevitos Express",
  description: "Catálogo de huevos frescos de Huevitos Express. Cubeta de 30, cartón de 12, docena y media cubeta. Distribución en Guayaquil para hogares y negocios.",
};

const productos = [
  {
    img: "/producto_cubeta.jpg",
    nombre: "Cubeta de Huevos de Codorniz",
    desc: "Presentación de huevos de codorniz frescos seleccionados, ideal para familias grandes, restaurantes y negocios que requieren un suministro constante.",
    presentacion: "30 unidades",
    peso: "Aprox. 1.8 kg",
    cantidad: "Mínimo 1 cubeta",
  },
  {
    img: "/producto_carton.jpg",
    nombre: "Cartón de Huevos de Codorniz",
    desc: "Cartón de huevos de codorniz frescos en empaque individual, perfecto para el consumo familiar diario. Fácil de almacenar y transportar.",
    presentacion: "12 unidades",
    peso: "Aprox. 700 g",
    cantidad: "Mínimo 1 cartón",
  },
  {
    img: "/docena_premium.jpg",
    nombre: "Huevos Naturales Variados",
    desc: "Selección premium de huevos naturales de codorniz y huevos de color, frescos y de primera calidad para tu hogar.",
    presentacion: "12 unidades",
    peso: "Aprox. 700 g",
    cantidad: "Mínimo 1 docena",
  },
  {
    img: "/producto_cubeta.jpg",
    nombre: "Media Cubeta de Codorniz",
    desc: "Huevos de codorniz frescos seleccionados, la opción intermedia entre el cartón y la cubeta completa para uso familiar o pequeños negocios.",
    presentacion: "15 unidades",
    peso: "Aprox. 900 g",
    cantidad: "Mínimo 1 unidad",
  },
];

const beneficios = [
  {
    icon: <Heart size={48} color="var(--brand-green)" />,
    title: 'Proteína de alta calidad',
    desc: 'El huevo contiene todos los aminoácidos esenciales que el cuerpo necesita, siendo una fuente de proteína completa y de alto valor biológico.',
  },
  {
    icon: <Leaf size={48} color="var(--brand-green)" />,
    title: 'Rico en vitaminas',
    desc: 'Contiene vitaminas A, D, E, B12 y ácido fólico, esenciales para el buen funcionamiento del sistema nervioso, inmune y óseo.',
  },
  {
    icon: <Utensils size={48} color="var(--brand-green)" />,
    title: 'Versatilidad culinaria',
    desc: 'El huevo es uno de los ingredientes más versátiles de la cocina: frito, cocido, revuelto, horneado — siempre delicioso y nutritivo.',
  },
  {
    icon: <Box size={48} color="var(--brand-green)" />,
    title: 'Fácil conservación',
    desc: 'Con el almacenamiento adecuado, los huevos frescos pueden mantenerse en óptimas condiciones por varias semanas sin perder sus propiedades.',
  },
];

export default function Productos() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-page" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(/img_productos.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container-wp">
          <span className="section-eyebrow">Catálogo</span>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '2.75rem', textTransform: 'uppercase', marginBottom: '16px', marginTop: '12px' }}>
            Nuestros productos
          </h1>
          <div style={{ width: '48px', height: '4px', background: 'var(--brand-yellow)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.7 }}>
            Disponemos de diferentes presentaciones de huevos frescos seleccionados para adaptarnos a las necesidades de cada hogar, comercio o negocio.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-white">
        <div className="container-wp">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">Nuestro catálogo</span>
              <h2 className="section-title">Presentaciones disponibles</h2>
              <div className="section-divider"></div>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
                En Huevitos Express ofrecemos huevos frescos en distintas presentaciones para que puedas elegir la que mejor se adapte a tu consumo. Desde la docena para el hogar hasta la cubeta para negocios y distribuidores.
              </p>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '32px' }}>
                Todos nuestros productos pasan por un proceso de selección y clasificación antes de llegar a tus manos, garantizando frescura y calidad en cada presentación.
              </p>
              <a
                href="https://wa.me/593995489413?text=Hola,%20quiero%20consultar%20precios%20de%20huevos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                id="productos-consultar-whatsapp"
              >
                <MessageCircle size={18} style={{ marginRight: '8px' }} />
                Consultar precios y disponibilidad
              </a>
            </div>
            <div className="grid-2" style={{ gap: '16px' }}>
              {[
                { icon: <Egg size={36} color="var(--fg)" />, label: 'Seleccionados', sub: 'Uno a uno' },
                { icon: <Truck size={36} color="var(--fg)" />, label: 'Entrega rápida', sub: 'En Guayaquil' },
                { icon: <Box size={36} color="var(--fg)" />, label: 'Bien empacados', sub: 'Protegidos' },
                { icon: <Coins size={36} color="var(--fg)" />, label: 'Mayorista', sub: 'y minorista' },
              ].map((item, i) => (
                <div key={i} className="card-wp-yellow" style={{ textAlign: 'center', padding: '20px 16px' }}>
                  <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                  <p style={{ fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', margin: '0 0 4px', color: 'var(--fg)' }}>{item.label}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', margin: 0 }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="section-gray">
        <div className="container-wp">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">Fichas de producto</span>
            <h2 className="section-title">Catálogo completo</h2>
            <div className="section-divider" style={{ margin: '16px auto 0' }}></div>
          </div>
          <div className="grid-4">
            {productos.map((p, i) => (
              <div key={i} className="product-card">
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <Image src={p.img} alt={p.nombre} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="product-card-body">
                  <h3 style={{ fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', marginBottom: '10px' }}>{p.nombre}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', lineHeight: 1.6, marginBottom: '16px' }}>{p.desc}</p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                      <span style={{ color: 'var(--fg-light)', textTransform: 'uppercase', fontWeight: 600 }}>Presentación</span>
                      <span style={{ color: 'var(--fg)', fontWeight: 700 }}>{p.presentacion}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                      <span style={{ color: 'var(--fg-light)', textTransform: 'uppercase', fontWeight: 600 }}>Peso aprox.</span>
                      <span style={{ color: 'var(--fg)', fontWeight: 700 }}>{p.peso}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                      <span style={{ color: 'var(--fg-light)', textTransform: 'uppercase', fontWeight: 600 }}>Pedido mín.</span>
                      <span style={{ color: 'var(--fg)', fontWeight: 700 }}>{p.cantidad}</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/593995489413?text=Hola,%20quiero%20pedir%20${encodeURIComponent(p.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%', textAlign: 'center', display: 'block', padding: '10px' }}
                    id={`pedido-${p.nombre.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    Pedir ahora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section-white">
        <div className="container-wp">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">Nutrición</span>
            <h2 className="section-title">¿Por qué consumir huevos?</h2>
            <div className="section-divider" style={{ margin: '16px auto 0' }}></div>
          </div>
          <div className="grid-4">
            {beneficios.map((b, i) => (
              <div key={i} className="card-wp" style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>{b.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', marginBottom: '12px' }}>{b.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--fg-muted)', lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSERVACIÓN */}
      <section className="section-gray">
        <div className="container-wp">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">Tips de almacenamiento</span>
              <h2 className="section-title">Cómo conservar tus huevos</h2>
              <div className="section-divider"></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: <Thermometer size={28} color="var(--brand-green)" />, tip: 'Temperatura fresca', desc: 'Guárdalos en el refrigerador entre 4°C y 7°C para prolongar su vida útil.' },
                  { icon: <ArrowDown size={28} color="var(--brand-green)" />, tip: 'Punta hacia abajo', desc: 'Posición correcta para mantener la yema centrada y preservar la frescura.' },
                  { icon: <Ban size={28} color="var(--brand-green)" />, tip: 'No los laves antes de guardar', desc: 'La cáscara tiene una capa protectora natural que no debes eliminar.' },
                  { icon: <Calendar size={28} color="var(--brand-green)" />, tip: 'Revisa la fecha', desc: 'Consume los huevos más antiguos primero y siempre verifica su frescura.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', marginBottom: '4px', color: 'var(--fg)' }}>{item.tip}</h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--fg-muted)', margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', height: '400px', border: '4px solid var(--brand-yellow)' }}>
              <Image src="/producto_carton.jpg" alt="Conservación de huevos" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container-wp">
          <h2 style={{ color: '#fff', fontWeight: 900, fontSize: '2rem', textTransform: 'uppercase', marginBottom: '16px' }}>
            ¿Listo para hacer tu pedido?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '480px', margin: '0 auto 32px' }}>
            Contáctanos por WhatsApp y te asesoramos para encontrar la presentación ideal para ti.
          </p>
          <a
            href="https://wa.me/593995489413?text=Hola,%20quiero%20solicitar%20un%20pedido%20de%20huevos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow"
            id="productos-cta-pedido"
            style={{ fontSize: '1.05rem', padding: '16px 36px' }}
          >
            Solicitar pedido por WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
