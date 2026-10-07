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
