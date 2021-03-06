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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userActions = __webpack_require__(14);

Object.defineProperty(exports, 'fetchUser', {
  enumerable: true,
  get: function get() {
    return _userActions.fetchUser;
  }
});
Object.defineProperty(exports, 'fetchCurrentUser', {
  enumerable: true,
  get: function get() {
    return _userActions.fetchCurrentUser;
  }
});
Object.defineProperty(exports, 'fetchAdmins', {
  enumerable: true,
  get: function get() {
    return _userActions.fetchAdmins;
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USER = exports.FETCH_USER = "FETCH_USER";
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
var FETCH_ADMINS = exports.FETCH_ADMINS = "FETCH_ADMINS";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _Home = __webpack_require__(13);

var _Home2 = _interopRequireDefault(_Home);

var _UsersList = __webpack_require__(15);

var _UsersList2 = _interopRequireDefault(_UsersList);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _NotFoundPage = __webpack_require__(18);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsListPage = __webpack_require__(19);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [_extends({}, _App2.default, {
    routes: [_extends({
        path: '/',
        exact: true
    }, _Home2.default), _extends({}, _UsersList2.default, {
        path: '/users',
        exact: true
    }), _extends({}, _AdminsListPage2.default, {
        path: '/admins',
        exact: true
    }), _extends({}, _NotFoundPage2.default, {
        path: ""
    })]
})];

exports.default = routes;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = __webpack_require__(3);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var AuthReducer = function AuthReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.FETCH_CURRENT_USER:
            return action.payload || false;

        default:
            return state;
    }
};

exports.default = AuthReducer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(5);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(22);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(25);

var _createStore2 = _interopRequireDefault(_createStore);

var _expressHttpProxy = __webpack_require__(30);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);

    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    }).map(function (promise) {
        // Handle Reject Break Promise as Admins List
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function () {
        var context = {};
        var componentRender = (0, _renderer2.default)(req, store, context);

        // Handle Redirect without Auth
        console.log("Context Here:", context);
        if (context.url) {
            return res.redirect(context.url);
        }

        // Handle Not Found Page
        if (context.isNotFoundPage) {
            res.status(404);
        }
        res.send(componentRender);
    });
});

app.listen(3000, function () {
    console.log('app run on 3000');
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(4);

var _reactHelmet = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'center-align', style: { marginTop: "200px" } },
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Welcome To Home Page'
                    ),
                    _react2.default.createElement('meta', { property: 'og:title', content: 'Home Page' })
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    ' Welcome Home Component width nodemon 2'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return console.log('DZOOO');
                        }, className: 'waves-light btn' },
                    'CLICK ME'
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)({ fetchUser: _actions.fetchUser }, dispatch)
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        users: state.users
    };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchAdmins = exports.fetchCurrentUser = exports.fetchUser = undefined;

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(3);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchUserSuccess = function fetchUserSuccess(data) {
    return {
        type: actionTypes.FETCH_USER,
        payload: data
    };
};

var fetchCurrentUserSuccess = function fetchCurrentUserSuccess(data) {
    return {
        type: actionTypes.FETCH_CURRENT_USER,
        payload: data
    };
};

var fetchAdminsSuccess = function fetchAdminsSuccess(data) {
    return {
        type: actionTypes.FETCH_ADMINS,
        payload: data
    };
};

var fetchUser = exports.fetchUser = function fetchUser() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/users');

                        case 2:
                            result = _context.sent;

                            dispatch(fetchUserSuccess(result.data));

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get('/current_user');

                        case 2:
                            result = _context2.sent;

                            dispatch(fetchCurrentUserSuccess(result.data));

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var result;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get('/admins');

                        case 2:
                            result = _context3.sent;

                            dispatch(fetchAdminsSuccess(result.data));

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(2);

var _redux = __webpack_require__(4);

var _reactHelmet = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
    _inherits(UsersList, _Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
    }

    _createClass(UsersList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.actions.fetchUser();
        }
    }, {
        key: 'renderUser',
        value: function renderUser() {
            var arr = this.props.users.map(function (item, key) {
                return _react2.default.createElement(
                    'li',
                    { key: key },
                    item.name
                );
            });
            return arr;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'User List'
                    ),
                    _react2.default.createElement('meta', { property: 'og:title', content: 'm\u1EABu \xE1nh kim dm 079' })
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderUser()
                )
            );
        }
    }]);

    return UsersList;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)({ fetchUser: _actions.fetchUser }, dispatch)
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        users: state.users
    };
};

var loadData = exports.loadData = function loadData(store) {
    return store.dispatch((0, _actions.fetchUser)());
};

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersList)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Header = __webpack_require__(17);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = {
    component: App,
    loadData: function loadData(_ref) {
        var dispatch = _ref.dispatch;
        return dispatch((0, _actions.fetchCurrentUser)());
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {

            var authButton = this.props.auth ? _react2.default.createElement(
                'a',
                { href: '/api/logout' },
                'Logout'
            ) : _react2.default.createElement(
                'a',
                { href: '/api/auth/google' },
                'Login'
            );

            return _react2.default.createElement(
                'nav',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'nav-wrapper' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/', className: 'brand-logo' },
                        'SSR Render'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'right' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/users' },
                                'User'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/admins' },
                                'Admins'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            authButton
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.isNotFoundPage = true;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h2",
            { className: "center" },
            "NOT FOUND PAGE"
        )
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _requireAuth = __webpack_require__(20);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
    _inherits(AdminsListPage, _Component);

    function AdminsListPage() {
        _classCallCheck(this, AdminsListPage);

        return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
    }

    _createClass(AdminsListPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchAdmins();
        }
    }, {
        key: 'renderAdmins',
        value: function renderAdmins() {
            if (!this.props.admins) {
                return;
            }
            return this.props.admins.map(function (admin) {
                return _react2.default.createElement(
                    'li',
                    { key: admin.id },
                    admin.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    'List Administrator'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderAdmins()
                )
            );
        }
    }]);

    return AdminsListPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        admins: state.admins
    };
};

var loadData = exports.loadData = function loadData(store) {
    return store.dispatch((0, _actions.fetchAdmins)());
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
    loadData: loadData
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouter = __webpack_require__(21);

var _authReducer = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (WrappedComponent) {
    var RequireAuth = function (_Component) {
        _inherits(RequireAuth, _Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: "render",
            value: function render() {
                var currentUrl = this.props.route.path;
                var redirectUrl = '/';

                switch (this.props.auth) {
                    case false:
                        return _react2.default.createElement(_reactRouter.Redirect, { to: redirectUrl });

                    case null:
                        return _react2.default.createElement(
                            "div",
                            null,
                            "Loading...."
                        );

                    default:
                        return _react2.default.createElement(WrappedComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return { auth: auth };
    };

    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(23);

var _server2 = _interopRequireDefault(_server);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterConfig = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(1);

var _serializeJavascript = __webpack_require__(24);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {

    var content = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: context },
            (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
        )
    ));

    var helmet = _reactHelmet.Helmet.renderStatic();

    return '\n        <html>\n            <head>\n                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n                ' + helmet.title.toString() + '\n                ' + helmet.meta.toString() + '\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n\n                <script>\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="clientBundle.js"></script>\n            </body>\n        </html>\n    ';
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _reduxThunk = __webpack_require__(26);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' }
    });

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
    return store;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _userReducer = __webpack_require__(28);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _authReducer = __webpack_require__(9);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(29);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducers = (0, _redux.combineReducers)({
    users: _userReducer2.default,
    auth: _authReducer2.default,
    admins: _adminsReducer2.default
});

exports.default = rootReducers;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = __webpack_require__(3);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var UserReducer = function UserReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.FETCH_USER:
            return action.payload;

        default:
            return state;
    }
};

exports.default = UserReducer;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = __webpack_require__(3);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var AdminReducer = function AdminReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    console.log(action.payload);
    switch (action.type) {
        case actionTypes.FETCH_ADMINS:
            return action.payload;

        default:
            return state;
    }
};

exports.default = AdminReducer;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })
/******/ ]);