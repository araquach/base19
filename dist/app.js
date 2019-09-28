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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'smoothscroll-polyfill'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
 // kick off the polyfill!

!(function webpackMissingModule() { var e = new Error("Cannot find module 'smoothscroll-polyfill'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).polyfill(); // add event listener on load

window.addEventListener('load', function () {
  // scroll to bottom
  document.querySelector('.js-scroll-to-bottom').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: document.body.clientHeight - window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }); // scroll to home

  document.querySelector('.js-scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({
      behavior: 'smooth'
    });
  }); // scroll to about

  document.querySelector('.js-scroll-to-about').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  }); // scroll to team

  document.querySelector('.js-scroll-to-team').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#team').scrollIntoView({
      behavior: 'smooth'
    });
  }); // scroll to joinus

  document.querySelector('.js-scroll-to-joinus').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#joinus').scrollIntoView({
      behavior: 'smooth'
    });
  }); // scroll to contact

  document.querySelector('.js-scroll-to-contact').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  }); // scroll to models

  document.querySelector('.js-scroll-to-models').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#models').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/adam-macbook/GoSites/base19/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /Users/adam-macbook/GoSites/base19/src/app.scss */"./src/app.scss");


/***/ })

/******/ });