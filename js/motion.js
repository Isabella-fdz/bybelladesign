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
    const menu = [...document.querySelectorAll("[data-proc-menu] a")];
    if (!cards.length || !menu.length) return;
    // la tarjeta activa es la última cuya parte superior ya pasó la línea de anclaje
    const line = innerHeight * 0.45;
    let on = 0;
    cards.forEach((c, i) => { if (c.getBoundingClientRect().top < line) on = i; });
    menu.forEach((a, i) => (i === on ? a.setAttribute("aria-current", "step") : a.removeAttribute("aria-current")));
  };

  /* ---------- Proceso (Caspia, medido en folira-lite): la tarjeta de atrás se encoge mientras la siguiente se le sobrepone ----------
     Escala desde el centro: empieza cuando la siguiente está a 160 px de fijarse y baja ~0,052 % por píxel
     (100 % → 91,7 % al quedar tapada); al salir el bloque sigue al mismo ritmo hasta un mínimo de 80 %. La última no se encoge. */
  const procScale = () => {
    const cards = [...document.querySelectorAll(".proc__card")];
    if (cards.length < 2) return;
    const pin = parseFloat(getComputedStyle(cards[0]).top);
    const sticky = getComputedStyle(cards[0]).position === "sticky";
    cards.slice().reverse().forEach((c, ri) => {
      const i = cards.length - 1 - ri;
      if (reduce || !sticky || i === cards.length - 1) { c.style.scale = ""; return; }
      // posición real de la siguiente, sin su propia escala (getBoundingClientRect ya la incluye)
      const n = cards[i + 1], r = n.getBoundingClientRect(), ns = parseFloat(n.style.scale) || 1;
      const nextTop = r.top - ((r.height / ns) * (1 - ns)) / 2;
      const s = Math.max(0.8, Math.min(1, 1 - (pin + 160 - nextTop) * 0.00052));
      c.style.scale = s.toFixed(4);
    });
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
    procScale();
    journey();
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);

  /* ---------- Hero: palabras que cambian (deslizan hacia arriba y el hueco se ajusta a cada palabra) ---------- */
  let rotTimer;
  const startRot = () => {
    clearInterval(rotTimer);
    const box = document.querySelector("[data-rot]");
    const track = box?.querySelector(".rot__track");
    if (!track) return;
    const items = [...track.children];
    // el resaltador se ajusta al ancho de cada palabra (va en su propia línea: no reacomoda el resto)
    const fit = (i) => { box.style.width = `${items[i].offsetWidth}px`; };
    let i = 0;
    track.style.transition = "none";
    track.style.setProperty("--i", 0);
    requestAnimationFrame(() => fit(0));
    if (reduce || items.length < 3) return;
    rotTimer = setInterval(() => {
      i++;
      track.style.transition = "";
      track.style.setProperty("--i", i);
      fit(i);
      if (i === items.length - 1) {
        // la última es copia de la primera: se vuelve al inicio sin que se note
        setTimeout(() => { track.style.transition = "none"; track.style.setProperty("--i", 0); i = 0; }, 750);
      }
    }, 2200);
  };
  addEventListener("rot:ready", startRot);
  document.fonts?.ready.then(startRot);
  startRot();

  // las tarjetas se dibujan con JS (y se redibujan al cambiar de idioma): se vuelven a recoger
  const mo = new MutationObserver(() => { collect(); onScroll(); });
  document.querySelectorAll("[data-sel], [data-ia], [data-proc], [data-path]").forEach((el) => mo.observe(el, { childList: true }));
  collect();
  update();
})();
