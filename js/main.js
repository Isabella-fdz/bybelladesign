const root = document.documentElement;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

/* ---------- Idioma: ?lang= > preferencia guardada > idioma del navegador ---------- */
const LANGS = ["es", "en"];

function initialLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(q)) return q;
  try {
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(saved)) return saved;
  } catch {}
  return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
}

let lang = initialLang();

function applyStaticText() {
  const ui = window.I18N[lang];
  root.lang = lang;
  $$("[data-i18n]").forEach((el) => (el.textContent = ui[el.dataset.i18n]));
  $$("[data-i18n-html]").forEach((el) => {
    el.innerHTML = ui[el.dataset.i18nHtml];
    el.classList.remove("is-split");
  });
  $$("[data-i18n-label]").forEach((el) => el.setAttribute("aria-label", ui[el.dataset.i18nLabel]));
  $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

  const marquee = $("[data-marquee]");
  if (marquee) {
    const items = ui.marquee.map((x) => `<span>${x}</span><i>✺</i>`).join("");
    marquee.innerHTML = items + items; // duplicado para el loop continuo
  }
}

function setLang(next) {
  if (next === lang) return;
  lang = next;
  try { localStorage.setItem("lang", lang); } catch {}
  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
  render();
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lang]");
  if (btn) setLang(btn.dataset.lang);
});

/* ---------- Títulos que entran palabra por palabra (conserva <em>) ---------- */
function splitWords() {
  $$("[data-words]:not(.is-split)").forEach((el) => {
    el.setAttribute("aria-label", el.textContent.trim());
    let n = 0;
    const wrap = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === Node.ELEMENT_NODE) return wrap(child);
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) return frag.append(" ");
          const w = document.createElement("span");
          w.className = "w";
          w.setAttribute("aria-hidden", "true");
          w.innerHTML = `<span class="w__i" style="--i:${n++}">${part}</span>`;
          frag.append(w);
        });
        child.replaceWith(frag);
      });
    };
    wrap(el);
    el.classList.add("is-split");
  });
}

/* ---------- Revelado al entrar en pantalla ---------- */
const revealIO = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-in");
    revealIO.unobserve(e.target);
  }),
  { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
);

/* ---------- Contadores de impacto ---------- */
const countIO = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    const m = e.target.dataset.count.match(/^(\D*)(\d+)(\D*)$/);
    if (!m || reduceMotion) return;
    const [, pre, num, post] = m;
    const end = +num;
    const t0 = performance.now();
    const tick = (now) => {
      const k = Math.min((now - t0) / 1400, 1);
      e.target.textContent = pre + Math.round(end * (1 - Math.pow(1 - k, 4))) + post;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }),
  { threshold: 0.6 }
);

/* ---------- Frase rodante del caso (se detiene tras dos vueltas) ---------- */
let rollerTimer;
function initRoller() {
  clearInterval(rollerTimer);
  const track = $(".roller__track");
  if (!track || reduceMotion) return;
  const total = track.children.length - 1; // la última es copia de la primera
  let i = 0;
  let loops = 0;
  rollerTimer = setInterval(() => {
    i++;
    track.style.transition = "";
    track.style.setProperty("--i", i);
    if (i === total) {
      loops++;
      setTimeout(() => {
        track.style.transition = "none";
        track.style.setProperty("--i", 0);
        i = 0;
      }, 900);
      if (loops >= 2) clearInterval(rollerTimer);
    }
  }, 2400);
}

/* ---------- Spotlight: la imagen cambia según el paso visible ---------- */
let spots = [];
function initSpotlight() {
  spots = $$(".b-spot").map((spot) => ({
    spot,
    steps: $$(".b-spot__step", spot),
    imgs: $$(".b-spot__media .device__screen img", spot),
    current: "0",
  }));
}
// El paso activo es el más cercano al centro de la pantalla; su pantalla se muestra en el mockup
function updateSpots() {
  const mid = innerHeight / 2;
  spots.forEach((sp) => {
    const r = sp.spot.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    let best = sp.steps[0], dist = Infinity;
    sp.steps.forEach((st) => {
      const b = st.getBoundingClientRect();
      const d = Math.abs(b.top + Math.min(b.height, innerHeight * 0.4) / 2 - mid);
      if (d < dist) { dist = d; best = st; }
    });
    const idx = best.dataset.i;
    if (idx === sp.current) return;
    sp.current = idx;
    sp.steps.forEach((st) => st.classList.toggle("is-active", st.dataset.i === idx));
    sp.imgs.forEach((im) => im.classList.toggle("is-active", im.dataset.i === idx));
  });
}

/* ---------- Índice del caso: resalta el capítulo visible ---------- */
let tocIO;
function initToc() {
  tocIO?.disconnect();
  const links = $$(".toc a");
  if (!links.length) return;
  const byId = new Map(links.map((a) => [a.hash.slice(1), a]));
  const sections = [...byId.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  tocIO = new IntersectionObserver(
    () => {
      // El capítulo activo es el último cuyo título ya pasó la mitad superior de la pantalla
      let current = sections[0];
      sections.forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) current = s; });
      links.forEach((a) => a.toggleAttribute("aria-current", a.hash.slice(1) === current.id));
    },
    { rootMargin: "-40% 0px -59% 0px" }
  );
  sections.forEach((s) => tocIO.observe(s));
}

/* ---------- Render + mejoras progresivas ---------- */
let scenes = [];
let flows = [];

function render() {
  applyStaticText();
  window.renderApp(lang);
  splitWords();
  $$("[data-reveal]:not(.is-in), [data-words]:not(.is-in)").forEach((el) => revealIO.observe(el));
  $$("[data-count]").forEach((el) => countIO.observe(el));
  $$("[data-depth]").forEach((el) => el.style.setProperty("--depth", el.dataset.depth));
  $$("canvas.waves").forEach((c) => window.initWaves?.(c));
  scenes = $$(".scene");
  flows = $$(".b-flow");
  initRoller();
  initSpotlight();
  initToc();
  layoutFlows();
  onScroll();
}

/* ---------- Escenas 3D: siguen al mouse ---------- */
let tiltScene = null;
const resetTilt = (sc) => { sc?.style.setProperty("--mx", 0); sc?.style.setProperty("--my", 0); };
if (!reduceMotion) {
  document.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    const sc = e.target.closest?.(".scene");
    if (tiltScene && tiltScene !== sc) resetTilt(tiltScene);
    tiltScene = sc;
    if (!sc) return;
    const r = sc.getBoundingClientRect();
    sc.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    sc.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  }, { passive: true });
  document.addEventListener("pointerleave", () => resetTilt(tiltScene));
}

/* ---------- Comparador antes / después ---------- */
document.addEventListener("input", (e) => {
  if (!e.target.matches(".b-compare__range")) return;
  e.target.closest(".b-compare").style.setProperty("--pos", `${e.target.value}%`);
});

/* ---------- Recorrido horizontal (escritorio: avanza con el scroll vertical) ---------- */
const pinFlows = () => !reduceMotion && matchMedia("(min-width: 961px)").matches;

function layoutFlows() {
  flows.forEach((f) => {
    const track = $(".b-flow__track", f);
    track.style.transform = "";
    if (!pinFlows()) { f.style.height = ""; return; }
    const distance = Math.max(0, track.scrollWidth - track.clientWidth);
    f.dataset.distance = distance;
    f.style.height = `${innerHeight + distance}px`;
  });
}
addEventListener("resize", () => { layoutFlows(); onScroll(); });

/* ---------- Precarga: cuando la página termina, se descargan en segundo plano
   todas las imágenes de los casos para que abrir cualquiera sea inmediato ---------- */
addEventListener("load", () => {
  const urls = new Set();
  const collect = (v) => {
    if (!v) return;
    if (typeof v === "string") { if (/\.(jpe?g|png|webp)$/i.test(v)) urls.add(v); return; }
    if (Array.isArray(v)) return v.forEach(collect);
    if (typeof v === "object") Object.values(v).forEach(collect);
  };
  collect(window.PROYECTOS);
  const queue = [...urls];
  const next = () => {
    const src = queue.shift();
    if (!src) return;
    const img = new Image();
    img.decoding = "async";
    img.onload = img.onerror = next;
    img.src = src;
  };
  const start = () => { for (let k = 0; k < 4; k++) next(); };
  "requestIdleCallback" in window ? requestIdleCallback(start, { timeout: 1500 }) : setTimeout(start, 600);
});

/* ---------- Scroll: header, progreso, escenas en 3D y recorridos ---------- */
const header = $(".header");
const progress = $(".progress");
const progressBar = $(".progress span");
let lastY = scrollY;
let lastPct = -1;
let ticking = false;

function onScroll() {
  const y = scrollY;
  const vh = innerHeight;
  const delta = y - lastY;

  if (Math.abs(delta) > 4) header.classList.toggle("is-hidden", delta > 0 && y > vh * 0.5);

  if (progress) {
    const max = document.documentElement.scrollHeight - vh;
    const pct = max > 0 ? Math.round((y / max) * 100) : 0;
    if (pct !== lastPct) {
      progressBar.style.transform = `scaleX(${pct / 100})`;
      progress.setAttribute("aria-valuenow", pct);
      lastPct = pct;
    }
  }

  if (!reduceMotion) {
    scenes.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      s.style.setProperty("--p", (((r.top + r.height / 2) - vh / 2) / vh).toFixed(3));
    });
  }

  if (pinFlows()) {
    flows.forEach((f) => {
      const r = f.getBoundingClientRect();
      const distance = +f.dataset.distance || 0;
      const k = clamp(-r.top / Math.max(distance, 1), 0, 1);
      $(".b-flow__track", f).style.transform = `translate3d(${-k * distance}px, 0, 0)`;
    });
  }

  updateSpots();

  lastY = y;
  ticking = false;
}

addEventListener("scroll", () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });

// Con teclado el header siempre vuelve a aparecer
header.addEventListener("focusin", () => header.classList.remove("is-hidden"));

render();
requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("is-ready")));
$$(".year").forEach((el) => (el.textContent = new Date().getFullYear()));

/* ---------- Enlaces internos con URLs limpias ---------- */
// Las páginas de caso viven en /<slug>/ con <base href="../">: los enlaces "#ancla" se resuelven
// contra la home, así que se interceptan para desplazarse dentro de la misma página.
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || !document.querySelector("base")) return;
  const el = document.getElementById(a.getAttribute("href").slice(1));
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  history.replaceState(null, "", location.pathname + location.search + a.getAttribute("href"));
});
// Abriendo los archivos en local (file://) "./" no carga index.html: se corrige el enlace
if (location.protocol === "file:") {
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="./"]');
    if (a) a.setAttribute("href", a.getAttribute("href").replace(/^\.\/(#|$)/, "index.html$1"));
  }, true);
}
