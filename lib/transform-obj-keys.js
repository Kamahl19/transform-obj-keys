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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(1)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(6);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(16);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(9);
var defined = __webpack_require__(6);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(27);
var hide = __webpack_require__(29);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

var _mapObj = __webpack_require__(42);

var _mapObj2 = _interopRequireDefault(_mapObj);

var _quickLru = __webpack_require__(43);

var _quickLru2 = _interopRequireDefault(_quickLru);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var has = function has(arr, key) {
  return arr.some(function (x) {
    return typeof x === 'string' ? x === key : x.test(key);
  });
};
var cache = new _quickLru2.default({ maxSize: 100000 });

var transform = function transform(input, transformFunc, opts) {
  opts = (0, _assign2.default)({
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
  return Array.isArray(input) ? (0, _keys2.default)(input).map(function (key) {
    return transform(input[key], transformFunc, opts);
  }) : transform(input, transformFunc, opts);
};

module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(5);
var $keys = __webpack_require__(7);

__webpack_require__(26)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(19)(false);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(20);
var toAbsoluteIndex = __webpack_require__(21);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(10);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(10);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys');
var uid = __webpack_require__(24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11);
var core = __webpack_require__(0);
var fails = __webpack_require__(1);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(30);
var createDesc = __webpack_require__(35);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(31);
var IE8_DOM_DEFINE = __webpack_require__(32);
var toPrimitive = __webpack_require__(34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(1)(function () {
  return Object.defineProperty(__webpack_require__(33)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(39) });


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(7);
var gOPS = __webpack_require__(40);
var pIE = __webpack_require__(41);
var toObject = __webpack_require__(5);
var IObject = __webpack_require__(9);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(1)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// customized for this use-case
var isObject = function isObject(x) {
	return (typeof x === 'undefined' ? 'undefined' : (0, _typeof3.default)(x)) === 'object' && x !== null && !(x instanceof RegExp) && !(x instanceof Error) && !(x instanceof Date);
};

module.exports = function mapObj(obj, fn, opts, seen) {
	opts = (0, _assign2.default)({
		deep: false,
		target: {}
	}, opts);

	seen = seen || new _weakMap2.default();

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
		for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(obj)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _iterator6 = require('babel-runtime/core-js/symbol/iterator');

var _iterator7 = _interopRequireDefault(_iterator6);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuickLRU = function () {
	function QuickLRU(opts) {
		(0, _classCallCheck3.default)(this, QuickLRU);

		opts = (0, _assign2.default)({}, opts);

		if (!(opts.maxSize && opts.maxSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		this.maxSize = opts.maxSize;
		this.cache = new _map2.default();
		this.oldCache = new _map2.default();
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
				this.cache = new _map2.default();
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
							_iterator = (0, _getIterator3.default)(this);

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
							_iterator2 = (0, _getIterator3.default)(this);

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
		key: _iterator7.default,
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
							_iterator3 = (0, _getIterator3.default)(this.cache);

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
							_iterator4 = (0, _getIterator3.default)(this.oldCache);

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
				for (var _iterator5 = (0, _getIterator3.default)(this.oldCache), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
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