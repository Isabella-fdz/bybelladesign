/* ==========================================================================
   Plantillas: convierten data/proyectos.js en HTML.
   Para agregar proyectos no necesitas tocar este archivo.
   ========================================================================== */
window.renderApp = (lang) => {
  const P = window.PROYECTOS || [];
  const ui = window.I18N[lang];
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en : v ?? "");
  const pad = (n) => String(n).padStart(2, "0");
  const attr = (s = "") => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  const plain = (s = "") => String(s).replace(/<[^>]+>/g, "");
  // URLs limpias: bybelladesign.com/nova/ (en local, abriendo el archivo, se usa nova/index.html)
  const caseUrl = (p) => (location.protocol === "file:" ? `${p.slug}/index.html` : `${p.slug}/`);
  const tags = (p) => `<ul class="tags">${t(p.tags).map((x) => `<li>${x}</li>`).join("")}</ul>`;

  const zoomable = (img) => `<img src="${attr(img.src)}" alt="${attr(t(img.alt))}" decoding="async">`;

  /* ---------- Dispositivos 3D construidos con CSS (con grosor real) ----------
     tipos: phone · laptop (pro, con muesca) · ultrabook (sin muesca, con mentón) · monitor (con base) · browser (ventana)
     acabados: silver · midnight · spaceblack · graphite · natural · desert · white · black · blue */
  const DEFAULT_FIN = { phone: "natural", laptop: "silver", ultrabook: "graphite", monitor: "silver", browser: "dark" };
  const edges = (n) => Array.from({ length: n }, (_, k) => `<i class="dv__edge" style="--k:${k + 1}"></i>`).join("");
  const panel = (inner, extra = "", n = 4) =>
    `${edges(n)}<i class="dv__back"></i><div class="dv__face"><div class="device__screen">${inner}</div>${extra}</div>`;
  const device = (tipo, inner, fin) => {
    // render: mockup ya armado (imagen sin fondo con la pantalla montada)
    if (tipo === "render") return `<div class="device dv--render">${inner}</div>`;
    // frontal: MacBook de frente (marco de imagen con la pantalla transparente)
    if (tipo === "frontal")
      return `<div class="device dv--frontal dv--desk"><div class="device__screen">${inner}</div><img class="dv__frame" src="assets/mockups/macbook-front.webp" alt="" decoding="async"></div>`;
    const t = tipo || "laptop";
    const f = `dv-${fin || DEFAULT_FIN[t] || "silver"}`;
    const desk = t === "phone" ? "" : " dv--desk";
    if (t === "phone")
      return `<div class="device dv dv--phone ${f}">
        ${panel(inner, `<span class="dv__island"></span>`, 6)}
        <i class="dv__btn dv__btn--1"></i><i class="dv__btn dv__btn--2"></i><i class="dv__btn dv__btn--3"></i>
      </div>`;
    if (t === "monitor")
      return `<div class="device dv dv--monitor${desk} ${f}">
        <i class="dv__neck"></i><i class="dv__foot"></i>
        ${panel(inner, `<span class="dv__cam"></span>`, 5)}
      </div>`;
    if (t === "browser")
      return `<div class="device dv dv--browser${desk} ${f}">
        ${edges(2)}<div class="dv__face"><div class="dv__bar"><i></i><i></i><i></i><span></span></div><div class="device__screen">${inner}</div></div>
      </div>`;
    // laptop y ultrabook: tapa inclinada + base con teclado como plano en perspectiva
    return `<div class="device dv dv--laptop dv--${t}${desk} ${f}">
      <div class="dv__lid">${panel(inner, `<span class="dv__cam"></span>`, 4)}</div>
      <div class="dv__base"><i class="dv__lip"></i></div>
    </div>`;
  };
  const shot = (src) => `<img src="${attr(src)}" alt="" decoding="async">`;

  /* ---------- Escena: dispositivos superpuestos ---------- */
  const scene = (p) => {
    const e = p.escena || [];
    if (!e.length) return `<div class="scene scene--type" style="--c:${attr(p.color)}" aria-hidden="true"><span class="scene__word" data-depth="0.8">${p.nombre}</span></div>`;
    const kind = e.every((d) => d.dispositivo === "phone") ? "phones" : "desktop";
    // composicion: ver README. Sin ella, la composición genérica
    const cls = p.composicion ? `scene--c scene--${p.composicion}` : `scene--${kind} scene--n${e.length}`;
    return `
      <div class="scene ${cls}" style="--c:${attr(p.color)}" aria-hidden="true">
        <div class="scene__stage">
          ${e.map((d, k) => `
            <div class="scene__dev scene__dev--${k + 1} scene__dev--${d.dispositivo}"${d.ratio || d.alto ? ` style="${d.ratio ? `aspect-ratio:${d.ratio};` : ""}${d.alto ? `height:${d.alto}%;` : ""}"` : ""} data-depth="${(0.5 + k * 0.6).toFixed(1)}">
              <div class="scene__float" style="--delay:${k * -1.7}s">${device(d.dispositivo, shot(d.src), d.acabado || (d.dispositivo === "phone" && p.acabado))}</div>
            </div>`).join("")}
        </div>
      </div>`;
  };

  /* ---------- Home: franja de marcas ---------- */
  const logos = document.querySelector("[data-logos]");
  if (logos) {
    const items = (window.MARCAS || []).map((m) =>
      m.logo ? `<li><img src="${attr(m.logo)}" alt="${attr(m.nombre)}" decoding="async"></li>` : `<li><span class="logos__text">${m.nombre}</span></li>`
    ).join("");
    logos.innerHTML = `<ul class="logos__track">${items}${items.replace(/<li>/g, '<li aria-hidden="true">')}</ul>`;
  }

  /* ---------- Home: casos ---------- */
  const grid = document.querySelector("[data-work-grid]");
  if (grid) {
    grid.innerHTML = P.map((p, i) => {
      const tag = p.caso ? "a" : "div";
      const href = p.caso ? ` href="${caseUrl(p)}"` : "";
      return `
        <article class="card" style="--c:${attr(p.color)}">
          <${tag} class="card__link"${href}>
            <div class="card__media clip" data-reveal>${scene(p)}</div>
            <div class="card__body">
              <p class="card__meta"><span>${pad(i + 1)} — ${p.cliente}</span><span>${p.anio || ""}</span></p>
              <h3 class="card__title">${p.nombre}</h3>
              <p class="card__summary">${t(p.subtitulo)}</p>
              <div class="card__foot">
                ${tags(p)}
                ${p.caso
                  ? `<span class="card__cta" aria-hidden="true">${ui["work.view"]} <span class="arrow">→</span></span>`
                  : `<span class="badge">${ui["work.soon"]}</span>`}
              </div>
            </div>
          </${tag}>
        </article>`;
    }).join("");
  }

  /* ---------- Caso de estudio ---------- */
  const root = document.querySelector("[data-case]");
  if (!root) return;

  const slug = document.body.dataset.slug || new URLSearchParams(location.search).get("p");
  const cases = P.filter((p) => p.caso);
  const i = cases.findIndex((p) => p.slug === slug);

  if (i < 0) {
    root.innerHTML = `
      <section class="case-hero">
        <div class="case-hero__inner">
          <h1 class="case-hero__name">404</h1>
          <p class="case-hero__summary">${ui["case.notfound"]} <a href="./#trabajo" class="link">${ui["case.back"]}</a></p>
        </div>
      </section>`;
    return;
  }

  const p = cases[i];
  const next = cases[(i + 1) % cases.length];

  document.title = `${p.nombre} — ${p.cliente} · Isabella Montes`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", plain(t(p.resumen)));
  root.style.setProperty("--c", p.color);
  document.documentElement.style.setProperty("--case", p.color);

  const toc = [];
  const list = (arr) => (arr?.length ? `<ul class="b-list">${arr.map((x) => `<li>${x}</li>`).join("")}</ul>` : "");

  const blocks = {
    impacto: (b) => `
      <ul class="b-impact">
        ${b.items.map((it, k) => `
          <li data-reveal style="--d:${k * 90}ms">
            <strong data-count="${attr(it.valor)}">${it.valor}</strong>
            <span>${t(it.texto)}</span>
          </li>`).join("")}
      </ul>`,

    capitulo: (b, k) => {
      const id = `c-${k}`;
      toc.push({ id, num: b.num, label: t(b.titulo) });
      // Si le sigue un spotlight con laptop, el título se dibuja dentro de su columna fija
      if (mergedChapter(k)) return "";
      return chapterHtml(b, id);
    },

    declaracion: (b) => `<p class="b-statement" data-words>${t(b.texto)}</p>`,

    texto: (b) => `
      <section class="b-text" data-reveal>
        ${b.titulo ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
        <div class="b-text__body">${(t(b.texto) || []).map((x) => `<p>${x}</p>`).join("")}${list(t(b.puntos))}</div>
      </section>`,

    contraste: (b) => `
      <div class="b-versus">
        ${["antes", "despues"].map((side, k) => `
          <section class="b-versus__col b-versus__col--${side}" data-reveal style="--d:${k * 120}ms">
            <h3>${t(b[side].titulo)}</h3>
            <ul>${t(b[side].puntos).map((x) => `<li>${x}</li>`).join("")}</ul>
          </section>`).join("")}
      </div>`,

    antesDespues: (b) => `
      <figure class="b-compare clip" data-reveal style="--pos:50%">
        <img class="b-compare__img" src="${attr(b.despues.src)}" alt="${attr(`${ui["case.after"]}: ${t(b.despues.alt)}`)}" decoding="async">
        <div class="b-compare__before">
          <img class="b-compare__img" src="${attr(b.antes.src)}" alt="${attr(`${ui["case.before"]}: ${t(b.antes.alt)}`)}" decoding="async">
        </div>
        <span class="b-compare__label b-compare__label--before" aria-hidden="true">${ui["case.before"]}</span>
        <span class="b-compare__label b-compare__label--after" aria-hidden="true">${ui["case.after"]}</span>
        <span class="b-compare__handle" aria-hidden="true"><span>↔</span></span>
        <input class="b-compare__range" type="range" min="0" max="100" value="50" aria-label="${attr(ui["case.compare"])}">
      </figure>`,

    proceso: (b) => `
      <ol class="b-process" data-reveal style="--n:${b.fases.length}">
        ${b.fases.map((f, k) => `
          <li style="--d:${k * 160}ms">
            <span class="b-process__dot" aria-hidden="true"></span>
            <span class="b-process__num">${pad(k + 1)}</span>
            <h3>${t(f.titulo)}</h3>
            <p>${t(f.texto)}</p>
          </li>`).join("")}
      </ol>`,

    tarjetas: (b) => `
      <section class="b-cards-wrap">
        ${b.titulo ? `<h3 class="b-text__title" data-reveal>${t(b.titulo)}</h3>` : ""}
        <ul class="b-cards" style="--n:${Math.min(b.items.length, 3)}">
          ${b.items.map((it, k) => `
            <li class="b-card" data-reveal style="--d:${(k % 3) * 80}ms">
              <span class="b-card__num">${pad(k + 1)}</span>
              ${it.titulo ? `<h4>${t(it.titulo)}</h4>` : ""}
              <p>${t(it.texto)}</p>
            </li>`).join("")}
        </ul>
      </section>`,

    spotlight: (b, k) => `
      <div class="b-spot">
        <div class="b-spot__aside">
          ${mergedChapter(k - 1) ? chapterHtml(p.bloques[k - 1], `c-${k - 1}`, " b-chapter--pinned") : ""}
          <div class="b-spot__media" aria-hidden="true">
            ${device(b.dispositivo || "laptop", b.items.map((it, j) => `<img src="${attr(it.src)}" alt="" data-i="${j}" class="${j === 0 ? "is-active" : ""}" decoding="async">`).join(""), phoneFin(b.dispositivo))}
          </div>
        </div>
        <ol class="b-spot__steps">
          ${b.items.map((it, k) => `
            <li class="b-spot__step${k === 0 ? " is-active" : ""}" data-i="${k}">
              <span class="b-spot__num">${pad(k + 1)}</span>
              <h3>${t(it.titulo)}</h3>
              <p>${t(it.texto)}</p>
              <div class="b-spot__inline">${device(b.dispositivo || "laptop", zoomable(it), phoneFin(b.dispositivo))}</div>
            </li>`).join("")}
        </ol>
      </div>`,

    // Recorrido de pantallas móviles: celular fijo a un lado y los pasos subiendo (misma animación que spotlight)
    // Recorrido: horizontal (avanza de lado con el scroll) o, con estilo: "fijo", celular fijo y pasos subiendo
    recorrido: (b, k) => b.estilo === "fijo" ? blocks.spotlight({ dispositivo: "phone", items: b.pasos }, k) : `
      <section class="b-flow" style="--n:${b.pasos.length}" aria-label="${attr(ui["case.flow"])}">
        <div class="b-flow__sticky">
          <p class="b-flow__hint" aria-hidden="true">${ui["case.swipe"]} →</p>
          <ol class="b-flow__track" tabindex="0">
            ${b.pasos.map((s, j) => `
              <li class="b-flow__step">
                <div class="b-flow__phone">${device("phone", zoomable(s), p.acabado)}</div>
                <div class="b-flow__text">
                  <span class="b-flow__num">${ui["case.step"]} ${pad(j + 1)}</span>
                  <h3>${t(s.titulo)}</h3>
                  <p>${t(s.texto)}</p>
                </div>
              </li>`).join("")}
          </ol>
        </div>
      </section>`,

    /* Pantallas móviles sin pasos: para sitios informativos, no para flujos */
    responsive: (b) => `
      <section class="b-resp" data-reveal>
        <div class="b-resp__text">
          ${b.titulo ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
          ${b.texto ? `<p>${t(b.texto)}</p>` : ""}
        </div>
        <div class="b-resp__phones">
          ${b.pantallas.map((s) => `<div class="b-resp__phone">${device("phone", zoomable(s), p.acabado)}</div>`).join("")}
        </div>
      </section>`,

    imagen: (b) => `
      <figure class="b-figure">
        <div class="b-media clip" data-reveal>${zoomable(b)}</div>
        ${b.pie ? `<figcaption>${t(b.pie)}</figcaption>` : ""}
      </figure>`,

    galeria: (b) => `
      <div class="b-gallery" style="--cols:${Math.min(b.imagenes.length, 3)}">
        ${b.imagenes.map((img, k) => `<div class="b-media clip" data-reveal style="--d:${k * 100}ms">${zoomable(img)}</div>`).join("")}
      </div>`,

    cita: (b) => `<blockquote class="b-quote"><p data-words>${t(b.texto)}</p></blockquote>`,

    /* Design system recreado en HTML: tipografía, escala, color y componentes */
    sistema: (b) => `
      <div class="b-ds" data-reveal>
        <section class="b-ds__col">
          <h4 class="b-ds__label">${ui["ds.type"]}</h4>
          ${(b.fuentes || []).map((f) => `
            <div class="b-ds__font">
              <span class="b-ds__aa" style="font-family:${attr(f.css)}" aria-hidden="true">Aa</span>
              <div><strong>${f.nombre}</strong><span>${t(f.uso)}</span></div>
            </div>`).join("")}
          ${b.escala ? `
            <ul class="b-ds__scale" style="font-family:${attr(b.fuentes?.[0]?.css || "inherit")}">
              ${b.escala.map((s) => `
                <li>
                  <span class="b-ds__tag">${s.tag}</span>
                  <span class="b-ds__sample" style="font-size:${Math.round(Math.min(s.px * 0.7, 24 + s.px * 0.1))}px">${ui["ds.sample"]}</span>
                  <span class="b-ds__px">${s.px}px${s.movil ? ` · ${ui["ds.mobile"]} ${s.movil}px` : ""}</span>
                </li>`).join("")}
            </ul>` : ""}
        </section>
        <section class="b-ds__col">
          <h4 class="b-ds__label">${ui["ds.color"]}</h4>
          <ul class="b-ds__swatches">
            ${(b.colores || []).map((c) => `
              <li><span class="b-ds__chip" style="background:${attr(c.hex)}"></span><strong>${t(c.nombre)}</strong><code>${c.hex}</code></li>`).join("")}
          </ul>
          ${b.degradados ? `
            <h4 class="b-ds__label">${ui["ds.gradients"]}</h4>
            <ul class="b-ds__grads">
              ${b.degradados.map((g) => `
                <li><span class="b-ds__chip" style="background:linear-gradient(90deg, ${attr(g.de)}, ${attr(g.a)})"></span><strong>${t(g.nombre)}</strong><code>${g.de} → ${g.a}</code></li>`).join("")}
            </ul>` : ""}
          ${b.botones ? `
            <h4 class="b-ds__label">${ui["ds.buttons"]}</h4>
            <div class="b-ds__buttons" style="font-family:${attr((b.fuentes?.[1] ?? b.fuentes?.[0])?.css || "inherit")}">
              ${b.botones.map((x) => `<span class="b-ds__btn" style="background:${attr(x.fondo)};color:${attr(x.color)};border-color:${attr(x.borde || x.fondo)}">${x.texto}</span>`).join("")}
            </div>` : ""}
        </section>
      </div>`,

    /* Journey map recreado: fases, acciones, curva de emoción, pensamientos y dolores */
    journey: (b) => {
      const n = b.fases.length;
      const pts = b.fases.map((f, k) => [(k + 0.5) * 100, 90 - f.emocion * 80]);
      const path = pts.map(([x, y], k) => {
        if (!k) return `M${x} ${y}`;
        const [px, py] = pts[k - 1];
        return `C${px + 50} ${py} ${x - 50} ${y} ${x} ${y}`;
      }).join(" ");
      const face = (e) => (e >= 0.66 ? "😄" : e >= 0.4 ? "😐" : "😥");
      const row = (label, cells) => `<div class="b-journey__label">${label}</div>${cells}`;
      return `
        <section class="b-journey" data-reveal>
          ${b.titulo ? `<h3 class="b-text__title">${t(b.titulo)}</h3>` : ""}
          <div class="b-journey__scroll" tabindex="0" role="region" aria-label="${attr(t(b.titulo) || "Journey map")}">
            <div class="b-journey__grid" style="--n:${n}">
              ${row("", b.fases.map((f, k) => `<div class="b-journey__phase"><span>${pad(k + 1)}</span>${t(f.nombre)}</div>`).join(""))}
              ${row(ui["journey.actions"], b.fases.map((f) => `<p class="b-journey__cell">${t(f.accion)}</p>`).join(""))}
              ${row(ui["journey.emotion"], `
                <div class="b-journey__curve" style="grid-column: span ${n}">
                  <svg viewBox="0 0 ${n * 100} 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="${path}" pathLength="1"/>
                  </svg>
                  ${pts.map(([x, y], k) => `<span class="b-journey__dot" style="left:${x / n}%;top:${y}%" title="${attr(t(b.fases[k].nombre))}">${face(b.fases[k].emocion)}</span>`).join("")}
                </div>`)}
              ${row(ui["journey.thoughts"], b.fases.map((f) => `<p class="b-journey__cell b-journey__thought">${t(f.pensamiento)}</p>`).join(""))}
              ${row(ui["journey.pains"], b.fases.map((f) => `<ul class="b-journey__cell b-journey__pains">${t(f.dolores).map((d) => `<li>${d}</li>`).join("")}</ul>`).join(""))}
            </div>
          </div>
        </section>`;
    },

    video: (b) => `
      <figure class="b-figure">
        <div class="b-media clip" data-reveal>
          <video src="${attr(b.src)}" poster="${attr(b.poster)}" controls muted playsinline preload="metadata"></video>
        </div>
      </figure>`,
  };

  function phoneFin(tipo) { return tipo === "phone" ? p.acabado : undefined; }
  function chapterHtml(b, id, cls = "") {
    return `
      <header class="b-chapter${cls}" id="${id}">
        <span class="b-chapter__num" aria-hidden="true">${b.num}</span>
        <div>
          <h2 class="b-chapter__title" data-words>${t(b.titulo)}</h2>
          ${b.bajada ? `<p class="b-chapter__sub" data-reveal>${t(b.bajada)}</p>` : ""}
        </div>
      </header>`;
  }
  function mergedChapter(k) {
    const cur = p.bloques?.[k], next = p.bloques?.[k + 1];
    return cur?.tipo === "capitulo" && next?.tipo === "spotlight" && (next.dispositivo || "laptop") !== "phone";
  }

  const body = (p.bloques || []).map((b, k) => blocks[b.tipo]?.(b, k) ?? "").join("");
  const fact = (label, value) => (value ? `<div><dt>${ui[label]}</dt><dd>${t(value)}</dd></div>` : "");
  const frases = t(p.frases) || [];

  root.innerHTML = `
    <section class="case-hero">
      <canvas class="waves" data-waves="${attr(p.color)},#8b7bff,#4f7dff,${attr(p.color)}" aria-hidden="true"></canvas>
      <div class="case-hero__inner">
        <a href="./#trabajo" class="case-hero__back link">${ui["case.back"]}</a>
        <p class="case-hero__eyebrow" data-reveal>${[p.cliente, p.anio, t(p.subtitulo)].filter(Boolean).join(" · ")}</p>
        <h1 class="case-hero__name" data-words>${p.nombre}</h1>
        ${frases.length ? `
          <p class="roller" aria-label="${attr(frases.join(" "))}">
            <span class="roller__track" aria-hidden="true">
              ${[...frases, frases[0]].map((f) => `<span class="roller__line">${f}</span>`).join("")}
            </span>
          </p>` : ""}
        <p class="case-hero__summary" data-reveal>${t(p.resumen)}</p>
      </div>
    </section>

    <dl class="case-facts" data-reveal>
      ${fact("case.client", p.cliente)}
      ${fact("case.role", p.rol)}
      ${fact("case.timeline", p.duracion)}
      ${fact("case.tools", p.herramientas)}
      ${fact("case.team", p.equipo)}
    </dl>

    <div class="case-showcase clip" data-reveal>${scene(p)}</div>

    <div class="case-layout">
      <nav class="toc" aria-label="${ui["case.contents"]}">
        <p class="toc__title">${ui["case.contents"]}</p>
        <ol>${toc.map((s) => `<li><a href="#${s.id}"><span>${s.num}</span>${s.label}</a></li>`).join("")}</ol>
      </nav>
      <div class="case-body">${body}</div>
    </div>

    <a href="${caseUrl(next)}" class="next" style="--c:${attr(next.color)}">
      <span class="next__label">${ui["case.next"]}</span>
      <span class="next__title">${next.nombre} <span class="arrow" aria-hidden="true">→</span></span>
      <span class="next__tags">${next.cliente} — ${t(next.subtitulo)}</span>
    </a>`;
};
