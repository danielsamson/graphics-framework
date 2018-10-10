import { initGL, createShaderProgram } from './helpers';

import vsSrc from './shaders/vertexShader.glsl';
import fsSrc from './shaders/fragmentShader.glsl';

function App() {
  let gl, shaderProgram, vertices;

  function createShaders() {
    shaderProgram = createShaderProgram(gl, vsSrc, fsSrc);
  }

  function createVertices() {
    vertices = [-0.9, -0.9, 0, 0.9, -0.9, 0, 0, 0.9, 0];
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const coords = gl.getAttribLocation(shaderProgram, 'coords');
    // gl.vertexAttrib3f(coords, 0, 0, 0);
    gl.vertexAttribPointer(coords, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coords);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    const pointSize = gl.getAttribLocation(shaderProgram, 'pointSize');
    gl.vertexAttrib1f(pointSize, 10);

    const color = gl.getUniformLocation(shaderProgram, 'color');
    gl.uniform4f(color, 0, 1, 0, 1);
  }

  function setup() {
    gl = initGL(document.getElementsByTagName('body')[0]);
    createShaders();
    createVertices();
    update();
  }

  function update() {
    draw();
    requestAnimationFrame(update);
  }

  function draw() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 3);
  }

  setup();
}

App();
