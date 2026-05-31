import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const repuestos = [
  { nombre: "Kit de Arrastre", sub: "Transmisión", icon: "⚙️", imagen: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600" },
  { nombre: "Pastillas de Freno", sub: "Frenado", icon: "🔴", imagen: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600" },
  { nombre: "Aceite Premium", sub: "Lubricación", icon: "🛢️", imagen: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=600" },
  { nombre: "Baterías AGM", sub: "Eléctrico", icon: "⚡", imagen: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600" },
  { nombre: "Llantas Sport", sub: "Rodamiento", icon: "⭕", imagen: "https://images.unsplash.com/photo-1558981403-c5f9891c2f8f?w=600" },
  { nombre: "Filtros de Aire", sub: "Motor", icon: "💨", imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600" },
  { nombre: "Amortiguadores", sub: "Suspensión", icon: "🔧", imagen: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=600" },
  { nombre: "Cadenas DID", sub: "Transmisión", icon: "🔗", imagen: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600" },
];

const serviciosTaller = [
  {
    icon: "🔬",
    titulo: "Diagnóstico Computarizado",
    desc: "Escáner OBD avanzado para detección precisa de fallas en sistemas eléctricos y motor.",
    tiempo: "30 min",
    color: "from-blue-950/40 to-zinc-950/40"
  },
  {
    icon: "🛢️",
    titulo: "Cambio de Aceite y Filtros",
    desc: "Lubricantes sintéticos y semisintéticos de primeras marcas. Incluye revisión de 12 puntos.",
    tiempo: "45 min",
    color: "from-amber-950/40 to-zinc-950/40"
  },
  {
    icon: "⚙️",
    titulo: "Mantenimiento General",
    desc: "Afinación completa, ajuste de válvulas, bujías, frenos, cadena y revisión de suspensión.",
    tiempo: "2-3 hrs",
    color: "from-red-950/40 to-zinc-950/40"
  },
  {
    icon: "🔌",
    titulo: "Sistema Eléctrico",
    desc: "Reparación de luces, alarmas, reguladores, bobinas e instalación de accesorios.",
    tiempo: "Variable",
    color: "from-purple-950/40 to-zinc-950/40"
  },
  {
    icon: "🏎️",
    titulo: "Performance & Tuning",
    desc: "Reprogramación ECU, upgrades de escape, carburación y optimización de rendimiento.",
    tiempo: "1 día",
    color: "from-orange-950/40 to-zinc-950/40"
  },
  {
    icon: "🔧",
    titulo: "Rectificación de Motor",
    desc: "Reparación profunda: pistones, cilindros, cigüeñal y reconstrucción total de motor.",
    tiempo: "3-7 días",
    color: "from-zinc-800/40 to-zinc-950/40"
  }
];

const marcas = [
  "Yamaha", "Honda", "Suzuki", "AKT", "Bajaj",
  "TVS", "Hero", "KTM", "Benelli", "Royal Enfield",
  "Kawasaki", "Haojue"
];

const testimonios = [
  { nombre: "Carlos M.", ciudad: "Duitama", texto: "Llevé mi FZ25 para revisión de motor y quedó impecable. Precios honestos y atención rápida. 100% recomendado.", stars: 5, moto: "Yamaha FZ25" },
  { nombre: "Andrés R.", ciudad: "Soacha", texto: "El mejor almacén de la zona. Consiguen repuestos que en otras partes no tienen. El taller es de primer nivel.", stars: 5, moto: "Honda CB190" },
  { nombre: "Paola V.", ciudad: "Chía", texto: "Me dieron diagnóstico honesto, no me vendieron más de lo que necesitaba. Eso vale mucho. Ahora solo vengo aquí.", stars: 5, moto: "AKT 125" },
];

const stats = [
  { num: "+2.500", txt: "Motos Diagnosticadas", icon: "🏍️" },
  { num: "+10", txt: "Años de Trayectoria", icon: "📅" },
  { num: "100%", txt: "Garantía de Trabajo", icon: "✅" },
  { num: "+5.000", txt: "Repuestos en Stock", icon: "📦" },
];

// ─── VARIANTS ────────────────────────────────────────────────────────────────

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay: i * 0.12 }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// ─── SUBCOMPONENTS ───────────────────────────────────────────────────────────

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" } as any}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950 border-b border-zinc-800 shadow-2xl shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">M</div>
          <span className="font-black text-white text-lg tracking-tight uppercase">Mono<span className="text-red-500">Motos</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-zinc-400">
          {["Repuestos", "Taller", "Marcas", "Contacto"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors duration-200 relative group">
              {item}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/573000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-200 active:scale-95"
        >
          <span>💬</span> WhatsApp
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-2"
        >
          <div className={`space-y-1.5 transition-all duration-300`}>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-zinc-950  border-t border-zinc-800"
          >
            <div className="px-6 py-4 space-y-3">
              {["Repuestos", "Taller", "Marcas", "Contacto"].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-zinc-300 hover:text-white text-sm font-bold uppercase tracking-wider py-2">
                  {item}
                </a>
              ))}
              <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white font-black text-xs uppercase tracking-wider px-4 py-3 rounded-xl mt-2">
                💬 Escribirnos por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Fondo dramático con grid y glow semi-transparentes */}
      <div className="absolute inset-0 bg-transparent">
        {/* Grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        {/* Red glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="flex flex-col items-center text-center gap-8">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" } as any}
            className="w-full max-w-md md:max-w-2xl"
          >
            <img
              src="./logomonom.png"
              alt="MonoMotos"
              className="h-auto w-full object-contain drop-shadow-[0_0_60px_rgba(220,38,38,0.2)]"
            />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" } as any}
            className="space-y-4 max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] text-white">
              Tu moto en
              <span className="text-red-500"> las mejores</span>
              <br />manos
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
              Repuestos originales, taller especializado y técnicos con más de 10 años de experiencia.
              Todo lo que tu moto necesita, en un solo lugar.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-500 active:scale-95 text-white font-black uppercase tracking-wider text-sm px-8 py-4 rounded-2xl shadow-lg shadow-red-900/30 transition-all duration-200 flex items-center gap-2 justify-center"
            >
               Agendar Revisión Técnica
            </a>
            <a
              href="#repuestos"
              className="bg-zinc-950/40 hover:bg-zinc-900/60 border border-zinc-700/60 hover:border-zinc-500 active:scale-95 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-2xl transition-all duration-200 flex items-center gap-2 justify-center backdrop-blur-sm"
            >
               Ver Repuestos
            </a>
          </motion.div>

          {/* Info rápida */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6 pt-4 text-xs text-zinc-400 font-semibold uppercase tracking-wider"
          >
            {[" Duitama .", " Lun–Sáb 8am–6pm", " Pagos en efectivo y transferencia", " Domicilios de repuestos"].map(item => (
              <span key={item} className="flex items-center gap-1">{item}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" } as any}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-400 to-transparent" />
      </motion.div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-red-600/80 backdrop-blur-md relative overflow-hidden border-y border-red-500/20">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 11px)"
        }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeInUp}
            className="space-y-1"
          >
            <div className="text-3xl mb-1">{stat.icon}</div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">{stat.num}</h3>
            <p className="text-red-100 text-xs uppercase tracking-wider font-bold">{stat.txt}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RepuestosCarrusel() {
  return (
    <section id="repuestos" className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className="text-red-500 text-xs font-black uppercase tracking-widest mb-2">Catálogo</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Repuestos Disponibles
            </h2>
            <p className="text-zinc-400 mt-2 max-w-md">
              Componentes originales y de alto rendimiento. Garantía en todos los productos.
            </p>
          </div>
          <button className="self-start md:self-auto bg-zinc-950/60 backdrop-blur-sm border border-zinc-800 hover:border-red-600 text-zinc-300 hover:text-white text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200">
            Ver catálogo completo →
          </button>
        </motion.div>
      </div>

      {/* Carrusel doble fila */}
      <div className="space-y-4">
        {[0, 1].map(rowIndex => (
          <div key={rowIndex} className="overflow-hidden"
            style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
            <motion.div
              className="flex gap-4 w-max px-6"
              animate={{ x: rowIndex === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ duration: 30 + rowIndex * 5, repeat: Infinity, ease: "linear" } as any}
            >
              {[...repuestos, ...repuestos].map((item, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className="w-64 bg-zinc-950/60 backdrop-blur-md rounded-2xl overflow-hidden border border-zinc-800/80 group hover:border-red-600/60 transition-all duration-300 flex-shrink-0 cursor-pointer"
                >
                  <div className="h-40 w-full overflow-hidden relative">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                    />
                    <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {item.sub}
                    </div>
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-sm uppercase tracking-wide group-hover:text-red-400 transition-colors">
                        {item.nombre}
                      </h3>
                      <p className="text-zinc-500 text-xs">Garantía incluida</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TallerSection() {
  return (
    <section id="taller" className="py-24 bg-zinc-950/20 border-y border-zinc-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-red-500 text-xs font-black uppercase tracking-widest mb-3">Servicios de Taller</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Todo lo que tu moto necesita
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Desde un cambio de aceite hasta una rectificación completa de motor.
            Técnicos certificados con equipos de última generación.
          </p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {serviciosTaller.map((s, i) => (
            <motion.div
              key={i} variants={fadeInUp} custom={i} whileHover={{ y: -6, scale: 1.01 }}
              className={`bg-gradient-to-br ${s.color} border border-zinc-800/40 rounded-2xl p-7 group cursor-pointer transition-colors duration-300 hover:border-red-600/40 backdrop-blur-md`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="text-4xl">{s.icon}</div>
                <span className="text-xs font-black uppercase tracking-widest text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800">
                  {s.tiempo}
                </span>
              </div>
              <h3 className="text-white font-black text-lg uppercase tracking-wide mb-2 group-hover:text-red-400 transition-colors">
                {s.titulo}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-5 flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Solicitar servicio <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA taller */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="mt-12 bg-zinc-950/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-white">¿Tu moto necesita revisión?</h3>
            <p className="text-zinc-400 mt-1">Diagnóstico inicial sin costo. Agendamos en 24 horas.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 active:scale-95 text-white font-black text-sm uppercase tracking-wider px-7 py-4 rounded-2xl transition-all duration-200 whitespace-nowrap"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+573000000000"
              className="bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 active:scale-95 text-white font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-2xl transition-all duration-200 whitespace-nowrap"
            >
              📞 Llamar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MarcasSection() {
  return (
    <section id="marcas" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-2">Trabajamos con</p>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            Especialistas Multimarca
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {marcas.map((marca, i) => (
            <motion.div
              key={marca} variants={fadeInUp} custom={i} whileHover={{ scale: 1.05, borderColor: "rgba(220,38,38,0.5)" }}
              className="px-6 py-3 bg-zinc-950/60 backdrop-blur-sm border border-zinc-800/80 rounded-2xl text-zinc-400 hover:text-white text-sm font-black uppercase tracking-wider transition-colors duration-200 cursor-default"
            >
              {marca}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimoniosSection() {
  return (
    <section className="py-24 bg-zinc-950/10 border-y border-zinc-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-center mb-14"
        >
          <p className="text-red-500 text-xs font-black uppercase tracking-widest mb-3">Opiniones</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white">Lo que dicen nuestros clientes</h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonios.map((t, i) => (
            <motion.div
              key={i} variants={fadeInUp} custom={i}
              className="bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-7 flex flex-col gap-5 hover:border-zinc-700 transition-colors"
            >
              <div className="flex gap-1">
                {Array(t.stars).fill(0).map((_, j) => (
                  <span key={j} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed italic">"{t.texto}"</p>
              <div className="border-t border-zinc-800/60 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">{t.nombre}</p>
                  <p className="text-zinc-500 text-xs">{t.ciudad}</p>
                </div>
                <span className="text-xs bg-zinc-900/80 border border-zinc-700 px-3 py-1.5 rounded-full text-zinc-400 font-semibold">
                  {t.moto}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactoSection() {
  return (
    <section id="contacto" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <p className="text-red-500 text-xs font-black uppercase tracking-widest mb-3">Ubícanos</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
              Visítanos en nuestro local
            </h2>
            <div className="space-y-5">
              {[
                { icon: "📍", label: "Dirección", val: "Calle 123 #45-67, Duitama ." },
                { icon: "⏰", label: "Horario", val: "Lunes a Sábado: 8:00am – 6:00pm" },
                { icon: "📞", label: "Teléfono", val: "+57 300 000 0000" },
                { icon: "📧", label: "Email", val: "info@monomotos.com.co" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-lg flex-shrink-0 group-hover:border-red-600/40 transition-colors backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider font-bold">{item.label}</p>
                    <p className="text-white font-semibold mt-0.5">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 active:scale-95 text-white font-black text-sm uppercase tracking-wider px-7 py-4 rounded-2xl transition-all duration-200"
              >
                💬 Escribir por WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 rounded-3xl overflow-hidden h-72 md:h-96 flex items-center justify-center text-zinc-500"
          >
            <div className="text-center p-10">
              <div className="text-5xl mb-4">🗺️</div>
              <p className="text-zinc-300 font-semibold">Mapa de Google Maps</p>
              <p className="text-zinc-500 text-sm mt-1">Integra tu iframe de Google Maps aquí</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950/80 backdrop-blur-md border-t border-zinc-900 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-xs uppercase tracking-wider font-bold">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-red-600 flex items-center justify-center text-white font-black text-xs">M</div>
          <span className="text-zinc-400">MonoMotos © {new Date().getFullYear()}</span>
        </div>
        <p>Almacén de repuestos & taller multimarca · Duitama .</p>
        <div className="flex gap-4">
          {["Instagram", "Facebook", "WhatsApp"].map(red => (
            <a key={red} href="#" className="hover:text-white transition-colors">{red}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    // CAMBIO CLAVE: Cambiamos bg-zinc-950 sólido por bg-transparent en el contenedor principal.
    // Esto permite que el video que vive en las rutas (detrás de todo) sea visible 100% del tiempo.
    <div className=" text-white selection:bg-red-600 selection:text-white overflow-x-hidden font-sans">
      <NavBar />
      <HeroSection />
      <StatsSection />
      <RepuestosCarrusel />
      <TallerSection />
      <MarcasSection />
      <TestimoniosSection />
      <ContactoSection />
      <Footer />
    </div>
  );
}