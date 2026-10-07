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

El orden de las tarjetas en la home y el enlace "Siguiente caso" se calculan solos.

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

## Idioma

Se elige así: `?lang=es|en` en la URL → la última elección del usuario → el idioma del navegador.

## Ver en local

Abre `index.html` en el navegador (doble clic). No necesita servidor.

## Publicar en GitHub Pages

1. Sube la carpeta a un repositorio de GitHub.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `root`.
3. Para un dominio propio, agrega un archivo `CNAME` con el dominio y configura el DNS
   según la guía de GitHub Pages.
