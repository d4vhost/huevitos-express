import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search, Layers, Box, Truck, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Calidad | Huevitos Express",
  description: "Nuestro compromiso con la calidad en cada etapa: selección, clasificación, empaque y distribución de huevos frescos en Guayaquil.",
};

const etapas = [
  {
    num: "01",
    titulo: "Selección",
    icon: <Search size={32} color="#fff" style={{ marginBottom: '8px' }} />,
    desc: "Cada huevo es revisado individualmente antes de su distribución. Descartamos cualquier producto que no cumpla con nuestros estándares de frescura, tamaño y estado de la cáscara. Solo los mejores huevos continúan al siguiente paso.",
    detalle: ["Revisión visual de la cáscara", "Control de frescura", "Verificación de integridad", "Descarte de piezas irregulares"],
    bgImage: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "02",
    titulo: "Clasificación",
    icon: <Layers size={32} color="#fff" style={{ marginBottom: '8px' }} />,
    desc: "Una vez seleccionados, los huevos son organizados por tamaño y presentación. Este proceso garantiza que cada cubeta, cartón o docena tenga uniformidad en el producto que recibes.",
    detalle: ["Clasificación por tamaño", "Agrupación por presentación", "Control de uniformidad", "Registro de lotes"],
    bgImage: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "03",
    titulo: "Empaque",
    icon: <Box size={32} color="#fff" style={{ marginBottom: '8px' }} />,
    desc: "El empaque protege el producto durante el transporte y preserva su frescura. Utilizamos empaques adecuados para cada presentación que minimizan el riesgo de rotura y mantienen las condiciones óptimas del huevo.",
    detalle: ["Empaque protector", "Cubetas resistentes", "Cartones individuales", "Etiquetado correcto"],
    bgImage: "https://images.unsplash.com/photo-1589363460779-cb704ec32b90?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "04",
    titulo: "Distribución",
    icon: <Truck size={32} color="#fff" style={{ marginBottom: '8px' }} />,
    desc: "La última etapa es la más importante: llevar el producto fresco hasta el cliente. Mantenemos condiciones adecuadas durante el transporte para que los huevos lleguen en perfectas condiciones, sin importar el volumen del pedido.",
    detalle: ["Transporte cuidadoso", "Cadena de frescura", "Entregas puntuales", "Cobertura en Guayaquil"],
    bgImage: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800"
  },
];

export default function Calidad() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-page">
        <div className="container-wp">
          <span className="section-eyebrow">Estándares de calidad</span>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '2.75rem', textTransform: 'uppercase', marginBottom: '16px', marginTop: '12px' }}>
            Comprometidos con la calidad
          </h1>
          <div style={{ width: '48px', height: '4px', background: 'var(--brand-yellow)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.7 }}>
            En Huevitos Express la calidad no es una promesa vacía. Es el resultado de un proceso riguroso que acompaña cada huevo desde su selección hasta la entrega en tu puerta.
          </p>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="section-white">
        <div className="container-wp">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-eyebrow">Nuestro enfoque</span>
            <h2 className="section-title" style={{ margin: '12px 0' }}>Calidad en cada etapa</h2>
            <div className="section-divider" style={{ margin: '16px auto 24px' }}></div>
            <p style={{ fontSize: '1.05rem', color: 'var(--fg-muted)', lineHeight: 1.75 }}>
              Desde la selección inicial hasta la entrega final, cada etapa de nuestro proceso está diseñada para preservar la frescura y garantizar que recibas el mejor producto posible. No recortamos pasos ni sacrificamos calidad por rapidez.
            </p>
          </div>
        </div>
      </section>

      {/* LAS 4 ETAPAS */}
      {etapas.map((etapa, i) => (
        <section key={i} className={i % 2 === 0 ? "section-gray" : "section-white"}>
          <div className="container-wp">
            <div className={i % 2 === 0 ? "grid-1-2" : "grid-2-1"} style={{ gap: '64px', alignItems: 'stretch' }}>
              {i % 2 === 0 ? (
                <>
                  {/* Número grande (izquierda) */}
                  <div style={{ textAlign: 'center', height: '100%' }}>
                    <div style={{
                      width: '100%', height: '100%',
                      background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${etapa.bgImage}) center/cover no-repeat`,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      border: '6px solid var(--brand-yellow)'
                    }}>
                      {etapa.icon}
                      <span style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{etapa.num}</span>
                    </div>
                  </div>
                  {/* Contenido (derecha) */}
                  <div>
                    <span className="section-eyebrow">Paso {etapa.num}</span>
                    <h2 className="section-title" style={{ marginTop: '12px' }}>{etapa.titulo}</h2>
                    <div className="section-divider"></div>
                    <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '24px' }}>{etapa.desc}</p>
                    <ul className="grid-2" style={{ listStyle: 'none', padding: 0, margin: 0, gap: '10px' }}>
                      {etapa.detalle.map((d, j) => (
                        <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.875rem', color: 'var(--fg-muted)' }}>
                          <i style={{ color: 'var(--brand-green)', flexShrink: 0, display: 'flex' }}>
                            <Check size={16} />
                          </i>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  {/* Contenido (izquierda) */}
                  <div>
                    <span className="section-eyebrow">Paso {etapa.num}</span>
                    <h2 className="section-title" style={{ marginTop: '12px' }}>{etapa.titulo}</h2>
                    <div className="section-divider"></div>
                    <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '24px' }}>{etapa.desc}</p>
                    <ul className="grid-2" style={{ listStyle: 'none', padding: 0, margin: 0, gap: '10px' }}>
                      {etapa.detalle.map((d, j) => (
                        <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.875rem', color: 'var(--fg-muted)' }}>
                      <i style={{ color: 'var(--brand-green)', flexShrink: 0, display: 'flex' }}>
                            <Check size={16} />
                          </i>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Número grande (derecha) */}
                  <div style={{ textAlign: 'center', height: '100%' }}>
                    <div style={{
                      width: '100%', height: '100%',
                      background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${etapa.bgImage}) center/cover no-repeat`,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      border: '6px solid var(--brand-yellow)'
                    }}>
                      {etapa.icon}
                      <span style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{etapa.num}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* COMPROMISO INSTITUCIONAL */}
      <section className="section-dark">
        <div className="container-wp" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-eyebrow" style={{ background: 'rgba(247,217,30,0.2)', color: '#F7D91E' }}>Compromiso institucional</span>
          <h2 className="section-title-white" style={{ marginTop: '12px', marginBottom: '24px' }}>Nuestra promesa de calidad</h2>
          <div style={{ width: '48px', height: '4px', background: 'var(--brand-yellow)', margin: '0 auto 32px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px' }}>
            En Huevitos Express entendemos que la confianza se construye con consistencia. Cada pedido, grande o pequeño, recibe el mismo nivel de atención y cuidado. No hacemos excepciones cuando se trata de calidad.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '40px' }}>
            Nuestro proceso de selección no es un trámite — es nuestra garantía de que el huevo que llega a tu mesa es fresco, bien clasificado y en perfectas condiciones. Eso es lo que nos comprometemos a entregarte, siempre.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/proceso" className="btn-yellow" id="calidad-ver-proceso">
              Ver proceso completo
            </Link>
            <Link href="/contacto" className="btn-white" id="calidad-contacto">
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
