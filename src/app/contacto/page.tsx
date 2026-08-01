'use client';

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, Clock, Phone, AtSign, Globe } from "lucide-react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    tipo: '',
    mensaje: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <div>

      {/* HERO */}
      <section className="hero-page" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(/img_contactanos.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container-wp">
          <span className="section-eyebrow">Estamos aquí para ti</span>
          <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '2.75rem', textTransform: 'uppercase', marginBottom: '16px', marginTop: '12px' }}>
            Contáctanos
          </h1>
          <div style={{ width: '48px', height: '4px', background: 'var(--brand-yellow)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.7 }}>
            ¿Tienes preguntas, quieres hacer un pedido o necesitas información sobre distribución? Escríbenos y te respondemos a la brevedad.
          </p>
        </div>
      </section>

      {/* CANALES RÁPIDOS */}
      <section className="section-gray">
        <div className="container-wp">
          <div className="grid-4" style={{ gap: '24px' }}>
            {[
              { icon: <MessageCircle size={24} color="#25D366" />, titulo: 'WhatsApp', valor: '+593 99 548 9413', sub: 'Respuesta rápida', link: 'https://wa.me/593995489413' },
              { icon: <Mail size={24} color="var(--brand-green)" />, titulo: 'Correo', valor: 'info@huevitosexpress.com', sub: 'Respuesta en 24h', link: 'mailto:info@huevitosexpress.com' },
              { icon: <MapPin size={24} color="var(--brand-green)" />, titulo: 'Dirección', valor: 'Guayaquil, Ecuador', sub: 'Sede principal', link: null },
              { icon: <Clock size={24} color="var(--brand-green)" />, titulo: 'Horarios', valor: 'Lun – Sáb', sub: '7:00 AM – 6:00 PM', link: null },
            ].map((item, i) => {
              const CardContent = (
                <>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', color: 'var(--fg)' }}>{item.titulo}</h3>
                  <p style={{ color: item.link ? 'var(--brand-green)' : 'var(--fg)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px', textDecoration: 'none', wordBreak: 'break-word' }}>{item.valor}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--fg-light)', margin: 0 }}>{item.sub}</p>
                </>
              );
              return item.link ? (
                <a key={i} href={item.link} className="card-wp" target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>
                  {CardContent}
                </a>
              ) : (
                <div key={i} className="card-wp" style={{ textAlign: 'center' }}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORMULARIO + INFO */}
      <section className="section-white">
        <div className="container-wp">
          <div className="grid-2-1" style={{ gap: '64px', alignItems: 'start' }}>

            <div>
              <span className="section-eyebrow">Envíanos un mensaje</span>
              <h2 className="section-title" style={{ marginTop: '12px' }}>Formulario de contacto</h2>
              <div className="section-divider"></div>

              {enviado ? (
                <div style={{ padding: '32px', background: '#f0fff0', border: '2px solid var(--brand-green)', textAlign: 'center' }}>
                  <h3 style={{ fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>¡Mensaje enviado!</h3>
                  <p style={{ color: 'var(--fg-muted)' }}>Gracias por contactarnos. Te responderemos a la brevedad. También puedes escribirnos directamente por WhatsApp para una respuesta más rápida.</p>
                  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
                    <a href="https://wa.me/593995489413" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" id="contacto-whatsapp-enviado">
                      <MessageCircle size={16} />
                      Contactar por WhatsApp
                    </a>
                    <button onClick={() => setEnviado(false)} className="btn-secondary">
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="grid-2" style={{ gap: '20px' }}>
                    <div>
                      <label className="label-wp" htmlFor="nombre">Nombre completo *</label>
                      <input className="input-wp" type="text" id="nombre" name="nombre" required placeholder="Tu nombre" value={form.nombre} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="label-wp" htmlFor="empresa">Empresa / Negocio</label>
                      <input className="input-wp" type="text" id="empresa" name="empresa" placeholder="Opcional" value={form.empresa} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="grid-2" style={{ gap: '20px' }}>
                    <div>
                      <label className="label-wp" htmlFor="telefono">Teléfono / WhatsApp *</label>
                      <input className="input-wp" type="tel" id="telefono" name="telefono" required placeholder="+593 99..." value={form.telefono} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="label-wp" htmlFor="email">Correo electrónico</label>
                      <input className="input-wp" type="email" id="email" name="email" placeholder="tu@correo.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <label className="label-wp" htmlFor="tipo">¿Qué necesitas?</label>
                    <select className="input-wp" id="tipo" name="tipo" value={form.tipo} onChange={handleChange}>
                      <option value="">Selecciona una opción</option>
                      <option value="pedido">Hacer un pedido</option>
                      <option value="mayorista">Información mayorista</option>
                      <option value="precio">Consulta de precios</option>
                      <option value="distribucion">Información de distribución</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-wp" htmlFor="mensaje">Mensaje *</label>
                    <textarea className="input-wp" id="mensaje" name="mensaje" required rows={5} placeholder="Escribe tu mensaje..." value={form.mensaje} onChange={handleChange} style={{ resize: 'vertical' }}></textarea>
                  </div>
                  <div>
                    <button type="submit" className="btn-primary" id="contacto-enviar" style={{ fontSize: '1rem', padding: '14px 32px', width: '100%' }}>
                      Enviar mensaje
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div>
              <span className="section-eyebrow">Redes sociales</span>
              <h2 className="section-title" style={{ marginTop: '12px', fontSize: '1.5rem' }}>Síguenos</h2>
              <div className="section-divider"></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  { icon: <Globe size={18} color="#fff" />, label: 'Facebook', handle: '@huevitosfoodtruck', link: 'https://www.facebook.com/huevitosfoodtruck/', color: '#1877F2' },
                  { icon: <AtSign size={18} color="#fff" />, label: 'Instagram', handle: '@huevitosexpress', link: '#', color: '#E4405F' },
                  { icon: <Phone size={18} color="#fff" />, label: 'WhatsApp', handle: '+593 99 548 9413', link: 'https://wa.me/593995489413', color: '#25D366' },
                ].map((red, i) => (
                  <a key={i} href={red.link} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '16px', background: 'var(--bg-alt)', border: '1px solid var(--border)', textDecoration: 'none' }}
                    id={`contacto-${red.label.toLowerCase()}`}
                  >
                    <div style={{ width: '40px', height: '40px', background: red.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {red.icon}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--fg)', margin: '0 0 2px' }}>{red.label}</p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', margin: 0 }}>{red.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{ background: 'var(--brand-green)', padding: '24px' }}>
                <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', marginBottom: '12px' }}>Respuesta inmediata</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', marginBottom: '16px', lineHeight: 1.6 }}>Para pedidos urgentes, la forma más rápida es WhatsApp.</p>
                <a href="https://wa.me/593995489413" target="_blank" rel="noopener noreferrer" className="btn-yellow" style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }} id="contacto-cta-wa">
                  <MessageCircle size={16} />
                  Abrir WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="section-gray" id="mapa">
        <div className="container-wp">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-eyebrow">Dónde estamos</span>
            <h2 className="section-title">Sede en Guayaquil</h2>
            <div className="section-divider" style={{ margin: '16px auto 0' }}></div>
          <div style={{ width: '100%', height: '400px', border: '4px solid var(--brand-green)', overflow: 'hidden', position: 'relative' }}>
            {/* Custom Native-Looking Place Card */}
            <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#fff', padding: '12px 16px', borderRadius: '2px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '24px', minWidth: '280px', fontFamily: 'Roboto, Arial, sans-serif' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: '14px', color: '#1a73e8', marginBottom: '2px', whiteSpace: 'nowrap' }}>Huevitos Express</div>
                <div style={{ fontSize: '12px', color: '#555', whiteSpace: 'nowrap' }}>Sede Guayaquil</div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a href="https://www.google.com/maps/dir//-2.19394,-79.88697" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: '#f1f3f4', transition: 'background 0.2s', textDecoration: 'none' }} title="Cómo llegar" onMouseOver={(e) => e.currentTarget.style.background = '#e8eaed'} onMouseOut={(e) => e.currentTarget.style.background = '#f1f3f4'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                </a>
                <a href="https://maps.google.com/?q=-2.19394,-79.88697" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: '#f1f3f4', transition: 'background 0.2s', textDecoration: 'none' }} title="Ver el mapa más grande" onMouseOver={(e) => e.currentTarget.style.background = '#e8eaed'} onMouseOut={(e) => e.currentTarget.style.background = '#f1f3f4'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d-79.88697!3d-2.19394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMTEnMzguMiJTIDc5wrA1MycxMy4xIlc!5e0!3m2!1ses!2sec!4v1720000000000!5m2!1ses!2sec"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Huevitos Express - Guayaquil"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}
