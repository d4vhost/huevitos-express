'use client';

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

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

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

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
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '56px', alignItems: 'start' }}>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <p style={{ fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--fg-muted)', marginBottom: '16px' }}>
                Categorías
              </p>
              {faqs.map((cat, i) => (
                <a
                  key={i}
                  href={`#cat-${i}`}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    background: '#fff',
                    borderLeft: '4px solid var(--brand-green)',
                    marginBottom: '8px',
                    textDecoration: 'none',
                    color: 'var(--fg)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {cat.categoria}
                </a>
              ))}
              <div style={{ marginTop: '32px', padding: '20px', background: '#fff', borderTop: '4px solid var(--brand-yellow)' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--fg-muted)', marginBottom: '16px' }}>
                  ¿No encontraste tu respuesta?
                </p>
                <a
                  href="https://wa.me/593999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: '0.85rem' }}
                  id="faq-whatsapp"
                >
                  <MessageCircle size={15} />
                  Preguntar por WhatsApp
                </a>
              </div>
            </div>

            {/* Preguntas */}
            <div>
              {faqs.map((cat, ci) => (
                <div key={ci} id={`cat-${ci}`} style={{ marginBottom: '48px' }}>
                  <h2 style={{ fontWeight: 800, fontSize: '1.15rem', textTransform: 'uppercase', margin: '0 0 24px', paddingBottom: '12px', borderBottom: '2px solid var(--brand-green)' }}>
                    {cat.categoria}
                  </h2>
                  {cat.preguntas.map((faq, fi) => {
                    const key = `${ci}-${fi}`;
                    return (
                      <div key={fi} className="faq-item">
                        <button
                          className="faq-question"
                          onClick={() => setOpenItem(openItem === key ? null : key)}
                          aria-expanded={openItem === key}
                          id={`faq-${ci}-${fi}`}
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container-wp" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 900, fontSize: '2rem', textTransform: 'uppercase', marginBottom: '16px' }}>
            ¿Tienes otra pregunta?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '480px', margin: '0 auto 32px' }}>
            Estamos disponibles por WhatsApp para responderte en el menor tiempo posible.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/593999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              id="faq-cta-whatsapp"
              style={{ fontSize: '1.05rem', padding: '16px 36px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <MessageCircle size={18} />
              Hablar por WhatsApp
            </a>
            <Link href="/contacto" className="btn-white" id="faq-cta-contacto" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
              Ver formas de contacto
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
