# Portafolio — Isabella Montes

Sitio estático y bilingüe (ES/EN), en HTML + CSS + JS sin dependencias, listo para GitHub Pages.

## Estructura

```
index.html            Home: hero, casos, sobre mí, contacto
proyecto.html         Plantilla única para todos los casos (proyecto.html?p=<slug>)
data/proyectos.js     ← Aquí vive el contenido de los casos
js/i18n.js            Textos de la interfaz en ES / EN
js/render.js          Convierte los datos en HTML (no hace falta tocarlo)
js/main.js            Idioma, animaciones, índice del caso, visor de imágenes
css/styles.css        Estilos; colores y medidas en :root
assets/proyectos/     Una carpeta por proyecto con sus imágenes
```

## Agregar un caso nuevo

1. Crea `assets/proyectos/<slug>/` con las imágenes (JPG de máximo ~2400px de ancho).
2. En `data/proyectos.js`, copia un proyecto completo `{ ... }` y edítalo.
   - `slug`: único, en minúsculas, sin espacios ni tildes.
   - Los textos van como `{ es: "...", en: "..." }`.
   - `caso: false` muestra la tarjeta como "Caso en preparación".
3. Arma el contenido con `bloques`, en el orden que quieras:

| Tipo       | Para qué                                                    |
|------------|-------------------------------------------------------------|
| `texto`    | Título + párrafos y/o viñetas. Los títulos arman el índice lateral |
| `tarjetas` | Objetivos, hallazgos o decisiones (3 por fila)              |
| `imagen`   | Imagen con pie opcional; se puede ampliar al hacer clic     |
| `galeria`  | 2 o 3 imágenes por fila (ideal para pantallas móviles)      |
| `sistema`  | Design system recreado: tipografías, escala, colores, degradados y botones |
| `journey`  | Journey map recreado: fases, acciones, curva de emoción, pensamientos y dolores |
| `cita`     | Problem statement o frase destacada                         |
| `datos`    | Cifras de resultados                                        |
| `video`    | Video MP4 con controles                                     |
| `impacto`  | Cifras de impacto. El primero se muestra arriba, bajo el banner. `desde` agrega el "antes" (ej. `desde: "2 semanas", valor: "5 min"`) |
| `decision` | Decisión clave: `problema` → `hallazgo` → `decision` → `porque` |
| `hallazgo` | Hallazgo de investigación: `texto` (cita), `fuente`, `implicacion` |
| `resultado`| Resultados con `items: [{ desde?, valor, texto, medicion }]` (cómo se midió) |
| `reflexion`| `aprendi` y `distinto` (qué haría diferente)                |
| `nota`     | Nota interna de revisión: solo se ve con `?review=1` en la URL |

Campos del encabezado del caso: `titular` (frase de problema → resultado), `producto`, `industria`, `rol`, `duracion`, `equipo`, `alcance`.
`destacado: true` lo muestra en "Casos destacados" (el primero va a todo el ancho); el resto va a "Más proyectos".

Estructura recomendada de un caso (con `capitulo`): 01 Overview · 02 Problema · 03 Contexto · 04 Qué aprendí · 05 Decisiones clave · 06 Diseñar la experiencia · 07 Validación · 08 Resultado · 09 Reflexión.

El enlace "Siguiente caso" se calcula solo.

## Portada del caso (mockups 3D)

`escena` es una lista de pantallas; la web las monta en dispositivos reales (MacBook, iPad o iPhone)
inclinados en 3D, que giran con el scroll y siguen al mouse:

```js
escena: [
  { dispositivo: "laptop", src: "assets/proyectos/<slug>/pantalla-desktop.jpg" },
  { dispositivo: "phone",  src: "assets/proyectos/<slug>/pantalla-movil.jpg" },
],
```

Dispositivos: `laptop`, `tablet` o `phone`. Solo sube la captura plana de la pantalla
(desktop ~1600px de ancho; móvil ~800px). Los bloques `spotlight` aceptan `dispositivo: "phone"`.

`composicion` define cómo se acomodan los dispositivos en la portada. Opciones:
`showroom` (equipos de pie con reflejo), `cascade` (tablet atrás y laptop adelante), `arc` (teléfonos en curva), `fan` (abanico de teléfonos),
 `depth` (teléfono al frente, laptop atrás) y `deck` (teléfonos apilados en profundidad).
Si no se indica, se usa una composición genérica.

## URLs de los casos

Cada caso vive en su propia carpeta (`/nova/`, `/banco-w/`…), generada desde `proyecto.html`.
Si agregas un proyecto o cambias un `slug`, ejecuta en la Terminal, dentro de la carpeta del portafolio:

```
python3 generar-casos.py
```

## Idioma

Se elige así: `?lang=es|en` en la URL → la última elección del usuario → el idioma del navegador.

## Ver en local

Abre `index.html` en el navegador (doble clic). No necesita servidor.

## Publicar en GitHub Pages

1. Sube la carpeta a un repositorio de GitHub.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `root`.
3. Para un dominio propio, agrega un archivo `CNAME` con el dominio y configura el DNS
   según la guía de GitHub Pages.

## AI Lab

Contenido en `data/ai-lab.js` (`window.AILAB`), render en `js/ai-lab.js`, plantilla `ai-lab.html`.
`generar-casos.py` crea `/ai-lab/` y una carpeta `/ai-lab/<slug>/` por cada experimento con `estado: "publicado"`.

- `tipo`: `"experimento"` (documentado desde el inicio) o `"profesional"` (entregables reales de un proyecto ya terminado; sin prompts ni versiones reconstruidas).
- `estado`: `"publicado"` (tiene página de detalle) o `"en-preparacion"` (se muestra como próximo, con `plan`, sin enlace ni resultados).
- `resultado`: `concepto` · `analisis` · `diseno` · `prototipo` · `funcional`.
- `categorias`: ids de `AILAB.categorias` (`product`, `ui`, `prototype`, `data`).
- `secciones` del detalle: `texto`, `principios`, `registro` (mensajes reales tal cual), `iteraciones` (versiones reales + comparador), `contribucion`, `resultado` (`pantallas`, `movil`, `prueba`, `enlace` opcional), `reflexion`.
- `pendientes`: notas internas, visibles solo con `?review=1`.

Reglas: nada de métricas, prompts ni imágenes inventadas. Datos sintéticos siempre identificados como tales.
Un enlace "para probarlo" solo se agrega cuando el prototipo está publicado y funciona.

## Build: prerender, metadatos y sitemap

`python3 generar-casos.py` (necesita Google Chrome instalado) además de crear las carpetas de los casos:
- **Prerender:** abre cada página en Chrome sin pantalla, ejecuta `render.js` en español y guarda el resultado en el HTML. Buscadores, LinkedIn y herramientas de IA leen el contenido sin JavaScript. En el navegador, `main.js` vuelve a renderizar con el idioma de la persona.
- **Metadatos por caso:** title, description, og:*, twitter:image y canonical con la URL real del caso. Imagen para compartir en `assets/og/<slug>.jpg` (se genera solo si no existe; bórrala para regenerarla).
- **sitemap.xml y robots.txt.**

Ejecútalo cada vez que cambies `data/proyectos.js`, `js/i18n.js`, `index.html` o `proyecto.html`.

CV: `assets/cv-isabella-montes.pdf` (español) y `assets/resume-isabella-montes.pdf` (inglés). El botón cambia de archivo con el idioma (`cv.href` en `js/i18n.js`).
