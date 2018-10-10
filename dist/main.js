/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: initGL, createVertexShader, createFragmentShader, createShader, createShaderProgram, createWebGLCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initGL\", function() { return initGL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createVertexShader\", function() { return createVertexShader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFragmentShader\", function() { return createFragmentShader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createShader\", function() { return createShader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createShaderProgram\", function() { return createShaderProgram; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createWebGLCanvas\", function() { return createWebGLCanvas; });\nfunction initGL(body) {\n  if (!body) return;\n  var canvas = createWebGLCanvas();\n  var gl = canvas.getContext('webgl');\n  gl.viewport(0, 0, canvas.width, canvas.height);\n  gl.clearColor(1, 1, 1, 1);\n  body.appendChild(canvas);\n  return gl;\n}\nfunction createVertexShader(gl, shaderSrc) {\n  return createShader(gl, shaderSrc, gl.VERTEX_SHADER);\n}\nfunction createFragmentShader(gl, shaderSrc) {\n  return createShader(gl, shaderSrc, gl.FRAGMENT_SHADER);\n}\nfunction createShader(gl, shaderSrc, shaderType) {\n  // Create a new shader\n  var shader = gl.createShader(shaderType); // Assign it\n\n  gl.shaderSource(shader, shaderSrc);\n  gl.compileShader(shader);\n  return shader;\n}\nfunction createShaderProgram(gl, vertexShader, fragmentShader) {\n  var shaderProgram = gl.createProgram();\n  gl.attachShader(shaderProgram, createVertexShader(gl, vertexShader));\n  gl.attachShader(shaderProgram, createFragmentShader(gl, fragmentShader));\n  gl.linkProgram(shaderProgram);\n  gl.useProgram(shaderProgram);\n  return shaderProgram;\n}\nfunction createWebGLCanvas() {\n  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'webgl-canvas';\n  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;\n  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 600;\n  var canvas = document.createElement('canvas');\n  canvas.id = id;\n  canvas.width = width;\n  canvas.height = height; // canvas style\n\n  canvas.style.zIndex = 8;\n  canvas.style.position = 'absolute';\n  canvas.style.border = '1px solid white';\n  return canvas;\n}\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _shaders_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/vertexShader.glsl */ \"./src/shaders/vertexShader.glsl\");\n/* harmony import */ var _shaders_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shaders_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/fragmentShader.glsl */ \"./src/shaders/fragmentShader.glsl\");\n/* harmony import */ var _shaders_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction App() {\n  var gl, shaderProgram, vertices;\n\n  function createShaders() {\n    shaderProgram = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createShaderProgram\"])(gl, _shaders_vertexShader_glsl__WEBPACK_IMPORTED_MODULE_1___default.a, _shaders_fragmentShader_glsl__WEBPACK_IMPORTED_MODULE_2___default.a);\n  }\n\n  function createVertices() {\n    vertices = [-0.9, -0.9, 0, 0.9, -0.9, 0, 0, 0.9, 0];\n    var buffer = gl.createBuffer();\n    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\n    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);\n    var coords = gl.getAttribLocation(shaderProgram, 'coords'); // gl.vertexAttrib3f(coords, 0, 0, 0);\n\n    gl.vertexAttribPointer(coords, 3, gl.FLOAT, false, 0, 0);\n    gl.enableVertexAttribArray(coords);\n    gl.bindBuffer(gl.ARRAY_BUFFER, null);\n    var pointSize = gl.getAttribLocation(shaderProgram, 'pointSize');\n    gl.vertexAttrib1f(pointSize, 10);\n    var color = gl.getUniformLocation(shaderProgram, 'color');\n    gl.uniform4f(color, 0, 1, 0, 1);\n  }\n\n  function setup() {\n    gl = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"initGL\"])(document.getElementsByTagName('body')[0]);\n    createShaders();\n    createVertices();\n    update();\n  }\n\n  function update() {\n    draw();\n    requestAnimationFrame(update);\n  }\n\n  function draw() {\n    gl.clear(gl.COLOR_BUFFER_BIT);\n    gl.drawArrays(gl.POINTS, 0, 3);\n  }\n\n  setup();\n}\n\nApp();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shaders/fragmentShader.glsl":
/*!*****************************************!*\
  !*** ./src/shaders/fragmentShader.glsl ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\nuniform vec4 color;\\n\\nvoid main(void) {\\n  gl_FragColor = color;\\n}\"\n\n//# sourceURL=webpack:///./src/shaders/fragmentShader.glsl?");

/***/ }),

/***/ "./src/shaders/vertexShader.glsl":
/*!***************************************!*\
  !*** ./src/shaders/vertexShader.glsl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"attribute vec4 coords;\\nattribute float pointSize;\\n\\nvoid main(void) {\\n  gl_Position = coords;\\n  gl_PointSize = pointSize;\\n}\"\n\n//# sourceURL=webpack:///./src/shaders/vertexShader.glsl?");

/***/ })

/******/ });