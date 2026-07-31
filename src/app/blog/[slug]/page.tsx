import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { slug: string };

const articulos: Record<string, {
  titulo: string;
  resumen: string;
  categoria: string;
  fecha: string;
  img: string;
  tiempo: string;
  contenido: React.ReactNode;
}> = {
  "beneficios-nutricionales-del-huevo": {
    titulo: "Beneficios nutricionales del huevo: todo lo que debes saber",
    resumen: "El huevo es uno de los alimentos más completos de la naturaleza. Descubre por qué los nutricionistas lo recomiendan como parte de una dieta equilibrada.",
    categoria: "Nutrición",
    fecha: "20 de julio, 2026",
    img: "/hero_huevos.jpg",
    tiempo: "5 min",
    contenido: (
      <>
        <p>El huevo es considerado uno de los alimentos más completos que existen. Es una fuente excepcional de proteína de alta calidad, contiene todos los aminoácidos esenciales y aporta vitaminas y minerales fundamentales para el organismo.</p>
        <h2>Proteína de alto valor biológico</h2>
        <p>Un huevo mediano contiene aproximadamente 6 gramos de proteína, distribuidos entre la clara (4 g) y la yema (2 g). Esta proteína tiene un valor biológico muy alto, lo que significa que el cuerpo la aprovecha casi en su totalidad.</p>
        <h2>Vitaminas y minerales esenciales</h2>
        <p>Los huevos son ricos en vitamina D, vitamina B12, vitamina A, ácido fólico, hierro, zinc y selenio. La yema, en particular, contiene luteína y zeaxantina, dos antioxidantes que protegen la salud ocular.</p>
        <h2>¿Cuántos huevos puedo comer por semana?</h2>
        <p>Las recomendaciones actuales de los nutricionistas permiten el consumo de hasta 7 huevos por semana para personas sanas. La evidencia científica actual no encuentra una relación directa entre el consumo moderado de huevos y el aumento del riesgo cardiovascular en personas sin condiciones preexistentes.</p>
        <h2>El huevo en distintas etapas de la vida</h2>
        <p>Desde bebés hasta adultos mayores, el huevo es un alimento recomendado en todas las etapas de la vida. Es fácil de digerir, versátil en la cocina y accesible económicamente, lo que lo convierte en un aliado perfecto para una alimentación balanceada.</p>
      </>
    ),
  },
  "como-conservar-correctamente-los-huevos": {
    titulo: "Cómo conservar correctamente los huevos en casa",
    resumen: "¿Refrigerador o temperatura ambiente? Te explicamos las mejores prácticas para conservar tus huevos frescos el mayor tiempo posible.",
    categoria: "Consejos",
    fecha: "15 de julio, 2026",
    img: "/producto_carton.jpg",
    tiempo: "4 min",
    contenido: (
      <>
        <p>Una de las dudas más comunes en el hogar es cómo conservar correctamente los huevos. ¿Deben ir al refrigerador? ¿Con la punta hacia arriba o hacia abajo? ¿Se pueden lavar antes de guardar? Aquí resolvemos todo.</p>
        <h2>¿Refrigerador o temperatura ambiente?</h2>
        <p>En Ecuador y en climas tropicales, se recomienda guardar los huevos en el refrigerador entre 4°C y 7°C. Esto prolonga su vida útil de 3 semanas (a temperatura ambiente) hasta 5 semanas (refrigerados).</p>
        <h2>Posición correcta</h2>
        <p>Guárdalos con la punta hacia abajo. Esto mantiene la yema centrada y preserva la bolsa de aire en el extremo más ancho, lo que protege el interior del huevo.</p>
        <h2>¿Los lavo antes de guardarlos?</h2>
        <p>No. La cáscara del huevo tiene una capa protectora natural llamada cutícula que evita la entrada de bacterias. Si la lavas, eliminas esa protección y el huevo se vuelve más vulnerable. Solo lávalo justo antes de usarlo.</p>
        <h2>Lejos de olores fuertes</h2>
        <p>La cáscara del huevo es ligeramente porosa, así que puede absorber olores de alimentos cercanos. Evita guardarlos cerca de cebolla, ajo o quesos de olor intenso.</p>
      </>
    ),
  },
  "diferencias-huevos-blancos-cafes": {
    titulo: "¿Cuál es la diferencia entre huevos blancos y cafés?",
    resumen: "Una pregunta muy común. La respuesta te sorprenderá: el color de la cáscara tiene mucho menos que ver con la calidad de lo que crees.",
    categoria: "Curiosidades",
    fecha: "10 de julio, 2026",
    img: "/producto_cubeta.jpg",
    tiempo: "3 min",
    contenido: (
      <>
        <p>Muchas personas asumen que los huevos cafés son más naturales, orgánicos o nutritivos que los blancos. Pero, ¿es eso cierto? La respuesta es no, al menos no por el color.</p>
        <h2>¿Por qué unos son blancos y otros cafés?</h2>
        <p>El color de la cáscara está determinado exclusivamente por la raza de la gallina. Las gallinas con plumas blancas y lóbulos auriculares blancos generalmente ponen huevos blancos. Las de plumas oscuras o cafés suelen poner huevos cafés.</p>
        <h2>¿Hay diferencia nutricional?</h2>
        <p>No. El valor nutricional, el sabor y la calidad del huevo son prácticamente idénticos entre huevos blancos y cafés del mismo tamaño y frescura. La diferencia es puramente estética.</p>
        <h2>¿Por qué los cafés suelen ser más caros?</h2>
        <p>Las gallinas de razas que producen huevos cafés generalmente son más grandes y consumen más alimento, lo que eleva el costo de producción. Eso se refleja en el precio final, pero no en la calidad del huevo.</p>
        <h2>¿Qué sí importa entonces?</h2>
        <p>Lo que realmente importa es la frescura del huevo, la alimentación de las aves y las condiciones en que se seleccionó y distribuyó el producto. En Huevitos Express nos aseguramos de que todos estos factores sean óptimos.</p>
      </>
    ),
  },
  "ideas-para-el-desayuno-con-huevos": {
    titulo: "10 ideas deliciosas para el desayuno con huevos",
    resumen: "Rompe la rutina de los huevos fritos. Te traemos 10 recetas fáciles y rápidas para empezar el día con energía.",
    categoria: "Recetas",
    fecha: "5 de julio, 2026",
    img: "/hero_huevos.jpg",
    tiempo: "6 min",
    contenido: (
      <>
        <p>El desayuno es la comida más importante del día, y los huevos son el ingrediente estrella. Aquí te traemos 10 ideas para que no te aburras de la misma preparación de siempre.</p>
        <h2>1. Huevos revueltos con vegetales</h2>
        <p>Saltea pimiento, cebolla y tomate, añade los huevos batidos y revuelve a fuego medio. Sirve con pan tostado.</p>
        <h2>2. Tortilla española</h2>
        <p>Papa, huevo y cebolla. La receta clásica que nunca falla. Se hace en sartén y se sirve caliente o fría.</p>
        <h2>3. Huevos pochados</h2>
        <p>En agua con un chorrito de vinagre blanco, sumerge el huevo con cuidado. Cocina 3 minutos. Perfecto sobre tostadas.</p>
        <h2>4. Frittata de queso y espinaca</h2>
        <p>Como una tortilla pero se termina en el horno. Agrega espinaca, queso y condimentos a gusto.</p>
        <h2>5. Shakshuka</h2>
        <p>Huevos pochados en salsa de tomate especiada. Un clásico del Medio Oriente que se ha popularizado mundialmente.</p>
        <h2>6. Huevos escalfados con aguacate</h2>
        <p>Aguacate en tostada + huevo pochado + sal, pimienta y limón. Simple, nutritivo y delicioso.</p>
        <h2>7. Omelette de champiñones</h2>
        <p>Batir 2 huevos con sal y pimienta, cocinar en sartén antiadherente, añadir champiñones salteados y doblar.</p>
        <h2>8. Huevo al horno</h2>
        <p>En un molde individual, rompe el huevo, añade crema, queso y hierbas. Hornea 12 minutos a 180°C.</p>
        <h2>9. Sandwich de huevo duro</h2>
        <p>Aplasta huevo duro con mayonesa, mostaza, sal y pimienta. Perfecto en sandwich o como relleno de croissant.</p>
        <h2>10. Burrito de huevo</h2>
        <p>Tortilla de trigo, huevos revueltos, frijoles, queso y salsa. El desayuno completo que te llena de energía para el día.</p>
      </>
    ),
  },
  "como-identificar-un-huevo-fresco": {
    titulo: "Cómo identificar si un huevo está fresco: 3 métodos infalibles",
    resumen: "Aprende los trucos caseros más confiables para verificar si un huevo está fresco antes de usarlo.",
    categoria: "Consejos",
    fecha: "28 de junio, 2026",
    img: "/producto_cubeta.jpg",
    tiempo: "4 min",
    contenido: (
      <>
        <p>¿Alguna vez has tenido dudas sobre si un huevo sigue siendo bueno para consumir? Aquí te enseñamos tres métodos sencillos que puedes hacer en casa sin ningún equipo especial.</p>
        <h2>Método 1: La prueba del agua (el más confiable)</h2>
        <p>Coloca el huevo en un vaso con agua fría. Si se hunde y queda acostado horizontalmente: muy fresco (reciente). Si se hunde pero se inclina: está bien pero tiene algunos días, cómelo pronto. Si flota: no está fresco, descártalo.</p>
        <p>Esta prueba funciona porque a medida que el huevo envejece, la cámara de aire en su interior crece y lo hace flotar.</p>
        <h2>Método 2: Agitar el huevo</h2>
        <p>Acerca el huevo a tu oído y agítalo suavemente. Si sientes que el interior se mueve, el huevo ya no es fresco. Un huevo fresco no hace ruido ni movimiento al agitarse.</p>
        <h2>Método 3: Observar al abrirlo</h2>
        <p>Al abrir el huevo, fíjate en la yema: debe estar elevada y redonda. La clara debe ser firme y espesa. Si la yema está plana y la clara muy líquida y extendida, el huevo está viejo aunque aún pueda ser seguro. Si hay mal olor, descártalo inmediatamente.</p>
        <h2>Tip final</h2>
        <p>La mejor garantía es comprar huevos frescos a distribuidores confiables, como Huevitos Express, donde cada producto pasa por un proceso de selección antes de llegar a tus manos.</p>
      </>
    ),
  },
  "mitos-sobre-el-consumo-de-huevos": {
    titulo: "Los 5 mitos más comunes sobre el consumo de huevos",
    resumen: "¿El huevo sube el colesterol? ¿Solo deberías comer la clara? Desmontamos los mitos más extendidos.",
    categoria: "Nutrición",
    fecha: "20 de junio, 2026",
    img: "/hero_huevos.jpg",
    tiempo: "5 min",
    contenido: (
      <>
        <p>Los huevos son uno de los alimentos más estudiados y también más malentendidos. Con el paso de los años, la ciencia ha revisado muchas de las creencias que existían sobre su consumo. Aquí desmontamos los 5 mitos más comunes.</p>
        <h2>Mito 1: El huevo sube el colesterol peligrosamente</h2>
        <p>La evidencia científica actual indica que para la mayoría de las personas, el colesterol dietético del huevo tiene un impacto mínimo en el colesterol sanguíneo. Lo que más afecta los niveles de colesterol son las grasas saturadas y trans, no el huevo en sí.</p>
        <h2>Mito 2: Solo se debe comer la clara</h2>
        <p>La yema contiene nutrientes esenciales como vitamina D, colina, luteína y zeaxantina. Eliminarla significa perder gran parte del valor nutricional. A menos que tu médico lo indique, comer el huevo completo es lo más recomendable.</p>
        <h2>Mito 3: Los huevos son malos para el corazón</h2>
        <p>Décadas de investigación han encontrado que el consumo moderado de huevos (hasta 7 por semana) no se asocia con mayor riesgo cardiovascular en personas sanas. De hecho, varios estudios han sugerido beneficios protectores.</p>
        <h2>Mito 4: Un huevo "perfecto" siempre tiene la yema de color naranja intenso</h2>
        <p>El color de la yema depende principalmente de la alimentación de la gallina, no de la calidad nutricional del huevo. Una yema más pálida puede ser igual de nutritiva que una naranja oscura.</p>
        <h2>Mito 5: Los huevos crudos son más nutritivos que cocidos</h2>
        <p>Falso. Cocinar el huevo mejora la digestibilidad de sus proteínas. Además, consumir huevos crudos representa riesgo de salmonela. La cocción no destruye los nutrientes esenciales del huevo.</p>
      </>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(articulos).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const art = articulos[slug];
  if (!art) return { title: "Artículo no encontrado | Huevitos Express" };
  return {
    title: `${art.titulo} | Blog Huevitos Express`,
    description: art.resumen,
  };
}

export default async function BlogArticulo({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const art = articulos[slug];
  if (!art) notFound();

  const otros = Object.entries(articulos)
    .filter(([s]) => s !== slug)
    .slice(0, 3);

  return (
    <div>

      {/* HERO */}
      <section style={{ position: 'relative', height: '360px', overflow: 'hidden', borderBottom: '5px solid var(--brand-yellow)' }}>
        <Image src={art.img} alt={art.titulo} fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container-wp" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '48px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <span className="badge-green">{art.categoria}</span>
            <span className="badge-yellow">{art.tiempo} de lectura</span>
          </div>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '2rem', lineHeight: 1.2, maxWidth: '720px' }}>{art.titulo}</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginTop: '12px' }}>{art.fecha}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-white">
        <div className="container-wp">
          <div className="grid-sidebar-right" style={{ gap: '64px', alignItems: 'start' }}>

            {/* Artículo */}
            <article style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--fg-muted)',
            }}>
              <div style={{ marginBottom: '32px' }}>
                <Link href="/blog" className="btn-secondary" id="blog-volver">
                  ← Volver al blog
                </Link>
              </div>
              <style>{`
                article h2 {
                  font-size: 1.4rem;
                  font-weight: 800;
                  color: var(--fg);
                  text-transform: uppercase;
                  margin: 36px 0 16px;
                  padding-bottom: 8px;
                  border-bottom: 3px solid var(--brand-yellow);
                }
                article p {
                  margin-bottom: 20px;
                }
              `}</style>
              {art.contenido}
              <div style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-alt)', borderLeft: '4px solid var(--brand-green)' }}>
                <p style={{ fontWeight: 700, color: 'var(--fg)', marginBottom: '8px' }}>
                  ¿Te gustó este artículo?
                </p>
                <p style={{ margin: 0 }}>
                  Compártelo con alguien que quiera saber más sobre los huevos frescos. Y si tienes preguntas, no dudes en contactarnos por WhatsApp.
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <div>
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderTop: '4px solid var(--brand-green)', padding: '24px', marginBottom: '24px' }}>
                <h3 style={{ fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Otros artículos</h3>
                {otros.map(([s, a], i) => (
                  <Link key={i} href={`/blog/${s}`} style={{ display: 'flex', gap: '12px', textDecoration: 'none', marginBottom: '16px', alignItems: 'flex-start', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }} id={`sidebar-${s}`}>
                    <div style={{ position: 'relative', width: '56px', height: '56px', flexShrink: 0 }}>
                      <Image src={a.img} alt={a.titulo} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <span className="badge-green" style={{ fontSize: '0.65rem', marginBottom: '4px', display: 'inline-block' }}>{a.categoria}</span>
                      <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--fg)', lineHeight: 1.3, margin: 0 }}>{a.titulo}</p>
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
