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
os.makedirs(os.path.join(raiz, "ai-lab"), exist_ok=True)
open(os.path.join(raiz, "ai-lab", "index.html"), "w", encoding="utf-8").write(pagina("../", "data-lab"))
for slug in exps:
    os.makedirs(os.path.join(raiz, "ai-lab", slug), exist_ok=True)
    open(os.path.join(raiz, "ai-lab", slug, "index.html"), "w", encoding="utf-8").write(pagina("../../", "data-lab-exp", f' data-exp="{slug}"'))
print("AI Lab generado: ai-lab/ +", ", ".join(exps) or "(sin experimentos publicados)")
