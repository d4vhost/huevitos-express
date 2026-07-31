import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, MapPin, Leaf, Target, Eye, Egg, HandshakeIcon, CheckCircle, TrendingUp, ShieldCheck, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Huevitos Express",
  description: "Conoce la historia de Huevitos Express, nuestra misión, visión, valores y el compromiso de la familia Uzcátegui con la distribución de huevos frescos en Guayaquil.",
};

const valores = [
  { icon: <CheckCircle size={40} color="var(--brand-green)" />, title: 'Compromiso', desc: 'Nos comprometemos con cada cliente, asegurando que cada pedido sea entregado a tiempo y en perfectas condiciones.' },
  { icon: <ShieldCheck size={40} color="var(--brand-green)" />, title: 'Responsabilidad', desc: 'Actuamos con responsabilidad en cada etapa del proceso, desde la selección hasta la entrega final del producto.' },
  { icon: <HandshakeIcon size={40} color="var(--brand-green)" />, title: 'Confianza', desc: 'Construimos relaciones de largo plazo con nuestros clientes basadas en la transparencia y la honestidad.' },
  { icon: <Award size={40} color="var(--brand-green)" />, title: 'Calidad', desc: 'La calidad no es una opción, es nuestro estándar. Cada huevo que distribuimos ha sido seleccionado con cuidado.' },
];

export default function Nosotros() {
  return (
    <div>

      {/* HERO PAGE */}
      <section className="hero-page" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(/img_nosotros.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container-wp">
          <span className="section-eyebrow" data-aos="fade-right">Huevitos Express</span>
          <h1 data-aos="fade-right" style={{ color: '#fff', fontWeight: 900, fontSize: '2.75rem', textTransform: 'uppercase', marginBottom: '16px', marginTop: '12px' }}>
            Nuestra historia
          </h1>
          <div style={{ width: '48px', height: '4px', background: 'var(--brand-yellow)', marginBottom: '20px' }}></div>
          <p data-aos="fade-right" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.7 }}>
            Una marca nacida del compromiso familiar con la calidad avícola, dedicada a llevar huevos frescos a los hogares y negocios de Guayaquil.
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="section-white">
        <div className="container-wp" data-aos="fade-up">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'stretch' }}>
            <div style={{ position: 'relative', height: '100%', minHeight: '300px', border: '4px solid var(--brand-green)' }}>
              <Image
                src="/logo_huevos.jpg"
                alt="Historia de Huevitos Express"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
              />
            </div>
            <div>
              <span className="section-eyebrow">Cómo nació</span>
              <h2 className="section-title">Historia de Huevitos Express</h2>
              <div className="section-divider"></div>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
                Huevitos Express nace como una respuesta directa a la necesidad del mercado guayaquileño de contar con un proveedor de huevos frescos de confianza. Desde sus primeros días, la marca se enfocó en ofrecer un producto seleccionado, con procesos de calidad bien definidos y una atención personalizada que marcara la diferencia.
              </p>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
                La marca opera desde Guayaquil y atiende tanto a hogares como a comercios y negocios que requieren un suministro confiable y constante de huevos frescos. Gracias a nuestra red de distribución, garantizamos entregas oportunas que preservan la frescura del producto.
              </p>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75 }}>
                Con el paso del tiempo, Huevitos Express ha consolidado su presencia en el mercado local, ganándose la confianza de sus clientes a través de la consistencia en la calidad y la rapidez en el servicio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTRA EXPERIENCIA */}
      <section className="section-gray">
        <div className="container-wp" data-aos="fade-up">
          <div className="grid-2-1" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">Respaldo familiar</span>
              <h2 className="section-title">Nuestra experiencia en el sector avícola</h2>
              <div className="section-divider"></div>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
                Huevitos Express forma parte de una trayectoria familiar vinculada al sector avícola. La experiencia adquirida durante años en producción y nutrición animal permite comprender la importancia de ofrecer productos frescos y de calidad a nuestros clientes.
              </p>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75 }}>
                Esta experiencia familiar nos ha dado las herramientas para entender cada etapa del ciclo productivo del huevo: desde la alimentación de las aves hasta la selección, clasificación y distribución del producto final. Es un conocimiento que se traduce directamente en la calidad que llega a tu mesa.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="card-wp" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                <div className="icon-box"><Award size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', marginBottom: '4px' }}>Familia Uzcátegui</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', margin: 0 }}>Trayectoria avícola comprobada</p>
                </div>
              </div>
              <div className="card-wp" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                <div className="icon-box"><MapPin size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', marginBottom: '4px' }}>Sede en Guayaquil</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', margin: 0 }}>Distribución local y eficiente</p>
                </div>
              </div>
              <div className="card-wp" style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '20px' }}>
                <div className="icon-box"><Leaf size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', marginBottom: '4px' }}>Selección rigurosa</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', margin: 0 }}>Cada huevo es revisado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="section-white">
        <div className="container-wp" data-aos="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">Propósito</span>
            <h2 className="section-title">Misión y Visión</h2>
            <div className="section-divider" style={{ margin: '16px auto 0' }}></div>
          </div>
          <div className="grid-2">
            <div className="card-wp">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div className="icon-box"><Rocket size={24} /></div>
                <h3 style={{ fontWeight: 800, fontSize: '1.25rem', textTransform: 'uppercase', margin: 0 }}>Nuestra Misión</h3>
              </div>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, margin: 0 }}>
                Comercializar y distribuir huevos frescos de la más alta calidad a hogares, comercios y negocios de Guayaquil, garantizando procesos responsables desde la selección hasta la entrega, con un servicio cercano y confiable que satisfaga las necesidades de cada uno de nuestros clientes.
              </p>
            </div>
            <div className="card-wp">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div className="icon-box"><Eye size={24} /></div>
                <h3 style={{ fontWeight: 800, fontSize: '1.25rem', textTransform: 'uppercase', margin: 0 }}>Nuestra Visión</h3>
              </div>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, margin: 0 }}>
                Consolidarnos como la marca de referencia en la distribución de huevos frescos en Guayaquil y la región, reconocida por la calidad constante de nuestros productos, la confianza de nuestros clientes y la mejora continua de nuestros procesos de selección y distribución.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="section-gray">
        <div className="container-wp" data-aos="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow">Lo que nos define</span>
            <h2 className="section-title">Nuestros valores</h2>
            <div className="section-divider" style={{ margin: '16px auto 0' }}></div>
          </div>
          <div className="grid-4">
            {valores.map((v, i) => (
              <div key={i} className="card-wp" data-aos="fade-up" data-aos-delay={i * 100} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '2.5rem', marginBottom: '16px' }}>{v.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--fg-muted)', lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRO COMPROMISO */}
      <section className="section-dark">
        <div className="container-wp" data-aos="fade-up">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow" style={{ background: 'rgba(247,217,30,0.2)', color: '#F7D91E' }}>Nuestro compromiso</span>
              <h2 className="section-title-white" style={{ marginTop: '12px' }}>Lo que nos impulsa cada día</h2>
              <div style={{ width: '48px', height: '4px', background: 'var(--brand-yellow)', margin: '16px 0 32px' }}></div>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '16px' }}>
                En Huevitos Express nos comprometemos a mantener los más altos estándares de frescura y calidad en cada producto que distribuimos. No es solo un trabajo — es el reflejo de los valores que la familia Uzcátegui ha cultivado en el sector avícola.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.75 }}>
                Trabajamos continuamente en mejorar nuestros procesos de selección, almacenamiento y distribución para que cada cliente reciba el mejor producto posible, con la atención y el respeto que merece.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: <Egg size={24} color="var(--brand-yellow)" />, label: 'Frescura garantizada', desc: 'Cada huevo pasa por selección antes de distribuirse.' },
                { icon: <HandshakeIcon size={24} color="var(--brand-yellow)" />, label: 'Atención personalizada', desc: 'Servicio directo, sin intermediarios.' },
                { icon: <CheckCircle size={24} color="var(--brand-yellow)" />, label: 'Calidad consistente', desc: 'El mismo estándar en cada pedido, siempre.' },
                { icon: <TrendingUp size={24} color="var(--brand-yellow)" />, label: 'Mejora continua', desc: 'Siempre buscando cómo servirte mejor.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container-wp" data-aos="fade-up">
          <h2 style={{ color: '#fff', fontWeight: 900, fontSize: '2rem', textTransform: 'uppercase', marginBottom: '16px' }}>
            Conoce nuestros productos
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '480px', margin: '0 auto 32px' }}>
            Descubre todas las presentaciones disponibles y encuentra la que mejor se adapta a tus necesidades.
          </p>
          <Link href="/productos" className="btn-yellow" id="nosotros-cta-productos" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
            Ver nuestros productos →
          </Link>
        </div>
      </section>

    </div>
  );
}
