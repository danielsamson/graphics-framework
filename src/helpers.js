export function initGL(body) {
  if (!body) return;

  const canvas = createWebGLCanvas();
  const gl = canvas.getContext('webgl');
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(1, 1, 1, 1);

  body.appendChild(canvas);

  return gl;
}

export function createVertexShader(gl, shaderSrc) {
  return createShader(gl, shaderSrc, gl.VERTEX_SHADER);
}

export function createFragmentShader(gl, shaderSrc) {
  return createShader(gl, shaderSrc, gl.FRAGMENT_SHADER);
}

export function createShader(gl, shaderSrc, shaderType) {
  // Create a new shader
  const shader = gl.createShader(shaderType);
  // Assign it
  gl.shaderSource(shader, shaderSrc);
  gl.compileShader(shader);

  return shader;
}

export function createShaderProgram(gl, vertexShader, fragmentShader) {
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, createVertexShader(gl, vertexShader));
  gl.attachShader(shaderProgram, createFragmentShader(gl, fragmentShader));
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);
}

export function createWebGLCanvas(
  id = 'webgl-canvas',
  width = 800,
  height = 600
) {
  const canvas = document.createElement('canvas');
  canvas.id = id;
  canvas.width = width;
  canvas.height = height;

  // canvas style
  canvas.style.zIndex = 8;
  canvas.style.position = 'absolute';
  canvas.style.border = '1px solid white';
  return canvas;
}
