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

  /* ---------- Trayectoria (Caspia): cada tarjeta aparece ligada al scroll ----------
     Medido en Folira: opacidad 0 → 1 mientras la tarjeta sube del 75 % al 47 % de la pantalla,
     con un desplazamiento que se recoge al mismo ritmo. */
  const journeyItems = () => [...document.querySelectorAll(".journey__item")];
  const journey = () => {
    if (reduce) return;
    const vh = innerHeight, from = vh * 0.75, to = vh * 0.47;
    for (const el of journeyItems()) {
      const top = el.getBoundingClientRect().top;
      const p = Math.max(0, Math.min(1, (from - top) / (from - to)));
      const e = 1 - Math.pow(1 - p, 3); // frenado suave
      // se anima la tarjeta, no el punto de la línea (en Caspia los puntos están siempre)
      const card = el.firstElementChild;
      if (!card) continue;
      card.style.opacity = e.toFixed(3);
      card.style.translate = `0 ${((1 - e) * 40).toFixed(1)}px`;
    }
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
    journey();
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);

  // las tarjetas se dibujan con JS (y se redibujan al cambiar de idioma): se vuelven a recoger
  const mo = new MutationObserver(() => { collect(); onScroll(); });
  document.querySelectorAll("[data-sel], [data-ia], [data-proc], [data-path]").forEach((el) => mo.observe(el, { childList: true }));
  collect();
  update();
})();
