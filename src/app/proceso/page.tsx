import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Store, Search, BarChart, Box, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestro Proceso | Huevitos Express",
  description: "Conoce el proceso de Huevitos Express: desde la recepción hasta la entrega de huevos frescos en Guayaquil.",
};

const pasos = [
  {
    num: "01",
    titulo: "Recepción",
    icon: <Store size={32} color="#fff" />,
    desc: "Los huevos son recibidos directamente desde los productores. En esta etapa verificamos el origen y las condiciones de llegada para asegurarnos de que el producto cumple con los requisitos mínimos de calidad antes de iniciar el proceso.",
    img: "/hero_huevos.jpg",
  },
  {
    num: "02",
    titulo: "Selección",
    icon: <Search size={32} color="#fff" />,
    desc: "Cada huevo es revisado individualmente. Identificamos y descartamos aquellos que presenten irregularidades en la cáscara, tamaño o estado general. Solo los mejores huevos avanzan al siguiente paso.",
    img: "/producto_cubeta.jpg",
  },
  {
    num: "03",
    titulo: "Clasificación",
    icon: <BarChart size={32} color="#fff" />,
    desc: "Los huevos seleccionados son organizados por tamaño y presentación. Este proceso garantiza que cada cubeta, cartón o docena sea uniforme y que el cliente siempre reciba un producto homogéneo.",
    img: "/producto_carton.jpg",
  },
  {
    num: "04",
    titulo: "Empaque",
    icon: <Box size={32} color="#fff" />,
    desc: "Empacamos cada presentación con cuidado para proteger los huevos durante el transporte. Utilizamos empaques adecuados que minimizan roturas y preservan la frescura del producto hasta llegar al cliente.",
    img: "/producto_carton.jpg",
  },
  {
    num: "05",
    titulo: "Distribución y Entrega",
    icon: <Truck size={32} color="#fff" />,
    desc: "La etapa final: el producto sale hacia su destino. Coordinamos la logística para garantizar entregas puntuales y en perfectas condiciones. Cubrimos hogares, comercios y negocios en Guayaquil.",
    img: "/hero_huevos.jpg",
  },
];

export default function Proceso() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-page">
        <div className="container-wp">
          <span className="section-eyebrow">Transparencia total</span>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '2.75rem', textTransform: 'uppercase', marginBottom: '16px', marginTop: '12px' }}>
            Nuestro proceso
          </h1>
          <div style={{ width: '48px', height: '4px', background: 'var(--brand-yellow)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.7 }}>
            Creemos en la transparencia. Por eso te mostramos exactamente cómo preparamos y distribuimos cada huevo que llega a tu mesa.
          </p>
        </div>
      </section>

      {/* RESUMEN VISUAL DEL PROCESO */}
      <section className="section-white">
        <div className="container-wp">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">De principio a fin</span>
            <h2 className="section-title">5 pasos, un solo objetivo</h2>
            <div className="section-divider" style={{ margin: '16px auto 0' }}></div>
          </div>
          {/* Línea de proceso horizontal */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '0', overflowX: 'auto', paddingBottom: '8px' }}>
            {pasos.map((paso, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '120px', padding: '0 8px' }}>
                  <div style={{
                    width: '80px', height: '80px',
                    background: 'var(--brand-green)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    border: '3px solid var(--brand-yellow)',
                    marginBottom: '12px', flexShrink: 0
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>{paso.icon}</span>
                    <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', fontWeight: 700 }}>{paso.num}</span>
                  </div>
                  <p style={{ textAlign: 'center', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--fg)', lineHeight: 1.3 }}>{paso.titulo}</p>
                </div>
                {i < pasos.length - 1 && (
                  <div style={{ width: '40px', height: '3px', background: 'var(--brand-green)', marginTop: '38px', flexShrink: 0, opacity: 0.4 }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETALLE DE CADA PASO */}
      {pasos.map((paso, i) => (
        <section key={i} className={i % 2 === 0 ? "section-gray" : "section-white"}>
          <div className="container-wp">
            <div className="grid-2" style={{
              gap: '64px',
              alignItems: 'center',
              direction: i % 2 === 1 ? 'rtl' : 'ltr' as 'rtl' | 'ltr'
            }}>
              <div style={{ direction: 'ltr' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    background: 'var(--brand-green)',
                    color: '#fff', fontWeight: 900,
                    fontSize: '1.25rem',
                    width: '56px', height: '56px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '3px solid var(--brand-yellow)', flexShrink: 0
                  }}>
                    {paso.num}
                  </div>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{paso.icon}</span>
                </div>
                <span className="section-eyebrow">Paso {paso.num} de 05</span>
                <h2 className="section-title" style={{ marginTop: '12px' }}>{paso.titulo}</h2>
                <div className="section-divider"></div>
                <p style={{ color: 'var(--fg-muted)', lineHeight: 1.8 }}>{paso.desc}</p>
              </div>
              <div style={{ position: 'relative', height: '320px', border: '4px solid var(--brand-yellow)', direction: 'ltr' }}>
                <Image src={paso.img} alt={paso.titulo} fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cta-strip">
        <div className="container-wp" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 900, fontSize: '2rem', textTransform: 'uppercase', marginBottom: '16px' }}>
            ¿Quieres saber más sobre nuestra calidad?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '480px', margin: '0 auto 32px' }}>
            Visita nuestra página de calidad o contáctanos directamente. Estamos dispuestos a responderte todas tus preguntas.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/calidad" className="btn-yellow" id="proceso-ver-calidad">
              Ver página de calidad
            </Link>
            <Link href="/contacto" className="btn-white" id="proceso-contacto">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
