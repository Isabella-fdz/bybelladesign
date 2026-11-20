/* ==========================================================================
   HOME v2 — dibuja las secciones nuevas de la home a partir de data/home.js
   y data/proyectos.js. main.js la llama en cada render (y al cambiar de idioma).
   Lo marcado como "pendiente" solo se ve en revisión (?review=1, localhost o la vista previa).
   Tarjetas con la estructura de ar2: imagen en pieza redondeada + cliente, título y etiqueta debajo.
   ========================================================================== */
(() => {
  const REVIEW =
    new URLSearchParams(location.search).has("review") ||
    !/(^|\.)bybelladesign\.com$/.test(location.hostname);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

  window.renderHomeV2 = (lang) => {
    const H = window.HOME;
    if (!H || !document.querySelector("[data-home-v2]")) return;
    const ui = window.I18N[lang];
    const P = window.PROYECTOS || [];
    const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.es : v ?? "");
    const bySlug = (s) => P.find((p) => p.slug === s);
    const caseUrl = (slug) => (location.protocol === "file:" ? `${slug}/index.html` : `${slug}/`);
    const $ = (s) => document.querySelector(s);
    const put = (s, html) => { const el = $(s); if (el) el.innerHTML = html; };
    const pend = (o) => (o && o.pendiente ? (REVIEW ? " tbd" : null) : "");
    const chip = (label) => `<span class="card__chip"><span>${esc(label)}</span><span aria-hidden="true">↗</span></span>`;

    /* ---------- Hero ---------- */
    const av = $("[data-h-avail]");
    if (av) {
      const c = pend(H.disponibilidad);
      av.hidden = c === null;
      av.className = `avail${c || ""}`;
      av.innerHTML = `<i aria-hidden="true"></i>${esc(t(H.disponibilidad))}`;
    }
    const pic = $("[data-h-portrait]");
    if (pic) {
      pic.className = `avatar${H.retrato.src ? "" : REVIEW ? " tbd" : ""}`;
      pic.innerHTML = H.retrato.src ? `<img src="${esc(H.retrato.src)}" alt="" decoding="async">` : "IM";
    }

    /* ---------- Cifras ---------- */
    put("[data-stats]", H.cifras.map((c) => `
      <li>
        <strong>${c.desde ? `<small>${esc(t(c.desde))}</small>` : ""}<span data-count="${esc(c.valor)}">${esc(c.valor)}</span></strong>
        <span>${esc(t(c.texto))}</span>
      </li>`).join(""));

    /* ---------- Trabajo seleccionado ---------- */
    /* Composición de la tarjeta (estilo ar2): fondo degradado + pantallas que se salen del borde */
    const img = (src, alt = "") => `<img src="${esc(src)}" alt="${esc(alt)}" decoding="async" loading="lazy">`;
    const media = (c) => {
      if (c.tipo === "escena") return `<div class="card__media card__media--scene">${img(c.src, t(c.alt))}`;
      const bg = c.fondo ? ` style="--g1:${c.fondo[0]};--g2:${c.fondo[1]};--g3:${c.fondo[2]}"` : "";
      if (c.tipo === "moviles")
        return `<div class="card__media comp comp--phones"${bg}>${c.pantallas.map((src, i) => `<div class="ph ph--${i + 1}">${img(src)}</div>`).join("")}`;
      if (c.tipo === "marca-moviles") {
        const m = c.marca;
        return `<div class="card__media comp comp--brand"${bg}><div class="brand" style="--b1:${m.fondo[0]};--b2:${m.fondo[1]};--b3:${m.fondo[2]}"><img src="${esc(m.logo)}" alt="" decoding="async"></div>${c.pantallas.map((src, i) => `<div class="ph ph--${i + 1}">${img(src)}</div>`).join("")}`;
      }
      if (c.tipo === "web")
        return `<div class="card__media comp comp--web"${bg}><div class="scr scr--main"${c.escala ? ` style="width:${c.escala * 100}%"` : ""}>${img(c.principal)}</div>`;
      if (c.tipo === "web-movil")
        return `<div class="card__media comp comp--webm"${bg}><div class="scr scr--main">${img(c.principal)}</div><div class="ph ph--side">${img(c.movil)}</div>`;
      return `<div class="card__media">`;
    };
    put("[data-sel]", H.seleccion.map((s, k) => {
      const p = bySlug(s.slug) || {};
      const d = { ...p, ...s };
      const top = (p.bloques || []).find((b) => b.tipo === "impacto")?.items?.[0];
      const linked = d.caso !== false && p.caso;
      const tag = linked ? "a" : "div";
      const wide = !!s.ancho;
      const metric = top
        ? `<p class="card__metric"><strong>${top.desde ? `${esc(t(top.desde))} → ` : ""}${esc(top.valor)}</strong> ${esc(t(top.texto))}</p>`
        : "";
      const tags = [d.etiqueta ? t(d.etiqueta) : null, t(d.industria)].filter(Boolean);
      return `
        <li class="work__item${wide ? " work__item--wide" : ""}" data-reveal style="--d:${(k % 2) * 80}ms">
          <${tag} class="card"${linked ? ` href="${caseUrl(s.slug)}"` : ""}>
            ${media(s.comp)}${chip(linked ? ui["sel.view"] : ui["sel.soon"])}</div>
            <div class="card__meta">
              <div class="card__text">
                <p class="card__client">${esc(d.cliente)} · ${esc(t(d.anio))}</p>
                <h3 class="card__title">${esc(d.nombre)}</h3>
                ${metric || `<p class="card__summary">${esc(t(d.titular))}</p>`}
              </div>
              <ul class="tags">${tags.map((x, i) => `<li${i === 0 && d.etiqueta ? ' class="tags__new"' : ""}>${esc(x)}</li>`).join("")}</ul>
            </div>
          </${tag}>
        </li>`;
    }).join(""));

    /* ---------- Diseño + IA (marco neutro + B/N → color) ---------- */
    put("[data-ia]", H.ia.map((a, k) => {
      const tag = a.href ? "a" : "div";
      return `
        <li class="ai__item" data-reveal style="--d:${k * 80}ms">
          <${tag} class="card card--ai"${a.href ? ` href="${esc(a.href)}"` : ""}>
            <div class="card__media card__media--frame"><div class="frame">${img(a.pantalla)}</div>${a.href ? chip(ui["ia.view"]) : ""}</div>
            <div class="card__meta">
              <div class="card__text">
                <p class="card__client">${esc(t(a.tipo))}</p>
                <h3 class="card__title">${esc(a.nombre)}</h3>
                <p class="card__summary">${esc(t(a.texto))}</p>
              </div>
              ${a.estado ? `<ul class="tags"><li>${esc(t(a.estado))}</li></ul>` : ""}
            </div>
          </${tag}>
        </li>`;
    }).join(""));

    /* ---------- Cómo trabajo ---------- */
    put("[data-how]", H.servicios.map((s, k) => {
      const href = s.prueba.startsWith("#") ? s.prueba : caseUrl(s.prueba);
      return `
        <li data-reveal style="--d:${k * 70}ms"><a href="${esc(href)}">
          <span class="how__n">${String(k + 1).padStart(2, "0")}</span>
          <span class="how__t">${esc(t(s.t))}</span>
          <span class="how__d">${esc(t(s.d))}</span>
          <span class="how__p">${esc(ui["how.see"])} ${esc(t(s.cliente))} <span class="arrow" aria-hidden="true">↗</span></span>
        </a></li>`;
    }).join(""));

    /* ---------- Trayectoria + testimonio ---------- */
    put("[data-path]", H.trayectoria.map((r) => `
      <li data-reveal><span class="path__y">${esc(t(r.anios))}</span><span class="path__r">${esc(r.rol)}</span><span class="path__l">${esc(r.lugar)}</span><span class="path__v">${esc(t(r.vinculo) || "")}</span></li>`).join(""));
    const q = $("[data-quote]");
    if (q) {
      const c = pend(H.testimonio);
      q.hidden = c === null;
      q.className = `quote${c || ""}`;
      q.innerHTML = `<blockquote>“${esc(t(H.testimonio.cita))}”</blockquote><p>${esc(t(H.testimonio.autor))}</p>`;
    }

    /* ---------- Archivo ---------- */
    put("[data-arch]", H.archivo.map((a) => {
      const p = bySlug(a.slug);
      if (!p) return "";
      const m = p.metricaTarjeta;
      return `
        <li data-reveal><a href="${caseUrl(p.slug)}">
          <span class="arch__img"><img src="${esc(a.pantalla)}" alt="" decoding="async" loading="lazy"></span>
          <span class="arch__name">${esc(p.nombre)}</span>
          <span class="arch__desc">${esc(t(p.subtitulo))}</span>
          <span class="arch__meta">${m ? `<strong>${esc(m.valor)}</strong> ${esc(t(m.texto))}` : esc(p.anio || "")}</span>
          <span class="arrow" aria-hidden="true">→</span>
        </a></li>`;
    }).join(""));

    /* ---------- Contacto ---------- */
    const cr = $("[data-c-role]");
    if (cr) {
      const c = pend(H.contacto.rol);
      cr.hidden = c === null;
      cr.className = `contact2__role${c || ""}`;
      cr.textContent = t(H.contacto.rol);
    }
    put("[data-c-place]", esc(t(H.contacto.lugar)));
  };
})();
