(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("transform-obj-keys", [], factory);
	else if(typeof exports === 'object')
		exports["transform-obj-keys"] = factory();
	else
		root["transform-obj-keys"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapObj = __webpack_require__(1);

var _mapObj2 = _interopRequireDefault(_mapObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var has = function has(arr, key) {
  return arr.some(function (x) {
    return typeof x === 'string' ? x === key : x.test(key);
  });
};

var transform = function transform(input, transformFunc, opts) {
  opts = Object.assign({
    deep: false
  }, opts);

  return (0, _mapObj2.default)(input, function (key, val) {
    key = opts.exclude && has(opts.exclude, key) ? key : transformFunc(key);

    return [key, val];
  }, { deep: opts.deep });
};

exports.default = function (input, transformFunc, opts) {
  return Array.isArray(input) ? Object.keys(input).map(function (key) {
    return transform(input[key], transformFunc, opts);
  }) : transform(input, transformFunc, opts);
};

module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Customized for this use-case
var isObject = function isObject(x) {
	return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null && !(x instanceof RegExp) && !(x instanceof Error) && !(x instanceof Date);
};

module.exports = function mapObj(object, fn, options, seen) {
	options = Object.assign({
		deep: false,
		target: {}
	}, options);

	seen = seen || new WeakMap();

	if (seen.has(object)) {
		return seen.get(object);
	}

	seen.set(object, options.target);

	var _options = options,
	    target = _options.target;

	delete options.target;

	var mapArray = function mapArray(array) {
		return array.map(function (x) {
			return isObject(x) ? mapObj(x, fn, options, seen) : x;
		});
	};
	if (Array.isArray(object)) {
		return mapArray(object);
	}

	/// TODO: Use `Object.entries()` when targeting Node.js 8
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.keys(object)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			var value = object[key];

			var _fn = fn(key, value, object),
			    _fn2 = _slicedToArray(_fn, 2),
			    newKey = _fn2[0],
			    newValue = _fn2[1];

			if (options.deep && isObject(newValue)) {
				newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObj(newValue, fn, options, seen);
			}

			target[newKey] = newValue;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return target;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=transform-obj-keys.js.map