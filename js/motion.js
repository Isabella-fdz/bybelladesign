/* ==========================================================================
   MOTION — capa de movimiento de la home.
   Tarjetas de trabajo: parallax de las pantallas (ar2).
   Todo lo demás sigue a Folira ("Caspia"): scroll nativo, revelado con fundido y
   40 px hacia arriba (css/home.css), servicios que se abren y proceso con menú fijo.
   Todo se apaga con prefers-reduced-motion.
   ========================================================================== */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.querySelector("[data-home-v2]")) return;

  /* ---------- Parallax de las pantallas de las tarjetas ---------- */
  let layers = [];
  const collect = () => {
    layers = reduce ? [] : [...document.querySelectorAll(".comp")].map((c) => ({
      box: c,
      items: [...c.querySelectorAll("[data-depth]")].map((el) => ({ el, k: +el.dataset.depth || 1 })),
    }));
  };

  /* ---------- Proceso: el paso visible se marca en el menú fijo ---------- */
  const procStep = () => {
    const cards = [...document.querySelectorAll("[data-step]")];
    const menu = [...document.querySelectorAll("[data-proc-menu] li")];
    if (!cards.length || !menu.length) return;
    // la tarjeta activa es la última cuya parte superior ya pasó la línea de anclaje
    const line = innerHeight * 0.45;
    let on = 0;
    cards.forEach((c, i) => { if (c.getBoundingClientRect().top < line) on = i; });
    menu.forEach((li, i) => li.classList.toggle("is-on", i === on));
  };

  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = innerHeight;
    for (const { box, items } of layers) {
      const r = box.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // -1 … 1
      const shift = Math.max(-1, Math.min(1, p)) * r.height * 0.06;
      for (const { el, k } of items) el.style.translate = `0 ${(shift * k).toFixed(1)}px`;
    }
    procStep();
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);

  /* ---------- Servicios: la tarjeta bajo el cursor (o con foco) se abre ---------- */
  const activate = (e) => {
    const item = e.target.closest?.(".svc__item");
    if (!item || item.classList.contains("is-active")) return;
    item.parentElement.querySelectorAll(".svc__item").forEach((x) => x.classList.toggle("is-active", x === item));
  };
  document.addEventListener("pointerover", (e) => { if (e.pointerType === "mouse") activate(e); });
  document.addEventListener("focusin", activate);

  // las tarjetas se dibujan con JS (y se redibujan al cambiar de idioma): se vuelven a recoger
  const mo = new MutationObserver(() => { collect(); onScroll(); });
  document.querySelectorAll("[data-sel], [data-ia], [data-proc]").forEach((el) => mo.observe(el, { childList: true }));
  collect();
  update();
})();
