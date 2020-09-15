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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BaseParticle = /** @class */ (function () {\n    function BaseParticle(_context) {\n        // this.pos = {\n        //   x: Math.random() * window.screen.width,\n        //   y: Math.random() * window.screen.height,\n        // };\n        this.pos = {\n            x: 10,\n            y: 10,\n        };\n        this.speed = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };\n        this.context = _context;\n        var r = Math.floor(Math.random() * 255);\n        var g = Math.floor(Math.random() * 255);\n        var b = Math.floor(Math.random() * 255);\n        this.color = \"rgba(\" + r + \",\" + g + \",\" + b + \", 0.2)\";\n        this.sizeWidth = this.context.canvas.clientWidth;\n        this.sizeHeight = this.context.canvas.clientHeight;\n    }\n    /**\n     * NOTE: Abstruct function. This function should be defined in subclass.\n     */\n    BaseParticle.prototype.draw = function () { };\n    /**\n     * NOTE: Update particle position\n     */\n    BaseParticle.prototype.update = function () {\n        // this.pos.add(this.speed)\n        this.pos.x += this.speed.x;\n        this.pos.y += this.speed.y;\n        if (this.pos.x > this.sizeWidth || this.pos.x < 0) {\n            this.speed.x *= -1;\n        }\n        if (this.pos.y > this.sizeHeight || this.pos.y < 0) {\n            this.speed.y *= -1;\n        }\n    };\n    /**\n     * NOTE: Culclate distance between this object and passed particle.\n     * @param { BaseParticle } p target particle\n     */\n    BaseParticle.prototype.distance = function (p) {\n        var x = this.pos.x - p.x;\n        var y = this.pos.y - p.y;\n        var powX = Math.pow(x, 2);\n        var powY = Math.pow(y, 2);\n        return Math.sqrt(powX + powY);\n    };\n    return BaseParticle;\n}());\nexports.default = BaseParticle;\n\n\n//# sourceURL=webpack:///./ts/BaseParticle.ts?");

/***/ }),

/***/ "./ts/CircleParticle.ts":
/*!******************************!*\
  !*** ./ts/CircleParticle.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BaseParticle_1 = __importDefault(__webpack_require__(/*! ./BaseParticle */ \"./ts/BaseParticle.ts\"));\nvar CircleParticle = /** @class */ (function (_super) {\n    __extends(CircleParticle, _super);\n    function CircleParticle(_context) {\n        return _super.call(this, _context) || this;\n    }\n    /**\n     * NOTE: Draw particle\n     */\n    CircleParticle.prototype.draw = function () {\n        // NOTE: Circle\n        this.context.strokeStyle = this.color;\n        this.context.fillStyle = this.color;\n        this.context.beginPath();\n        this.context.arc(this.pos.x, this.pos.y, 3.5, 0, Math.PI * 2, true);\n        this.context.stroke();\n        this.context.fill();\n    };\n    return CircleParticle;\n}(BaseParticle_1.default));\nexports.default = CircleParticle;\n\n\n//# sourceURL=webpack:///./ts/CircleParticle.ts?");

/***/ }),

/***/ "./ts/ParticleFactory.ts":
/*!*******************************!*\
  !*** ./ts/ParticleFactory.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar CircleParticle_1 = __importDefault(__webpack_require__(/*! ./CircleParticle */ \"./ts/CircleParticle.ts\"));\n// import RectParticle from \"./RectParticle\";\n// import TriangleParticle from \"./TriangleParticle\";\nvar ParticleType;\n(function (ParticleType) {\n    ParticleType[\"CIRCLE\"] = \"CIRCLE\";\n    //   RECT: \"rect\",\n    //   TRIANGLE: \"triangle\",\n})(ParticleType || (ParticleType = {}));\nvar ParticleFactory = /** @class */ (function () {\n    function ParticleFactory() {\n    }\n    ParticleFactory.prototype.createRandomParticle = function (context) {\n        var particle = {};\n        var keys = Object.keys(ParticleType);\n        var randomKey = Math.floor(Math.random() * keys.length);\n        var key = keys[randomKey];\n        switch (key) {\n            case ParticleType.CIRCLE:\n                particle = new CircleParticle_1.default(context);\n                break;\n            //   case ParticleType.RECT:\n            //     particle = new RectParticle(context);\n            //     break;\n            //   case ParticleType.TRIANGLE:\n            //     particle = new TriangleParticle(context);\n            //     break;\n            default:\n                particle = new CircleParticle_1.default(context);\n                break;\n        }\n        return particle;\n    };\n    return ParticleFactory;\n}());\nexports.default = ParticleFactory;\n\n\n//# sourceURL=webpack:///./ts/ParticleFactory.ts?");

/***/ }),

/***/ "./ts/ParticleSystem.ts":
/*!******************************!*\
  !*** ./ts/ParticleSystem.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ParticleFactory_1 = __importDefault(__webpack_require__(/*! ./ParticleFactory */ \"./ts/ParticleFactory.ts\"));\nvar ParticleSystem = /** @class */ (function () {\n    function ParticleSystem(ctx) {\n        this.context = ctx;\n        this.particleNum = 0;\n        this.particles = [];\n        this.animationId = \"\";\n        this.particleFactory = new ParticleFactory_1.default();\n        this.enableLines = true;\n        this.lineLength = 100;\n    }\n    /**\n     * NOTE: Iniialze particles\n     * @param { context } canvas context\n     */\n    ParticleSystem.prototype.createParticles = function (num) {\n        // NOTE: Set canvas size\n        // this.context = context;\n        this.context.fillStyle = \"#00000000\";\n        this.context.fillRect(0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight);\n        this.particleNum = num;\n        // NOTE: Create particle\n        for (var i = 0; i < num; i++) {\n            // const particle = new Particle(this.context);\n            var particle = this.particleFactory.createRandomParticle(this.context);\n            this.particles.push(particle);\n        }\n    };\n    /**\n     * NOTE: Loop animation\n     */\n    ParticleSystem.prototype.render = function () {\n        //NOTE draw particles.\n        for (var i = 0; i < this.particleNum; i++) {\n            var particle = this.particles[i];\n            particle.update();\n            this.drawLines(particle);\n            particle.draw();\n        }\n    };\n    ParticleSystem.prototype.drawLines = function (src) {\n        var i = 0;\n        var count = this.particles.length;\n        while (i < count) {\n            var dst = this.particles[i];\n            var distance = src.distance(dst.pos);\n            if (this.enableLines && distance < this.lineLength) {\n                // NOTE: Draw line\n                var alpha = this.map(distance, 0, this.lineLength, 0.7, 0);\n                this.context.strokeStyle = \"rgba(128, 128, 128, \" + alpha + \")\";\n                this.context.lineWidth = 0.1;\n                this.context.beginPath();\n                this.context.moveTo(src.pos.x, src.pos.y);\n                this.context.lineTo(dst.pos.x, dst.pos.y);\n                this.context.closePath();\n                this.context.stroke();\n                // line(src.pos.x, src.pos.y, dst.pos.x, dst.pos.y)\n                // this.context.stroke();\n            }\n            i = (i + 1) | 0;\n        }\n    };\n    /**\n     * NOTE: Change range to another range with same ratio.\n     * @param { float }   value\n     * @param { float }  start1\n     * @param { float }    end1\n     * @param { float }  start2\n     * @param { float }    end2\n     */\n    ParticleSystem.prototype.map = function (value, start1, end1, start2, end2) {\n        return start2 + (end2 - start2) * ((value - start1) / (end1 - start1));\n    };\n    /**\n     * NOTE: Stop animation\n     */\n    ParticleSystem.prototype.stopAnimation = function () {\n        window.cancelAnimationFrame(this.animationId);\n    };\n    return ParticleSystem;\n}());\nexports.default = ParticleSystem;\n\n\n//# sourceURL=webpack:///./ts/ParticleSystem.ts?");

/***/ }),

/***/ "./ts/User.ts":
/*!********************!*\
  !*** ./ts/User.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar User = /** @class */ (function () {\n    function User(familyName, givenName, age) {\n        this.age = age;\n        this.familyName = familyName;\n        this.givenName = givenName;\n    }\n    return User;\n}());\nexports.default = User;\n\n\n//# sourceURL=webpack:///./ts/User.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar User_1 = __importDefault(__webpack_require__(/*! ./User */ \"./ts/User.ts\"));\nvar CircleParticle_1 = __importDefault(__webpack_require__(/*! ./CircleParticle */ \"./ts/CircleParticle.ts\"));\nvar ParticleSystem_1 = __importDefault(__webpack_require__(/*! ./ParticleSystem */ \"./ts/ParticleSystem.ts\"));\nvar user = new User_1.default(\"Mitsuya\", \"Watanabe\", 44);\nvar circle;\nvar ctx;\nvar particleSystem;\nvar contentsElem = document.getElementById(\"contents\");\nif (!!contentsElem) {\n    contentsElem.innerText = user.familyName + \" \" + user.givenName;\n}\nwindow.onload = function () {\n    setup();\n    draw();\n};\nvar setup = function () {\n    var canvas = document.getElementById(\"canvas\");\n    if (!(ctx = canvas.getContext(\"2d\"))) {\n        throw new Error(\"2d context not supported or canvas already initialized\");\n    }\n    canvas.width = canvas.clientWidth;\n    canvas.height = canvas.clientHeight;\n    circle = new CircleParticle_1.default(ctx);\n    particleSystem = new ParticleSystem_1.default(ctx);\n    particleSystem.createParticles(100);\n};\nvar draw = function () {\n    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);\n    circle.update();\n    circle.draw();\n    particleSystem.render();\n    window.requestAnimationFrame(draw);\n};\n\n\n//# sourceURL=webpack:///./ts/index.ts?");

/***/ })

/******/ });