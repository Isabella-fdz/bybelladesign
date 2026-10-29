#!/usr/bin/env python3
"""Genera una carpeta por caso (nova/index.html, banco-w/index.html…) a partir de proyecto.html,
para tener URLs limpias como bybelladesign.com/nova/.
Ejecútalo cada vez que agregues o cambies el slug de un proyecto:  python3 generar-casos.py"""
import os, re, shutil, json, subprocess
raiz = os.path.dirname(os.path.abspath(__file__))
datos = open(os.path.join(raiz, "data/proyectos.js"), encoding="utf-8").read()
slugs = []
for bloque in re.split(r'\n  \{\n', datos)[1:]:
    m = re.search(r'slug: "([^"]+)"', bloque)
    if m and re.search(r'caso: true', bloque): slugs.append(m.group(1))
plantilla = open(os.path.join(raiz, "proyecto.html"), encoding="utf-8").read()
plantilla = plantilla.replace("<meta charset=\"utf-8\">", "<meta charset=\"utf-8\">\n  <base href=\"../\">", 1)
# borrar carpetas de casos anteriores (las que tienen la marca de generadas)
for d in os.listdir(raiz):
    f = os.path.join(raiz, d, "index.html")
    if os.path.isfile(f) and "generado por generar-casos.py" in open(f, encoding="utf-8").read():
        shutil.rmtree(os.path.join(raiz, d))
for slug in slugs:
    html = plantilla.replace("<body>", f'<body data-slug="{slug}">\n  <!-- generado por generar-casos.py: no editar, edita proyecto.html -->', 1)
    os.makedirs(os.path.join(raiz, slug), exist_ok=True)
    open(os.path.join(raiz, slug, "index.html"), "w", encoding="utf-8").write(html)
print("Casos generados:", ", ".join(slugs))

# AI Lab: /ai-lab/ y una carpeta por experimento publicado (/ai-lab/<slug>/), desde ai-lab.html
lab = open(os.path.join(raiz, "data/ai-lab.js"), encoding="utf-8").read()
exps = [m.group(1) for m in re.finditer(r'slug: "([^"]+)",\n(?:.*\n){0,3}?\s*estado: "publicado"', lab)]
base_lab = open(os.path.join(raiz, "ai-lab.html"), encoding="utf-8").read()
marca = "<!-- generado por generar-casos.py: no editar, edita ai-lab.html -->"
def pagina(base, main, body=""):
    html = base_lab.replace('<meta charset="utf-8">', f'<meta charset="utf-8">\n  <base href="{base}">', 1)
    html = html.replace("<body>", f"<body{body}>\n  {marca}", 1)
    return html.replace("data-lab-main", main, 1)
if not re.search(r'publico:\s*true', lab):
    print("AI Lab oculto (publico: false): no se generan sus páginas")
else:
    os.makedirs(os.path.join(raiz, "ai-lab"), exist_ok=True)
    open(os.path.join(raiz, "ai-lab", "index.html"), "w", encoding="utf-8").write(pagina("../", "data-lab"))
    for slug in exps:
        os.makedirs(os.path.join(raiz, "ai-lab", slug), exist_ok=True)
        open(os.path.join(raiz, "ai-lab", slug, "index.html"), "w", encoding="utf-8").write(pagina("../../", "data-lab-exp", f' data-exp="{slug}"'))
    print("AI Lab generado: ai-lab/ +", ", ".join(exps) or "(sin experimentos publicados)")


# ==========================================================================
# Prerender: el contenido queda en el HTML inicial (buscadores, LinkedIn, IA, sin JS)
# Abre cada página en Chrome sin pantalla, ejecuta el mismo render.js del sitio (en español,
# sin main.js ni animaciones) y guarda el resultado dentro de <body>. En el navegador,
# main.js vuelve a renderizar con el idioma de la persona: se ve igual que antes.
# También escribe los metadatos de cada caso, sitemap.xml y robots.txt.
# ==========================================================================
import functools, http.server, threading, socket, html as htmlmod, datetime
SITIO = "https://bybelladesign.com"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

CAPTURA = r"""<script id="__pr_script">
addEventListener("load", () => setTimeout(() => {
  const lang = "es", ui = window.I18N[lang];
  window.renderApp(lang); window.renderLab?.(lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = ui[el.dataset.i18n]));
  document.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = ui[el.dataset.i18nHtml]));
  document.querySelectorAll("[data-i18n-label]").forEach((el) => el.setAttribute("aria-label", ui[el.dataset.i18nLabel]));
  const mq = document.querySelector("[data-marquee]");
  if (mq) { const it = ui.marquee.map((x) => `<span>${x}</span><i>✺</i>`).join(""); mq.innerHTML = it + it; }
  document.getElementById("__pr_script").remove();
  const data = { body: document.body.innerHTML, title: document.title,
    desc: document.querySelector('meta[name="description"]')?.content || "" };
  const out = document.createElement("script");
  out.type = "application/json"; out.id = "__pr_out";
  out.textContent = JSON.stringify(data).replace(/<\//g, "<\\/");
  document.body.append(out);
}, 400));
</script>"""

def servidor():
    s = socket.socket(); s.bind(("127.0.0.1", 0)); port = s.getsockname()[1]; s.close()
    class Q(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a): pass
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", port), functools.partial(Q, directory=raiz))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, port

def chrome(args):
    return subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-prefers-reduced-motion", *args],
                          capture_output=True, text=True, timeout=90).stdout

def prerender(ruta, port):
    """ruta: archivo relativo (index.html, nova/index.html…). Devuelve los metadatos que generó render.js."""
    f = os.path.join(raiz, ruta)
    original = open(f, encoding="utf-8").read()
    tmp = os.path.join(os.path.dirname(f), "_prerender.html")
    pagina = re.sub(r'\s*<script src="js/main\.js[^"]*" defer></script>', "", original)
    pagina = pagina.replace("</body>", CAPTURA + "\n</body>", 1)
    open(tmp, "w", encoding="utf-8").write(pagina)
    try:
        url = f"http://127.0.0.1:{port}/" + os.path.relpath(tmp, raiz)
        dom = chrome(["--virtual-time-budget=8000", "--window-size=1440,900", "--dump-dom", url])
    finally:
        os.remove(tmp)
    m = re.search(r'<script type="application/json" id="__pr_out">(.*?)</script>', dom, re.S)
    if not m: raise RuntimeError(f"No se pudo prerenderizar {ruta}")
    data = json.loads(m.group(1))
    cuerpo = data["body"].rstrip() + "\n"
    nuevo = re.sub(r"(<body[^>]*>)(.*)(</body>)", lambda x: x.group(1) + "\n" + cuerpo + x.group(3), original, count=1, flags=re.S)
    open(f, "w", encoding="utf-8").write(nuevo)
    return data

def imagen_og(slug, port):
    """Portada del caso (su escena de dispositivos) en 1200×630 para compartir. Solo si no existe."""
    destino = os.path.join(raiz, "assets", "og", f"{slug}.jpg")
    if os.path.exists(destino): return
    os.makedirs(os.path.dirname(destino), exist_ok=True)
    f = os.path.join(raiz, slug, "index.html")
    estilo = """<style>.header,.footer,.progress,.skip,.case-hero,.case-facts,.case-intro,.case-layout,.next,.case-impact{display:none!important}
      body::before{display:none!important}main{padding:0!important}
      .case-showcase{margin:0!important;border-radius:0!important}
      .js .clip[data-reveal]{opacity:1!important;clip-path:none!important;transform:none!important}</style>"""
    tmp = os.path.join(raiz, slug, "_og.html")
    open(tmp, "w", encoding="utf-8").write(open(f, encoding="utf-8").read().replace("</head>", estilo + "</head>", 1))
    png = destino[:-4] + ".png"
    try:
        # La escena conserva su proporción natural (2:1): 1260×630 y se recorta al centro a 1200×630
        chrome(["--virtual-time-budget=25000", "--window-size=1260,630", f"--screenshot={png}", f"http://127.0.0.1:{port}/{slug}/_og.html"])
    finally:
        os.remove(tmp)
    subprocess.run(["sips", "--cropToHeightWidth", "630", "1200", png], capture_output=True)
    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "85", png, "--out", destino], capture_output=True)
    os.remove(png)

def meta_caso(slug, data):
    f = os.path.join(raiz, slug, "index.html")
    h = open(f, encoding="utf-8").read()
    url = f"{SITIO}/{slug}/"
    titulo = htmlmod.escape(data["title"], quote=True)
    desc = htmlmod.escape(data["desc"], quote=True)
    img = f"{SITIO}/assets/og/{slug}.jpg"
    reemplazos = [
        (r"<title>.*?</title>", f"<title>{titulo}</title>"),
        (r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{desc}">'),
        (r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{titulo}">'),
        (r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{desc}">'),
        (r'<meta property="og:type" content="[^"]*">', '<meta property="og:type" content="article">'),
        (r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{url}">\n  <link rel="canonical" href="{url}">'),
        (r'<meta property="og:image" content="[^"]*">', f'<meta property="og:image" content="{img}">'),
        (r'<meta property="og:image:alt" content="[^"]*">', f'<meta property="og:image:alt" content="{titulo}">'),
        (r'<meta name="twitter:image" content="[^"]*">', f'<meta name="twitter:image" content="{img}">'),
    ]
    for patron, valor in reemplazos:
        h, n = re.subn(patron, lambda m: valor, h, count=1, flags=re.S)
        if not n: print("  aviso: no se encontró", patron, "en", slug)
    open(f, "w", encoding="utf-8").write(h)

if os.path.exists(CHROME):
    srv, port = servidor()
    try:
        paginas = ["index.html"] + [f"{s}/index.html" for s in slugs]
        lab_dir = os.path.join(raiz, "ai-lab")
        if os.path.isdir(lab_dir):
            paginas += [os.path.relpath(os.path.join(d, "index.html"), raiz) for d, _, fs in os.walk(lab_dir) if "index.html" in fs]
        for ruta in paginas:
            data = prerender(ruta, port)
            slug = ruta.split("/")[0]
            if slug in slugs:
                imagen_og(slug, port)
                meta_caso(slug, data)
        print("Prerender:", len(paginas), "páginas con su contenido en el HTML")
    finally:
        srv.shutdown()
else:
    print("Aviso: no se encontró Chrome; las páginas quedan sin prerender")

# sitemap.xml y robots.txt (publicar-preview.sh reemplaza robots.txt para bloquear la vista previa)
hoy = datetime.date.today().isoformat()
urls = [f"{SITIO}/"] + [f"{SITIO}/{s}/" for s in slugs]
open(os.path.join(raiz, "sitemap.xml"), "w", encoding="utf-8").write(
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + "".join(f"  <url><loc>{u}</loc><lastmod>{hoy}</lastmod></url>\n" for u in urls) + "</urlset>\n")
open(os.path.join(raiz, "robots.txt"), "w", encoding="utf-8").write(f"User-agent: *\nAllow: /\n\nSitemap: {SITIO}/sitemap.xml\n")
print("sitemap.xml y robots.txt actualizados")
