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
    es: "Disponible · Senior Product Designer o UX/UI Designer · Remoto",
    en: "Available · Senior Product Designer or UX/UI Designer · Remote",
  },
  retrato: { src: "assets/retrato/isabella.jpg?v=2", alt: { es: "Retrato de Isabella Montes", en: "Portrait of Isabella Montes" } },

  /* ---------- Cifras (se animan al entrar en pantalla) ---------- */
  cifras: [
    { valor: "+5", texto: { es: "años diseñando productos digitales", en: "years designing digital products" } },
    { desde: { es: "2 semanas →", en: "2 weeks →" }, valor: "5 min", texto: { es: "para pedir un CDT · Banco W", en: "to request a CDT · Banco W" } },
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
        tipo: "moviles",
        fondo: ["#22145E", "#5B32D6", "#9C7BFF"],
        pantallas: ["assets/proyectos/banco-w/screen-transfer.jpg", "assets/proyectos/banco-w/screen-data.jpg", "assets/proyectos/banco-w/screen-schedule.jpg"],
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
    { slug: "fitup", pantalla: "assets/proyectos/fitup/screen-home.jpg" },
  ],

  /* ---------- Diseño + IA ---------- */
  ia: [
    /* destacada: IA en producción para una marca grande (caso propio en /toyota/) */
    {
      destacado: true,
      nombre: "Toyota Colombia",
      tipo: { es: "IA en producción · imágenes de producto", en: "AI in production · product imagery" },
      texto: {
        es: "Páginas de vehículo para Toyota con fotos de producto creadas con Gemini y fieles a cada modelo: GR Yaris, RAV4 HEV, Corolla Cross.",
        en: "Vehicle pages for Toyota with product photos made in Gemini and true to every model: GR Yaris, RAV4 HEV, Corolla Cross.",
      },
      foto: "assets/proyectos/toyota/corolla-cross-gr-curva.jpg",
      metrica: { valor: "+15", texto: { es: "páginas publicadas, ~2 semanas cada una", en: "pages published, ~2 weeks each" } },
      href: "toyota/",
    },
    {
      nombre: "Cuida los Faroles",
      tipo: { es: "Día de Velitas · hecho 100% con IA", en: "Día de Velitas · built 100% with AI" },
      texto: {
        es: "Un juego corto para el Día de Velitas que llega por correo corporativo: une a los equipos, genera comunidad y celebra el compañerismo.",
        en: "A short game for Colombia's Little Candles Day, sent by company email to bring teams together and celebrate camaraderie.",
      },
      pantalla: "assets/ai-lab/velitas/inicio.jpg",
      fondo: ["#0D1036", "#2E2F86", "#8A8CE6"],
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
      fondo: ["#17123F", "#4A3AD1", "#A89CFF"],
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
      fondo: ["#0E1417", "#2A211D", "#FF3C00"],
      href: "",
    },
  ],

  /* ---------- Cómo trabajo ---------- */
  /* fotos de servicios: Unsplash, licencia gratuita (ver assets/servicios/FUENTES.txt) */
  servicios: [
    { t: { es: "Product design de punta a punta", en: "End-to-end product design" }, d: { es: "Discovery, flujos, prototipos y validación con usuarios.", en: "Discovery, flows, prototypes and user validation." }, prueba: "banco-w", cliente: "Banco W", img: "assets/servicios/producto.jpg?v=3" },
    { t: { es: "Investigación y estrategia UX", en: "Research and UX strategy" }, d: { es: "Entrevistas, focus groups y pruebas, atadas a métricas de negocio.", en: "Interviews, focus groups and testing, tied to business metrics." }, prueba: "nova", cliente: "Nova", img: "assets/servicios/investigacion.jpg?v=3" },
    { t: { es: "UI y design systems", en: "UI and design systems" }, d: { es: "Interfaces accesibles y sistemas listos para desarrollo.", en: "Accessible interfaces and systems ready for development." }, prueba: "keralty", cliente: "Keralty", img: "assets/servicios/ui-sistemas.jpg?v=3" },
    { t: { es: "Prototipos y producto con IA", en: "Prototyping and product with AI" }, d: { es: "Prototipos funcionales, QA y mejoras de interfaz por mi cuenta.", en: "Working prototypes, QA and interface improvements on my own." }, prueba: "#ia", cliente: { es: "Diseño + IA", en: "Design + AI" }, img: "assets/servicios/ia.jpg?v=3" },
  ],

  /* ---------- Proceso (Folira): texto armado con lo que cuentan los casos; aprobado por Isabella (2026-11-19).
     Fotos elegidas por Isabella en Unsplash (ver assets/proceso/FUENTES.txt) ---------- */
  proceso: {
    pasos: [
      { t: { es: "Entender", en: "Understand" }, h: { es: "Entender el problema antes de diseñar.", en: "Understand the problem before designing." }, d: { es: "Entrevistas, datos y el proceso actual del negocio, para saber qué importa y qué se va a medir.", en: "Interviews, data and the current business process, to know what matters and what we will measure." }, img: "assets/proceso/entender.jpg", icono: "buscar" },
      { t: { es: "Diseñar", en: "Design" }, h: { es: "Flujos claros antes que pantallas.", en: "Clear flows before screens." }, d: { es: "Flujos, wireframes e interfaz sobre el design system, de cerca con producto e ingeniería.", en: "Flows, wireframes and UI on top of the design system, close to product and engineering." }, img: "assets/proceso/disenar.jpg", icono: "lapiz" },
      { t: { es: "Validar", en: "Validate" }, h: { es: "Probar con personas reales.", en: "Test with real people." }, d: { es: "Pruebas con usuarios y métricas para decidir con evidencia, no con opiniones.", en: "User testing and metrics to decide with evidence, not opinions." }, img: "assets/proceso/validar.jpg", icono: "check" },
      { t: { es: "Entregar", en: "Deliver" }, h: { es: "Listo para desarrollo.", en: "Ready for development." }, d: { es: "Entrego a desarrollo con specs y componentes, y hago QA de lo que se implementa. Con IA, también hago mejoras de interfaz por mi cuenta, sin tocar backend.", en: "I hand off to development with specs and components, and QA what gets built. With AI, I also make interface improvements on my own, no backend." }, img: "assets/proceso/entregar.jpg", icono: "enviar" },
    ],
  },

  /* ---------- Trayectoria (fuente: CV) ---------- */
  trayectoria: [
    { anios: { es: "2024 – hoy", en: "2024 – now" }, rol: "Product Designer", lugar: { es: "Por contrato", en: "Contract work" }, vinculo: { es: "Contratista", en: "Contractor" },
      clientes: [
        { n: "Katapult · WHEN Justice", anios: { es: "2025 – hoy", en: "2025 – now" }, txt: { es: "Lidero el UX/UI y el design system; prototipo y hago QA con IA, y abro mis propios pull requests.", en: "I lead UX/UI and the design system; I prototype and run QA with AI, and open my own pull requests." } },
        { n: "Iridian", anios: "2024 – 2026", txt: { es: "Más de 6 proyectos de salud, tecnología y bienestar. MyCoach: +12% de usuarios activos que se quedan.", en: "6+ projects in health, tech and wellness. MyCoach: +12% active-user retention." } },
        { n: "Keralty", anios: "2025", txt: { es: "Portal de pagos de las Clínicas Dentales: del 58% al 91% de pacientes que pagan sin ayuda.", en: "Dental Clinics payment portal: from 58% to 91% of patients paying unaided." } },
        { n: "Rob Levine Legal Solutions", anios: "2024 – 2025", txt: { es: "Nova: de 7 pestañas a una sola vista, −40% de errores.", en: "Nova: from 7 tabs to a single view, −40% errors." } },
      ] },
    { anios: "2023 – 2024", rol: "UX/UI Designer", lugar: "Banco W", vinculo: { es: "Empleo directo", en: "Full-time" },
      desc: { es: "El primer producto 100% digital del banco: pedir un CDT pasó de hasta dos semanas en oficina a cinco minutos desde el celular.", en: "The bank’s first fully digital product: requesting a CDT went from up to two weeks in a branch to five minutes on a phone." } },
    { anios: "2020 – 2023", rol: "UX/UI Designer", lugar: "Destiny co", vinculo: { es: "Empleo directo", en: "Full-time" },
      desc: { es: "Interfaces web y móviles y piezas digitales para clientes como Rappi, Toyota y Colombina.", en: "Web and mobile interfaces and digital assets for clients such as Rappi, Toyota and Colombina." } },
  ],

  /* logos: Simple Icons 13.21.0 (CC0), pintados con el color de cada marca */
  herramientas: [
    { n: "Figma", logo: "assets/herramientas/figma.svg", c: "#F24E1E" },
    { n: "Maze", logo: "assets/herramientas/maze.svg", c: "#3B25E0" },
    { n: "Claude Code", logo: "assets/herramientas/claude.svg", c: "#D97757" },
    { n: "Google Analytics", logo: "assets/herramientas/googleanalytics.svg", c: "#E37400" },
    { n: "Adobe Creative Cloud", logo: "assets/herramientas/adobecreativecloud.svg", c: "#DA1F26" },
  ],

  testimonio: {
    pendiente: true,
    cita: { es: "Aquí va una cita real de un PM o ingeniero con quien hayas trabajado.", en: "A real quote from a PM or engineer you worked with goes here." },
    autor: { es: "Nombre · rol · empresa", en: "Name · role · company" },
  },

  contacto: {
    rol: { es: "Busco rol de Senior Product Designer o Senior UX/UI Designer · Remoto", en: "Looking for a Senior Product Designer or Senior UX/UI Designer role · Remote" },
    lugar: { es: "Cali, Colombia · UTC−5 · Español nativo, inglés B2", en: "Cali, Colombia · UTC−5 · Native Spanish, English B2" },
  },
};
