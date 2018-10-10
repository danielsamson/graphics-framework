import { initGL, createShaderProgram } from './helpers';

import vsSrc from './shaders/vertexShader.glsl';
import fsSrc from './shaders/fragmentShader.glsl';

function App() {
  let gl;

  function createShaders() {
    createShaderProgram(gl, vsSrc, fsSrc);
  }

  function setup() {
    gl = initGL(document.getElementsByTagName('body')[0]);
    createShaders();
    update();
  }

  function update() {
    draw();
    requestAnimationFrame(update);
  }

  function draw() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
  }

  setup();
}

App();
