export default function Home() {
  const sections = ['Proyecto', 'Lugar', 'Arquitectura', 'Programa', 'Viabilidad', 'Documentación'];

  const plantas = [
    { nivel: 'Subsuelo', desc: 'Cocheras en subsuelo con pisada total del lote. El sector no edificable en altura se convierte en techo verde contemplativo desde planta baja.', tag: 'Infraestructura' },
    { nivel: 'Planta Baja', desc: 'Ecosistema de servicios compartidos. Ingreso peatonal fusionado con amenities, gym (150 m²), local gastronómico en esquina (200 m²) y coworking (55 m²).', tag: 'Sector Urbano' },
    { nivel: 'Piso 1', desc: 'Unidades funcionales tipo A y B. Monoambientes de 35–40 m² y departamentos de 2 ambientes de 50–60 m² con orientación norte.', tag: 'Residencial' },
    { nivel: 'Piso 2', desc: 'Unidades funcionales de 1 y 2 dormitorios. Continuación del módulo residencial con variaciones de planta según geometría del lote.', tag: 'Residencial' },
    { nivel: 'Piso 3', desc: 'Unidades de 3 dormitorios (100–130 m²). Mayor superficie. Expansiones independientes.', tag: 'Residencial' },
    { nivel: 'Piso 4 / Terraza', desc: 'Nivel superior con unidades premium y terraza comunitaria. Volumetría estricta de 14.60 m optimizada para unidades funcionales.', tag: 'Culmine' },
  ];

  const tipologias = [
    { tipo: 'Monoambiente', sup: '35–40 m²', uni: 4, pct: 31 },
    { tipo: '1 Dormitorios', sup: '50–60 m²', uni: 12, pct: 46 },
    { tipo: '2 Dormitorios', sup: '75–90 m²', uni: 8, pct: 23 },
    { tipo: '3 Dormitorios', sup: '100–130 m²', uni: 3, pct: 23 }
  ];

  const mercado = [
    { zona: 'Palermo', valor: 3390, color: '#6b7280' },
    { zona: 'Colegiales', valor: 2788, color: '#9ca3af' },
    { zona: 'cH°a · Chacarita', valor: 2137, color: '#d97706' },
  ];

  const referentes = [
    { nombre: 'Vivalto — Najas Arquitectos', tipo: 'Referente local' },
    { nombre: 'Sens Palermo Green', tipo: 'Referente local' },
    { nombre: 'MO288 / HGR Arquitectos', tipo: 'ArchDaily México' },
    { nombre: 'Londres 187 / CCA', tipo: 'ArchDaily México' },
  ];

  const galeria = [
    { src: '/imagenes/patio-gastronomico.jpg', label: 'Patio Gastronómico', desc: 'Atrio interior · Planta Baja' },
    { src: '/imagenes/rooftop.jpg', label: 'Terraza', desc: 'Rooftop comunitaria · Piso 4' },
    { src: '/imagenes/rooftop1.jpg', label: 'Terraza · Vista ciudad ', desc: 'Cielo de Buenos Aires' },
    { src: '/imagenes/contemplativo.png', label: 'Patio Contemplativo', desc: 'Techo verde · Subsuelo' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f1ec] text-[#1a1814]" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#f4f1ec]/90 border-b border-[#c8bfb0]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl tracking-[0.3em] font-light">cH°a</h1>
            <p className="text-xs uppercase tracking-widest text-[#8a7d6b]" style={{ fontFamily: 'sans-serif' }}>
              Tesis · Proyecto y Construcción de Obras
            </p>
          </div>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-[#8a7d6b]" style={{ fontFamily: 'sans-serif' }}>
            {sections.map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-[#1a1814] transition-colors">{item}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-[#111009] text-[#f4f1ec]">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute right-[-5%] top-[10%] h-[55vw] w-[55vw] rounded-full border border-[#3a3530] opacity-40" />
        <div className="absolute right-[5%] top-[20%] h-[35vw] w-[35vw] rounded-full border border-[#3a3530] opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-16 items-end">
            <div>
              <p className="uppercase tracking-[0.5em] text-xs text-[#7a6f60] mb-12" style={{ fontFamily: 'sans-serif' }}>
                Charlone 1116 · Chacarita · Buenos Aires
              </p>
              <div className="flex items-start leading-none mb-10" style={{ gap: '0.1em' }}>
                <span className="font-light" style={{ fontSize: 'clamp(6rem,14vw,13rem)', letterSpacing: '-0.05em', lineHeight: 1 }}>cH</span>
                <span className="text-[#7a6f60] font-light" style={{ fontSize: 'clamp(3rem,7vw,7rem)', marginTop: '0.15em', lineHeight: 1 }}>°</span>
                <span className="font-light" style={{ fontSize: 'clamp(6rem,14vw,13rem)', letterSpacing: '-0.05em', lineHeight: 1 }}>a</span>
              </div>
              <p className="text-lg md:text-xl text-[#a89f90] max-w-2xl leading-relaxed font-light">
                Moldear, habitar.. y permanecer.
              </p>
            </div>
            <div className="border border-[#2e2b26] rounded-3xl p-8 bg-white/[0.03] backdrop-blur-sm">
              <p className="uppercase tracking-widest text-[#5a5248] text-xs mb-6" style={{ fontFamily: 'sans-serif' }}>Ficha técnica</p>
              <dl className="space-y-4 text-sm">
                {[
                  ['Tipología', 'Edificio Multifamiliar'],
                  ['Ubicación', 'Charlone 1116, Chacarita'],
                  ['Lote', '5 parcelas · ~750 m²'],
                  ['Altura máx.', '14.60 m · 4 plantas + SS'],
                  ['Unidades', '40 UF residenciales'],
                  ['Planta baja', 'Gym · Gastronomía · Cowork'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-[#2e2b26] pb-3">
                    <dt className="text-[#5a5248] uppercase tracking-widest text-xs" style={{ fontFamily: 'sans-serif' }}>{k}</dt>
                    <dd className="text-[#d4cdc4] text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTO — con imagen de fondo contemplativo */}
      <section id="Proyecto" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/imagenes/contemplativo.png" alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#f4f1ec]/93" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-widest text-xs text-[#8a7d6b] mb-6" style={{ fontFamily: 'sans-serif' }}>01 · Proyecto</p>
            <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Arquitectura con logica residencial <br />en el nuevo polo de desarrollo urbano de Buenos Aires
            </h3>
            <div className="w-16 h-px bg-[#c8bfb0] mb-8" />
            <p className="text-[#5a5248] text-sm uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>
              TIF-Demilta-cH°a-2026 
            </p>
          </div>
          <div className="space-y-6 text-[#4a4238] leading-relaxed text-lg pt-4">
            <p>
              <em>cH°a</em> surge como un edificio residencial emplazado en Chacarita,
              buscando un equilibrio entre la funcionalidad y la espacialidad.
            </p>
            <p>
              El nombre del proyecto articula el hormigón armado con el nombre del barrio y de la calle. El autor,
              propone una arquitectura tectónica, silenciosa y precisa donde la estructura
              y la atmósfera toman protagonismo.
            </p>
            <p>
              La intención de generar espacios de admiración, meditación y pequeños laberintos
              es constante: esas sensaciones que se obtienen recorriendo lo natural y también la arquitectura.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[['Brutal'], ['Atemporal'], ['40', 'Unidades']].map(([n, l]) => (
                <div key={l} className="border border-[#c8bfb0] rounded-2xl p-5 text-center bg-white/70 backdrop-blur-sm">
                  <div className="text-3xl font-light mb-1">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-[#8a7d6b]" style={{ fontFamily: 'sans-serif' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUGAR */}
      <section id="Lugar" className="bg-[#111009] text-[#f4f1ec] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-xs text-[#5a5248] mb-6" style={{ fontFamily: 'sans-serif' }}>02 · El Lugar</p>
          <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Chacarita <br />emerge como el nuevo punto de desarrollo residencial<br />en la ciudad de Buenos Aires
              </h3>
              <div className="w-16 h-px bg-[#3a3530] mb-8" />
              <div className="space-y-5 text-[#a89f90] leading-relaxed">
                <p>El proyecto se inserta en Charlone 1116, dentro de un sector de baja densidad edilicia en altura, con tejido mayormente residencial y un crecimiento sostenido de la oferta gastronómica.</p>
                <p>Chacarita absorbe la demanda de Palermo porque ya posee los fundamentales urbanos instalados: conectividad vía Subte B y Tren Urquiza, consolidación comercial sobre Av. Dorrego, y un polo gastronómico y de lifestyle en expansión.</p>
                <p>Ante la saturación de Palermo y el alza de costos en Colegiales, <strong className="text-[#d4cdc4]">Chacarita y zonas aledañas concentrarán entre el 15% y el 20% de la actividad proyectada para 2026</strong>.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { titulo: 'Conectividad Estratégica', desc: 'Subte B / Tren Urquiza. Acceso directo al centro metropolitano.' },
                { titulo: 'Consolidación Comercial', desc: 'Av. Dorrego como eje comercial en crecimiento sostenido.' },
                { titulo: 'Punto de interes Gastronomico', desc: 'Boom gastronómico y lifestyle que consolida identidad barrial.' },
                { titulo: 'Baja Densidad', desc: 'Tejido de oportunidad: pocos edificios en altura, normativa favorable.' },
              ].map((item) => (
                <div key={item.titulo} className="border border-[#2e2b26] rounded-2xl p-6">
                  <h4 className="text-lg font-light mb-2">{item.titulo}</h4>
                  <p className="text-[#7a6f60] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MAPA INTERACTIVO */}
          <div className="rounded-3xl overflow-hidden border border-[#2e2b26]">
            <div className="bg-[#1a1814] px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-light text-[#d4cdc4]">Charlone 1116 · Chacarita · Buenos Aires</p>
                <p className="text-xs text-[#5a5248] mt-1 uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>-34.5808° S · -58.4583° O</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Charlone+1116,+Chacarita,+Buenos+Aires,+Argentina&travelmode=driving" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors" style={{ fontFamily: 'sans-serif' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                  Cómo llegar
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Charlone+1116,+Chacarita,+Buenos+Aires,+Argentina" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#3a3530] hover:border-[#7a6f60] text-[#a89f90] hover:text-[#d4cdc4] text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors" style={{ fontFamily: 'sans-serif' }}>
                  Ver en Maps
                </a>
                <a href="https://www.google.com/maps/@-34.5808563,-58.4583145,18z/data=!3m1!1e3" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#3a3530] hover:border-[#7a6f60] text-[#a89f90] hover:text-[#d4cdc4] text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors" style={{ fontFamily: 'sans-serif' }}>
                  Vista Satélite
                </a>
                <a href="https://www.google.com/maps/@-34.5808563,-58.4583145,3a,75y,90t,90r" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#3a3530] hover:border-[#7a6f60] text-[#a89f90] hover:text-[#d4cdc4] text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors" style={{ fontFamily: 'sans-serif' }}>
                  Street View
                </a>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.5!2d-58.4583145!3d-34.5808563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5e0e8b5b5b5%3A0x0!2sCharlone+1116%2C+Chacarita%2C+Buenos+Aires!5e1!3m2!1ses!2sar!4v1"
              width="100%" height="480" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Charlone 1116 · Chacarita"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <p className="text-xs text-[#5a5248] uppercase tracking-widest self-center mr-2" style={{ fontFamily: 'sans-serif' }}>Transporte cercano:</p>
            {[
              { label: 'Subte B · Dorrego', href: 'https://www.google.com/maps/search/subte+B+Dorrego+Chacarita/@-34.5808563,-58.4583145,15z' },
              { label: 'Tren Urquiza · Chacarita', href: 'https://www.google.com/maps/search/estacion+Chacarita+tren+Urquiza/@-34.5808563,-58.4583145,15z' },
              { label: 'Subte B · Lacroze', href: 'https://www.google.com/maps/search/subte+B+Federico+Lacroze+Chacarita/@-34.5808563,-58.4583145,15z' },
              { label: 'Av. Corrientes', href: 'https://www.google.com/maps/search/Avenida+Corrientes+Chacarita/@-34.5808563,-58.4583145,15z' },
              { label: 'Av. Dorrego', href: 'https://www.google.com/maps/search/Avenida+Dorrego+Chacarita/@-34.5808563,-58.4583145,15z' },
            ].map((t) => (
              <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer"
                className="border border-[#2e2b26] hover:border-amber-600 hover:text-amber-500 text-[#7a6f60] text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors" style={{ fontFamily: 'sans-serif' }}>
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ARQUITECTURA */}
      <section id="Arquitectura" className="max-w-7xl mx-auto px-6 py-28">
        <div className="mb-16">
          <p className="uppercase tracking-widest text-xs text-[#8a7d6b] mb-6" style={{ fontFamily: 'sans-serif' }}>03 · Arquitectura</p>
          <h3 className="text-4xl md:text-5xl font-light leading-tight">Niveles del proyecto</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plantas.map((p, i) => (
            <div key={p.nivel} className="rounded-3xl border border-[#c8bfb0] p-8 bg-white hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs text-[#8a7d6b] uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>{String(i).padStart(2, '0')}</span>
                <span className="text-xs border border-[#c8bfb0] rounded-full px-3 py-1 text-[#8a7d6b] uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>{p.tag}</span>
              </div>
              <h4 className="text-2xl font-light mb-4">{p.nivel}</h4>
              <p className="text-[#6a5f52] text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-6 aspect-[4/3] rounded-2xl bg-[#f4f1ec] border border-dashed border-[#c8bfb0] flex items-center justify-center text-xs text-[#b0a898] uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>
                Plano
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMA — con imagen patio gastronomico */}
      <section id="Programa" className="bg-[#1a1814] text-[#f4f1ec] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-xs text-[#5a5248] mb-6" style={{ fontFamily: 'sans-serif' }}>04 · Programa</p>
          <h3 className="text-4xl md:text-5xl font-light leading-tight mb-16">Distribución de superficies</h3>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h4 className="text-xl font-light text-[#a89f90] mb-8">Tipologías propuestas — 8 Unidades por piso</h4>
              {tipologias.map((t) => (
                <div key={t.tipo} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t.tipo} · {t.sup}</span>
                    <span className="text-[#7a6f60]">{t.uni} unidades</span>
                  </div>
                  <div className="h-2 bg-[#2e2b26] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-amber-600" style={{ width: `${t.pct}%` }} />
                  </div>
                </div>
              ))}
              <div className="pt-6 grid grid-cols-2 gap-4">
                {[['68%', 'Viviendas'], ['12%', 'Amenities'], ['10%', 'Comercio'], ['10%', 'Circulación']].map(([pct, label]) => (
                  <div key={label} className="border border-[#2e2b26] rounded-2xl p-4 text-center">
                    <div className="text-2xl font-light text-amber-500 mb-1">{pct}</div>
                    <div className="text-xs uppercase tracking-widest text-[#5a5248]" style={{ fontFamily: 'sans-serif' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Planta baja con imagen */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border border-[#2e2b26]">
                <img src="/imagenes/patio-gastronomico.jpg" alt="Patio Gastronómico · Planta Baja cH°a"
                  className="w-full aspect-video object-cover" />
                <div className="p-4 bg-[#111009]">
                  <p className="text-xs text-[#5a5248] uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>
                    Patio Gastronómico · Planta Baja activa
                  </p>
                </div>
              </div>
              <div className="border border-[#2e2b26] rounded-3xl p-6 space-y-4">
                <h4 className="text-lg font-light text-[#a89f90]">Programa planta baja</h4>
                {[
                  ['Gym', '150 m²', 'Local con acceso independiente'],
                  ['Local/es gastronómicos', '200 m²', 'En esquina · activación urbana'],
                  ['Coworking', '55 m²', 'Espacio de trabajo compartido'],
                  ['Patio / Amenities', '200–250 m²', 'Espacios exteriores contemplativos'],
                  ['Ingreso peatonal', '—', 'Fusionado con amenities'],
                  ['Acceso vehicular', '—', 'Subsuelo con pisada total del lote'],
                ].map(([n, s, d]) => (
                  <div key={n} className="flex justify-between items-start border-b border-[#2e2b26] pb-3 gap-4">
                    <div>
                      <div className="text-sm font-light">{n}</div>
                      <div className="text-xs text-[#5a5248] mt-1" style={{ fontFamily: 'sans-serif' }}>{d}</div>
                    </div>
                    <div className="text-amber-500 text-sm font-light whitespace-nowrap">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIABILIDAD */}
      <section id="Viabilidad" className="max-w-7xl mx-auto px-6 py-28">
        <p className="uppercase tracking-widest text-xs text-[#8a7d6b] mb-6" style={{ fontFamily: 'sans-serif' }}>05 · Viabilidad</p>
        <h3 className="text-4xl md:text-5xl font-light leading-tight mb-16">Análisis económico del proyecto</h3>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-xl font-light mb-8 text-[#4a4238]">Valor del m² a estrenar — Comparativa</h4>
            <div className="space-y-4">
              {mercado.map((m) => (
                <div key={m.zona} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={m.zona.includes('cH°a') ? 'font-medium text-amber-700' : 'text-[#4a4238]'}>{m.zona}</span>
                    <span className={m.zona.includes('cH°a') ? 'font-medium text-amber-700' : 'text-[#8a7d6b]'}>USD {m.valor.toLocaleString()}/m²</span>
                  </div>
                  <div className="h-3 bg-[#e8e2d9] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${(m.valor / 3600) * 100}%`, backgroundColor: m.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 border border-amber-200 bg-amber-50 rounded-2xl p-6">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Descuento de entrada: ~37% vs. Palermo y ~23% vs. Colegiales.</strong>{' '}
                Exactamente la misma tendencia de crecimiento urbano, con menor costo hundido y mayor tasa de retorno proyectada.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <h4 className="text-xl font-light mb-8 text-[#4a4238]">El plano de oportunidad</h4>
            {[
              { titulo: 'Entrada', valor: 'USD 2.137/m²', desc: 'Ticket competitivo vs. los >USD 3.000 de Palermo y Colegiales.' },
              { titulo: 'Rentabilidad', valor: '5.0%', desc: 'Vs. 4.3% de Palermo. Menor capital inicial + mayor tasa bruta.' },
              { titulo: 'Terreno', valor: 'USD 275.000', desc: 'Charlone 1116 · 200 m² base · volumen constructivo maximizado.' },
              { titulo: 'Sector en expansión', valor: '15–20%', desc: 'De la actividad proyectada para 2026 en Chacarita y zonas aledañas.' },
            ].map((k) => (
              <div key={k.titulo} className="border border-[#c8bfb0] rounded-2xl p-6 bg-white">
                <div className="flex justify-between items-start mb-3">
                  <h5 className="text-sm uppercase tracking-widest text-[#8a7d6b]" style={{ fontFamily: 'sans-serif' }}>{k.titulo}</h5>
                  <span className="text-xl font-light text-amber-700">{k.valor}</span>
                </div>
                <p className="text-[#6a5f52] text-sm leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h4 className="text-xl font-light mb-8 text-[#4a4238]">Casos relevados en el mercado</h4>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { proy: 'Monoambiente a estrenar', zona: 'Dorrego', valor: 'USD 3.280/m²' },
              { proy: 'Desarrollo Charlone', zona: 'Charlone', valor: 'USD 2.450/m²' },
              { proy: '3 ambientes', zona: 'Concepción Arenal', valor: 'USD 2.440/m²' },
              { proy: 'Proyecto premium', zona: 'Roseti', valor: 'USD 2.900/m²' },
            ].map((c) => (
              <div key={c.proy} className="border border-[#c8bfb0] rounded-2xl p-5 bg-white">
                <p className="text-xs uppercase tracking-widest text-[#8a7d6b] mb-2" style={{ fontFamily: 'sans-serif' }}>{c.zona}</p>
                <p className="text-sm font-light mb-3">{c.proy}</p>
                <p className="text-amber-700 font-light">{c.valor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSICIÓN — imagen rooftop como banner full width */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src="/imagenes/rooftop.jpg" alt="Rooftop cH°a · Chacarita"
          className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f1ec]/10 via-transparent to-[#111009]/80" />
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <p className="text-white text-2xl md:text-4xl font-light tracking-[0.2em]" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            Moldear, habitar.. y permanecer.
          </p>
          <p className="text-white/60 text-xs uppercase tracking-widest mt-3" style={{ fontFamily: 'sans-serif' }}>
            Terraza · Piso 4 · cH°a · Chacarita
          </p>
        </div>
      </div>

      {/* REFERENTES */}
      <section className="bg-[#f0ece4] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-xs text-[#8a7d6b] mb-6" style={{ fontFamily: 'sans-serif' }}>Referentes Arquitectónicos</p>
          <div className="grid md:grid-cols-4 gap-4">
            {referentes.map((r) => (
              <div key={r.nombre} className="border border-[#c8bfb0] rounded-2xl p-5 bg-white">
                <p className="text-xs uppercase tracking-widest text-[#8a7d6b] mb-2" style={{ fontFamily: 'sans-serif' }}>{r.tipo}</p>
                <p className="text-sm font-light">{r.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTACIÓN */}
      <section id="Documentación" className="bg-[#111009] text-[#f4f1ec] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-xs text-[#5a5248] mb-6" style={{ fontFamily: 'sans-serif' }}>06 · Documentación</p>
            <h3 className="text-4xl md:text-5xl font-light mb-6">Repositorio de tesis</h3>
            <p className="max-w-2xl mx-auto text-[#7a6f60] leading-relaxed">
              Espacio preparado para incorporar PDFs, láminas, memorias técnicas, documentación constructiva y material de presentación final.
            </p>
          </div>

          {/* Galería de ideas */}
          <div className="mb-16">
            <p className="uppercase tracking-widest text-xs text-[#5a5248] mb-8" style={{ fontFamily: 'sans-serif' }}>Ideas y posibilidades · Renders conceptuales</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {galeria.map((img) => (
                <div key={img.src} className="group rounded-2xl overflow-hidden border border-[#2e2b26] cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={img.src} alt={img.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4 bg-[#1a1814]">
                    <p className="text-sm font-light">{img.label}</p>
                    <p className="text-xs text-[#5a5248] mt-1 uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Repositorio */}
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {['Memoria Descriptiva', 'Planimetría', 'Análisis Económico'].map((d) => (
              <div key={d} className="border border-[#2e2b26] rounded-2xl p-6 hover:border-[#5a5248] transition-colors cursor-pointer text-center">
                <p className="text-sm font-light">{d}</p>
                <p className="text-xs text-[#5a5248] mt-2 uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>Próximamente</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d0c09] text-[#3a3530] py-10 text-center">
        <p className="text-2xl tracking-[0.4em] font-light text-[#5a5248] mb-2">cH°a</p>
        <p className="text-xs uppercase tracking-widest" style={{ fontFamily: 'sans-serif' }}>
          Charlone 1116 · Chacarita · Buenos Aires · Proyecto Final de Tecnicatura
        </p>
      </footer>

    </div>
  );
}