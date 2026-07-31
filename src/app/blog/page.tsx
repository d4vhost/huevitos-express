import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Huevitos Express",
  description: "Blog de Huevitos Express: consejos sobre nutrición, conservación y consumo de huevos frescos. Aprende a sacar el máximo provecho de tus huevos.",
};

const articulos = [
  {
    slug: "beneficios-nutricionales-del-huevo",
    titulo: "Beneficios nutricionales del huevo: todo lo que debes saber",
    resumen: "El huevo es uno de los alimentos más completos de la naturaleza. Descubre por qué los nutricionistas lo recomiendan como parte de una dieta equilibrada.",
    categoria: "Nutrición",
    fecha: "20 de julio, 2026",
    img: "/hero_huevos.jpg",
    tiempo: "5 min",
  },
  {
    slug: "como-conservar-correctamente-los-huevos",
    titulo: "Cómo conservar correctamente los huevos en casa",
    resumen: "¿Refrigerador o temperatura ambiente? ¿Con la punta hacia arriba o hacia abajo? Te explicamos las mejores prácticas para conservar tus huevos frescos el mayor tiempo posible.",
    categoria: "Consejos",
    fecha: "15 de julio, 2026",
    img: "/producto_carton.jpg",
    tiempo: "4 min",
  },
  {
    slug: "diferencias-huevos-blancos-cafes",
    titulo: "¿Cuál es la diferencia entre huevos blancos y cafés?",
    resumen: "Una pregunta muy común. La respuesta te sorprenderá: el color de la cáscara tiene mucho menos que ver con la calidad de lo que crees.",
    categoria: "Curiosidades",
    fecha: "10 de julio, 2026",
    img: "/producto_cubeta.jpg",
    tiempo: "3 min",
  },
  {
    slug: "ideas-para-el-desayuno-con-huevos",
    titulo: "10 ideas deliciosas para el desayuno con huevos",
    resumen: "Rompe la rutina de los huevos fritos. Te traemos 10 recetas fáciles, rápidas y deliciosas para empezar el día con energía y proteína.",
    categoria: "Recetas",
    fecha: "5 de julio, 2026",
    img: "/hero_huevos.jpg",
    tiempo: "6 min",
  },
  {
    slug: "como-identificar-un-huevo-fresco",
    titulo: "Cómo identificar si un huevo está fresco: 3 métodos infalibles",
    resumen: "Aprende los trucos caseros más confiables para verificar si un huevo está fresco antes de usarlo. Sencillo, rápido y sin herramientas especiales.",
    categoria: "Consejos",
    fecha: "28 de junio, 2026",
    img: "/producto_cubeta.jpg",
    tiempo: "4 min",
  },
  {
    slug: "mitos-sobre-el-consumo-de-huevos",
    titulo: "Los 5 mitos más comunes sobre el consumo de huevos",
    resumen: "¿El huevo sube el colesterol? ¿Solo deberías comer la clara? Desmontamos los mitos más extendidos con base en la evidencia científica actual.",
    categoria: "Nutrición",
    fecha: "20 de junio, 2026",
    img: "/hero_huevos.jpg",
    tiempo: "5 min",
  },
];



export default function Blog() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-page" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(/img_blog.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container-wp">
          <span className="section-eyebrow" data-aos="fade-right">Contenido educativo</span>
          <h1 data-aos="fade-right" style={{ color: '#fff', fontWeight: 900, fontSize: '2.75rem', textTransform: 'uppercase', marginBottom: '16px', marginTop: '12px' }}>
            Blog
          </h1>
          <div style={{ width: '48px', height: '4px', background: 'var(--brand-yellow)', marginBottom: '20px' }}></div>
          <p data-aos="fade-right" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.7 }}>
            Consejos, recetas, curiosidades y todo lo que necesitas saber sobre los huevos frescos para sacarles el máximo provecho.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="section-gray">
        <div className="container-wp" data-aos="fade-up">
          <div className="grid-sidebar-right" style={{ gap: '48px', alignItems: 'start' }}>

            {/* Artículos */}
            <div>
              {/* Destacado */}
              <div style={{ marginBottom: '48px' }}>
                <div className="blog-card grid-2">
                  <div style={{ position: 'relative', height: '300px' }}>
                    <Image src={articulos[0].img} alt={articulos[0].titulo} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="blog-card-body" style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                      <span className="badge-green">{articulos[0].categoria}</span>
                      <span className="badge-yellow">{articulos[0].tiempo} de lectura</span>
                    </div>
                    <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '12px', lineHeight: 1.3 }}>
                      {articulos[0].titulo}
                    </h2>
                    <p style={{ color: 'var(--fg-muted)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '24px' }}>
                      {articulos[0].resumen}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--fg-light)' }}>{articulos[0].fecha}</span>
                      <Link href={`/blog/${articulos[0].slug}`} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }} id={`blog-leer-${articulos[0].slug}`}>
                        Leer artículo →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resto de artículos */}
              <div className="grid-2">
                {articulos.slice(1).map((art, i) => (
                  <div key={i} className="blog-card" data-aos="fade-up" data-aos-delay={i * 100}>
                    <div style={{ position: 'relative', height: '180px' }}>
                      <Image src={art.img} alt={art.titulo} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="blog-card-body">
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                        <span className="badge-green" style={{ fontSize: '0.7rem' }}>{art.categoria}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--fg-light)', alignSelf: 'center' }}>{art.tiempo}</span>
                      </div>
                      <h3 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '8px', lineHeight: 1.35 }}>{art.titulo}</h3>
                      <p style={{ color: 'var(--fg-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>{art.resumen}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--fg-light)' }}>{art.fecha}</span>
                        <Link href={`/blog/${art.slug}`} className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.8rem' }} id={`blog-leer-${art.slug}`}>
                          Leer →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>


              {/* Artículos recientes */}
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderTop: '4px solid var(--brand-yellow)', padding: '24px', marginBottom: '24px' }}>
                <h3 style={{ fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                  Artículos recientes
                </h3>
                {articulos.slice(0, 4).map((art, i) => (
                  <Link key={i} href={`/blog/${art.slug}`} style={{ display: 'flex', gap: '12px', textDecoration: 'none', marginBottom: '16px', alignItems: 'flex-start' }} id={`sidebar-${art.slug}`}>
                    <div style={{ position: 'relative', width: '56px', height: '56px', flexShrink: 0 }}>
                      <Image src={art.img} alt={art.titulo} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--fg)', lineHeight: 1.35, margin: '0 0 4px' }}>{art.titulo}</p>
                      <span style={{ fontSize: '0.75rem', color: 'var(--fg-light)' }}>{art.fecha}</span>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
