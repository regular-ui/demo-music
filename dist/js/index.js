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

	var _rguiUiBase = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_rguiUiBase.Component.filter({
	    timeFormat: function timeFormat(value) {
	        if (!value) return '00:00';

	        value = value >> 0;
	        var minute = value / 60 >> 0;
	        var second = value % 60;

	        var fix = function fix(num) {
	            num = num + '';
	            return num.length === 1 ? '0' + num : num;
	        };

	        return fix(minute) + ':' + fix(second);
	    }
	});

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

	__webpack_require__(29);

	__webpack_require__(9);

	__webpack_require__(11);

	__webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = _rguiUiBase.Component.extend({
	    name: 'app',
	    template: _index2.default,
	    config: function config() {
	        var _this = this;

	        this.data = Object.assign({
	            musicList: [],
	            selectedMusic: undefined
	        }, this.data);
	        this.supr();

	        setTimeout(function () {
	            _this.data.musicList = [{ title: '晴天', artist: '周杰伦', album: '叶惠美', duration: 269 }, { title: 'River Flows In You', artist: 'Yiruma', album: 'First Love (Piano Collection)', duration: 187, disabled: true }, { title: 'Letter Song', artist: 'ヲタみん', album: 'Letter Song', duration: 334 }, { title: '不再犹豫', artist: 'Beyond', album: '犹豫', duration: 255 }, { title: 'Back To December', artist: 'Taylor Swift', album: 'Back To December', duration: 294, disabled: true }, { title: 'Ca Ira', artist: 'Joyce Jonathan', album: 'Ca Ira', duration: 225 }, { title: '骄傲的少年', artist: '南征北战', album: '骄傲的少年', duration: 262 }, { title: 'Sugar', artist: 'Maroon 5', album: 'V', duration: 235 }, { title: '突然好想你', artist: '五月天', album: '后青春期的诗', duration: 299, disabled: true }, { title: '七里香', artist: '周杰伦', album: '七里香', duration: 299 }, { title: '棕发少女', artist: '克劳德·德彪西', album: '竖琴独奏', duration: 134 }, { title: 'Unity', artist: 'TheFatRat', album: '最新热歌慢摇94', duration: 249 }];
	            _this.$update();
	        }, 200);
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

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-top"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-wrap f-cb"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"m-logo f-fl"},{"type":"attribute","name":"href","value":"#"}],"children":[]},{"type":"text","text":"\n        "},{"type":"element","tag":"navbar","attrs":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-subtop"}],"children":[]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-hd"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-wrap"}],"children":[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"m-download"}],"children":[]}]},{"type":"text","text":"\n    "},{"type":"element","tag":"carousel","attrs":[]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-bd"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-wrap"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-mn"}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"m-column"}],"children":[{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"column_hd"}],"children":[{"type":"text","text":"\n                    "},{"type":"element","tag":"h3","attrs":[{"type":"attribute","name":"class","value":"column_tt"}],"children":[{"type":"text","text":"歌曲列表"}]},{"type":"text","text":"\n                    "},{"type":"element","tag":"span","attrs":[],"children":[{"type":"text","text":"x首歌"}]},{"type":"text","text":"\n                "}]},{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"column_bd"}],"children":[{"type":"text","text":"\n                    "},{"type":"element","tag":"musicListView","attrs":[{"type":"attribute","name":"value","value":{"type":"expression","body":"c._sg_('selectedMusic', d, e)","constant":false,"setbody":"c._ss_('selectedMusic',p_,d, '=', 1)"}}],"children":[{"type":"text","text":"\n                        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('musicList', d, e)","constant":false,"setbody":"c._ss_('musicList',p_,d, '=', 1)"},"alternate":[],"variable":"music","body":[{"type":"text","text":"\n                        "},{"type":"element","tag":"musicItem","attrs":[{"type":"attribute","name":"index","value":{"type":"expression","body":"c._sg_('music_index', d, e)","constant":false,"setbody":"c._ss_('music_index',p_,d, '=', 1)"}},{"type":"attribute","name":"value","value":{"type":"expression","body":"c._sg_('music', d, e)","constant":false,"setbody":"c._ss_('music',p_,d, '=', 1)"}},{"type":"attribute","name":"disabled","value":{"type":"expression","body":"c._sg_('disabled', c._sg_('music', d, e))","constant":false,"setbody":"c._ss_('disabled',p_,c._sg_('music', d, e), '=', 0)"}}]},{"type":"text","text":"\n                        "}]},{"type":"text","text":"\n                    "}]},{"type":"text","text":"\n                "}]},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n            "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"m-column"}],"children":[{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"column_hd"}],"children":[{"type":"text","text":"\n                    "},{"type":"element","tag":"h3","attrs":[{"type":"attribute","name":"class","value":"column_tt"}],"children":[{"type":"text","text":"评论"}]},{"type":"text","text":"\n                    "},{"type":"element","tag":"span","attrs":[],"children":[{"type":"text","text":"共x条评论"}]},{"type":"text","text":"\n                "}]},{"type":"text","text":"\n                "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"column_bd"}],"children":[]},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-sd"}],"children":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-ft"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"g-wrap"}],"children":[{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"player","attrs":[{"type":"attribute","name":"music","value":{"type":"expression","body":"c._sg_('selectedMusic', d, e)","constant":false,"setbody":"c._ss_('selectedMusic',p_,d, '=', 1)"}}]},{"type":"text","text":"\n"},{"type":"element","tag":"gotop","attrs":[]}]

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
	 * @class Carousel
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
	        var _this = this;

	        this.data = Object.assign({
	            current: 2,
	            duration: 3000,
	            list: [{ color: '#ada4ff', src: 'assets/img/carousel-1.jpg', href: '#' }, { color: '#81a69e', src: 'assets/img/carousel-2.jpg', href: '#' }, { color: '#dfcbb2', src: 'assets/img/carousel-3.jpg', href: '#' }, { color: '#34190e', src: 'assets/img/carousel-4.jpg', href: '#' }, { color: '#000000', src: 'assets/img/carousel-5.jpg', href: '#' }],
	            animation: 'on: enter; class: animated fadeIn;'
	        }, this.data);
	        this.supr();

	        setInterval(function () {
	            _this.data.current++;
	            _this.data.current %= _this.data.list.length;
	            _this.$update();
	        }, this.data.duration);
	    }
	});

	exports.default = Carousel;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-carousel ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"carousel_list"}],"children":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('list', d, e)","constant":false,"setbody":"c._ss_('list',p_,d, '=', 1)"},"alternate":[],"variable":"item","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"carousel_item"},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"c._sg_('current', d, e)!==c._sg_('item_index', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"r-animation","value":{"type":"expression","body":"c._sg_('animation', d, e)","constant":false,"setbody":"c._ss_('animation',p_,d, '=', 1)"}},{"type":"attribute","name":"style","value":{"type":"expression","body":"['background: ',c._sg_('color', c._sg_('item', d, e))].join('')","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":{"type":"expression","body":"c._sg_('href', c._sg_('item', d, e))","constant":false,"setbody":"c._ss_('href',p_,c._sg_('item', d, e), '=', 0)"}}],"children":[{"type":"element","tag":"img","attrs":[{"type":"attribute","name":"src","value":{"type":"expression","body":"c._sg_('src', c._sg_('item', d, e))","constant":false,"setbody":"c._ss_('src',p_,c._sg_('item', d, e), '=', 0)"}}]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"class","value":"carousel_nav"}],"children":[{"type":"text","text":"\n        "},{"type":"list","sequence":{"type":"expression","body":"c._sg_('list', d, e)","constant":false,"setbody":"c._ss_('list',p_,d, '=', 1)"},"alternate":[],"variable":"item","body":[{"type":"text","text":"\n        "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c._sg_('current', d, e)===c._sg_('item_index', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c._ss_('current',c._sg_('item_index', d, e),d, '=', 1)","constant":false,"setbody":"c._ss_('current',p_,d, '=', 1)"}}],"children":[{"type":"element","tag":"span","attrs":[],"children":[]}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"carousel_prev"}],"children":[]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"carousel_next"}],"children":[]},{"type":"text","text":"\n"}]}]

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(2);

	var _index = __webpack_require__(12);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Player
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Player = _rguiUiBase.Component.extend({
	    name: 'player',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        var _this = this;

	        this.data = Object.assign({
	            time: 0,
	            status: 0,
	            mode: 'one',
	            music: {},
	            CTRL_STATUS: ['play', 'pause']
	        }, this.data);
	        this.supr();

	        this.$watch('music', function (newValue, oldValue) {
	            _this.data.time = 0;
	            _this.data.status = 1;
	        });

	        setInterval(function () {
	            if (_this.data.music && _this.data.music.duration && _this.data.status) _this.data.time++;
	            _this.$update();
	        }, 1000);
	    },
	    play: function play() {
	        this.data.status = 1;
	        this.$emit('play', {
	            sender: this,
	            status: this.data.status,
	            music: music
	        });
	    }
	}).filter({
	    toPercent: {
	        get: function get(time, duration) {
	            if (!duration) return 0;

	            return time / duration * 100;
	        },
	        set: function set(percent, duration) {
	            return percent * 0.01 * duration;
	        }
	    }
	});

	exports.default = Player;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-player ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"player_inner"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"player_ctrls"}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"player_ctrl player_ctrl-prev"}],"children":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['player_ctrl player_ctrl-',c._sg_(c._sg_('status', d, e), c._sg_('CTRL_STATUS', d, e))].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c._ss_('status',1-c._sg_('status', d, e),d, '=', 1)","constant":false,"setbody":"c._ss_('status',p_,d, '=', 1)"}}],"children":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"player_ctrl player_ctrl-next"}],"children":[]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"player_cover"}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"img","attrs":[{"type":"attribute","name":"src","value":"assets/img/thumb-10.jpg"}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"player_detail"}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"player_info"}],"children":[{"type":"text","text":"\n                "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"player_title"}],"children":[{"type":"expression","body":"c._sg_('title', c._sg_('music', d, e))","constant":false,"setbody":"c._ss_('title',p_,c._sg_('music', d, e), '=', 0)"}]},{"type":"text","text":"\n                "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"player_artist"}],"children":[{"type":"expression","body":"c._sg_('artist', c._sg_('music', d, e))","constant":false,"setbody":"c._ss_('artist',p_,c._sg_('music', d, e), '=', 0)"}]},{"type":"text","text":"\n            "}]},{"type":"text","text":"\n            "},{"type":"element","tag":"slider","attrs":[{"type":"attribute","name":"class","value":"u-slider-player"},{"type":"attribute","name":"percent","value":{"type":"expression","body":"(function(t){t = c._f_('toPercent' ).get.call( c,t, c._sg_('duration', c._sg_('music', d, e)));return t})(c._sg_('time', d, e))","constant":false,"setbody":"c._ss_('time',(function(t){t = c._f_('toPercent' ).set.call( c,t, c._sg_('duration', c._sg_('music', d, e)));return t})(p_),d, '=', 1)"}}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"player_time"}],"children":[{"type":"element","tag":"span","attrs":[],"children":[{"type":"expression","body":"(function(t){t = c._f_('timeFormat' ).get.call( c,t);return t})(c._sg_('time', d, e))","constant":false,"setbody":"c._ss_('time',(function(t){t = c._f_('timeFormat' ).set.call( c,t);return t})(p_),d, '=', 1)"}]},{"type":"text","text":" / "},{"type":"expression","body":"(function(t){t = c._f_('timeFormat' ).get.call( c,t);return t})(c._sg_('duration', c._sg_('music', d, e)))","constant":false,"setbody":"c._ss_('duration',(function(t){t = c._f_('timeFormat' ).set.call( c,t);return t})(p_),c._sg_('music', d, e), '=', 0)"}]},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"player_btns"}],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"player_btn player_btn-collect"}],"children":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"player_btn player_btn-share"}],"children":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"span","attrs":[{"type":"attribute","name":"class","value":"player_divider"}],"children":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"player_btn player_btn-volume"}],"children":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['player_btn player_btn-',c._sg_('mode', d, e)].join('')","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"player_list"}],"children":[{"type":"text","text":"12"}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Slider = undefined;

	var _slider = __webpack_require__(14);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Slider = _slider2.default;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(2);

	var _index = __webpack_require__(15);

	var _index2 = _interopRequireDefault(_index);

	var _regularjs = __webpack_require__(4);

	__webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Slider
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string='Hello World'}    options.data.message            <=> 消息
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Slider = _rguiUiBase.Component.extend({
	    name: 'slider',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        var _this = this;

	        this.data = Object.assign({
	            percent: 0
	        }, this.data);
	        this.supr();

	        this.$watch('percent', function (newValue, oldValue) {
	            _this.$emit('change', {
	                sender: _this,
	                percent: newValue
	            });
	        });
	    },
	    _getProxy: function _getProxy() {
	        return this.$refs.handle;
	    },

	    /**
	     * @private
	     */
	    _onMouseDown: function _onMouseDown($event) {
	        if (this.data.readonly || this.data.disabled) return;

	        var e = $event.event;
	        var $handle = this.$refs.handle;
	        var $parent = $handle.offsetParent;
	        var position = _regularjs.dom.getPosition($parent);
	        this.data.percent = (e.clientX - position.left) / $parent.offsetWidth * 100;
	    },

	    /**
	     * @private
	     */
	    _onDrag: function _onDrag($event) {
	        this.data.percent = $event.left / $event.range.right * 100;
	    }
	});

	exports.default = Slider;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"movable","attrs":[{"type":"attribute","name":"disabled","value":{"type":"expression","body":"c._sg_('readonly', d, e)||c._sg_('disabled', d, e)","constant":false,"setbody":false}},{"type":"attribute","name":"proxy","value":{"type":"expression","body":"c._sg_('handle', c._sg_('$refs', c))","constant":false,"setbody":"c._ss_('handle',p_,c._sg_('$refs', c), '=', 0)"}},{"type":"attribute","name":"axis","value":"horizontal"},{"type":"attribute","name":"range","value":"offsetParent"},{"type":"attribute","name":"rangeMode","value":"none"},{"type":"attribute","name":"on-drag","value":{"type":"expression","body":"c['_onDrag'](c._sg_('$event', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['u-slider ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"on-mousedown","value":{"type":"expression","body":"c['_onMouseDown'](c._sg_('$event', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"slider_track"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"slider_trail"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['width: ',c._sg_('percent', d, e),'%'].join('')","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"slider_handle"},{"type":"attribute","name":"ref","value":"handle"},{"type":"attribute","name":"style","value":{"type":"expression","body":"['left: ',c._sg_('percent', d, e),'%'].join('')","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Movable = exports.Droppable = exports.Draggable = undefined;

	var _draggable = __webpack_require__(17);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _droppable = __webpack_require__(19);

	var _droppable2 = _interopRequireDefault(_droppable);

	var _movable = __webpack_require__(20);

	var _movable2 = _interopRequireDefault(_movable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Draggable = _draggable2.default;
	exports.Droppable = _droppable2.default;
	exports.Movable = _movable2.default;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(2);

	var _manager = __webpack_require__(18);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Draggable
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string|Dragable.Proxy|Element|function='clone'}  options.data.proxy  @=> 拖拽代理，即拖拽时移动的元素。默认值为`clone`，拖拽时拖起自身的一个拷贝；当值为`self`，拖拽时直接拖起自身。也可以用`<draggable.proxy>`自定义代理，或直接传入一个元素或函数。`''`表示不使用拖拽代理。
	 * @param {var}                     options.data.value               => 拖拽时需要传递的值
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-draggable'}    options.data.class               => 可拖拽时（即disabled=false）给该元素附加此class
	 * @param {string='z-dragSource'}   options.data.sourceClass         => 拖拽时给起始元素附加此class
	 * @param {string='z-dragProxy'}    options.data.proxyClass          => 拖拽时给代理元素附加此class
	 */
	var Draggable = _rguiUiBase.Component.extend({
	    name: 'draggable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            proxy: 'clone',
	            value: undefined,
	            'class': 'z-draggable',
	            sourceClass: 'z-dragSource',
	            proxyClass: 'z-dragProxy'
	        }, this.data);
	        this.supr();

	        this._onMouseDown = this._onMouseDown.bind(this);
	        this._onMouseMove = this._onMouseMove.bind(this);
	        this._onMouseUp = this._onMouseUp.bind(this);
	        this.cancel = this.cancel.bind(this);
	    },

	    /**
	     * @protected
	     * @override
	     */
	    init: function init() {
	        var _this = this;

	        var inner = _regularjs.dom.element(this);
	        _regularjs.dom.on(inner, 'mousedown', this._onMouseDown);
	        this.supr();

	        this.$watch('disabled', function (newValue) {
	            return _regularjs.dom[newValue ? 'delClass' : 'addClass'](inner, _this.data['class']);
	        });
	    },

	    /**
	     * @method _getProxy() 获取拖拽代理
	     * @private
	     * @return {Element} 拖拽代理元素
	     */
	    _getProxy: function _getProxy() {
	        var proxy = void 0;
	        var source = _regularjs.dom.element(this);

	        if (typeof this.data.proxy === 'function') proxy = this.data.proxy();else if (this.data.proxy instanceof Element) proxy = this.data.proxy;else if (this.data.proxy === 'self') proxy = source;else if (this.data.proxy === 'clone') {
	            proxy = source.cloneNode(true);
	            this._setProxyFixed(proxy, _regularjs.dom.getPosition(source));
	            var size = _regularjs.dom.getSize(source);
	            proxy.style.width = size.width + 'px';
	            proxy.style.height = size.height + 'px';
	            source.parentElement.appendChild(proxy);
	        } else if (this.data.proxy instanceof Draggable.Proxy) {
	            proxy = _regularjs.dom.element(this.data.proxy.$body());
	            this._setProxyFixed(proxy, _regularjs.dom.getPosition(source));
	            document.body.appendChild(proxy);
	        }

	        proxy && this._initProxy(proxy);
	        return proxy;
	    },

	    /**
	     * @method _setProxyFixed() 将拖拽代理的position设置fixed并设置初始位置
	     * @param  {Element} proxy 拖拽代理元素
	     * @param  {position=...} position 拖拽代理的初始位置
	     * @private
	     * @return {void}
	     */
	    _setProxyFixed: function _setProxyFixed(proxy) {
	        var position = arguments.length <= 1 || arguments[1] === undefined ? { left: 0, top: 0 } : arguments[1];

	        proxy.style.left = position.left + 'px';
	        proxy.style.top = position.top + 'px';
	        proxy.style.zIndex = '2000';
	        proxy.style.position = 'fixed';
	        proxy.style.display = '';
	    },

	    /**
	     * @method _initProxy() 初始化拖拽代理
	     * @private
	     * @return {void}
	     */
	    _initProxy: function _initProxy(proxy) {
	        // 如果position为static，则设置为relative，保证可以移动
	        if (_regularjs.dom.getComputedStyle(proxy, 'position') === 'static') proxy.style.position = 'relative';
	    },

	    /**
	     * @private
	     */
	    _onMouseDown: function _onMouseDown($event) {
	        if (this.data.disabled) return;

	        var e = $event.event;
	        // 阻止浏览器的默认行为，特别是IE的选择行为
	        $event.preventDefault();

	        // 鼠标坐标从MouseDown开始算，防止出现第一次移动的误差
	        Object.assign(_manager2.default, {
	            screenX: e.screenX,
	            screenY: e.screenY,
	            clientX: e.clientX,
	            clientY: e.clientY,
	            pageX: e.pageX,
	            pageY: e.pageY,
	            startX: e.clientX,
	            startY: e.clientY,
	            dragX: 0,
	            dragY: 0
	        });

	        _regularjs.dom.on(window, 'mousemove', this._onMouseMove);
	        _regularjs.dom.on(window, 'mouseup', this._onMouseUp);
	    },

	    /**
	     * @private
	     */
	    _onMouseMove: function _onMouseMove($event) {
	        var e = $event.event;
	        $event.preventDefault();

	        Object.assign(_manager2.default, {
	            screenX: e.screenX,
	            screenY: e.screenY,
	            clientX: e.clientX,
	            clientY: e.clientY,
	            pageX: e.pageX,
	            pageY: e.pageY,
	            dragX: e.clientX - _manager2.default.startX,
	            dragY: e.clientY - _manager2.default.startY
	        });

	        if (_manager2.default.dragging === false) this._onMouseMoveStart(e);else this._onMouseMoving(e);
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理第一次鼠标移动事件
	     * @private
	     * @param  {MouseEvent} e 鼠标事件
	     * @return {void}
	     */
	    _onMouseMoveStart: function _onMouseMoveStart(e) {
	        var proxy = this._getProxy();

	        // 代理元素的位置从MouseMoveStart开始算，这样在MouseDown中也可以预先处理位置
	        // 获取初始的left和top值
	        var computedStyle = proxy ? _regularjs.dom.getComputedStyle(proxy) : {};
	        if (!computedStyle.left || computedStyle.left === 'auto') computedStyle.left = '0px';
	        if (!computedStyle.top || computedStyle.top === 'auto') computedStyle.top = '0px';

	        Object.assign(_manager2.default, {
	            dragging: true,
	            proxy: proxy,
	            value: this.data.value,
	            startLeft: +computedStyle.left.slice(0, -2),
	            startTop: +computedStyle.top.slice(0, -2),
	            droppable: undefined
	        });

	        _manager2.default.left = _manager2.default.startLeft;
	        _manager2.default.top = _manager2.default.startTop;

	        this._dragStart();
	    },

	    /**
	     * @method _onMouseMoveStart(e) 处理后续鼠标移动事件
	     * @param  {MouseEvent} e 鼠标事件
	     * @private
	     * @return {void}
	     */
	    _onMouseMoving: function _onMouseMoving(e) {
	        // 拖拽约束
	        var next = this.restrict(_manager2.default);
	        // 设置位置
	        if (_manager2.default.proxy) {
	            _manager2.default.proxy.style.left = next.left + 'px';
	            _manager2.default.proxy.style.top = next.top + 'px';
	        }
	        // 更新当前位置
	        _manager2.default.left = next.left;
	        _manager2.default.top = next.top;

	        this._drag();
	        if (!_manager2.default.dragging) return;

	        // for Droppable
	        var pointElement = null;
	        if (_manager2.default.proxy) {
	            _manager2.default.proxy.style.display = 'none';
	            pointElement = document.elementFromPoint(e.clientX, e.clientY);
	            _manager2.default.proxy.style.display = '';
	        } else pointElement = document.elementFromPoint(e.clientX, e.clientY);

	        var pointDroppable = null;
	        while (pointElement) {
	            pointDroppable = _manager2.default.droppables.find(function (droppable) {
	                return _regularjs.dom.element(droppable) === pointElement;
	            });

	            if (pointDroppable) break;else pointElement = pointElement.parentElement;
	        }

	        if (_manager2.default.droppable !== pointDroppable) {
	            _manager2.default.droppable && _manager2.default.droppable._dragLeave(this);
	            if (!_manager2.default.dragging) return;
	            pointDroppable && pointDroppable._dragEnter(this);
	            if (!_manager2.default.dragging) return;
	            _manager2.default.droppable = pointDroppable;
	        }

	        // dragEnter之后也要dragOver
	        pointDroppable && pointDroppable._dragOver(this);
	    },

	    /**
	     * @method restrict(manager) 拖拽约束函数
	     * @protected
	     * @param  {params} 拖拽参数
	     * @return {left, top} 拖拽代理元素计算后的left和top位置
	     */
	    restrict: function restrict(params) {
	        return {
	            left: params.startLeft + params.dragX,
	            top: params.startTop + params.dragY
	        };
	    },

	    /**
	     * @private
	     */
	    _onMouseUp: function _onMouseUp($event) {
	        if (_manager2.default.dragging) {
	            _manager2.default.droppable && _manager2.default.droppable._drop(this);
	            this.cancel();
	        }

	        _regularjs.dom.off(window, 'mousemove', this._onMouseMove);
	        _regularjs.dom.off(window, 'mouseup', this._onMouseUp);
	    },

	    /**
	     * @method cancel() 取消拖拽操作
	     * @public
	     * @return {void}
	     */
	    cancel: function cancel() {
	        this._dragEnd();

	        Object.assign(_manager2.default, {
	            dragging: false,
	            value: undefined,
	            proxy: undefined,
	            range: undefined,
	            screenX: 0,
	            screenY: 0,
	            clientX: 0,
	            clientY: 0,
	            pageX: 0,
	            pageY: 0,
	            startX: 0,
	            startY: 0,
	            dragX: 0,
	            dragY: 0,
	            startLeft: 0,
	            startTop: 0,
	            left: 0,
	            top: 0,
	            droppable: undefined
	        });
	    },

	    /**
	     * @private
	     */
	    _dragStart: function _dragStart() {
	        var source = _regularjs.dom.element(this);
	        _regularjs.dom.addClass(source, this.data.sourceClass);
	        _manager2.default.proxy && _regularjs.dom.addClass(_manager2.default.proxy, this.data.proxyClass);

	        /**
	         * @event dragstart 拖拽开始时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平坐标
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直坐标
	         * @property {number} clientX 鼠标指针相对于浏览器的水平坐标
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直坐标
	         * @property {number} pageX 鼠标指针相对于页面的水平坐标
	         * @property {number} pageY 鼠标指针相对于页面的垂直坐标
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragstart', Object.assign({
	            sender: this,
	            origin: this,
	            source: source,
	            cancel: this.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _drag: function _drag() {
	        /**
	         * @event drag 正在拖拽时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平坐标
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直坐标
	         * @property {number} clientX 鼠标指针相对于浏览器的水平坐标
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直坐标
	         * @property {number} pageX 鼠标指针相对于页面的水平坐标
	         * @property {number} pageY 鼠标指针相对于页面的垂直坐标
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('drag', Object.assign({
	            sender: this,
	            origin: this,
	            source: _regularjs.dom.element(this),
	            cancel: this.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragEnd: function _dragEnd() {
	        var source = this._watchers !== null ? _regularjs.dom.element(this) : null;
	        source && _regularjs.dom.delClass(source, this.data.sourceClass);

	        /**
	         * @event dragend 拖拽结束时触发
	         * @property {object} sender 事件发送对象，为当前draggable
	         * @property {object} origin 拖拽源，为当前draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {var} value 拖拽时需要传递的值
	         */
	        this.$emit('dragend', Object.assign({
	            sender: this,
	            origin: this,
	            source: source
	        }, _manager2.default));

	        if (_manager2.default.proxy) {
	            if (this.data.proxy instanceof Draggable.Proxy || this.data.proxy === 'clone') _manager2.default.proxy.parentElement.removeChild(_manager2.default.proxy);

	            _regularjs.dom.delClass(_manager2.default.proxy, this.data.proxyClass);
	        }
	    }
	});

	Draggable.Proxy = _rguiUiBase.Component.extend({
	    name: 'draggable.proxy',
	    /**
	     * @protected
	     */
	    init: function init() {
	        if (this.$outer instanceof Draggable) this.$outer.data.proxy = this;
	    }
	});

	exports.default = Draggable;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _regularjs = __webpack_require__(4);

	Object.assign(_regularjs.dom, {
	    getPosition: function getPosition(elem) {
	        var doc = elem && elem.ownerDocument;
	        var docElem = doc.documentElement;
	        var body = doc.body;

	        var box = elem.getBoundingClientRect ? elem.getBoundingClientRect() : { left: 0, top: 0 };

	        var clientLeft = docElem.clientLeft || body.clientLeft || 0;
	        var clientTop = docElem.clientTop || body.clientTop || 0;

	        return { left: box.left - clientLeft, top: box.top - clientTop };
	    },
	    getSize: function getSize(elem) {
	        return { width: elem.clientWidth, height: elem.clientHeight };
	    },
	    getDimension: function getDimension(elem) {
	        return Object.assign(this.getSize(elem), this.getPosition(elem));
	    },
	    isInRect: function isInRect(position, dimension) {
	        if (!position || !dimension) return false;

	        return position.left > dimension.left && position.left < dimension.left + dimension.width && position.top > dimension.top && position.top < dimension.top + dimension.height;
	    },
	    getComputedStyle: function getComputedStyle(elem, property) {
	        var computedStyle = elem.currentStyle || window.getComputedStyle(elem, null);
	        return property ? computedStyle[property] : computedStyle;
	    }
	});

	var manager = {
	    dragging: false,
	    value: undefined,
	    proxy: undefined,
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    startX: 0,
	    startY: 0,
	    dragX: 0,
	    dragY: 0,
	    startLeft: 0,
	    startTop: 0,
	    dragLeft: 0,
	    dragTop: 0,
	    droppable: undefined,
	    droppables: []
	};

	exports.default = manager;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(2);

	var _manager = __webpack_require__(18);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Droppable
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {var}                     options.data.value              <=  拖放后传递过来的值
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-droppable'}    options.data.class               => 可放置时（即disabled=false）给元素附加此class
	 * @param {string='z-dragTarget'}   options.data.dragTarget          => 拖拽在该元素上方时给该元素附加此class
	 */
	var Droppable = _rguiUiBase.Component.extend({
	    name: 'droppable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            data: null,
	            'class': 'z-droppable',
	            dragTarget: 'z-dragTarget'
	        }, this.data);
	        this.supr();

	        _manager2.default.droppables.push(this);
	    },

	    /**
	     * @protected
	     * @override
	     */
	    init: function init() {
	        var _this = this;

	        var inner = _regularjs.dom.element(this);
	        this.$watch('disabled', function (newValue) {
	            return _regularjs.dom[newValue ? 'delClass' : 'addClass'](inner, _this.data['class']);
	        });
	        this.supr();
	    },

	    /**
	     * @protected
	     * @override
	     */
	    destroy: function destroy() {
	        _manager2.default.droppables.splice(_manager2.default.droppables.indexOf(this), 1);
	        this.supr();
	    },

	    /**
	     * @private
	     */
	    _dragEnter: function _dragEnter(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.addClass(element, this.data.dragTarget);

	        /**
	         * @event dragenter 拖拽进入该元素时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragenter', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragLeave: function _dragLeave(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.delClass(element, this.data.dragTarget);

	        /**
	         * @event dragleave 拖拽离开该元素时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragleave', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _dragOver: function _dragOver(origin) {
	        var element = _regularjs.dom.element(this);
	        var dimension = _regularjs.dom.getDimension(element);

	        /**
	         * @event dragover 拖拽在该元素上方时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} ratioX 鼠标指针相对于接收元素所占的长度比
	         * @property {number} ratioY 鼠标指针相对于接收元素所占的高度比
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         * @property {function} cancel 取消拖拽操作
	         */
	        this.$emit('dragover', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            ratioX: (_manager2.default.clientX - dimension.left) / dimension.width,
	            ratioY: (_manager2.default.clientY - dimension.top) / dimension.height,
	            cancel: origin.cancel
	        }, _manager2.default));
	    },

	    /**
	     * @private
	     */
	    _drop: function _drop(origin) {
	        var element = _regularjs.dom.element(this);
	        _regularjs.dom.delClass(element, this.data.dragTarget);
	        var dimension = _regularjs.dom.getDimension(element);

	        this.data.value = origin.data.value;
	        this.$update();

	        /**
	         * @event drop 拖拽放置时触发
	         * @property {object} sender 事件发送对象，为当前droppable
	         * @property {object} origin 拖拽源，为拖拽的draggable
	         * @property {object} source 拖拽起始元素
	         * @property {object} proxy 拖拽代理元素
	         * @property {object} target 拖拽目标元素
	         * @property {object} value 拖拽时接收到的值
	         * @property {number} ratioX 鼠标指针相对于接收元素所占的长度比
	         * @property {number} ratioY 鼠标指针相对于接收元素所占的高度比
	         * @property {number} screenX 鼠标指针相对于屏幕的水平位置
	         * @property {number} screenY 鼠标指针相对于屏幕的垂直位置
	         * @property {number} clientX 鼠标指针相对于浏览器的水平位置
	         * @property {number} clientY 鼠标指针相对于浏览器的垂直位置
	         * @property {number} pageX 鼠标指针相对于页面的水平位置
	         * @property {number} pageY 鼠标指针相对于页面的垂直位置
	         * @property {number} startX 拖拽开始时鼠标指针的水平坐标
	         * @property {number} startY 拖拽开始时鼠标指针的垂直坐标
	         * @property {number} dragX 拖拽时鼠标指针相对于起始坐标的水平位移
	         * @property {number} dragY 拖拽时鼠标指针相对于起始坐标的垂直位移
	         * @property {number} startLeft 拖拽开始时代理元素的left值
	         * @property {number} startTop 拖拽开始时代理元素的top值
	         * @property {number} left 拖拽时代理元素的left值
	         * @property {number} top 拖拽时代理元素的top值
	         */
	        this.$emit('drop', Object.assign({
	            sender: this,
	            origin: origin,
	            source: _regularjs.dom.element(origin),
	            target: element,
	            ratioX: (_manager2.default.clientX - dimension.left) / dimension.width,
	            ratioY: (_manager2.default.clientY - dimension.top) / dimension.height
	        }, _manager2.default));
	    }
	});

	exports.default = Droppable;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _draggable = __webpack_require__(17);

	var _draggable2 = _interopRequireDefault(_draggable);

	var _manager = __webpack_require__(18);

	var _manager2 = _interopRequireDefault(_manager);

	var _regularjs = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Movable
	 * @extend Draggable
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {string|Dragable.Proxy|Element|function='self'}  options.data.proxy  @=> 拖拽代理，即拖拽时移动的元素。默认值为`clone`，表示拖拽时会拖起自身的一个拷贝；当值为`self`，拖拽时直接拖起自身。也可以用`<draggable.proxy>`自定义代理，或直接传入一个元素或函数。`''`表示不使用拖拽代理。
	 * @param {string='both'}           options.data.axis                => 拖拽代理移动时限制的轴向，`both`表示可以在任意方向上移动，`horizontal`表示限制在水平方向上移动，`vertical`表示限制在垂直方向上移动。
	 * @param {string|object|Element|function} options.data.range       @=> 拖拽范围。值可以为一个{left,top,right,bottom}格式的对象，表示代理元素移动的上下左右边界。当值为`offsetParent`，拖拽时代理元素限制在offsetParent中移动；当值为`parent`；当值为。也可以直接传入一个元素或函数。
	 * @param {string=inside}           options.data.rangeMode           => 拖拽范围模式，默认为`inside`，表示在拖拽范围内移动，`none`表示代理元素的left,top直接按拖拽范围计算。
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {string='z-draggable'}    options.data.class               => 可拖拽时（即disabled=false）给该元素附加此class
	 * @param {string='z-dragSource'}   options.data.sourceClass         => 拖拽时给起始元素附加此class
	 * @param {string='z-dragProxy'}    options.data.proxyClass          => 拖拽时给代理元素附加此class
	 */
	var Movable = _draggable2.default.extend({
	    name: 'movable',
	    template: '{#inc this.$body}',
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            proxy: 'self',
	            // value: undefined,
	            // 'class': 'z-draggable',
	            // sourceClass: 'z-dragSource',
	            // proxyClass: 'z-dragProxy'
	            axis: 'both',
	            range: undefined,
	            rangeMode: 'inside'
	        }, // grid
	        // snap
	        this.data);
	        this.supr();
	    },

	    /**
	     * @method _getRange(proxy) 获取拖拽范围
	     * @private
	     * @param  {Element} proxy 拖拽代理元素
	     * @return {Element} 拖拽范围元素
	     */
	    _getRange: function _getRange(proxy) {
	        var range = void 0;

	        if (_typeof(this.data.range) === 'object') range = this.data.range;else if (this.data.range === 'offsetParent') {
	            var offsetParent = proxy.offsetParent;
	            if (offsetParent) range = { left: 0, top: 0, right: offsetParent.offsetWidth, bottom: offsetParent.offsetHeight };else range = { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight };
	        } else if (this.data.range === 'parent') {
	            var parent = proxy.parentElement;
	            if (_regularjs.dom.getComputedStyle(proxy, 'position') === 'fixed') {
	                range = _regularjs.dom.getDimension(parent);
	                range.right = range.left + range.width;
	                range.bottom = range.top + range.height;
	            }
	        } else if (range instanceof Element) {
	            //
	        }

	        if (range) {
	            range.width = range.right - range.left;
	            range.height = range.bottom - range.top;
	        }

	        return range;
	    },

	    /**
	     * @protected
	     * @override
	     */
	    _onMouseMoveStart: function _onMouseMoveStart(e) {
	        this.supr(e);

	        if (_manager2.default.proxy) _manager2.default.range = this._getRange(_manager2.default.proxy);
	    },

	    /**
	     * @protected
	     * @override
	     */
	    restrict: function restrict(params) {
	        var next = this.supr(params);

	        if (params.range) {
	            if (this.data.rangeMode === 'none') {
	                next.left = Math.min(Math.max(params.range.left, next.left), params.range.right);
	                next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom);
	            } else if (this.data.rangeMode === 'inside') {
	                next.left = Math.min(Math.max(params.range.left, next.left), params.range.right - _manager2.default.proxy.offsetWidth);
	                next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom - _manager2.default.proxy.offsetHeight);
	            }
	        }

	        if (this.data.grid) {
	            // @TODO
	        }

	        if (this.data.axis === 'vertical') next.left = params.startLeft;
	        if (this.data.axis === 'horizontal') next.top = params.startTop;

	        return next;
	    }
	});

	exports.default = Movable;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiListview = __webpack_require__(22);

	var _listView = __webpack_require__(27);

	var _listView2 = _interopRequireDefault(_listView);

	var _item = __webpack_require__(28);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Sample
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var MusicListView = _rguiUiListview.ListView.extend({
	    name: 'musicListView',
	    template: _listView2.default,
	    computed: {
	        allChecked: {
	            get: function get() {
	                return this.data._list.every(function (item) {
	                    return item.data.checked;
	                });
	            },
	            set: function set(value) {
	                return this.data._list.forEach(function (item) {
	                    item.data.checked = value;
	                });
	            }
	        }
	    }
	});

	var MusicItem = _rguiUiListview.Item.extend({
	    name: 'musicItem',
	    template: _item2.default
	});

	exports.default = MusicListView;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Item = exports.ListView = undefined;

	var _listView = __webpack_require__(23);

	var _listView2 = _interopRequireDefault(_listView);

	var _item = __webpack_require__(25);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ListView = _listView2.default;
	exports.Item = _item2.default;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(2);

	var _index = __webpack_require__(24);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class ListView
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {var}                     options.data.value              <=> 当前选择的值
	 * @param {boolean=false}           options.data.multiple            => 是否可以多选
	 * @param {boolean=false}           options.data.readonly            => 是否只读
	 * @param {boolean=false}           options.data.disabled            => 是否禁用
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var ListView = _rguiUiBase.Component.extend({
	    name: 'listView',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        var _this = this;

	        this.data = Object.assign({
	            _list: [],
	            _selected: undefined,
	            value: undefined,
	            multiple: false
	        }, this.data);
	        this.supr();

	        this.$watch('value', function (newValue, oldValue) {
	            if (!_this.data._selected || _this.data._selected.data.value !== newValue) _this.data._selected = _this.data._list.find(function (item) {
	                return item.data.value === newValue;
	            });

	            /**
	             * @event change 选择值改变时触发
	             * @property {object} sender 事件发送对象
	             * @property {Item} selected 改变后的选择项
	             * @property {var} value 改变后的选择值
	             */
	            _this.$emit('change', {
	                sender: _this,
	                selected: _this.data._selected,
	                value: newValue
	            });
	        });

	        this.$watch('_selected', function (newValue, oldValue) {
	            // 改变item的选择状态
	            oldValue && (oldValue.data.selected = false);
	            newValue && (newValue.data.selected = true);
	            // 设置value
	            _this.data.value = newValue ? newValue.data.value : newValue;
	        });
	    },

	    /**
	     * @method select(item) 选择某一项
	     * @public
	     * @param  {Item} item 选择项
	     * @return {void}
	     */
	    select: function select(item) {
	        if (this.data.readonly || this.data.disabled) return;

	        if (this.data.multiple) item.data.selected = !item.data.selected;else this.data._selected = item;

	        /**
	         * @event select 选择某一项时触发
	         * @property {object} sender 事件发送对象
	         * @property {Item} selected 当前选择项
	         */
	        this.$emit('select', {
	            sender: this,
	            selected: item
	        });
	    }
	});

	exports.default = ListView;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-listView ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n"}]}]

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(2);

	var _index = __webpack_require__(26);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @class Item
	 * @extend Component
	 * @param {object}                  options.data                     =  绑定属性
	 * @param {var}                     options.data.value              <=> 该项的值
	 * @param {boolean=false}           options.data.selected           <=> 该项是否被选中
	 * @param {boolean=false}           options.data.divider             => 设置该项为分隔线
	 * @param {string}                  options.data.title               => 该项的工具提示
	 * @param {boolean=false}           options.data.disabled            => 禁用该项
	 * @param {boolean=true}            options.data.visible             => 是否显示
	 * @param {string=''}               options.data.class               => 补充class
	 */
	var Item = _rguiUiBase.Component.extend({
	    name: 'item',
	    template: _index2.default,
	    /**
	     * @protected
	     * @override
	     */
	    config: function config() {
	        this.data = Object.assign({
	            value: undefined,
	            selected: false,
	            disabled: false,
	            divider: false,
	            title: undefined
	        }, this.data);
	        this.supr();

	        // 没有$outer就直接报错
	        this.$outer.data._list.push(this);
	        // 初始化时选择selected为true的item
	        if (this.data.selected) this.$outer.data._selected = this;
	    },

	    /**
	     * @protected
	     * @override
	     */
	    destroy: function destroy() {
	        if (this.$outer.data._selected === this) this.$outer.data._selected = undefined;
	        // 从$outer组件的列表中删除自己
	        var index = this.$outer.data._list.indexOf(this);
	        ~index && this.$outer.data._list.splice(index, 1);
	        this.supr();
	    },

	    /**
	     * @method select() 选择该项
	     * @public
	     * @return {void}
	     */
	    select: function select() {
	        if (this.data.disabled || this.data.divider) return;

	        this.$outer.select(this);

	        /**
	         * @event select 选择该项时触发
	         * @property {object} sender 事件发送对象
	         */
	        this.$emit('select', {
	            sender: this
	        });
	    }
	}).directive({
	    'z-divider': _rguiUiBase._.createBoolClassDirective('z-divider')
	});

	exports.default = Item;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"c._sg_('class', d, e)","constant":false,"setbody":"c._ss_('class',p_,d, '=', 1)"}},{"type":"attribute","name":"z-sel","value":{"type":"expression","body":"c._sg_('selected', d, e)","constant":false,"setbody":"c._ss_('selected',p_,d, '=', 1)"}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"z-divider","value":{"type":"expression","body":"c._sg_('divider', d, e)","constant":false,"setbody":"c._ss_('divider',p_,d, '=', 1)"}},{"type":"attribute","name":"title","value":{"type":"expression","body":"c._sg_('title', d, e)","constant":false,"setbody":"c._ss_('title',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['select']()","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n"}]}]

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"table","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"['m-table ',c._sg_('class', d, e)].join('')","constant":false,"setbody":false}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"thead","attrs":[],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"tr","attrs":[],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"th","attrs":[{"type":"attribute","name":"width","value":"54"}],"children":[{"type":"element","tag":"input","attrs":[{"type":"attribute","name":"type","value":"checkbox"},{"type":"attribute","name":"class","value":"table_checkbox"},{"type":"attribute","name":"r-model","value":{"type":"expression","body":"c._sg_('allChecked', d, e)","constant":false,"setbody":"c._ss_('allChecked',p_,d, '=', 1)"}}]}]},{"type":"text","text":"\n            "},{"type":"element","tag":"th","attrs":[],"children":[{"type":"text","text":"歌曲标题"}]},{"type":"text","text":"\n            "},{"type":"element","tag":"th","attrs":[{"type":"attribute","name":"width","value":"90"}],"children":[{"type":"text","text":"时长"}]},{"type":"text","text":"\n            "},{"type":"element","tag":"th","attrs":[{"type":"attribute","name":"width","value":"20%"}],"children":[{"type":"text","text":"歌手"}]},{"type":"text","text":"\n            "},{"type":"element","tag":"th","attrs":[{"type":"attribute","name":"width","value":"24%"}],"children":[{"type":"text","text":"专辑"}]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"tbody","attrs":[],"children":[{"type":"text","text":"\n        "},{"type":"template","content":{"type":"expression","body":"c._sg_('$body', c)","constant":false,"setbody":"c._ss_('$body',p_,c, '=', 0)"}},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"tr","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"c._sg_('class', d, e)","constant":false,"setbody":"c._ss_('class',p_,d, '=', 1)"}},{"type":"attribute","name":"z-dis","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}},{"type":"attribute","name":"z-divider","value":{"type":"expression","body":"c._sg_('divider', d, e)","constant":false,"setbody":"c._ss_('divider',p_,d, '=', 1)"}},{"type":"attribute","name":"title","value":{"type":"expression","body":"c._sg_('title', d, e)","constant":false,"setbody":"c._ss_('title',p_,d, '=', 1)"}},{"type":"attribute","name":"r-hide","value":{"type":"expression","body":"(!c._sg_('visible', d, e))","constant":false,"setbody":false}}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"td","attrs":[],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"input","attrs":[{"type":"attribute","name":"type","value":"checkbox"},{"type":"attribute","name":"class","value":"table_checkbox"},{"type":"attribute","name":"r-model","value":{"type":"expression","body":"c._sg_('checked', d, e)","constant":false,"setbody":"c._ss_('checked',p_,d, '=', 1)"}},{"type":"attribute","name":"disabled","value":{"type":"expression","body":"c._sg_('disabled', d, e)","constant":false,"setbody":"c._ss_('disabled',p_,d, '=', 1)"}}]},{"type":"text","text":"\n        "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"table_play"},{"type":"attribute","name":"z-sel","value":{"type":"expression","body":"c._sg_('selected', d, e)","constant":false,"setbody":"c._ss_('selected',p_,d, '=', 1)"}},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['select']()","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"td","attrs":[{"type":"attribute","name":"class","value":"f-toe"}],"children":[{"type":"element","tag":"a","attrs":[],"children":[{"type":"expression","body":"c._sg_('title', c._sg_('value', d, e))","constant":false,"setbody":"c._ss_('title',p_,c._sg_('value', d, e), '=', 0)"}]}]},{"type":"text","text":"\n    "},{"type":"element","tag":"td","attrs":[{"type":"attribute","name":"class","value":"table_duration"}],"children":[{"type":"text","text":"\n        "},{"type":"element","tag":"span","attrs":[],"children":[{"type":"expression","body":"(function(t){t = c._f_('timeFormat' ).get.call( c,t);return t})(c._sg_('duration', c._sg_('value', d, e)))","constant":false,"setbody":"c._ss_('duration',(function(t){t = c._f_('timeFormat' ).set.call( c,t);return t})(p_),c._sg_('value', d, e), '=', 0)"}]},{"type":"text","text":"\n        "},{"type":"element","tag":"div","attrs":[],"children":[{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"table_btn table_btn-collect"}],"children":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"table_btn table_btn-share"}],"children":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"table_btn table_btn-download"}],"children":[]},{"type":"text","text":"\n            "},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"class","value":"table_btn table_btn-remove"},{"type":"attribute","name":"on-click","value":{"type":"expression","body":"c['remove']()","constant":false,"setbody":false}}],"children":[]},{"type":"text","text":"\n        "}]},{"type":"text","text":"\n    "}]},{"type":"text","text":"\n    "},{"type":"element","tag":"td","attrs":[{"type":"attribute","name":"class","value":"f-toe"}],"children":[{"type":"element","tag":"a","attrs":[],"children":[{"type":"expression","body":"c._sg_('artist', c._sg_('value', d, e))","constant":false,"setbody":"c._ss_('artist',p_,c._sg_('value', d, e), '=', 0)"}]}]},{"type":"text","text":"\n    "},{"type":"element","tag":"td","attrs":[{"type":"attribute","name":"class","value":"f-toe"}],"children":[{"type":"element","tag":"a","attrs":[],"children":[{"type":"expression","body":"c._sg_('album', c._sg_('value', d, e))","constant":false,"setbody":"c._ss_('album',p_,c._sg_('value', d, e), '=', 0)"}]}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rguiUiBase = __webpack_require__(2);

	var _index = __webpack_require__(30);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Navbar = _rguiUiBase.Component.extend({
	    name: 'navbar',
	    template: _index2.default,
	    isCurrent: function isCurrent(type) {
	        var hash = location.href.split('#')[1] || '';

	        return hash.includes(type);
	    }
	});

	exports.default = Navbar;

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports =[{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"class","value":"m-navbar f-fl"}],"children":[{"type":"text","text":"\n    "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c['isCurrent']('explore')","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#explore"}],"children":[{"type":"text","text":"发现音乐"}]}]},{"type":"text","text":"\n    "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c['isCurrent']('mine')","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#mine"}],"children":[{"type":"text","text":"我的音乐"}]}]},{"type":"text","text":"\n    "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c['isCurrent']('friend')","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#friend"}],"children":[{"type":"text","text":"朋友"}]}]},{"type":"text","text":"\n    "},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"z-crt","value":{"type":"expression","body":"c['isCurrent']('download')","constant":false,"setbody":false}}],"children":[{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#download"}],"children":[{"type":"text","text":"下载客户端"}]}]},{"type":"text","text":"\n"}]}]

/***/ }
/******/ ])
});
;