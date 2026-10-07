/* ==========================================================================
   PROYECTOS — el único archivo que necesitas editar para agregar casos.
   Guía completa de campos y bloques en README.md.

   Textos bilingües: { es: "...", en: "..." }  (o un string si es igual).
   En los textos puedes usar <em>palabra</em> para resaltarla con degradado.
   ========================================================================== */

window.PROYECTOS = [
  /* ============================================================= BANCO W */
  {
    slug: "banco-w",
    composicion: "fan",
    acabado: "desert",
    nombre: "Digital CDT",
    cliente: "Banco W",
    subtitulo: { es: "El primer producto digital del banco", en: "The bank’s first digital product" },
    frases: {
      es: ["Sin filas.", "Sin papeleo.", "Sin ir a la oficina."],
      en: ["No lines.", "No paperwork.", "No branch visits."],
    },
    resumen: {
      es: "Lideré el diseño del primer producto 100% digital de Banco W: abrir un CDT desde el celular, sin pisar una oficina.",
      en: "I led the design of Banco W’s first fully digital product: opening a CDT from your phone, without setting foot in a branch.",
    },
    anio: "2023–2024",
    duracion: { es: "4 meses", en: "4 months" },
    rol: { es: "Service design, investigación, diseño UI, QA", en: "Service design, research, UI design, QA" },
    herramientas: "Figma",
    equipo: { es: "1 full stack, 1 back-end, 1 analista de datos", en: "1 full stack, 1 back-end, 1 data analyst" },
    tags: { es: ["Fintech", "Mobile", "Service design"], en: ["Fintech", "Mobile", "Service design"] },
    color: "#b18cff",
    escena: [
      { dispositivo: "phone", src: "assets/proyectos/banco-w/screen-schedule.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/banco-w/screen-data.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/banco-w/screen-transfer.jpg" },
    ],
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "0", texto: { es: "visitas a una oficina para abrir un CDT", en: "branch visits to open a CDT" } },
          { valor: "100%", texto: { es: "digital, de punta a punta", en: "digital, end to end" } },
          { valor: "1", texto: { es: "primer producto digital en la historia del banco", en: "first digital product in the bank’s history" } },
          { valor: "4", texto: { es: "meses de proyecto", en: "months of work" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El problema", en: "The problem" }, bajada: { es: "Un producto popular, atrapado en una oficina", en: "A popular product, trapped in a branch" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Abrir un CDT podía tomar <em>hasta dos semanas</em>, con filas de <em>más de dos horas</em> y al menos dos visitas a la oficina.",
          en: "Opening a CDT could take <em>up to two weeks</em>, with lines of <em>over two hours</em> and at least two branch visits.",
        },
      },
      {
        tipo: "texto",
        texto: {
          es: ["Banco W es una entidad colombiana con fuerte presencia en ahorro e inversión, y el CDT es uno de sus productos más usados. Pero el proceso exigía ir a una oficina, mucho papeleo y varios pasos que generaban abandono, sobre todo para quienes viven en zonas remotas."],
          en: ["Banco W is a Colombian bank with a strong presence in savings and investment, and the CDT is one of its most used products. But opening one required branch visits, paperwork, and multiple steps that drove drop-offs, especially for people in remote areas."],
        },
      },
      {
        tipo: "contraste",
        antes: {
          titulo: { es: "Antes", en: "Before" },
          puntos: {
            es: ["Ir físicamente a una oficina para empezar y terminar", "Al menos dos visitas por documentos faltantes", "Requisitos confusos e información incompleta", "Hasta dos semanas para tener el producto"],
            en: ["Visit a branch to start and finish", "At least two visits due to missing documents", "Confusing requirements and incomplete information", "Up to two weeks to get the product"],
          },
        },
        despues: {
          titulo: { es: "Después", en: "After" },
          puntos: {
            es: ["Todo desde el celular o el computador", "Onboarding corto, guiado paso a paso", "Solo la información realmente necesaria", "El dinero llega a donde la persona elija"],
            en: ["Everything from a phone or computer", "A short onboarding, guided step by step", "Only the information that’s truly needed", "Money goes wherever the customer chooses"],
          },
        },
      },

      { tipo: "capitulo", num: "02", titulo: { es: "La investigación", en: "The research" }, bajada: { es: "Elegir qué digitalizar fue la primera decisión de diseño", en: "Choosing what to digitize was the first design decision" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Portafolio", en: "Portfolio" }, texto: { es: "Evalué todos los productos del banco: el CDT tenía el mayor dolor y era viable pese a la deuda técnica.", en: "I evaluated every product: the CDT had the biggest pain and was feasible despite technical debt." } },
          { titulo: { es: "Entrevistas", en: "Interviews" }, texto: { es: "Clientes y áreas internas: necesidades, reglas de negocio y regulación financiera.", en: "Customers and internal teams: needs, business rules, and financial regulation." } },
          { titulo: { es: "Prototipos", en: "Prototypes" }, texto: { es: "Wireframes y pruebas tempranas, luego UI y prototipos de alta fidelidad.", en: "Wireframes and early testing, then UI and high-fidelity prototypes." } },
          { titulo: { es: "Handoff", en: "Handoff" }, texto: { es: "Validación final, ajustes y entrega a desarrollo con especificaciones detalladas.", en: "Final validation, refinements, and handoff with detailed specs." } },
        ],
      },
      {
        tipo: "journey",
        titulo: { es: "User journey map: el viaje de Laura", en: "User journey map: Laura’s journey" },
        fases: [
          {
            nombre: { es: "Descubrimiento", en: "Awareness" },
            emocion: 0.55,
            accion: { es: "Había oído del CDT, pero lo asociaba con trámites tediosos y papeleo.", en: "She had heard about the CDT, but associated it with tedious processes and paperwork." },
            pensamiento: { es: "“Me da curiosidad, pero dudo por experiencias complicadas con bancos.”", en: "“Curious, but hesitant due to previous experiences with complicated banking processes.”" },
            dolores: { es: ["Información poco clara sobre beneficios y tasas", "Términos largos y confusos"], en: ["Unclear information about benefits and rates", "Long and confusing terms"] },
          },
          {
            nombre: { es: "Investigación", en: "Research" },
            emocion: 0.82,
            accion: { es: "Comparó varios bancos y Banco W tenía la mejor tasa, así que lo eligió.", en: "She researched several banks; Banco W had the best rate, so she chose it." },
            pensamiento: { es: "“Me interesa la tasa, intentémoslo a ver cómo va esta vez.”", en: "“I’m interested in the rate, let’s give it a try and see how it goes this time.”" },
            dolores: { es: ["Simuladores complicados o que no funcionan", "Información inconsistente entre web, app y oficinas"], en: ["Complicated or non-functional simulators", "Inconsistent information across website, app, and branches"] },
          },
          {
            nombre: { es: "Consideración", en: "Consideration" },
            emocion: 0.5,
            accion: { es: "El asesor le dijo que debía ir en persona con documentos físicos, hacer fila y llenar formularios.", en: "The advisor told her she had to go in person with physical documents, wait in line, and fill out forms." },
            pensamiento: { es: "“Ya tengo una idea de lo que debo hacer; suena complicado, pero intentémoslo.”", en: "“The advisor gave me an idea of what to do; it sounds complicated but let’s try.”" },
            dolores: { es: ["El asesor tarda en responder", "Demasiados términos difíciles de entender"], en: ["The advisor takes too long to respond", "Too many terms that are hard to understand"] },
          },
          {
            nombre: { es: "Decisión", en: "Decision" },
            emocion: 0.28,
            accion: { es: "Sabe que tendrá buena tasa, pero se pregunta si tanto proceso y tiempo valen la pena.", en: "She knows she’ll get a good rate, but wonders if all the process and time are worth it." },
            pensamiento: { es: "“No sé si fue la mejor opción, es demasiado proceso para abrir un producto.”", en: "“I don’t know if it was the best option, it’s a lot of process just to open a product.”" },
            dolores: { es: ["Documentos físicos y visitas presenciales", "Formularios largos y confusos"], en: ["Physical documents and in-person visits", "Long and confusing forms"] },
          },
          {
            nombre: { es: "Retención", en: "Retention" },
            emocion: 0.12,
            accion: { es: "No quiere renovar porque es muy difícil; prefiere otro banco aunque la tasa sea menor.", en: "She doesn’t want to renew because it’s so hard; she’d rather go to another bank even with a lower rate." },
            pensamiento: { es: "“No tengo tiempo para todo eso; prefiero menos tasa y un proceso más amigable.”", en: "“I don’t have time for all that; I’d rather get a lower rate and a friendlier process.”" },
            dolores: { es: ["Sin recordatorios de vencimiento o renovación", "Interfaz confusa para consultar el historial"], en: ["No reminders about expiration or renewal", "Confusing interface to check history"] },
          },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Lo que encontramos", en: "What we found" },
        items: [
          { texto: { es: "Los clientes no entendían los requisitos y entregaban información incompleta.", en: "Customers didn’t understand the requirements and submitted incomplete information." } },
          { texto: { es: "Se pedían demasiados documentos.", en: "Too many documents were requested." } },
          { texto: { es: "Filas de más de dos horas y hasta dos semanas de proceso.", en: "Lines of over two hours and up to two weeks of process." } },
          { texto: { es: "El personal también perdía tiempo con solicitudes repetidas.", en: "Staff also lost time on repeated submissions." } },
          { texto: { es: "Los flujos internos estaban fragmentados y con poca visibilidad.", en: "Internal workflows were fragmented, with little visibility." } },
        ],
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La solución", en: "The solution" }, bajada: { es: "Un flujo guiado, paso a paso", en: "A guided flow, step by step" } },
      {
        tipo: "recorrido",
        pasos: [
          { src: "assets/proyectos/banco-w/screen-schedule.jpg", alt: { es: "Bienvenida al CDT digital", en: "Digital CDT welcome" }, titulo: { es: "Reglas claras desde el inicio", en: "Clear rules from the start" }, texto: { es: "Horarios y cuándo se constituye el CDT, antes de empezar.", en: "Hours and when the CDT is set up, before starting." } },
          { src: "assets/proyectos/banco-w/screen-data.jpg", alt: { es: "Datos del CDT con opciones recomendadas", en: "CDT details with recommended options" }, titulo: { es: "Decidir con información", en: "Decide with information" }, texto: { es: "Monto y plazo con opciones comparadas y la más conveniente resaltada.", en: "Amount and term with compared options and the best one highlighted." } },
          { src: "assets/proyectos/banco-w/screen-transfer.jpg", alt: { es: "Elegir dónde recibir el dinero", en: "Choose where to receive the money" }, titulo: { es: "Recibir donde quieras", en: "Receive it anywhere" }, texto: { es: "Billetera, cuenta del banco o incluso otros bancos.", en: "Wallet, bank account, or even other banks." } },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "La decisión más contraintuitiva", en: "The most counterintuitive decision" },
        texto: {
          es: ["Dejar que el dinero saliera hacia otros bancos parecía ir contra el negocio. Pero las cuentas de ahorro del banco no eran transaccionales y obligaban a volver a la oficina. Dar opciones fue lo único que mantenía la experiencia 100% digital, y además redujo deuda técnica."],
          en: ["Letting money go to other banks seemed to go against the business. But the bank’s savings accounts weren’t transactional and forced people back to a branch. Offering options was the only way to keep the journey fully digital, and it also reduced technical debt."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "Un simulador para decidir con confianza", en: "A simulator to decide with confidence" },
        texto: {
          es: ["Tasas y ganancias proyectadas en tiempo real según el monto, plazos alternativos sugeridos y la mejor opción resaltada, desde cualquier dispositivo."],
          en: ["Real-time rates and projected earnings based on the amount, suggested alternative terms, and the best option highlighted, on any device."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "La marca del banco, más limpia y moderna", en: "The bank’s brand, cleaner and more modern" },
        texto: {
          es: ["El diseño siguió los lineamientos de marca del banco, refinados en una interfaz más limpia que priorizó la usabilidad y la accesibilidad para transmitir confianza."],
          en: ["The design followed the bank’s brand guidelines, refined into a cleaner interface that prioritized usability and accessibility to build trust."],
        },
      },
      {
        tipo: "sistema",
        fuentes: [
          { nombre: "Geomanist", uso: { es: "Títulos", en: "Headings" }, css: "Geomanist, Poppins, sans-serif" },
          { nombre: "Bariol", uso: { es: "Texto y botones", en: "Body and buttons" }, css: "Bariol, 'Inter Tight', sans-serif" },
        ],
        escala: [
          { tag: "H1", px: 40 }, { tag: "H2", px: 32 }, { tag: "H3", px: 28 },
          { tag: "H4", px: 24 }, { tag: "H5", px: 20 }, { tag: "H6", px: 16 },
        ],
        colores: [
          { nombre: "Primary", hex: "#5F259F" },
          { nombre: "Secondary", hex: "#00A3AD" },
          { nombre: "Action", hex: "#FF6900" },
          { nombre: "Success", hex: "#28CA4D" },
          { nombre: "Danger", hex: "#EC182D" },
          { nombre: "Warning", hex: "#FFCA2C" },
          { nombre: "Gray text", hex: "#54585A" },
          { nombre: "Gray dark", hex: "#2E3335" },
        ],
        botones: [
          { texto: "Continuar", fondo: "#FF6900", color: "#FFFFFF" },
          { texto: "Continuar", fondo: "#FAFAFA", color: "#F54A00", borde: "#F54A00" },
        ],
      },

      { tipo: "capitulo", num: "04", titulo: { es: "El impacto", en: "The impact" }, bajada: { es: "Validado con clientes reales del banco", en: "Validated with real bank customers" } },
      {
        tipo: "texto",
        texto: {
          es: ["Probé la experiencia con clientes reales, observé la finalización de tareas y la facilidad de navegación, e iteré hasta alinear sus necesidades con los objetivos del banco."],
          en: ["I tested the experience with real customers, observed task completion and ease of navigation, and iterated until their needs aligned with the bank’s goals."],
        },
        puntos: {
          es: ["Tiempos de servicio mucho más cortos.", "Menos errores por manejo manual.", "Clientes que confían más en lo digital.", "Más eficiencia operativa y menores costos."],
          en: ["Significantly faster service times.", "Fewer errors from manual handling.", "Customers who trust digital more.", "Greater operational efficiency and lower costs."],
        },
      },
      {
        tipo: "cita",
        texto: {
          es: "Lo que antes era un trámite lento y presencial hoy es una experiencia simple, transparente y en línea, que posicionó a Banco W en lo digital.",
          en: "What used to be a slow, in-person process is now a simple, transparent, online experience that positioned Banco W in digital.",
        },
      },
    ],
  },
  /* ================================================================ NOVA */
  {
    slug: "nova",
    composicion: "duo",
    nombre: "Nova",
    cliente: "Rob Levine Legal Solutions",
    subtitulo: { es: "Software de gestión de historias clínicas", en: "Medical records management software" },
    frases: {
      es: ["Menos pestañas.", "Menos errores.", "Más casos resueltos."],
      en: ["Fewer tabs.", "Fewer errors.", "More cases closed."],
    },
    resumen: {
      es: "Rediseñé el sistema con el que una firma de abogados gestiona miles de historias clínicas. Lo que antes exigía varias pestañas y pasos repetidos ahora vive en un solo flujo claro.",
      en: "I redesigned the system a law firm uses to manage thousands of medical records. What used to take multiple tabs and repeated steps now lives in a single, clear flow.",
    },
    anio: "2025",
    duracion: { es: "6 meses", en: "6 months" },
    rol: { es: "Investigación, diseño UI, QA", en: "Design research, UI design, QA" },
    herramientas: "Figma, Bootstrap 5",
    equipo: { es: "3 desarrolladores full stack", en: "3 full stack developers" },
    tags: { es: ["Producto interno", "UX/UI", "Legal tech"], en: ["Internal product", "UX/UI", "Legal tech"] },
    color: "#6f9bff",
    escena: [
      { dispositivo: "render", src: "assets/mockups/nova-a.webp", ratio: 1.0038, alto: 70 },
      { dispositivo: "render", src: "assets/mockups/nova-b.webp", ratio: 0.8588, alto: 75 },
    ],
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "30-40%", texto: { es: "más rápido en los flujos clave", en: "faster on key request flows" } },
          { valor: "+40", texto: { es: "pantallas rediseñadas", en: "screens redesigned" } },
          { valor: "6", texto: { es: "meses, de la investigación al QA", en: "months, from research to QA" } },
          { valor: "1", texto: { es: "solo flujo en lugar de varias pestañas", en: "single flow instead of many tabs" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El problema", en: "The problem" }, bajada: { es: "Un sistema que le costaba dinero a la firma", en: "A system that was costing the firm money" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Cada error en una solicitud de historia clínica <em>retrasaba un caso</em>. Y el sistema hacía que equivocarse fuera <em>demasiado fácil</em>.",
          en: "Every error in a records request <em>delayed a case</em>. And the system made mistakes <em>far too easy</em>.",
        },
      },
      {
        tipo: "texto",
        texto: {
          es: ["Rob Levine Legal Solutions es una firma especializada en lesiones personales y casos médicos. Solicitar, gestionar y revisar historias clínicas es la columna vertebral de su operación, y cualquier retraso afecta los resultados de los casos, la satisfacción de los clientes y los ingresos."],
          en: ["Rob Levine Legal Solutions specializes in personal injury and medical-related cases. Requesting, managing, and reviewing medical records is the backbone of its operation, and any delay affects case outcomes, client satisfaction, and revenue."],
        },
      },
      {
        tipo: "antesDespues",
        antes: { src: "assets/proyectos/nova/previous.jpg", alt: { es: "Sistema anterior, denso y lleno de pestañas", en: "Previous system, dense and tab-heavy" } },
        despues: { src: "assets/proyectos/nova/screen-dashboard.jpg", alt: { es: "Nuevo dashboard del equipo", en: "New team dashboard" } },
      },
      {
        tipo: "contraste",
        antes: {
          titulo: { es: "Antes", en: "Before" },
          puntos: {
            es: ["Varias pestañas abiertas para completar un solo proceso", "Navegación confusa y poco intuitiva", "Pasos redundantes que causaban errores", "Sin forma clara de saber el estado de una solicitud"],
            en: ["Multiple tabs open to complete a single process", "Confusing, unintuitive navigation", "Redundant steps that caused errors", "No clear way to know a request’s status"],
          },
        },
        despues: {
          titulo: { es: "Después", en: "After" },
          puntos: {
            es: ["Un flujo lineal que agrupa las tareas relacionadas", "Arquitectura de información basada en el trabajo real", "Menos pasos y menos decisiones ambiguas", "Estado visible de cada solicitud, de un vistazo"],
            en: ["A linear flow that groups related tasks", "Information architecture based on real work", "Fewer steps and fewer ambiguous choices", "Every request’s status visible at a glance"],
          },
        },
      },

      { tipo: "capitulo", num: "02", titulo: { es: "La investigación", en: "The research" }, bajada: { es: "Entender la operación antes de dibujar una pantalla", en: "Understanding the operation before drawing a screen" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Focus groups", en: "Focus groups" }, texto: { es: "Sesiones con todos los equipos para entender roles, responsabilidades y cómo circulan las historias clínicas.", en: "Sessions with every team to understand roles, responsibilities, and how records flow." } },
          { titulo: { es: "Auditoría", en: "Audit" }, texto: { es: "Revisión completa del software: pasos redundantes, navegación confusa y saltos entre pestañas.", en: "A full software audit: redundant steps, confusing navigation, and tab-hopping." } },
          { titulo: { es: "Arquitectura", en: "Architecture" }, texto: { es: "Nueva arquitectura de información alineada con los flujos reales, validada con wireframes.", en: "New information architecture aligned with real workflows, validated with wireframes." } },
          { titulo: { es: "Sistema UI", en: "UI system" }, texto: { es: "Interfaz construida con ingeniería sobre Bootstrap 5, accesible según WCAG.", en: "Interface built with engineering on Bootstrap 5, accessible per WCAG." } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Lo que encontramos", en: "What we found" },
        items: [
          { texto: { es: "Costaba encontrar funciones básicas, con pérdida de tiempo diaria.", en: "Core functions were hard to find, wasting time every day." } },
          { texto: { es: "Gestionar solicitudes requería varios pasos redundantes.", en: "Managing requests required multiple redundant steps." } },
          { texto: { es: "Acciones como editar cartas de solicitud eran manuales y propensas a errores.", en: "Actions like editing request letters were manual and error-prone." } },
          { texto: { es: "No había confirmaciones claras del estado de cada acción.", en: "There was no clear confirmation of each action’s status." } },
          { texto: { es: "La complejidad exigía mucha capacitación para cada persona nueva.", en: "The complexity required extensive training for every new hire." } },
          { texto: { es: "La falta de patrones consistentes aumentaba la carga cognitiva.", en: "Inconsistent patterns increased cognitive load." } },
        ],
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La solución", en: "The solution" }, bajada: { es: "Tres piezas que cambiaron el día a día del equipo", en: "Three pieces that changed the team’s day-to-day" } },
      {
        tipo: "spotlight",
        dispositivo: "monitor",
        items: [
          {
            titulo: { es: "Un dashboard que antes no existía", en: "A dashboard that didn’t exist" },
            texto: { es: "Los reportes se descargaban a Excel para armar gráficas a mano. Ahora el rendimiento del equipo se ve en tiempo real.", en: "Reports used to be downloaded to Excel to build charts by hand. Now team performance is visible in real time." },
            src: "assets/proyectos/nova/screen-dashboard.jpg",
            alt: { es: "Dashboard con métricas del equipo", en: "Dashboard with team metrics" },
          },
          {
            titulo: { es: "Matters: todo el caso en un lugar", en: "Matters: the whole case in one place" },
            texto: { es: "Una pantalla nueva que agrupa a los clientes de una misma familia o caso médico. Se acabó perder la conexión entre solicitudes.", en: "A new screen that groups clients from the same family or medical case. No more losing the link between requests." },
            src: "assets/proyectos/nova/screen-matters.jpg",
            alt: { es: "Pantalla Matters con la información agrupada", en: "Matters screen with grouped information" },
          },
          {
            titulo: { es: "Anular sin sesgos", en: "Voiding without bias" },
            texto: { es: "El botón verde de “anular sin reembolso” parecía la opción recomendada y causaba pérdidas. Integré el motivo en cada acción, equilibré la jerarquía y agregué íconos.", en: "A green “void without refund” button looked like the recommended option and caused losses. I tied the reason to each action, balanced the hierarchy, and added icons." },
            src: "assets/proyectos/nova/screen-request.jpg",
            alt: { es: "Pantalla para anular un registro con y sin reembolso", en: "Void record screen with and without refund" },
          },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "Un sistema visual al servicio de la usabilidad", en: "A visual system in service of usability" },
        texto: {
          es: ["La firma no tenía una base de marca sólida, así que construí la interfaz sobre Bootstrap 5: implementación rápida, componentes consistentes y patrones accesibles. Cada decisión de tipografía, espaciado y contraste priorizó la legibilidad."],
          en: ["The firm had no solid brand foundation, so I built the interface on Bootstrap 5: fast implementation, consistent components, and accessible patterns. Every typography, spacing, and contrast decision prioritized legibility."],
        },
      },
      {
        tipo: "sistema",
        fuentes: [{ nombre: "Poppins", uso: { es: "Títulos y texto", en: "Headings and body" }, css: "Poppins, sans-serif" }],
        escala: [
          { tag: "H1", px: 40 }, { tag: "H2", px: 32 }, { tag: "H3", px: 28 },
          { tag: "H4", px: 24 }, { tag: "H5", px: 20 }, { tag: "H6", px: 16 },
        ],
        colores: [
          { nombre: "Primary", hex: "#2F6CF3" },
          { nombre: "Primary dark", hex: "#1553DC" },
          { nombre: "Success", hex: "#28A745" },
          { nombre: "Danger", hex: "#DC3545" },
          { nombre: "Warning", hex: "#FFC107" },
          { nombre: "Gray 100", hex: "#F8F9FA" },
          { nombre: "Gray 600", hex: "#6C757D" },
          { nombre: "Gray 900", hex: "#212529" },
        ],
        botones: [
          { texto: "Apply", fondo: "#2F6CF3", color: "#FFFFFF" },
          { texto: "Void and Refund", fondo: "#FFC107", color: "#212529" },
          { texto: "Void Without Refund", fondo: "#DC3545", color: "#FFFFFF" },
        ],
      },

      { tipo: "capitulo", num: "04", titulo: { es: "El impacto", en: "The impact" }, bajada: { es: "Validado con quienes lo usan todos los días", en: "Validated with the people who use it every day" } },
      {
        tipo: "texto",
        texto: {
          es: ["Hice pruebas de usabilidad con abogados, paralegales y personal administrativo, y comparé tiempos y tasas de error frente al sistema anterior."],
          en: ["I ran usability tests with attorneys, paralegals, and admin staff, and compared task times and error rates against the old system."],
        },
        puntos: {
          es: ["Flujos clave entre 30% y 40% más rápidos.", "Muchos menos errores, reprocesos y solicitudes perdidas.", "Mayor adopción y confianza del equipo.", "Ahorros reales por menos retrasos en los casos."],
          en: ["Key flows 30–40% faster.", "Far fewer errors, rework, and lost requests.", "Higher staff adoption and confidence.", "Real savings from fewer case delays."],
        },
      },
      {
        tipo: "cita",
        texto: {
          es: "Un proceso confuso y propenso a errores se convirtió en una herramienta ágil y confiable, que ahorra tiempo y dinero a la firma.",
          en: "A confusing, error-prone process became a streamlined, reliable tool that saves the firm time and money.",
        },
      },
    ],
  },
  /* ============================================================= KERALTY */
  {
    slug: "keralty",
    composicion: "laptop-phone",
    nombre: "Dental Clinics",
    cliente: "Keralty",
    subtitulo: { es: "Sitio web y portal de pagos", en: "Website and payment portal" },
    frases: {
      es: ["Paga sin recordar nada.", "Sin empezar de cero.", "Con total confianza."],
      en: ["Pay without remembering.", "Never start over.", "With full confidence."],
    },
    resumen: {
      es: "Rediseñé el sitio y el portal de pagos de las Clínicas Dentales Keralty: de un sitio institucional y un pago que obligaba a empezar de cero, a una experiencia guiada que genera confianza.",
      en: "I redesigned Keralty Dental Clinics’ website and payment portal: from an institutional site and a payment flow that forced you to start over, to a guided experience that builds trust.",
    },
    anio: "2023–2024",
    duracion: { es: "3 meses", en: "3 months" },
    rol: { es: "Investigación, diseño UI", en: "Design research, UI design" },
    herramientas: "Figma",
    equipo: { es: "Producto, negocio e ingeniería", en: "Product, Business, Engineering" },
    tags: { es: ["Salud", "Web", "Pagos"], en: ["Healthcare", "Web", "Payments"] },
    color: "#38d9c6",
    escena: [
      { dispositivo: "render", src: "assets/mockups/keralty-b.webp", ratio: 1.0038, alto: 80 },
      { dispositivo: "render", src: "assets/mockups/keralty-phone.webp", ratio: 0.5736, alto: 56 },
    ],
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "2", texto: { es: "datos para encontrar tus tratamientos", en: "fields to find your treatments" } },
          { valor: "4", texto: { es: "pasos claros hasta confirmar el pago", en: "clear steps to a confirmed payment" } },
          { valor: "A/B", texto: { es: "pruebas para validar el nuevo flujo", en: "testing to validate the new flow" } },
          { valor: "3", texto: { es: "meses de proyecto", en: "months of work" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El problema", en: "The problem" }, bajada: { es: "Pagar era un ejercicio de memoria", en: "Paying was a memory exercise" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Un error en el pago te mandaba <em>de vuelta al inicio</em>. Y tenías que recordar <em>de memoria</em> qué tratamiento pagar.",
          en: "One mistake in the payment sent you <em>back to the start</em>. And you had to remember <em>by heart</em> which treatment to pay for.",
        },
      },
      {
        tipo: "antesDespues",
        antes: { src: "assets/proyectos/keralty/previous.jpg", alt: { es: "Home anterior de las clínicas", en: "Previous clinics home page" } },
        despues: { src: "assets/proyectos/keralty/new-home.jpg", alt: { es: "Nuevo home de las clínicas", en: "New clinics home page" } },
      },
      {
        tipo: "contraste",
        antes: {
          titulo: { es: "Antes", en: "Before" },
          puntos: {
            es: ["Un sitio informativo, poco persuasivo", "Flujo de pago sin jerarquía ni guía", "Errores que obligaban a reiniciar todo", "Llamados a la acción débiles"],
            en: ["An informative but unpersuasive site", "A payment flow with no hierarchy or guidance", "Errors that forced a full restart", "Weak calls to action"],
          },
        },
        despues: {
          titulo: { es: "Después", en: "After" },
          puntos: {
            es: ["Promociones, tratamientos y experiencia en primer plano", "Pasos claros: paciente → pago → pagador → confirmación", "Prevención y recuperación de errores", "“Agenda tu cita” siempre a la mano"],
            en: ["Promotions, treatments, and experience up front", "Clear steps: patient → payment → payer → confirmation", "Error prevention and recovery", "“Book your appointment” always at hand"],
          },
        },
      },

      { tipo: "capitulo", num: "02", titulo: { es: "La investigación", en: "The research" }, bajada: { es: "Evidencia antes que opiniones", en: "Evidence before opinions" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Heurística", en: "Heuristics" }, texto: { es: "Evaluación del sitio y del pago: navegación confusa, sin jerarquía ni prevención de errores.", en: "Site and payment evaluation: confusing navigation, no hierarchy or error prevention." } },
          { titulo: { es: "Benchmark", en: "Benchmark" }, texto: { es: "Plataformas de salud y odontología nacionales e internacionales.", en: "National and international healthcare and dental platforms." } },
          { titulo: { es: "Wireframes", en: "Wireframes" }, texto: { es: "Recorrido reestructurado: menos pasos, más jerarquía y prevención de errores.", en: "A restructured journey: fewer steps, more hierarchy, error prevention." } },
          { titulo: { es: "Pruebas A/B", en: "A/B testing" }, texto: { es: "Usabilidad, finalización de tareas y tasa de errores, con iteraciones.", en: "Usability, task completion, and error rates, with iterations." } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Lo que encontramos", en: "What we found" },
        items: [
          { texto: { es: "El sitio era más informativo que persuasivo y atraía pocos pacientes nuevos.", en: "The site was more informative than persuasive and attracted few new patients." } },
          { texto: { es: "La navegación no respondía a lo que esperaban los pacientes.", en: "Navigation didn’t match patients’ expectations." } },
          { texto: { es: "El pago obligaba a reiniciar cuando había un error.", en: "The payment flow forced a restart after any mistake." } },
          { texto: { es: "La competencia ofrecía experiencias más claras y atractivas.", en: "Competitors offered clearer, more engaging experiences." } },
          { texto: { es: "Llamados a la acción débiles reducían citas y pagos.", en: "Weak calls to action reduced bookings and payments." } },
        ],
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La solución", en: "The solution" }, bajada: { es: "Un sitio que vende y un pago que acompaña", en: "A site that sells and a payment that guides" } },
      {
        tipo: "spotlight",
        dispositivo: "frontal",
        items: [
          {
            titulo: { es: "Un home que convence", en: "A home that convinces" },
            texto: { es: "Del tono institucional a uno centrado en el paciente: promociones, tratamientos, años de experiencia y el pago en línea a la vista.", en: "From institutional to patient-centered: promotions, treatments, years of experience, and online payment in plain sight." },
            src: "assets/proyectos/keralty/new-home.jpg",
            alt: { es: "Nuevo home", en: "New home page" },
          },
          {
            titulo: { es: "Servicios que invitan a agendar", en: "Services that invite booking" },
            texto: { es: "Estructura clara, beneficios concretos, buenas imágenes y “Agenda tu cita” a lo largo de la página.", en: "Clear structure, concrete benefits, quality images, and “Book your appointment” throughout the page." },
            src: "assets/proyectos/keralty/service.jpg",
            alt: { es: "Página del servicio de ortodoncia", en: "Orthodontics service page" },
          },
          {
            titulo: { es: "Nada que recordar", en: "Nothing to remember" },
            texto: { es: "Con el tipo y número de documento, la plataforma trae los tratamientos pendientes de pago o que admiten abonos. Paciente, tratamiento, clínica y valor se confirman antes de pedir los datos del pagador.", en: "With just a document type and number, the platform retrieves treatments due or open to partial payments. Patient, treatment, clinic, and amount are confirmed before asking for payer details." },
            src: "assets/proyectos/keralty/pay-1.jpg",
            alt: { es: "Paso inicial del pago", en: "Initial payment step" },
          },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "La marca, aplicada con sistema", en: "The brand, applied systematically" },
        texto: {
          es: ["Keralty tiene una librería de marca sólida que sus productos digitales no aplicaban de forma consistente. El rediseño la usó de manera sistemática: colores, tipografía y componentes al servicio de la confianza."],
          en: ["Keralty has a strong brand library that its digital products didn’t apply consistently. The redesign used it systematically: colors, typography, and components in service of trust."],
        },
      },
      {
        tipo: "sistema",
        fuentes: [{ nombre: "Proxima Nova", uso: { es: "Toda la familia: Bold, Medium y Regular", en: "Whole family: Bold, Medium and Regular" }, css: "'Proxima Nova', 'Inter Tight', sans-serif" }],
        escala: [
          { tag: "H1", px: 48, movil: 32 }, { tag: "H2", px: 40, movil: 28 }, { tag: "H3", px: 32, movil: 26 },
          { tag: "H4", px: 28, movil: 24 }, { tag: "H5", px: 24, movil: 20 }, { tag: "Body", px: 16, movil: 14 },
        ],
        colores: [
          { nombre: { es: "Principal · 5.39:1", en: "Primary · 5.39:1" }, hex: "#0071A3" },
          { nombre: { es: "Secundario · 4.5:1", en: "Secondary · 4.5:1" }, hex: "#008767" },
          { nombre: { es: "Secundario · 11.95:1", en: "Secondary · 11.95:1" }, hex: "#002F87" },
          { nombre: { es: "Texto", en: "Text" }, hex: "#212121" },
        ],
        degradados: [
          { nombre: { es: "Azul verde", en: "Blue green" }, de: "#389EE1", a: "#2DB789" },
          { nombre: { es: "Azul", en: "Blue" }, de: "#0071CE", a: "#60BEF0" },
          { nombre: { es: "Verde", en: "Green" }, de: "#008767", a: "#57DBA2" },
        ],
      },

      { tipo: "capitulo", num: "04", titulo: { es: "El impacto", en: "The impact" }, bajada: { es: "Validado con pacientes reales", en: "Validated with real patients" } },
      {
        tipo: "texto",
        texto: {
          es: ["Probé el nuevo flujo con pacientes reales, enfocándome en elegir el servicio, revisar costos y pagar en línea."],
          en: ["I tested the new flow with real patients, focusing on choosing a service, reviewing costs, and paying online."],
        },
        puntos: {
          es: ["Un pago más simple y rápido.", "Más claridad al entender y confirmar los valores.", "Navegación más intuitiva.", "Pacientes más seguros al gestionar sus servicios en línea."],
          en: ["A simpler, faster payment.", "More clarity when understanding and confirming amounts.", "More intuitive navigation.", "Patients more confident managing services online."],
        },
      },
      {
        tipo: "cita",
        texto: {
          es: "De una plataforma institucional y cargada de información a una experiencia moderna y centrada en el paciente, que facilita agendar y pagar en línea.",
          en: "From an institutional, information-heavy platform to a modern, patient-centered experience that makes booking and paying online easy.",
        },
      },
    ],
  },
  /* ============================================================= MYCOACH */
  {
    slug: "mycoach",
    composicion: "arc",
    acabado: "white",
    nombre: "MyCoach",
    cliente: "MyCoach",
    subtitulo: { es: "Rediseño de la app de entrenamiento personal", en: "Personal training app redesign" },
    frases: {
      es: ["Un programa para cada meta.", "Entrena a tu manera.", "Tu PT en el bolsillo."],
      en: ["A program for every goal.", "Train your way.", "Your PT in your pocket."],
    },
    resumen: {
      es: "Rediseñé la app de MyCoach, la plataforma de entrenamiento personal del Reino Unido, para que cada tipo de atleta —de quien prepara un Hyrox a quien entrena en casa— encuentre su programa, entrene y siga su progreso en un solo lugar.",
      en: "I redesigned the app for MyCoach, the UK personal training platform, so every kind of athlete —from Hyrox racers to people training at home— can find their program, train, and track progress in one place.",
    },
    anio: "2025",
    rol: { es: "Diseño UX/UI, wireflows, design system", en: "UX/UI design, wireflows, design system" },
    herramientas: "Figma",
    tags: { es: ["App móvil", "Rediseño", "Fitness"], en: ["Mobile app", "Redesign", "Fitness"] },
    color: "#c9b8ff",
    escena: [
      { dispositivo: "phone", src: "assets/proyectos/mycoach/home.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/mycoach/program.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/mycoach/workout.jpg" },
    ],
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "6", texto: { es: "flujos rediseñados de punta a punta", en: "end-to-end flows redesigned" } },
          { valor: "+40", texto: { es: "pantallas en alta fidelidad", en: "high-fidelity screens" } },
          { valor: "12", texto: { es: "objetivos para personalizar el plan", en: "goals to personalize the plan" } },
          { valor: "1", texto: { es: "design system alineado con la marca", en: "brand-aligned design system" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El reto", en: "The challenge" }, bajada: { es: "Una sola app para atletas muy distintos", en: "One app for very different athletes" } },
      {
        tipo: "declaracion",
        texto: {
          es: "La misma app tenía que servirle a quien corre su <em>primer maratón</em>, a quien prepara un <em>Hyrox</em> y a quien solo quiere entrenar en casa.",
          en: "The same app had to work for someone running their <em>first marathon</em>, someone training for <em>Hyrox</em>, and someone who just wants to train at home.",
        },
      },
      {
        tipo: "texto",
        texto: {
          es: ["MyCoach conecta a miles de personas con entrenadores en una comunidad que se define como “el PT en tu bolsillo”. Con la nueva identidad de marca, la app necesitaba ponerse a la altura: más personal, más clara y capaz de acompañar objetivos y tipos de entrenamiento muy diferentes."],
          en: ["MyCoach connects thousands of people with coaches in a community that calls itself “the PT in your pocket.” With a new brand identity, the app had to step up: more personal, clearer, and able to support very different goals and training styles."],
        },
      },
      {
        tipo: "contraste",
        antes: {
          titulo: { es: "Lo que había que resolver", en: "What needed solving" },
          puntos: {
            es: ["Perfiles y metas muy distintos en un mismo producto", "Programas, entrenamientos sueltos y retos mezclados", "Seguimiento disperso entre peso, dieta, ánimo y fotos", "Una marca nueva que la app aún no reflejaba"],
            en: ["Very different profiles and goals in one product", "Programs, single workouts, and challenges mixed together", "Tracking scattered across weight, diet, mood, and photos", "A new brand the app didn’t reflect yet"],
          },
        },
        despues: {
          titulo: { es: "Cómo lo abordé", en: "How I approached it" },
          puntos: {
            es: ["Onboarding que personaliza el plan desde el primer minuto", "Un flujo claro para cada forma de entrenar", "Un check-in semanal que reúne todo el seguimiento", "Un design system que traduce la marca a la interfaz"],
            en: ["An onboarding that personalizes the plan from minute one", "A clear flow for each way of training", "A weekly check-in that brings all tracking together", "A design system that translates the brand into the UI"],
          },
        },
      },

      { tipo: "capitulo", num: "02", titulo: { es: "El proceso", en: "The process" }, bajada: { es: "De la marca a cada pantalla", en: "From the brand to every screen" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Marca", en: "Brand" }, texto: { es: "Partí de las guías de marca: historia, valores, tipografía propia y paleta.", en: "I started from the brand guidelines: story, values, custom typeface, and palette." } },
          { titulo: { es: "Wireflows", en: "Wireflows" }, texto: { es: "Mapeé cada flujo de la app 3.0: registro, check-in, diario, peso, ánimo, dieta y fotos.", en: "I mapped every flow of app 3.0: sign-up, check-in, diary, weight, mood, diet, and photos." } },
          { titulo: { es: "Design system", en: "Design system" }, texto: { es: "Componentes, íconos de navegación y estilos listos para escalar.", en: "Components, navigation icons, and styles ready to scale." } },
          { titulo: { es: "Alta fidelidad", en: "High fidelity" }, texto: { es: "Más de 40 pantallas, iterando y depurando las que no aportaban.", en: "40+ screens, iterating and cutting the ones that didn’t add value." } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Principios de diseño", en: "Design principles" },
        items: [
          { titulo: { es: "Personal desde el inicio", en: "Personal from the start" }, texto: { es: "Preguntar lo justo para armar un plan que se sienta propio.", en: "Ask just enough to build a plan that feels like yours." } },
          { titulo: { es: "Un camino por tipo de entrenamiento", en: "One path per training type" }, texto: { es: "Programas de semanas o entrenamientos sueltos, sin mezclarlos.", en: "Multi-week programs or single workouts, never mixed up." } },
          { titulo: { es: "Seguir el progreso sin fricción", en: "Frictionless tracking" }, texto: { es: "Registrar peso, ánimo o comidas en pocos toques.", en: "Log weight, mood, or meals in a few taps." } },
        ],
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La solución", en: "The solution" }, bajada: { es: "Seis flujos, una experiencia", en: "Six flows, one experience" } },
      {
        tipo: "recorrido",
        pasos: [
          { src: "assets/proyectos/mycoach/goals.jpg", alt: { es: "Selección de objetivos", en: "Goal selection" }, titulo: { es: "Tus metas, tu plan", en: "Your goals, your plan" }, texto: { es: "Hasta tres objetivos entre doce: maratón, Hyrox, fuerza, salud general y más.", en: "Up to three goals out of twelve: marathon, Hyrox, strength, overall health, and more." } },
          { src: "assets/proyectos/mycoach/matching.jpg", alt: { es: "Emparejando el programa", en: "Matching the program" }, titulo: { es: "Un programa a tu medida", en: "A program that fits you" }, texto: { es: "La app empareja a cada persona con su programa ideal mientras hace un calentamiento rápido.", en: "The app matches each person with their ideal program during a quick warm-up." } },
          { src: "assets/proyectos/mycoach/all-set.jpg", alt: { es: "Todo listo", en: "All set" }, titulo: { es: "Listo para empezar", en: "Ready to go" }, texto: { es: "Un cierre claro que lleva directo al primer entrenamiento.", en: "A clear finish that leads straight to the first workout." } },
          { src: "assets/proyectos/mycoach/workout.jpg", alt: { es: "Rutina del día con sus ejercicios", en: "Today’s routine with its exercises" }, titulo: { es: "Tu rutina, lista para entrenar", en: "Your routine, ready to train" }, texto: { es: "Duración, ejercicios, series y calorías a la vista, y un solo botón para empezar.", en: "Duration, exercises, sets, and calories at a glance, with one button to start." } },
        ],
      },
      {
        tipo: "spotlight",
        dispositivo: "phone",
        items: [
          {
            titulo: { es: "Hoy, de un vistazo", en: "Today, at a glance" },
            texto: { es: "El entrenamiento del día y las métricas clave en el inicio, para empezar sin pensar.", en: "Today’s workout and key metrics on the home screen, so you can start without thinking." },
            src: "assets/proyectos/mycoach/home.jpg",
            alt: { es: "Inicio de MyCoach", en: "MyCoach home" },
          },
          {
            titulo: { es: "¿Cómo quieres entrenar?", en: "How do you want to train?" },
            texto: { es: "Programas de 4 a 12 semanas o entrenamientos sueltos de 10 a 90 minutos: dos caminos claros.", en: "4–12 week programs or single 10–90 minute workouts: two clear paths." },
            src: "assets/proyectos/mycoach/how-train.jpg",
            alt: { es: "Elegir forma de entrenar", en: "Choose how to train" },
          },
          {
            titulo: { es: "Programas con entrenador", en: "Coach-led programs" },
            texto: { es: "Cada programa muestra a su entrenador, objetivos, ejercicios y estructura antes de agregarlo al calendario.", en: "Each program shows its coach, goals, exercises, and structure before adding it to your calendar." },
            src: "assets/proyectos/mycoach/program.jpg",
            alt: { es: "Detalle de un programa", en: "Program detail" },
          },
          {
            titulo: { es: "Un programa por disciplina", en: "A program per discipline" },
            texto: { es: "Un Hyrox no se entrena como una rutina de fuerza: los programas se filtran por entrenador y disciplina para encontrar el indicado.", en: "Hyrox isn’t trained like a strength routine: programs are filtered by coach and discipline to find the right one." },
            src: "assets/proyectos/mycoach/programs.jpg",
            alt: { es: "Lista de programas por disciplina", en: "Program list by discipline" },
          },
          {
            titulo: { es: "Check-in semanal", en: "Weekly check-in" },
            texto: { es: "Peso, ánimo, diario, dieta, fotos de progreso y notas, reunidos en una sola lista.", en: "Weight, mood, diary, diet, progress pics, and notes, gathered in one list." },
            src: "assets/proyectos/mycoach/check-in.jpg",
            alt: { es: "Check-in semanal", en: "Weekly check-in" },
          },
          {
            titulo: { es: "Herramientas que ayudan", en: "Tools that help" },
            texto: { es: "Calculadora de 1RM y plan de macros para entrenar y comer con datos.", en: "A 1RM calculator and macro plan to train and eat with data." },
            src: "assets/proyectos/mycoach/one-rep-max.jpg",
            alt: { es: "Calculadora de 1RM", en: "1RM calculator" },
          },
        ],
      },
      {
        tipo: "sistema",
        fuentes: [
          { nombre: "PP MyCoach Sans", uso: { es: "Títulos (tipografía propia de la marca)", en: "Headings (custom brand typeface)" }, css: "'PP MyCoach Sans', 'Inter Tight', sans-serif" },
          { nombre: "General Sans", uso: { es: "Texto e interfaz", en: "Body and UI" }, css: "'General Sans', 'Inter Tight', sans-serif" },
        ],
        escala: [{ tag: "H1", px: 48 }, { tag: "H2", px: 32 }, { tag: "H3", px: 24 }, { tag: "H4", px: 18 }, { tag: "Body", px: 16 }, { tag: "Caption", px: 12 }],
        colores: [
          { nombre: "Navy", hex: "#070826" },
          { nombre: "Purple", hex: "#6142F6" },
          { nombre: "Lime", hex: "#E2EB80" },
          { nombre: "Lilac", hex: "#D1BFFA" },
          { nombre: "Cloud", hex: "#F7F7EF" },
          { nombre: "Sky", hex: "#C4D6FC" },
        ],
        botones: [
          { texto: "Continue", fondo: "#6142F6", color: "#FFFFFF" },
          { texto: "Start Workout", fondo: "#E2EB80", color: "#070826" },
        ],
      },

      { tipo: "capitulo", num: "04", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Una app que se siente como un entrenador", en: "An app that feels like a coach" } },
      {
        tipo: "texto",
        texto: {
          es: ["El rediseño ordenó la experiencia en flujos claros por objetivo y tipo de entrenamiento, llevó la nueva identidad de MyCoach a cada pantalla y dejó un design system listo para que el producto siga creciendo."],
          en: ["The redesign organized the experience into clear flows by goal and training type, brought MyCoach’s new identity to every screen, and left a design system ready for the product to keep growing."],
        },
      },
      {
        tipo: "cita",
        texto: {
          es: "Que cada persona sienta que tiene a su entrenador en el bolsillo, sin importar cómo entrene.",
          en: "Making everyone feel they have their coach in their pocket, no matter how they train.",
        },
      },
    ],
  },
  /* =========================================================== LEMON JOY */
  {
    slug: "lemon-joy",
    composicion: "depth",
    acabado: "blue",
    nombre: "Lemon Joy",
    cliente: "Lemon Joy Events",
    subtitulo: { es: "Sitio web para agencia de eventos", en: "Website for an events agency" },
    frases: {
      es: ["Eventos que se sienten.", "Marcas que conectan.", "Experiencias memorables."],
      en: ["Events you can feel.", "Brands that connect.", "Memorable experiences."],
    },
    resumen: {
      es: "Diseñé el sitio de Lemon Joy Events, una agencia de eventos corporativos que trabaja con marcas como Marc Jacobs, Covergirl y Burberry: una web que vende experiencias con la misma energía de sus eventos.",
      en: "I designed the website for Lemon Joy Events, a corporate events agency working with brands like Marc Jacobs, Covergirl, and Burberry: a site that sells experiences with the same energy as its events.",
    },
    anio: "2025",
    rol: { es: "Diseño web, dirección visual, design system", en: "Web design, visual direction, design system" },
    herramientas: "Figma",
    tags: { es: ["Diseño web", "Desktop + mobile", "Eventos"], en: ["Web design", "Desktop + mobile", "Events"] },
    color: "#f6ef85",
    escena: [
      { dispositivo: "render", src: "assets/mockups/lemon-macbook.webp", ratio: 1.6377 },
      { dispositivo: "phone", src: "assets/proyectos/lemon-joy/mobile-1.jpg" },
    ],
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "+35%", texto: { es: "solicitudes de propuesta desde el sitio tras el lanzamiento", en: "proposal requests from the site after launch" } },
          { valor: "2x", texto: { es: "páginas vistas por visita: el portafolio invita a seguir explorando", en: "pages per visit: the portfolio invites further exploring" } },
          { valor: "3", texto: { es: "clics como máximo para pedir una propuesta desde cualquier página", en: "clicks at most to request a proposal from any page" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El reto", en: "The challenge" }, bajada: { es: "Vender experiencias en una pantalla", en: "Selling experiences on a screen" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Una agencia que crea experiencias memorables necesitaba <em>una web a la altura</em> de sus eventos.",
          en: "An agency that creates memorable experiences needed <em>a website that lived up</em> to its events.",
        },
      },
      {
        tipo: "texto",
        texto: {
          es: ["Lemon Joy organiza convenciones, lanzamientos de producto, cenas experienciales y fiestas corporativas para marcas reconocidas. Su mejor argumento es su trabajo, así que el sitio debía mostrarlo con fuerza, explicar con claridad qué hacen y llevar a las marcas a pedir una propuesta."],
          en: ["Lemon Joy runs conventions, product launches, experiential dinners, and corporate parties for well-known brands. Their best argument is their work, so the site had to showcase it boldly, clearly explain what they do, and lead brands to request a proposal."],
        },
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Objetivos del sitio", en: "Site goals" },
        items: [
          { titulo: { es: "Mostrar el portafolio", en: "Show the portfolio" }, texto: { es: "Que las marcas y los eventos hablen por la agencia.", en: "Let the brands and events speak for the agency." } },
          { titulo: { es: "Explicar los servicios", en: "Explain the services" }, texto: { es: "Siete tipos de evento fáciles de recorrer y comparar.", en: "Seven event types that are easy to browse and compare." } },
          { titulo: { es: "Generar contactos", en: "Generate leads" }, texto: { es: "Llamados a la acción visibles en cada recorrido.", en: "Visible calls to action along every path." } },
        ],
      },

      { tipo: "capitulo", num: "02", titulo: { es: "El enfoque", en: "The approach" }, bajada: { es: "La energía de un evento, traducida a la web", en: "The energy of an event, translated to the web" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Wireframes", en: "Wireframes" }, texto: { es: "Arquitectura de las 8 páginas: home, servicios, casos, nosotros, blog y contacto.", en: "Architecture for 8 pages: home, services, work, about, blog, and contact." } },
          { titulo: { es: "Design system", en: "Design system" }, texto: { es: "Tipografía, paleta, botones, inputs y componentes reutilizables.", en: "Typography, palette, buttons, inputs, and reusable components." } },
          { titulo: { es: "Diseño", en: "Design" }, texto: { es: "Desktop y mobile, con la marca aplicada en cada página.", en: "Desktop and mobile, with the brand applied to every page." } },
          { titulo: { es: "Prototipo", en: "Prototype" }, texto: { es: "Animaciones de carga y navegación prototipadas para el equipo de desarrollo.", en: "Loading and navigation animations prototyped for the dev team." } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Decisiones de diseño", en: "Design decisions" },
        items: [
          { titulo: { es: "La fotografía manda", en: "Photography leads" }, texto: { es: "Los eventos reales son el contenido principal: generan confianza al instante.", en: "Real events are the main content: they build trust instantly." } },
          { titulo: { es: "Tipografía con carácter", en: "Type with character" }, texto: { es: "Brandon Grotesque en mayúsculas con acentos manuscritos, como la marca.", en: "Uppercase Brandon Grotesque with handwritten accents, just like the brand." } },
          { titulo: { es: "Contraste que guía", en: "Contrast that guides" }, texto: { es: "Navy profundo con amarillo limón para resaltar lo importante y los botones.", en: "Deep navy with lemon yellow to highlight what matters and the buttons." } },
          { titulo: { es: "Navegación siempre a mano", en: "Navigation always at hand" }, texto: { es: "Menú lateral fijo con redes sociales, sin quitarle espacio a las imágenes.", en: "A fixed side menu with social links, without taking space from the imagery." } },
        ],
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La solución", en: "The solution" }, bajada: { es: "Un sitio que se siente como un evento", en: "A site that feels like an event" } },
      {
        tipo: "spotlight",
        dispositivo: "frontal",
        items: [
          {
            titulo: { es: "“The bond between people & brands”", en: "“The bond between people & brands”" },
            texto: { es: "Un hero con el mensaje de la marca en grande y un llamado a la acción claro desde el primer segundo.", en: "A hero with the brand message front and center and a clear call to action from the first second." },
            src: "assets/proyectos/lemon-joy/home-hero.jpg",
            alt: { es: "Hero del home", en: "Home hero" },
          },
          {
            titulo: { es: "Qué hacemos, en un vistazo", en: "What we do, at a glance" },
            texto: { es: "Los tipos de evento como tarjetas con fotos reales, para recorrerlas como una galería.", en: "Event types as cards with real photos, browsable like a gallery." },
            src: "assets/proyectos/lemon-joy/home-services.jpg",
            alt: { es: "Sección de servicios", en: "Services section" },
          },
          {
            titulo: { es: "Valores que generan confianza", en: "Values that build trust" },
            texto: { es: "Cinco valores con íconos propios que explican cómo trabaja la agencia.", en: "Five values with custom icons that explain how the agency works." },
            src: "assets/proyectos/lemon-joy/home-values.jpg",
            alt: { es: "Valores de la agencia", en: "Agency values" },
          },
          {
            titulo: { es: "El trabajo como protagonista", en: "The work takes center stage" },
            texto: { es: "Eventos para Marc Jacobs, Covergirl y más, presentados como casos de éxito.", en: "Events for Marc Jacobs, Covergirl, and more, presented as success stories." },
            src: "assets/proyectos/lemon-joy/home-events.jpg",
            alt: { es: "Eventos memorables", en: "Memorable events" },
          },
          {
            titulo: { es: "Casos de estudio", en: "Case studies" },
            texto: { es: "Cada evento con su reto, la solución y los detalles que lo hicieron memorable.", en: "Each event with its challenge, solution, and the details that made it memorable." },
            src: "assets/proyectos/lemon-joy/case-study.jpg",
            alt: { es: "Caso de estudio de un evento", en: "Event case study" },
          },
        ],
      },
      {
        tipo: "responsive",
        titulo: { es: "Mobile, con el mismo impacto", en: "Mobile, with the same impact" },
        texto: {
          es: "El sitio se pensó también para el teléfono: el mensaje y la acción principal caben en la primera pantalla, y los servicios se recorren como tarjetas en una lectura vertical y cómoda.",
          en: "The site was also designed for phones: the message and main action fit on the first screen, and services are browsed as cards in a comfortable vertical read.",
        },
        pantallas: [
          { src: "assets/proyectos/lemon-joy/mobile-1.jpg", alt: { es: "Home en mobile", en: "Mobile home" } },
          { src: "assets/proyectos/lemon-joy/mobile-2.jpg", alt: { es: "Servicios en mobile", en: "Mobile services" } },
        ],
      },
      {
        tipo: "sistema",
        fuentes: [
          { nombre: "Brandon Grotesque", uso: { es: "Títulos en mayúsculas", en: "Uppercase headings" }, css: "'Brandon Grotesque', 'Inter Tight', sans-serif" },
          { nombre: "Be Vietnam", uso: { es: "Texto y navegación", en: "Body and navigation" }, css: "'Be Vietnam Pro', 'Inter Tight', sans-serif" },
          { nombre: "Rock Salt", uso: { es: "Acentos manuscritos", en: "Handwritten accents" }, css: "'Rock Salt', cursive" },
        ],
        escala: [{ tag: "H1", px: 180 }, { tag: "H2", px: 90 }, { tag: "H3", px: 32 }, { tag: "Body", px: 20 }, { tag: "Small", px: 16 }],
        colores: [
          { nombre: "Navy", hex: "#002554" },
          { nombre: "Deep navy", hex: "#001735" },
          { nombre: "Lemon", hex: "#F6EF85" },
          { nombre: "Blue", hex: "#0289CC" },
          { nombre: "Sky", hex: "#64D3FF" },
          { nombre: "White", hex: "#FFFFFF" },
        ],
        botones: [
          { texto: "See more", fondo: "#F6EF85", color: "#001735" },
          { texto: "Contact us", fondo: "#002554", color: "#F6EF85", borde: "#F6EF85" },
        ],
      },

      { tipo: "capitulo", num: "04", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Una web con la personalidad de la marca", en: "A website with the brand’s personality" } },
      {
        tipo: "texto",
        texto: {
          es: ["El sitio presenta a Lemon Joy como lo que es: una agencia que conecta personas y marcas a través de experiencias. Ocho plantillas consistentes en desktop y mobile, un design system reutilizable y una narrativa visual que pone el trabajo de la agencia en primer plano."],
          en: ["The site presents Lemon Joy as what it is: an agency that connects people and brands through experiences. Eight consistent templates across desktop and mobile, a reusable design system, and a visual narrative that puts the agency’s work up front."],
        },
      },
      {
        tipo: "cita",
        texto: {
          es: "Si los eventos se recuerdan, la web también debía hacerlo.",
          en: "If the events are memorable, the website had to be too.",
        },
      },
    ],
  },
  /* =============================================================== FITUP */
  {
    slug: "fitup",
    composicion: "deck",
    acabado: "black",
    nombre: "FitUp",
    cliente: "FitUp",
    subtitulo: { es: "App de entrenamiento personal", en: "Personal training app" },
    frases: {
      es: ["Sin improvisar.", "Progreso visible.", "Tu entrenador de bolsillo."],
      en: ["No more guessing.", "Visible progress.", "A pocket-sized trainer."],
    },
    resumen: {
      es: "Una app de entrenamiento que funciona como un entrenador personal de bolsillo: rutinas a tu nivel, progreso visible y motivación para no rendirte.",
      en: "A fitness app that works like a pocket-sized personal trainer: routines that fit your level, visible progress, and motivation to keep going.",
    },
    anio: "",
    rol: { es: "Investigación UX, diseño UI, pruebas de usabilidad", en: "UX research, UI design, usability testing" },
    tags: { es: ["App móvil", "UX/UI", "Fitness"], en: ["Mobile app", "UX/UI", "Fitness"] },
    color: "#a66bff",
    escena: [
      { dispositivo: "phone", src: "assets/proyectos/fitup/screen-home.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/fitup/screen-today.jpg" },
      { dispositivo: "phone", src: "assets/proyectos/fitup/screen-goal.jpg" },
    ],
    caso: true,
    bloques: [
      {
        tipo: "impacto",
        items: [
          { valor: "12", texto: { es: "entrevistas con usuarios", en: "user interviews" } },
          { valor: "200", texto: { es: "personas encuestadas", en: "people surveyed" } },
          { valor: "4", texto: { es: "apps analizadas en el benchmark", en: "apps analyzed in the benchmark" } },
          { valor: "10", texto: { es: "usuarios en pruebas de usabilidad", en: "users in usability tests" } },
        ],
      },

      { tipo: "capitulo", num: "01", titulo: { es: "El problema", en: "The problem" }, bajada: { es: "Entrenar sin saber si estás avanzando", en: "Training without knowing if you’re improving" } },
      {
        tipo: "declaracion",
        texto: {
          es: "Lo peor de empezar a entrenar es <em>no saber por dónde empezar</em>.",
          en: "The worst part of starting to exercise is <em>knowing where to start</em>.",
        },
      },
      {
        tipo: "texto",
        texto: {
          es: ["La mayoría de quienes van al gimnasio no logran registrar sus entrenamientos de forma constante y no tienen una manera clara de ver su progreso. Buscan una app que los motive y les dé retroalimentación personalizada de sus entrenadores."],
          en: ["Most gym users have trouble consistently tracking their workouts and have no clear way to visualize their progress. They’re looking for an app that motivates them and gives personalized feedback from trainers."],
        },
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Objetivos de la investigación", en: "Research objectives" },
        items: [
          { titulo: { es: "Problemas", en: "Problems" }, texto: { es: "Identificar los principales obstáculos al seguir rutinas de ejercicio.", en: "Identify the main problems users face when following exercise routines." } },
          { titulo: { es: "Motivaciones", en: "Motivations" }, texto: { es: "Entender motivaciones, frustraciones y hábitos frente al ejercicio.", en: "Understand motivations, frustrations, and habits around exercise." } },
          { titulo: { es: "Funcionalidades", en: "Features" }, texto: { es: "Evaluar qué funcionalidades mejorarían realmente la experiencia.", en: "Evaluate which features would truly improve the experience." } },
        ],
      },

      { tipo: "capitulo", num: "02", titulo: { es: "La investigación", en: "The research" }, bajada: { es: "Qué hacen los mejores y qué necesitan las personas", en: "What the best apps do and what people need" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Descubrir", en: "Discovery" }, texto: { es: "Definición del problema, benchmark, investigación UX y user journey.", en: "Problem definition, benchmark, UX research, and user journey." } },
          { titulo: { es: "Diseñar", en: "Design" }, texto: { es: "Flujo de la app, wireframes y diseño UI.", en: "App flow, wireframing, and UI design." } },
          { titulo: { es: "Prototipar", en: "Prototype" }, texto: { es: "Prototipo navegable para validar con usuarios reales.", en: "A clickable prototype to validate with real users." } },
          { titulo: { es: "Validar", en: "Validate" }, texto: { es: "Pruebas de usabilidad y ajustes sobre los hallazgos.", en: "Usability tests and adjustments based on findings." } },
        ],
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Benchmark", en: "Benchmark" },
        items: [
          { titulo: "Nike Training Club", texto: { es: "Entrenamientos gratis, niveles de dificultad y videos. Lo clave: imágenes motivadoras y personalización según metas.", en: "Free workouts, difficulty levels, and videos. Key: motivating imagery and goal-based customization." } },
          { titulo: "Strava", texto: { es: "Seguimiento de actividades, retos y competencias con amigos. Lo clave: competencia social y gamificación.", en: "Activity tracking, challenges, and competitions with friends. Key: social competition and gamification." } },
          { titulo: "Fitbit", texto: { es: "Monitoreo de salud, estadísticas y comunidad. Lo clave: integración con wearables y seguimiento constante.", en: "Health monitoring, statistics, and community. Key: wearable integration and constant tracking." } },
          { titulo: "Freeletics", texto: { es: "Rutinas de alta intensidad con peso corporal. Lo clave: entrenamientos que se adaptan a cada persona.", en: "High-intensity bodyweight routines. Key: workouts that adapt to each person." } },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "Lo que escuchamos", en: "What we heard" },
        texto: {
          es: ["Hice 12 entrevistas con personas que usan otras apps o quieren empezar, y una encuesta a 200 personas para entender preferencias y hábitos de entrenamiento."],
          en: ["I conducted 12 interviews with current and potential users of other apps, and surveyed 200 people to understand preferences and training habits."],
        },
      },
      {
        tipo: "tarjetas",
        items: [
          { titulo: { es: "Navegación compleja", en: "Complex navigation" }, texto: { es: "Costaba elegir entrenamientos adecuados para su nivel.", en: "It was hard to pick workouts that fit their fitness level." } },
          { titulo: { es: "Sin retroalimentación visual", en: "No visual feedback" }, texto: { es: "Frustración por no tener un seguimiento claro del progreso.", en: "Frustration at not having clear tracking of their progress." } },
          { titulo: { es: "Rutinas monótonas", en: "Monotonous workouts" }, texto: { es: "Aburrimiento de repetir las mismas rutinas cada semana.", en: "Boredom from repeating the same routines every week." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "“A veces me siento perdida en el gimnasio y no sé por dónde empezar; necesito una guía que me dé confianza.” — Fit Starter, freelancer millennial",
          en: "“Sometimes I feel lost in the gym and don’t know where to start; I need a guide to help me feel more confident.” — Fit Starter, millennial freelancer",
        },
      },
      {
        tipo: "contraste",
        antes: {
          titulo: { es: "Frustraciones", en: "Frustrations" },
          puntos: {
            es: ["No tiene tiempo para sesiones largas", "No sabe si está progresando", "No sabe si hace bien los ejercicios"],
            en: ["No time for long gym sessions", "Can’t tell if she’s making progress", "Unsure if she’s doing exercises correctly"],
          },
        },
        despues: {
          titulo: { es: "Necesidades", en: "Needs" },
          puntos: {
            es: ["Rutinas cortas y personalizadas, incluso en casa", "Retroalimentación visual constante: gráficas y metas", "Videos o guías claras de cada ejercicio"],
            en: ["Short, personalized routines, even at home", "Constant visual feedback: charts and goals", "Clear exercise videos or guides"],
          },
        },
      },
      {
        tipo: "journey",
        titulo: { es: "User journey map", en: "User journey map" },
        fases: [
          {
            nombre: { es: "Descubrimiento", en: "Awareness" },
            emocion: 0.4,
            accion: { es: "Va al gimnasio con regularidad, pero no ve los resultados que espera.", en: "She goes to the gym regularly but isn’t getting the results she expects." },
            pensamiento: { es: "“Quizás no hago los ejercicios correctos, o no los hago bien.”", en: "“Maybe I’m not doing the right exercises, or not doing them right.”" },
            dolores: { es: ["No tiene una rutina clara e improvisa", "Duda de su técnica y del uso de las máquinas"], en: ["No clear routine; she improvises", "Doubts her technique and equipment use"] },
          },
          {
            nombre: { es: "Investigación", en: "Research" },
            emocion: 0.35,
            accion: { es: "Lee artículos, ve videos de entrenadores y pregunta a conocidos con más experiencia.", en: "Reads articles, watches trainer videos, and asks more experienced acquaintances." },
            pensamiento: { es: "“Quizás debería pagar un entrenador, pero no sé si puedo comprometerme.”", en: "“Maybe I should invest in a personal trainer, but I’m not sure I can commit.”" },
            dolores: { es: ["Tanta información abruma", "Las soluciones genéricas no se adaptan a su nivel"], en: ["The amount of information is overwhelming", "Generic solutions don’t fit her level"] },
          },
          {
            nombre: { es: "Consideración", en: "Consideration" },
            emocion: 0.25,
            accion: { es: "Piensa en clases grupales o programas en línea, pero no sabe qué camino tomar.", en: "Considers group classes or online programs, but feels unsure which way to go." },
            pensamiento: { es: "“No sé si inscribirme a clases grupales o seguir intentándolo sola.”", en: "“I don’t know whether to sign up for group classes or keep trying on my own.”" },
            dolores: { es: ["Le cuesta decidir qué opción le sirve", "Teme que las opciones avanzadas sean muy caras"], en: ["Hard to decide which option will help", "Fears advanced options are too expensive"] },
          },
          {
            nombre: { es: "Decisión", en: "Decision" },
            emocion: 0.55,
            accion: { es: "Decide que necesita algo que la guíe de forma estructurada.", en: "Decides she needs something to guide her in a structured way." },
            pensamiento: { es: "“Necesito algo que me diga exactamente qué hacer, a mi nivel y con mis metas.”", en: "“I need something that tells me exactly what to do, for my level and goals.”" },
            dolores: { es: ["Está decidida, pero no tiene claro el camino", "No ha encontrado cómo medir su progreso"], en: ["Determined, but the path isn’t clear", "Hasn’t found a way to track progress"] },
          },
          {
            nombre: { es: "Retención", en: "Retention" },
            emocion: 0.68,
            accion: { es: "Sigue una rutina más estructurada y empieza a mejorar, aunque sin un seguimiento claro.", en: "Follows a more structured routine and starts improving, but without clear follow-up." },
            pensamiento: { es: "“Debería buscar algo que me ayude a organizarme y medir lo que hago.”", en: "“I should look for something to help me get organized and measure what I do.”" },
            dolores: { es: ["No tiene forma de medir su progreso a largo plazo", "Aún duda de si ejecuta bien los ejercicios"], en: ["No way to measure long-term progress", "Still unsure if she executes exercises correctly"] },
          },
        ],
      },

      { tipo: "capitulo", num: "03", titulo: { es: "La solución", en: "The solution" }, bajada: { es: "Un entrenador personal de bolsillo", en: "A pocket-sized personal trainer" } },
      {
        tipo: "declaracion",
        texto: {
          es: "FitUp analiza cómo entrenas para <em>ajustar tus rutinas</em> a tus metas.",
          en: "FitUp analyzes how you train to <em>tailor your routines</em> to your goals.",
        },
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Qué hace FitUp", en: "What FitUp does" },
        items: [
          { titulo: { es: "Entrenamiento a tu medida", en: "Training customization" }, texto: { es: "Rutinas por tipo (HIIT, fuerza, cardio, flexibilidad) y por nivel.", en: "Routines by type (HIIT, strength, cardio, flexibility) and level." } },
          { titulo: { es: "Seguimiento del progreso", en: "Progress tracking" }, texto: { es: "Peso, calorías, tiempo de entrenamiento, estadísticas y medallas.", en: "Weight, calories, training time, statistics, and medals." } },
          { titulo: { es: "Entrenamientos guiados", en: "Guided workouts" }, texto: { es: "Cada ejercicio con series, músculos involucrados y temporizador.", en: "Every exercise with sets, muscles involved, and a timer." } },
          { titulo: { es: "Planeación nutricional", en: "Nutritional planning" }, texto: { es: "Apoyo para acompañar el entrenamiento con buenos hábitos.", en: "Support to pair training with healthy habits." } },
          { titulo: { es: "Comunidad y motivación", en: "Community and motivation" }, texto: { es: "Rachas, metas diarias y retos para no rendirse.", en: "Streaks, daily goals, and challenges to keep going." } },
          { titulo: { es: "Retos y metas", en: "Challenges and goals" }, texto: { es: "Objetivos claros que hacen visible cada avance.", en: "Clear goals that make every step forward visible." } },
        ],
      },
      {
        tipo: "spotlight",
        dispositivo: "phone",
        items: [
          {
            titulo: { es: "Un inicio que te dice qué hacer hoy", en: "A home that tells you what to do today" },
            texto: { es: "El entrenamiento del día arriba y, debajo, rutinas por tipo y por nivel. Nadie vuelve a llegar al gimnasio sin saber por dónde empezar.", en: "Today’s training up top, then routines by type and level. No one shows up at the gym without knowing where to start again." },
            src: "assets/proyectos/fitup/screen-home.jpg",
            alt: { es: "Inicio de FitUp", en: "FitUp home" },
          },
          {
            titulo: { es: "Tu plan, ejercicio por ejercicio", en: "Your plan, exercise by exercise" },
            texto: { es: "Ejercicios restantes, tiempo para terminar y la lista del día con series y repeticiones, para marcar cada logro.", en: "Exercises left, time to finish, and today’s list with sets and reps, so every win gets checked off." },
            src: "assets/proyectos/fitup/screen-today.jpg",
            alt: { es: "Plan de entrenamiento del día", en: "Today’s training plan" },
          },
          {
            titulo: { es: "Progreso que se ve", en: "Progress you can see" },
            texto: { es: "Meta diaria de calorías, el ejercicio de hoy y una racha visual que convierte la constancia en motivación.", en: "A daily calorie goal, today’s exercise, and a visual streak that turns consistency into motivation." },
            src: "assets/proyectos/fitup/screen-goal.jpg",
            alt: { es: "Meta diaria y racha", en: "Daily goal and streak" },
          },
        ],
      },
      {
        tipo: "texto",
        titulo: { es: "Arquitectura de la app", en: "App architecture" },
        texto: {
          es: ["Cinco secciones desde el inicio: Entrenamientos (por tipo y por nivel, rutinas personalizadas), Mi progreso (métricas, estadísticas y medallas), Perfil (datos, preferencias e historial), Soporte (FAQ y contacto) y Ajustes."],
          en: ["Five sections from Home: Workouts (by type and level, personalized routines), My progress (metrics, statistics, and medals), Profile (info, preferences, and history), Support (FAQs and contact), and Settings."],
        },
      },

      { tipo: "capitulo", num: "04", titulo: { es: "La validación", en: "The validation" }, bajada: { es: "Probado con 10 personas de distintos niveles", en: "Tested with 10 people across fitness levels" } },
      {
        tipo: "texto",
        texto: {
          es: ["Hice pruebas de usabilidad con 10 usuarios de perfiles principiante, intermedio y avanzado, para identificar problemas de navegación, comprensión de la interfaz y utilidad de las recomendaciones."],
          en: ["I ran usability tests with 10 beginner, intermediate, and advanced users to identify navigation issues, interface comprehension, and the usefulness of recommendations."],
        },
      },
      {
        tipo: "tarjetas",
        items: [
          { titulo: { es: "Lo que funcionó", en: "What worked" }, texto: { es: "La mayoría encontró muy útil la personalización automática de las rutinas.", en: "Most users found the automatic routine customization useful." } },
          { titulo: { es: "Lo que falló", en: "What failed" }, texto: { es: "A algunas personas les costaba encontrar las gráficas de progreso.", en: "Some users had trouble finding the progress charts." } },
          { titulo: { es: "Cómo lo resolví", en: "How I fixed it" }, texto: { es: "Llevé la sección de progreso al inicio, a un toque de distancia.", en: "I made the progress section accessible from the home screen." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "Darle a las personas el control de su proceso: entrenar con un plan, ver cada avance y seguir motivadas.",
          en: "Empowering people to take control of their process: train with a plan, see every step forward, and stay motivated.",
        },
      },
    ],
  },
];

/* ==========================================================================
   MARCAS — franja de logos en la home. El logo se muestra en blanco.
   Si "logo" está vacío se muestra el nombre como texto.
   ========================================================================== */
window.MARCAS = [
  { nombre: "Rappi", logo: "assets/logos/rappi.svg" },
  { nombre: "Toyota", logo: "assets/logos/toyota.svg" },
  { nombre: "Keralty", logo: "assets/logos/keralty.png" },
  { nombre: "Banco W", logo: "assets/logos/banco-w.png" },
  { nombre: "Rob Levine Legal Solutions", logo: "assets/logos/rob-levine.svg" },
  { nombre: "Heel", logo: "assets/logos/heel.png" },
  { nombre: "MyCoach", logo: "assets/logos/mycoach.svg" },
];
