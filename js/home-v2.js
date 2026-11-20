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

    /* ---------- Hero: titular palabra por palabra (el HTML ya trae el español; solo se rehace si cambia el idioma) ---------- */
    const h1 = $("[data-hero-title]");
    if (h1 && h1.dataset.lang !== lang) {
      const words = ui["h3.title"].split(/\s+/);
      h1.setAttribute("aria-label", ui["h3.title"]);
      h1.innerHTML = words.map((w, i) => `<span class="w" aria-hidden="true"><span class="w__i" style="--i:${i}">${esc(w)}</span></span>`).join(" ");
      h1.dataset.lang = lang;
    }

    /* ---------- Frase con palabras que cambian (como el rotador de las páginas de caso) ---------- */
    const rot = $("[data-rot] .rot__track");
    if (rot) {
      const words = ui["h3.rot"].split("|");
      rot.innerHTML = [...words, words[0]].map((w) => `<span class="rot__w">${esc(w)}</span>`).join("");
      rot.style.setProperty("--i", 0);
      const sr = $("[data-rot-sr]");
      if (sr) sr.textContent = words.join(", ");
      window.dispatchEvent(new Event("rot:ready"));
    }

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
        return `<div class="card__media comp comp--stack"${bg}>${c.pantallas.map((src, i) => `<div class="ph ph--${i + 1}" data-depth="${(0.6 + i * 0.4).toFixed(1)}">${img(src)}</div>`).join("")}`;
      if (c.tipo === "marca-moviles") {
        const m = c.marca;
        return `<div class="card__media comp comp--brand"${bg}><div class="brand" style="--b1:${m.fondo[0]};--b2:${m.fondo[1]};--b3:${m.fondo[2]}"><img src="${esc(m.logo)}" alt="" decoding="async"></div>${c.pantallas.map((src, i) => `<div class="ph ph--${i + 1}">${img(src)}</div>`).join("")}`;
      }
      if (c.tipo === "web")
        return `<div class="card__media comp comp--web"${bg}><div class="scr scr--main" data-depth="1">${img(c.principal)}</div>`;
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
            <div class="card__media card__media--frame${a.fondo ? " card__media--grad" : ""}"${a.fondo ? ` style="--g1:${a.fondo[0]};--g2:${a.fondo[1]};--g3:${a.fondo[2]}"` : ""}><div class="frame">${img(a.pantalla)}</div>${a.href ? chip(ui["ia.view"]) : ""}</div>
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

    /* ---------- Servicios (Folira): la tarjeta activa se abre; las demás muestran la imagen ---------- */
    put("[data-svc]", H.servicios.map((s, k) => {
      const href = s.prueba.startsWith("#") ? s.prueba : caseUrl(s.prueba);
      return `
        <li class="svc__item" data-reveal style="--d:${k * 80}ms">
          <div class="svc__img">${img(s.img)}</div>
          <div class="svc__body">
            <h3 class="svc__t">${esc(t(s.t))}</h3>
            <p class="svc__d">${esc(t(s.d))}</p>
          </div>
          <a class="svc__bar" href="${esc(href)}"><span>${esc(ui["how.see"])}</span> <strong>${esc(t(s.cliente))}</strong> <span class="arrow" aria-hidden="true">↗</span></a>
        </li>`;
    }).join(""));

    /* ---------- Proceso (Folira): menú fijo + tarjetas que se apilan ---------- */
    const pr = H.proceso;
    const prc = pend(pr);
    const procSec = $("#proceso");
    if (procSec) procSec.hidden = prc === null;
    if (procSec && prc !== null) {
      procSec.classList.toggle("tbd-sec", !!prc);
      put("[data-proc-menu]", pr.pasos.map((p, k) => `<li><a href="#paso-${k + 1}"${k === 0 ? ' aria-current="step"' : ""}><span>0${k + 1}</span>${esc(t(p.t))}</a></li>`).join(""));
      put("[data-proc]", pr.pasos.map((p, k) => `
        <li class="proc__card${k % 2 ? " proc__card--flip" : ""}" id="paso-${k + 1}" data-step="${k}" style="--k:${k}">
          <div class="proc__img${p.movil ? " proc__img--m" : ""}">${img(p.img)}</div>
          <div class="proc__txt">
            <p class="proc__top"><span>/0${k + 1}</span><span class="proc__label">${esc(t(p.t))}</span></p>
            <div><h3 class="proc__h">${esc(t(p.h))}</h3><p class="proc__d">${esc(t(p.d))}</p></div>
          </div>
        </li>`).join(""));
    }

    /* ---------- Retrato de la tarjeta de perfil ---------- */
    const ap = $("[data-a-portrait]");
    if (ap) {
      ap.className = `profile__img${H.retrato.src ? "" : REVIEW ? " tbd" : ""}`;
      ap.innerHTML = H.retrato.src ? `<img src="${esc(H.retrato.src)}" alt="Isabella Montes" decoding="async" loading="lazy">` : `<span aria-hidden="true">IM</span>`;
    }

    /* ---------- Trayectoria + testimonio ---------- */
    put("[data-path]", H.trayectoria.map((r, k) => `
      <li class="journey__item">
        <article class="jcard">
          <header class="jcard__head"><h3 class="jcard__role">${esc(r.rol)}</h3><span class="jcard__org">${esc(r.lugar)}</span></header>
          ${r.desc ? `<p class="jcard__desc">${esc(t(r.desc))}</p>` : ""}
          <p class="jcard__foot"><span class="jcard__years">${esc(t(r.anios))}</span>${r.vinculo ? `<span class="jcard__type">${esc(t(r.vinculo))}</span>` : ""}</p>
        </article>
      </li>`).join(""));
    put("[data-tools]", (H.herramientas || []).map((x) => `<li title="${esc(x.n)}"><span class="tool__logo" style="--c:${esc(x.c)};-webkit-mask-image:url(${esc(x.logo)});mask-image:url(${esc(x.logo)})" aria-hidden="true"></span><span class="sr-only">${esc(x.n)}</span></li>`).join(""));
    const q = $("[data-quote]");
    if (q) {
      const c = pend(H.testimonio);
      q.hidden = c === null;
      q.className = `quote${c || ""}`;
      q.innerHTML = `<blockquote>“${esc(t(H.testimonio.cita))}”</blockquote><p>${esc(t(H.testimonio.autor))}</p>`;
    }

    /* ---------- Otros proyectos (como el blog de Folira) ---------- */
    put("[data-arch]", H.archivo.map((a, k) => {
      const p = bySlug(a.slug);
      if (!p) return "";
      const m = p.metricaTarjeta;
      return `
        <li data-reveal style="--d:${k * 90}ms"><a class="post" href="${caseUrl(p.slug)}">
          <span class="post__img">${img(a.pantalla)}</span>
          <span class="post__body">
            <span class="post__name">${esc(p.nombre)}</span>
            <span class="post__desc">${esc(t(p.subtitulo))}</span>
            <span class="post__tag">${m ? `<strong>${esc(m.valor)}</strong> ${esc(t(m.texto))}` : esc(p.anio || "")}</span>
          </span>
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
