/* ==========================================================================
   AI LAB — experimentos y proyectos donde la IA forma parte del proceso.
   Guía de campos en README.md (sección "AI Lab").

   Reglas de contenido:
   - tipo "experimento": documentado desde el inicio (versiones, registro, decisiones reales).
   - tipo "profesional": entregables reales de un proyecto ya terminado. Sin prompts ni
     versiones reconstruidas: solo lo que existe.
   - estado "en-preparacion": se muestra como próximo experimento, sin enlace ni resultados.
   - Nada de métricas, prompts o imágenes inventadas. Lo que falte se anota en "pendientes"
     (solo visible con ?review=1).
   ========================================================================== */

window.AILAB = {
  categorias: [
    {
      id: "product",
      num: "01",
      color: "#8b7bff",
      nombre: "Product & UX Thinking",
      desc: { es: "Definir el problema antes que la pantalla.", en: "Defining the problem before the screen." },
      temas: {
        es: ["Definición de problemas", "Conceptos de producto", "User flows y escenarios", "Investigación y síntesis"],
        en: ["Problem definition", "Product concepts", "User flows and scenarios", "Research and synthesis"],
      },
    },
    {
      id: "ui",
      num: "02",
      color: "#6f9bff",
      nombre: "UI & Experience Generation",
      desc: { es: "Explorar direcciones y quedarme con la que funciona.", en: "Exploring directions and keeping the one that works." },
      temas: {
        es: ["Direcciones visuales", "Layouts e interfaces", "Construcción de sitios web", "Refinamiento y consistencia"],
        en: ["Visual directions", "Layouts and interfaces", "Building websites", "Refinement and consistency"],
      },
    },
    {
      id: "prototype",
      num: "03",
      color: "#3ee0cf",
      nombre: "Prototyping & Development",
      desc: { es: "Del requisito a algo que se puede usar.", en: "From requirement to something you can use." },
      temas: {
        es: ["Prototipos interactivos", "Experimentos funcionales", "Requisitos convertidos en funcionalidades", "Iteración entre diseño, código y pruebas"],
        en: ["Interactive prototypes", "Functional experiments", "Requirements turned into features", "Iterating across design, code and tests"],
      },
    },
    {
      id: "data",
      num: "04",
      color: "#c77dff",
      nombre: "Data, Insights & Creative Content",
      desc: { es: "Convertir datos en decisiones de diseño.", en: "Turning data into design decisions." },
      temas: {
        es: ["Análisis de datos", "Análisis de pruebas de usabilidad", "Visualización de información", "Recursos visuales y audiovisuales"],
        en: ["Data analysis", "Usability test analysis", "Information visualization", "Visual and audiovisual assets"],
      },
    },
  ],

  /* tipo de resultado: concepto · analisis · diseno · prototipo · funcional */
  experimentos: [
    /* ============================================================ RUMBO */
    {
      slug: "rumbo",
      tipo: "experimento",
      estado: "publicado",
      destacado: true,
      nombre: "Rumbo",
      etiqueta: { es: "Spain Visa Tracker", en: "Spain Visa Tracker" },
      subtitulo: {
        es: "Un gestor personal para seguir una solicitud de visa, de la idea a una app funcional.",
        en: "A personal manager to follow a visa application, from idea to a working app.",
      },
      resumen: {
        es: "Una app web que responde cuatro preguntas: dónde voy en el proceso, qué me falta, qué hago ahora y qué tengo que revisar, y cuándo.",
        en: "A web app that answers four questions: where am I in the process, what's missing, what do I do next, and what do I need to follow up on, and when.",
      },
      contribucionCorta: {
        es: "Problema, alcance, principios del producto y dirección visual.",
        en: "Problem, scope, product principles and visual direction.",
      },
      categorias: ["product", "ui", "prototype"],
      resultado: "funcional",
      color: "#6f6af8",
      fecha: { es: "Octubre 2026", en: "October 2026" },
      preview: "assets/ai-lab/rumbo/v3-inicio.webp",
      previewAlt: { es: "Inicio de Rumbo con el progreso del proceso y el siguiente paso", en: "Rumbo home with process progress and next step" },

      overview: {
        problema: {
          es: "Una solicitud de visa son decenas de requisitos, documentos con vencimiento y trámites con terceros. La información vive repartida entre correos, carpetas y conversaciones con el abogado.",
          en: "A visa application means dozens of requirements, expiring documents and procedures with third parties. The information is scattered across emails, folders and conversations with the lawyer.",
        },
        objetivo: {
          es: "Organizar lo que la persona ya sabe, mostrar el progreso real y sugerir el siguiente paso, sin reemplazar la asesoría legal.",
          en: "Organize what the person already knows, show real progress and suggest the next step, without replacing legal advice.",
        },
      },

      secciones: [
        {
          tipo: "texto",
          id: "reto",
          num: "01",
          titulo: { es: "El reto", en: "The challenge" },
          texto: {
            es: [
              "La idea nació de mi propia solicitud de una visa de nómada digital para España desde Colombia. Mi abogado me ayuda a interpretar el proceso legal; lo que me faltaba era un lugar para saber, de un vistazo, en qué punto estaba.",
              "La restricción más importante era de producto, no técnica: la herramienta no podía inventar requisitos ni dar por cierto algo que no estuviera verificado.",
            ],
            en: [
              "The idea came from my own application for a Spanish digital nomad visa from Colombia. My lawyer helps me interpret the legal process; what I was missing was one place to see, at a glance, where I stood.",
              "The key constraint was about the product, not the technology: the tool could not invent requirements or treat anything unverified as fact.",
            ],
          },
          puntos: {
            es: [
              "No consulta ninguna autoridad ni valida la autenticidad legal de los documentos.",
              "No incluye una lista oficial genérica: cada requisito indica su fuente.",
              "No es asesoría legal.",
            ],
            en: [
              "It doesn't query any authority or validate the legal authenticity of documents.",
              "It ships no generic official checklist: every requirement shows its source.",
              "It is not legal advice.",
            ],
          },
        },
        {
          tipo: "principios",
          id: "principios",
          num: "02",
          titulo: { es: "Principios del producto", en: "Product principles" },
          bajada: { es: "Las reglas que definí para que la herramienta fuera confiable", en: "The rules I set so the tool would be trustworthy" },
          items: [
            {
              titulo: { es: "Nada se completa solo", en: "Nothing completes itself" },
              texto: { es: "Un requisito nunca se marca como cumplido automáticamente. Cuando todos sus documentos están listos, la app solo lo sugiere y la persona confirma.", en: "A requirement is never completed automatically. When all its documents are ready, the app only suggests it and the person confirms." },
            },
            {
              titulo: { es: "Cada dato dice de dónde viene", en: "Every data point says where it comes from" },
              texto: { es: "Cada requisito indica su fuente: fuente oficial, confirmado por el abogado, ingresado por mí o ejemplo sin verificar.", en: "Every requirement shows its source: official source, confirmed by the lawyer, entered by me, or unverified example." },
            },
            {
              titulo: { es: "Los ejemplos se ven como ejemplos", en: "Examples look like examples" },
              texto: { es: "Los requisitos de ejemplo siempre llevan la etiqueta «Sin verificar» y no incluyen montos ni plazos.", en: "Example requirements always carry an «Unverified» label and include no amounts or timeframes." },
            },
            {
              titulo: { es: "La IA propone, la persona decide", en: "AI proposes, the person decides" },
              texto: { es: "El asistente responde con los datos registrados y separa datos, notas y sugerencias. Los cambios que propone solo se aplican al pulsar «Confirmar». Nunca recibe el contenido de los archivos.", en: "The assistant answers from the recorded data and separates data, notes and suggestions. The changes it proposes only apply after pressing «Confirm». It never receives file contents." },
            },
          ],
        },
        {
          tipo: "texto",
          id: "workflow",
          num: "03",
          titulo: { es: "Cómo trabajé con IA", en: "How I worked with AI" },
          texto: {
            es: [
              "Construí la app con un agente de programación con IA. Yo definí el problema, el alcance de la primera versión y las reglas del producto; el agente implementó, y yo revisé cada resultado en el navegador y pedí cambios hasta quedar conforme.",
              "Cada cambio quedó registrado en el historial del proyecto. Ese registro es la evidencia de cómo evolucionó: de un MVP funcional a una herramienta con identidad propia y listas más simples.",
            ],
            en: [
              "I built the app with an AI coding agent. I defined the problem, the scope of the first version and the product rules; the agent implemented, and I reviewed every result in the browser and asked for changes until I was satisfied.",
              "Every change was recorded in the project history. That record is the evidence of how it evolved: from a working MVP to a tool with its own identity and simpler lists.",
            ],
          },
          puntos: {
            es: [
              "Delegado a la IA: implementación, pruebas automáticas y documentación técnica.",
              "A mi cargo: problema, alcance, principios, dirección visual, revisión de cada pantalla y decisión final.",
            ],
            en: [
              "Delegated to AI: implementation, automated tests and technical documentation.",
              "My responsibility: problem, scope, principles, visual direction, reviewing every screen and the final call.",
            ],
          },
        },
        {
          tipo: "registro",
          id: "registro",
          titulo: { es: "Registro real del proyecto", en: "Real project log" },
          nota: { es: "Mensajes de los commits, tal como quedaron en el historial. 23 de octubre de 2026.", en: "Commit messages exactly as recorded in the history. October 23, 2026." },
          items: [
            { hora: "18:16", texto: "Build Rumbo: personal visa process manager MVP" },
            { hora: "21:15", texto: "Give Rumbo a brand identity and clearer hierarchy" },
            { hora: "21:23", texto: "Switch Rumbo to the Índigo direction and simplify remaining lists" },
            { hora: "21:40", texto: "Turn settings into an accordion list" },
            { hora: "21:43", texto: "Full-width settings accordion; stop layout shift; standard Tailwind setup" },
            { hora: "21:46", texto: "Settings: side-by-side short fields, country dropdowns" },
            { hora: "21:59", texto: "Load visa types and official requirements from a consulate-sourced catalog" },
            { hora: "22:06", texto: "Tasks: animated check, undo, uncheck, full pending list" },
          ],
        },
        {
          tipo: "iteraciones",
          id: "iteraciones",
          num: "04",
          titulo: { es: "Iteraciones y decisiones", en: "Iterations and decisions" },
          bajada: { es: "Tres versiones del inicio, capturadas del propio historial del proyecto", en: "Three versions of the home screen, captured from the project's own history" },
          items: [
            {
              version: "v1",
              nombre: { es: "MVP funcional", en: "Working MVP" },
              src: "assets/ai-lab/rumbo/v1-inicio.webp",
              alt: { es: "Primera versión del inicio, con seis bloques de información", en: "First version of the home screen, with six information blocks" },
              problema: { es: "Todo funcionaba, pero el inicio mostraba seis bloques con el mismo peso: progreso, bloqueados, vencidas, próximas, documentos y vigencias. Costaba saber qué mirar primero.", en: "Everything worked, but the home screen showed six blocks with the same weight: progress, blocked, overdue, upcoming, documents and expiry. It was hard to know what to look at first." },
            },
            {
              version: "v2",
              nombre: { es: "Primera identidad", en: "First identity" },
              src: "assets/ai-lab/rumbo/v2-inicio.webp",
              alt: { es: "Segunda versión con encabezado oscuro y acentos terracota", en: "Second version with a dark header and terracotta accents" },
              cambio: { es: "Una marca propia (azul petróleo, terracota y una tipografía serif) y una jerarquía clara: el progreso arriba, un solo «siguiente paso» y una agenda única «Esta semana» en lugar de seis bloques compitiendo.", en: "Its own brand (petrol blue, terracotta and a serif typeface) and a clear hierarchy: progress on top, a single «next step» and one «This week» agenda instead of six competing blocks." },
            },
            {
              version: "v3",
              nombre: { es: "Dirección Índigo", en: "Índigo direction" },
              src: "assets/ai-lab/rumbo/v3-inicio.webp",
              alt: { es: "Versión actual con superficies claras y un solo color de acento índigo", en: "Current version with light surfaces and a single indigo accent color" },
              cambio: { es: "Una sola tipografía, superficies claras y el índigo como único color de foco. La jerarquía de la v2 se mantiene; el siguiente paso pasa a su propia tarjeta y las demás listas se simplifican con el mismo filtro.", en: "One typeface, light surfaces and indigo as the only focus color. The v2 hierarchy stays; the next step moves to its own card and the other lists are simplified with the same filter." },
            },
          ],
          comparar: {
            antes: { src: "assets/ai-lab/rumbo/v1-requisitos.webp", alt: { es: "Requisitos en la primera versión", en: "Requirements in the first version" } },
            despues: { src: "assets/ai-lab/rumbo/requisitos.webp", alt: { es: "Requisitos en la versión actual", en: "Requirements in the current version" } },
            pie: { es: "Requisitos: v1 frente a la versión actual. Arrastra para comparar.", en: "Requirements: v1 vs. the current version. Drag to compare." },
          },
        },
        {
          tipo: "contribucion",
          id: "contribucion",
          num: "05",
          titulo: { es: "Mi contribución", en: "My contribution" },
          items: {
            es: ["Definición del problema, a partir de mi propia solicitud", "Alcance de la primera versión", "Principios del producto: fuentes, ejemplos sin verificar y confirmación manual", "Dirección visual: de la primera identidad a la dirección Índigo", "Revisión de cada pantalla y pedidos de ajuste", "Decisión final sobre qué conservar y qué descartar"],
            en: ["Problem definition, based on my own application", "Scope of the first version", "Product principles: sources, unverified examples and manual confirmation", "Visual direction: from the first identity to the Índigo direction", "Reviewing every screen and requesting adjustments", "Final call on what to keep and what to drop"],
          },
        },
        {
          tipo: "resultado",
          id: "resultado",
          num: "06",
          titulo: { es: "Resultado", en: "Final output" },
          bajada: { es: "Una app funcional, con datos de demostración en todas las capturas", en: "A working app, with demo data in every screenshot" },
          pantallas: [
            { src: "assets/ai-lab/rumbo/requisitos.webp", titulo: { es: "Requisitos", en: "Requirements" }, texto: { es: "Agrupados por categoría, con su fuente y sus dependencias. Solo se completan cuando la persona lo confirma.", en: "Grouped by category, with their source and dependencies. They only complete when the person confirms." } },
            { src: "assets/ai-lab/rumbo/documentos-zoom.webp", titulo: { es: "Documentos", en: "Documents" }, texto: { es: "Lo que ya tienes y lo que te falta, con estado y vencimiento.", en: "What you have and what you still need, with status and expiry." } },
            { src: "assets/ai-lab/rumbo/tareas-zoom.webp", titulo: { es: "Tareas", en: "Tasks" }, texto: { es: "Con plazos y dependencias: una tarea no se puede iniciar si la anterior no ha terminado.", en: "With deadlines and dependencies: a task can't start until the previous one is done." } },
            { src: "assets/ai-lab/rumbo/tramites-zoom.webp", titulo: { es: "Trámites y seguimiento", en: "Procedures and follow-up" }, texto: { es: "Lo que depende de una entidad externa. La persona registra el estado y Rumbo le recuerda cuándo revisar.", en: "What depends on an external entity. The person records the status and Rumbo reminds them when to check." } },
          ],
          movil: { src: "assets/ai-lab/rumbo/inicio-movil.webp", alt: { es: "Inicio de Rumbo en el celular", en: "Rumbo home on a phone" } },
          prueba: {
            es: "Aún no está publicado en línea. Funciona en local, con una cuenta de demostración con datos ficticios, y tiene 31 pruebas automáticas.",
            en: "It's not published online yet. It runs locally, with a demo account with fictitious data, and has 31 automated tests.",
          },
        },
        {
          tipo: "reflexion",
          id: "reflexion",
          num: "07",
          titulo: { es: "Reflexión", en: "Reflection" },
          limites: {
            es: ["Sin estado en tiempo real de ninguna entidad: los trámites se actualizan a mano, por diseño.", "Una sola solicitud activa por persona en la interfaz.", "No se ha hecho una revisión de seguridad externa. Todavía no está lista para guardar documentos sensibles en un servidor público."],
            en: ["No real-time status from any authority: procedures are updated by hand, by design.", "One active application per person in the interface.", "No external security review has been done. It's not ready yet to store sensitive documents on a public server."],
          },
          siguiente: {
            es: ["Llevarla de prototipo local a una web app publicada.", "Conectar una base de datos alojada y un almacenamiento privado y cifrado para los documentos que se cargan.", "Reforzar la seguridad: autenticación con un proveedor dedicado, permisos por usuario y una revisión externa.", "Activar los servicios que hoy están preparados pero sin conectar: recordatorios por correo y el asistente de IA."],
            en: ["Take it from a local prototype to a published web app.", "Connect a hosted database and private, encrypted storage for uploaded documents.", "Harden security: authentication with a dedicated provider, per-user permissions and an external review.", "Turn on the services that are ready but not yet connected: email reminders and the AI assistant."],
          },
        },
      ],
      pendientes: [
        "Confirmar la lista de «Mi contribución» y el texto de «Cómo trabajé con IA».",
        "Agregar «Lo que aprendí» en la reflexión (no se escribió para no inventarlo).",
        "Si hay prompts o instrucciones guardadas, agregar uno o dos fragmentos reales en «Cómo trabajé con IA».",
        "Cuando esté publicada en línea, agregar el enlace para probarla.",
      ],
    },

    /* ============================================================ PRÓXIMOS */
    {
      slug: "website-generation",
      tipo: "experimento",
      estado: "en-preparacion",
      destacado: true,
      nombre: "Website Generation",
      etiqueta: { es: "Experimento web", en: "Web experiment" },
      subtitulo: { es: "De un brief a una experiencia web, documentando cada ajuste de diseño.", en: "From a brief to a web experience, documenting every design adjustment." },
      plan: {
        es: ["Brief y objetivo", "Dirección inicial", "Estructura y contenido", "Interfaz generada", "Ajustes por criterio de diseño", "Resultado final"],
        en: ["Brief and goal", "Initial direction", "Structure and content", "Generated interface", "Design-led adjustments", "Final output"],
      },
      categorias: ["ui", "prototype"],
      resultado: "diseno",
      color: "#6f9bff",
    },
    {
      slug: "ux-data-analysis",
      tipo: "experimento",
      estado: "en-preparacion",
      destacado: true,
      nombre: "UX & Data Analysis",
      etiqueta: { es: "Experimento de análisis", en: "Analysis experiment" },
      subtitulo: { es: "Analizar resultados de pruebas con IA y convertir los hallazgos en decisiones de diseño.", en: "Analyzing test results with AI and turning findings into design decisions." },
      plan: {
        es: ["Pregunta a responder", "Datos de entrada (sintéticos si no hay reales, siempre identificados)", "Análisis asistido por IA", "Hallazgos y limitaciones", "Decisiones de diseño", "Visualización final"],
        en: ["Question to answer", "Input data (synthetic if no real data, always labeled)", "AI-assisted analysis", "Findings and limitations", "Design decisions", "Final visualization"],
      },
      categorias: ["data", "product"],
      resultado: "analisis",
      color: "#c77dff",
    },
  ],
};
