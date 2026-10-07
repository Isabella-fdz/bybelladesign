/* ==========================================================================
   Ondas de luz para los banners (WebGL, sin librerías).
   Uso: <canvas class="waves" data-waves="#hex,#hex,#hex,#hex"></canvas>
   - Se pausa cuando no está en pantalla o la pestaña está oculta.
   - Con "reducir movimiento" dibuja un solo cuadro estático.
   - Sin WebGL, queda el degradado CSS de respaldo.
   ========================================================================== */
window.initWaves = (canvas) => {
  if (!canvas || canvas.dataset.ready) return;
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
  if (!gl) return;
  canvas.dataset.ready = "1";

  const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const palette = (canvas.dataset.waves || "#8b7bff,#4f7dff,#3ee0cf,#ff6b4a").split(",").map((c) => hex(c.trim()));
  while (palette.length < 4) palette.push(palette[palette.length - 1]);

  const vs = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;
  const fs = `
    precision mediump float;
    uniform vec2 r;
    uniform float t;
    uniform vec3 c0, c1, c2, c3;
    vec3 bg = vec3(0.047, 0.043, 0.125);

    float wave(float x, float i) {
      return 0.07 * sin(x * 1.25 + t * 0.22 + i * 1.7)
           + 0.045 * sin(x * 2.6 - t * 0.17 + i * 2.3)
           + 0.018 * sin(x * 5.3 + t * 0.35 + i * 0.9);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / r;
      float x = uv.x * (r.x / r.y);
      vec3 col = bg + vec3(0.06, 0.03, 0.14) * (1.0 - uv.y);

      for (int k = 0; k < 4; k++) {
        float i = float(k);
        vec3 c = k == 0 ? c0 : k == 1 ? c1 : k == 2 ? c2 : c3;
        float y = 0.62 - i * 0.15 + wave(x, i);
        float d = uv.y - y;
        float body = smoothstep(0.003, -0.003, d);
        float pulse = 0.55 + 0.45 * sin(x * 0.9 - t * 0.4 + i * 2.1);
        vec3 surface = bg * 0.7 + c * 0.22 * exp(d * 9.0) * pulse;
        col = mix(col, surface, body);
        col += c * (exp(-abs(d) * 90.0) * 0.9 + exp(-abs(d) * 14.0) * 0.28) * pulse;
      }

      float v = smoothstep(1.25, 0.35, length(uv - vec2(0.5, 0.45)));
      gl_FragColor = vec4(col * (0.55 + 0.45 * v), 1.0);
    }`;

  const shader = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  };
  const prog = gl.createProgram();
  gl.attachShader(prog, shader(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uR = gl.getUniformLocation(prog, "r");
  const uT = gl.getUniformLocation(prog, "t");
  ["c0", "c1", "c2", "c3"].forEach((n, i) => gl.uniform3fv(gl.getUniformLocation(prog, n), palette[i]));

  // Resolución reducida: el efecto es suave y así cuesta muy poco a la GPU
  const resize = () => {
    const scale = Math.min(devicePixelRatio, 1.5) * 0.6;
    canvas.width = Math.round(canvas.clientWidth * scale);
    canvas.height = Math.round(canvas.clientHeight * scale);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uR, canvas.width, canvas.height);
  };
  resize();
  new ResizeObserver(resize).observe(canvas);

  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const start = performance.now() - 20000;
  let visible = true;
  let raf = 0;

  const draw = (now) => {
    gl.uniform1f(uT, (now - start) / 1000);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    canvas.classList.add("is-on");
    raf = !still && visible && !document.hidden ? requestAnimationFrame(draw) : 0;
  };
  const play = () => { if (!raf) raf = requestAnimationFrame(draw); };

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) play(); }).observe(canvas);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) play(); });
  play();
};
