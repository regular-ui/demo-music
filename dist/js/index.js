(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["RGUI"] = factory(require("regularjs"));
	else
		root["RGUI"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _module = __webpack_require__(1);

	var _module2 = _interopRequireDefault(_module);

	var _regularjs = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = new _module2.default().$inject('#app');

	_regularjs.dom.on(window, 'hashchange', function ($event) {
	    app.$update();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(2);

	var _index = __webpack_require__(8);

	var _index2 = _interopRequireDefault(_index);

	var _carousel = __webpack_require__(9);

	var _carousel2 = _interopRequireDefault(_carousel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = _rguiUiBase.Component.extend({
	    name: 'app',
	    template: _index2.default,
	    config: function config() {
	        this.data = Object.assign({}, this.data);
	        this.supr();
	    },

	    isCurrent: function isCurrent(type) {
	        var hash = location.href.split('#')[1] || '';

	        return hash.includes(type);
	    }
	});

	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._ = exports.Component = undefined;

	var _component = __webpack_require__(3);

	var _component2 = _interopRequireDefault(_component);

	var _util = __webpack_require__(7);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Component = _component2.default;
	exports._ = _util2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regularjs = __webpack_require__(4);

	var _regularjs2 = _interopRequireDefault(_regularjs);

	var _filter = __webpack_require__(5);

	var _filter2 = _interopRequireDefault(_filter);

	var _directive = __webpack_require__(6);

	var _directive2 = _interopRequireDefault(_directive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Component
	 * @extend Regular
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Component = _regularjs2.default.extend({
	    /**
	     * @protected
	     */

	    config: function config() {
	        this.data = Object.assign({
	            readonly: false,
	            disabled: false,
	            visible: true,
	            'class': ''
	        }, this.data);
	        this.supr();
	    }
	}).filter(_filter2.default).directive(_directive2.default);

	exports.default = Component;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var filter = {};

	filter.dateFormat = function () {
	    var fix = function fix() {
	        var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	        str = str + '';
	        return str.length <= 1 ? '0' + str : str;
	    };

	    var MAPS = {
	        yyyy: function yyyy(date) {
	            return date.getFullYear();
	        },
	        MM: function MM(date) {
	            return fix(date.getMonth() + 1);
	        },
	        dd: function dd(date) {
	            return fix(date.getDate());
	        },
	        HH: function HH(date) {
	            return fix(date.getHours());
	        },
	        mm: function mm(date) {
	            return fix(date.getMinutes());
	        },
	        ss: function ss(date) {
	            return fix(date.getSeconds());
	        }
	    };

	    var trunk = new RegExp(Object.keys(MAPS).join('|'), 'g');

	    return function (value) {
	        var format = arguments.length <= 1 || arguments[1] === undefined ? 'yyyy-MM-dd HH:mm' : arguments[1];

	        if (!value) return '';
	        value = new Date(value);

	        return format.replace(trunk, function (capture) {
	            return MAPS[capture] ? MAPS[capture](value) : '';
	        });
	    };
	}();

	filter.format = function (value, type) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	    }

	    return filter[type + 'Format'].apply(filter, [value].concat(args));
	};

	exports.default = filter;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(7);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var directive = {};

	directive['z-crt'] = _util2.default.createBoolClassDirective('z-crt');
	directive['z-sel'] = _util2.default.createBoolClassDirective('z-sel');
	directive['z-chk'] = _util2.default.createBoolClassDirective('z-chk');
	directive['z-dis'] = _util2.default.createBoolClassDirective('z-dis');

	directive['r-show'] = _util2.default.createBoolDirective(function (elem, value) {
	    elem.style.display = value ? 'block' : '';
	});

	directive['r-autofocus'] = _util2.default.createBoolDirective(function (elem, value) {
	    value && setTimeout(function () {
	        return elem.focus();
	    }, 0);
	});

	exports.default = directive;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _regularjs = __webpack_require__(4);

	var _ = {};

	_.createBoolDirective = function (func) {
	    return function (elem, value) {
	        var _this = this;

	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type === 'expression') {
	            this.$watch(value, function (newValue, oldValue) {
	                if (!newValue === !oldValue) return;
	                func.call(_this, elem, newValue);
	            });
	        } else if (!!value || value === '') func.call(this, elem, true);
	    };
	};

	_.createBoolClassDirective = function (boolClass) {
	    return _.createBoolDirective(function (elem, value) {
	        _regularjs.dom[value ? 'addClass' : 'delClass'](elem, boolClass);
	    });
	};

	exports.default = _;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-top"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-wrap"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"m-logo"}],"children":[]},{"type":"text","text":"\n        "},{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"class","value":"m-navbar"}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c['isCurrent']('explore')","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#explore"}],"children":[{"type":"text","text":"发现音乐"}]}]},{"type":"text","text":"\n            "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c['isCurrent']('mine')","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#mine"}],"children":[{"type":"text","text":"我的音乐"}]}]},{"type":"text","text":"\n            "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c['isCurrent']('friend')","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#friend"}],"children":[{"type":"text","text":"朋友"}]}]},{"type":"text","text":"\n            "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c['isCurrent']('download')","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#download"}],"children":[{"type":"text","text":"下载客户端"}]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-hd"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-wrap"}],"children":[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"m-download"}],"children":[]}]},{"type":"text","text":"\n    "},{"type":"element","tag":"carousel","attrs":[]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-bd"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-wrap"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-mn"}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"m-column"}],"children":[{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"column_hd"}],"children":[{"type":"text","text":"\n                    "},{"type":"element","tag":"h3","attrs":[{"type":"attribute","name":"class","value":"column_tt"}],"children":[{"type":"text","text":"歌曲列表"}]},{"type":"text","text":"\n                    "},{"type":"element","tag":"span","attrs":[],"children":[{"type":"text","text":"x首歌"}]},{"type":"text","text":"\n                "}]},{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"column_bd"}],"children":[]},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-sd"}],"children":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-ft"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-wrap"}],"children":[{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(2);

	var _index = __webpack_require__(10);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Sample
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Carousel = _rguiUiBase.Component.extend({
	    name: 'carousel',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            current: 0,
	            list: [{ color: '#ada4ff', src: 'assets/img/carousel-1.jpg', href: '#' }, { color: '#81a69e', src: 'assets/img/carousel-2.jpg', href: '#' }, { color: '#dfcbb2', src: 'assets/img/carousel-3.jpg', href: '#' }, { color: '#34190e', src: 'assets/img/carousel-4.jpg', href: '#' }, { color: '#000000', src: 'assets/img/carousel-5.jpg', href: '#' }]
	        }, this.data);
	        this.supr();
	    }
	});

	exports.default = Carousel;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-carousel ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"carousel_list"}],"children":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('list', d, e)","constant":false,"setbody":"c._ss_('list',p_,d, '=', 1)"},"alternate":[],"variable":"item","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"carousel_item"},{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c._sg_('current', d, e)===c._sg_('item_index', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"style","value":{"type":"expression","body":"['background: ',c._sg_('color', c._sg_('item', d, e))].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":{"type":"expression","body":"c._sg_('href', c._sg_('item', d, e))","constant":false,"setbody":"c._ss_('href',p_,c._sg_('item', d, e), '=', 0)"}}],"children":[{"type":"element","tag":"img","attrs":[{"type":"attribute","name":"src","value":{"type":"expression","body":"c._sg_('src', c._sg_('item', d, e))","constant":false,"setbody":"c._ss_('src',p_,c._sg_('item', d, e), '=', 0)"}}]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"class","value":"carousel_nav"}],"children":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('list', d, e)","constant":false,"setbody":"c._ss_('list',p_,d, '=', 1)"},"alternate":[],"variable":"item","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c._sg_('current', d, e)===c._sg_('item_index', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c._ss_('current',c._sg_('item_index', d, e),d, '=', 1)","constant":false,"setbody":"c._ss_('current',p_,d, '=', 1)"}}],"children":[{"type":"element","tag":"span","attrs":[],"children":[]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"carousel_prev"}],"children":[]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"carousel_next"}],"children":[]},{"type":"text","text":"\n"}]}]

/***/ }
/******/ ])
});
;