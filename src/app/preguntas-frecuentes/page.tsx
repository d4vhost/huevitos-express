'use client';

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    categoria: "Sobre el producto",
    preguntas: [
      {
        q: "¿Cuánto duran los huevos frescos?",
        a: "Los huevos frescos pueden durar hasta 3 semanas a temperatura ambiente en un lugar fresco y seco, y hasta 5 semanas correctamente refrigerados entre 4°C y 7°C. Siempre verifica que la cáscara esté intacta y sin grietas.",
      },
      {
        q: "¿Cómo puedo saber si un huevo está fresco?",
        a: "Una prueba sencilla: coloca el huevo en un vaso con agua. Si se hunde y queda acostado, está muy fresco. Si se inclina ligeramente, tiene algunos días pero es apto para consumo. Si flota, no está fresco y no debes consumirlo.",
      },
      {
        q: "¿Cuál es la diferencia entre huevos blancos y cafés?",
        a: "La diferencia es principalmente estética y depende de la raza de la gallina. El color de la cáscara no afecta el sabor, el valor nutricional ni la frescura del huevo. Ambos son igualmente nutritivos y deliciosos.",
      },
      {
        q: "¿Los huevos de Huevitos Express son naturales?",
        a: "Sí. Comercializamos huevos frescos provenientes de aves criadas con alimentación adecuada. Nuestro proceso de selección garantiza que el producto que recibes es natural y de calidad.",
      },
    ],
  },
  {
    categoria: "Almacenamiento",
    preguntas: [
      {
        q: "¿Cómo debo almacenar los huevos en casa?",
        a: "Lo ideal es guardarlos en el refrigerador, con la punta hacia abajo, lejos de alimentos con olores fuertes. No los laves antes de guardarlos, ya que la cáscara tiene una capa protectora natural que se elimina con el lavado.",
      },
      {
        q: "¿Puedo congelar los huevos?",
        a: "No se recomienda congelar huevos con cáscara. Sin embargo, puedes batir los huevos crudos (sin cáscara), colocarlos en recipientes herméticos y congelarlos hasta por 6 meses. Las claras y yemas también se pueden congelar por separado.",
      },
    ],
  },
  {
    categoria: "Pedidos y distribución",
    preguntas: [
      {
        q: "¿Cómo puedo realizar un pedido?",
        a: "Puedes contactarnos directamente por WhatsApp al número indicado en nuestra página de contacto, o enviarnos un correo electrónico. Coordinamos la entrega según tu ubicación en Guayaquil y el volumen del pedido.",
      },
      {
        q: "¿Tienen venta al por mayor?",
        a: "Sí, atendemos pedidos al por mayor para restaurantes, tiendas, supermercados y distribuidores. Los precios y condiciones varían según el volumen. Contáctanos para que te asesoremos con el mejor plan para tu negocio.",
      },
      {
        q: "¿Realizan entregas a domicilio?",
        a: "Sí, distribuimos en Guayaquil. Los detalles de la entrega (zona, horario, costo) se coordinan directamente con el cliente al momento de hacer el pedido. ¡No dudes en consultarnos!",
      },
      {
        q: "¿Cuál es el pedido mínimo?",
        a: "El pedido mínimo varía según la presentación. Puedes pedir desde una docena si eres consumidor final. Para negocios y distribuidores, coordinamos pedidos por cubetas o cantidades mayores. Consulta tu caso específico.",
      },
    ],
  },
];

export default function PreguntasFrecuentes() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <div>

      {/* HERO */}
      <section className="hero-page">
        <div className="container-wp">
          <span className="section-eyebrow">Resolvemos tus dudas</span>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '2.75rem', textTransform: 'uppercase', marginBottom: '16px', marginTop: '12px' }}>
            Preguntas frecuentes
          </h1>
          <div style={{ width: '48px', height: '4px', background: 'var(--brand-yellow)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.7 }}>
            Aquí encontrarás respuesta a las preguntas más comunes sobre nuestros productos, pedidos, conservación y distribución.
          </p>
        </div>
      </section>

      {/* FAQS */}
      <section className="section-gray">
        <div className="container-wp">
          <div className="grid-sidebar-left" style={{ gap: '56px', alignItems: 'start' }}>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <p style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--fg-muted)', marginBottom: '16px' }}>
                Categorías
              </p>
              {faqs.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(i)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 16px',
                    background: activeCategory === i ? 'var(--brand-green)' : '#fff',
                    border: 'none',
                    borderLeft: `4px solid ${activeCategory === i ? 'var(--brand-yellow)' : 'var(--brand-green)'}`,
                    marginBottom: '8px',
                    color: activeCategory === i ? '#fff' : 'var(--fg)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    cursor: 'pointer'
                  }}
                >
                  {cat.categoria}
                </button>
              ))}
            </div>

            {/* Preguntas */}
            <div>
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontWeight: 800, fontSize: '1.15rem', textTransform: 'uppercase', margin: '0 0 24px', paddingBottom: '12px', borderBottom: '2px solid var(--brand-green)' }}>
                  {faqs[activeCategory].categoria}
                </h2>
                {faqs[activeCategory].preguntas.map((faq, fi) => {
                  const key = `${activeCategory}-${fi}`;
                  return (
                    <div key={fi} className="faq-item">
                      <button
                        className="faq-question"
                        onClick={() => setOpenItem(openItem === key ? null : key)}
                        aria-expanded={openItem === key}
                        id={`faq-${activeCategory}-${fi}`}
                      >
                        <span>{faq.q}</span>
                        {openItem === key
                          ? <ChevronUp size={16} color="var(--brand-green)" style={{ flexShrink: 0, marginLeft: '16px' }} />
                          : <ChevronDown size={16} color="var(--brand-green)" style={{ flexShrink: 0, marginLeft: '16px' }} />
                        }
                      </button>
                      {openItem === key && (
                        <div className="faq-answer">
                          <p style={{ margin: 0 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
