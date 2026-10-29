#!/bin/zsh
# Publica la branch actual en el preview: https://isabella-fdz.github.io/bybelladesign-preview/
# No toca producción (bybelladesign.com se publica solo desde main en otro repositorio).
set -e
cd "$(dirname "$0")"
TMP=$(mktemp -d)
git archive HEAD | tar -x -C "$TMP"
cd "$TMP"
rm -f CNAME                                   # el dominio es solo de producción
# El AI Lab está oculto en producción; en la vista previa se activa y se generan sus páginas
sed -i '' 's/publico: false,/publico: true,/' data/ai-lab.js
perl -0pi -e 's#<!-- AI Lab: reactivar[^\n]*\n(\s*<a href="ai-lab/"[^>]*>AI Lab</a>) -->#$1#g' index.html proyecto.html ai-lab.html
python3 generar-casos.py
printf 'User-agent: *\nDisallow: /\n' > robots.txt
for f in index.html proyecto.html ai-lab.html */index.html */*/index.html; do
  [ -f "$f" ] && sed -i '' 's#<meta charset="utf-8">#<meta charset="utf-8">\n  <meta name="robots" content="noindex, nofollow">#' "$f"
done
touch .nojekyll
git init -q -b main && git add -A && git -c user.name="Isabella Montes" -c user.email=imontesfdz@gmail.com commit -q -m "Preview $(date '+%Y-%m-%d %H:%M')"
env -u GITHUB_TOKEN git -c credential.helper= -c 'credential.helper=!gh auth git-credential' push -q -f https://github.com/Isabella-fdz/bybelladesign-preview.git main
rm -rf "$TMP"
echo "Preview publicado: https://isabella-fdz.github.io/bybelladesign-preview/"
