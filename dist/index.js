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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/BaseParticle.ts":
/*!****************************!*\
  !*** ./ts/BaseParticle.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseParticle; });\nclass BaseParticle {\n    constructor(_context, name = \"\") {\n        this.context = _context;\n        this.pos = {\n            x: Math.random() * this.context.canvas.clientWidth,\n            y: Math.random() * this.context.canvas.clientHeight,\n        };\n        this.speed = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };\n        const r = Math.floor(Math.random() * 255);\n        const g = Math.floor(Math.random() * 255);\n        const b = Math.floor(Math.random() * 255);\n        this.color = \"rgba(\" + r + \",\" + g + \",\" + b + \", 0.2)\";\n        this.sizeWidth = this.context.canvas.clientWidth;\n        this.sizeHeight = this.context.canvas.clientHeight;\n    }\n    /**\n     * NOTE: Abstruct function. This function should be defined in subclass.\n     */\n    draw() { }\n    /**\n     * NOTE: Update particle position\n     */\n    update() {\n        // this.pos.add(this.speed)\n        this.pos.x += this.speed.x;\n        this.pos.y += this.speed.y;\n        if (this.pos.x > this.sizeWidth || this.pos.x < 0) {\n            this.speed.x *= -1;\n        }\n        if (this.pos.y > this.sizeHeight || this.pos.y < 0) {\n            this.speed.y *= -1;\n        }\n    }\n    /**\n     * NOTE: Culclate distance between this object and passed particle.\n     * @param { BaseParticle } p target particle\n     */\n    distance(p) {\n        const x = this.pos.x - p.x;\n        const y = this.pos.y - p.y;\n        const powX = Math.pow(x, 2);\n        const powY = Math.pow(y, 2);\n        return Math.sqrt(powX + powY);\n    }\n}\n\n\n//# sourceURL=webpack:///./ts/BaseParticle.ts?");

/***/ }),

/***/ "./ts/CircleParticle.ts":
/*!******************************!*\
  !*** ./ts/CircleParticle.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CircleParticle; });\n/* harmony import */ var _BaseParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseParticle */ \"./ts/BaseParticle.ts\");\n/* harmony import */ var _ParticleType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParticleType */ \"./ts/ParticleType.ts\");\n\n\nclass CircleParticle extends _BaseParticle__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(_context) {\n        super(_context);\n        this.figure = _ParticleType__WEBPACK_IMPORTED_MODULE_1__[\"ParticleName\"].CIRCLE;\n        // this.figure = \"CIRCLE\";\n    }\n    /**\n     * NOTE: Draw particle\n     */\n    draw() {\n        // NOTE: Circle\n        this.context.strokeStyle = this.color;\n        this.context.fillStyle = this.color;\n        this.context.beginPath();\n        this.context.arc(this.pos.x, this.pos.y, 3.5, 0, Math.PI * 2, true);\n        this.context.stroke();\n        this.context.fill();\n    }\n}\n\n\n//# sourceURL=webpack:///./ts/CircleParticle.ts?");

/***/ }),

/***/ "./ts/ParticleFactory.ts":
/*!*******************************!*\
  !*** ./ts/ParticleFactory.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ParticleFactory; });\n/* harmony import */ var _CircleParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircleParticle */ \"./ts/CircleParticle.ts\");\n/* harmony import */ var _RectParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RectParticle */ \"./ts/RectParticle.ts\");\n/* harmony import */ var _ParticleType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParticleType */ \"./ts/ParticleType.ts\");\n\n\n// import TriangleParticle from \"./TriangleParticle\";\n\nclass ParticleFactory {\n    constructor() { }\n    createRandomParticle(context, name) {\n        let particle;\n        const keys = Object.keys(_ParticleType__WEBPACK_IMPORTED_MODULE_2__[\"ParticleName\"]);\n        const randomKey = Math.floor(Math.random() * keys.length);\n        const key = name || keys[randomKey];\n        switch (key) {\n            case _ParticleType__WEBPACK_IMPORTED_MODULE_2__[\"ParticleName\"].CIRCLE:\n                particle = new _CircleParticle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context);\n                break;\n            case _ParticleType__WEBPACK_IMPORTED_MODULE_2__[\"ParticleName\"].RECT:\n                particle = new _RectParticle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context);\n                break;\n            //   case ParticleType.TRIANGLE:\n            //     particle = new TriangleParticle(context);\n            //     break;\n            default:\n                particle = new _CircleParticle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context);\n                break;\n        }\n        return particle;\n    }\n    eat(food) {\n        console.log(\"hallo\");\n    }\n    sleep(hours) {\n        console.log(\"hallo\");\n    }\n}\n\n\n//# sourceURL=webpack:///./ts/ParticleFactory.ts?");

/***/ }),

/***/ "./ts/ParticleSystem.ts":
/*!******************************!*\
  !*** ./ts/ParticleSystem.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ParticleSystem; });\n/* harmony import */ var _ParticleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParticleFactory */ \"./ts/ParticleFactory.ts\");\n\nclass ParticleSystem {\n    constructor(ctx) {\n        this.context = ctx;\n        this.particleNum = 0;\n        this.particles = [];\n        this.animationId = 0;\n        this.particleFactory = new _ParticleFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.enableLines = true;\n        this.lineLength = 100;\n    }\n    /**\n     * NOTE: Iniialze particles\n     * @param { context } canvas context\n     */\n    createParticles(num) {\n        // NOTE: Set canvas size\n        // this.context = context;\n        this.context.fillStyle = \"#00000000\";\n        this.context.fillRect(0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight);\n        this.particleNum = num;\n        // NOTE: Create particle\n        for (let i = 0; i < num; i++) {\n            // const particle = new Particle(this.context);\n            const particle = this.particleFactory.createRandomParticle(this.context);\n            this.particles.push(particle);\n        }\n    }\n    /**\n     * NOTE: Loop animation\n     */\n    render() {\n        //NOTE draw particles.\n        for (let i = 0; i < this.particleNum; i++) {\n            const particle = this.particles[i];\n            particle.update();\n            this.drawLines(particle);\n            particle.draw();\n        }\n    }\n    drawLines(src) {\n        let i = 0;\n        const count = this.particles.length;\n        while (i < count) {\n            const dst = this.particles[i];\n            const distance = src.distance(dst.pos);\n            if (this.enableLines && distance < this.lineLength) {\n                // NOTE: Draw line\n                const alpha = this.map(distance, 0, this.lineLength, 0.7, 0);\n                this.context.strokeStyle = \"rgba(128, 128, 128, \" + alpha + \")\";\n                this.context.lineWidth = 0.1;\n                this.context.beginPath();\n                this.context.moveTo(src.pos.x, src.pos.y);\n                this.context.lineTo(dst.pos.x, dst.pos.y);\n                this.context.closePath();\n                this.context.stroke();\n                // line(src.pos.x, src.pos.y, dst.pos.x, dst.pos.y)\n                // this.context.stroke();\n            }\n            i = (i + 1) | 0;\n        }\n    }\n    /**\n     * NOTE: Change range to another range with same ratio.\n     * @param { float }   value\n     * @param { float }  start1\n     * @param { float }    end1\n     * @param { float }  start2\n     * @param { float }    end2\n     */\n    map(value, start1, end1, start2, end2) {\n        return start2 + (end2 - start2) * ((value - start1) / (end1 - start1));\n    }\n    /**\n     * NOTE: Stop animation\n     */\n    stopAnimation() {\n        window.cancelAnimationFrame(this.animationId);\n    }\n}\n\n\n//# sourceURL=webpack:///./ts/ParticleSystem.ts?");

/***/ }),

/***/ "./ts/ParticleType.ts":
/*!****************************!*\
  !*** ./ts/ParticleType.ts ***!
  \****************************/
/*! exports provided: ParticleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParticleName\", function() { return ParticleName; });\nvar ParticleName;\n(function (ParticleName) {\n    ParticleName[\"CIRCLE\"] = \"CIRCLE\";\n    ParticleName[\"RECT\"] = \"RECT\";\n    //   TRIANGLE: \"triangle\",\n})(ParticleName || (ParticleName = {}));\n\n\n\n//# sourceURL=webpack:///./ts/ParticleType.ts?");

/***/ }),

/***/ "./ts/RectParticle.ts":
/*!****************************!*\
  !*** ./ts/RectParticle.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RectParticle; });\n/* harmony import */ var _BaseParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseParticle */ \"./ts/BaseParticle.ts\");\n/* harmony import */ var _ParticleType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParticleType */ \"./ts/ParticleType.ts\");\n\n\nclass RectParticle extends _BaseParticle__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(context) {\n        super(context);\n        this.figure = _ParticleType__WEBPACK_IMPORTED_MODULE_1__[\"ParticleName\"].RECT;\n    }\n    /**\n     * NOTE: Draw particle\n     */\n    draw() {\n        // NOTE: Rect\n        this.context.strokeStyle = this.color;\n        this.context.fillStyle = this.color;\n        this.context.beginPath();\n        this.context.rect(this.pos.x, this.pos.y, 7, 7);\n        // this.context.stroke();\n        this.context.fill();\n    }\n}\n\n\n//# sourceURL=webpack:///./ts/RectParticle.ts?");

/***/ }),

/***/ "./ts/User.ts":
/*!********************!*\
  !*** ./ts/User.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass User {\n    constructor(familyName, givenName, age) {\n        this.age = age;\n        this.familyName = familyName;\n        this.givenName = givenName;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n\n//# sourceURL=webpack:///./ts/User.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ \"./ts/User.ts\");\n/* harmony import */ var _CircleParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircleParticle */ \"./ts/CircleParticle.ts\");\n/* harmony import */ var _ParticleSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParticleSystem */ \"./ts/ParticleSystem.ts\");\n\n\n\nconst user = new _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Mitsuya\", \"Watanabe\", 44);\nlet circle;\nlet ctx;\nlet particleSystem;\nconst contentsElem = document.getElementById(\"contents\");\nif (!!contentsElem) {\n    contentsElem.innerText = `${user.familyName} ${user.givenName}`;\n}\nwindow.onload = () => {\n    const data = [1, 5, 9, 10, 2, 54, 23, 90, 81];\n    // let sortedData: Array<number> = [];\n    let uniqueData = new Set();\n    for (let i = 0; i < 10000000; i++) {\n        const index = Math.floor(Math.random() * 100);\n        uniqueData.add(index);\n    }\n    const sortedData = Array.from(uniqueData).sort((a, b) => a - b);\n    let searchIndex = 10;\n    console.log(\"search index\", searchIndex);\n    // let startTime = performance.now();\n    // let sortedSearchIndex = binarySearch(sortedData, searchIndex);\n    // let endTime = performance.now();\n    // console.log(\n    //   \"binary serch index\",\n    //   sortedSearchIndex,\n    //   \"time\",\n    //   endTime - startTime\n    // );\n    let startTime, endTime;\n    startTime = performance.now();\n    let sortedSearchIndex = binarySearch(sortedData, searchIndex);\n    endTime = performance.now();\n    console.log(\"binary serch index\", sortedSearchIndex, \"time\", endTime - startTime);\n    const linearData = Array.from(uniqueData);\n    startTime = performance.now();\n    const linearIndex = linearSearch(linearData, searchIndex);\n    endTime = performance.now();\n    console.log(\"linear serch index\", linearIndex, \"time\", endTime - startTime);\n    startTime = performance.now();\n    sortedSearchIndex = binarySearch(sortedData, searchIndex);\n    endTime = performance.now();\n    console.log(\"binary serch index\", sortedSearchIndex, \"time\", endTime - startTime);\n    setup();\n    draw();\n};\nconst setup = () => {\n    let canvas = document.getElementById(\"canvas\");\n    if (!(ctx = canvas.getContext(\"2d\"))) {\n        throw new Error(`2d context not supported or canvas already initialized`);\n    }\n    canvas.width = canvas.clientWidth;\n    canvas.height = canvas.clientHeight;\n    circle = new _CircleParticle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n    particleSystem = new _ParticleSystem__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n    particleSystem.createParticles(100);\n};\nconst draw = () => {\n    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);\n    circle.update();\n    circle.draw();\n    particleSystem.render();\n    window.requestAnimationFrame(draw);\n};\nconst linearSearch = (arr, target) => {\n    let index = -1;\n    for (let i = 0; i < arr.length; i++) {\n        const current = arr[i];\n        if (current === target) {\n            index = i;\n            break;\n        }\n    }\n    return index;\n};\nconst binarySearch = (arr, target) => {\n    let index = -1;\n    let left = 0;\n    let right = arr.length - 1;\n    let middle = 0;\n    while (left <= right) {\n        middle = Math.floor((left + right) / 2);\n        if (arr[middle] === target) {\n            index = middle;\n            break;\n        }\n        else if (arr[middle] < target) {\n            left = middle + 1;\n        }\n        else {\n            right = middle - 1;\n        }\n    }\n    return index;\n};\n\n\n//# sourceURL=webpack:///./ts/index.ts?");

/***/ })

/******/ });