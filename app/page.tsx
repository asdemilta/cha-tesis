"use client";

export default function Home() {
  const sections = ['Proyecto', 'Lugar', 'Arquitectura', 'Programa', 'Viabilidad', 'Documentación'];

  const plantas = [
    { nivel: 'Subsuelo', desc: 'Cocheras en subsuelo con pisada total del lote. El sector no edificable en altura se convierte en techo verde contemplativo desde planta baja.', tag: 'Infraestructura' },
    { nivel: 'Planta Baja', desc: 'Ecosistema de servicios compartidos. Ingreso peatonal fusionado con amenities, gym (150 m²), local gastronómico en esquina (150 m²) y coworking (55 m²).', tag: 'Activación Urbana' },
    { nivel: 'Piso 1', desc: 'Unidades funcionales tipo A y B. Monoambientes de 35–40 m² y departamentos de 2 ambientes de 50–60 m² con orientación norte.', tag: 'Residencial' },
    { nivel: 'Piso 2', desc: 'Unidades funcionales tipo A y B. Continuación del módulo residencial con variaciones de planta según geometría del lote.', tag: 'Residencial' },
    { nivel: 'Piso 3', desc: 'Unidades de 2 y 3 ambientes (75–90 m²). Mayor superficie por retranqueo reglamentario. Expansiones hacia frente Charlone.', tag: 'Residencial' },
    { nivel: 'Piso 4 / Terraza', desc: 'Nivel superior con unidades premium y terraza comunitaria. Volumetría estricta de 14.60 m optimizada para unidades funcionales.', tag: 'Culmine' },
  ];

  const tipologias = [
    { tipo: 'Monoambiente', sup: '35–40 m²', uni: 4, pct: 31 },
    { tipo: '2 Ambientes', sup: '50–60 m²', uni: 6, pct: 46 },
    { tipo: '3 Ambientes', sup: '75–90 m²', uni: 3, pct: 23 },
  ];

  const mercado = [
    { zona: 'Palermo', valor: 3390, color: '#6b7280' },
    { zona: 'Colegiales', valor: 2788, color: '#9ca3af' },
    { zona: 'cH°a · Chacarita', valor: 2137, color: '#B8884E' },
  ];

  const referentes = [
    { nombre: 'Vivalto — Najas Arquitectos', tipo: 'Referente local' },
    { nombre: 'Sens Palermo Green', tipo: 'Referente local' },
    { nombre: 'MO288 / HGR Arquitectos', tipo: 'ArchDaily México' },
    { nombre: 'Londres 187 / CCA', tipo: 'ArchDaily México' },
  ];

  const galeria = [
    { src: '/imagenes/patio-gastronomico.jpg', label: 'Patio Gastronómico', desc: 'Atrio interior · Planta Baja' },
    { src: '/imagenes/rooftop.jpg', label: 'Rooftop', desc: 'Terraza comunitaria · Piso 4' },
    { src: '/imagenes/rooftop1.jpg', label: 'Rooftop · Vista ciudad', desc: 'Skyline de Buenos Aires' },
    { src: '/imagenes/contemplativo.png', label: 'Patio Contemplativo', desc: 'Techo verde · Subsuelo' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ background: 'rgba(14,12,10,0.93)', borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black tracking-[-0.02em]" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
              cH<span style={{ color: 'var(--bronze-lt)' }}>°</span>a
            </h1>
            <p className="text-xs uppercase tracking-widest mt-0.5" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>
              Proyecto Final · Tecnicatura
            </p>
          </div>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>
            {sections.map((item) => (
              <a key={item} href={`#${item}`} className="transition-colors hover:text-white"
                style={{ color: 'var(--text-dim)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze-lt)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'var(--bg)' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute right-[-5%] top-[10%] h-[55vw] w-[55vw] rounded-full border opacity-20" style={{ borderColor: 'var(--border)' }} />
        <div className="absolute right-[5%] top-[20%] h-[35vw] w-[35vw] rounded-full border opacity-10" style={{ borderColor: 'var(--border)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-16 items-end">
            <div>
              <p className="uppercase tracking-[0.4em] text-xs mb-12" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--bronze)' }}>
                Charlone 1116 · Chacarita · Buenos Aires
              </p>
              <div className="flex items-start leading-none mb-10" style={{ gap: '0.1em' }}>
                <span className="font-black" style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(6rem,14vw,13rem)', letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--text)' }}>cH</span>
                <span className="font-black" style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(3rem,7vw,7rem)', marginTop: '0.15em', lineHeight: 1, color: 'var(--bronze-lt)' }}>°</span>
                <span className="font-black" style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(6rem,14vw,13rem)', letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--text)' }}>a</span>
              </div>
              <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-light italic" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text-mid)' }}>
                Moldear, habitar.. y permanecer.
              </p>
            </div>

            {/* Ficha técnica */}
            <div className="rounded-2xl p-8 border" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
              <p className="uppercase tracking-widest text-xs mb-6 pb-4 border-b" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--bronze)', borderColor: 'var(--border)' }}>
                Ficha técnica
              </p>
              <dl className="space-y-0">
                {[
                  ['Tipología', 'Edificio Multifamiliar'],
                  ['Ubicación', 'Charlone 1116, Chacarita'],
                  ['Lote', '5 parcelas · ~750 m²'],
                  ['Altura máx.', '14.60 m · 4 plantas + SS'],
                  ['Unidades', '13 UF residenciales'],
                  ['Planta baja', 'Gym · Gastronomía · Cowork'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
                    <dt className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>{k}</dt>
                    <dd className="text-sm text-right font-light" style={{ color: 'var(--text)' }}>{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs mt-6 pt-4 border-t" style={{ borderColor: 'var(--border)', color: 'var(--text-dim)', fontFamily: 'var(--font-space), sans-serif' }}>
                TIF-Demilta-cH°a-2026<br />Proyecto y Construcción de Obras
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bronze-line" />

      {/* PROYECTO */}
      <section id="Proyecto" className="relative py-28 overflow-hidden" style={{ background: 'var(--bg3)' }}>
        <div className="absolute inset-0 z-0">
          <img src="/imagenes/contemplativo.png" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: 'rgba(14,12,10,0.88)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-widest text-xs mb-6" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--bronze)' }}>
              — 01 · Proyecto
            </p>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)' }}>
              Arquitectura de autor<br />con lógica residencial<br />contemporánea
            </h3>
            <div className="w-16 h-px mb-8" style={{ background: 'var(--bronze)' }} />
            <p className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>
              Tesis · Proyecto y Construcción de Obras
            </p>
          </div>
          <div className="space-y-6 leading-relaxed text-lg pt-4" style={{ color: 'var(--text-mid)' }}>
            <p>
              <em style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)' }}>cH°a</em> surge como un edificio residencial emplazado en Chacarita,
              integrando una mirada técnica con una búsqueda espacial ligada al recorrido,
              la contemplación y la permanencia material.
            </p>
            <p>
              El nombre del proyecto articula el hormigón armado con la identidad del autor,
              proponiendo una arquitectura tectónica, silenciosa y precisa donde la estructura
              y la atmósfera toman protagonismo.
            </p>
            <p>
              La intención de generar espacios de admiración, meditación y pequeños laberintos
              es constante: esas sensaciones que se obtienen recorriendo lo natural y también la arquitectura.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[['60%', 'Tectónico'], ['40%', 'Contemplativo'], ['13', 'Unidades']].map(([n, l]) => (
                <div key={l} className="rounded-xl p-5 text-center border" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
                  <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--bronze-lt)' }}>{n}</div>
                  <div className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUGAR */}
      <section id="Lugar" className="py-28" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-xs mb-6" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--bronze)' }}>
            — 02 · El Lugar
          </p>
          <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)' }}>
                Chacarita como tejido<br />emergente
              </h3>
              <div className="w-16 h-px mb-8" style={{ background: 'var(--bronze)' }} />
              <div className="space-y-5 leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                <p>El proyecto se inserta en Charlone 1116, dentro de un sector de baja densidad edilicia en altura, con tejido mayormente residencial y un crecimiento sostenido de la oferta gastronómica.</p>
                <p>Chacarita absorbe la demanda de Palermo porque ya posee los fundamentales urbanos instalados: conectividad vía Subte B y Tren Urquiza, consolidación comercial sobre Av. Dorrego, y un polo gastronómico y de lifestyle en expansión.</p>
                <p>Ante la saturación de Palermo y el alza de costos en Colegiales, <strong style={{ color: 'var(--text)' }}>Chacarita y zonas aledañas concentrarán entre el 15% y el 20% de la actividad proyectada para 2026</strong>.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { titulo: 'Conectividad Estratégica', desc: 'Subte B / Tren Urquiza. Acceso directo al centro metropolitano.' },
                { titulo: 'Consolidación Comercial', desc: 'Av. Dorrego como eje comercial en crecimiento sostenido.' },
                { titulo: 'Polo Gastronómico', desc: 'Boom gastronómico y lifestyle que consolida identidad barrial.' },
                { titulo: 'Baja Densidad', desc: 'Tejido de oportunidad: pocos edificios en altura, normativa favorable.' },
              ].map((item) => (
                <div key={item.titulo} className="rounded-xl p-6 border" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
                  <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)' }}>{item.titulo}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MAPA */}
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
            <div className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ background: 'var(--bg2)' }}>
              <div>
                <p className="text-sm font-light" style={{ color: 'var(--text)' }}>Charlone 1116 · Chacarita · Buenos Aires</p>
                <p className="text-xs mt-1 uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>-34.5808° S · -58.4583° O</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Charlone+1116,+Chacarita,+Buenos+Aires,+Argentina&travelmode=driving" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors"
                  style={{ background: 'var(--bronze)', fontFamily: 'var(--font-space), sans-serif' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                  Cómo llegar
                </a>
                {[
                  { label: 'Ver en Maps', href: 'https://www.google.com/maps/search/?api=1&query=Charlone+1116,+Chacarita,+Buenos+Aires,+Argentina' },
                  { label: 'Vista Satélite', href: 'https://www.google.com/maps/@-34.5808563,-58.4583145,18z/data=!3m1!1e3' },
                  { label: 'Street View', href: 'https://www.google.com/maps/@-34.5808563,-58.4583145,3a,75y,90t,90r' },
                ].map(t => (
                  <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors border"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-dim)', fontFamily: 'var(--font-space), sans-serif' }}>
                    {t.label}
                  </a>
                ))}
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.5!2d-58.4583145!3d-34.5808563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5e0e8b5b5b5%3A0x0!2sCharlone+1116%2C+Chacarita%2C+Buenos+Aires!5e1!3m2!1ses!2sar!4v1"
              width="100%" height="480" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Charlone 1116 · Chacarita"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <p className="text-xs uppercase tracking-widest self-center mr-2" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>Transporte cercano:</p>
            {[
              { label: 'Subte B · Dorrego', href: 'https://www.google.com/maps/search/subte+B+Dorrego+Chacarita/@-34.5808563,-58.4583145,15z' },
              { label: 'Tren Urquiza · Chacarita', href: 'https://www.google.com/maps/search/estacion+Chacarita+tren+Urquiza/@-34.5808563,-58.4583145,15z' },
              { label: 'Subte B · Lacroze', href: 'https://www.google.com/maps/search/subte+B+Federico+Lacroze+Chacarita/@-34.5808563,-58.4583145,15z' },
              { label: 'Av. Corrientes', href: 'https://www.google.com/maps/search/Avenida+Corrientes+Chacarita/@-34.5808563,-58.4583145,15z' },
              { label: 'Av. Dorrego', href: 'https://www.google.com/maps/search/Avenida+Dorrego+Chacarita/@-34.5808563,-58.4583145,15z' },
            ].map((t) => (
              <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer"
                className="border text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors"
                style={{ borderColor: 'var(--border)', color: 'var(--text-dim)', fontFamily: 'var(--font-space), sans-serif' }}>
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ARQUITECTURA */}
      <section id="Arquitectura" className="py-28" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="uppercase tracking-widest text-xs mb-6" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--bronze)' }}>
              — 03 · Arquitectura
            </p>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)' }}>
              Niveles del proyecto
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plantas.map((p, i) => (
              <div key={p.nivel} className="rounded-2xl border p-8 transition-all hover:-translate-y-1" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>{String(i).padStart(2, '0')}</span>
                  <span className="text-xs border rounded-full px-3 py-1 uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', borderColor: 'var(--bronze)', color: 'var(--bronze)' }}>{p.tag}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)' }}>{p.nivel}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>{p.desc}</p>
                <div className="mt-6 aspect-[4/3] rounded-xl border border-dashed flex items-center justify-center text-xs uppercase tracking-widest"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-dim)', fontFamily: 'var(--font-space), sans-serif' }}>
                  Plano
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section id="Programa" className="py-28" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-xs mb-6" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--bronze)' }}>
            — 04 · Programa
          </p>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-16" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)' }}>
            Distribución de superficies
          </h3>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h4 className="text-xl font-bold mb-8" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text-mid)' }}>
                Tipologías propuestas — 13 unidades
              </h4>
              {tipologias.map((t) => (
                <div key={t.tipo} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'var(--text)' }}>{t.tipo} · {t.sup}</span>
                    <span style={{ color: 'var(--text-dim)' }}>{t.uni} unidades</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg3)' }}>
                    <div className="h-full rounded-full" style={{ width: `${t.pct}%`, background: 'var(--bronze)' }} />
                  </div>
                </div>
              ))}
              <div className="pt-6 grid grid-cols-2 gap-4">
                {[['68%', 'Viviendas'], ['12%', 'Amenities'], ['10%', 'Comercio'], ['10%', 'Circulación']].map(([pct, label]) => (
                  <div key={label} className="border rounded-xl p-4 text-center" style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}>
                    <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--bronze-lt)' }}>{pct}</div>
                    <div className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
                <img src="/imagenes/patio-gastronomico.jpg" alt="Patio Gastronómico · Planta Baja cH°a"
                  className="w-full aspect-video object-cover" />
                <div className="p-4" style={{ background: 'var(--bg2)' }}>
                  <p className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>
                    Patio Gastronómico · Planta Baja activa
                  </p>
                </div>
              </div>
              <div className="border rounded-2xl p-6 space-y-4" style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}>
                <h4 className="text-lg font-bold" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text-mid)' }}>Programa planta baja</h4>
                {[
                  ['Gym', '150 m²', 'Local con acceso independiente'],
                  ['Local gastronómico', '150 m²', 'En esquina · activación urbana'],
                  ['Coworking', '55 m²', 'Espacio de trabajo compartido'],
                  ['Patio / Amenities', '200–250 m²', 'Espacios exteriores contemplativos'],
                  ['Ingreso peatonal', '—', 'Fusionado con amenities'],
                ].map(([n, s, d]) => (
                  <div key={n} className="flex justify-between items-start border-b pb-3 gap-4" style={{ borderColor: 'var(--border)' }}>
                    <div>
                      <div className="text-sm font-light" style={{ color: 'var(--text)' }}>{n}</div>
                      <div className="text-xs mt-1" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>{d}</div>
                    </div>
                    <div className="text-sm font-light whitespace-nowrap" style={{ color: 'var(--bronze-lt)' }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIABILIDAD */}
      <section id="Viabilidad" className="py-28" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-xs mb-6" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--bronze)' }}>
            — 05 · Viabilidad
          </p>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-16" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)' }}>
            Análisis económico del proyecto
          </h3>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h4 className="text-xl font-bold mb-8" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text-mid)' }}>
                Valor del m² a estrenar — Comparativa
              </h4>
              <div className="space-y-4">
                {mercado.map((m) => (
                  <div key={m.zona} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span style={{ color: m.zona.includes('cH°a') ? 'var(--bronze-lt)' : 'var(--text-mid)' }}>{m.zona}</span>
                      <span style={{ color: m.zona.includes('cH°a') ? 'var(--bronze-lt)' : 'var(--text-dim)' }}>USD {m.valor.toLocaleString()}/m²</span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--bg3)' }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${(m.valor / 3600) * 100}%`, backgroundColor: m.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl p-6 border" style={{ borderColor: 'var(--bronze)', background: 'var(--bronze-dim)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                  <strong style={{ color: 'var(--bronze-lt)' }}>Descuento de entrada: ~37% vs. Palermo y ~23% vs. Colegiales.</strong>{' '}
                  Exactamente la misma tendencia de crecimiento urbano, con menor costo hundido y mayor tasa de retorno proyectada.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <h4 className="text-xl font-bold mb-8" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text-mid)' }}>
                El plano de oportunidad
              </h4>
              {[
                { titulo: 'Barrera de Entrada', valor: 'USD 2.137/m²', desc: 'Ticket competitivo vs. los >USD 3.000 de Palermo y Colegiales.' },
                { titulo: 'Rentabilidad Bruta', valor: '5.0%', desc: 'Vs. 4.3% de Palermo. Menor capital inicial + mayor tasa bruta.' },
                { titulo: 'Terreno', valor: 'USD 275.000', desc: 'Charlone 1116 · 200 m² base · volumen constructivo maximizado.' },
                { titulo: 'Sector en expansión', valor: '15–20%', desc: 'De la actividad proyectada para 2026 en Chacarita y zonas aledañas.' },
              ].map((k) => (
                <div key={k.titulo} className="border rounded-xl p-6" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                  <div className="flex justify-between items-start mb-3">
                    <h5 className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>{k.titulo}</h5>
                    <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--bronze-lt)' }}>{k.valor}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>{k.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl font-bold mb-8" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text-mid)' }}>
              Casos relevados en el mercado
            </h4>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { proy: 'Monoambiente a estrenar', zona: 'Dorrego', valor: 'USD 3.280/m²' },
                { proy: 'Desarrollo Charlone', zona: 'Charlone', valor: 'USD 2.450/m²' },
                { proy: '3 ambientes', zona: 'Concepción Arenal', valor: 'USD 2.440/m²' },
                { proy: 'Proyecto premium', zona: 'Roseti', valor: 'USD 2.900/m²' },
              ].map((c) => (
                <div key={c.proy} className="border rounded-xl p-5" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>{c.zona}</p>
                  <p className="text-sm font-light mb-3" style={{ color: 'var(--text)' }}>{c.proy}</p>
                  <p className="font-bold" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--bronze-lt)' }}>{c.valor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BANNER ROOFTOP */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src="/imagenes/rooftop.jpg" alt="Rooftop cH°a · Chacarita" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(14,12,10,0.1) 0%, transparent 40%, rgba(14,12,10,0.85) 100%)' }} />
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <p className="text-2xl md:text-4xl font-bold italic" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)', textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
            Moldear, habitar.. y permanecer.
          </p>
          <p className="text-xs uppercase tracking-widest mt-3" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'rgba(240,234,224,0.5)' }}>
            Terraza · Piso 4 · cH°a · Chacarita
          </p>
        </div>
      </div>

      {/* REFERENTES */}
      <section className="py-20" style={{ background: 'var(--bg3)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-xs mb-6" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--bronze)' }}>
            Referentes Arquitectónicos
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {referentes.map((r) => (
              <div key={r.nombre} className="border rounded-xl p-5" style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--bronze)' }}>{r.tipo}</p>
                <p className="text-sm font-light" style={{ color: 'var(--text)' }}>{r.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTACIÓN */}
      <section id="Documentación" className="py-28" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-xs mb-6" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--bronze)' }}>
              — 06 · Documentación
            </p>
            <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)' }}>
              Repositorio de tesis
            </h3>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-dim)' }}>
              Espacio preparado para incorporar PDFs, láminas, memorias técnicas, documentación constructiva y material de presentación final.
            </p>
          </div>
          <div className="mb-16">
            <p className="uppercase tracking-widest text-xs mb-8" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>
              Ideas y posibilidades · Renders conceptuales
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {galeria.map((img) => (
                <div key={img.src} className="group rounded-xl overflow-hidden border cursor-pointer" style={{ borderColor: 'var(--border)' }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={img.src} alt={img.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4" style={{ background: 'var(--bg2)' }}>
                    <p className="text-sm font-light" style={{ color: 'var(--text)' }}>{img.label}</p>
                    <p className="text-xs mt-1 uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {['Memoria Descriptiva', 'Planimetría', 'Análisis Económico'].map((d) => (
              <div key={d} className="border rounded-xl p-6 text-center cursor-pointer transition-colors"
                style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}>
                <p className="text-sm font-light" style={{ color: 'var(--text)' }}>{d}</p>
                <p className="text-xs mt-2 uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>Próximamente</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bronze-line" />

      {/* FOOTER */}
      <footer className="py-10 text-center" style={{ background: 'var(--bg2)' }}>
        <p className="text-2xl font-black tracking-[-0.02em] mb-2" style={{ fontFamily: 'var(--font-fraunces), serif', color: 'var(--text)' }}>
          cH<span style={{ color: 'var(--bronze-lt)' }}>°</span>a
        </p>
        <p className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-space), sans-serif', color: 'var(--text-dim)' }}>
          Charlone 1116 · Chacarita · Buenos Aires · Proyecto Final de Tecnicatura
        </p>
      </footer>

    </div>
  );
}

