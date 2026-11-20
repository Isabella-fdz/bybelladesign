/* ==========================================================================
   HOME — contenido de las secciones nuevas de la home (rediseño 2026).
   Los casos siguen viviendo en data/proyectos.js; aquí solo se decide qué se muestra,
   en qué orden y con qué imagen.

   Textos bilingües: { es: "...", en: "..." }.
   pendiente: true → el dato falta confirmarlo; se muestra con borde punteado en la vista previa.
   Fuente de la trayectoria: CV (assets/cv-isabella-montes.pdf).
   ========================================================================== */

window.HOME = {
  /* ---------- Hero ---------- */
  disponibilidad: {
    pendiente: true,
    es: "Disponible · modalidad por confirmar",
    en: "Available · work arrangement TBC",
  },
  retrato: { src: "", alt: { es: "Retrato de Isabella Montes", en: "Portrait of Isabella Montes" } },

  /* ---------- Cifras (se animan al entrar en pantalla) ---------- */
  cifras: [
    { valor: "+5", texto: { es: "años diseñando productos digitales", en: "years designing digital products" } },
    { desde: { es: "2 semanas →", en: "2 weeks →" }, valor: "5 min", texto: { es: "para abrir un CDT · Banco W", en: "to open a CDT · Banco W" } },
    { valor: "−40%", texto: { es: "errores en solicitudes · Nova", en: "request errors · Nova" } },
    { desde: { es: "58% →", en: "58% →" }, valor: "91%", texto: { es: "pagó sin ayuda · Keralty", en: "paid unaided · Keralty" } },
  ],

  /* ---------- Trabajo seleccionado (orden de la home) ----------
     pantallas: capturas que se muestran en la tarjeta (estilo M3 hasta tener las escenas M1).
     escena: foto de escena con el dispositivo (M1). Si existe, reemplaza a las pantallas. */
  seleccion: [
    {
      slug: "when-justice",
      nuevo: true,
      cliente: "WHEN Justice",
      nombre: "WHEN Justice",
      anio: { es: "2025 – hoy", en: "2025 – present" },
      industria: { es: "Impacto legal · ONG", en: "Legal impact · Nonprofit" },
      titular: {
        es: "Diseño de producto para una ONG que financia litigios contra quienes dañan la salud y el planeta: del modelo de campañas al de fondos.",
        en: "Product design for a nonprofit that funds litigation against those who harm health and the planet: from a campaign model to a fund model.",
      },
      comp: {
        tipo: "web",
        fondo: ["#0E1417", "#2A211D", "#FF3C00"],
        principal: "assets/proyectos/when-justice/globo.jpg",
      },
      etiqueta: { es: "Nuevo", en: "New" },
      caso: false,
    },
    {
      slug: "banco-w",
      comp: {
        tipo: "marca-moviles",
        fondo: ["#22145E", "#5B32D6", "#9C7BFF"],
        marca: { logo: "assets/logos/banco-w.png", fondo: ["#FF8A3D", "#E0589E", "#6A3BE0"] },
        pantallas: ["assets/proyectos/banco-w/screen-data.jpg", "assets/proyectos/banco-w/screen-schedule.jpg"],
      },
    },
    {
      slug: "nova",
      comp: {
        tipo: "web",
        fondo: ["#071737", "#2459D6", "#8FB2FF"],
        principal: "assets/proyectos/nova/screen-dashboard.jpg",
      },
    },
    {
      slug: "keralty",
      comp: {
        tipo: "web",
        fondo: ["#04302E", "#0E8C83", "#7FF0E2"],
        principal: "assets/proyectos/keralty/home-pantalla.jpg",
      },
    },
  ],

  /* ---------- Archivo: proyectos secundarios (FitUp queda fuera de la home) ---------- */
  archivo: [
    { slug: "mycoach", pantalla: "assets/proyectos/mycoach/home.jpg" },
    { slug: "lemon-joy", pantalla: "assets/proyectos/lemon-joy/home-hero.jpg" },
  ],

  /* ---------- Diseño + IA ---------- */
  ia: [
    {
      nombre: "Cuida los Faroles",
      tipo: { es: "Día de Velitas · hecho 100% con IA", en: "Día de Velitas · built 100% with AI" },
      texto: {
        es: "Un juego corto para el Día de Velitas que llega por correo corporativo: une a los equipos, genera comunidad y celebra el compañerismo.",
        en: "A short game for Colombia's Little Candles Day, sent by company email to bring teams together and celebrate camaraderie.",
      },
      pantalla: "assets/ai-lab/velitas/inicio.jpg",
      estado: { es: "Próximamente", en: "Coming soon" },
      href: "",
    },
    {
      nombre: "Rumbo",
      tipo: { es: "App propia · experimento con IA", en: "Personal app · AI experiment" },
      texto: {
        es: "Un gestor de trámites de visa que diseñé y construí con IA: progreso, documentos y próximos pasos en una sola vista.",
        en: "A visa-process manager I designed and built with AI: progress, documents and next steps in a single view.",
      },
      pantalla: "assets/ai-lab/rumbo/v3-inicio.webp",
      href: "ai-lab/rumbo/",
    },
    {
      nombre: "WHEN Justice",
      tipo: { es: "IA en un producto real", en: "AI on a real product" },
      texto: {
        es: "Investigación, prototipos en código y QA con IA, con mis propios pull requests en un equipo de desarrollo.",
        en: "Research, coded prototypes and QA with AI, with my own pull requests inside an engineering team.",
      },
      pantalla: "assets/proyectos/when-justice/globo-ia.jpg",
      href: "",
    },
  ],

  /* ---------- Cómo trabajo ---------- */
  servicios: [
    { t: { es: "Product design de punta a punta", en: "End-to-end product design" }, d: { es: "Discovery, flujos, prototipos y validación con usuarios.", en: "Discovery, flows, prototypes and user validation." }, prueba: "banco-w", cliente: "Banco W" },
    { t: { es: "Investigación y estrategia UX", en: "Research and UX strategy" }, d: { es: "Entrevistas, focus groups y pruebas, atadas a métricas de negocio.", en: "Interviews, focus groups and testing, tied to business metrics." }, prueba: "nova", cliente: "Nova" },
    { t: { es: "UI y design systems", en: "UI and design systems" }, d: { es: "Interfaces accesibles y sistemas listos para desarrollo.", en: "Accessible interfaces and systems ready for development." }, prueba: "keralty", cliente: "Keralty" },
    { t: { es: "Prototipos y producto con IA", en: "Prototyping and product with AI" }, d: { es: "Prototipos funcionales, análisis, QA y pull requests propios.", en: "Working prototypes, analysis, QA and my own pull requests." }, prueba: "#ia", cliente: { es: "Diseño + IA", en: "Design + AI" } },
  ],

  /* ---------- Trayectoria (fuente: CV) ---------- */
  trayectoria: [
    { anios: { es: "2025 – hoy", en: "2025 – now" }, rol: "Product Designer", lugar: "Katapult · WHEN Justice", vinculo: { es: "Contratista", en: "Contractor" } },
    { anios: "2024 – 2026", rol: "UX/UI Designer", lugar: "Iridian · MyCoach, Heel, HEP", vinculo: { es: "Contratista", en: "Contractor" } },
    { anios: "2024 – 2025", rol: "UX/UI Designer", lugar: "Rob Levine Legal Solutions · Nova", vinculo: { es: "Contratista", en: "Contractor" } },
    { anios: "2025", rol: "UX/UI Designer", lugar: "Keralty", vinculo: { es: "Término fijo", en: "Fixed-term" } },
    { anios: "2023 – 2024", rol: "UX/UI Designer", lugar: "Banco W" },
    { anios: "2022 – 2023", rol: "UX/UI Designer", lugar: "Destiny co · Toyota, Colombina" },
    { anios: "2020 – 2022", rol: "Graphic Designer", lugar: "Rappi México" },
  ],

  testimonio: {
    pendiente: true,
    cita: { es: "Aquí va una cita real de un PM o ingeniero con quien hayas trabajado.", en: "A real quote from a PM or engineer you worked with goes here." },
    autor: { es: "Nombre · rol · empresa", en: "Name · role · company" },
  },

  contacto: {
    rol: { pendiente: true, es: "Rol buscado y modalidad por confirmar", en: "Target role and arrangement TBC" },
    lugar: { es: "Cali, Colombia · UTC−5 · Español nativo, inglés B2", en: "Cali, Colombia · UTC−5 · Native Spanish, English B2" },
  },
};
