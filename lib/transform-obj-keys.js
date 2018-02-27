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

var _quickLru = __webpack_require__(2);

var _quickLru2 = _interopRequireDefault(_quickLru);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var has = function has(arr, key) {
  return arr.some(function (x) {
    return typeof x === 'string' ? x === key : x.test(key);
  });
};
var cache = new _quickLru2.default({ maxSize: 100000 });

var transform = function transform(input, transformFunc, opts) {
  opts = Object.assign({
    deep: false
  }, opts);

  return (0, _mapObj2.default)(input, function (key, val) {
    if (!(opts.exclude && has(opts.exclude, key))) {
      if (cache.has(key)) {
        key = cache.get(key);
      } else {
        var ret = transformFunc(key);

        if (key.length < 100) {
          // Prevent abuse
          cache.set(key, ret);
        }

        key = ret;
      }
    }

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

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// customized for this use-case
var isObject = function isObject(x) {
	return (typeof x === 'undefined' ? 'undefined' : (0, _typeof3.default)(x)) === 'object' && x !== null && !(x instanceof RegExp) && !(x instanceof Error) && !(x instanceof Date);
};

module.exports = function mapObj(obj, fn, opts, seen) {
	opts = Object.assign({
		deep: false,
		target: {}
	}, opts);

	seen = seen || new WeakMap();

	if (seen.has(obj)) {
		return seen.get(obj);
	}

	seen.set(obj, opts.target);

	var target = opts.target;
	delete opts.target;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			var val = obj[key];
			var res = fn(key, val, obj);
			var newVal = res[1];

			if (opts.deep && isObject(newVal)) {
				if (Array.isArray(newVal)) {
					newVal = newVal.map(function (x) {
						return isObject(x) ? mapObj(x, fn, opts, seen) : x;
					});
				} else {
					newVal = mapObj(newVal, fn, opts, seen);
				}
			}

			target[res[0]] = newVal;
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuickLRU = function () {
	function QuickLRU(opts) {
		(0, _classCallCheck3.default)(this, QuickLRU);

		opts = Object.assign({}, opts);

		if (!(opts.maxSize && opts.maxSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		this.maxSize = opts.maxSize;
		this.cache = new Map();
		this.oldCache = new Map();
		this._size = 0;
	}

	(0, _createClass3.default)(QuickLRU, [{
		key: '_set',
		value: function _set(key, value) {
			this.cache.set(key, value);
			this._size++;

			if (this._size >= this.maxSize) {
				this._size = 0;
				this.oldCache = this.cache;
				this.cache = new Map();
			}
		}
	}, {
		key: 'get',
		value: function get(key) {
			if (this.cache.has(key)) {
				return this.cache.get(key);
			}

			if (this.oldCache.has(key)) {
				var value = this.oldCache.get(key);
				this._set(key, value);
				return value;
			}
		}
	}, {
		key: 'set',
		value: function set(key, value) {
			if (this.cache.has(key)) {
				this.cache.set(key, value);
			} else {
				this._set(key, value);
			}

			return this;
		}
	}, {
		key: 'has',
		value: function has(key) {
			return this.cache.has(key) || this.oldCache.has(key);
		}
	}, {
		key: 'peek',
		value: function peek(key) {
			if (this.cache.has(key)) {
				return this.cache.get(key);
			}

			if (this.oldCache.has(key)) {
				return this.oldCache.get(key);
			}
		}
	}, {
		key: 'delete',
		value: function _delete(key) {
			if (this.cache.delete(key)) {
				this._size--;
			}

			this.oldCache.delete(key);
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.cache.clear();
			this.oldCache.clear();
			this._size = 0;
		}
	}, {
		key: 'keys',
		value: /*#__PURE__*/_regenerator2.default.mark(function keys() {
			var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, el;

			return _regenerator2.default.wrap(function keys$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_iteratorNormalCompletion = true;
							_didIteratorError = false;
							_iteratorError = undefined;
							_context.prev = 3;
							_iterator = this[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
								_context.next = 12;
								break;
							}

							el = _step.value;
							_context.next = 9;
							return el[0];

						case 9:
							_iteratorNormalCompletion = true;
							_context.next = 5;
							break;

						case 12:
							_context.next = 18;
							break;

						case 14:
							_context.prev = 14;
							_context.t0 = _context['catch'](3);
							_didIteratorError = true;
							_iteratorError = _context.t0;

						case 18:
							_context.prev = 18;
							_context.prev = 19;

							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}

						case 21:
							_context.prev = 21;

							if (!_didIteratorError) {
								_context.next = 24;
								break;
							}

							throw _iteratorError;

						case 24:
							return _context.finish(21);

						case 25:
							return _context.finish(18);

						case 26:
						case 'end':
							return _context.stop();
					}
				}
			}, keys, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
	}, {
		key: 'values',
		value: /*#__PURE__*/_regenerator2.default.mark(function values() {
			var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, el;

			return _regenerator2.default.wrap(function values$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_iteratorNormalCompletion2 = true;
							_didIteratorError2 = false;
							_iteratorError2 = undefined;
							_context2.prev = 3;
							_iterator2 = this[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
								_context2.next = 12;
								break;
							}

							el = _step2.value;
							_context2.next = 9;
							return el[1];

						case 9:
							_iteratorNormalCompletion2 = true;
							_context2.next = 5;
							break;

						case 12:
							_context2.next = 18;
							break;

						case 14:
							_context2.prev = 14;
							_context2.t0 = _context2['catch'](3);
							_didIteratorError2 = true;
							_iteratorError2 = _context2.t0;

						case 18:
							_context2.prev = 18;
							_context2.prev = 19;

							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}

						case 21:
							_context2.prev = 21;

							if (!_didIteratorError2) {
								_context2.next = 24;
								break;
							}

							throw _iteratorError2;

						case 24:
							return _context2.finish(21);

						case 25:
							return _context2.finish(18);

						case 26:
						case 'end':
							return _context2.stop();
					}
				}
			}, values, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
	}, {
		key: Symbol.iterator,
		value: /*#__PURE__*/_regenerator2.default.mark(function value() {
			var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, el, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _el;

			return _regenerator2.default.wrap(function value$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_iteratorNormalCompletion3 = true;
							_didIteratorError3 = false;
							_iteratorError3 = undefined;
							_context3.prev = 3;
							_iterator3 = this.cache[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
								_context3.next = 12;
								break;
							}

							el = _step3.value;
							_context3.next = 9;
							return el;

						case 9:
							_iteratorNormalCompletion3 = true;
							_context3.next = 5;
							break;

						case 12:
							_context3.next = 18;
							break;

						case 14:
							_context3.prev = 14;
							_context3.t0 = _context3['catch'](3);
							_didIteratorError3 = true;
							_iteratorError3 = _context3.t0;

						case 18:
							_context3.prev = 18;
							_context3.prev = 19;

							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}

						case 21:
							_context3.prev = 21;

							if (!_didIteratorError3) {
								_context3.next = 24;
								break;
							}

							throw _iteratorError3;

						case 24:
							return _context3.finish(21);

						case 25:
							return _context3.finish(18);

						case 26:
							_iteratorNormalCompletion4 = true;
							_didIteratorError4 = false;
							_iteratorError4 = undefined;
							_context3.prev = 29;
							_iterator4 = this.oldCache[Symbol.iterator]();

						case 31:
							if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
								_context3.next = 39;
								break;
							}

							_el = _step4.value;

							if (this.cache.has(_el[0])) {
								_context3.next = 36;
								break;
							}

							_context3.next = 36;
							return _el;

						case 36:
							_iteratorNormalCompletion4 = true;
							_context3.next = 31;
							break;

						case 39:
							_context3.next = 45;
							break;

						case 41:
							_context3.prev = 41;
							_context3.t1 = _context3['catch'](29);
							_didIteratorError4 = true;
							_iteratorError4 = _context3.t1;

						case 45:
							_context3.prev = 45;
							_context3.prev = 46;

							if (!_iteratorNormalCompletion4 && _iterator4.return) {
								_iterator4.return();
							}

						case 48:
							_context3.prev = 48;

							if (!_didIteratorError4) {
								_context3.next = 51;
								break;
							}

							throw _iteratorError4;

						case 51:
							return _context3.finish(48);

						case 52:
							return _context3.finish(45);

						case 53:
						case 'end':
							return _context3.stop();
					}
				}
			}, value, this, [[3, 14, 18, 26], [19,, 21, 25], [29, 41, 45, 53], [46,, 48, 52]]);
		})
	}, {
		key: 'size',
		get: function get() {
			var oldCacheSize = 0;
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = this.oldCache[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var el = _step5.value;

					if (!this.cache.has(el[0])) {
						oldCacheSize++;
					}
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			return this._size + oldCacheSize;
		}
	}]);
	return QuickLRU;
}();

module.exports = QuickLRU;

/***/ })
/******/ ]);
});
//# sourceMappingURL=transform-obj-keys.js.map