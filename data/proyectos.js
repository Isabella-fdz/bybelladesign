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
    destacado: true,
    titular: {
      es: "Abrir un CDT pasó de dos semanas y dos visitas a la oficina a cinco minutos desde el celular.",
      en: "Opening a CDT went from two weeks and two branch visits to five minutes on a phone.",
    },
    producto: { es: "CDT digital (web y móvil)", en: "Digital CDT (web and mobile)" },
    industria: "Fintech",
    duracion: { es: "4 meses", en: "4 months" },
    rol: { es: "Product Designer (líder de diseño)", en: "Product Designer (design lead)" },
    alcance: { es: "Service design, investigación, UI, QA", en: "Service design, research, UI, QA" },
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
          { desde: { es: "2 semanas", en: "2 weeks" }, valor: "5 min", texto: { es: "para abrir un CDT, sin pisar una oficina", en: "to open a CDT, without visiting a branch" } },
          { valor: "+30%", texto: { es: "en satisfacción (CSAT) frente al proceso en oficina", en: "in satisfaction (CSAT) vs. the in-branch process" } },
          { valor: "+20%", texto: { es: "aperturas de CDT en los primeros 6 meses", en: "CDT openings in the first 6 months" } },
          { valor: "0", texto: { es: "visitas a una oficina en todo el proceso", en: "branch visits in the whole process" } },
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

      { tipo: "capitulo", num: "02", titulo: { es: "El contexto", en: "The context" }, bajada: { es: "Un banco sin productos digitales y un equipo pequeño", en: "A bank with no digital products and a small team" } },
      {
        tipo: "texto",
        texto: {
          es: ["Banco W es una entidad colombiana con fuerte presencia en ahorro e inversión, y el CDT es uno de sus productos más usados. Pero el proceso exigía ir a una oficina, mucho papeleo y varios pasos que generaban abandono, sobre todo para quienes viven en zonas remotas."],
          en: ["Banco W is a Colombian bank with a strong presence in savings and investment, and the CDT is one of its most used products. But opening one required branch visits, paperwork, and multiple steps that drove drop-offs, especially for people in remote areas."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "Las restricciones", en: "The constraints" },
        texto: {
          es: ["Era el primer producto 100% digital del banco, así que no había nada que reutilizar: ni componentes, ni flujos, ni procesos internos para atender solicitudes en línea. Lideré el diseño de punta a punta junto a un equipo de tres personas de ingeniería y datos."],
          en: ["This was the bank’s first fully digital product, so there was nothing to reuse: no components, no flows, no internal process to handle online requests. I led design end to end alongside a three-person engineering and data team."],
        },
        puntos: {
          es: ["Regulación financiera: verificación de identidad y origen de fondos obligatorios.", "Deuda técnica: las cuentas de ahorro del banco no eran transaccionales.", "4 meses para pasar de la idea a producción.", "Usuarios en zonas remotas, con conexiones inestables."],
          en: ["Financial regulation: mandatory identity and source-of-funds checks.", "Technical debt: the bank’s savings accounts weren’t transactional.", "4 months to go from idea to production.", "Users in remote areas, on unstable connections."],
        },
      },

      { tipo: "capitulo", num: "03", titulo: { es: "Investigación", en: "Research" }, bajada: { es: "Elegir qué digitalizar fue la primera decisión de diseño", en: "Choosing what to digitize was the first design decision" } },
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
      {
        tipo: "hallazgo",
        etiqueta: { es: "El hallazgo que cambió el alcance", en: "The insight that changed the scope" },
        texto: { es: "“Fui dos veces a la oficina porque me faltaba un papel que nadie me pidió la primera vez.”", en: "“I went to the branch twice because I was missing a document nobody asked for the first time.”" },
        fuente: { es: "Clienta de CDT, entrevista 4 de 9", en: "CDT customer, interview 4 of 9" },
        implicacion: { es: "el problema no era solo la distancia, era la incertidumbre. Decidimos mostrar todas las reglas antes de empezar y pedir cada dato una sola vez.", en: "the problem wasn’t just distance, it was uncertainty. We decided to show every rule up front and ask for each piece of data only once." },
      },

      { tipo: "capitulo", num: "04", titulo: { es: "Decisiones clave", en: "Key decisions" }, bajada: { es: "Tres decisiones que definieron el producto", en: "Three decisions that defined the product" } },
      {
        tipo: "tarjetas",
        items: [
          {
            titulo: { es: "La decisión más contraintuitiva", en: "The most counterintuitive decision" },
            texto: { es: "Dejar que el dinero saliera hacia otros bancos parecía ir contra el negocio. Pero las cuentas de ahorro del banco no eran transaccionales y obligaban a volver a la oficina. Dar opciones fue lo único que mantenía la experiencia 100% digital, y además redujo deuda técnica.", en: "Letting money go to other banks seemed to go against the business. But the bank’s savings accounts weren’t transactional and forced people back to a branch. Offering options was the only way to keep the journey fully digital, and it also reduced technical debt." },
          },
          {
            titulo: { es: "Un simulador para decidir con confianza", en: "A simulator to decide with confidence" },
            texto: { es: "Tasas y ganancias proyectadas en tiempo real según el monto, plazos alternativos sugeridos y la mejor opción resaltada, desde cualquier dispositivo.", en: "Real-time rates and projected earnings based on the amount, suggested alternative terms, and the best option highlighted, on any device." },
          },
          {
            titulo: { es: "Pedir solo lo que la regulación exige", en: "Ask only for what regulation requires" },
            texto: { es: "El formulario en oficina tenía 4 páginas. Revisamos cada campo con cumplimiento y riesgo: si el banco ya tenía el dato o la norma no lo exigía, salía. Quedaron 9 campos, validados en tiempo real contra la información del cliente.", en: "The in-branch form was 4 pages long. We reviewed every field with compliance and risk: if the bank already had the data or regulation didn’t require it, it went. 9 fields remained, validated in real time against the customer’s data." },
          },
        ],
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Diseñar la experiencia", en: "Designing the experience" }, bajada: { es: "Un flujo guiado, paso a paso", en: "A guided flow, step by step" } },
      {
        tipo: "recorrido",
        pasos: [
          { src: "assets/proyectos/banco-w/screen-schedule.jpg", alt: { es: "Bienvenida al CDT digital", en: "Digital CDT welcome" }, titulo: { es: "Reglas claras desde el inicio", en: "Clear rules from the start" }, texto: { es: "Horarios y cuándo se constituye el CDT, antes de empezar.", en: "Hours and when the CDT is set up, before starting." } },
          { src: "assets/proyectos/banco-w/screen-data.jpg", alt: { es: "Datos del CDT con opciones recomendadas", en: "CDT details with recommended options" }, titulo: { es: "Decidir con información", en: "Decide with information" }, texto: { es: "Monto y plazo con opciones comparadas y la más conveniente resaltada.", en: "Amount and term with compared options and the best one highlighted." } },
          { src: "assets/proyectos/banco-w/screen-transfer.jpg", alt: { es: "Elegir dónde recibir el dinero", en: "Choose where to receive the money" }, titulo: { es: "Recibir donde quieras", en: "Receive it anywhere" }, texto: { es: "Billetera, cuenta del banco o incluso otros bancos.", en: "Wallet, bank account, or even other banks." } },
          { src: "assets/proyectos/banco-w/screen-confirm.jpg", alt: { es: "Confirmación de los datos del CDT", en: "CDT details confirmation" }, titulo: { es: "Confirmar sin sorpresas", en: "Confirm with no surprises" }, texto: { es: "Antes de pagar, un resumen claro con la inversión, la ganancia neta y la retención.", en: "Before paying, a clear summary of the investment, net earnings, and withholding." } },
        ],
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

      { tipo: "capitulo", num: "06", titulo: { es: "Validación", en: "Validation" }, bajada: { es: "Probado con clientes reales del banco", en: "Tested with real bank customers" } },
      {
        tipo: "texto",
        texto: {
          es: ["Hice tres rondas de pruebas de usabilidad moderadas con 12 clientes del banco, en celular y computador. Les pedí abrir un CDT de punta a punta y medí cuántos lo lograban sin ayuda, cuánto tardaban y dónde dudaban. Entre cada ronda ajusté el diseño."],
          en: ["I ran three rounds of moderated usability tests with 12 bank customers, on phone and desktop. I asked them to open a CDT end to end and measured how many succeeded unaided, how long it took, and where they hesitated. I adjusted the design between rounds."],
        },
        puntos: {
          es: ["Ronda 1: 7 de 12 lo lograron sin ayuda. La “retención en la fuente” confundía a casi todos.", "Ronda 2: agregamos una explicación en lenguaje simple y el desglose de la ganancia neta; 10 de 12.", "Ronda 3: movimos la elección de dónde recibir el dinero antes del pago; 12 de 12, en un promedio de 4 min 40 s."],
          en: ["Round 1: 7 of 12 succeeded unaided. “Withholding tax” confused almost everyone.", "Round 2: we added a plain-language explanation and a net-earnings breakdown; 10 of 12.", "Round 3: we moved choosing where to receive the money before payment; 12 of 12, averaging 4 min 40 s."],
        },
      },

      { tipo: "capitulo", num: "07", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Lo que cambió para los clientes y para el banco", en: "What changed for customers and for the bank" } },
      {
        tipo: "resultado",
        items: [
          { desde: { es: "2 semanas", en: "2 weeks" }, valor: "5 min", texto: { es: "para abrir un CDT, sin pisar una oficina.", en: "to open a CDT, without visiting a branch." }, medicion: { es: "tiempo de radicación en oficina (registro interno) frente al tiempo del flujo digital (analítica de eventos, mediana).", en: "in-branch filing time (internal records) vs. digital flow time (event analytics, median)." } },
          { valor: "+30%", texto: { es: "en satisfacción frente al proceso en oficina.", en: "in satisfaction vs. the in-branch process." }, medicion: { es: "encuesta CSAT al terminar la apertura, comparada con la encuesta de servicio en oficina del mismo trimestre.", en: "CSAT survey after opening, compared with the in-branch service survey for the same quarter." } },
          { valor: "+20%", texto: { es: "aperturas de CDT en los primeros 6 meses.", en: "CDT openings in the first 6 months." }, medicion: { es: "aperturas totales frente al mismo periodo del año anterior.", en: "total openings vs. the same period the previous year." } },
          { valor: "0", texto: { es: "visitas a una oficina en todo el proceso.", en: "branch visits in the whole process." }, medicion: { es: "el flujo cubre desde la simulación hasta el desembolso.", en: "the flow covers everything from simulation to payout." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "Lo que antes era un trámite lento y presencial hoy es una experiencia simple, transparente y en línea, que posicionó a Banco W en lo digital.",
          en: "What used to be a slow, in-person process is now a simple, transparent, online experience that positioned Banco W in digital.",
        },
      },

      { tipo: "capitulo", num: "08", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "Las mejores decisiones de diseño no fueron visuales. Dejar salir el dinero hacia otros bancos o quitar campos del formulario exigió convencer a negocio, riesgo y cumplimiento con evidencia de las entrevistas y las pruebas.", en: "The best design decisions weren’t visual. Letting money go to other banks or removing form fields meant convincing business, risk, and compliance with evidence from interviews and tests." },
        distinto: { es: "Instrumentaría la analítica desde el primer día. Medimos bien el resultado final, pero nos faltaron datos de abandono por paso durante el primer mes para priorizar mejoras más rápido.", en: "I’d instrument analytics from day one. We measured the final outcome well, but we lacked step-by-step drop-off data in the first month to prioritize improvements faster." },
      },
    ],
  },
  /* ================================================================ NOVA */
  {
    slug: "nova",
    composicion: "duo",
    nombre: "Nova",
    cliente: "Rob Levine Legal Solutions",
    clienteCorto: "Rob Levine",
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
    destacado: true,
    titular: {
      es: "Un sistema de historias clínicas que obligaba a saltar entre 7 pestañas se convirtió en un solo flujo, con 40% menos errores.",
      en: "A medical records system that forced people to jump across 7 tabs became a single flow, with 40% fewer errors.",
    },
    producto: { es: "Plataforma interna de gestión de historias clínicas", en: "Internal medical records platform" },
    industria: { es: "Legal / SaaS", en: "Legal / SaaS" },
    duracion: { es: "6 meses", en: "6 months" },
    rol: { es: "Product Designer", en: "Product Designer" },
    alcance: { es: "Investigación, arquitectura de información, UI, QA", en: "Research, information architecture, UI, QA" },
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
          { valor: "−40%", texto: { es: "errores en solicitudes de historias clínicas", en: "errors in medical records requests" } },
          { valor: "−20%", texto: { es: "tiempo buscando la información de un caso", en: "time spent finding a case’s information" } },
          { valor: "US$5k", texto: { es: "al mes en reprocesos y retrasos evitados", en: "a month in avoided rework and delays" } },
          { desde: { es: "7 pestañas", en: "7 tabs" }, valor: "1", texto: { es: "vista para completar una solicitud", en: "view to complete a request" } },
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
        tipo: "antesDespues",
        antes: { src: "assets/proyectos/nova/previous.jpg", alt: { es: "Sistema anterior, denso y lleno de pestañas", en: "Previous system, dense and tab-heavy" } },
        despues: { src: "assets/proyectos/nova/screen-dashboard.jpg", alt: { es: "Nuevo dashboard del equipo", en: "New team dashboard" } },
      },
      {
        tipo: "impacto",
        items: [
          { valor: "7", texto: { es: "pestañas abiertas en una sola vista para gestionar una solicitud", en: "tabs open in a single view to manage one request" } },
          { valor: "3", texto: { es: "veces aparecía “Records”, con significados distintos", en: "times “Records” appeared, each meaning something different" } },
          { valor: "16", texto: { es: "filtros visibles a la vez, sin jerarquía", en: "filters visible at once, with no hierarchy" } },
          { valor: "12.272", texto: { es: "solicitudes en una lista sin prioridad ni estado claro", en: "requests in a list with no priority or clear status" } },
        ],
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

      { tipo: "capitulo", num: "02", titulo: { es: "El contexto", en: "The context" }, bajada: { es: "Una herramienta interna que no podía detenerse", en: "An internal tool that couldn’t stop" } },
      {
        tipo: "texto",
        texto: {
          es: ["Rob Levine Legal Solutions es una firma especializada en lesiones personales y casos médicos. Solicitar, gestionar y revisar historias clínicas es la columna vertebral de su operación, y cualquier retraso afecta los resultados de los casos, la satisfacción de los clientes y los ingresos."],
          en: ["Rob Levine Legal Solutions specializes in personal injury and medical-related cases. Requesting, managing, and reviewing medical records is the backbone of its operation, and any delay affects case outcomes, client satisfaction, and revenue."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "Las restricciones", en: "The constraints" },
        texto: {
          es: ["Nova es una herramienta interna que abogados, paralegales y personal administrativo usan todo el día. No se podía detener la operación para cambiarla, así que el rediseño tenía que convivir con el sistema anterior y entrar por partes. Trabajé con tres desarrolladores full stack durante 6 meses."],
          en: ["Nova is an internal tool that attorneys, paralegals, and admin staff use all day. Operations couldn’t stop for the change, so the redesign had to coexist with the old system and roll out in stages. I worked with three full stack developers for 6 months."],
        },
        puntos: {
          es: ["Sin base de marca: la interfaz debía construirse sobre Bootstrap 5.", "Tres perfiles con tareas muy distintas sobre la misma información.", "Datos sensibles de salud: cada acción debía dejar rastro y confirmación.", "Lanzamiento gradual, sin capacitar de nuevo a todo el equipo."],
          en: ["No brand foundation: the interface had to be built on Bootstrap 5.", "Three roles with very different tasks on the same information.", "Sensitive health data: every action needed a trail and confirmation.", "Gradual rollout, without retraining the whole team."],
        },
      },

      { tipo: "capitulo", num: "03", titulo: { es: "Investigación", en: "Research" }, bajada: { es: "Entender la operación antes de dibujar una pantalla", en: "Understanding the operation before drawing a screen" } },
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
      {
        tipo: "hallazgo",
        etiqueta: { es: "El hallazgo que cambió la arquitectura", en: "The insight that changed the architecture" },
        texto: { es: "“Para saber si una solicitud ya se pagó tengo que abrir tres pestañas y comparar a ojo.”", en: "“To know if a request was already paid, I have to open three tabs and compare by eye.”" },
        fuente: { es: "Paralegal, focus group con el equipo de solicitudes", en: "Paralegal, focus group with the requests team" },
        implicacion: { es: "el sistema estaba organizado por tipo de dato, pero el equipo trabaja por caso. Reorganizamos todo alrededor de la solicitud y del caso al que pertenece.", en: "the system was organized by data type, but the team works by case. We reorganized everything around the request and the case it belongs to." },
      },

      { tipo: "capitulo", num: "04", titulo: { es: "Decisiones clave", en: "Key decisions" }, bajada: { es: "Dos decisiones que cambiaron el día a día", en: "Two decisions that changed the day-to-day" } },
      {
        tipo: "decision",
        titulo: { es: "De 7 pestañas a una sola vista", en: "From 7 tabs to a single view" },
        problema: { es: "Gestionar una solicitud obligaba a saltar entre 7 pestañas y copiar datos de una a otra.", en: "Managing a request meant jumping across 7 tabs and copying data between them." },
        hallazgo: { es: "Las personas siempre recorrían las mismas 3 o 4 pestañas en el mismo orden.", en: "People always went through the same 3 or 4 tabs in the same order." },
        decision: { es: "Un flujo lineal por solicitud, con el estado siempre visible arriba.", en: "A linear flow per request, with its status always visible at the top." },
        porque: { es: "Seguir el orden real del trabajo elimina los pasos redundantes, que eran el origen de la mayoría de los errores.", en: "Following the real order of work removes redundant steps, which caused most errors." },
      },
      {
        tipo: "decision",
        titulo: { es: "Anular sin sesgos", en: "Voiding without bias" },
        problema: { es: "“Anular sin reembolso” se usaba por error y generaba pérdidas.", en: "“Void without refund” was used by mistake and caused losses." },
        hallazgo: { es: "Era el único botón verde de la pantalla: parecía la opción recomendada.", en: "It was the only green button on screen: it looked like the recommended option." },
        decision: { es: "Igualar la jerarquía, pedir el motivo dentro de cada acción y usar íconos y color según el riesgo.", en: "Balance the hierarchy, ask for the reason within each action, and use icons and color by risk." },
        porque: { es: "En una acción irreversible, la interfaz no debe empujar hacia ninguna opción: debe hacer que la persona piense.", en: "On an irreversible action, the interface shouldn’t push toward any option: it should make people think." },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Diseñar la experiencia", en: "Designing the experience" }, bajada: { es: "Tres piezas que cambiaron el trabajo del equipo", en: "Three pieces that changed the team’s work" } },
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

      { tipo: "capitulo", num: "06", titulo: { es: "Validación", en: "Validation" }, bajada: { es: "Probado con quienes lo usan todos los días", en: "Tested with the people who use it every day" } },
      {
        tipo: "texto",
        texto: {
          es: ["Hice pruebas de usabilidad con 8 personas del equipo: 3 abogados, 3 paralegales y 2 administrativos. Cada una completó las mismas 5 tareas en el sistema anterior y en el prototipo nuevo, y comparé tiempos, errores y dudas."],
          en: ["I ran usability tests with 8 team members: 3 attorneys, 3 paralegals, and 2 admin staff. Each completed the same 5 tasks in the old system and in the new prototype, and I compared times, errors, and hesitations."],
        },
        puntos: {
          es: ["Encontrar el estado de una solicitud: de 1 min 50 s a 25 s en promedio.", "Nadie eligió “anular sin reembolso” por error en el prototipo nuevo; en el anterior, 3 de 8 lo hicieron.", "El dashboard reemplazó el reporte manual en Excel desde la primera semana."],
          en: ["Finding a request’s status: from 1 min 50 s to 25 s on average.", "No one chose “void without refund” by mistake in the new prototype; in the old one, 3 of 8 did.", "The dashboard replaced the manual Excel report from week one."],
        },
      },

      { tipo: "capitulo", num: "07", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Menos errores, menos tiempo, menos costos", en: "Fewer errors, less time, lower costs" } },
      {
        tipo: "resultado",
        items: [
          { valor: "−40%", texto: { es: "errores en solicitudes de historias clínicas.", en: "errors in medical records requests." }, medicion: { es: "solicitudes devueltas o rehechas, 3 meses antes frente a 3 meses después del lanzamiento.", en: "returned or redone requests, 3 months before vs. 3 months after launch." } },
          { valor: "−20%", texto: { es: "tiempo buscando la información de un caso.", en: "time spent finding a case’s information." }, medicion: { es: "tareas cronometradas en las pruebas, confirmadas con los registros de uso del sistema.", en: "timed tasks in testing, confirmed with system usage logs." } },
          { valor: "US$5k", texto: { es: "al mes en reprocesos y retrasos evitados.", en: "a month in avoided rework and delays." }, medicion: { es: "horas de reproceso ahorradas por la tarifa del equipo, más los costos por retrasos en los casos.", en: "rework hours saved times the team’s rate, plus the cost of case delays." } },
          { desde: { es: "7 pestañas", en: "7 tabs" }, valor: "1", texto: { es: "vista para completar una solicitud.", en: "view to complete a request." }, medicion: { es: "comparación directa del flujo anterior y el nuevo.", en: "direct comparison of the old and new flow." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "Un proceso confuso y propenso a errores se convirtió en una herramienta ágil y confiable, que ahorra tiempo y dinero a la firma.",
          en: "A confusing, error-prone process became a streamlined, reliable tool that saves the firm time and money.",
        },
      },

      { tipo: "capitulo", num: "08", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "En una herramienta interna, el diseño se mide en errores evitados y minutos recuperados. Entender la operación con el equipo antes de dibujar fue lo que permitió cambiar la arquitectura sin frenar el trabajo diario.", en: "In an internal tool, design is measured in avoided errors and recovered minutes. Understanding the operation with the team before drawing is what made it possible to change the architecture without stopping daily work." },
        distinto: { es: "Construiría el sistema de componentes antes de las pantallas. Partir de Bootstrap fue rápido, pero algunos patrones se resolvieron pantalla por pantalla y luego hubo que unificarlos.", en: "I’d build the component system before the screens. Starting from Bootstrap was fast, but some patterns were solved screen by screen and had to be unified later." },
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
    destacado: true,
    titular: {
      es: "Un pago que te mandaba de vuelta al inicio se convirtió en un flujo guiado que el 91% de los pacientes completó sin ayuda.",
      en: "A payment flow that sent you back to the start became a guided flow that 91% of patients completed unaided.",
    },
    producto: { es: "Sitio web y portal de pagos", en: "Website and payment portal" },
    industria: { es: "Salud", en: "Healthcare" },
    duracion: { es: "3 meses", en: "3 months" },
    rol: { es: "Product Designer", en: "Product Designer" },
    alcance: { es: "Benchmark, pruebas en Maze, UI, prototipado", en: "Benchmark, Maze testing, UI, prototyping" },
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
          { desde: "58%", valor: "91%", texto: { es: "completó el pago sin ayuda (pruebas en Maze)", en: "completed payment unaided (Maze tests)" } },
          { valor: "−45%", texto: { es: "tiempo para pagar un tratamiento", en: "time to pay for a treatment" } },
          { valor: "24", texto: { es: "pacientes en 3 pruebas: pago, tratamientos y versiones", en: "patients across 3 tests: payment, treatments and versions" } },
          { valor: "2", texto: { es: "datos para encontrar tus tratamientos", en: "fields to find your treatments" } },
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

      { tipo: "capitulo", num: "02", titulo: { es: "El contexto", en: "The context" }, bajada: { es: "Un sitio pensado como folleto y un pago pensado como trámite", en: "A site built as a brochure and a payment built as a formality" } },
      {
        tipo: "texto",
        texto: {
          es: ["Las Clínicas Dentales Keralty atienden a miles de pacientes con tratamientos que se pagan por partes: ortodoncia, implantes, rehabilitación. El sitio era la puerta de entrada para agendar y pagar, pero se pensó como un folleto institucional, y el pago en línea como un trámite."],
          en: ["Keralty Dental Clinics serve thousands of patients with treatments paid in installments: orthodontics, implants, rehabilitation. The site was the entry point to book and pay, but it was conceived as an institutional brochure, and online payment as a formality."],
        },
      },
      {
        tipo: "texto",
        titulo: { es: "Las restricciones", en: "The constraints" },
        texto: {
          es: ["Trabajé con producto, negocio e ingeniería en un proyecto de 3 meses: diez días de benchmark y heurística, dos semanas de diseño y prototipo, y el resto en pruebas, ajustes y entrega."],
          en: ["I worked with product, business, and engineering on a 3-month project: ten days of benchmark and heuristics, two weeks of design and prototyping, and the rest on testing, adjustments, and handoff."],
        },
        puntos: {
          es: ["Una pasarela de pagos existente que no se podía reemplazar.", "Quien paga no siempre es el paciente: padres, parejas, empresas.", "Tratamientos con abonos parciales y saldos pendientes.", "Una librería de marca sólida que había que respetar."],
          en: ["An existing payment gateway that couldn’t be replaced.", "The payer isn’t always the patient: parents, partners, companies.", "Treatments with partial payments and outstanding balances.", "A strong brand library that had to be respected."],
        },
      },

      { tipo: "capitulo", num: "03", titulo: { es: "Investigación", en: "Research" }, bajada: { es: "Evidencia antes que opiniones", en: "Evidence before opinions" } },
      {
        tipo: "proceso",
        fases: [
          { titulo: { es: "Heurística", en: "Heuristics" }, texto: { es: "Evaluación del sitio y del pago: navegación confusa, sin jerarquía ni prevención de errores.", en: "Site and payment evaluation: confusing navigation, no hierarchy or error prevention." } },
          { titulo: { es: "Benchmark", en: "Benchmark" }, texto: { es: "Plataformas de salud y odontología nacionales e internacionales.", en: "National and international healthcare and dental platforms." } },
          { titulo: { es: "Wireframes", en: "Wireframes" }, texto: { es: "Recorrido reestructurado: menos pasos, más jerarquía y prevención de errores.", en: "A restructured journey: fewer steps, more hierarchy, error prevention." } },
          { titulo: { es: "Pruebas en Maze", en: "Maze testing" }, texto: { es: "Tres pruebas no moderadas: pago, selección de tratamientos y versión anterior frente a la nueva.", en: "Three unmoderated tests: payment, treatment selection, and old vs. new version." } },
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
      {
        tipo: "hallazgo",
        etiqueta: { es: "El hallazgo que cambió el flujo", en: "The insight that changed the flow" },
        texto: { es: "“No sé cómo se llama mi tratamiento. Solo sé que es el de los brackets.”", en: "“I don’t know what my treatment is called. I just know it’s the braces one.”" },
        fuente: { es: "Paciente, primera prueba del flujo de pago en Maze", en: "Patient, first payment-flow test in Maze" },
        implicacion: { es: "el pago no podía depender de la memoria del paciente. Decidimos que la plataforma buscara los tratamientos a partir del documento.", en: "payment couldn’t depend on the patient’s memory. We decided the platform would find treatments from the ID document." },
      },

      { tipo: "capitulo", num: "04", titulo: { es: "Decisiones clave", en: "Key decisions" }, bajada: { es: "Nada que recordar y nada que perder", en: "Nothing to remember, nothing to lose" } },
      {
        tipo: "decision",
        titulo: { es: "Buscar con el documento, no con la memoria", en: "Search by ID, not by memory" },
        problema: { es: "Para pagar había que escribir el nombre del tratamiento y la clínica, y casi nadie los recordaba.", en: "To pay, you had to type the treatment name and clinic, and almost nobody remembered them." },
        hallazgo: { es: "Los pacientes reconocen su tratamiento cuando lo ven, pero no lo recuerdan cuando lo tienen que escribir.", en: "Patients recognize their treatment when they see it, but can’t recall it when they have to type it." },
        decision: { es: "Con tipo y número de documento, la plataforma muestra los tratamientos pendientes o que admiten abonos.", en: "With document type and number, the platform shows treatments due or open to partial payment." },
        porque: { es: "Reconocer es más fácil que recordar: pasamos de varios campos de memoria a 2 datos que todos tienen a mano.", en: "Recognition beats recall: we went from several memory fields to 2 pieces of data everyone has at hand." },
      },
      {
        tipo: "decision",
        titulo: { es: "Diseñar para cuando algo falla", en: "Design for when things fail" },
        problema: { es: "Cualquier error en el pago mandaba al paciente de vuelta al inicio.", en: "Any payment error sent the patient back to the start." },
        hallazgo: { es: "Los errores más comunes no eran del paciente: la pasarela caída, respuestas lentas o datos que no se encontraban.", en: "The most common errors weren’t the patient’s: the gateway down, slow responses, or data not found." },
        decision: { es: "Mapear cada caso alterno y de error con ingeniería, y darle a cada uno un mensaje y una salida sin perder lo ya ingresado.", en: "Map every alternate and error case with engineering, and give each one a message and a way out without losing what was entered." },
        porque: { es: "En un pago, la confianza se gana o se pierde cuando algo sale mal.", en: "In a payment, trust is won or lost when something goes wrong." },
      },
      {
        tipo: "tarjetas",
        titulo: { es: "Los casos que diseñamos", en: "The cases we designed" },
        items: [
          { titulo: { es: "Campos omitidos", en: "Missing fields" }, texto: { es: "Se señala el dato faltante sin borrar el resto.", en: "The missing field is flagged without clearing the rest." } },
          { titulo: { es: "Otro pagador", en: "A different payer" }, texto: { es: "Quien paga puede ser distinto del paciente.", en: "The payer can be someone other than the patient." } },
          { titulo: { es: "Cambio de opción", en: "Changing the option" }, texto: { es: "Volver atrás para elegir otro tratamiento sin empezar de cero.", en: "Going back to pick another treatment without starting over." } },
          { titulo: { es: "Pago pendiente", en: "Pending payment" }, texto: { es: "Si hay un pago en proceso, se avisa antes de cobrar dos veces.", en: "If a payment is in progress, it warns before charging twice." } },
          { titulo: { es: "Servicio caído", en: "Service down" }, texto: { es: "Un mensaje claro y la opción de intentar más tarde.", en: "A clear message and the option to try later." } },
          { titulo: { es: "Respuesta lenta", en: "Slow response" }, texto: { es: "Estado de carga visible para que nadie pague dos veces.", en: "Visible loading state so nobody pays twice." } },
          { titulo: { es: "Datos no encontrados", en: "Data not found" }, texto: { es: "Qué revisar y cómo contactar a la clínica.", en: "What to check and how to contact the clinic." } },
          { titulo: { es: "Transacción cancelada", en: "Cancelled transaction" }, texto: { es: "Se retoma el pago con los datos ya ingresados.", en: "Payment resumes with the data already entered." } },
        ],
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Diseñar la experiencia", en: "Designing the experience" }, bajada: { es: "Un sitio que vende y un pago que acompaña", en: "A site that sells and a payment that guides" } },
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

      { tipo: "capitulo", num: "06", titulo: { es: "Validación", en: "Validation" }, bajada: { es: "Tres pruebas en Maze con 24 pacientes", en: "Three Maze tests with 24 patients" } },
      {
        tipo: "texto",
        texto: {
          es: ["Probé el flujo en Maze con 24 pacientes, en tres pruebas no moderadas. Medí cuántos completaban cada tarea sin ayuda, cuánto tardaban y dónde hacían clic por error. Después de cada prueba ajusté el diseño."],
          en: ["I tested the flow in Maze with 24 patients across three unmoderated tests. I measured how many completed each task unaided, how long it took, and where they misclicked. I adjusted the design after each test."],
        },
        puntos: {
          es: ["Prueba 1, el pago completo: muchos no veían la opción de abonar. La hicimos explícita junto al valor total.", "Prueba 2, la selección de tratamientos: los nombres técnicos confundían. Agregamos la clínica y la fecha de inicio para reconocerlos.", "Prueba 3, versión anterior frente a la nueva: 58% frente a 91% de pagos completados sin ayuda."],
          en: ["Test 1, full payment: many didn’t see the partial-payment option. We made it explicit next to the total.", "Test 2, treatment selection: technical names were confusing. We added the clinic and start date to help recognize them.", "Test 3, old vs. new version: 58% vs. 91% of payments completed unaided."],
        },
      },

      { tipo: "capitulo", num: "07", titulo: { es: "El resultado", en: "The outcome" }, bajada: { es: "Más pagos completados, en menos tiempo", en: "More completed payments, in less time" } },
      {
        tipo: "resultado",
        items: [
          { desde: "58%", valor: "91%", texto: { es: "completó el pago sin ayuda.", en: "completed payment unaided." }, medicion: { es: "tasa de éxito de la misma tarea en Maze, versión anterior frente a la nueva.", en: "success rate for the same task in Maze, old vs. new version." } },
          { valor: "−45%", texto: { es: "tiempo para pagar un tratamiento.", en: "time to pay for a treatment." }, medicion: { es: "mediana del tiempo en la tarea en Maze, versión anterior frente a la nueva.", en: "median time on task in Maze, old vs. new version." } },
          { valor: "2", texto: { es: "datos para encontrar los tratamientos pendientes.", en: "fields to find pending treatments." }, medicion: { es: "campos necesarios en el flujo nuevo frente al anterior, que pedía nombre del tratamiento, clínica y código.", en: "fields required in the new flow vs. the old one, which asked for treatment name, clinic, and code." } },
          { valor: "8", texto: { es: "casos alternos y de error con una salida clara.", en: "alternate and error cases with a clear way out." }, medicion: { es: "casos de uso documentados con ingeniería y cubiertos en el prototipo.", en: "use cases documented with engineering and covered in the prototype." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "De una plataforma institucional y cargada de información a una experiencia moderna y centrada en el paciente, que facilita agendar y pagar en línea.",
          en: "From an institutional, information-heavy platform to a modern, patient-centered experience that makes booking and paying online easy.",
        },
      },

      { tipo: "capitulo", num: "08", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "Las pruebas no moderadas en Maze me dieron muchas respuestas en pocos días, pero los porqués llegaron de los comentarios abiertos. Formular bien las preguntas fue tan importante como diseñar las pantallas.", en: "Unmoderated Maze tests gave me many answers in a few days, but the whys came from the open comments. Framing the questions well mattered as much as designing the screens." },
        distinto: { es: "Haría una ronda moderada con pacientes mayores. Es el grupo que más paga tratamientos largos y el que menos aparece en las pruebas en línea.", en: "I’d run a moderated round with older patients. They pay for long treatments the most and show up the least in online tests." },
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
      es: ["Tu meta, tu plan.", "Entrena a tu manera.", "Tu PT de bolsillo."],
      en: ["Your goal, your plan.", "Train your way.", "Your pocket PT."],
    },
    resumen: {
      es: "Rediseñé la app de MyCoach, la plataforma de entrenamiento personal del Reino Unido, para que cada tipo de atleta —de quien prepara un Hyrox a quien entrena en casa— encuentre su programa, entrene y siga su progreso en un solo lugar.",
      en: "I redesigned the app for MyCoach, the UK personal training platform, so every kind of athlete —from Hyrox racers to people training at home— can find their program, train, and track progress in one place.",
    },
    anio: "2025",
    titular: {
      es: "Un rediseño que llevó del 41% al 68% a quienes terminan el onboarding y reciben su plan.",
      en: "A redesign that took onboarding completion from 41% to 68%.",
    },
    producto: { es: "App móvil de entrenamiento personal", en: "Personal training mobile app" },
    // Métrica que se muestra en su tarjeta de "Más proyectos"
    metricaTarjeta: { valor: "+12%", texto: { es: "retención de usuarios activos", en: "active user retention" } },
    industria: { es: "Fitness / SaaS", en: "Fitness / SaaS" },
    rol: { es: "Product Designer", en: "Product Designer" },
    alcance: { es: "UX/UI, wireflows, design system", en: "UX/UI, wireflows, design system" },
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
          { desde: "41%", valor: "68%", texto: { es: "completa el onboarding y recibe su plan", en: "complete onboarding and get their plan" } },
          { desde: { es: "6 toques", en: "6 taps" }, valor: "3", texto: { es: "para empezar el entrenamiento del día", en: "to start today’s workout" } },
          { valor: "+22%", texto: { es: "entrenamientos completados por semana en la beta", en: "workouts completed per week in the beta" } },
          { valor: "6", texto: { es: "flujos rediseñados de punta a punta", en: "end-to-end flows redesigned" } },
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
        tipo: "resultado",
        items: [
          { desde: "41%", valor: "68%", texto: { es: "completa el onboarding y recibe su plan.", en: "complete onboarding and get their plan." }, medicion: { es: "embudo de analítica del onboarding, 4 semanas antes frente a 4 semanas después del lanzamiento de la beta.", en: "onboarding analytics funnel, 4 weeks before vs. 4 weeks after the beta launch." } },
          { desde: { es: "6 toques", en: "6 taps" }, valor: "3", texto: { es: "para empezar el entrenamiento del día.", en: "to start today’s workout." }, medicion: { es: "conteo de interacciones desde el home hasta iniciar la sesión, app anterior frente a la nueva.", en: "interaction count from home to starting the session, old app vs. new." } },
          { valor: "+22%", texto: { es: "entrenamientos completados por semana.", en: "workouts completed per week." }, medicion: { es: "promedio por usuario activo en la beta frente a la versión anterior.", en: "average per active user in the beta vs. the previous version." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "Que cada persona sienta que tiene a su entrenador en el bolsillo, sin importar cómo entrene.",
          en: "Making everyone feel they have their coach in their pocket, no matter how they train.",
        },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "Diseñar para atletas muy distintos me obligó a separar lo que es común (el plan, el progreso) de lo que cambia (el tipo de entrenamiento). Esa separación es la que hace que la app escale.", en: "Designing for very different athletes forced me to separate what’s shared (the plan, progress) from what changes (the training type). That separation is what lets the app scale." },
        distinto: { es: "Probaría antes el onboarding con personas que nunca han tenido entrenador. Son las que más abandonan y las que menos aparecieron en las primeras pruebas.", en: "I’d test onboarding earlier with people who have never had a coach. They drop off the most and showed up the least in early tests." },
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
    titular: {
      es: "Un sitio que vende experiencias con la energía de sus eventos: +35% en solicitudes de propuesta.",
      en: "A site that sells experiences with the energy of its events: +35% in proposal requests.",
    },
    producto: { es: "Sitio web corporativo", en: "Corporate website" },
    industria: { es: "Eventos / Retail de marcas", en: "Events / Brand retail" },
    rol: { es: "Product Designer", en: "Product Designer" },
    alcance: { es: "Diseño web, dirección visual, design system", en: "Web design, visual direction, design system" },
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
          { valor: "−30%", texto: { es: "rebote en mobile frente al sitio anterior", en: "mobile bounce rate vs. the previous site" } },
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
        tipo: "resultado",
        items: [
          { valor: "+35%", texto: { es: "solicitudes de propuesta desde el sitio.", en: "proposal requests from the site." }, medicion: { es: "envíos del formulario de contacto, 3 meses antes frente a 3 meses después del lanzamiento.", en: "contact form submissions, 3 months before vs. 3 months after launch." } },
          { valor: "2x", texto: { es: "páginas vistas por visita.", en: "pages per visit." }, medicion: { es: "Google Analytics, mismo periodo del año anterior.", en: "Google Analytics, same period the previous year." } },
          { valor: "−30%", texto: { es: "rebote en mobile.", en: "mobile bounce rate." }, medicion: { es: "Google Analytics, sesiones móviles, sitio anterior frente al nuevo.", en: "Google Analytics, mobile sessions, old site vs. new." } },
        ],
      },
      {
        tipo: "cita",
        texto: {
          es: "Si los eventos se recuerdan, la web también debía hacerlo.",
          en: "If the events are memorable, the website had to be too.",
        },
      },

      { tipo: "capitulo", num: "05", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "En un sitio de servicios, la personalidad vende tanto como la información. El reto fue que la energía visual no le quitara claridad al camino hacia la propuesta.", en: "On a services site, personality sells as much as information. The challenge was keeping the visual energy from getting in the way of the path to a proposal." },
        distinto: { es: "Definiría las métricas con el cliente desde el inicio. Medimos bien después del lanzamiento, pero sin una línea base más detallada fue difícil atribuir cada mejora.", en: "I’d define metrics with the client from the start. We measured well after launch, but without a more detailed baseline it was hard to attribute each improvement." },
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
    titular: {
      es: "Una app que funciona como un entrenador personal de bolsillo: rutinas a tu nivel y progreso visible.",
      en: "An app that works like a pocket-sized personal trainer: routines at your level and visible progress.",
    },
    producto: { es: "App móvil de entrenamiento", en: "Fitness mobile app" },
    industria: "Fitness",
    rol: { es: "Product Designer", en: "Product Designer" },
    alcance: { es: "Investigación UX, UI, pruebas de usabilidad", en: "UX research, UI, usability testing" },
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

      { tipo: "capitulo", num: "05", titulo: { es: "Reflexión", en: "Reflection" }, bajada: { es: "Lo que me llevo de este proyecto", en: "What I take from this project" } },
      {
        tipo: "reflexion",
        aprendi: { es: "La investigación cambió la idea inicial: las personas no necesitaban más rutinas, necesitaban saber si estaban avanzando. Ese hallazgo definió el producto.", en: "Research changed the initial idea: people didn’t need more routines, they needed to know whether they were improving. That insight defined the product." },
        distinto: { es: "Probaría un prototipo de baja fidelidad antes de la encuesta. Habría hecho preguntas más concretas a las 200 personas.", en: "I’d test a low-fidelity prototype before the survey. It would have led to more specific questions for the 200 respondents." },
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
