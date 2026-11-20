/* ==========================================================================
   HOME v2 — dibuja las secciones nuevas de la home a partir de data/home.js
   y data/proyectos.js. main.js la llama en cada render (y al cambiar de idioma).
   Lo marcado como "pendiente" solo se ve en revisión (?review=1, localhost o la vista previa).
   ========================================================================== */
(() => {
  const REVIEW =
    new URLSearchParams(location.search).has("review") ||
    !/(^|\.)bybelladesign\.com$/.test(location.hostname);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
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

    /* ---------- Hero ---------- */
    const av = $("[data-h-avail]");
    if (av) {
      const c = pend(H.disponibilidad);
      av.hidden = c === null;
      av.className = `chip chip--live${c || ""}`;
      av.innerHTML = `<i aria-hidden="true"></i>${esc(t(H.disponibilidad))}`;
    }
    const pic = $("[data-h-portrait]");
    if (pic) {
      pic.innerHTML = H.retrato.src
        ? `<img src="${esc(H.retrato.src)}" alt="${esc(t(H.retrato.alt))}" decoding="async">`
        : `<span class="portrait__empty${REVIEW ? " tbd" : ""}">${REVIEW ? esc(ui["h2.portrait"]) : "IM"}</span>`;
    }
    put("[data-h-trust]", (window.MARCAS || []).slice(0, 5).map((m) => `<li>${esc(m.nombre.replace(" Legal Solutions", ""))}</li>`).join(""));

    /* ---------- Cifras ---------- */
    put("[data-stats]", H.cifras.map((c, k) => `
      <li data-reveal style="--d:${k * 80}ms">
        <strong>${c.desde ? `<small>${esc(t(c.desde))}</small>` : ""}<span data-count="${esc(c.valor)}">${esc(c.valor)}</span></strong>
        <span>${esc(t(c.texto))}</span>
      </li>`).join(""));

    /* ---------- Trabajo seleccionado ---------- */
    const media = (s) => {
      if (s.escena) return `<div class="work__media work__media--scene"><img src="${esc(s.escena)}" alt="" decoding="async" loading="lazy"></div>`;
      const n = s.pantallas.length;
      return `<div class="work__media work__media--flat work__media--n${n}">${s.pantallas.map((src) => `<img src="${esc(src)}" alt="" decoding="async" loading="lazy">`).join("")}</div>`;
    };
    put("[data-sel]", H.seleccion.map((s, k) => {
      const p = bySlug(s.slug) || {};
      const d = { ...p, ...s };
      const top = (p.bloques || []).find((b) => b.tipo === "impacto")?.items?.[0];
      const metric = top
        ? `<p class="work__metric"><strong>${top.desde ? `${esc(t(top.desde))} → ` : ""}${esc(top.valor)}</strong> ${esc(t(top.texto))}</p>`
        : d.hechos ? `<ul class="work__facts">${t(d.hechos).map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : "";
      const linked = d.caso !== false && p.caso;
      const tag = linked ? "a" : "div";
      return `
        <li class="work__item${k === 0 ? " work__item--wide" : ""}" data-reveal style="--d:${(k % 2) * 90}ms">
          <${tag} class="work__card"${linked ? ` href="${caseUrl(s.slug)}"` : ""}>
            ${media(s)}
            ${s.nuevo ? `<span class="pill pill--dark work__new">${esc(ui["sel.new"])}</span>` : ""}
            <div class="work__body">
              <p class="work__meta"><span>${esc(d.cliente)}</span><span>${esc(t(d.anio))}</span><span>${esc(t(d.industria))}</span></p>
              <h3 class="work__title">${esc(d.nombre)}</h3>
              <p class="work__summary">${esc(t(d.titular) || t(d.subtitulo))}</p>
              <div class="work__foot">${metric}<span class="work__cta">${esc(linked ? ui["sel.view"] : ui["sel.soon"])}${linked ? ` <span class="arrow" aria-hidden="true">→</span>` : ""}</span></div>
            </div>
          </${tag}>
        </li>`;
    }).join(""));

    /* ---------- Diseño + IA (marco neutro + B/N → color) ---------- */
    put("[data-ia]", H.ia.map((a, k) => {
      const tag = a.href ? "a" : "div";
      return `
        <li class="ai__item" data-reveal style="--d:${k * 90}ms">
          <${tag} class="ai__card"${a.href ? ` href="${esc(a.href)}"` : ""}>
            <div class="ai__stage"><div class="frame"><img src="${esc(a.pantalla)}" alt="" decoding="async" loading="lazy"></div></div>
            <div class="ai__body">
              <p class="ai__type">${esc(t(a.tipo))}</p>
              <h3 class="ai__name">${esc(a.nombre)}${a.estado ? ` <span class="pill">${esc(t(a.estado))}</span>` : ""}</h3>
              <p class="ai__text">${esc(t(a.texto))}</p>
              ${a.href ? `<span class="ai__cta">${esc(ui["ia.view"])} <span class="arrow" aria-hidden="true">→</span></span>` : ""}
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

    startRotator(ui);
  };

  /* ---------- Rol rotativo del hero: fintech → salud → legal tech ---------- */
  let timer;
  function startRotator(ui) {
    clearInterval(timer);
    const el = document.querySelector("[data-rotator]");
    if (!el) return;
    const words = ui["h2.roles"];
    if (reduce || !words?.length) { el.textContent = ui["h2.rolesAll"]; return; }
    let i = 0;
    el.innerHTML = `<span class="rot__w">${words[0]}</span>`;
    timer = setInterval(() => {
      i = (i + 1) % words.length;
      const old = el.firstElementChild;
      old.classList.add("is-out");
      setTimeout(() => {
        el.innerHTML = `<span class="rot__w is-in">${words[i]}</span>`;
      }, 380);
    }, 2600);
  }
})();
