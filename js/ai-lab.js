/* ==========================================================================
   AI Lab: convierte data/ai-lab.js en HTML.
   - Home: sección [data-lab-home]
   - /ai-lab/: página del laboratorio [data-lab]
   - /ai-lab/<slug>/: detalle de un experimento [data-lab-exp] (body data-exp="slug")
   Para agregar un experimento no necesitas tocar este archivo.
   ========================================================================== */
window.renderLab = (lang) => {
  const LAB = window.AILAB;
  if (!LAB?.publico) return;   // oculto: el menú y la sección de la home quedan con "hidden"
  document.querySelectorAll("[data-lab-home]").forEach((el) => el.removeAttribute("hidden"));
  const ui = window.I18N[lang];
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en : v ?? "");
  const attr = (s = "") => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  const review = new URLSearchParams(location.search).has("review");
  const local = location.protocol === "file:";
  // Rutas relativas al <base> de cada página (la home no tiene base, las demás sí)
  const labUrl = local ? "ai-lab/index.html" : "ai-lab/";
  const expUrl = (e) => (local ? `ai-lab/${e.slug}/index.html` : `ai-lab/${e.slug}/`);
  const cat = (id) => LAB.categorias.find((c) => c.id === id);
  const published = LAB.experimentos.filter((e) => e.estado === "publicado");
  const upcoming = LAB.experimentos.filter((e) => e.estado === "en-preparacion");
  const list = (arr) => (arr?.length ? `<ul class="b-list">${arr.map((x) => `<li>${x}</li>`).join("")}</ul>` : "");

  /* ---------- Piezas reutilizables ---------- */
  const resultTag = (e) => `<span class="lab-tag lab-tag--result">${ui[`lab.res.${e.resultado}`]}</span>`;
  const typeTag = (e) => `<span class="lab-tag lab-tag--${e.tipo}">${ui[`lab.type.${e.tipo}`]}</span>`;
  const catTags = (e) => `<ul class="lab-cats">${e.categorias.map((id) => `<li style="--k:${cat(id).color}">${cat(id).nombre}</li>`).join("")}</ul>`;
  // Ventana de navegador para mostrar capturas reales de una app
  const shotFrame = (src, alt, cls = "") => `
    <figure class="lab-frame ${cls}">
      <span class="lab-frame__bar" aria-hidden="true"><i></i><i></i><i></i></span>
      <img src="${attr(src)}" alt="${attr(t(alt))}" decoding="async">
    </figure>`;
  const soonCard = (e) => `
    <li class="lab-soon" style="--k:${attr(e.color)}">
      <p class="lab-soon__state"><span class="lab-dot" aria-hidden="true"></span>${ui["lab.soon"]}</p>
      <h4 class="lab-soon__title">${e.nombre}</h4>
      <p class="lab-soon__text">${t(e.subtitulo)}</p>
      ${catTags(e)}
    </li>`;
  const featuredCard = (e, heading = "h3") => `
    <article class="lab-feature" style="--k:${attr(e.color)}">
      <a class="lab-feature__link" href="${expUrl(e)}">
        <div class="lab-feature__media">${shotFrame(e.preview, e.previewAlt)}</div>
        <div class="lab-feature__body">
          <p class="lab-feature__meta">${typeTag(e)} ${resultTag(e)}</p>
          <${heading} class="lab-feature__title">${e.nombre} <span class="lab-feature__label">${t(e.etiqueta)}</span></${heading}>
          <p class="lab-feature__text">${t(e.subtitulo)}</p>
          <p class="lab-feature__contrib"><strong>${ui["lab.contribution"]}:</strong> ${t(e.contribucionCorta)}</p>
          ${catTags(e)}
          <span class="card__cta" aria-hidden="true">${ui["lab.view"]} <span class="arrow">→</span></span>
        </div>
      </a>
    </article>`;

  /* ---------- Home: sección AI Lab ---------- */
  const home = document.querySelector("[data-lab-home]");
  if (home) {
    const star = published.find((e) => e.destacado) || published[0];
    home.innerHTML = `
      <div class="lab-home__head">
        <p class="lab-kicker" data-reveal>${ui["lab.kicker"]}</p>
        <h2 class="lab-home__title" data-reveal>${ui["lab.title"]}</h2>
        <p class="lab-home__intro" data-reveal>${ui["lab.intro"]}</p>
        <a href="${labUrl}" class="btn btn--glass lab-home__cta" data-reveal>${ui["lab.cta"]} <span aria-hidden="true">→</span></a>
      </div>
      ${star ? `<div class="lab-home__star" data-reveal>${featuredCard(star)}</div>` : ""}
      ${upcoming.length ? `
        <div class="lab-home__next">
          <h3 class="more__title">${ui["lab.next"]}</h3>
          <ul class="lab-soon-list">${upcoming.map(soonCard).join("")}</ul>
        </div>` : ""}`;
  }

  /* ---------- Página del laboratorio ---------- */
  const page = document.querySelector("[data-lab]");
  if (page) {
    document.title = `AI Lab · Isabella Montes`;
    page.innerHTML = `
      <section class="lab-hero">
        <div class="lab-hero__inner">
          <p class="lab-kicker" data-reveal>${ui["lab.kicker"]}</p>
          <h1 class="lab-hero__title" data-words>${ui["lab.title"]}</h1>
          <p class="lab-hero__lead" data-reveal>${ui["lab.lead"]}</p>
          <aside class="lab-rule" data-reveal>
            <strong>${ui["lab.rule.t"]}</strong>
            <p>${ui["lab.rule.d"]}</p>
          </aside>
          <nav class="lab-index" aria-label="${attr(ui["lab.index"])}" data-reveal>
            <a href="#capacidades">${ui["lab.cats"]}</a>
            ${LAB.categorias.map((c) => `<a href="#cat-${c.id}" style="--k:${c.color}"><span>${c.num}</span>${c.nombre}</a>`).join("")}
            <a href="#experimentos">${ui["lab.gallery"]}</a>
          </nav>
        </div>
      </section>

      <section class="lab-section" id="capacidades" aria-labelledby="lab-cats-title">
        <h2 class="lab-section__title" id="lab-cats-title" data-reveal>${ui["lab.cats"]}</h2>
        <ol class="lab-catlist">
          ${LAB.categorias.map((c) => {
            const related = LAB.experimentos.filter((e) => e.categorias.includes(c.id));
            return `
              <li class="lab-cat" id="cat-${c.id}" style="--k:${c.color}" data-reveal>
                <span class="lab-cat__num" aria-hidden="true">${c.num}</span>
                <div class="lab-cat__main">
                  <h3 class="lab-cat__name">${c.nombre}</h3>
                  <p class="lab-cat__desc">${t(c.desc)}</p>
                  <ul class="lab-cat__topics">${t(c.temas).map((x) => `<li>${x}</li>`).join("")}</ul>
                </div>
                <div class="lab-cat__exps">
                  <p class="lab-cat__label">${ui["lab.related"]}</p>
                  ${related.length ? `<ul>${related.map((e) => e.estado === "publicado"
                    ? `<li><a href="${expUrl(e)}" class="link">${e.nombre}</a> ${resultTag(e)}</li>`
                    : `<li><span class="lab-cat__soon">${e.nombre}</span> <span class="lab-tag">${ui["lab.soon"]}</span></li>`).join("")}</ul>`
                    : `<p class="lab-empty">${ui["lab.empty"]}</p>`}
                </div>
              </li>`;
          }).join("")}
        </ol>
      </section>

      <section class="lab-section" id="experimentos" aria-labelledby="lab-gal-title">
        <h2 class="lab-section__title" id="lab-gal-title" data-reveal>${ui["lab.gallery"]}</h2>
        <div class="lab-gallery">
          ${published.map((e) => `<div data-reveal>${featuredCard(e)}</div>`).join("")}
          ${upcoming.length ? `
            <ul class="lab-soon-list lab-soon-list--plan">
              ${upcoming.map((e) => `
                <li class="lab-soon" style="--k:${attr(e.color)}" data-reveal>
                  <p class="lab-soon__state"><span class="lab-dot" aria-hidden="true"></span>${ui["lab.soon"]} · ${ui[`lab.res.${e.resultado}`]}</p>
                  <h3 class="lab-soon__title">${e.nombre}</h3>
                  <p class="lab-soon__text">${t(e.subtitulo)}</p>
                  <p class="lab-cat__label">${ui["lab.plan"]}</p>
                  <ol class="lab-plan">${t(e.plan).map((x) => `<li>${x}</li>`).join("")}</ol>
                  <p class="lab-soon__note">${ui["lab.soonText"]}</p>
                  ${catTags(e)}
                </li>`).join("")}
            </ul>` : ""}
        </div>
      </section>`;
  }

  /* ---------- Detalle de un experimento ---------- */
  const root = document.querySelector("[data-lab-exp]");
  if (!root) return;
  const e = published.find((x) => x.slug === document.body.dataset.exp);
  if (!e) {
    root.innerHTML = `<section class="lab-hero"><div class="lab-hero__inner"><h1 class="lab-hero__title">404</h1><p class="lab-hero__lead">${ui["lab.notfound"]} <a href="${labUrl}" class="link">${ui["lab.back"]}</a></p></div></section>`;
    return;
  }
  document.title = `${e.nombre} · AI Lab · Isabella Montes`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", t(e.subtitulo));
  root.style.setProperty("--c", e.color);
  document.documentElement.style.setProperty("--case", e.color);

  const toc = [];
  const chapter = (s) => {
    toc.push({ id: s.id, num: s.num, label: t(s.titulo) });
    return `
      <header class="b-chapter" id="${s.id}">
        <span class="b-chapter__num" aria-hidden="true">${s.num}</span>
        <div>
          <h2 class="b-chapter__title" data-words>${t(s.titulo)}</h2>
          ${s.bajada ? `<p class="b-chapter__sub" data-reveal>${t(s.bajada)}</p>` : ""}
        </div>
      </header>`;
  };
  const sections = {
    texto: (s) => `${chapter(s)}
      <section class="b-text" data-reveal>
        <div class="b-text__body">${t(s.texto).map((x) => `<p>${x}</p>`).join("")}${list(t(s.puntos))}</div>
      </section>`,

    principios: (s) => `${chapter(s)}
      <ul class="b-cards" style="--n:2">
        ${s.items.map((it, k) => `
          <li class="b-card" data-reveal style="--d:${(k % 2) * 80}ms">
            <span class="b-card__num">${String(k + 1).padStart(2, "0")}</span>
            <h4>${t(it.titulo)}</h4>
            <p>${t(it.texto)}</p>
          </li>`).join("")}
      </ul>`,

    // Registro real (commits, notas de trabajo): se muestra tal cual, en su idioma original
    registro: (s) => `
      <section class="lab-log" data-reveal>
        <h3 class="b-text__title">${t(s.titulo)}</h3>
        <p class="lab-log__note">${t(s.nota)}</p>
        <ol class="lab-log__list">
          ${s.items.map((it) => `<li><time>${it.hora}</time><code lang="en">${it.texto}</code></li>`).join("")}
        </ol>
      </section>`,

    iteraciones: (s) => `${chapter(s)}
      <ol class="lab-iter">
        ${s.items.map((it) => `
          <li class="lab-iter__step" data-reveal>
            <div class="lab-iter__media">${shotFrame(it.src, it.alt)}</div>
            <div class="lab-iter__text">
              <p class="lab-iter__version">${it.version} · ${t(it.nombre)}</p>
              ${it.problema ? `<p class="lab-iter__label">${ui["lab.issue"]}</p><p>${t(it.problema)}</p>` : ""}
              ${it.cambio ? `<p class="lab-iter__label">${ui["lab.change"]}</p><p>${t(it.cambio)}</p>` : ""}
            </div>
          </li>`).join("")}
      </ol>
      ${s.comparar ? `
        <figure class="b-figure">
          <div class="b-compare clip" data-reveal style="--pos:50%">
            <img class="b-compare__img" src="${attr(s.comparar.despues.src)}" alt="${attr(t(s.comparar.despues.alt))}" decoding="async">
            <div class="b-compare__before"><img class="b-compare__img" src="${attr(s.comparar.antes.src)}" alt="${attr(t(s.comparar.antes.alt))}" decoding="async"></div>
            <span class="b-compare__label b-compare__label--before" aria-hidden="true">v1</span>
            <span class="b-compare__label b-compare__label--after" aria-hidden="true">v3</span>
            <span class="b-compare__handle" aria-hidden="true"><span>↔</span></span>
            <input class="b-compare__range" type="range" min="0" max="100" value="50" aria-label="${attr(ui["case.compare"])}">
          </div>
          <figcaption>${t(s.comparar.pie)}</figcaption>
        </figure>` : ""}`,

    contribucion: (s) => `${chapter(s)}
      <ul class="lab-contrib" data-reveal>${t(s.items).map((x) => `<li>${x}</li>`).join("")}</ul>`,

    resultado: (s) => `${chapter(s)}
      <!-- La primera pantalla completa; las demás recortadas a su contenido, una por fila -->
      <div class="lab-output">
        ${s.pantallas.map((p, k) => `
          <figure class="lab-output__item${k === 0 ? " lab-output__item--wide" : ""}" data-reveal>
            <div class="lab-output__media">${shotFrame(p.src, p.titulo)}</div>
            <figcaption><span class="lab-output__num">${String(k + 1).padStart(2, "0")}</span><strong>${t(p.titulo)}</strong> ${t(p.texto)}</figcaption>
          </figure>`).join("")}
      </div>
      <div class="lab-try" data-reveal>
        ${s.movil ? `<div class="lab-try__phone"><img src="${attr(s.movil.src)}" alt="${attr(t(s.movil.alt))}" decoding="async"></div>` : ""}
        <div>
          <p class="lab-cat__label">${ui["lab.try"]}</p>
          <p class="lab-try__text">${t(s.prueba)}</p>
          ${s.enlace ? `<a href="${attr(s.enlace)}" class="btn btn--solid" target="_blank" rel="noopener">${ui["lab.view"]} <span aria-hidden="true">↗</span></a>` : ""}
        </div>
      </div>`,

    reflexion: (s) => `${chapter(s)}
      <section class="b-reflection" data-reveal>
        <div class="b-reflection__cols">
          <div><h4>${ui["lab.limits"]}</h4>${list(t(s.limites))}</div>
          <div><h4>${ui["lab.nextSteps"]}</h4>${list(t(s.siguiente))}</div>
        </div>
      </section>`,
  };

  const body = e.secciones.map((s) => sections[s.tipo]?.(s) ?? "").join("");
  const fact = (label, value) => (value ? `<div><dt>${ui[label]}</dt><dd>${value}</dd></div>` : "");
  const next = published[(published.indexOf(e) + 1) % published.length];

  root.innerHTML = `
    <section class="lab-hero lab-hero--exp">
      <div class="lab-hero__inner">
        <a href="${labUrl}" class="case-hero__back link">${ui["lab.back"]}</a>
        <p class="lab-feature__meta" data-reveal>${typeTag(e)} ${resultTag(e)} <span class="lab-tag">${ui["lab.demo"]}</span></p>
        <p class="lab-hero__eyebrow" data-reveal>${t(e.etiqueta)} · ${t(e.fecha)}</p>
        <h1 class="lab-hero__title" data-words>${e.nombre}</h1>
        <p class="lab-hero__lead" data-reveal>${t(e.subtitulo)}</p>
      </div>
    </section>

    <div class="lab-exp-preview" data-reveal>${shotFrame(e.preview, e.previewAlt, "lab-frame--hero")}</div>

    <dl class="case-facts lab-facts" data-reveal>
      ${fact("lab.problem", t(e.overview.problema))}
      ${fact("lab.goal", t(e.overview.objetivo))}
      ${fact("lab.category", e.categorias.map((id) => cat(id).nombre).join(" · "))}
      ${fact("lab.output", ui[`lab.res.${e.resultado}`])}
      ${fact("lab.type", ui[`lab.type.${e.tipo}`])}
    </dl>

    ${review && e.pendientes?.length ? `<aside class="b-note lab-pending" role="note"><strong>${ui["lab.pending"]}</strong>${list(e.pendientes)}</aside>` : ""}

    <div class="case-layout">
      <nav class="toc" aria-label="${ui["case.contents"]}">
        <p class="toc__title">${ui["case.contents"]}</p>
        <ol>${toc.map((s) => `<li><a href="#${s.id}"><span>${s.num}</span>${s.label}</a></li>`).join("")}</ol>
      </nav>
      <div class="case-body">${body}</div>
    </div>

    ${next && next !== e ? `
      <a href="${expUrl(next)}" class="next" style="--c:${attr(next.color)}">
        <span class="next__label">${ui["lab.view"]}</span>
        <span class="next__title">${next.nombre} <span class="arrow" aria-hidden="true">→</span></span>
      </a>` : `
      <a href="${labUrl}" class="next">
        <span class="next__label">AI Lab</span>
        <span class="next__title">${ui["lab.back"].replace("← ", "")} <span class="arrow" aria-hidden="true">→</span></span>
        <span class="next__tags">${ui["lab.next"]}: ${upcoming.map((x) => x.nombre).join(" · ")}</span>
      </a>`}`;
};
