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
eval("__webpack_require__.r(__webpack_exports__);\nvar BaseParticle = /** @class */ (function () {\n    function BaseParticle(_context, name) {\n        if (name === void 0) { name = \"\"; }\n        this.figure = \"\";\n        this.context = _context;\n        this.pos = {\n            x: Math.random() * this.context.canvas.clientWidth,\n            y: Math.random() * this.context.canvas.clientHeight,\n        };\n        this.speed = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };\n        var r = Math.floor(Math.random() * 255);\n        var g = Math.floor(Math.random() * 255);\n        var b = Math.floor(Math.random() * 255);\n        this.color = \"rgba(\" + r + \",\" + g + \",\" + b + \", 0.2)\";\n        this.sizeWidth = this.context.canvas.clientWidth;\n        this.sizeHeight = this.context.canvas.clientHeight;\n    }\n    /**\n     * NOTE: Abstruct function. This function should be defined in subclass.\n     */\n    BaseParticle.prototype.draw = function () { };\n    /**\n     * NOTE: Update particle position\n     */\n    BaseParticle.prototype.update = function () {\n        // this.pos.add(this.speed)\n        this.pos.x += this.speed.x;\n        this.pos.y += this.speed.y;\n        if (this.pos.x > this.sizeWidth || this.pos.x < 0) {\n            this.speed.x *= -1;\n        }\n        if (this.pos.y > this.sizeHeight || this.pos.y < 0) {\n            this.speed.y *= -1;\n        }\n    };\n    /**\n     * NOTE: Culclate distance between this object and passed particle.\n     * @param { BaseParticle } p target particle\n     */\n    BaseParticle.prototype.distance = function (p) {\n        var x = this.pos.x - p.x;\n        var y = this.pos.y - p.y;\n        var powX = Math.pow(x, 2);\n        var powY = Math.pow(y, 2);\n        return Math.sqrt(powX + powY);\n    };\n    return BaseParticle;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseParticle);\n\n\n//# sourceURL=webpack:///./ts/BaseParticle.ts?");

/***/ }),

/***/ "./ts/CircleParticle.ts":
/*!******************************!*\
  !*** ./ts/CircleParticle.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseParticle */ \"./ts/BaseParticle.ts\");\n/* harmony import */ var _ParticleType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParticleType */ \"./ts/ParticleType.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar CircleParticle = /** @class */ (function (_super) {\n    __extends(CircleParticle, _super);\n    function CircleParticle(_context) {\n        var _this = _super.call(this, _context) || this;\n        _this.figure = _ParticleType__WEBPACK_IMPORTED_MODULE_1__[\"ParticleName\"].CIRCLE;\n        return _this;\n        // this.figure = \"CIRCLE\";\n    }\n    /**\n     * NOTE: Draw particle\n     */\n    CircleParticle.prototype.draw = function () {\n        // NOTE: Circle\n        this.context.strokeStyle = this.color;\n        this.context.fillStyle = this.color;\n        this.context.beginPath();\n        this.context.arc(this.pos.x, this.pos.y, 3.5, 0, Math.PI * 2, true);\n        this.context.stroke();\n        this.context.fill();\n    };\n    return CircleParticle;\n}(_BaseParticle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (CircleParticle);\n\n\n//# sourceURL=webpack:///./ts/CircleParticle.ts?");

/***/ }),

/***/ "./ts/ParticleFactory.ts":
/*!*******************************!*\
  !*** ./ts/ParticleFactory.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CircleParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircleParticle */ \"./ts/CircleParticle.ts\");\n/* harmony import */ var _RectParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RectParticle */ \"./ts/RectParticle.ts\");\n/* harmony import */ var _ParticleType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParticleType */ \"./ts/ParticleType.ts\");\n\n\n// import TriangleParticle from \"./TriangleParticle\";\n\nvar ParticleFactory = /** @class */ (function () {\n    function ParticleFactory() {\n    }\n    ParticleFactory.prototype.createRandomParticle = function (context, name) {\n        var particle;\n        var keys = Object.keys(_ParticleType__WEBPACK_IMPORTED_MODULE_2__[\"ParticleName\"]);\n        var randomKey = Math.floor(Math.random() * keys.length);\n        var key = name || keys[randomKey];\n        switch (key) {\n            case _ParticleType__WEBPACK_IMPORTED_MODULE_2__[\"ParticleName\"].CIRCLE:\n                particle = new _CircleParticle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context);\n                break;\n            case _ParticleType__WEBPACK_IMPORTED_MODULE_2__[\"ParticleName\"].RECT:\n                particle = new _RectParticle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context);\n                break;\n            //   case ParticleType.TRIANGLE:\n            //     particle = new TriangleParticle(context);\n            //     break;\n            default:\n                particle = new _CircleParticle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context);\n                break;\n        }\n        return particle;\n    };\n    ParticleFactory.prototype.eat = function (food) {\n        console.log(\"hallo\");\n    };\n    ParticleFactory.prototype.sleep = function (hours) {\n        console.log(\"hallo\");\n    };\n    return ParticleFactory;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParticleFactory);\n\n\n//# sourceURL=webpack:///./ts/ParticleFactory.ts?");

/***/ }),

/***/ "./ts/ParticleSystem.ts":
/*!******************************!*\
  !*** ./ts/ParticleSystem.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ParticleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParticleFactory */ \"./ts/ParticleFactory.ts\");\n\nvar ParticleSystem = /** @class */ (function () {\n    function ParticleSystem(ctx) {\n        this.context = ctx;\n        this.particleNum = 0;\n        this.particles = [];\n        this.animationId = \"\";\n        this.particleFactory = new _ParticleFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.enableLines = true;\n        this.lineLength = 100;\n    }\n    /**\n     * NOTE: Iniialze particles\n     * @param { context } canvas context\n     */\n    ParticleSystem.prototype.createParticles = function (num) {\n        // NOTE: Set canvas size\n        // this.context = context;\n        this.context.fillStyle = \"#00000000\";\n        this.context.fillRect(0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight);\n        this.particleNum = num;\n        // NOTE: Create particle\n        for (var i = 0; i < num; i++) {\n            // const particle = new Particle(this.context);\n            var particle = this.particleFactory.createRandomParticle(this.context);\n            this.particles.push(particle);\n        }\n    };\n    /**\n     * NOTE: Loop animation\n     */\n    ParticleSystem.prototype.render = function () {\n        //NOTE draw particles.\n        for (var i = 0; i < this.particleNum; i++) {\n            var particle = this.particles[i];\n            particle.update();\n            this.drawLines(particle);\n            particle.draw();\n        }\n    };\n    ParticleSystem.prototype.drawLines = function (src) {\n        var i = 0;\n        var count = this.particles.length;\n        while (i < count) {\n            var dst = this.particles[i];\n            var distance = src.distance(dst.pos);\n            if (this.enableLines && distance < this.lineLength) {\n                // NOTE: Draw line\n                var alpha = this.map(distance, 0, this.lineLength, 0.7, 0);\n                this.context.strokeStyle = \"rgba(128, 128, 128, \" + alpha + \")\";\n                this.context.lineWidth = 0.1;\n                this.context.beginPath();\n                this.context.moveTo(src.pos.x, src.pos.y);\n                this.context.lineTo(dst.pos.x, dst.pos.y);\n                this.context.closePath();\n                this.context.stroke();\n                // line(src.pos.x, src.pos.y, dst.pos.x, dst.pos.y)\n                // this.context.stroke();\n            }\n            i = (i + 1) | 0;\n        }\n    };\n    /**\n     * NOTE: Change range to another range with same ratio.\n     * @param { float }   value\n     * @param { float }  start1\n     * @param { float }    end1\n     * @param { float }  start2\n     * @param { float }    end2\n     */\n    ParticleSystem.prototype.map = function (value, start1, end1, start2, end2) {\n        return start2 + (end2 - start2) * ((value - start1) / (end1 - start1));\n    };\n    /**\n     * NOTE: Stop animation\n     */\n    ParticleSystem.prototype.stopAnimation = function () {\n        window.cancelAnimationFrame(this.animationId);\n    };\n    return ParticleSystem;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParticleSystem);\n\n\n//# sourceURL=webpack:///./ts/ParticleSystem.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseParticle */ \"./ts/BaseParticle.ts\");\n/* harmony import */ var _ParticleType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParticleType */ \"./ts/ParticleType.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar RectParticle = /** @class */ (function (_super) {\n    __extends(RectParticle, _super);\n    function RectParticle(context) {\n        var _this = _super.call(this, context) || this;\n        _this.figure = _ParticleType__WEBPACK_IMPORTED_MODULE_1__[\"ParticleName\"].RECT;\n        return _this;\n    }\n    /**\n     * NOTE: Draw particle\n     */\n    RectParticle.prototype.draw = function () {\n        // NOTE: Rect\n        this.context.strokeStyle = this.color;\n        this.context.fillStyle = this.color;\n        this.context.beginPath();\n        this.context.rect(this.pos.x, this.pos.y, 7, 7);\n        // this.context.stroke();\n        this.context.fill();\n    };\n    return RectParticle;\n}(_BaseParticle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (RectParticle);\n\n\n//# sourceURL=webpack:///./ts/RectParticle.ts?");

/***/ }),

/***/ "./ts/User.ts":
/*!********************!*\
  !*** ./ts/User.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar User = /** @class */ (function () {\n    function User(familyName, givenName, age) {\n        this.age = age;\n        this.familyName = familyName;\n        this.givenName = givenName;\n    }\n    return User;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n\n//# sourceURL=webpack:///./ts/User.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ \"./ts/User.ts\");\n/* harmony import */ var _CircleParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircleParticle */ \"./ts/CircleParticle.ts\");\n/* harmony import */ var _ParticleSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParticleSystem */ \"./ts/ParticleSystem.ts\");\n\n\n\nvar user = new _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Mitsuya\", \"Watanabe\", 44);\nvar circle;\nvar ctx;\nvar particleSystem;\nvar contentsElem = document.getElementById(\"contents\");\nif (!!contentsElem) {\n    contentsElem.innerText = user.familyName + \" \" + user.givenName;\n}\nwindow.onload = function () {\n    var data = [1, 5, 9, 10, 2, 54, 23, 90, 81];\n    // let sortedData: Array<number> = [];\n    var uniqueData = new Set();\n    for (var i = 0; i < 10000000; i++) {\n        var index = Math.floor(Math.random() * 100);\n        uniqueData.add(index);\n    }\n    var sortedData = Array.from(uniqueData).sort(function (a, b) { return a - b; });\n    var searchIndex = 10;\n    console.log(\"search index\", searchIndex);\n    // let startTime = performance.now();\n    // let sortedSearchIndex = binarySearch(sortedData, searchIndex);\n    // let endTime = performance.now();\n    // console.log(\n    //   \"binary serch index\",\n    //   sortedSearchIndex,\n    //   \"time\",\n    //   endTime - startTime\n    // );\n    var startTime, endTime;\n    startTime = performance.now();\n    var sortedSearchIndex = binarySearch(sortedData, searchIndex);\n    endTime = performance.now();\n    console.log(\"binary serch index\", sortedSearchIndex, \"time\", endTime - startTime);\n    var linearData = Array.from(uniqueData);\n    startTime = performance.now();\n    var linearIndex = linearSearch(linearData, searchIndex);\n    endTime = performance.now();\n    console.log(\"linear serch index\", linearIndex, \"time\", endTime - startTime);\n    startTime = performance.now();\n    sortedSearchIndex = binarySearch(sortedData, searchIndex);\n    endTime = performance.now();\n    console.log(\"binary serch index\", sortedSearchIndex, \"time\", endTime - startTime);\n    setup();\n    draw();\n};\nvar setup = function () {\n    var canvas = document.getElementById(\"canvas\");\n    if (!(ctx = canvas.getContext(\"2d\"))) {\n        throw new Error(\"2d context not supported or canvas already initialized\");\n    }\n    canvas.width = canvas.clientWidth;\n    canvas.height = canvas.clientHeight;\n    circle = new _CircleParticle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n    particleSystem = new _ParticleSystem__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n    particleSystem.createParticles(100);\n};\nvar draw = function () {\n    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);\n    circle.update();\n    circle.draw();\n    particleSystem.render();\n    window.requestAnimationFrame(draw);\n};\nvar linearSearch = function (arr, target) {\n    var index = -1;\n    for (var i = 0; i < arr.length; i++) {\n        var current = arr[i];\n        if (current === target) {\n            index = i;\n            break;\n        }\n    }\n    return index;\n};\nvar binarySearch = function (arr, target) {\n    var index = -1;\n    var left = 0;\n    var right = arr.length - 1;\n    var middle = 0;\n    while (left <= right) {\n        middle = Math.floor((left + right) / 2);\n        if (arr[middle] === target) {\n            index = middle;\n            break;\n        }\n        else if (arr[middle] < target) {\n            left = middle + 1;\n        }\n        else {\n            right = middle - 1;\n        }\n    }\n    return index;\n};\n\n\n//# sourceURL=webpack:///./ts/index.ts?");

/***/ })

/******/ });