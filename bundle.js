(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// import React from "react";
// import ReactDOM from "react-dom";

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _yuzuYepApp = require("@yuzu/yep-app");

var _yuzuYepApp2 = _interopRequireDefault(_yuzuYepApp);

var _yuzuYepAppDecorators = require("@yuzu/yep-app/decorators");

var MainComponent = (function () {
    function MainComponent() {
        _classCallCheck(this, _MainComponent);
    }

    _createClass(MainComponent, [{
        key: "register",
        value: function register() {
            console.log("Registering main component");
        }
    }]);

    var _MainComponent = MainComponent;
    MainComponent = (0, _yuzuYepAppDecorators.component)("main")(MainComponent) || MainComponent;
    return MainComponent;
})();

_yuzuYepApp2["default"].run(_yuzuYepApp2["default"].Components(new MainComponent()), _yuzuYepApp2["default"].Config(), _yuzuYepApp2["default"].Delegate({
    onReady: function onReady() {
        console.log("READY!!");
    }
}));

// class Main extends React.Component {
//     render() {
//         return (
//             <div className="row">
//                 <div className="col s12">
//                     <h1>Hello, world</h1>
//                 </div>
//             </div>
//         );
//     }
// }

// const run = () => {
//     ReactDOM.render(<Main />, document.querySelector("main"));
// };

// run();

},{"@yuzu/yep-app":3,"@yuzu/yep-app/decorators":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _libDecorators = require("./lib/decorators");

var decorators = _interopRequireWildcard(_libDecorators);

exports["default"] = decorators;
module.exports = exports["default"];

},{"./lib/decorators":15}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libApp = require("./lib/App");

var _libApp2 = _interopRequireDefault(_libApp);

var _libAction = require("./lib/Action");

var _libAction2 = _interopRequireDefault(_libAction);

var _libAppHooks = require("./lib/AppHooks");

var _libAppHooks2 = _interopRequireDefault(_libAppHooks);

var _libAppDelegate = require("./lib/AppDelegate");

var _libAppDelegate2 = _interopRequireDefault(_libAppDelegate);

var _libRegistry = require("./lib/Registry");

var _libRegistry2 = _interopRequireDefault(_libRegistry);

exports.App = _libApp2["default"];
exports.Action = _libAction2["default"];
exports.AppHooks = _libAppHooks2["default"];
exports.AppDelegate = _libAppDelegate2["default"];
exports.Registry = _libRegistry2["default"];

},{"./lib/Action":4,"./lib/App":6,"./lib/AppDelegate":9,"./lib/AppHooks":10,"./lib/Registry":14}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _App = require("./App");

var _App2 = _interopRequireDefault(_App);

var Action = (function () {
    function Action() {
        _classCallCheck(this, Action);

        // Need to save publishers on this instance so we can mutate the publish w/ when.
        this.publish = this.publish.bind(this);
        this.publish.when = this.publishWhen.bind(this);
    }

    _createClass(Action, [{
        key: "dispatchAction",
        value: function dispatchAction() {
            return _App2["default"].dispatchAction.apply(_App2["default"], arguments);
        }
    }, {
        key: "publish",
        value: function publish() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return this._publishWith.apply(this, [_App2["default"].events.publish].concat(args));
        }
    }, {
        key: "publishWhen",
        value: function publishWhen() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return this._publishWith.apply(this, [_App2["default"].events.publish.when].concat(args));
        }
    }, {
        key: "_publishWith",
        value: function _publishWith(publish, ev) {
            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
            }

            return publish.apply(undefined, [this.ns + "." + ev].concat(args));
        }
    }, {
        key: "logger",
        get: function get() {
            return _App2["default"].logger(this.ns);
        }
    }, {
        key: "events",
        get: function get() {
            return _App2["default"].events;
        }
    }, {
        key: "ns",
        get: function get() {
            return this._ns || "app";
        },
        set: function set(namespace) {
            this._ns = namespace;
        }
    }], [{
        key: "ns",
        value: function ns(key) {
            // Decorator for easily adding namespace.
            return function (ActionWithNS) {
                ActionWithNS.prototype.ns = key;
            };
        }
    }]);

    return Action;
})();

exports["default"] = Action;
module.exports = exports["default"];

},{"./App":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _q = require("q");

var _q2 = _interopRequireDefault(_q);

var ActionDispatcher = (function () {
    function ActionDispatcher(actionMap) {
        _classCallCheck(this, ActionDispatcher);

        this._map = actionMap;
    }

    _createClass(ActionDispatcher, [{
        key: "dispatch",
        value: function dispatch(name) {
            var _this = this;

            for (var _len = arguments.length, actionArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                actionArgs[_key - 1] = arguments[_key];
            }

            return _q2["default"]["try"](function () {
                var action = _this._map[name];
                if (!action) {
                    throw new Error("Action could not be dispatched: " + name);
                }
                var execAction = typeof action === "function" ? action : action.exec.bind(action);
                return execAction.apply(undefined, actionArgs);
            });
        }
    }]);

    return ActionDispatcher;
})();

exports["default"] = ActionDispatcher;
module.exports = exports["default"];

},{"q":38}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _q = require("q");

var _q2 = _interopRequireDefault(_q);

var _workflowit = require("workflowit");

var _workflowit2 = _interopRequireDefault(_workflowit);

var _AppComponents = require("./AppComponents");

var _AppComponents2 = _interopRequireDefault(_AppComponents);

var _AppDelegate = require("./AppDelegate");

var _AppDelegate2 = _interopRequireDefault(_AppDelegate);

var _AppConfig = require("./AppConfig");

var _AppConfig2 = _interopRequireDefault(_AppConfig);

var _providersUncaughtErrors = require("./providers/UncaughtErrors");

var _providersUncaughtErrors2 = _interopRequireDefault(_providersUncaughtErrors);

var _instance = null;

var App = (function () {
    // private contructor

    function App(components, config, delegate) {
        _classCallCheck(this, App);

        if (_instance) {
            throw new Error("App can only have one instance at a time. Try App.terminate() first.");
        }

        this._delegate = delegate;
        this._bootstrapper = delegate.createBootstrapper(components);
        this._events = delegate.createEventBus();
        this._workflows = delegate.createWorkflows();

        this._config = config;
        this._actions = null;

        // providers
        this._session = null;
        this._logger = null;
        this._localization = null;

        _instance = this;
        this._delegate.startup(this);
        components.onAppConfig(config);
    }

    _createClass(App, [{
        key: "bootstrap",
        value: function bootstrap() {
            return _q2["default"].when(this._bootstrapper.bootstrap(this._bootstrapComplete.bind(this)));
        }
    }, {
        key: "ready",
        value: function ready() {
            var _this = this;

            var readyEvent = { app: this, delegate: this._delegate };
            return this.events.publish.when("app.ready", readyEvent).then(function () {
                _this._delegate.onReady();
            });
        }
    }, {
        key: "_bootstrapComplete",
        value: function _bootstrapComplete(actions, providers) {
            this._actions = actions;
            this._initProviders(providers);
            this._listenForUncaughtErrors();
        }
    }, {
        key: "_initProviders",
        value: function _initProviders(_ref) {
            var session = _ref.session;
            var logger = _ref.logger;
            var localization = _ref.localization;
            var uncaughtErrors = _ref.uncaughtErrors;

            this._session = session;
            this._logger = logger;
            this._localization = localization;
            this._uncaughtErrors = uncaughtErrors;
        }
    }, {
        key: "_listenForUncaughtErrors",
        value: function _listenForUncaughtErrors() {
            this._uncaughtErrors.listen();
        }
    }, {
        key: "logger",
        value: function logger(namespace) {
            return this._logger.container(namespace);
        }
    }, {
        key: "localize",
        value: function localize(path) {
            var _localization;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return (_localization = this._localization).localize.apply(_localization, [path].concat(args));
        }
    }, {
        key: "dispatchAction",
        value: function dispatchAction() {
            var _actions,
                _this2 = this;

            return (_actions = this._actions).dispatch.apply(_actions, arguments)["catch"](function (error) {
                return _this2._uncaughtErrors.handleActionError(error);
            });
        }
    }, {
        key: "bootstrapper",
        get: function get() {
            return this._bootstrapper;
        }
    }, {
        key: "session",
        get: function get() {
            return this._session;
        }
    }, {
        key: "config",
        get: function get() {
            return this._config;
        }
    }, {
        key: "events",
        get: function get() {
            return this._events;
        }
    }, {
        key: "workflows",
        get: function get() {
            return this._workflows;
        }
    }], [{
        key: "instance",
        value: function instance() {
            if (!_instance) {
                throw new Error("Can not return App.instance(). App.run must be invoked first.");
            }
            return _instance;
        }
    }, {
        key: "runAsync",
        value: function runAsync(components, config, delegate) {
            return _q2["default"]["try"](function () {
                return new App(components, config, delegate);
            }).then(function () {
                return _instance.bootstrap();
            }).then(function () {
                return _instance.ready();
            })["catch"](function (e) {
                return delegate.handleRunError(e);
            });
        }
    }, {
        key: "run",
        value: function run() {
            App.runAsync.apply(App, arguments).done();
        }
    }, {
        key: "terminate",
        value: function terminate() {
            _instance = null;
        }
    }, {
        key: "session",
        value: function session() {
            return App.instance().session;
        }
    }, {
        key: "user",
        value: function user() {
            return App.session().user;
        }
    }, {
        key: "logger",
        value: function logger() {
            var _App$instance;

            return (_App$instance = App.instance()).logger.apply(_App$instance, arguments);
        }
    }, {
        key: "localize",
        value: function localize() {
            var _App$instance2;

            return (_App$instance2 = App.instance()).localize.apply(_App$instance2, arguments);
        }
    }, {
        key: "dispatchAction",
        value: function dispatchAction() {
            var _App$instance3;

            (_App$instance3 = App.instance()).dispatchAction.apply(_App$instance3, arguments).done();
        }
    }, {
        key: "config",
        get: function get() {
            return App.instance().config;
        }
    }, {
        key: "events",
        get: function get() {
            return App.instance().events;
        }
    }, {
        key: "workflows",
        get: function get() {
            return App.instance().workflows;
        }
    }, {
        key: "Components",
        get: function get() {
            return _AppComponents2["default"];
        }
    }, {
        key: "Delegate",
        get: function get() {
            return _AppDelegate2["default"];
        }
    }, {
        key: "Config",
        get: function get() {
            return _AppConfig2["default"];
        }
    }, {
        key: "Workflow",
        get: function get() {
            return _workflowit2["default"];
        }
    }, {
        key: "WorkflowStep",
        get: function get() {
            return _workflowit2["default"].Step;
        }
    }, {
        key: "UncaughtErrors",
        get: function get() {
            return _providersUncaughtErrors2["default"];
        }
    }]);

    return App;
})();

exports["default"] = App;
module.exports = exports["default"];

},{"./AppComponents":7,"./AppConfig":8,"./AppDelegate":9,"./providers/UncaughtErrors":32,"q":38,"workflowit":94}],7:[function(require,module,exports){
/*jshint newcap: false */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _q = require("q");

var _q2 = _interopRequireDefault(_q);

var implementsSpecRegistration = function implementsSpecRegistration(obj) {
    return obj && typeof obj.writeTo === "function";
};

var AppComponents = (function () {
    function AppComponents() {
        _classCallCheck(this, AppComponents);

        for (var _len = arguments.length, listOfComponents = Array(_len), _key = 0; _key < _len; _key++) {
            listOfComponents[_key] = arguments[_key];
        }

        this._list = listOfComponents;
    }

    _createClass(AppComponents, [{
        key: "onAppConfig",
        value: function onAppConfig(config) {
            return this._list.forEach(this._invokeHook("onAppConfig", config));
        }
    }, {
        key: "onBeforeAppBootstrapped",
        value: function onBeforeAppBootstrapped(bootstrapper) {
            return this._list.forEach(this._invokeHook("onBeforeAppBootstrapped", bootstrapper));
        }
    }, {
        key: "register",
        value: function register(specs) {
            var _this = this;

            return _q2["default"].all(this._list.map(function (component) {
                return _this._registerComponent(component, specs);
            }));
        }
    }, {
        key: "onAppComponentsRegistered",
        value: function onAppComponentsRegistered(bootstrapper) {
            return this._list.forEach(this._invokeHook("onAppComponentsRegistered", bootstrapper));
        }
    }, {
        key: "onAppBootstrapped",
        value: function onAppBootstrapped(container) {
            return this._list.forEach(this._invokeHook("onAppBootstrapped", container));
        }
    }, {
        key: "_registerComponent",
        value: function _registerComponent(component, specs) {
            return (0, _q2["default"])(component.register(specs)).then(function (registration) {
                if (implementsSpecRegistration(registration)) {
                    specs.register(registration);
                }
            });
        }
    }, {
        key: "_invokeHook",
        value: function _invokeHook(hook) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            return function (component) {
                if (typeof component[hook] === "function") {
                    return component[hook].apply(component, args);
                }
            };
        }
    }]);

    return AppComponents;
})();

exports["default"] = AppComponents;
module.exports = exports["default"];

},{"q":38}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var AppConfig = (function () {
    function AppConfig() {
        var _this = this;

        _classCallCheck(this, AppConfig);

        for (var _len = arguments.length, valueConfigs = Array(_len), _key = 0; _key < _len; _key++) {
            valueConfigs[_key] = arguments[_key];
        }

        valueConfigs.forEach(function (values) {
            return _this.merge(values);
        });
    }

    _createClass(AppConfig, [{
        key: "merge",
        value: function merge(values) {
            _underscore2["default"].extend(this, values);
        }
    }, {
        key: "defaults",
        value: function defaults(_defaults) {
            _underscore2["default"].defaults(this, _defaults);
        }
    }]);

    return AppConfig;
})();

exports["default"] = AppConfig;
module.exports = exports["default"];

},{"underscore":39}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _Bootstrapper = require("./Bootstrapper");

var _Bootstrapper2 = _interopRequireDefault(_Bootstrapper);

var _EventBus = require("./EventBus");

var _EventBus2 = _interopRequireDefault(_EventBus);

var _ActionDispatcher = require("./ActionDispatcher");

var _ActionDispatcher2 = _interopRequireDefault(_ActionDispatcher);

var _AppWorkflows = require("./AppWorkflows");

var _AppWorkflows2 = _interopRequireDefault(_AppWorkflows);

var AppDelegate = (function () {
    function AppDelegate(handlers) {
        _classCallCheck(this, AppDelegate);

        this._app = null;
        if (handlers) {
            _underscore2["default"].extend(this, handlers);
        }
    }

    _createClass(AppDelegate, [{
        key: "startup",
        value: function startup(app) {
            this._app = app;
            this.onStartup();
        }
    }, {
        key: "createBootstrapper",
        value: function createBootstrapper(components) {
            return new _Bootstrapper2["default"](components, this);
        }
    }, {
        key: "createEventBus",
        value: function createEventBus() {
            return new _EventBus2["default"]();
        }
    }, {
        key: "createWorkflows",
        value: function createWorkflows() {
            return new _AppWorkflows2["default"]();
        }
    }, {
        key: "createActions",
        value: function createActions(commands) {
            return new _ActionDispatcher2["default"](commands);
        }

        // Required providers.
    }, {
        key: "provide",
        value: function provide(container) {
            return {
                session: this.provideSession(container),
                logger: this.provideLogger(container),
                localization: this.provideLocalize(container),
                uncaughtErrors: this.provideUncaughtErrors(container)
            };
        }
    }, {
        key: "provideSession",
        value: function provideSession() {
            throw new Error("App requires a session to be provided.");
        }
    }, {
        key: "provideLogger",
        value: function provideLogger() {
            throw new Error("App requires a logger to be provided.");
        }
    }, {
        key: "provideLocalize",
        value: function provideLocalize() {
            throw new Error("App requires localization to be provided.");
        }
    }, {
        key: "provideUncaughtErrors",
        value: function provideUncaughtErrors() {
            throw new Error("App requires an uncaught error listener to be provided.");
        }

        // Hooks.
    }, {
        key: "onStartup",
        value: function onStartup() {}
    }, {
        key: "onBeforeBootstrapped",
        value: function onBeforeBootstrapped() {}
    }, {
        key: "onComponentsRegistered",
        value: function onComponentsRegistered() {}
    }, {
        key: "onBootstrapped",
        value: function onBootstrapped() {
            this.logger.info("Bootstrapped.");
        }
    }, {
        key: "onReady",
        value: function onReady() {
            this.logger.info("Ready.");
        }

        // Required handlers.
    }, {
        key: "handleUncaughtError",
        value: function handleUncaughtError(e) {
            console.error(e);
            throw new Error("App requires a handler for uncaught errors.");
        }
    }, {
        key: "handleRestart",
        value: function handleRestart() {
            throw new Error("App requires a handler for restart.");
        }
    }, {
        key: "handleRunError",
        value: function handleRunError(e) {
            console.error("Error running application!");
            throw e;
        }
    }, {
        key: "app",
        get: function get() {
            return this._app;
        }
    }, {
        key: "logger",
        get: function get() {
            return this._app.logger("app");
        }
    }]);

    return AppDelegate;
})();

exports["default"] = AppDelegate;
module.exports = exports["default"];

},{"./ActionDispatcher":5,"./AppWorkflows":11,"./Bootstrapper":12,"./EventBus":13,"underscore":39}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _App = require("./App");

var _App2 = _interopRequireDefault(_App);

var AppHooks = (function () {
    function AppHooks() {
        _classCallCheck(this, AppHooks);

        this._disposeFns = Object.create(null);
    }

    _createClass(AppHooks, [{
        key: "subscribe",
        value: function subscribe() {
            var _this = this;

            if (!Array.isArray(this.events)) {
                throw new Error("AppHooks must be provided with an array of events.");
            }
            this.events.forEach(function (event) {
                _this._disposeFns[event] = _App2["default"].events.on(event, _this._methodFor(event));
            });
            return this.onAppReady(); // Allow hook to return promise.
        }
    }, {
        key: "subscribeTo",
        value: function subscribeTo(event) {
            var _this2 = this;

            _App2["default"].events.once(event, function () {
                return _this2.subscribe();
            });
        }
    }, {
        key: "dispose",
        value: function dispose() {
            var _this3 = this;

            for (var _len = arguments.length, events = Array(_len), _key = 0; _key < _len; _key++) {
                events[_key] = arguments[_key];
            }

            events = events.length > 0 ? events : this.events;
            events.forEach(function (event) {
                _this3._disposeFns[event]();
            });
            this.onDispose(events);
        }

        // TEMPLATE methods.
    }, {
        key: "onAppReady",
        value: function onAppReady() {}
    }, {
        key: "onDispose",
        value: function onDispose() {}
    }, {
        key: "_methodFor",
        value: function _methodFor(event) {
            var nameOfMethod = event.split(".").reduce(function (name, eventPart) {
                return name + eventPart[0].toUpperCase() + eventPart.slice(1);
            }, "");
            return this["on" + nameOfMethod].bind(this);
        }

        // Expose decorator for mixing in events to subscribe to.
    }], [{
        key: "events",
        value: function events() {
            for (var _len2 = arguments.length, _events = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                _events[_key2] = arguments[_key2];
            }

            return function (target) {
                Object.defineProperty(target.prototype, "events", {
                    value: _events
                });
            };
        }
    }]);

    return AppHooks;
})();

exports["default"] = AppHooks;
module.exports = exports["default"];

},{"./App":6}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppWorkflows = (function () {
    function AppWorkflows() {
        _classCallCheck(this, AppWorkflows);
    }

    _createClass(AppWorkflows, [{
        key: "add",
        value: function add(workflow) {
            Object.defineProperty(this, workflow.name, {
                value: workflow,
                enumerable: true
            });
        }
    }]);

    return AppWorkflows;
})();

exports["default"] = AppWorkflows;
module.exports = exports["default"];

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _q = require("q");

var _q2 = _interopRequireDefault(_q);

var _iocSpecBuilder = require("./iocSpecBuilder");

function throwNotImplemented(nameOfMethod) {
    console.warn("[YepApp] " + nameOfMethod + " not implemented!");
}

var Bootstrapper = (function () {
    function Bootstrapper(components, delegate) {
        _classCallCheck(this, Bootstrapper);

        this._components = components;
        this._delegate = delegate;
        this._specs = (0, _iocSpecBuilder.iocSpecs)();
        this._container = null;
    }

    _createClass(Bootstrapper, [{
        key: "bootstrap",
        value: function bootstrap(onComplete) {
            var _this = this;

            this._onComplete = onComplete;
            return _q2["default"]["try"](function () {
                return _this._delegate.onBeforeBootstrapped(_this);
            }).then(function () {
                return _this._components.onBeforeAppBootstrapped(_this);
            }).then(function () {
                return _this._components.register(_this._specs);
            }).then(function () {
                return _this._components.onAppComponentsRegistered(_this);
            }).then(function () {
                return _this._delegate.onComponentsRegistered(_this);
            }).then(function () {
                return _this._specs.wire();
            }).then(this._complete.bind(this));
        }
    }, {
        key: "_complete",
        value: function _complete(container) {
            this._container = container;
            var providers = this._delegate.provide(container);
            var actions = this._delegate.createActions(this._actions);

            this._onComplete(actions, providers);
            this._components.onAppBootstrapped(container);
            this._delegate.onBootstrapped(container);
            return container;
        }
    }, {
        key: "register",
        value: function register(registration) {
            return this._specs.register(registration);
        }
    }, {
        key: "getComponent",
        value: function getComponent() {
            throwNotImplemented("getComponent");
        }
    }, {
        key: "bootstrapBefore",
        value: function bootstrapBefore() {
            throwNotImplemented("bootstrapBefore");
        }
    }, {
        key: "bootstrapAfter",
        value: function bootstrapAfter() {
            throwNotImplemented("bootstrapAfter");
        }
    }, {
        key: "specs",
        get: function get() {
            return this._specs;
        }
    }, {
        key: "container",
        get: function get() {
            return this._container;
        }
    }, {
        key: "_actions",
        get: function get() {
            return this._container.$actions;
        }
    }]);

    return Bootstrapper;
})();

exports["default"] = Bootstrapper;
module.exports = exports["default"];

},{"./iocSpecBuilder":31,"q":38}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _pubitAsPromised = require("pubit-as-promised");

var addDot = function addDot(s) {
    return s + ".";
};
var upperFirst = function upperFirst(s) {
    return s[0].toUpperCase() + s.slice(1);
};

var makeAppEv = function makeAppEv(prefix) {
    var prefixWithDot = function prefixWithDot(nameOfEv) {
        return addDot(prefix) + nameOfEv;
    };
    var prefixAndUpperFirst = function prefixAndUpperFirst(nameOfEv) {
        return prefix + upperFirst(nameOfEv);
    };
    return _underscore2["default"].contains(prefix, ".") ? prefixAndUpperFirst : prefixWithDot;
};

var EventBus = (function () {
    function EventBus() {
        _classCallCheck(this, EventBus);

        this.publish = (0, _pubitAsPromised.makeEmitter)(this);
    }

    _createClass(EventBus, [{
        key: "makeDualEmitter",
        value: function makeDualEmitter(publisher, _ref) {
            var _this = this;

            var events = _ref.events;
            var prefix = _ref.prefix;

            var localPublish = (0, _pubitAsPromised.makeEmitter)(publisher, events);
            var nameOfAppEv = makeAppEv(prefix);

            var dualPublish = function dualPublish() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var ev = args[0];
                var appArgs = args.slice(1);

                localPublish.apply(undefined, args);
                _this.publish.apply(_this, [nameOfAppEv(ev), publisher].concat(_toConsumableArray(appArgs)));
            };

            dualPublish.when = function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                var ev = args[0];
                var appArgs = args.slice(1);

                return localPublish.when.apply(localPublish, args).then(function () {
                    var _publish;

                    return (_publish = _this.publish).when.apply(_publish, [nameOfAppEv(ev), publisher].concat(_toConsumableArray(appArgs)));
                });
            };

            return dualPublish;
        }
    }]);

    return EventBus;
})();

exports["default"] = EventBus;
module.exports = exports["default"];

},{"pubit-as-promised":36,"underscore":39}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var Registry = (function () {
    function Registry(name) {
        _classCallCheck(this, Registry);

        this._name = name;

        for (var _len = arguments.length, objsToRegister = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            objsToRegister[_key - 1] = arguments[_key];
        }

        this._registry = objsToRegister;
    }

    _createClass(Registry, [{
        key: "register",
        value: function register(obj) {
            this._registry.push(obj);
        }
    }, {
        key: "lookup",
        value: function lookup(name) {
            return _underscore2["default"].findWhere(this._registry, { name: name });
        }
    }, {
        key: "lookupWhere",
        value: function lookupWhere(criteria) {
            var predicate = typeof criteria === "function" ? criteria : _underscore2["default"].partial(this._lookupMatch, criteria);
            var found = null;
            this._registry.some(function (candidate) {
                if (predicate(candidate)) {
                    found = candidate;
                    return true;
                }
            });
            return found;
        }
    }, {
        key: "has",
        value: function has(name) {
            return !!this.lookup(name);
        }
    }, {
        key: "all",
        value: function all() {
            return this._registry;
        }
    }, {
        key: "clear",
        value: function clear() {
            this.all().forEach(function (obj) {
                if (typeof obj.onRegistryRemoval === "function") {
                    obj.onRegistryRemoval();
                }
            });
            this._registry = [];
        }
    }, {
        key: "_lookupMatch",
        value: function _lookupMatch(criteria, candidateInRegistry) {
            return candidateInRegistry.isMatchFor(criteria);
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }
    }]);

    return Registry;
})();

exports["default"] = Registry;
module.exports = exports["default"];

},{"underscore":39}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

exports.inject = inject;
exports.logger = logger;
exports.emitter = emitter;
exports.component = component;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _pubitAsPromised = require("pubit-as-promised");

var _App = require("./App");

var _App2 = _interopRequireDefault(_App);

var _Registry = require("./Registry");

var _Registry2 = _interopRequireDefault(_Registry);

// We can use a registry for the spec config.

function inject() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return function (target) {
        target.inject = args; // Provide IOC framework with a place to find out what to inject.
    };
}

var makePropInject = function makePropInject(getPropTarget) {
    return function () {
        for (var _len2 = arguments.length, nameOfRoles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            nameOfRoles[_key2] = arguments[_key2];
        }

        var roles = nameOfRoles.map(function (nameOfRole) {
            var property;
            if (Array.isArray(nameOfRole)) {
                var _nameOfRole = nameOfRole;

                var _nameOfRole2 = _slicedToArray(_nameOfRole, 2);

                nameOfRole = _nameOfRole2[0];
                property = _nameOfRole2[1];
            } else {
                property = nameOfRole;
            }
            return { property: property, nameOfRole: nameOfRole };
        });
        return function (target) {
            target = getPropTarget(target);
            roles.forEach(function (_ref) {
                var property = _ref.property;
                var nameOfRole = _ref.nameOfRole;

                Object.defineProperty(target, property, {
                    get: function get() {
                        return _App2["default"].instance().bootstrapper.container[nameOfRole];
                    }
                });
            });
        };
    };
};

var propInject = makePropInject(function (target) {
    return target.prototype;
});
exports.propInject = propInject;
var staticPropInject = makePropInject(function (target) {
    return target;
});

exports.staticPropInject = staticPropInject;

function logger(ns) {
    return function (target) {
        Object.defineProperty(target.prototype, "logger", {
            get: function get() {
                return _App2["default"].logger(ns);
            }
        });
    };
}

// Create an emitter for an object via `pubit-as-promised`

var localEmitter = function localEmitter(publisher, _ref2) {
    var events = _ref2.events;
    return (0, _pubitAsPromised.makeEmitter)(publisher, events);
};
var dualEmitter = function dualEmitter(publisher, opts) {
    return _App2["default"].events.makeDualEmitter(publisher, opts);
};

function emitter(events) {
    var _ref3 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var appPrefix = _ref3.appPrefix;

    var createEmitter = appPrefix ? dualEmitter : localEmitter;
    return function (target) {
        target.prototype._emitter = function () {
            return createEmitter(this, { events: events, prefix: appPrefix });
        };
    };
}

var specConfigs = Object.create(null);

function component(name) {
    var metadata = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return function (target) {
        metadata.name = name;
        Object.defineProperty(target.prototype, "metadata", {
            get: function get() {
                return metadata;
            }
        });
        Object.defineProperty(target.prototype, "config", {
            get: function get() {
                return _App2["default"].config;
            }
        });
        target.prototype.createSpecConfig = function (name) {
            return this.addSpecConfig(new _Registry2["default"](name));
        };
        target.prototype.addSpecConfig = function (config) {
            specConfigs[config.name] = config;
            return config;
        };
        target.prototype.specConfig = function (name) {
            return specConfigs[name];
        };
    };
}

},{"./App":6,"./Registry":14,"pubit-as-promised":36}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _SpecFromClass2 = require("./SpecFromClass");

var _SpecFromClass3 = _interopRequireDefault(_SpecFromClass2);

var ActionSpec = (function (_SpecFromClass) {
    _inherits(ActionSpec, _SpecFromClass);

    function ActionSpec() {
        _classCallCheck(this, ActionSpec);

        var name;
        var Action;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (args.length === 2) {
            name = args[0];
            Action = args[1];
        } else {
            Action = args[0];

            name = Action.prototype.componentName;
        }

        _get(Object.getPrototypeOf(ActionSpec.prototype), "constructor", this).call(this, name, Action);
    }

    _createClass(ActionSpec, [{
        key: "_onConfigCreated",
        value: function _onConfigCreated(config) {
            _get(Object.getPrototypeOf(ActionSpec.prototype), "_onConfigCreated", this).call(this, config);
            config.extend({ action: this._roles.toSpecKeys() });
        }
    }]);

    return ActionSpec;
})(_SpecFromClass3["default"]);

exports["default"] = ActionSpec;
module.exports = exports["default"];

},{"./SpecFromClass":22}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _SpecRegistration = require("./SpecRegistration");

var _SpecRegistration2 = _interopRequireDefault(_SpecRegistration);

var CondSpecs = (function () {
    function CondSpecs(cond) {
        _classCallCheck(this, CondSpecs);

        this._isTrue = Boolean(typeof cond === "function" ? cond() : cond);
        this._specGroup = null;
    }

    _createClass(CondSpecs, [{
        key: "whenTrue",
        value: function whenTrue() {
            if (this._isTrue) {
                for (var _len = arguments.length, specs = Array(_len), _key = 0; _key < _len; _key++) {
                    specs[_key] = arguments[_key];
                }

                this._specGroup = new (_bind.apply(_SpecRegistration2["default"], [null].concat(specs)))();
            }
            return this;
        }
    }, {
        key: "whenFalse",
        value: function whenFalse() {
            if (!this._isTrue) {
                for (var _len2 = arguments.length, specs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    specs[_key2] = arguments[_key2];
                }

                this._specGroup = new (_bind.apply(_SpecRegistration2["default"], [null].concat(specs)))();
            }
            return this;
        }
    }, {
        key: "writeTo",
        value: function writeTo(config) {
            if (this._specGroup) {
                this._specGroup.writeTo(config);
            }
        }
    }]);

    return CondSpecs;
})();

exports["default"] = CondSpecs;
module.exports = exports["default"];

},{"./SpecRegistration":26}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfigMod = (function () {
    function ConfigMod(updateConfig) {
        _classCallCheck(this, ConfigMod);

        this._update = updateConfig;
    }

    _createClass(ConfigMod, [{
        key: "writeTo",
        value: function writeTo(config) {
            this._update(config);
        }
    }]);

    return ConfigMod;
})();

exports["default"] = ConfigMod;
module.exports = exports["default"];

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var CreateConfig = (function () {
    function CreateConfig(_ref) {
        var fn = _ref.fn;
        var args = _ref.args;
        var isConstructor = _ref.isConstructor;
        var opts = _ref.opts;

        _classCallCheck(this, CreateConfig);

        this._fn = fn;
        this._args = args;
        this._opts = opts || {};
        this.isConstructor = !!isConstructor;
    }

    _createClass(CreateConfig, [{
        key: "extend",
        value: function extend(opts) {
            _underscore2["default"].extend(this._opts, opts);
        }
    }, {
        key: "value",
        get: function get() {
            return _underscore2["default"].extend({
                create: {
                    module: this._fn,
                    args: this._args,
                    isConstructor: this.isConstructor
                }
            }, this._opts);
        }
    }]);

    return CreateConfig;
})();

exports["default"] = CreateConfig;
module.exports = exports["default"];

},{"underscore":39}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _SpecFromClass2 = require("./SpecFromClass");

var _SpecFromClass3 = _interopRequireDefault(_SpecFromClass2);

var count = 0;

var HooksSpec = (function (_SpecFromClass) {
    _inherits(HooksSpec, _SpecFromClass);

    function HooksSpec(Hooks) {
        _classCallCheck(this, HooksSpec);

        _get(Object.getPrototypeOf(HooksSpec.prototype), "constructor", this).call(this, "$hooks_" + count++, Hooks);
        this._specKey = count;
    }

    _createClass(HooksSpec, [{
        key: "_onConfigCreated",
        value: function _onConfigCreated(config) {
            _get(Object.getPrototypeOf(HooksSpec.prototype), "_onConfigCreated", this).call(this, config);
            config.extend({
                init: { subscribeTo: "app.ready" }
            });
        }
    }, {
        key: "specKey",
        get: function get() {
            return this._specKey;
        }
    }]);

    return HooksSpec;
})(_SpecFromClass3["default"]);

exports["default"] = HooksSpec;
module.exports = exports["default"];

},{"./SpecFromClass":22}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Registry = require("../Registry");

var _Registry2 = _interopRequireDefault(_Registry);

var _SpecFromClass = require("./SpecFromClass");

var _SpecFromClass2 = _interopRequireDefault(_SpecFromClass);

var RegistrySpec = (function () {
    function RegistrySpec(configSpec, CustomRegistry) {
        _classCallCheck(this, RegistrySpec);

        this._registry = configSpec;
        this._spec = new _SpecFromClass2["default"](configSpec.name, CustomRegistry || _Registry2["default"]);
    }

    _createClass(RegistrySpec, [{
        key: "writeTo",
        value: function writeTo(config) {
            var _spec;

            (_spec = this._spec).setAllArgs.apply(_spec, [this._registry.name].concat(_toConsumableArray(this._registry.all())));
            this._spec.writeTo(config);
        }
    }]);

    return RegistrySpec;
})();

exports["default"] = RegistrySpec;
module.exports = exports["default"];

},{"../Registry":14,"./SpecFromClass":22}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _SpecFromFn2 = require("./SpecFromFn");

var _SpecFromFn3 = _interopRequireDefault(_SpecFromFn2);

// Currently no need to implement constructor.
// Done simply for documentation purposes.

var SpecFromClass = (function (_SpecFromFn) {
    _inherits(SpecFromClass, _SpecFromFn);

    function SpecFromClass(roleNames, ImplementationClass) {
        _classCallCheck(this, SpecFromClass);

        _get(Object.getPrototypeOf(SpecFromClass.prototype), "constructor", this).call(this, roleNames, ImplementationClass);
    }

    _createClass(SpecFromClass, [{
        key: "_onConfigCreated",
        value: function _onConfigCreated(config) {
            config.isConstructor = true;
        }
    }]);

    return SpecFromClass;
})(_SpecFromFn3["default"]);

exports["default"] = SpecFromClass;
module.exports = exports["default"];

},{"./SpecFromFn":23}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _CreateConfig = require("./CreateConfig");

var _CreateConfig2 = _interopRequireDefault(_CreateConfig);

var _SpecRoles = require("./SpecRoles");

var _SpecRoles2 = _interopRequireDefault(_SpecRoles);

var SpecFromFn = (function () {
    function SpecFromFn(roles, fn) {
        _classCallCheck(this, SpecFromFn);

        this._roles = new _SpecRoles2["default"](roles);
        this._fn = fn;
        this._argsToOverride = [];
    }

    // Mmm sugar.

    _createClass(SpecFromFn, [{
        key: "writeTo",
        value: function writeTo(config) {
            config[this.specKey] = this._createConfig().value;
            this._roles.writeAliasesTo(config);
        }
    }, {
        key: "setArg",
        value: function setArg(index, value) {
            this._argsToOverride.push({ index: index, value: value });
            return this;
        }
    }, {
        key: "setAllArgs",
        value: function setAllArgs() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this._argsToOverride = args.map(function (value, index) {
                return { index: index, value: value };
            });
            return this;
        }
    }, {
        key: "_createConfig",
        value: function _createConfig() {
            var config = new _CreateConfig2["default"]({
                fn: this._fn,
                args: this.specArgs,
                isConstructor: false
            });

            return this._onConfigCreated(config) || config; // Allow sub class to create brand new cfg.
        }

        // Template method.
    }, {
        key: "_onConfigCreated",
        value: function _onConfigCreated() /* config: SpecConfig */{}
    }, {
        key: "_fnArgs",
        value: function _fnArgs() {
            var args = [];
            if (Array.isArray(this._fn.inject)) {
                args = this._fn.inject.map(function (id) {
                    return { $ref: id };
                });
            }
            return args;
        }
    }, {
        key: "specKey",
        get: function get() {
            return this._roles.specKey;
        }
    }, {
        key: "specArgs",
        get: function get() {
            var args = this._fnArgs();
            this._argsToOverride.forEach(function (override) {
                args[override.index] = override.value;
            });
            return args;
        }
    }]);

    return SpecFromFn;
})();

exports["default"] = SpecFromFn;
var sugarMethods = ["setFirstArg", "setSecondArg", "setThirdArg", "setFourthArg"];
sugarMethods.forEach(function (method, index) {
    SpecFromFn.prototype[method] = _underscore2["default"].partial(SpecFromFn.prototype.setArg, index);
});
module.exports = exports["default"];

},{"./CreateConfig":19,"./SpecRoles":27,"underscore":39}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _SpecRoles = require("./SpecRoles");

var _SpecRoles2 = _interopRequireDefault(_SpecRoles);

var SpecFromValue = (function () {
    function SpecFromValue(roles, literalValue) {
        _classCallCheck(this, SpecFromValue);

        this._roles = new _SpecRoles2["default"](roles);
        this._literal = literalValue;
    }

    _createClass(SpecFromValue, [{
        key: "writeTo",
        value: function writeTo(config) {
            config[this.specKey] = {
                literal: this._literal
            };
            this._roles.writeAliasesTo(config);
        }
    }, {
        key: "specKey",
        get: function get() {
            return this._roles.specKey;
        }
    }]);

    return SpecFromValue;
})();

exports["default"] = SpecFromValue;
module.exports = exports["default"];

},{"./SpecRoles":27}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecRef = function SpecRef(referenceName) {
    _classCallCheck(this, SpecRef);

    return { $ref: referenceName };
};

exports["default"] = SpecRef;
module.exports = exports["default"];

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecRegistration = (function () {
    function SpecRegistration() {
        _classCallCheck(this, SpecRegistration);

        for (var _len = arguments.length, specs = Array(_len), _key = 0; _key < _len; _key++) {
            specs[_key] = arguments[_key];
        }

        this._specs = specs;
    }

    _createClass(SpecRegistration, [{
        key: "writeTo",
        value: function writeTo(config) {
            this._specs.forEach(function (spec) {
                return spec.writeTo(config);
            });
        }
    }]);

    return SpecRegistration;
})();

exports["default"] = SpecRegistration;
module.exports = exports["default"];

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _CreateConfig = require("./CreateConfig");

var _CreateConfig2 = _interopRequireDefault(_CreateConfig);

var _SpecRef = require("./SpecRef");

var _SpecRef2 = _interopRequireDefault(_SpecRef);

var SpecRole = (function () {
    function SpecRole(role) {
        _classCallCheck(this, SpecRole);

        this._role = role;
    }

    /**
     * @param  {string|Array} roleNames
     */

    _createClass(SpecRole, [{
        key: "toString",
        value: function toString() {
            return this._role;
        }
    }, {
        key: "specKey",
        get: function get() {
            return this._role;
        }
    }]);

    return SpecRole;
})();

var SpecRoles = (function () {
    function SpecRoles(names) {
        _classCallCheck(this, SpecRoles);

        names = Array.isArray(names) ? names : [names];
        this._roles = names.map(function (role) {
            return new SpecRole(role);
        });
    }

    _createClass(SpecRoles, [{
        key: "writeAliasesTo",
        value: function writeAliasesTo(config) {
            var _this = this;

            // RETURN EARLY if no secondary roles. Nothing to alias.
            if (this._roles.length === 1) {
                return;
            }
            _underscore2["default"].extend(config, _underscore2["default"].object(this.secondaryRoles.map(function (role) {
                return [role.specKey, new _CreateConfig2["default"]({
                    fn: _underscore2["default"].identity,
                    args: [new _SpecRef2["default"](_this.primaryRole.specKey)]
                }).value];
            })));
        }
    }, {
        key: "toSpecKeys",
        value: function toSpecKeys() {
            return this._roles.map(function (role) {
                return role.specKey;
            });
        }
    }, {
        key: "specKey",
        get: function get() {
            return this.primaryRole.specKey;
        }
    }, {
        key: "primaryRole",
        get: function get() {
            return this._roles[0];
        }
    }, {
        key: "secondaryRoles",
        get: function get() {
            return this._roles.slice(1);
        }
    }]);

    return SpecRoles;
})();

exports["default"] = SpecRoles;
module.exports = exports["default"];

},{"./CreateConfig":19,"./SpecRef":25,"underscore":39}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecWithConfigMod = (function () {
    function SpecWithConfigMod(spec, updateConfig) {
        _classCallCheck(this, SpecWithConfigMod);

        this._spec = spec;
        this._updateConfig = updateConfig;
    }

    _createClass(SpecWithConfigMod, [{
        key: "writeTo",
        value: function writeTo(config) {
            this._spec.writeTo(config);
            this._updateConfig(config[this._spec.specKey], this._spec);
        }
    }]);

    return SpecWithConfigMod;
})();

exports["default"] = SpecWithConfigMod;
module.exports = exports["default"];

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
         value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _SpecRegistration = require("./SpecRegistration");

var _SpecRegistration2 = _interopRequireDefault(_SpecRegistration);

var _CondSpecs = require("./CondSpecs");

var _CondSpecs2 = _interopRequireDefault(_CondSpecs);

var _SpecFromFn = require("./SpecFromFn");

var _SpecFromFn2 = _interopRequireDefault(_SpecFromFn);

var _SpecFromClass = require("./SpecFromClass");

var _SpecFromClass2 = _interopRequireDefault(_SpecFromClass);

var _SpecFromValue = require("./SpecFromValue");

var _SpecFromValue2 = _interopRequireDefault(_SpecFromValue);

var _ConfigMod = require("./ConfigMod");

var _ConfigMod2 = _interopRequireDefault(_ConfigMod);

var _SpecWithConfigMod = require("./SpecWithConfigMod");

var _SpecWithConfigMod2 = _interopRequireDefault(_SpecWithConfigMod);

var _ActionSpec = require("./ActionSpec");

var _ActionSpec2 = _interopRequireDefault(_ActionSpec);

var _HooksSpec = require("./HooksSpec");

var _HooksSpec2 = _interopRequireDefault(_HooksSpec);

var _RegistrySpec = require("./RegistrySpec");

var _RegistrySpec2 = _interopRequireDefault(_RegistrySpec);

var _SpecRef = require("./SpecRef");

var _SpecRef2 = _interopRequireDefault(_SpecRef);

var SpecGroup = _SpecRegistration2["default"]; // Alias for semantics.

exports.SpecRegistration = _SpecRegistration2["default"];
exports.SpecGroup = SpecGroup;
exports.CondSpecs = _CondSpecs2["default"];
exports.SpecRef = _SpecRef2["default"];
exports.SpecFromFn = _SpecFromFn2["default"];
exports.SpecFromClass = _SpecFromClass2["default"];
exports.SpecFromValue = _SpecFromValue2["default"];
exports.ConfigMod = _ConfigMod2["default"];
exports.SpecWithConfigMod = _SpecWithConfigMod2["default"];
exports.ActionSpec = _ActionSpec2["default"];
exports.HooksSpec = _HooksSpec2["default"];
exports.RegistrySpec = _RegistrySpec2["default"];

},{"./ActionSpec":16,"./CondSpecs":17,"./ConfigMod":18,"./HooksSpec":20,"./RegistrySpec":21,"./SpecFromClass":22,"./SpecFromFn":23,"./SpecFromValue":24,"./SpecRef":25,"./SpecRegistration":26,"./SpecWithConfigMod":28}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports["default"] = yepAppWirePlugin;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionFacet = (function () {
    function ActionFacet() {
        _classCallCheck(this, ActionFacet);

        this._actions = {};
    }

    _createClass(ActionFacet, [{
        key: "create",
        value: function create(resolver, proxy) {
            var _this = this;

            var namesForAction = proxy.options;
            var action = proxy.target;

            namesForAction.forEach(function (name) {
                _this.actions[name] = action;
            });

            resolver.resolve();
        }
    }, {
        key: "actions",
        get: function get() {
            return this._actions;
        }
    }]);

    return ActionFacet;
})();

function yepAppWirePlugin() {
    var actionFacet = new ActionFacet();

    return {
        context: {
            ready: function ready(resolver, wire) {
                wire.addComponent(actionFacet.actions, "$actions");
                resolver.resolve();
            }
        },
        facets: {
            action: actionFacet
        }
    };
}

module.exports = exports["default"];

},{}],31:[function(require,module,exports){
/*jshint newcap: false */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _bind = Function.prototype.bind;
exports.config = config;
exports.iocSpecs = iocSpecs;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _q = require("q");

var _q2 = _interopRequireDefault(_q);

var _wire = require("wire");

var _wire2 = _interopRequireDefault(_wire);

var _diWirePlugin = require("./di/wirePlugin");

var _diWirePlugin2 = _interopRequireDefault(_diWirePlugin);

var _di = require("./di");

function mapArgs(func) {
    return func.inject.map(function (id) {
        return {
            $ref: id
        };
    });
}

// Looks at a list of dependencies and returns a new list by not including `Opts`.
function createDependenciesWithoutOptsFrom(inject) {
    return inject.filter(function (dependency) {
        return !/Opt$/.test(dependency);
    });
}

// Creates a list of resolved dependencies by checking if the dependency is first an option.
// If it's not, pull from the already resolved dependencies provided by the factory.
function createArgsWithOptsForInstance(Component, factoryArgs, options) {
    var resolvedDependencies = factoryArgs.slice();

    return Component.inject.map(function (dependency) {
        if (/Opt$/.test(dependency)) {
            // We have an option, look up in options hash.
            var argName = dependency.replace(/Opt$/, "");
            if (argName in options) {
                return options[argName];
            } else {
                throw new Error("Can not resolve dependency: " + dependency);
            }
        } else {
            // This dependency was already resolved by the component's factory
            return resolvedDependencies.shift();
        }
    });
}

function createFactoryFor(Component, specOpts) {
    function componentFactory() {
        var factoryArgs = [].slice.apply(arguments);

        return function (options) {
            var component;
            var instanceArgs = createArgsWithOptsForInstance(Component, factoryArgs, options);
            instanceArgs.push(options); // Push the entire opts as last argument for config components.

            if (specOpts.isConstructor) {
                component = Object.create(Component.prototype);
                Component.apply(component, instanceArgs);
            } else {
                component = Component.apply(null, instanceArgs);
            }
            return component;
        };
    }

    var inject = Component.inject;
    if (Array.isArray(inject)) {
        inject = createDependenciesWithoutOptsFrom(inject);
    }

    componentFactory.inject = inject;
    return componentFactory;
}

function config(component, options) {
    options = options || {};
    var args;

    if ("args" in options) {
        args = options.args;
    } else if (typeof component === "function" && Array.isArray(component.inject)) {
        args = mapArgs(component);
    } else {
        args = [];
    }

    var type = "type" in options ? options.type : "create";
    var spec = {};

    if (type === "literal" || type === "module") {
        spec[type] = component;
    } else {
        spec[type] = {
            module: component,
            args: args,
            isConstructor: "isConstructor" in options ? options.isConstructor : true
        };
    }

    return spec;
}

function iocSpecs() {
    var that = {};

    var providerPlugins = {};

    var specs = {
        $plugins: [_diWirePlugin2["default"]]
    };

    function addProviderFor(key, provider) {
        if (!providerPlugins[key]) {
            providerPlugins[key] = [];
        }

        providerPlugins[key].push(provider);
    }

    function provideHook(key) {
        if (Array.isArray(providerPlugins[key])) {
            providerPlugins[key].forEach(function (plugin) {
                return plugin(specs[key]);
            });
        }
    }

    function specFactory(options) {
        return function (key, component, callback) {
            var aliasKeys;
            if (Array.isArray(key)) {
                var _key = key;

                var _key2 = _toArray(_key);

                key = _key2[0];
                aliasKeys = _key2.slice(1);
            }
            if ("isConstructor" in options && /UIFactory$/.test(key)) {
                component = createFactoryFor(component, options);
            }
            specs[key] = config(component, options);

            if (typeof callback === "function") {
                callback(specs[key]);
            }

            if (aliasKeys) {
                aliasKeys.forEach(_underscore2["default"].partial(that.alias, _underscore2["default"], key));
            }

            provideHook(key);
            return that;
        };
    }

    // Use brand new spec api v2

    var specApi2 = function specApi2(Spec) {
        return function () {
            for (var _len = arguments.length, args = Array(_len), _key3 = 0; _key3 < _len; _key3++) {
                args[_key3] = arguments[_key3];
            }

            var spec = new (_bind.apply(Spec, [null].concat(args)))();
            spec.writeTo(specs);

            if (args.length > 2 && typeof args[args.length - 1] === "function") {
                var cb = args[args.length - 1];
                cb(specs[spec.specKey]);
            }
            return that;
        };
    };

    that.creator = specApi2(_di.SpecFromClass);

    that.factory = specApi2(_di.SpecFromFn);

    that.literal = specApi2(_di.SpecFromValue);

    that.action = specApi2(_di.ActionSpec);

    // End api v2

    that.module = specFactory({ type: "module" });

    that.alias = function (aliasKey, aliasFor) {
        return that.factory(aliasKey, function (instanceToAlias) {
            return instanceToAlias;
        }, function (spec) {
            spec.create.args[0] = { $ref: aliasFor };
        });
    };

    that.custom = function (key, options) {
        specs[key] = options;
        provideHook(key);

        return that;
    };

    that.provideFor = function (key, provider) {
        addProviderFor(key, provider);

        if (specs[key]) {
            provideHook(key);
        }
    };

    that.spec = function (partialSpec) {
        partialSpec(that);
        return that;
    };

    that.register = function (registration) {
        return registration.writeTo(specs);
    };

    that.wire = function () {
        return (0, _q2["default"])((0, _wire2["default"])(specs));
    };

    that.wireAsChildOf = function (parentContainer) {
        return (0, _q2["default"])(parentContainer.wire(specs));
    };

    return that;
}

},{"./di":29,"./di/wirePlugin":30,"q":38,"underscore":39,"wire":93}],32:[function(require,module,exports){
/*jshint ignore: start */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _App = require("../App");

var _App2 = _interopRequireDefault(_App);

var _decorators = require("../decorators");

var UncaughtErrors = (function () {
    function UncaughtErrors() {
        _classCallCheck(this, _UncaughtErrors);
    }

    _createClass(UncaughtErrors, [{
        key: "handleUncaughtError",
        value: function handleUncaughtError(error) {
            this._logAndPublishError(error, "Uncaught");
        }
    }, {
        key: "handleSystemError",
        value: function handleSystemError(error) {
            var type = arguments.length <= 1 || arguments[1] === undefined ? "System" : arguments[1];

            this._logAndPublishError(this._createPresentedError(error), type);
        }
    }, {
        key: "handleActionError",
        value: function handleActionError(error) {
            this.handleSystemError(error, "Action");
        }
    }, {
        key: "_logAndPublishError",
        value: function _logAndPublishError(error, type) {
            this.logger.info("Handling: " + type + " error.");
            _App2["default"].events.publish("error.uncaughtErrorHandled", error);
        }
    }, {
        key: "_createPresentedError",
        value: function _createPresentedError(error) {
            throw new Error("`_createPresentedError` has not been implemented.");
        }
    }]);

    var _UncaughtErrors = UncaughtErrors;
    UncaughtErrors = (0, _decorators.logger)("Uncaught")(UncaughtErrors) || UncaughtErrors;
    return UncaughtErrors;
})();

exports["default"] = UncaughtErrors;
module.exports = exports["default"];

},{"../App":6,"../decorators":15}],33:[function(require,module,exports){
(function (process){
"use strict";

var Q = require("q");
var dict = require("dict");
var emitter = require("./emitter");

function normalizeOptions(options) {
    if (typeof options !== "object" || options === null) {
        throw new TypeError("options argument must be an object or array of events.");
    }

    if (Array.isArray(options)) {
        options = { events: options };
    }

    if (options.onListenerError === undefined) {
        options.onListenerError = function (error) {
            process.nextTick(function () {
                throw error;
            });
        };
    }

    if (typeof options.onListenerError !== "function") {
        throw new TypeError("options.onListenerError must be an object.");
    }

    if (options.events !== undefined && !Array.isArray(options.events)) {
        throw new TypeError("options.events must be an array.");
    }

    return options;
}

var slice = Function.prototype.call.bind(Array.prototype.slice);

module.exports = function Publisher(options) {
    var that = this;

    var normalListeners = dict();
    var oneTimeListeners = dict();
    var matchListeners = dict();
    var regExpHash = {};

    if (options === undefined) {
        options = {};
    }
    options = normalizeOptions(options);

    function callListenersForSync(callListener, args, listeners) {
        var values = [];
        listeners.forEach(function (listener) {
            values.push(callListener(listener, args));
        });
        return values;
    }

    function callListenersForAsync(callListener, args, listeners) {
        process.nextTick(function () {
            callListenersForSync(callListener, args, listeners);
        });
    }

    function publishCommon(callListener, callListenersFor, eventName) {
        if (typeof eventName !== "string") {
            throw new TypeError("eventName argument must be a string.");
        }
        if (options.events && options.events.indexOf(eventName) === -1) {
            throw new Error("Tried to publish an unknown event \"" + eventName + "\".");
        }

        var args = slice(arguments, 3);
        var listeners = [];

        // .slice() is important to deal with self-unsubscribing listeners
        if (normalListeners.has(eventName)) {
            listeners = listeners.concat(normalListeners.get(eventName).slice());
        }
        if (oneTimeListeners.has(eventName)) {
            listeners = listeners.concat(oneTimeListeners.get(eventName).slice());
            oneTimeListeners.delete(eventName);
        }
        // Loop through all unique patterns, testing eventName again the RegExp pattern.
        // Once fond, the inner loop binds each function, adding the eventName parameter.
        matchListeners.forEach(function (matchListeners, key) {
            if (eventName.match(regExpHash[key])) {
                matchListeners.forEach(function (matchListener) {
                    listeners.push(matchListener.bind(null, eventName)); // A matchListener is expecting the event name.
                });
            }
        });
        return callListenersFor(callListener, args, listeners);
    }

    that.publish = function () {
        var publishArgs = slice(arguments, 0);

        function callListener(listener, args) {
            try {
                listener.apply(null, args);
            } catch (e) {
                var onErrorArgs = [e].concat(publishArgs);
                options.onListenerError.apply(null, onErrorArgs);
            }
        }

        var callListenersFor = options.async ? callListenersForAsync : callListenersForSync;
        var args = [callListener, callListenersFor].concat(publishArgs);
        publishCommon.apply(null, args);
    };

    that.publish.when = function () {
        function callListener(listener, args) {
            try {
                return Q.when(listener.apply(null, args));
            } catch (e) {
                return Q.reject(e);
            }
        }
        var args = [callListener, callListenersForSync].concat(slice(arguments, 0));
        var promises = publishCommon.apply(null, args);
        return Q.all(promises);
    };

    that.emitter = emitter(normalListeners, oneTimeListeners, matchListeners, regExpHash, options.events);
};

}).call(this,require('_process'))
},{"./emitter":34,"_process":95,"dict":37,"q":38}],34:[function(require,module,exports){
"use strict";

function isHash(unknown) {
    return typeof unknown === "object" && unknown !== null;
}

function escapeMetaCharacters(re) {
    "\\^$.|?*+()[{".split("").forEach(function (char) {
        re = re.replace(new RegExp("\\" + char, "g"), "\\" + char);
    });
    return re;
}

// Converts a wildcard string to a RegExp escaping "metacharacters".
// ex: "*" becomes "^.*$"
//     "ui.*" becomes "^ui\..*$"
function wildStringToRegExp(wildStr) {
    var startsWild = "";
    var endsWild = "";
    if (wildStr[0] === "*") { // Starts with a `*`?
        startsWild = ".*";
        wildStr = wildStr.substr(1);
    }
    if (wildStr[wildStr.length-1] === "*") { // Ends with a `*`?
        endsWild = ".*";
        wildStr = wildStr.substr(0, wildStr.length-1);
    }
    var r = "^" + startsWild + escapeMetaCharacters(wildStr) + endsWild + "$";
    return new RegExp(r);
}

var SEPARATOR = " ";

module.exports = function emitter(normalListeners, oneTimeListeners, matchListeners, regExpHash, events) {

    function subscribeSingleListener(eventName, listener, listeners) {
        if (!listeners.has(eventName)) {
            listeners.set(eventName, []);
        }

        listeners.get(eventName).push(listener);

        return function unsubscribe() {
            unsubscribeSingleListener(eventName, listener, listeners);
        };
    }

    function validateAndSubscribeSingleListener(eventName, listener, listeners) {
        if (events && events.indexOf(eventName) === -1) {
            throw new Error("Tried to subscribe to an unknown event \"" + eventName + "\".");
        }
        return subscribeSingleListener(eventName, listener, listeners);
    }

    function subscribeMultipleListeners(hash, listeners) {
        Object.keys(hash).forEach(function (eventName) {
            validateAndSubscribeSingleListener(eventName, hash[eventName], listeners);
        });
        return function unsubscribe() {
            unsubscribeMultipleListeners(hash, listeners);
        };
    }

    function unsubscribeSingleListener(eventName, listener, listeners) {
        var listenersArray = listeners.get(eventName, []);

        var index = listenersArray.indexOf(listener);
        if (index !== -1) {
            listenersArray.splice(index, 1);
        }
    }

    function unsubscribeMultipleListeners(hash, listeners) {
        Object.keys(hash).forEach(function (eventName) {
            unsubscribeSingleListener(eventName, hash[eventName], listeners);
        });
    }

    function unsubscribeAllListeners(eventName, listeners) {
        listeners.delete(eventName);
    }

    function onImpl(eventNameOrHash, listener, listeners) {
        if (listener === undefined) {
            if (!isHash(eventNameOrHash)) {
                throw new TypeError("hash argument must be a string-to-function hash.");
            }

            return subscribeMultipleListeners(eventNameOrHash, listeners);
        } else {
            if (typeof eventNameOrHash !== "string") {
                throw new TypeError("eventName argument must be a string.");
            }
            if (typeof listener !== "function") {
                throw new TypeError("listener argument must be a function.");
            }

            var unsubscribers = eventNameOrHash.split(SEPARATOR)
            .map(function (eventName) {
                return validateAndSubscribeSingleListener(eventName, listener, listeners);
            });

            return function unsubscribe() {
                unsubscribers.forEach(function (unsubscribe) {
                    unsubscribe();
                });
            };
        }
    }

    function once(eventNameOrHash, listener) {
        return onImpl(eventNameOrHash, listener, oneTimeListeners);
    }

    return {
        on: function (eventNameOrHash, listener) {
            return onImpl(eventNameOrHash, listener, normalListeners);
        },
        onNext: once,
        once: once,
        onMatch: function (eventPattern, listener) {
            var regExp;
            if (typeof eventPattern === "string") {
                regExp = wildStringToRegExp(eventPattern);
            } else if (eventPattern instanceof RegExp) {
                regExp = eventPattern;
            } else {
                throw new TypeError("eventPattern must be a string or a RegExp");
            }

            var key = regExp.toString(); // Save the RegExp.
            regExpHash[key] = regExp;

            return subscribeSingleListener(key, listener, matchListeners);
        },
        off: function (eventNameOrHash, listener) {
            if (typeof eventNameOrHash === "string") {
                if (typeof listener === "undefined") {
                    eventNameOrHash.split(SEPARATOR).forEach(function (eventName) {
                        unsubscribeAllListeners(eventName, normalListeners);
                        unsubscribeAllListeners(eventName, oneTimeListeners);
                    });
                } else if (typeof listener === "function") {
                    eventNameOrHash.split(SEPARATOR).forEach(function (eventName) {
                        unsubscribeSingleListener(eventName, listener, normalListeners);
                        unsubscribeSingleListener(eventName, listener, oneTimeListeners);
                    });
                } else {
                    throw new TypeError("listener argument must be a function.");
                }
            } else if (isHash(eventNameOrHash)) {
                unsubscribeMultipleListeners(eventNameOrHash, normalListeners);
                unsubscribeMultipleListeners(eventNameOrHash, oneTimeListeners);
            } else {
                if (arguments.length === 2) {
                    throw new TypeError("eventName argument must be a string.");
                } else {
                    throw new TypeError("eventNameOrHash argument must be a string or string-to-function hash.");
                }
            }
        }
    };
};

},{}],35:[function(require,module,exports){
(function (process){
"use strict";

exports.throttledListener = function (aggregateListener, waitingPeriod, asap) {
    var pendingTimeout = null;
    var aggregateArgs = [];
    var asapCallHappened = false;

    function onWaitingPeriodElapsed() {
        aggregateListener.call(null, aggregateArgs);
        pendingTimeout = null;
        aggregateArgs = [];
    }

    return function () {
        aggregateArgs.push(arguments[0]);

        if (!pendingTimeout) {
            if (asap && !asapCallHappened) {
                process.nextTick(onWaitingPeriodElapsed);
                asapCallHappened = true;
            } else {
                pendingTimeout = setTimeout(onWaitingPeriodElapsed, waitingPeriod);
            }
        }
    };
};

exports.debouncedListener = function (aggregateListener, waitingPeriod, asap) {
    var pendingTimeout = null;
    var aggregateArgs = [];
    var asapCallHappened = false;

    function onWaitingPeriodElapsed() {
        aggregateListener.call(null, aggregateArgs);
        pendingTimeout = null;
        aggregateArgs = [];
    }

    return function () {
        aggregateArgs.push(arguments[0]);

        if (asap && !asapCallHappened) {
            process.nextTick(onWaitingPeriodElapsed);
            asapCallHappened = true;
        } else {
            clearTimeout(pendingTimeout);
            pendingTimeout = setTimeout(onWaitingPeriodElapsed, waitingPeriod);
        }
    };
};

}).call(this,require('_process'))
},{"_process":95}],36:[function(require,module,exports){
"use strict";

exports.Publisher = require("./Publisher");
exports.throttledListener = require("./listenerHelpers").throttledListener;
exports.debouncedListener = require("./listenerHelpers").debouncedListener;

exports.makeEmitter = function (target, options) {
    var publisher = new exports.Publisher(options);

    Object.getOwnPropertyNames(publisher.emitter).forEach(function (methodName) {
        Object.defineProperty(target, methodName, {
            value: publisher.emitter[methodName],
            configurable: true,
            writable: true,
            enumerable: false
        });
    });

    return publisher.publish;
};

},{"./Publisher":33,"./listenerHelpers":35}],37:[function(require,module,exports){
"use strict";

var hasOwnProperty = Object.prototype.hasOwnProperty;
var MANGLE_STRING = "~";

function mangle(key) {
    return MANGLE_STRING + key;
}

function unmangle(key) {
    return key.substring(MANGLE_STRING.length);
}

function methods(obj, methodHash) {
    for (var methodName in methodHash) {
        Object.defineProperty(obj, methodName, {
            value: methodHash[methodName],
            configurable: true,
            writable: true
        });
    }
}

function assertString(key) {
    if (typeof key !== "string") {
        throw new TypeError("key must be a string.");
    }
}

module.exports = function (initializer) {
    var store = Object.create(null);
    var size = 0;

    var dict = {};
    methods(dict, {
        get: function (key, defaultValue) {
            assertString(key);
            var mangled = mangle(key);
            return mangled in store ? store[mangled] : defaultValue;
        },
        set: function (key, value) {
            assertString(key);

            var mangled = mangle(key);
            if (!(mangled in store)) {
                ++size;
            }

            return store[mangled] = value;
        },
        has: function (key) {
            assertString(key);
            return mangle(key) in store;
        },
        delete: function (key) {
            assertString(key);

            var mangled = mangle(key);
            if (mangled in store) {
                --size;
                delete store[mangled];
                return true;
            }

            return false;
        },
        clear: function () {
            store = Object.create(null);
            size = 0;
        },
        forEach: function (callback, thisArg) {
            if (typeof callback !== "function") {
                throw new TypeError("`callback` must be a function");
            }

            for (var mangledKey in store) {
                if (hasOwnProperty.call(store, mangledKey)) {
                    var key = unmangle(mangledKey);
                    var value = store[mangledKey];

                    callback.call(thisArg, value, key, dict);
                }
            }
        }
    });

    Object.defineProperty(dict, "size", {
        get: function () {
            return size;
        },
        configurable: true
    });

    if (typeof initializer === "object" && initializer !== null) {
        Object.keys(initializer).forEach(function (key) {
            dict.set(key, initializer[key]);
        });
    }

    return dict;
};

},{}],38:[function(require,module,exports){
(function (process){
// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    "use strict";

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

    // <script>
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== "undefined" ? window : self;

        // Get the `window` object, save the previous Q global
        // and initialize Q as a global.
        var previousQ = global.Q;
        global.Q = definition();

        // Add a noConflict function so Q can be removed from the
        // global namespace.
        global.Q.noConflict = function () {
            global.Q = previousQ;
            return this;
        };

    } else {
        throw new Error("This environment was not anticipated by Q. Please file a bug.");
    }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;
    // queue for late tasks, used by unhandled rejection tracking
    var laterQueue = [];

    function flush() {
        /* jshint loopfunc: true */
        var task, domain;

        while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }
            runSingle(task, domain);

        }
        while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
        }
        flushing = false;
    }
    // runs a single function in the async queue
    function runSingle(task, domain) {
        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process === "object" &&
        process.toString() === "[object process]" && process.nextTick) {
        // Ensure Q is in a real Node environment, with a `process.nextTick`.
        // To see through fake Node environments:
        // * Mocha test runner - exposes a `process` global without a `nextTick`
        // * Browserify - exposes a `process.nexTick` function that uses
        //   `setTimeout`. In this case `setImmediate` is preferred because
        //    it is faster. Browserify's `process.toString()` yields
        //   "[object Object]", while in a real Node environment
        //   `process.nextTick()` yields "[object process]".
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }
    // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.
    nextTick.runAfter = function (task) {
        laterQueue.push(task);
        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };
    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack &&
        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack) {
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        error.stack = filterStackString(concatedStacks);
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

// enable long stacks if Q_DEBUG is set
if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
}

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            Q.nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;
        promise.source = newPromise;

        array_reduce(messages, function (undefined, message) {
            Q.nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            Q.nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become settled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be settled
 */
Q.race = race;
function race(answerPs) {
    return promise(function (resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function (answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
};

/**
 * Works almost like "finally", but not called for rejections.
 * Original resolution value is passed through callback unaffected.
 * Callback may return a promise that will be awaited for.
 * @param {Function} callback
 * @returns {Q.Promise}
 * @example
 * doSomething()
 *   .then(...)
 *   .tap(console.log)
 *   .then(...);
 */
Promise.prototype.tap = function (callback) {
    callback = Q(callback);

    return this.then(function (value) {
        return callback.fcall(value).thenResolve(value);
    });
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return object instanceof Promise;
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var reportedUnhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }
    if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
                process.emit("unhandledRejection", reason, promise);
                reportedUnhandledRejections.push(promise);
            }
        });
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function () {
                var atReport = array_indexOf(reportedUnhandledRejections, promise);
                if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                }
            });
        }
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var pendingCount = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++pendingCount;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (pendingCount === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */
Q.any = any;

function any(promises) {
    if (promises.length === 0) {
        return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
        var promise = promises[index];

        pendingCount++;

        when(promise, onFulfilled, onRejected, onProgress);
        function onFulfilled(result) {
            deferred.resolve(result);
        }
        function onRejected() {
            pendingCount--;
            if (pendingCount === 0) {
                deferred.reject(new Error(
                    "Can't get fulfillment value from any promise, all " +
                    "promises were rejected."
                ));
            }
        }
        function onProgress(progress) {
            deferred.notify({
                index: index,
                value: progress
            });
        }
    }, undefined);

    return deferred.promise;
}

Promise.prototype.any = function () {
    return any(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        Q.nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            Q.nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            Q.nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

Q.noConflict = function() {
    throw new Error("Q.noConflict only works when Q is used as a global");
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});

}).call(this,require('_process'))
},{"_process":95}],39:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],40:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function(require) {

	var when, object, WireProxy, ObjectProxy, undef;

	when = require('when');
	object = require('./object');
	WireProxy = require('./WireProxy');
	ObjectProxy = require('./ObjectProxy');

	function ComponentFactory(lifecycle, plugins, pluginApi) {
		this.plugins = plugins;
		this.pluginApi = pluginApi;
		this.lifecycle = lifecycle;
		this.proxies = [];
	}

	ComponentFactory.prototype = {

		create: function(component) {
			var found;

			// Look for a factory, then use it to create the object
			found = this.getFactory(component.spec);
			return found
				? this._create(component, found.factory, found.options)
				: when.reject(component);
		},

		_create: function(component, factory, options) {
			var instance, self;

			instance = when.defer();
			self = this;

			factory(instance.resolver, options,
				this.pluginApi.contextualize(component.id));

			return instance.promise.then(function(instance) {
				return self.processComponent(component, instance);
			});
		},

		processComponent: function(component, instance) {
			var self, proxy;

			self = this;
			proxy = this.createProxy(instance, component);

			return self.initInstance(proxy).then(
				function(proxy) {
					return self.startupInstance(proxy);
				}
			);
		},

		initInstance: function(proxy) {
			return this.lifecycle.init(proxy);
		},

		startupInstance: function(proxy) {
			return this.lifecycle.startup(proxy);
		},

		createProxy: function(instance, component) {
			var proxy;

			if (WireProxy.isProxy(instance)) {
				proxy = instance;
				instance = WireProxy.getTarget(proxy);
			} else {
				proxy = new ObjectProxy(instance);
			}

			proxy = this.initProxy(proxy);

			if(component) {
				component.proxy = proxy;
				proxy.id = component.id;
				proxy.metadata = component;
			}

			this._registerProxy(proxy);

			return proxy;
		},

		initProxy: function(proxy) {

			var proxiers = this.plugins.proxiers;

			// Allow proxy plugins to process/modify the proxy
			proxy = proxiers.reduce(
				function(proxy, proxier) {
					var overridden = proxier(proxy);
					return WireProxy.isProxy(overridden) ? overridden : proxy;
				},
				proxy
			);

			return proxy;
		},

		destroy: function() {
			var proxies, lifecycle;

			proxies = this.proxies;
			lifecycle = this.lifecycle;

			return shutdownComponents().then(destroyComponents);

			function shutdownComponents() {
				return when.reduce(proxies,
					function(_, proxy) { return lifecycle.shutdown(proxy); },
					undef);
			}

			function destroyComponents() {
				return when.reduce(proxies,
					function(_, proxy) { return proxy.destroy(); },
					undef);
			}
		},

		_registerProxy: function(proxy) {
			if(proxy.metadata) {
				proxy.path = proxy.metadata.path;
				this.proxies.push(proxy);
			}
		},

		getFactory: function(spec) {
			var f, factories, found;

			factories = this.plugins.factories;

			for (f in factories) {
				if (object.hasOwn(spec, f)) {
					found = {
						factory: factories[f],
						options: {
							options: spec[f],
							spec: spec
						}
					};
					break;
				}
			}

			// Intentionally returns undefined if no factory found
			return found;

		}
	};

	return ComponentFactory;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"./ObjectProxy":43,"./WireProxy":45,"./object":62,"when":92}],41:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(define){ 'use strict';
define(function(require) {

	var when, advice, object, WireContext, Scope,
		PluginRegistry, defaultPlugins,
		DirectedGraph, trackInflightRefs, slice, scopeProto, undef;

	when = require('when');
	advice = require('./advice');
	object = require('./object');
	WireContext = require('./WireContext');
	Scope = require('./scope');
	PluginRegistry = require('./plugin/registry');
	defaultPlugins = require('./plugin/defaultPlugins');
	DirectedGraph = require('./graph/DirectedGraph');
	trackInflightRefs = require('./graph/trackInflightRefs');
	slice = Array.prototype.slice;

	scopeProto = Scope.prototype;

	function Container() {
		Scope.apply(this, arguments);
	}

	/**
	 * Container inherits from Scope, adding plugin support and
	 * context level events.
	 */
	Container.prototype = object.extend(scopeProto, {
		_inheritInstances: function(parent) {
			var publicApi = {
				wire: this._createChildContext.bind(this),
				destroy: this.destroy.bind(this),
				resolve: this._resolveRef.bind(this)
			};

			return WireContext.inherit(parent.instances, publicApi);
		},

		_init: advice.after(
			scopeProto._init,
			function() {
				this.plugins = new PluginRegistry();
				return this._installDefaultPlugins();
			}
		),

		_startup: advice.after(
			scopeProto._startup,
			function(started) {
				var self = this;
				return when.resolve(started).otherwise(function(e) {
					return self._contextEvent('error', e).yield(started);
				});
			}
		),

		_installDefaultPlugins: function() {
			return this._installPlugins(defaultPlugins);
		},

		_installPlugins: function(plugins) {
			if(!plugins) {
				return when.resolve();
			}

			var self, registry, installed;

			self = this;
			registry = this.plugins;

			if(Array.isArray(plugins)) {
				installed = plugins.map(function(plugin) {
					return installPlugin(plugin);
				});
			} else {
				installed = Object.keys(plugins).map(function(namespace) {
					return installPlugin(plugins[namespace], namespace);
				});
			}

			return when.all(installed);

			function installPlugin(pluginSpec, namespace) {
				var module, t;

				t = typeof pluginSpec;
				if(t == 'string') {
					module = pluginSpec;
					pluginSpec = {};
				} else if(typeof pluginSpec.module == 'string') {
					module = pluginSpec.module;
				} else {
					module = pluginSpec;
				}

				return self.getModule(module).then(function(plugin) {
					return registry.scanModule(plugin, pluginSpec, namespace);
				});
			}
		},

		_createResolver: advice.after(
			scopeProto._createResolver,
			function(resolver) {
				return trackInflightRefs(
					new DirectedGraph(), resolver, this.refCycleTimeout);
			}
		),

		_contextEvent: function (type, data) {
			var api, listeners;

			if(!this.contextEventApi) {
				this.contextEventApi = this._pluginApi.contextualize(this.path);
			}

			api = this.contextEventApi;
			listeners = this.plugins.contextListeners;

			return when.reduce(listeners, function(undef, listener) {
				var d;

				if(listener[type]) {
					d = when.defer();
					listener[type](d.resolver, api, data);
					return d.promise;
				}

				return undef;
			}, undef);
		},

		_createComponents: advice.beforeAsync(
			scopeProto._createComponents,
			function(parsed) {
				var self = this;
				return this._installPlugins(parsed.plugins)
					.then(function() {
						return self._contextEvent('initialize');
					});
			}
		),

		_awaitInstances: advice.afterAsync(
			scopeProto._awaitInstances,
			function() {
				return this._contextEvent('ready');
			}
		),

		_destroyComponents: advice.beforeAsync(
			scopeProto._destroyComponents,
			function() {
				return this._contextEvent('shutdown');
			}
		),

		_releaseResources: advice.beforeAsync(
			scopeProto._releaseResources,
			function() {
				return this._contextEvent('destroy');
			}
		)
	});

	return Container;

});
}(typeof define === 'function' ? define : function(factory) { module.exports = factory(require); }));

},{"./WireContext":44,"./advice":46,"./graph/DirectedGraph":51,"./graph/trackInflightRefs":55,"./object":62,"./plugin/defaultPlugins":65,"./plugin/registry":67,"./scope":70,"when":92}],42:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function() {

	function Map() {
		this.clear();
	}

	Map.prototype = {
		get: function(key) {
			var value, found;
			found = this._data.some(function(entry) {
				if(entry.key === key) {
					value = entry.value;
					return true;
				}
			});

			return found ? value : arguments[1];
		},

		set: function(key, value) {
			var replaced = this._data.some(function(entry) {
				if(entry.key === key) {
					entry.value = value;
					return true;
				}
			});

			if(!replaced) {
				this._data.push({ key: key, value: value });
			}
		},

		has: function(key) {
			return this._data.some(function(entry) {
				return entry.key === key;
			});
		},

		'delete': function(key) {
			var value, found;
			found = this._data.some(function(entry, i, array) {
				if(entry.key === key) {
					value = entry.value;
					array.splice(i, 1);
					return true;
				}
			});
		},

		clear: function() {
			this._data = [];
		}
	};

	return Map;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],43:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function(require) {

	var WireProxy, extend, before, meld, advise, superDestroy;

	WireProxy = require('./WireProxy');
	extend = require('./object').extend;
	before = require('./advice').before;
	meld = require('meld');

	// FIXME: Remove support for meld.add after deprecation period
	advise = typeof meld === 'function' ? meld : meld.add;

	superDestroy = WireProxy.prototype.destroy;

	function ObjectProxy(target) {
		/*jshint unused:false*/
		WireProxy.apply(this, arguments);
	}

	ObjectProxy.prototype = extend(WireProxy.prototype, {
		/**
		 * Add an aspect to the proxy's target. Sub-types should
		 * override to add aspects in whatever specialized way is
		 * necessary.
		 * @param {String|Array|RegExp|Function} pointcut
		 *  expression matching methods to be advised
		 * @param {Object} aspect aspect to add
		 * @returns {{remove:function}} object with remove() that
		 *  will remove the aspect.
		 */
		advise: function(pointcut, aspect) {
			return advise(this.target, pointcut, aspect);
		}


	});

	return ObjectProxy;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"./WireProxy":45,"./advice":46,"./object":62,"meld":72}],44:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(define){ 'use strict';
	define(function(require) {

		var object, undef;

		object = require('./object');

		function WireContext() {}

		WireContext.inherit = function(parent, api) {
			var contextApi, context;

			contextApi = object.inherit(parent);
			object.mixin(contextApi, api);

			WireContext.prototype = contextApi;

			context = new WireContext();
			WireContext.prototype = undef;

			return context;
		};

		return WireContext;

	});
}(typeof define === 'function' ? define : function(factory) { module.exports = factory(require); }));

},{"./object":62}],45:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(define){ 'use strict';
define(function(require) {

	var object, array;

	object = require('./object');
	array = require('./array');

	/**
	 * A base proxy for all components that wire creates.  It allows wire's
	 * internals and plugins to work with components using a standard interface.
	 * WireProxy instances may be extended to specialize the behavior of the
	 * interface for a particular type of component.  For example, there is a
	 * specialized version for DOM Nodes.
	 * @param {*} target value to be proxied
	 * @constructor
	 */
	function WireProxy(target) {
		// read-only target
		Object.defineProperty(this, 'target', { value: target });
	}

	WireProxy.prototype = {
		/**
		 * Get the value of the named property. Sub-types should
		 * override to get properties from their targets in whatever
		 * specialized way is necessary.
		 * @param {string} property
		 * @returns {*} the value or undefined
		 */
		get: function (property) {
			return this.target[property];
		},

		/**
		 * Set the value of the named property. Sub-types should
		 * override to set properties on their targets in whatever
		 * specialized way is necessary.
		 * @param {string} property
		 * @param {*} value
		 * @returns {*}
		 */
		set: function (property, value) {
			this.target[property] = value;
			return value;
		},

		/**
		 * Invoke the method, with the supplied args, on the proxy's
		 * target. Sub-types should override to invoke methods their
		 * targets in whatever specialized way is necessary.
		 * @param {string|function} method name of method to invoke or
		 *  a function to call using proxy's target as the thisArg
		 * @param {array} args arguments to pass to method
		 * @returns {*} the method's return value
		 */
		invoke: function (method, args) {
			var target = this.target;

			if (typeof method === 'string') {
				method = target[method];
			}

			return method.apply(target, array.fromArguments(args));
		},

		/**
		 * Add an aspect to the proxy's target. Sub-types should
		 * override to add aspects in whatever specialized way is
		 * necessary.
		 * @param {String|Array|RegExp|Function} pointcut
		 *  expression matching methods to be advised
		 * @param {Object} aspect aspect to add
		 * @returns {{remove:function}} object with remove() that
		 *  will remove the aspect.
		 */
		advise: function(pointcut, aspect) {
			/*jshint unused:false*/
			throw new TypeError('Advice not supported on component type: ' + this.target);
		},

		/**
		 * Destroy the proxy's target.  Sub-types should override
		 * to destroy their targets in whatever specialized way is
		 * necessary.
		 */
		destroy: function() {},

		/**
		 * Attempt to clone this proxy's target. Sub-types should
		 * override to clone their targets in whatever specialized
		 * way is necessary.
		 * @param {object|array|function} thing thing to clone
		 * @param {object} options
		 * @param {boolean} options.deep if true and thing is an Array, try to deep clone its contents
		 * @param {boolean} options.inherited if true and thing is an object, clone inherited and own properties.
		 * @returns {*}
		 */
		clone: function (options) {
			// don't try to clone a primitive
			var target = this.target;

			if (typeof target == 'function') {
				// cloneThing doesn't clone functions, so clone here:
				return target.bind();
			} else if (typeof target != 'object') {
				return target;
			}

			return cloneThing(target, options || {});
		}
	};

	WireProxy.isProxy = isProxy;
	WireProxy.getTarget = getTarget;
	WireProxy.extend = extendProxy;

	return WireProxy;

	/**
	 * Returns a new WireProxy, whose prototype is proxy, with extensions
	 * as own properties.  This is the "official" way to extend the functionality
	 * of an existing WireProxy.
	 * @param {WireProxy} proxy proxy to extend
	 * @param extensions
	 * @returns {*}
	 */
	function extendProxy(proxy, extensions) {
		if(!isProxy(proxy)) {
			throw new Error('Cannot extend non-WireProxy');
		}

		return object.extend(proxy, extensions);
	}

	/**
	 * Returns true if it is a WireProxy
	 * @param {*} it
	 * @returns {boolean}
	 */
	function isProxy(it) {
		return it instanceof WireProxy;
	}

	/**
	 * If it is a WireProxy (see isProxy), returns it's target.  Otherwise,
	 * returns it;
	 * @param {*} it
	 * @returns {*}
	 */
	function getTarget(it) {
		return isProxy(it) ? it.target : it;
	}

	/**
	 * Try to clone thing, which can be an object, Array, or Function
	 * @param {object|array|function} thing thing to clone
	 * @param {object} options
	 * @param {boolean} options.deep if true and thing is an Array, try to deep clone its contents
	 * @param {boolean} options.inherited if true and thing is an object, clone inherited and own properties.
	 * @returns {array|object|function} cloned thing
	 */
	function cloneThing (thing, options) {
		var deep, inherited, clone, prop;
		deep = options.deep;
		inherited = options.inherited;

		// Note: this filters out primitive properties and methods
		if (typeof thing != 'object') {
			return thing;
		}
		else if (thing instanceof Date) {
			return new Date(thing.getTime());
		}
		else if (thing instanceof RegExp) {
			return new RegExp(thing);
		}
		else if (Array.isArray(thing)) {
			return deep
				? thing.map(function (i) { return cloneThing(i, options); })
				: thing.slice();
		}
		else {
			clone = thing.constructor ? new thing.constructor() : {};
			for (prop in thing) {
				if (inherited || object.hasOwn(thing, prop)) {
					clone[prop] = deep
						? cloneThing(thing[prop], options)
						: thing[prop];
				}
			}
			return clone;
		}
	}

});
})(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }
);
},{"./array":47,"./object":62}],46:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function(require) {

	var when;

	when = require('when');

	// Very simple advice functions for internal wire use only.
	// This is NOT a replacement for meld.  These advices stack
	// differently and will not be as efficient.
	return {
		before: before,
		after: after,
		beforeAsync: beforeAsync,
		afterAsync: afterAsync
	};

	/**
	 * Execute advice before f, passing same arguments to both, and
	 * discarding advice's return value.
	 * @param {function} f function to advise
	 * @param {function} advice function to execute before f
	 * @returns {function} advised function
	 */
	function before(f, advice) {
		return function() {
			advice.apply(this, arguments);
			return f.apply(this, arguments);
		};
	}

	/**
	 * Execute advice after f, passing f's return value to advice
	 * @param {function} f function to advise
	 * @param {function} advice function to execute after f
	 * @returns {function} advised function
	 */
	function after(f, advice) {
		return function() {
			return advice.call(this, f.apply(this, arguments));
		};
	}

	/**
	 * Execute f after a promise returned by advice fulfills. The same args
	 * will be passed to both advice and f.
	 * @param {function} f function to advise
	 * @param {function} advice function to execute before f
	 * @returns {function} advised function which always returns a promise
	 */
	function beforeAsync(f, advice) {
		return function() {
			var self, args;

			self = this;
			args = arguments;

			return when(args, function() {
				return advice.apply(self, args);
			}).then(function() {
				return f.apply(self, args);
			});
		};
	}

	/**
	 * Execute advice after a promise returned by f fulfills. The same args
	 * will be passed to both advice and f.
	 * @param {function} f function to advise
	 * @param {function} advice function to execute after f
	 * @returns {function} advised function which always returns a promise
	 */
	function afterAsync(f, advice) {
		return function() {
			var self = this;

			return when(arguments, function(args) {
				return f.apply(self, args);
			}).then(function(result) {
				return advice.call(self, result);
			});
		};
	}


});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"when":92}],47:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(define){ 'use strict';
define(function() {


	var slice = [].slice;

	return {
		delegate: delegateArray,
		fromArguments: fromArguments,
		union: union
	};

	/**
	 * Creates a new {Array} with the same contents as array
	 * @param array {Array}
	 * @return {Array} a new {Array} with the same contents as array. If array is falsey,
	 *  returns a new empty {Array}
	 */
	function delegateArray(array) {
		return array ? [].concat(array) : [];
	}

	function fromArguments(args, index) {
		return slice.call(args, index||0);
	}

	/**
	 * Returns a new set that is the union of the two supplied sets
	 * @param {Array} a1 set
	 * @param {Array} a2 set
	 * @returns {Array} union of a1 and a2
	 */
	function union(a1, a2) {
		// If either is empty, return the other
		if(!a1.length) {
			return a2.slice();
		} else if(!a2.length) {
			return a1.slice();
		}

		return a2.reduce(function(union, a2item) {
			if(union.indexOf(a2item) === -1) {
				union.push(a2item);
			}
			return union;
		}, a1.slice());
	}

});
})(typeof define == 'function'
	// AMD
	? define
	// CommonJS
	: function(factory) { module.exports = factory(); }
);
},{}],48:[function(require,module,exports){
/** @license MIT License (c) copyright 2011-2013 original author or authors */

/**
 * @author Brian Cavalier
 * @author John Hann
 */

(function (define) { 'use strict';
define(function (require) {

	var when = require('when');

	/**
	 * WARNING: This is not the function you're looking for. You
	 * probably want when().
	 * This function *conditionally* executes onFulfill synchronously
	 * if promiseOrValue is a non-promise, or calls when(promiseOrValue,
	 * onFulfill, onReject) otherwise.
	 * @return {Promise|*} returns a promise if promiseOrValue is
	 *  a promise, or the return value of calling onFulfill
	 *  synchronously otherwise.
	 */
	return function asap(promiseOrValue, onFulfill, onReject) {
		return when.isPromiseLike(promiseOrValue)
			? when(promiseOrValue, onFulfill, onReject)
			: onFulfill(promiseOrValue);
	};

});
})(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); });

},{"when":92}],49:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */
(function(define){ 'use strict';
define(function(require) {

	var when, mixin, loaderAdapter, relativeLoader, Container, specUtils;

	when = require('when');
	mixin = require('./object').mixin;
	loaderAdapter = require('./loader/adapter');
	relativeLoader = require('./loader/relative');
	Container = require('./Container');
	specUtils = require('./specUtils');

	/**
	 * Creates a new context from the supplied specs, with the supplied
	 * parent context. If specs is an {Array}, it may be a mixed array
	 * of string module ids, and object literal specs.  All spec module
	 * ids will be loaded, and then all specs will be merged from
	 * left-to-right (rightmost wins), and the resulting, merged spec will
	 * be wired.
	 * @private
	 *
	 * @param {String|Object|String[]|Object[]} specs
	 * @param {Object} parent context
	 * @param {Object} [options]
	 *
	 * @return {Promise} a promise for the new context
	 */
	return function createContext(specs, parent, options) {
		// Do the actual wiring after all specs have been loaded

		if(!options) { options = {}; }
		if(!parent)  { parent  = {}; }

		options.createContext = createContext;

		var specLoader = createSpecLoader(parent.moduleLoader, options.require);

		return when(specs, function(specs) {
			options.moduleLoader =
				createContextLoader(specLoader, findBaseId(specs));

			return specUtils.mergeSpecs(specLoader, specs).then(function(spec) {

				var container = new Container(parent, options);

				// Expose only the component instances and controlled API
				return container.init(spec).then(function(context) {
					return context.instances;
				});
			});
		});
	};

	function createContextLoader(parentLoader, baseId) {
		return baseId ? relativeLoader(parentLoader, baseId) : parentLoader;
	}

	/**
	 * Create a module loader
	 * @param {function} [platformLoader] platform require function with which
	 *  to configure the module loader
	 * @param {function} [parentLoader] existing module loader from which
	 *  the new module loader will inherit, if provided.
	 * @return {Object} module loader with load() and merge() methods
	 */
	function createSpecLoader(parentLoader, platformLoader) {
		var loadModule = typeof platformLoader == 'function'
			? loaderAdapter(platformLoader)
			: parentLoader || loaderAdapter(require);

		return loadModule;
	}

	function findBaseId(specs) {
		var firstId;

		if(typeof specs === 'string') {
			return specs;
		}

		if(!Array.isArray(specs)) {
			return;
		}

		specs.some(function(spec) {
			if(typeof spec === 'string') {
				firstId = spec;
				return true;
			}
		});

		return firstId;
	}
});
}(typeof define === 'function' ? define : function(factory) { module.exports = factory(require); }));

},{"./Container":41,"./loader/adapter":59,"./loader/relative":61,"./object":62,"./specUtils":71,"when":92}],50:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * functional
 * Helper library for working with pure functions in wire and wire plugins
 *
 * NOTE: This lib assumes Function.prototype.bind is available
 *
 * wire is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */
(function (define) { 'use strict';
define(function (require) {

	var asap, slice;

	asap = require('./asap');
	slice = [].slice;

	/**
	 * Create a partial function
	 * @param f {Function}
	 * @param [args] {*} additional arguments will be bound to the returned partial
	 * @return {Function}
	 */
	function partial(f, args/*...*/) {
		// Optimization: return f if no args provided
		if(arguments.length == 1) {
			return f;
		}

		args = slice.call(arguments, 1);

		return function() {
			return f.apply(this, args.concat(slice.call(arguments)));
		};
	}

	/**
	 * Promise-aware function composition. If any function in
	 * the composition returns a promise, the entire composition
	 * will be lifted to return a promise.
	 * @param funcs {Array} array of functions to compose
	 * @return {Function} composed function
	 */
	function compose(funcs) {
		var first;

		first = funcs[0];
		funcs = funcs.slice(1);

		return function composed() {
			var context = this;
			return funcs.reduce(function(result, f) {
				return asap(result, function(result) {
					return f.call(context, result);
				});
			}, first.apply(this, arguments));
		};
	}

	return {
		compose: compose,
		partial: partial
	};

});
})(typeof define == 'function'
	// AMD
	? define
	// CommonJS
	: function(factory) { module.exports = factory(require); }
);

},{"./asap":48}],51:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * DirectedGraph
 * @author: brian@hovercraftstudios.com
 */
(function(define) {
define(function() {

	/**
	 * A simple directed graph
	 * @constructor
	 */
	function DirectedGraph() {
		this.vertices = {};
	}

	DirectedGraph.prototype = {
		/**
		 * Add a new edge from one vertex to another
		 * @param {string} from vertex at the tail of the edge
		 * @param {string} to vertex at the head of the edge
		 */
		addEdge: function(from, to) {
			this._getOrCreateVertex(to);
			this._getOrCreateVertex(from).edges[to] = 1;
		},

		/**
		 * Adds and initializes new vertex, or returns an existing vertex
		 * if one with the supplied name already exists
		 * @param {string} name vertex name
		 * @return {object} the new vertex, with an empty edge set
		 * @private
		 */
		_getOrCreateVertex: function(name) {
			var v = this.vertices[name];
			if(!v) {
				v = this.vertices[name] = { name: name, edges: {} };
			}

			return v;
		},

		/**
		 * Removes an edge, if it exits
		 * @param {string} from vertex at the tail of the edge
		 * @param {string} to vertex at the head of the edge
		 */
		removeEdge: function(from, to) {
			var outbound = this.vertices[from];
			if(outbound) {
				delete outbound.edges[to];
			}
		},

		/**
		 * Calls lambda once for each vertex in the graph passing
		 * the vertex as the only param.
		 * @param {function} lambda
		 */
		eachVertex: function(lambda) {
			var vertices, v;

			vertices = this.vertices;
			for(v in vertices) {
				lambda(vertices[v]);
			}
		},

		/**
		 * Calls lambda once for every outbound edge of the supplied vertex
		 * @param {string} vertex vertex name whose edges will be passed to lambda
		 * @param {function} lambda
		 */
		eachEdgeFrom: function(vertex, lambda) {
			var v, e, vertices;

			vertices = this.vertices;
			v = vertices[vertex];

			if(!v) {
				return;
			}

			for(e in v.edges) {
				lambda(v, vertices[e]);
			}
		}
	};

	return DirectedGraph;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],52:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * cyclesTracker
 * @author: brian@hovercraftstudios.com
 * @author: younes.ouadi@gmail.com
 */
(function(define) {
define(function(require) {

	var findStronglyConnected, formatCycles;

	findStronglyConnected = require('./tarjan');
	formatCycles = require('./formatCycles');

	/**
	 * Make sure that the new name doesn't introduce a cycle.
	 * 
	 * @param {string} name the name being used.
	 * @param {string} onBehalfOf some indication of another name on whose behalf this
	 *  name is being used.  Used to build graph and detect cycles
	 * @return {string} the name being used.
	 */
	function ensureNoCycles(namesGraph, name, onBehalfOf) {
		var stronglyConnected, cycles;

		// add the name to the graph
		onBehalfOf = onBehalfOf||'?';
		namesGraph.addEdge(onBehalfOf, name);

		// compute cycles
		stronglyConnected = findStronglyConnected(namesGraph);
		cycles = stronglyConnected.filter(function(node) {
			// Only consider cycles that:
			// * have more than one node
			// * have one node and that node is not self-referenced
			return node.length > 1 || (node.length === 1 && Object.keys(node[0].edges).indexOf(node[0].name) !== -1);
		});

		// is there a cycle?
		if(cycles.length) {
			// Cycles detected
			throw new Error('Possible circular usage:\n' + formatCycles(cycles));
		}

		return name;
	}

	return {
		ensureNoCycles: ensureNoCycles
	};
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"./formatCycles":53,"./tarjan":54}],53:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * formatCycles
 * @author: brian@hovercraftstudios.com
 */
(function(define) {
define(function() {
	/**
	 * If there are cycles, format them for output
	 * @param {Array} cycles array of reference resolution cycles
	 * @return {String} formatted string
	 */
	return function formatCycles(cycles) {
		return cycles.map(function (sc) {
			return '[' + sc.map(function (v) {
					return v.name;
				}
			).join(', ') + ']';
		}).join(', ');
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],54:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Tarjan directed graph cycle detection
 * @author: brian@hovercraftstudios.com
 */
(function(define) {
define(function() {

	var undef;

	/**
	 * Tarjan directed graph cycle detection.
	 * See http://en.wikipedia.org/wiki/Tarjan's_strongly_connected_components_algorithm
	 *
	 * WARNING: For efficiency, this adds properties to the vertices in the
	 * graph.  It doesn't really matter for wire's internal purposes.
	 *
	 * @param {DirectedGraph} digraph
	 * @return {Array} each element is a set (Array) of vertices involved
	 * in a cycle.
	 */
	return function tarjan(digraph) {

		var index, stack, scc;

		index = 0;
		stack = [];

		scc = [];

		// Clear out any old cruft that may be hanging around
		// from a previous run.  Maybe should do this afterward?
		digraph.eachVertex(function(v) {
			delete v.index;
			delete v.lowlink;
			delete v.onStack;
		});

		// Start the depth first search
		digraph.eachVertex(function(v) {
			if(v.index === undef) {
				findStronglyConnected(digraph, v);
			}
		});

		// Tarjan algorithm for a single node
		function findStronglyConnected(dg, v) {
			var vertices, vertex;

			v.index = v.lowlink = index;
			index += 1;
			pushStack(stack, v);

			dg.eachEdgeFrom(v.name, function(v, w) {

				if(w.index === undef) {
					// Continue depth first search
					findStronglyConnected(dg, w);
					v.lowlink = Math.min(v.lowlink, w.lowlink);
				} else if(w.onStack) {
					v.lowlink = Math.min(v.lowlink, w.index);
				}

			});

			if(v.lowlink === v.index) {
				vertices = [];
				if(stack.length) {
					do {
						vertex = popStack(stack);
						vertices.push(vertex);
					} while(v !== vertex);
				}

				if(vertices.length) {
					scc.push(vertices);
				}
			}
		}

		return scc;
	};

	/**
	 * Push a vertex on the supplied stack, but also tag the
	 * vertex as being on the stack so we don't have to scan the
	 * stack later in order to tell.
	 * @param {Array} stack
	 * @param {object} vertex
	 */
	function pushStack(stack, vertex) {
		stack.push(vertex);
		vertex.onStack = 1;
	}

	/**
	 * Pop an item off the supplied stack, being sure to un-tag it
	 * @param {Array} stack
	 * @return {object|undefined} vertex
	 */
	function popStack(stack) {
		var v = stack.pop();
		if(v) {
			delete v.onStack;
		}

		return v;
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],55:[function(require,module,exports){
/**
 * trackInflightRefs
 * @author: brian@hovercraftstudios.com
 */
(function(define) {
define(function(require) {

	var timeout, findStronglyConnected, formatCycles, refCycleCheckTimeout;

	timeout = require('when/timeout');
	findStronglyConnected = require('./tarjan');
	formatCycles = require('./formatCycles');

	refCycleCheckTimeout = 5000;

	/**
	 * Advice to track inflight refs using a directed graph
	 * @param {DirectedGraph} graph
	 * @param {Resolver} resolver
	 * @param {number} cycleTimeout how long to wait for any one reference to resolve
	 *  before performing cycle detection. This basically debounces cycle detection
	 */
	return function trackInflightRefs(graph, resolver, cycleTimeout) {
		var create = resolver.create;

		if(typeof cycleTimeout != 'number') {
			cycleTimeout = refCycleCheckTimeout;
		}

		resolver.create = function() {
			var ref, resolve;

			ref = create.apply(resolver, arguments);

			resolve = ref.resolve;
			ref.resolve = function() {
				var inflight = resolve.apply(ref, arguments);
				return trackInflightRef(graph, cycleTimeout, inflight, ref.name, arguments[1]);
			};

			return ref;
		};

		return resolver;
	};


	/**
	 * Add this reference to the reference graph, and setup a timeout that will fire if the refPromise
	 * has not resolved in a reasonable amount.  If the timeout fires, check the current graph for cycles
	 * and fail wiring if we find any.
	 * @param {DirectedGraph} refGraph graph to use to track cycles
	 * @param {number} cycleTimeout how long to wait for any one reference to resolve
	 *  before performing cycle detection. This basically debounces cycle detection
	 * @param {object} refPromise promise for reference resolution
	 * @param {string} refName reference being resolved
	 * @param {string} onBehalfOf some indication of another component on whose behalf this
	 *  reference is being resolved.  Used to build a reference graph and detect cycles
	 * @return {object} promise equivalent to refPromise but that may be rejected if cycles are detected
	 */
	function trackInflightRef(refGraph, cycleTimeout, refPromise, refName, onBehalfOf) {

		onBehalfOf = onBehalfOf||'?';
		refGraph.addEdge(onBehalfOf, refName);

		return timeout(cycleTimeout, refPromise).then(
			function(resolved) {
				refGraph.removeEdge(onBehalfOf, refName);
				return resolved;
			},
			function() {
				var stronglyConnected, cycles;

				stronglyConnected = findStronglyConnected(refGraph);
				cycles = stronglyConnected.filter(function(node) {
					return node.length > 1;
				});

				if(cycles.length) {
					// Cycles detected
					throw new Error('Possible circular refs:\n'
						+ formatCycles(cycles));
				}

				return refPromise;
			}
		);
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"./formatCycles":53,"./tarjan":54,"when/timeout":91}],56:[function(require,module,exports){
/** @license MIT License (c) copyright original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(define){ 'use strict';
define(function() {

	var undef;

	/**
	 * Creates an object by either invoking ctor as a function and returning the result,
	 * or by calling new ctor().  It uses a simple heuristic to try to guess which approach
	 * is the "right" one.
	 *
	 * @param ctor {Function} function or constructor to invoke
	 * @param args {Array} array of arguments to pass to ctor in either case
	 *
	 * @return The result of invoking ctor with args, with or without new, depending on
	 * the strategy selected.
	 */
	return function instantiate(ctor, args, forceConstructor) {

		var begotten, ctorResult;

		if (forceConstructor || (forceConstructor === undef && isConstructor(ctor))) {
			begotten = Object.create(ctor.prototype);
			defineConstructorIfPossible(begotten, ctor);
			ctorResult = ctor.apply(begotten, args);
			if(ctorResult !== undef) {
				begotten = ctorResult;
			}

		} else {
			begotten = ctor.apply(undef, args);

		}

		return begotten === undef ? null : begotten;
	};

	/**
	 * Carefully sets the instance's constructor property to the supplied
	 * constructor, using Object.defineProperty if available.  If it can't
	 * set the constructor in a safe way, it will do nothing.
	 *
	 * @param instance {Object} component instance
	 * @param ctor {Function} constructor
	 */
	function defineConstructorIfPossible(instance, ctor) {
		try {
			Object.defineProperty(instance, 'constructor', {
				value: ctor,
				enumerable: false
			});
		} catch(e) {
			// If we can't define a constructor, oh well.
			// This can happen if in envs where Object.defineProperty is not
			// available, or when using cujojs/poly or other ES5 shims
		}
	}

	/**
	 * Determines whether the supplied function should be invoked directly or
	 * should be invoked using new in order to create the object to be wired.
	 *
	 * @param func {Function} determine whether this should be called using new or not
	 *
	 * @returns {Boolean} true iff func should be invoked using new, false otherwise.
	 */
	function isConstructor(func) {
		var is = false, p;
		for (p in func.prototype) {
			if (p !== undef) {
				is = true;
				break;
			}
		}

		return is;
	}

});
})(typeof define == 'function'
	// AMD
	? define
	// CommonJS
	: function(factory) {
		module.exports = factory();
	}
);

},{}],57:[function(require,module,exports){
(function(define) {
define(function() {

	return function(methodName, args) {
		return function(target) {
			return target[methodName].apply(target, args);
		};
	};

});
})(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); });
},{}],58:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(define){ 'use strict';
define(function(require) {

	var when, safeNonFacetNames;

	when = require('when');
	safeNonFacetNames = {
		id: { value: 1 }
	};

	function Lifecycle(plugins, pluginApi) {
		this._plugins = plugins;
		this._pluginApi = pluginApi;
	}

	Lifecycle.prototype = {
		init: createLifecyclePhase(['create', 'configure', 'initialize']),
		startup: createLifecyclePhase(['connect', 'ready']),
		shutdown: createLifecyclePhase(['destroy'])
	};

	return Lifecycle;

	/**
	 * Generate a method to process all steps in a lifecycle phase
	 * @return {Function}
	 */
	function createLifecyclePhase(steps) {
		steps = generateSteps(steps);

		return function(proxy) {
			var plugins, pluginApi;

			plugins = this._plugins;
			pluginApi = this._pluginApi.contextualize(proxy.id);

			return when.reduce(steps, function (unused, step) {
				return processFacets(step, proxy, pluginApi, plugins);
			}, proxy);
		};
	}

	function processFacets(step, proxy, api, plugins) {
		var promises, metadata, options, name, spec, facets, safeNames, unprocessed;

		promises = [];
		metadata = proxy.metadata;
		spec = metadata.spec;
		facets = plugins.facets;
		safeNames = Object.create(plugins.factories, safeNonFacetNames);
		unprocessed = [];

		for(name in spec) {
			if(name in facets) {
				options = spec[name];
				if (options) {
					processStep(promises, facets[name], step, proxy, options, api);
				}
			} else if (!(name in safeNames)) {
				unprocessed.push(name);
			}
		}

		if(unprocessed.length) {
			return when.reject(unrecognizedFacets(proxy, unprocessed, spec));
		} else {
			return when.all(promises).then(function () {
				return processListeners(step, proxy, api, plugins.listeners);
			}).yield(proxy);
		}
	}

	function processListeners(step, proxy, api, listeners) {
		var listenerPromises = [];

		for (var i = 0; i < listeners.length; i++) {
			processStep(listenerPromises, listeners[i], step, proxy, {}, api);
		}

		return when.all(listenerPromises);
	}

	function processStep(promises, processor, step, proxy, options, api) {
		var facet, pendingFacet;

		if (processor && processor[step]) {
			pendingFacet = when.defer();
			promises.push(pendingFacet.promise);

			facet = Object.create(proxy);
			facet.options = options;
			processor[step](pendingFacet.resolver, facet, api);
		}
	}

	function generateSteps(steps) {
		return steps.reduce(reduceSteps, []);
	}

	function reduceSteps(lifecycle, step) {
		lifecycle.push(step + ':before');
		lifecycle.push(step);
		lifecycle.push(step + ':after');
		return lifecycle;
	}

	function unrecognizedFacets(proxy, unprocessed, spec) {
		return new Error('unrecognized facets in ' + proxy.id + ', maybe you forgot a plugin? ' + unprocessed.join(', ') + '\n' + JSON.stringify(spec));
	}

});
})(typeof define == 'function'
	// AMD
	? define
	// CommonJS
	: function(factory) { module.exports = factory(require); }
);
},{"when":92}],59:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */
(function(define) { 'use strict';
define(function(require) {

	var when = require('when');

	// Sniff for the platform's loader
	return typeof exports == 'object'
		? function(require) {
			return function(moduleId) {
				try {
					return when.resolve(require(moduleId));
				} catch(e) {
					return when.reject(e);
				}
			};
		}
		: function (require) {
			return function(moduleId) {
				var deferred = when.defer();
				require([moduleId], deferred.resolve, deferred.reject);
				return deferred.promise;
			};
		};

});
}(typeof define === 'function' ? define : function(factory) { module.exports = factory(require); }));


},{"when":92}],60:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */
(function(define) { 'use strict';
define(function() {

	return {
		base: base,
		resolve: resolve
	};

	/**
	 * Given a moduleId, returns the "basename".  For example:
	 * base('foo/bar/baz') -> 'foo/bar'
	 * base('foo') -> 'foo'
	 * @param id
	 * @returns {*}
	 */
	function base(id) {
		if(!id) {
			return '';
		}

		var split = id.lastIndexOf('/');
		return split >= 0 ? id.slice(0, split) : id;
	}

	/**
	 * Resolve id against base (which is also an id), such that the
	 * returned resolved id contains no leading '.' or '..'
	 * components.  Id may be relative or absolute, and may also
	 * be an AMD plugin plus resource id, in which case both the
	 * plugin id and the resource id may be relative or absolute.
	 * @param {string} base module id against which id will be resolved
	 * @param {string} id module id to resolve, may be an
	 *  AMD plugin+resource id.
	 * @returns {string} resolved id with no leading '.' or '..'
	 *  components.  If the input id was an AMD plugin+resource id,
	 *  both the plugin id and the resource id will be resolved in
	 *  the returned id (thus neither will have leading '.' or '..'
	 *  components)
	 */
	function resolve(base, id) {
		if(typeof id != 'string') {
			return base;
		}

		return id.split('!').map(function(part) {
			return resolveId(base, part.trim());
		}).join('!');
	}

	function resolveId(base, id) {
		var up, prefix;

		if(id === '' || id === '.' || id === './') {
			return base;
		}

		if(id[0] != '.') {
			return id;
		}

		prefix = base;

		if(id == '..' || id == '../') {
			up = 1;
			id = '';
		} else {
			up = 0;
			id = id.replace(/^(\.\.?\/)+/, function(s) {
				s.replace(/\.\./g, function(s) {
					up++;
					return s;
				});
				return '';
			});

			if(id == '..') {
				up++;
				id = '';
			} else if(id == '.') {
				id = '';
			}
		}

		if(up > 0) {
			prefix = prefix.split('/');
			up = Math.max(0, prefix.length - up);
			prefix = prefix.slice(0, up).join('/');
		}

		if(id.length && id[0] !== '/' && prefix[prefix.length-1] !== '/') {
			prefix += '/';
		}

		if(prefix[0] == '/') {
			prefix = prefix.slice(1);
		}

		return prefix + id;
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],61:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */
(function(define) { 'use strict';
define(function(require) {

	var mid = require('./moduleId');

	return function relativeLoader(loader, referenceId) {
		referenceId = mid.base(referenceId);
		return function(moduleId) {
			return loader(mid.resolve(referenceId, moduleId));
		};
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"./moduleId":60}],62:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(define){ 'use strict';
define(function() {

	var hasOwn;

	hasOwn = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);

	return {
		hasOwn: hasOwn,
		isObject: isObject,
		inherit: inherit,
		mixin: mixin,
		extend: extend
	};

	function isObject(it) {
		// In IE7 tos.call(null) is '[object Object]'
		// so we need to check to see if 'it' is
		// even set
		return it && Object.prototype.toString.call(it) == '[object Object]';
	}

	function inherit(parent) {
		return parent ? Object.create(parent) : {};
	}

	/**
	 * Brute force copy own properties from -> to. Effectively an
	 * ES6 Object.assign polyfill, usable with Array.prototype.reduce.
	 * @param {object} to
	 * @param {object} from
	 * @returns {object} to
	 */
	function mixin(to, from) {
		if(!from) {
			return to;
		}

		return Object.keys(from).reduce(function(to, key) {
			to[key] = from[key];
			return to;
		}, to);
	}

	/**
	 * Beget a new object from base and then mixin own properties from
	 * extensions.  Equivalent to mixin(inherit(base), extensions)
	 * @param {object} base
	 * @param {object} extensions
	 * @returns {object}
	 */
	function extend(base, extensions) {
		return mixin(inherit(base), extensions);
	}

});
})(typeof define == 'function'
	// AMD
	? define
	// CommonJS
	: function(factory) { module.exports = factory(); }
);
},{}],63:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function(require) {

	var when, compose, pipelineSplitRx;

	when = require('when');
	compose = require('./functional').compose;
	pipelineSplitRx = /\s*\|\s*/;

	return function pipeline(proxy, composeString, wire) {

		var bindSpecs, resolveRef, getProxy;

		if(typeof composeString != 'string') {
			return wire(composeString).then(function(func) {
				return createProxyInvoker(proxy, func);
			});
		}

		bindSpecs = composeString.split(pipelineSplitRx);
		resolveRef = wire.resolveRef;
		getProxy = wire.getProxy;

		function createProxyInvoker(proxy, method) {
			return function() {
				return proxy.invoke(method, arguments);
			};
		}

		function createBound(proxy, bindSpec) {
			var target, method;

			target = bindSpec.split('.');

			if(target.length > 2) {
				throw new Error('Only 1 "." is allowed in refs: ' + bindSpec);
			}

			if(target.length > 1) {
				method = target[1];
				target = target[0];
				return when(getProxy(target), function(proxy) {
					return createProxyInvoker(proxy, method);
				});
			} else {
				if(proxy && typeof proxy.get(bindSpec) == 'function') {
					return createProxyInvoker(proxy, bindSpec);
				} else {
					return resolveRef(bindSpec);
				}
			}

		}

		// First, resolve each transform function, stuffing it into an array
		// The result of this reduce will an array of concrete functions
		// Then add the final context[method] to the array of funcs and
		// return the composition.
		return when.reduce(bindSpecs, function(funcs, bindSpec) {
			return when(createBound(proxy, bindSpec), function(func) {
				funcs.push(func);
				return funcs;
			});
		}, []).then(
			function(funcs) {
				var context = proxy && proxy.target;
				return (funcs.length == 1 ? funcs[0] : compose(funcs)).bind(context);
			}
		);
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"./functional":50,"when":92}],64:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Base wire plugin that provides properties, init, and destroy facets, and
 * a proxy for plain JS objects.
 *
 * wire is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(define) { 'use strict';
define(function(require) {

	var when, object, functional, pipeline, instantiate, createInvoker,
		whenAll, obj, pluginInstance, undef;

	when = require('when');
	object = require('../object');
	functional = require('../functional');
	pipeline = require('../pipeline');
	instantiate = require('../instantiate');
	createInvoker = require('../invoker');

	whenAll = when.all;

	obj = {};

	function asArray(it) {
		return Array.isArray(it) ? it : [it];
	}

	function invoke(func, proxy, args, wire) {
        return when(wire(args, func, proxy.path),
			function (resolvedArgs) {
				return proxy.invoke(func, asArray(resolvedArgs));
			}
		);
	}

	function invokeAll(facet, wire) {
		var options = facet.options;

		if(typeof options == 'string') {
			return invoke(options, facet, [], wire);

		} else {
			var promises, funcName;
			promises = [];

			for(funcName in options) {
				promises.push(invoke(funcName, facet, options[funcName], wire));
			}

			return whenAll(promises);
		}
	}

	//
	// Mixins
	//

	function mixin(target, src) {
		var name, s;

		for(name in src) {
			s = src[name];
			if(!(name in target) || (target[name] !== s && (!(name in obj) || obj[name] !== s))) {
				target[name] = s;
			}
		}

		return target;
	}

	function doMixin(target, introduction, wire) {
		introduction = typeof introduction == 'string'
			? wire.resolveRef(introduction)
			: wire(introduction);

		return when(introduction, mixin.bind(null, target));
	}

	function mixinFacet(resolver, facet, wire) {
		var target, intros;

		target = facet.target;
		intros = facet.options;

		if(!Array.isArray(intros)) {
			intros = [intros];
		}

		resolver.resolve(when.reduce(intros, function(target, intro) {
			return doMixin(target, intro, wire);
		}, target));
	}

    /**
     * Factory that handles cases where you need to create an object literal
     * that has a property whose name would trigger another wire factory.
     * For example, if you need an object literal with a property named "create",
     * which would normally cause wire to try to construct an instance using
     * a constructor or other function, and will probably result in an error,
     * or an unexpected result:
     * myObject: {
     *      create: "foo"
     *    ...
     * }
     *
     * You can use the literal factory to force creation of an object literal:
     * myObject: {
     *    literal: {
     *      create: "foo"
     *    }
     * }
     *
     * which will result in myObject.create == "foo" rather than attempting
     * to create an instance of an AMD module whose id is "foo".
     */
	function literalFactory(resolver, spec /*, wire */) {
		resolver.resolve(spec.options);
	}

	/**
	 * @deprecated Use create (instanceFactory) instead
	 * @param resolver
	 * @param componentDef
	 * @param wire
	 */
	function protoFactory(resolver, componentDef, wire) {
		var parentRef, promise;

        parentRef = componentDef.options;

        promise = typeof parentRef === 'string'
                ? wire.resolveRef(parentRef)
                : wire(parentRef);

		resolver.resolve(promise.then(Object.create));
	}

	function propertiesFacet(resolver, facet, wire) {

		var properties, path, setProperty, propertiesSet;

		properties = facet.options;
		path = facet.path;
		setProperty = facet.set.bind(facet);

		propertiesSet = when.map(Object.keys(facet.options), function(key) {
			return wire(properties[key], facet.path)
				.then(function(wiredProperty) {
					setProperty(key, wiredProperty);
				}
			);
		});

		resolver.resolve(propertiesSet);
	}

	function invokerFactory(resolver, componentDef, wire) {

		var invoker = wire(componentDef.options).then(function (invokerContext) {
			// It'd be nice to use wire.getProxy() then proxy.invoke()
			// here, but that means the invoker must always return
			// a promise.  Not sure that's best, so for now, just
			// call the method directly
			return createInvoker(invokerContext.method, invokerContext.args);
		});

		resolver.resolve(invoker);
	}

	function invokerFacet(resolver, facet, wire) {
		resolver.resolve(invokeAll(facet, wire));
	}

	function cloneFactory(resolver, componentDef, wire) {
		var sourceRef, options, cloned;

		if (wire.resolver.isRef(componentDef.options.source)) {
			sourceRef = componentDef.options.source;
			options = componentDef.options;
		}
		else {
			sourceRef = componentDef.options;
			options = {};
		}

		cloned = wire(sourceRef).then(function (ref) {
			return when(wire.getProxy(ref), function (proxy) {
				if (!proxy.clone) {
					throw new Error('No clone function found for ' + componentDef.id);
				}

				return proxy.clone(options);
			});
		});

		resolver.resolve(cloned);
	}

	function getArgs(create, wire) {
		return create.args ? wire(asArray(create.args)) : [];
	}

	function moduleFactory(resolver, componentDef, wire) {
		resolver.resolve(wire.loadModule(componentDef.options));
	}

	/**
	 * Factory that uses an AMD module either directly, or as a
	 * constructor or plain function to create the resulting item.
	 *
	 * @param {Object} resolver resolver to resolve with the created component
	 * @param {Object} componentDef portion of the spec for the component to be created
	 * @param {function} wire
	 */
	function instanceFactory(resolver, componentDef, wire) {
		var create, args, isConstructor, module, instance;

		create = componentDef.options;

		if (typeof create == 'string') {
			module = wire.loadModule(create);
		} else if(wire.resolver.isRef(create)) {
			module = wire(create);
			args = getArgs(create, wire);
		} else if(object.isObject(create) && create.module) {
			module = wire.resolver.isRef(create.module)
				? wire(create.module)
				: wire.loadModule(create.module);
			args = getArgs(create, wire);
			isConstructor = create.isConstructor;
		} else {
			module = create;
		}

		instance = when.join(module, args).spread(createInstance);

		resolver.resolve(instance);

		// Load the module, and use it to create the object
		function createInstance(module, args) {
			// We'll either use the module directly, or we need
			// to instantiate/invoke it.
			return typeof module == 'function'
				? instantiate(module, args, isConstructor)
				: Object.create(module);
		}
	}

	function composeFactory(resolver, componentDef, wire) {
		var options, promise;

		options = componentDef.options;

		if(typeof options == 'string') {
			promise = pipeline(undef, options, wire);
		} else {
			// Assume it's an array of things that will wire to functions
			promise = when(wire(options), function(funcArray) {
				return functional.compose(funcArray);
			});
		}

		resolver.resolve(promise);
	}

	pluginInstance = {
		factories: {
			module: moduleFactory,
			create: instanceFactory,
			literal: literalFactory,
			prototype: protoFactory,
			clone: cloneFactory,
			compose: composeFactory,
			invoker: invokerFactory
		},
		facets: {
			// properties facet.  Sets properties on components
			// after creation.
			properties: {
				configure: propertiesFacet
			},
			mixin: {
				configure: mixinFacet
			},
			// init facet.  Invokes methods on components during
			// the "init" stage.
			init: {
				initialize: invokerFacet
			},
			// ready facet.  Invokes methods on components during
			// the "ready" stage.
			ready: {
				ready: invokerFacet
			},
			// destroy facet.  Registers methods to be invoked
			// on components when the enclosing context is destroyed
			destroy: {
				destroy: invokerFacet
			}
		}
	};

	// "introduce" is deprecated, but preserved here for now.
	pluginInstance.facets.introduce = pluginInstance.facets.mixin;

	return function(/* options */) {
		return pluginInstance;
	};
});
})(typeof define == 'function'
	? define
	: function(factory) { module.exports = factory(require); }
);

},{"../functional":50,"../instantiate":56,"../invoker":57,"../object":62,"../pipeline":63,"when":92}],65:[function(require,module,exports){
/**
 * defaultPlugins
 * @author: brian
 */
(function(define) {
define(function(require) {

	return [
		require('./wirePlugin'),
		require('./basePlugin')
	];

});
}(typeof define === 'function' ? define : function(factory) { module.exports = factory(require); }));

},{"./basePlugin":64,"./wirePlugin":68}],66:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function() {

	var basePriority, defaultPriority;

	basePriority = -99;
	defaultPriority = 0;

	return {
		basePriority: basePriority,
		sortReverse: prioritizeReverse
	};

	function prioritizeReverse(list) {
		return list.sort(byReversePriority);
	}

	function byReversePriority(a, b) {
		var aPriority, bPriority;

		aPriority = a.priority || defaultPriority;
		bPriority = b.priority || defaultPriority;

		return aPriority < bPriority ? -1
			: aPriority > bPriority ? 1 : 0;
	}


});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],67:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * plugins
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 * @author: brian@hovercraftstudios.com
 */
(function(define) {
define(function(require) {

	var when, array, object, priority, instantiate, nsKey, nsSeparator;

	when = require('when');
	array = require('../array');
	object = require('../object');
	priority = require('./priority');
	instantiate = require('../instantiate');

	nsKey = '$ns';
	nsSeparator = ':';

	function PluginRegistry() {
		this.plugins = [];
		this._namespaces = {};

		this.contextListeners = [];
		this.listeners = [];
		this.proxiers =  [];
		this.resolvers = {};
		this.factories = {};
		this.facets =    {};
	}

	PluginRegistry.prototype = {
		scanModule: function (module, spec, namespace) {
			var self, pluginFactory;

			pluginFactory = discoverPlugin(module);

			if (!allowPlugin(pluginFactory, this.plugins)) {
				return when.resolve();
			}

			// Add to singleton plugins list to only allow one instance
			// of this plugin in the current context.
			this.plugins.push(pluginFactory);

			// Initialize the plugin for this context
			self = this;
			return when(instantiate(pluginFactory, [spec]),
				function (plugin) {
					plugin && self.registerPlugin(plugin, namespace || getNamespace(spec));
				}
			).yield();
		},

		registerPlugin: function (plugin, namespace) {
			addNamespace(namespace, this._namespaces);

			addPlugin(plugin.resolvers, this.resolvers, namespace);
			addPlugin(plugin.factories, this.factories, namespace);
			addPlugin(plugin.facets, this.facets, namespace);

			this.listeners.push(plugin);
			if(plugin.context) {
				this.contextListeners.push(plugin.context);
			}

			this._registerProxies(plugin.proxies);
		},

		_registerProxies: function (proxiesToAdd) {
			if (!proxiesToAdd) {
				return;
			}

			this.proxiers = priority.sortReverse(array.union(this.proxiers, proxiesToAdd));
		}
	};

	return PluginRegistry;

	function discoverPlugin(module) {
		var plugin;

		// Prefer deprecated legacy wire$plugin format over newer
		// plain function format.
		// TODO: Remove support for wire$plugin
		if(typeof module.wire$plugin === 'function') {
			plugin = module.wire$plugin;
		} else if(typeof module === 'function') {
			plugin = module;
		}

		return plugin;
	}

	function getNamespace(spec) {
		var namespace;
		if(typeof spec === 'object' && nsKey in spec) {
			// A namespace was provided
			namespace = spec[nsKey];
		}

		return namespace;
	}

	function addNamespace(namespace, namespaces) {
		if(namespace && namespace in namespaces) {
			throw new Error('plugin namespace already in use: ' + namespace);
		} else {
			namespaces[namespace] = 1;
		}
	}

	function allowPlugin(plugin, existing) {
		return typeof plugin === 'function' && existing.indexOf(plugin) === -1;
	}

	function addPlugin(src, registry, namespace) {
		var newPluginName, namespacedName;
		for (newPluginName in src) {
			namespacedName = makeNamespace(newPluginName, namespace);
			if (object.hasOwn(registry, namespacedName)) {
				throw new Error('Two plugins for same type in scope: ' + namespacedName);
			}

			registry[namespacedName] = src[newPluginName];
		}
	}

	function makeNamespace(pluginName, namespace) {
		return namespace ? (namespace + nsSeparator + pluginName) : pluginName;
	}
});
}(typeof define === 'function' ? define : function(factory) { module.exports = factory(require); }));

},{"../array":47,"../instantiate":56,"../object":62,"./priority":66,"when":92}],68:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Plugin that allows wire to be used as a plugin within a wire spec
 *
 * wire is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(define) {
define(function(require) {

	var when, object;

	when = require('when');
	object = require('../object');

	return function(/* options */) {

		var ready = when.defer();

		return {
			context: {
				ready: function(resolver) {
					ready.resolve();
					resolver.resolve();
				}
			},
			resolvers: {
				wire: wireResolver
			},
			factories: {
				wire: wireFactory
			}
		};

		/**
		 * Factory that creates either a child context, or a *function* that will create
		 * that child context.  In the case that a child is created, this factory returns
		 * a promise that will resolve when the child has completed wiring.
		 *
		 * @param {Object} resolver used to resolve with the created component
		 * @param {Object} componentDef component spec for the component to be created
		 * @param {function} wire scoped wire function
		 */
		function wireFactory(resolver, componentDef, wire) {
			var options, module, provide, defer, waitParent, result;

			options = componentDef.options;

			// Get child spec and options
			if(object.isObject(options) && 'spec' in options) {
				module = options.spec;
				waitParent = options.waitParent;
				defer = options.defer;
				provide = options.provide;
			} else {
				module = options;
			}

			function init(context) {
				var initialized;

				if(provide) {
					initialized = when(wire(provide), function(provides) {
						object.mixin(context.instances, provides);
					});
				}

				return initialized;
			}

			/**
			 * Create a child context of the current context
			 * @param {object?} mixin additional spec to be mixed into
			 *  the child being wired
			 * @returns {Promise} promise for child context
			 */
			function createChild(/** {Object|String}? */ mixin) {
				var spec, config;

				spec = mixin ? [].concat(module, mixin) : module;
				config = { initializers: [init] };

				var child = wire.createChild(spec, config);
				return defer ? child
					: when(child, function(child) {
					return object.hasOwn(child, '$exports') ? child.$exports : child;
				});
			}

			if (defer) {
				// Resolve with the createChild *function* itself
				// which can be used later to wire the spec
				result = createChild;

			} else if(waitParent) {

				var childPromise = when(ready.promise, function() {
					// ensure nothing is passed to createChild here
					return createChild();
				});

				result = wrapChild(childPromise);

			} else {
				result = createChild();
			}

			resolver.resolve(result);
		}
	};

	function wrapChild(promise) {
		return { promise: promise };
	}

	/**
	 * Builtin reference resolver that resolves to the context-specific
	 * wire function.
	 */
	function wireResolver(resolver, _, __, wire) {
		resolver.resolve(wire.createChild);
	}

});
}(typeof define === 'function' ? define : function(factory) { module.exports = factory(require); }));

},{"../object":62,"when":92}],69:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(define){ 'use strict';
define(function(require) {

	var when, object;

	when = require('when');
	object = require('./object');

	/**
	 * Create a reference resolve that uses the supplied plugins and pluginApi
	 * @param {object} config
	 * @param {object} config.plugins plugin registry
	 * @param {object} config.pluginApi plugin Api to provide to resolver plugins
	 *  when resolving references
	 * @constructor
	 */
	function Resolver(resolvers, pluginApi) {
		this._resolvers = resolvers;
		this._pluginApi = pluginApi;
	}

	Resolver.prototype = {

		/**
		 * Determine if it is a reference spec that can be resolved by this resolver
		 * @param {*} it
		 * @return {boolean} true iff it is a reference
		 */
		isRef: function(it) {
			return it && object.hasOwn(it, '$ref');
		},

		/**
		 * Parse it, which must be a reference spec, into a reference object
		 * @param {object|string} it
		 * @param {string?} it.$ref
		 * @return {object} reference object
		 */
		parse: function(it) {
			return this.isRef(it)
				? this.create(it.$ref, it)
				: this.create(it, {});
		},

		/**
		 * Creates a reference object
		 * @param {string} name reference name
		 * @param {object} options
		 * @return {{resolver: String, name: String, options: object, resolve: Function}}
		 */
		create: function(name, options) {
			var self, split, resolver;

			self = this;

			split = name.indexOf('!');
			resolver = name.substring(0, split);
			name = name.substring(split + 1);

			return {
				resolver: resolver,
				name: name,
				options: options,
				resolve: function(fallback, onBehalfOf) {
					return this.resolver
						? self._resolve(resolver, name, options, onBehalfOf)
						: fallback(name, options);
				}
			};
		},

		/**
		 * Do the work of resolving a reference using registered plugins
		 * @param {string} resolverName plugin resolver name (e.g. "dom"), the part before the "!"
		 * @param {string} name reference name, the part after the "!"
		 * @param {object} options additional options to pass thru to a resolver plugin
		 * @param {string|*} onBehalfOf some indication of another component on whose behalf this
		 *  reference is being resolved.  Used to build a reference graph and detect cycles
		 * @return {object} promise for the resolved reference
		 * @private
		 */
		_resolve: function(resolverName, name, options, onBehalfOf) {
			var deferred, resolver, api;

			deferred = when.defer();

			if (resolverName) {
				resolver = this._resolvers[resolverName];

				if (resolver) {
					api = this._pluginApi.contextualize(onBehalfOf);
					resolver(deferred.resolver, name, options||{}, api);
				} else {
					deferred.reject(new Error('No resolver plugin found: ' + resolverName));
				}

			} else {
				deferred.reject(new Error('Cannot resolve ref: ' + name));
			}

			return deferred.promise;
		}
	};

	return Resolver;

});
})(typeof define == 'function'
	// AMD
	? define
	// CommonJS
	: function(factory) { module.exports = factory(require); }
);
},{"./object":62,"when":92}],70:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author brian@hovercraftstudios.com
 */

(function(define) { 'use strict';
define(function(require) {

	var when, defer, sequence, array, object, loader, Map,
		ComponentFactory, Lifecycle, Resolver, WireProxy, PluginRegistry,
		undef, specUtils, DirectedGraph, cyclesTracker;

	when = require('when');
	sequence = require('when/sequence');
	array = require('./array');
	object = require('./object');
	Map = require('./Map');
	loader = require('./loader/adapter');
	ComponentFactory = require('./ComponentFactory');
	Lifecycle = require('./lifecycle');
	Resolver = require('./resolver');
	WireProxy = require('./WireProxy');
	PluginRegistry = require('./plugin/registry');
	specUtils = require('./specUtils');
	DirectedGraph = require('./graph/DirectedGraph');
	cyclesTracker = require('./graph/cyclesTracker');
	
	defer = when.defer;

	function Scope(parent, options) {
		this.parent = parent||{};
		object.mixin(this, options);
	}

	Scope.prototype = {

		init: function(spec) {

			this._inherit(this.parent);
			this._init();
			this._configure();

			return this._startup(spec).yield(this);
		},

		_inherit: function(parent) {

			this._instanceToProxy = new Map();

			this.instances = this._inheritInstances(parent);
			this.components = object.inherit(parent.components);

			this.path = this._createPath(this.name, parent.path);

			this.plugins = parent.plugins;

			this.initializers = array.delegate(this.initializers);
			this.destroyers = array.delegate(this.destroyers);
			this.postDestroy = array.delegate(this.postDestroy);

			if(!this.moduleLoader) {
				this.moduleLoader = parent.moduleLoader;
			}
		},

		_inheritInstances: function(parent) {
			return object.inherit(parent.instances);
		},

		_addDependent: function(dependant, tasks) {
			return dependant.then(
				function(dependant) {
					tasks.push(function() {
						return dependant.destroy();
					});
					return dependant;
				}
			);

		},

		_createNestedScope: function(spec) {
			var options = { createContext: this.createContext };
			return this._addDependent(
				new Scope(this, options).init(spec), this.postDestroy);
		},

		_createChildContext: function(spec, options) {
			// Create child and arrange for it to be destroyed just before
			// this scope is destroyed
			return this._addDependent(
				this.createContext(spec, this, options), this.destroyers);
		},

		_init: function() {
			this._pluginApi = this._initPluginApi();
		},

		_initPluginApi: function() {
			// Plugin API
			// wire() API that is passed to plugins.
			var self, pluginApi;

			self = this;
			pluginApi = {};

			pluginApi.contextualize = function(name) {
				function contextualApi(spec, id) {
					return self._resolveInstance(self._createComponentDef(id, spec));
				}

				contextualApi.createChild = self._createChildContext.bind(self);
				contextualApi.loadModule = self.getModule.bind(self);
				contextualApi.resolver = self.resolver;
				contextualApi.addComponent = addComponent;
				contextualApi.addInstance = addInstance;

				contextualApi.resolveRef = function(ref) {
					var onBehalfOf = arguments.length > 1 ? arguments[2] : name;
					return self._resolveRef(ref, onBehalfOf);
				};

				contextualApi.getProxy = function(nameOrComponent) {
					var onBehalfOf = arguments.length > 1 ? arguments[2] : name;
					return self.getProxy(nameOrComponent, onBehalfOf);
				};

				return contextualApi;
			};

			return pluginApi;

			function addComponent(component, id) {
				var def, instance;

				def = self._createComponentDef(id);
				instance = self.componentFactory.processComponent(def, component);

				return self._makeResolvable(def, instance);
			}

			function addInstance(instance, id) {
				self._makeResolvable(self._createComponentDef(id), instance);
				return when.resolve(instance);
			}
		},

		_configure: function() {
			var plugins, pluginApi;

			plugins = this.plugins;
			pluginApi = this._pluginApi;

			this.resolver = this._createResolver(plugins, pluginApi);
			this.componentFactory = this._createComponentFactory(plugins, pluginApi);

			this._destroy = function() {
				this._destroy = noop;

				return this._executeDestroyers()
					.then(this._destroyComponents.bind(this))
					.then(this._releaseResources.bind(this))
					.then(this._executePostDestroy.bind(this));
			};
		},

		_startup: function(spec) {
			var self = this;

			return this._executeInitializers().then(function() {
				return self._parseSpec(spec).then(function(parsed){
					return self._createComponents(parsed).then(function() {
						return self._awaitInstances(parsed);
					});
				});
			});
		},

		destroy: function() {
			return this._destroy();
		},

		_destroy: noop,

		_destroyComponents: function() {
			var instances = this.instances;

			return this.componentFactory.destroy().then(function() {
				for (var p in instances) {
					delete instances[p];
				}
			});
		},

		_releaseResources: function() {
			// Free Objects
			this.instances = this.components = this.parent
				= this.resolver = this.componentFactory
				= this._instanceToProxy = this._pluginApi = this.plugins
				= undef;
		},

		getModule: function(moduleId) {
			return typeof moduleId == 'string'
				? this.moduleLoader(moduleId)
				: when.resolve(moduleId);
		},

		getProxy: function(nameOrInstance, onBehalfOf) {
			var self = this;

			if(typeof nameOrInstance === 'string') {
				return this._resolveRefName(nameOrInstance, {}, onBehalfOf)
					.then(function (instance) {
						return self._getProxyForInstance(instance);
					});
			} else {
				return self._getProxyForInstance(nameOrInstance);
			}
		},

		_getProxyForInstance: function(instance) {
			var componentFactory = this.componentFactory;

			return getProxyRecursive(this, instance).otherwise(function() {
				// Last ditch, create a new proxy
				return componentFactory.createProxy(instance);
			});
		},

		_createResolver: function(plugins, pluginApi) {
			return new Resolver(plugins.resolvers, pluginApi);
		},

		_createComponentFactory: function(plugins, pluginApi) {
			var self, factory, init, lifecycle;

			self = this;

			lifecycle = new Lifecycle(plugins, pluginApi);
			factory = new ComponentFactory(lifecycle, plugins, pluginApi);

			init = factory.initInstance;
			factory.initInstance = function() {
				return when(init.apply(factory, arguments), function(proxy) {
					return self._makeResolvable(proxy.metadata, proxy);
				});
			};

			return factory;
		},

		_executeInitializers: function() {
			return sequence(this.initializers, this);
		},

		_executeDestroyers: function() {
			return sequence(this.destroyers, this);
		},

		_executePostDestroy: function() {
			return sequence(this.postDestroy, this);
		},

		_parseSpec: function(spec) {
			var self = this;

			// instantiate the imports graph
			var importsGraph = new DirectedGraph();

			return processImports(self, spec, importsGraph).then(function(specImports){
				// modules of importing spec overrides modules of imported spec.
				return processSpec(self, object.mixin(specImports, spec));
			});
		},

		_createComponentDef: function(id, spec, initialized, ready) {
			return {
				id: id,
				spec: spec,
				path: this._createPath(id, this.path),
				initialized: initialized,
				ready: ready
			};
		},

		_createComponents: function(parsed) {
			// Process/create each item in scope and resolve its
			// promise when completed.
			var self, components;

			self = this;
			components = parsed.components;
			return when.map(Object.keys(components), function(name) {
				return self._createScopeItem(components[name]);
			});
		},

		_awaitInstances: function(parsed) {
			var ready = parsed.ready;
			return when.map(Object.keys(ready), function(id) {
				return ready[id];
			});
		},

		_createScopeItem: function(component) {
			// NOTE: Order is important here.
			// The object & local property assignment MUST happen before
			// the chain resolves so that the concrete item is in place.
			// Otherwise, the whole scope can be marked as resolved before
			// the final item has been resolved.
			var self, item;

			self = this;
			item = this._resolveItem(component).then(function (resolved) {
				self._makeResolvable(component, resolved);
				return WireProxy.getTarget(resolved);
			});

			component.ready.resolve(item);
			return item;
		},

		_makeResolvable: function(component, instance) {
			var id, inst;

			id = component.id;
			if(id != null) {
				inst = WireProxy.getTarget(instance);
				this.instances[id] = inst;
				if(component.proxy) {
					this._instanceToProxy.set(inst, component.proxy);
				}
				if(component.initialized) {
					component.initialized.resolve(inst);
				}
			}

			return instance;
		},

		_resolveInstance: function(component) {
			return this._resolveItem(component).then(WireProxy.getTarget);
		},

		_resolveItem: function(component) {
			var item, spec;

			spec = component.spec;

			if (this.resolver.isRef(spec)) {
				// Reference
				item = this._resolveRef(spec, component.id);
			} else {
				// Component
				item = this._createItem(component);
			}

			return item;
		},

		_createItem: function(component) {
			var created, spec;

			spec = component.spec;

			if (Array.isArray(spec)) {
				// Array
				created = this._createArray(component);

			} else if (object.isObject(spec)) {
				// component spec, create the component
				created = this._createComponent(component);

			} else {
				// Plain value
				created = when.resolve(spec);
			}

			return created;
		},

		_createArray: function(component) {
			var self, id, i;

			self = this;
			id = component.id;
			i = 0;

			// Minor optimization, if it's an empty array spec, just return an empty array.
			return when.map(component.spec, function(item) {
				var componentDef = self._createComponentDef(id + '[' + (i++) + ']', item);
				return self._resolveInstance(componentDef);
			});
		},

		_createComponent: function(component) {
			var self = this;

			return this.componentFactory.create(component)
				.otherwise(function (reason) {
					if(reason !== component) {
						throw reason;
					}

					// No factory found, treat object spec as a nested scope
					return self._createNestedScope(component.spec)
						.then(function (childScope) {
							// TODO: find a lighter weight solution
							// We're paying the cost of creating a complete scope,
							// then discarding everything except the instance map.
							return object.mixin({}, childScope.instances);
						}
					);
				}
			);
		},

		_resolveRef: function(ref, onBehalfOf) {
			var scope;

			ref = this.resolver.parse(ref);
			scope = onBehalfOf == ref.name && this.parent.instances ? this.parent : this;

			return this._doResolveRef(ref, scope.instances, onBehalfOf);
		},

		_resolveRefName: function(refName, options, onBehalfOf) {
			var ref = this.resolver.create(refName, options);

			return this._doResolveRef(ref, this.instances, onBehalfOf);
		},

		_doResolveRef: function(ref, scope, onBehalfOf) {
			return ref.resolve(function (name) {
				return resolveDeepName(name, scope);
			}, onBehalfOf);
		},

		_createPath: function(name, basePath) {
			var path = basePath || this.path;
			return (path && name) ? (path + '.' + name) : name;
		}
	};

	return Scope;

	function resolveDeepName(name, scope) {
		var parts = name.split('.');

		return when.reduce(parts, function(scope, segment) {
			return segment in scope
				? scope[segment]
				: when.reject(new Error('Cannot resolve ref: ' + name));
		}, scope);
	}

	function getProxyRecursive(scope, instance) {
		var proxy;

		if(scope._instanceToProxy) {
			proxy = scope._instanceToProxy.get(instance);
		}

		if(!proxy) {
			if(scope.parent) {
				return getProxyRecursive(scope.parent, instance);
			} else {
				return when.reject(new Error('No proxy found'));
			}
		}

		return when.resolve(proxy);
	}

	function noop() {}

	function processImports(scope, spec, importsGraph, importingModuleId) {
		if(!spec || !spec.$imports) {
			return when({});
		}

		if(typeof spec.$imports === 'string') {
			spec.$imports = [spec.$imports];
		}

		importingModuleId = importingModuleId || (typeof spec === 'string' ? spec : undefined);

		return when.reduce(spec.$imports, function(currentSpecImports, importedModuleId){
			// make sure that there is no cycles
			cyclesTracker.ensureNoCycles(importsGraph, importedModuleId, importingModuleId);

			// go ahead with the import
			return when(scope.getModule(importedModuleId), function(importedSpec){
				return processImports(scope, importedSpec, importsGraph, importedModuleId).then(function(importedSpecImports){
					// modules of importing spec overrides modules of imported specs.
					var importedSpecAndItsImports = object.mixin(importedSpecImports, importedSpec);

					// modules in the right overrides modules in the left
					currentSpecImports = object.mixin(currentSpecImports, importedSpecAndItsImports);

					return currentSpecImports;
				});
			});
		}, {});
	}

	function processSpec(scope, spec) {
		var instances, components, ready, plugins, id, initialized;

		instances = scope.instances;
		components = scope.components;
		ready = {};

		// Setup a promise for each item in this scope
		for (id in spec) {
			if(id === '$plugins' || id === 'plugins') {
				plugins = spec[id];
			} else if(!object.hasOwn(instances, id)) {
				// An initializer may have inserted concrete components
				// into the context.  If so, they override components of the
				// same name from the input spec
				initialized = defer();
				ready = defer();
				components[id] = scope._createComponentDef(id, spec[id], initialized, ready);
				instances[id] = initialized.promise;
				ready[id] = ready.promise;
			}
		}

		return when.resolve({
			plugins: plugins,
			components: components,
			instances: instances,
			ready: ready
		});
	}
});
})(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }
);
},{"./ComponentFactory":40,"./Map":42,"./WireProxy":45,"./array":47,"./graph/DirectedGraph":51,"./graph/cyclesTracker":52,"./lifecycle":58,"./loader/adapter":59,"./object":62,"./plugin/registry":67,"./resolver":69,"./specUtils":71,"when":92,"when/sequence":90}],71:[function(require,module,exports){
/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function(require) {

	var object, when;

	when = require('when');
	object = require('./object');

	function mergeSpecs(moduleLoader, specs) {
		return when(specs, function(specs) {
			return when.resolve(Array.isArray(specs)
				? mergeAll(moduleLoader, specs)
				: (typeof specs === 'string' ? moduleLoader(specs) : specs));
		});
	}

	function mergeAll(moduleLoader, specs) {
		return when.reduce(specs, function(merged, module) {
			return typeof module == 'string'
				? when(moduleLoader(module), function(spec) { return object.mixin(merged, spec); })
				: object.mixin(merged, module);
		}, {});
	}

	return {
		mergeSpecs: mergeSpecs,
		mergeAll: mergeAll
	};
});
})(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }
);
},{"./object":62,"when":92}],72:[function(require,module,exports){
/** @license MIT License (c) copyright 2011-2013 original author or authors */

/**
 * meld
 * Aspect Oriented Programming for Javascript
 *
 * meld is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Brian Cavalier
 * @author John Hann
 * @version 1.3.1
 */
(function (define) {
define(function () {

	//
	// Public API
	//

	// Add a single, specific type of advice
	// returns a function that will remove the newly-added advice
	meld.before =         adviceApi('before');
	meld.around =         adviceApi('around');
	meld.on =             adviceApi('on');
	meld.afterReturning = adviceApi('afterReturning');
	meld.afterThrowing =  adviceApi('afterThrowing');
	meld.after =          adviceApi('after');

	// Access to the current joinpoint in advices
	meld.joinpoint =      joinpoint;

	// DEPRECATED: meld.add(). Use meld() instead
	// Returns a function that will remove the newly-added aspect
	meld.add =            function() { return meld.apply(null, arguments); };

	/**
	 * Add an aspect to all matching methods of target, or to target itself if
	 * target is a function and no pointcut is provided.
	 * @param {object|function} target
	 * @param {string|array|RegExp|function} [pointcut]
	 * @param {object} aspect
	 * @param {function?} aspect.before
	 * @param {function?} aspect.on
	 * @param {function?} aspect.around
	 * @param {function?} aspect.afterReturning
	 * @param {function?} aspect.afterThrowing
	 * @param {function?} aspect.after
	 * @returns {{ remove: function }|function} if target is an object, returns a
	 *  remover { remove: function } whose remove method will remove the added
	 *  aspect. If target is a function, returns the newly advised function.
	 */
	function meld(target, pointcut, aspect) {
		var pointcutType, remove;

		if(arguments.length < 3) {
			return addAspectToFunction(target, pointcut);
		} else {
			if (isArray(pointcut)) {
				remove = addAspectToAll(target, pointcut, aspect);
			} else {
				pointcutType = typeof pointcut;

				if (pointcutType === 'string') {
					if (typeof target[pointcut] === 'function') {
						remove = addAspectToMethod(target, pointcut, aspect);
					}

				} else if (pointcutType === 'function') {
					remove = addAspectToAll(target, pointcut(target), aspect);

				} else {
					remove = addAspectToMatches(target, pointcut, aspect);
				}
			}

			return remove;
		}

	}

	function Advisor(target, func) {

		var orig, advisor, advised;

		this.target = target;
		this.func = func;
		this.aspects = {};

		orig = this.orig = target[func];
		advisor = this;

		advised = this.advised = function() {
			var context, joinpoint, args, callOrig, afterType;

			// If called as a constructor (i.e. using "new"), create a context
			// of the correct type, so that all advice types (including before!)
			// are called with the correct context.
			if(this instanceof advised) {
				// shamelessly derived from https://github.com/cujojs/wire/blob/c7c55fe50238ecb4afbb35f902058ab6b32beb8f/lib/component.js#L25
				context = objectCreate(orig.prototype);
				callOrig = function (args) {
					return applyConstructor(orig, context, args);
				};

			} else {
				context = this;
				callOrig = function(args) {
					return orig.apply(context, args);
				};

			}

			args = slice.call(arguments);
			afterType = 'afterReturning';

			// Save the previous joinpoint and set the current joinpoint
			joinpoint = pushJoinpoint({
				target: context,
				method: func,
				args: args
			});

			try {
				advisor._callSimpleAdvice('before', context, args);

				try {
					joinpoint.result = advisor._callAroundAdvice(context, func, args, callOrigAndOn);
				} catch(e) {
					joinpoint.result = joinpoint.exception = e;
					// Switch to afterThrowing
					afterType = 'afterThrowing';
				}

				args = [joinpoint.result];

				callAfter(afterType, args);
				callAfter('after', args);

				if(joinpoint.exception) {
					throw joinpoint.exception;
				}

				return joinpoint.result;

			} finally {
				// Restore the previous joinpoint, if necessary.
				popJoinpoint();
			}

			function callOrigAndOn(args) {
				var result = callOrig(args);
				advisor._callSimpleAdvice('on', context, args);

				return result;
			}

			function callAfter(afterType, args) {
				advisor._callSimpleAdvice(afterType, context, args);
			}
		};

		defineProperty(advised, '_advisor', { value: advisor, configurable: true });
	}

	Advisor.prototype = {

		/**
		 * Invoke all advice functions in the supplied context, with the supplied args
		 *
		 * @param adviceType
		 * @param context
		 * @param args
		 */
		_callSimpleAdvice: function(adviceType, context, args) {

			// before advice runs LIFO, from most-recently added to least-recently added.
			// All other advice is FIFO
			var iterator, advices;

			advices = this.aspects[adviceType];
			if(!advices) {
				return;
			}

			iterator = iterators[adviceType];

			iterator(this.aspects[adviceType], function(aspect) {
				var advice = aspect.advice;
				advice && advice.apply(context, args);
			});
		},

		/**
		 * Invoke all around advice and then the original method
		 *
		 * @param context
		 * @param method
		 * @param args
		 * @param applyOriginal
		 */
		_callAroundAdvice: function (context, method, args, applyOriginal) {
			var len, aspects;

			aspects = this.aspects.around;
			len = aspects ? aspects.length : 0;

			/**
			 * Call the next function in the around chain, which will either be another around
			 * advice, or the orig method.
			 * @param i {Number} index of the around advice
			 * @param args {Array} arguments with with to call the next around advice
			 */
			function callNext(i, args) {
				// If we exhausted all aspects, finally call the original
				// Otherwise, if we found another around, call it
				return i < 0
					? applyOriginal(args)
					: callAround(aspects[i].advice, i, args);
			}

			function callAround(around, i, args) {
				var proceedCalled, joinpoint;

				proceedCalled = 0;

				// Joinpoint is immutable
				// TODO: Use Object.freeze once v8 perf problem is fixed
				joinpoint = pushJoinpoint({
					target: context,
					method: method,
					args: args,
					proceed: proceedCall,
					proceedApply: proceedApply,
					proceedCount: proceedCount
				});

				try {
					// Call supplied around advice function
					return around.call(context, joinpoint);
				} finally {
					popJoinpoint();
				}

				/**
				 * The number of times proceed() has been called
				 * @return {Number}
				 */
				function proceedCount() {
					return proceedCalled;
				}

				/**
				 * Proceed to the original method/function or the next around
				 * advice using original arguments or new argument list if
				 * arguments.length > 0
				 * @return {*} result of original method/function or next around advice
				 */
				function proceedCall(/* newArg1, newArg2... */) {
					return proceed(arguments.length > 0 ? slice.call(arguments) : args);
				}

				/**
				 * Proceed to the original method/function or the next around
				 * advice using original arguments or new argument list if
				 * newArgs is supplied
				 * @param [newArgs] {Array} new arguments with which to proceed
				 * @return {*} result of original method/function or next around advice
				 */
				function proceedApply(newArgs) {
					return proceed(newArgs || args);
				}

				/**
				 * Create proceed function that calls the next around advice, or
				 * the original.  May be called multiple times, for example, in retry
				 * scenarios
				 * @param [args] {Array} optional arguments to use instead of the
				 * original arguments
				 */
				function proceed(args) {
					proceedCalled++;
					return callNext(i - 1, args);
				}

			}

			return callNext(len - 1, args);
		},

		/**
		 * Adds the supplied aspect to the advised target method
		 *
		 * @param aspect
		 */
		add: function(aspect) {

			var advisor, aspects;

			advisor = this;
			aspects = advisor.aspects;

			insertAspect(aspects, aspect);

			return {
				remove: function () {
					var remaining = removeAspect(aspects, aspect);

					// If there are no aspects left, restore the original method
					if (!remaining) {
						advisor.remove();
					}
				}
			};
		},

		/**
		 * Removes the Advisor and thus, all aspects from the advised target method, and
		 * restores the original target method, copying back all properties that may have
		 * been added or updated on the advised function.
		 */
		remove: function () {
			delete this.advised._advisor;
			this.target[this.func] = this.orig;
		}
	};

	/**
	 * Returns the advisor for the target object-function pair.  A new advisor
	 * will be created if one does not already exist.
	 * @param target {*} target containing a method with the supplied methodName
	 * @param methodName {String} name of method on target for which to get an advisor
	 * @return {Object|undefined} existing or newly created advisor for the supplied method
	 */
	Advisor.get = function(target, methodName) {
		if(!(methodName in target)) {
			return;
		}

		var advisor, advised;

		advised = target[methodName];

		if(typeof advised !== 'function') {
			throw new Error('Advice can only be applied to functions: ' + methodName);
		}

		advisor = advised._advisor;
		if(!advisor) {
			advisor = new Advisor(target, methodName);
			target[methodName] = advisor.advised;
		}

		return advisor;
	};

	/**
	 * Add an aspect to a pure function, returning an advised version of it.
	 * NOTE: *only the returned function* is advised.  The original (input) function
	 * is not modified in any way.
	 * @param func {Function} function to advise
	 * @param aspect {Object} aspect to add
	 * @return {Function} advised function
	 */
	function addAspectToFunction(func, aspect) {
		var name, placeholderTarget;

		name = func.name || '_';

		placeholderTarget = {};
		placeholderTarget[name] = func;

		addAspectToMethod(placeholderTarget, name, aspect);

		return placeholderTarget[name];

	}

	function addAspectToMethod(target, method, aspect) {
		var advisor = Advisor.get(target, method);

		return advisor && advisor.add(aspect);
	}

	function addAspectToAll(target, methodArray, aspect) {
		var removers, added, f, i;

		removers = [];
		i = 0;

		while((f = methodArray[i++])) {
			added = addAspectToMethod(target, f, aspect);
			added && removers.push(added);
		}

		return createRemover(removers);
	}

	function addAspectToMatches(target, pointcut, aspect) {
		var removers = [];
		// Assume the pointcut is a an object with a .test() method
		for (var p in target) {
			// TODO: Decide whether hasOwnProperty is correct here
			// Only apply to own properties that are functions, and match the pointcut regexp
			if (typeof target[p] == 'function' && pointcut.test(p)) {
				// if(object.hasOwnProperty(p) && typeof object[p] === 'function' && pointcut.test(p)) {
				removers.push(addAspectToMethod(target, p, aspect));
			}
		}

		return createRemover(removers);
	}

	function createRemover(removers) {
		return {
			remove: function() {
				for (var i = removers.length - 1; i >= 0; --i) {
					removers[i].remove();
				}
			}
		};
	}

	// Create an API function for the specified advice type
	function adviceApi(type) {
		return function(target, method, adviceFunc) {
			var aspect = {};

			if(arguments.length === 2) {
				aspect[type] = method;
				return meld(target, aspect);
			} else {
				aspect[type] = adviceFunc;
				return meld(target, method, aspect);
			}
		};
	}

	/**
	 * Insert the supplied aspect into aspectList
	 * @param aspectList {Object} list of aspects, categorized by advice type
	 * @param aspect {Object} aspect containing one or more supported advice types
	 */
	function insertAspect(aspectList, aspect) {
		var adviceType, advice, advices;

		for(adviceType in iterators) {
			advice = aspect[adviceType];

			if(advice) {
				advices = aspectList[adviceType];
				if(!advices) {
					aspectList[adviceType] = advices = [];
				}

				advices.push({
					aspect: aspect,
					advice: advice
				});
			}
		}
	}

	/**
	 * Remove the supplied aspect from aspectList
	 * @param aspectList {Object} list of aspects, categorized by advice type
	 * @param aspect {Object} aspect containing one or more supported advice types
	 * @return {Number} Number of *advices* left on the advised function.  If
	 *  this returns zero, then it is safe to remove the advisor completely.
	 */
	function removeAspect(aspectList, aspect) {
		var adviceType, advices, remaining;

		remaining = 0;

		for(adviceType in iterators) {
			advices = aspectList[adviceType];
			if(advices) {
				remaining += advices.length;

				for (var i = advices.length - 1; i >= 0; --i) {
					if (advices[i].aspect === aspect) {
						advices.splice(i, 1);
						--remaining;
						break;
					}
				}
			}
		}

		return remaining;
	}

	function applyConstructor(C, instance, args) {
		try {
			// Try to define a constructor, but don't care if it fails
			defineProperty(instance, 'constructor', {
				value: C,
				enumerable: false
			});
		} catch(e) {
			// ignore
		}

		C.apply(instance, args);

		return instance;
	}

	var currentJoinpoint, joinpointStack,
		ap, prepend, append, iterators, slice, isArray, defineProperty, objectCreate;

	// TOOD: Freeze joinpoints when v8 perf problems are resolved
//	freeze = Object.freeze || function (o) { return o; };

	joinpointStack = [];

	ap      = Array.prototype;
	prepend = ap.unshift;
	append  = ap.push;
	slice   = ap.slice;

	isArray = Array.isArray || function(it) {
		return Object.prototype.toString.call(it) == '[object Array]';
	};

	// Check for a *working* Object.defineProperty, fallback to
	// simple assignment.
	defineProperty = definePropertyWorks()
		? Object.defineProperty
		: function(obj, prop, descriptor) {
		obj[prop] = descriptor.value;
	};

	objectCreate = Object.create ||
		(function() {
			function F() {}
			return function(proto) {
				F.prototype = proto;
				var instance = new F();
				F.prototype = null;
				return instance;
			};
		}());

	iterators = {
		// Before uses reverse iteration
		before: forEachReverse,
		around: false
	};

	// All other advice types use forward iteration
	// Around is a special case that uses recursion rather than
	// iteration.  See Advisor._callAroundAdvice
	iterators.on
		= iterators.afterReturning
		= iterators.afterThrowing
		= iterators.after
		= forEach;

	function forEach(array, func) {
		for (var i = 0, len = array.length; i < len; i++) {
			func(array[i]);
		}
	}

	function forEachReverse(array, func) {
		for (var i = array.length - 1; i >= 0; --i) {
			func(array[i]);
		}
	}

	function joinpoint() {
		return currentJoinpoint;
	}

	function pushJoinpoint(newJoinpoint) {
		joinpointStack.push(currentJoinpoint);
		return currentJoinpoint = newJoinpoint;
	}

	function popJoinpoint() {
		return currentJoinpoint = joinpointStack.pop();
	}

	function definePropertyWorks() {
		try {
			return 'x' in Object.defineProperty({}, 'x', {});
		} catch (e) { /* return falsey */ }
	}

	return meld;

});
})(typeof define == 'function' && define.amd ? define : function (factory) { module.exports = factory(); }
);

},{}],73:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function (require) {

	var makePromise = require('./makePromise');
	var Scheduler = require('./Scheduler');
	var async = require('./env').asap;

	return makePromise({
		scheduler: new Scheduler(async)
	});

});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });

},{"./Scheduler":74,"./env":86,"./makePromise":88}],74:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	// Credit to Twisol (https://github.com/Twisol) for suggesting
	// this type of extensible queue + trampoline approach for next-tick conflation.

	/**
	 * Async task scheduler
	 * @param {function} async function to schedule a single async function
	 * @constructor
	 */
	function Scheduler(async) {
		this._async = async;
		this._running = false;

		this._queue = this;
		this._queueLen = 0;
		this._afterQueue = {};
		this._afterQueueLen = 0;

		var self = this;
		this.drain = function() {
			self._drain();
		};
	}

	/**
	 * Enqueue a task
	 * @param {{ run:function }} task
	 */
	Scheduler.prototype.enqueue = function(task) {
		this._queue[this._queueLen++] = task;
		this.run();
	};

	/**
	 * Enqueue a task to run after the main task queue
	 * @param {{ run:function }} task
	 */
	Scheduler.prototype.afterQueue = function(task) {
		this._afterQueue[this._afterQueueLen++] = task;
		this.run();
	};

	Scheduler.prototype.run = function() {
		if (!this._running) {
			this._running = true;
			this._async(this.drain);
		}
	};

	/**
	 * Drain the handler queue entirely, and then the after queue
	 */
	Scheduler.prototype._drain = function() {
		var i = 0;
		for (; i < this._queueLen; ++i) {
			this._queue[i].run();
			this._queue[i] = void 0;
		}

		this._queueLen = 0;
		this._running = false;

		for (i = 0; i < this._afterQueueLen; ++i) {
			this._afterQueue[i].run();
			this._afterQueue[i] = void 0;
		}

		this._afterQueueLen = 0;
	};

	return Scheduler;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],75:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	/**
	 * Custom error type for promises rejected by promise.timeout
	 * @param {string} message
	 * @constructor
	 */
	function TimeoutError (message) {
		Error.call(this);
		this.message = message;
		this.name = TimeoutError.name;
		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, TimeoutError);
		}
	}

	TimeoutError.prototype = Object.create(Error.prototype);
	TimeoutError.prototype.constructor = TimeoutError;

	return TimeoutError;
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));
},{}],76:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	makeApply.tryCatchResolve = tryCatchResolve;

	return makeApply;

	function makeApply(Promise, call) {
		if(arguments.length < 2) {
			call = tryCatchResolve;
		}

		return apply;

		function apply(f, thisArg, args) {
			var p = Promise._defer();
			var l = args.length;
			var params = new Array(l);
			callAndResolve({ f:f, thisArg:thisArg, args:args, params:params, i:l-1, call:call }, p._handler);

			return p;
		}

		function callAndResolve(c, h) {
			if(c.i < 0) {
				return call(c.f, c.thisArg, c.params, h);
			}

			var handler = Promise._handler(c.args[c.i]);
			handler.fold(callAndResolveNext, c, void 0, h);
		}

		function callAndResolveNext(c, x, h) {
			c.params[c.i] = x;
			c.i -= 1;
			callAndResolve(c, h);
		}
	}

	function tryCatchResolve(f, thisArg, args, resolver) {
		try {
			resolver.resolve(f.apply(thisArg, args));
		} catch(e) {
			resolver.reject(e);
		}
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));



},{}],77:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var state = require('../state');
	var applier = require('../apply');

	return function array(Promise) {

		var applyFold = applier(Promise);
		var toPromise = Promise.resolve;
		var all = Promise.all;

		var ar = Array.prototype.reduce;
		var arr = Array.prototype.reduceRight;
		var slice = Array.prototype.slice;

		// Additional array combinators

		Promise.any = any;
		Promise.some = some;
		Promise.settle = settle;

		Promise.map = map;
		Promise.filter = filter;
		Promise.reduce = reduce;
		Promise.reduceRight = reduceRight;

		/**
		 * When this promise fulfills with an array, do
		 * onFulfilled.apply(void 0, array)
		 * @param {function} onFulfilled function to apply
		 * @returns {Promise} promise for the result of applying onFulfilled
		 */
		Promise.prototype.spread = function(onFulfilled) {
			return this.then(all).then(function(array) {
				return onFulfilled.apply(this, array);
			});
		};

		return Promise;

		/**
		 * One-winner competitive race.
		 * Return a promise that will fulfill when one of the promises
		 * in the input array fulfills, or will reject when all promises
		 * have rejected.
		 * @param {array} promises
		 * @returns {Promise} promise for the first fulfilled value
		 */
		function any(promises) {
			var p = Promise._defer();
			var resolver = p._handler;
			var l = promises.length>>>0;

			var pending = l;
			var errors = [];

			for (var h, x, i = 0; i < l; ++i) {
				x = promises[i];
				if(x === void 0 && !(i in promises)) {
					--pending;
					continue;
				}

				h = Promise._handler(x);
				if(h.state() > 0) {
					resolver.become(h);
					Promise._visitRemaining(promises, i, h);
					break;
				} else {
					h.visit(resolver, handleFulfill, handleReject);
				}
			}

			if(pending === 0) {
				resolver.reject(new RangeError('any(): array must not be empty'));
			}

			return p;

			function handleFulfill(x) {
				/*jshint validthis:true*/
				errors = null;
				this.resolve(x); // this === resolver
			}

			function handleReject(e) {
				/*jshint validthis:true*/
				if(this.resolved) { // this === resolver
					return;
				}

				errors.push(e);
				if(--pending === 0) {
					this.reject(errors);
				}
			}
		}

		/**
		 * N-winner competitive race
		 * Return a promise that will fulfill when n input promises have
		 * fulfilled, or will reject when it becomes impossible for n
		 * input promises to fulfill (ie when promises.length - n + 1
		 * have rejected)
		 * @param {array} promises
		 * @param {number} n
		 * @returns {Promise} promise for the earliest n fulfillment values
		 *
		 * @deprecated
		 */
		function some(promises, n) {
			/*jshint maxcomplexity:7*/
			var p = Promise._defer();
			var resolver = p._handler;

			var results = [];
			var errors = [];

			var l = promises.length>>>0;
			var nFulfill = 0;
			var nReject;
			var x, i; // reused in both for() loops

			// First pass: count actual array items
			for(i=0; i<l; ++i) {
				x = promises[i];
				if(x === void 0 && !(i in promises)) {
					continue;
				}
				++nFulfill;
			}

			// Compute actual goals
			n = Math.max(n, 0);
			nReject = (nFulfill - n + 1);
			nFulfill = Math.min(n, nFulfill);

			if(n > nFulfill) {
				resolver.reject(new RangeError('some(): array must contain at least '
				+ n + ' item(s), but had ' + nFulfill));
			} else if(nFulfill === 0) {
				resolver.resolve(results);
			}

			// Second pass: observe each array item, make progress toward goals
			for(i=0; i<l; ++i) {
				x = promises[i];
				if(x === void 0 && !(i in promises)) {
					continue;
				}

				Promise._handler(x).visit(resolver, fulfill, reject, resolver.notify);
			}

			return p;

			function fulfill(x) {
				/*jshint validthis:true*/
				if(this.resolved) { // this === resolver
					return;
				}

				results.push(x);
				if(--nFulfill === 0) {
					errors = null;
					this.resolve(results);
				}
			}

			function reject(e) {
				/*jshint validthis:true*/
				if(this.resolved) { // this === resolver
					return;
				}

				errors.push(e);
				if(--nReject === 0) {
					results = null;
					this.reject(errors);
				}
			}
		}

		/**
		 * Apply f to the value of each promise in a list of promises
		 * and return a new list containing the results.
		 * @param {array} promises
		 * @param {function(x:*, index:Number):*} f mapping function
		 * @returns {Promise}
		 */
		function map(promises, f) {
			return Promise._traverse(f, promises);
		}

		/**
		 * Filter the provided array of promises using the provided predicate.  Input may
		 * contain promises and values
		 * @param {Array} promises array of promises and values
		 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
		 *  Must return truthy (or promise for truthy) for items to retain.
		 * @returns {Promise} promise that will fulfill with an array containing all items
		 *  for which predicate returned truthy.
		 */
		function filter(promises, predicate) {
			var a = slice.call(promises);
			return Promise._traverse(predicate, a).then(function(keep) {
				return filterSync(a, keep);
			});
		}

		function filterSync(promises, keep) {
			// Safe because we know all promises have fulfilled if we've made it this far
			var l = keep.length;
			var filtered = new Array(l);
			for(var i=0, j=0; i<l; ++i) {
				if(keep[i]) {
					filtered[j++] = Promise._handler(promises[i]).value;
				}
			}
			filtered.length = j;
			return filtered;

		}

		/**
		 * Return a promise that will always fulfill with an array containing
		 * the outcome states of all input promises.  The returned promise
		 * will never reject.
		 * @param {Array} promises
		 * @returns {Promise} promise for array of settled state descriptors
		 */
		function settle(promises) {
			return all(promises.map(settleOne));
		}

		function settleOne(p) {
			var h = Promise._handler(p);
			if(h.state() === 0) {
				return toPromise(p).then(state.fulfilled, state.rejected);
			}

			h._unreport();
			return state.inspect(h);
		}

		/**
		 * Traditional reduce function, similar to `Array.prototype.reduce()`, but
		 * input may contain promises and/or values, and reduceFunc
		 * may return either a value or a promise, *and* initialValue may
		 * be a promise for the starting value.
		 * @param {Array|Promise} promises array or promise for an array of anything,
		 *      may contain a mix of promises and values.
		 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
		 * @returns {Promise} that will resolve to the final reduced value
		 */
		function reduce(promises, f /*, initialValue */) {
			return arguments.length > 2 ? ar.call(promises, liftCombine(f), arguments[2])
					: ar.call(promises, liftCombine(f));
		}

		/**
		 * Traditional reduce function, similar to `Array.prototype.reduceRight()`, but
		 * input may contain promises and/or values, and reduceFunc
		 * may return either a value or a promise, *and* initialValue may
		 * be a promise for the starting value.
		 * @param {Array|Promise} promises array or promise for an array of anything,
		 *      may contain a mix of promises and values.
		 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
		 * @returns {Promise} that will resolve to the final reduced value
		 */
		function reduceRight(promises, f /*, initialValue */) {
			return arguments.length > 2 ? arr.call(promises, liftCombine(f), arguments[2])
					: arr.call(promises, liftCombine(f));
		}

		function liftCombine(f) {
			return function(z, x, i) {
				return applyFold(f, void 0, [z,x,i]);
			};
		}
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../apply":76,"../state":89}],78:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function flow(Promise) {

		var resolve = Promise.resolve;
		var reject = Promise.reject;
		var origCatch = Promise.prototype['catch'];

		/**
		 * Handle the ultimate fulfillment value or rejection reason, and assume
		 * responsibility for all errors.  If an error propagates out of result
		 * or handleFatalError, it will be rethrown to the host, resulting in a
		 * loud stack track on most platforms and a crash on some.
		 * @param {function?} onResult
		 * @param {function?} onError
		 * @returns {undefined}
		 */
		Promise.prototype.done = function(onResult, onError) {
			this._handler.visit(this._handler.receiver, onResult, onError);
		};

		/**
		 * Add Error-type and predicate matching to catch.  Examples:
		 * promise.catch(TypeError, handleTypeError)
		 *   .catch(predicate, handleMatchedErrors)
		 *   .catch(handleRemainingErrors)
		 * @param onRejected
		 * @returns {*}
		 */
		Promise.prototype['catch'] = Promise.prototype.otherwise = function(onRejected) {
			if (arguments.length < 2) {
				return origCatch.call(this, onRejected);
			}

			if(typeof onRejected !== 'function') {
				return this.ensure(rejectInvalidPredicate);
			}

			return origCatch.call(this, createCatchFilter(arguments[1], onRejected));
		};

		/**
		 * Wraps the provided catch handler, so that it will only be called
		 * if the predicate evaluates truthy
		 * @param {?function} handler
		 * @param {function} predicate
		 * @returns {function} conditional catch handler
		 */
		function createCatchFilter(handler, predicate) {
			return function(e) {
				return evaluatePredicate(e, predicate)
					? handler.call(this, e)
					: reject(e);
			};
		}

		/**
		 * Ensures that onFulfilledOrRejected will be called regardless of whether
		 * this promise is fulfilled or rejected.  onFulfilledOrRejected WILL NOT
		 * receive the promises' value or reason.  Any returned value will be disregarded.
		 * onFulfilledOrRejected may throw or return a rejected promise to signal
		 * an additional error.
		 * @param {function} handler handler to be called regardless of
		 *  fulfillment or rejection
		 * @returns {Promise}
		 */
		Promise.prototype['finally'] = Promise.prototype.ensure = function(handler) {
			if(typeof handler !== 'function') {
				return this;
			}

			return this.then(function(x) {
				return runSideEffect(handler, this, identity, x);
			}, function(e) {
				return runSideEffect(handler, this, reject, e);
			});
		};

		function runSideEffect (handler, thisArg, propagate, value) {
			var result = handler.call(thisArg);
			return maybeThenable(result)
				? propagateValue(result, propagate, value)
				: propagate(value);
		}

		function propagateValue (result, propagate, x) {
			return resolve(result).then(function () {
				return propagate(x);
			});
		}

		/**
		 * Recover from a failure by returning a defaultValue.  If defaultValue
		 * is a promise, it's fulfillment value will be used.  If defaultValue is
		 * a promise that rejects, the returned promise will reject with the
		 * same reason.
		 * @param {*} defaultValue
		 * @returns {Promise} new promise
		 */
		Promise.prototype['else'] = Promise.prototype.orElse = function(defaultValue) {
			return this.then(void 0, function() {
				return defaultValue;
			});
		};

		/**
		 * Shortcut for .then(function() { return value; })
		 * @param  {*} value
		 * @return {Promise} a promise that:
		 *  - is fulfilled if value is not a promise, or
		 *  - if value is a promise, will fulfill with its value, or reject
		 *    with its reason.
		 */
		Promise.prototype['yield'] = function(value) {
			return this.then(function() {
				return value;
			});
		};

		/**
		 * Runs a side effect when this promise fulfills, without changing the
		 * fulfillment value.
		 * @param {function} onFulfilledSideEffect
		 * @returns {Promise}
		 */
		Promise.prototype.tap = function(onFulfilledSideEffect) {
			return this.then(onFulfilledSideEffect)['yield'](this);
		};

		return Promise;
	};

	function rejectInvalidPredicate() {
		throw new TypeError('catch predicate must be a function');
	}

	function evaluatePredicate(e, predicate) {
		return isError(predicate) ? e instanceof predicate : predicate(e);
	}

	function isError(predicate) {
		return predicate === Error
			|| (predicate != null && predicate.prototype instanceof Error);
	}

	function maybeThenable(x) {
		return (typeof x === 'object' || typeof x === 'function') && x !== null;
	}

	function identity(x) {
		return x;
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],79:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */
/** @author Jeff Escalante */

(function(define) { 'use strict';
define(function() {

	return function fold(Promise) {

		Promise.prototype.fold = function(f, z) {
			var promise = this._beget();

			this._handler.fold(function(z, x, to) {
				Promise._handler(z).fold(function(x, z, to) {
					to.resolve(f.call(this, z, x));
				}, x, this, to);
			}, z, promise._handler.receiver, promise._handler);

			return promise;
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],80:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var inspect = require('../state').inspect;

	return function inspection(Promise) {

		Promise.prototype.inspect = function() {
			return inspect(Promise._handler(this));
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../state":89}],81:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function generate(Promise) {

		var resolve = Promise.resolve;

		Promise.iterate = iterate;
		Promise.unfold = unfold;

		return Promise;

		/**
		 * @deprecated Use github.com/cujojs/most streams and most.iterate
		 * Generate a (potentially infinite) stream of promised values:
		 * x, f(x), f(f(x)), etc. until condition(x) returns true
		 * @param {function} f function to generate a new x from the previous x
		 * @param {function} condition function that, given the current x, returns
		 *  truthy when the iterate should stop
		 * @param {function} handler function to handle the value produced by f
		 * @param {*|Promise} x starting value, may be a promise
		 * @return {Promise} the result of the last call to f before
		 *  condition returns true
		 */
		function iterate(f, condition, handler, x) {
			return unfold(function(x) {
				return [x, f(x)];
			}, condition, handler, x);
		}

		/**
		 * @deprecated Use github.com/cujojs/most streams and most.unfold
		 * Generate a (potentially infinite) stream of promised values
		 * by applying handler(generator(seed)) iteratively until
		 * condition(seed) returns true.
		 * @param {function} unspool function that generates a [value, newSeed]
		 *  given a seed.
		 * @param {function} condition function that, given the current seed, returns
		 *  truthy when the unfold should stop
		 * @param {function} handler function to handle the value produced by unspool
		 * @param x {*|Promise} starting value, may be a promise
		 * @return {Promise} the result of the last value produced by unspool before
		 *  condition returns true
		 */
		function unfold(unspool, condition, handler, x) {
			return resolve(x).then(function(seed) {
				return resolve(condition(seed)).then(function(done) {
					return done ? seed : resolve(unspool(seed)).spread(next);
				});
			});

			function next(item, newSeed) {
				return resolve(handler(item)).then(function() {
					return unfold(unspool, condition, handler, newSeed);
				});
			}
		}
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],82:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function progress(Promise) {

		/**
		 * @deprecated
		 * Register a progress handler for this promise
		 * @param {function} onProgress
		 * @returns {Promise}
		 */
		Promise.prototype.progress = function(onProgress) {
			return this.then(void 0, void 0, onProgress);
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],83:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var env = require('../env');
	var TimeoutError = require('../TimeoutError');

	function setTimeout(f, ms, x, y) {
		return env.setTimer(function() {
			f(x, y, ms);
		}, ms);
	}

	return function timed(Promise) {
		/**
		 * Return a new promise whose fulfillment value is revealed only
		 * after ms milliseconds
		 * @param {number} ms milliseconds
		 * @returns {Promise}
		 */
		Promise.prototype.delay = function(ms) {
			var p = this._beget();
			this._handler.fold(handleDelay, ms, void 0, p._handler);
			return p;
		};

		function handleDelay(ms, x, h) {
			setTimeout(resolveDelay, ms, x, h);
		}

		function resolveDelay(x, h) {
			h.resolve(x);
		}

		/**
		 * Return a new promise that rejects after ms milliseconds unless
		 * this promise fulfills earlier, in which case the returned promise
		 * fulfills with the same value.
		 * @param {number} ms milliseconds
		 * @param {Error|*=} reason optional rejection reason to use, defaults
		 *   to a TimeoutError if not provided
		 * @returns {Promise}
		 */
		Promise.prototype.timeout = function(ms, reason) {
			var p = this._beget();
			var h = p._handler;

			var t = setTimeout(onTimeout, ms, reason, p._handler);

			this._handler.visit(h,
				function onFulfill(x) {
					env.clearTimer(t);
					this.resolve(x); // this = h
				},
				function onReject(x) {
					env.clearTimer(t);
					this.reject(x); // this = h
				},
				h.notify);

			return p;
		};

		function onTimeout(reason, h, ms) {
			var e = typeof reason === 'undefined'
				? new TimeoutError('timed out after ' + ms + 'ms')
				: reason;
			h.reject(e);
		}

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../TimeoutError":75,"../env":86}],84:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var setTimer = require('../env').setTimer;
	var format = require('../format');

	return function unhandledRejection(Promise) {

		var logError = noop;
		var logInfo = noop;
		var localConsole;

		if(typeof console !== 'undefined') {
			// Alias console to prevent things like uglify's drop_console option from
			// removing console.log/error. Unhandled rejections fall into the same
			// category as uncaught exceptions, and build tools shouldn't silence them.
			localConsole = console;
			logError = typeof localConsole.error !== 'undefined'
				? function (e) { localConsole.error(e); }
				: function (e) { localConsole.log(e); };

			logInfo = typeof localConsole.info !== 'undefined'
				? function (e) { localConsole.info(e); }
				: function (e) { localConsole.log(e); };
		}

		Promise.onPotentiallyUnhandledRejection = function(rejection) {
			enqueue(report, rejection);
		};

		Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
			enqueue(unreport, rejection);
		};

		Promise.onFatalRejection = function(rejection) {
			enqueue(throwit, rejection.value);
		};

		var tasks = [];
		var reported = [];
		var running = null;

		function report(r) {
			if(!r.handled) {
				reported.push(r);
				logError('Potentially unhandled rejection [' + r.id + '] ' + format.formatError(r.value));
			}
		}

		function unreport(r) {
			var i = reported.indexOf(r);
			if(i >= 0) {
				reported.splice(i, 1);
				logInfo('Handled previous rejection [' + r.id + '] ' + format.formatObject(r.value));
			}
		}

		function enqueue(f, x) {
			tasks.push(f, x);
			if(running === null) {
				running = setTimer(flush, 0);
			}
		}

		function flush() {
			running = null;
			while(tasks.length > 0) {
				tasks.shift()(tasks.shift());
			}
		}

		return Promise;
	};

	function throwit(e) {
		throw e;
	}

	function noop() {}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../env":86,"../format":87}],85:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function addWith(Promise) {
		/**
		 * Returns a promise whose handlers will be called with `this` set to
		 * the supplied receiver.  Subsequent promises derived from the
		 * returned promise will also have their handlers called with receiver
		 * as `this`. Calling `with` with undefined or no arguments will return
		 * a promise whose handlers will again be called in the usual Promises/A+
		 * way (no `this`) thus safely undoing any previous `with` in the
		 * promise chain.
		 *
		 * WARNING: Promises returned from `with`/`withThis` are NOT Promises/A+
		 * compliant, specifically violating 2.2.5 (http://promisesaplus.com/#point-41)
		 *
		 * @param {object} receiver `this` value for all handlers attached to
		 *  the returned promise.
		 * @returns {Promise}
		 */
		Promise.prototype['with'] = Promise.prototype.withThis = function(receiver) {
			var p = this._beget();
			var child = p._handler;
			child.receiver = receiver;
			this._handler.chain(child, receiver);
			return p;
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));


},{}],86:[function(require,module,exports){
(function (process){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/*global process,document,setTimeout,clearTimeout,MutationObserver,WebKitMutationObserver*/
(function(define) { 'use strict';
define(function(require) {
	/*jshint maxcomplexity:6*/

	// Sniff "best" async scheduling option
	// Prefer process.nextTick or MutationObserver, then check for
	// setTimeout, and finally vertx, since its the only env that doesn't
	// have setTimeout

	var MutationObs;
	var capturedSetTimeout = typeof setTimeout !== 'undefined' && setTimeout;

	// Default env
	var setTimer = function(f, ms) { return setTimeout(f, ms); };
	var clearTimer = function(t) { return clearTimeout(t); };
	var asap = function (f) { return capturedSetTimeout(f, 0); };

	// Detect specific env
	if (isNode()) { // Node
		asap = function (f) { return process.nextTick(f); };

	} else if (MutationObs = hasMutationObserver()) { // Modern browser
		asap = initMutationObserver(MutationObs);

	} else if (!capturedSetTimeout) { // vert.x
		var vertxRequire = require;
		var vertx = vertxRequire('vertx');
		setTimer = function (f, ms) { return vertx.setTimer(ms, f); };
		clearTimer = vertx.cancelTimer;
		asap = vertx.runOnLoop || vertx.runOnContext;
	}

	return {
		setTimer: setTimer,
		clearTimer: clearTimer,
		asap: asap
	};

	function isNode () {
		return typeof process !== 'undefined' &&
			Object.prototype.toString.call(process) === '[object process]';
	}

	function hasMutationObserver () {
		return (typeof MutationObserver === 'function' && MutationObserver) ||
			(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver);
	}

	function initMutationObserver(MutationObserver) {
		var scheduled;
		var node = document.createTextNode('');
		var o = new MutationObserver(run);
		o.observe(node, { characterData: true });

		function run() {
			var f = scheduled;
			scheduled = void 0;
			f();
		}

		var i = 0;
		return function (f) {
			scheduled = f;
			node.data = (i ^= 1);
		};
	}
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

}).call(this,require('_process'))
},{"_process":95}],87:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return {
		formatError: formatError,
		formatObject: formatObject,
		tryStringify: tryStringify
	};

	/**
	 * Format an error into a string.  If e is an Error and has a stack property,
	 * it's returned.  Otherwise, e is formatted using formatObject, with a
	 * warning added about e not being a proper Error.
	 * @param {*} e
	 * @returns {String} formatted string, suitable for output to developers
	 */
	function formatError(e) {
		var s = typeof e === 'object' && e !== null && (e.stack || e.message) ? e.stack || e.message : formatObject(e);
		return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
	}

	/**
	 * Format an object, detecting "plain" objects and running them through
	 * JSON.stringify if possible.
	 * @param {Object} o
	 * @returns {string}
	 */
	function formatObject(o) {
		var s = String(o);
		if(s === '[object Object]' && typeof JSON !== 'undefined') {
			s = tryStringify(o, s);
		}
		return s;
	}

	/**
	 * Try to return the result of JSON.stringify(x).  If that fails, return
	 * defaultValue
	 * @param {*} x
	 * @param {*} defaultValue
	 * @returns {String|*} JSON.stringify(x) or defaultValue
	 */
	function tryStringify(x, defaultValue) {
		try {
			return JSON.stringify(x);
		} catch(e) {
			return defaultValue;
		}
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],88:[function(require,module,exports){
(function (process){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function makePromise(environment) {

		var tasks = environment.scheduler;
		var emitRejection = initEmitRejection();

		var objectCreate = Object.create ||
			function(proto) {
				function Child() {}
				Child.prototype = proto;
				return new Child();
			};

		/**
		 * Create a promise whose fate is determined by resolver
		 * @constructor
		 * @returns {Promise} promise
		 * @name Promise
		 */
		function Promise(resolver, handler) {
			this._handler = resolver === Handler ? handler : init(resolver);
		}

		/**
		 * Run the supplied resolver
		 * @param resolver
		 * @returns {Pending}
		 */
		function init(resolver) {
			var handler = new Pending();

			try {
				resolver(promiseResolve, promiseReject, promiseNotify);
			} catch (e) {
				promiseReject(e);
			}

			return handler;

			/**
			 * Transition from pre-resolution state to post-resolution state, notifying
			 * all listeners of the ultimate fulfillment or rejection
			 * @param {*} x resolution value
			 */
			function promiseResolve (x) {
				handler.resolve(x);
			}
			/**
			 * Reject this promise with reason, which will be used verbatim
			 * @param {Error|*} reason rejection reason, strongly suggested
			 *   to be an Error type
			 */
			function promiseReject (reason) {
				handler.reject(reason);
			}

			/**
			 * @deprecated
			 * Issue a progress event, notifying all progress listeners
			 * @param {*} x progress event payload to pass to all listeners
			 */
			function promiseNotify (x) {
				handler.notify(x);
			}
		}

		// Creation

		Promise.resolve = resolve;
		Promise.reject = reject;
		Promise.never = never;

		Promise._defer = defer;
		Promise._handler = getHandler;

		/**
		 * Returns a trusted promise. If x is already a trusted promise, it is
		 * returned, otherwise returns a new trusted Promise which follows x.
		 * @param  {*} x
		 * @return {Promise} promise
		 */
		function resolve(x) {
			return isPromise(x) ? x
				: new Promise(Handler, new Async(getHandler(x)));
		}

		/**
		 * Return a reject promise with x as its reason (x is used verbatim)
		 * @param {*} x
		 * @returns {Promise} rejected promise
		 */
		function reject(x) {
			return new Promise(Handler, new Async(new Rejected(x)));
		}

		/**
		 * Return a promise that remains pending forever
		 * @returns {Promise} forever-pending promise.
		 */
		function never() {
			return foreverPendingPromise; // Should be frozen
		}

		/**
		 * Creates an internal {promise, resolver} pair
		 * @private
		 * @returns {Promise}
		 */
		function defer() {
			return new Promise(Handler, new Pending());
		}

		// Transformation and flow control

		/**
		 * Transform this promise's fulfillment value, returning a new Promise
		 * for the transformed result.  If the promise cannot be fulfilled, onRejected
		 * is called with the reason.  onProgress *may* be called with updates toward
		 * this promise's fulfillment.
		 * @param {function=} onFulfilled fulfillment handler
		 * @param {function=} onRejected rejection handler
		 * @param {function=} onProgress @deprecated progress handler
		 * @return {Promise} new promise
		 */
		Promise.prototype.then = function(onFulfilled, onRejected, onProgress) {
			var parent = this._handler;
			var state = parent.join().state();

			if ((typeof onFulfilled !== 'function' && state > 0) ||
				(typeof onRejected !== 'function' && state < 0)) {
				// Short circuit: value will not change, simply share handler
				return new this.constructor(Handler, parent);
			}

			var p = this._beget();
			var child = p._handler;

			parent.chain(child, parent.receiver, onFulfilled, onRejected, onProgress);

			return p;
		};

		/**
		 * If this promise cannot be fulfilled due to an error, call onRejected to
		 * handle the error. Shortcut for .then(undefined, onRejected)
		 * @param {function?} onRejected
		 * @return {Promise}
		 */
		Promise.prototype['catch'] = function(onRejected) {
			return this.then(void 0, onRejected);
		};

		/**
		 * Creates a new, pending promise of the same type as this promise
		 * @private
		 * @returns {Promise}
		 */
		Promise.prototype._beget = function() {
			return begetFrom(this._handler, this.constructor);
		};

		function begetFrom(parent, Promise) {
			var child = new Pending(parent.receiver, parent.join().context);
			return new Promise(Handler, child);
		}

		// Array combinators

		Promise.all = all;
		Promise.race = race;
		Promise._traverse = traverse;

		/**
		 * Return a promise that will fulfill when all promises in the
		 * input array have fulfilled, or will reject when one of the
		 * promises rejects.
		 * @param {array} promises array of promises
		 * @returns {Promise} promise for array of fulfillment values
		 */
		function all(promises) {
			return traverseWith(snd, null, promises);
		}

		/**
		 * Array<Promise<X>> -> Promise<Array<f(X)>>
		 * @private
		 * @param {function} f function to apply to each promise's value
		 * @param {Array} promises array of promises
		 * @returns {Promise} promise for transformed values
		 */
		function traverse(f, promises) {
			return traverseWith(tryCatch2, f, promises);
		}

		function traverseWith(tryMap, f, promises) {
			var handler = typeof f === 'function' ? mapAt : settleAt;

			var resolver = new Pending();
			var pending = promises.length >>> 0;
			var results = new Array(pending);

			for (var i = 0, x; i < promises.length && !resolver.resolved; ++i) {
				x = promises[i];

				if (x === void 0 && !(i in promises)) {
					--pending;
					continue;
				}

				traverseAt(promises, handler, i, x, resolver);
			}

			if(pending === 0) {
				resolver.become(new Fulfilled(results));
			}

			return new Promise(Handler, resolver);

			function mapAt(i, x, resolver) {
				if(!resolver.resolved) {
					traverseAt(promises, settleAt, i, tryMap(f, x, i), resolver);
				}
			}

			function settleAt(i, x, resolver) {
				results[i] = x;
				if(--pending === 0) {
					resolver.become(new Fulfilled(results));
				}
			}
		}

		function traverseAt(promises, handler, i, x, resolver) {
			if (maybeThenable(x)) {
				var h = getHandlerMaybeThenable(x);
				var s = h.state();

				if (s === 0) {
					h.fold(handler, i, void 0, resolver);
				} else if (s > 0) {
					handler(i, h.value, resolver);
				} else {
					resolver.become(h);
					visitRemaining(promises, i+1, h);
				}
			} else {
				handler(i, x, resolver);
			}
		}

		Promise._visitRemaining = visitRemaining;
		function visitRemaining(promises, start, handler) {
			for(var i=start; i<promises.length; ++i) {
				markAsHandled(getHandler(promises[i]), handler);
			}
		}

		function markAsHandled(h, handler) {
			if(h === handler) {
				return;
			}

			var s = h.state();
			if(s === 0) {
				h.visit(h, void 0, h._unreport);
			} else if(s < 0) {
				h._unreport();
			}
		}

		/**
		 * Fulfill-reject competitive race. Return a promise that will settle
		 * to the same state as the earliest input promise to settle.
		 *
		 * WARNING: The ES6 Promise spec requires that race()ing an empty array
		 * must return a promise that is pending forever.  This implementation
		 * returns a singleton forever-pending promise, the same singleton that is
		 * returned by Promise.never(), thus can be checked with ===
		 *
		 * @param {array} promises array of promises to race
		 * @returns {Promise} if input is non-empty, a promise that will settle
		 * to the same outcome as the earliest input promise to settle. if empty
		 * is empty, returns a promise that will never settle.
		 */
		function race(promises) {
			if(typeof promises !== 'object' || promises === null) {
				return reject(new TypeError('non-iterable passed to race()'));
			}

			// Sigh, race([]) is untestable unless we return *something*
			// that is recognizable without calling .then() on it.
			return promises.length === 0 ? never()
				 : promises.length === 1 ? resolve(promises[0])
				 : runRace(promises);
		}

		function runRace(promises) {
			var resolver = new Pending();
			var i, x, h;
			for(i=0; i<promises.length; ++i) {
				x = promises[i];
				if (x === void 0 && !(i in promises)) {
					continue;
				}

				h = getHandler(x);
				if(h.state() !== 0) {
					resolver.become(h);
					visitRemaining(promises, i+1, h);
					break;
				} else {
					h.visit(resolver, resolver.resolve, resolver.reject);
				}
			}
			return new Promise(Handler, resolver);
		}

		// Promise internals
		// Below this, everything is @private

		/**
		 * Get an appropriate handler for x, without checking for cycles
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandler(x) {
			if(isPromise(x)) {
				return x._handler.join();
			}
			return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
		}

		/**
		 * Get a handler for thenable x.
		 * NOTE: You must only call this if maybeThenable(x) == true
		 * @param {object|function|Promise} x
		 * @returns {object} handler
		 */
		function getHandlerMaybeThenable(x) {
			return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
		}

		/**
		 * Get a handler for potentially untrusted thenable x
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandlerUntrusted(x) {
			try {
				var untrustedThen = x.then;
				return typeof untrustedThen === 'function'
					? new Thenable(untrustedThen, x)
					: new Fulfilled(x);
			} catch(e) {
				return new Rejected(e);
			}
		}

		/**
		 * Handler for a promise that is pending forever
		 * @constructor
		 */
		function Handler() {}

		Handler.prototype.when
			= Handler.prototype.become
			= Handler.prototype.notify // deprecated
			= Handler.prototype.fail
			= Handler.prototype._unreport
			= Handler.prototype._report
			= noop;

		Handler.prototype._state = 0;

		Handler.prototype.state = function() {
			return this._state;
		};

		/**
		 * Recursively collapse handler chain to find the handler
		 * nearest to the fully resolved value.
		 * @returns {object} handler nearest the fully resolved value
		 */
		Handler.prototype.join = function() {
			var h = this;
			while(h.handler !== void 0) {
				h = h.handler;
			}
			return h;
		};

		Handler.prototype.chain = function(to, receiver, fulfilled, rejected, progress) {
			this.when({
				resolver: to,
				receiver: receiver,
				fulfilled: fulfilled,
				rejected: rejected,
				progress: progress
			});
		};

		Handler.prototype.visit = function(receiver, fulfilled, rejected, progress) {
			this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
		};

		Handler.prototype.fold = function(f, z, c, to) {
			this.when(new Fold(f, z, c, to));
		};

		/**
		 * Handler that invokes fail() on any handler it becomes
		 * @constructor
		 */
		function FailIfRejected() {}

		inherit(Handler, FailIfRejected);

		FailIfRejected.prototype.become = function(h) {
			h.fail();
		};

		var failIfRejected = new FailIfRejected();

		/**
		 * Handler that manages a queue of consumers waiting on a pending promise
		 * @constructor
		 */
		function Pending(receiver, inheritedContext) {
			Promise.createContext(this, inheritedContext);

			this.consumers = void 0;
			this.receiver = receiver;
			this.handler = void 0;
			this.resolved = false;
		}

		inherit(Handler, Pending);

		Pending.prototype._state = 0;

		Pending.prototype.resolve = function(x) {
			this.become(getHandler(x));
		};

		Pending.prototype.reject = function(x) {
			if(this.resolved) {
				return;
			}

			this.become(new Rejected(x));
		};

		Pending.prototype.join = function() {
			if (!this.resolved) {
				return this;
			}

			var h = this;

			while (h.handler !== void 0) {
				h = h.handler;
				if (h === this) {
					return this.handler = cycle();
				}
			}

			return h;
		};

		Pending.prototype.run = function() {
			var q = this.consumers;
			var handler = this.handler;
			this.handler = this.handler.join();
			this.consumers = void 0;

			for (var i = 0; i < q.length; ++i) {
				handler.when(q[i]);
			}
		};

		Pending.prototype.become = function(handler) {
			if(this.resolved) {
				return;
			}

			this.resolved = true;
			this.handler = handler;
			if(this.consumers !== void 0) {
				tasks.enqueue(this);
			}

			if(this.context !== void 0) {
				handler._report(this.context);
			}
		};

		Pending.prototype.when = function(continuation) {
			if(this.resolved) {
				tasks.enqueue(new ContinuationTask(continuation, this.handler));
			} else {
				if(this.consumers === void 0) {
					this.consumers = [continuation];
				} else {
					this.consumers.push(continuation);
				}
			}
		};

		/**
		 * @deprecated
		 */
		Pending.prototype.notify = function(x) {
			if(!this.resolved) {
				tasks.enqueue(new ProgressTask(x, this));
			}
		};

		Pending.prototype.fail = function(context) {
			var c = typeof context === 'undefined' ? this.context : context;
			this.resolved && this.handler.join().fail(c);
		};

		Pending.prototype._report = function(context) {
			this.resolved && this.handler.join()._report(context);
		};

		Pending.prototype._unreport = function() {
			this.resolved && this.handler.join()._unreport();
		};

		/**
		 * Wrap another handler and force it into a future stack
		 * @param {object} handler
		 * @constructor
		 */
		function Async(handler) {
			this.handler = handler;
		}

		inherit(Handler, Async);

		Async.prototype.when = function(continuation) {
			tasks.enqueue(new ContinuationTask(continuation, this));
		};

		Async.prototype._report = function(context) {
			this.join()._report(context);
		};

		Async.prototype._unreport = function() {
			this.join()._unreport();
		};

		/**
		 * Handler that wraps an untrusted thenable and assimilates it in a future stack
		 * @param {function} then
		 * @param {{then: function}} thenable
		 * @constructor
		 */
		function Thenable(then, thenable) {
			Pending.call(this);
			tasks.enqueue(new AssimilateTask(then, thenable, this));
		}

		inherit(Pending, Thenable);

		/**
		 * Handler for a fulfilled promise
		 * @param {*} x fulfillment value
		 * @constructor
		 */
		function Fulfilled(x) {
			Promise.createContext(this);
			this.value = x;
		}

		inherit(Handler, Fulfilled);

		Fulfilled.prototype._state = 1;

		Fulfilled.prototype.fold = function(f, z, c, to) {
			runContinuation3(f, z, this, c, to);
		};

		Fulfilled.prototype.when = function(cont) {
			runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
		};

		var errorId = 0;

		/**
		 * Handler for a rejected promise
		 * @param {*} x rejection reason
		 * @constructor
		 */
		function Rejected(x) {
			Promise.createContext(this);

			this.id = ++errorId;
			this.value = x;
			this.handled = false;
			this.reported = false;

			this._report();
		}

		inherit(Handler, Rejected);

		Rejected.prototype._state = -1;

		Rejected.prototype.fold = function(f, z, c, to) {
			to.become(this);
		};

		Rejected.prototype.when = function(cont) {
			if(typeof cont.rejected === 'function') {
				this._unreport();
			}
			runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
		};

		Rejected.prototype._report = function(context) {
			tasks.afterQueue(new ReportTask(this, context));
		};

		Rejected.prototype._unreport = function() {
			if(this.handled) {
				return;
			}
			this.handled = true;
			tasks.afterQueue(new UnreportTask(this));
		};

		Rejected.prototype.fail = function(context) {
			this.reported = true;
			emitRejection('unhandledRejection', this);
			Promise.onFatalRejection(this, context === void 0 ? this.context : context);
		};

		function ReportTask(rejection, context) {
			this.rejection = rejection;
			this.context = context;
		}

		ReportTask.prototype.run = function() {
			if(!this.rejection.handled && !this.rejection.reported) {
				this.rejection.reported = true;
				emitRejection('unhandledRejection', this.rejection) ||
					Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
			}
		};

		function UnreportTask(rejection) {
			this.rejection = rejection;
		}

		UnreportTask.prototype.run = function() {
			if(this.rejection.reported) {
				emitRejection('rejectionHandled', this.rejection) ||
					Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
			}
		};

		// Unhandled rejection hooks
		// By default, everything is a noop

		Promise.createContext
			= Promise.enterContext
			= Promise.exitContext
			= Promise.onPotentiallyUnhandledRejection
			= Promise.onPotentiallyUnhandledRejectionHandled
			= Promise.onFatalRejection
			= noop;

		// Errors and singletons

		var foreverPendingHandler = new Handler();
		var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);

		function cycle() {
			return new Rejected(new TypeError('Promise cycle'));
		}

		// Task runners

		/**
		 * Run a single consumer
		 * @constructor
		 */
		function ContinuationTask(continuation, handler) {
			this.continuation = continuation;
			this.handler = handler;
		}

		ContinuationTask.prototype.run = function() {
			this.handler.join().when(this.continuation);
		};

		/**
		 * Run a queue of progress handlers
		 * @constructor
		 */
		function ProgressTask(value, handler) {
			this.handler = handler;
			this.value = value;
		}

		ProgressTask.prototype.run = function() {
			var q = this.handler.consumers;
			if(q === void 0) {
				return;
			}

			for (var c, i = 0; i < q.length; ++i) {
				c = q[i];
				runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
			}
		};

		/**
		 * Assimilate a thenable, sending it's value to resolver
		 * @param {function} then
		 * @param {object|function} thenable
		 * @param {object} resolver
		 * @constructor
		 */
		function AssimilateTask(then, thenable, resolver) {
			this._then = then;
			this.thenable = thenable;
			this.resolver = resolver;
		}

		AssimilateTask.prototype.run = function() {
			var h = this.resolver;
			tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);

			function _resolve(x) { h.resolve(x); }
			function _reject(x)  { h.reject(x); }
			function _notify(x)  { h.notify(x); }
		};

		function tryAssimilate(then, thenable, resolve, reject, notify) {
			try {
				then.call(thenable, resolve, reject, notify);
			} catch (e) {
				reject(e);
			}
		}

		/**
		 * Fold a handler value with z
		 * @constructor
		 */
		function Fold(f, z, c, to) {
			this.f = f; this.z = z; this.c = c; this.to = to;
			this.resolver = failIfRejected;
			this.receiver = this;
		}

		Fold.prototype.fulfilled = function(x) {
			this.f.call(this.c, this.z, x, this.to);
		};

		Fold.prototype.rejected = function(x) {
			this.to.reject(x);
		};

		Fold.prototype.progress = function(x) {
			this.to.notify(x);
		};

		// Other helpers

		/**
		 * @param {*} x
		 * @returns {boolean} true iff x is a trusted Promise
		 */
		function isPromise(x) {
			return x instanceof Promise;
		}

		/**
		 * Test just enough to rule out primitives, in order to take faster
		 * paths in some code
		 * @param {*} x
		 * @returns {boolean} false iff x is guaranteed *not* to be a thenable
		 */
		function maybeThenable(x) {
			return (typeof x === 'object' || typeof x === 'function') && x !== null;
		}

		function runContinuation1(f, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.become(h);
			}

			Promise.enterContext(h);
			tryCatchReject(f, h.value, receiver, next);
			Promise.exitContext();
		}

		function runContinuation3(f, x, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.become(h);
			}

			Promise.enterContext(h);
			tryCatchReject3(f, x, h.value, receiver, next);
			Promise.exitContext();
		}

		/**
		 * @deprecated
		 */
		function runNotify(f, x, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.notify(x);
			}

			Promise.enterContext(h);
			tryCatchReturn(f, x, receiver, next);
			Promise.exitContext();
		}

		function tryCatch2(f, a, b) {
			try {
				return f(a, b);
			} catch(e) {
				return reject(e);
			}
		}

		/**
		 * Return f.call(thisArg, x), or if it throws return a rejected promise for
		 * the thrown exception
		 */
		function tryCatchReject(f, x, thisArg, next) {
			try {
				next.become(getHandler(f.call(thisArg, x)));
			} catch(e) {
				next.become(new Rejected(e));
			}
		}

		/**
		 * Same as above, but includes the extra argument parameter.
		 */
		function tryCatchReject3(f, x, y, thisArg, next) {
			try {
				f.call(thisArg, x, y, next);
			} catch(e) {
				next.become(new Rejected(e));
			}
		}

		/**
		 * @deprecated
		 * Return f.call(thisArg, x), or if it throws, *return* the exception
		 */
		function tryCatchReturn(f, x, thisArg, next) {
			try {
				next.notify(f.call(thisArg, x));
			} catch(e) {
				next.notify(e);
			}
		}

		function inherit(Parent, Child) {
			Child.prototype = objectCreate(Parent.prototype);
			Child.prototype.constructor = Child;
		}

		function snd(x, y) {
			return y;
		}

		function noop() {}

		function initEmitRejection() {
			/*global process, self, CustomEvent*/
			if(typeof process !== 'undefined' && process !== null
				&& typeof process.emit === 'function') {
				// Returning falsy here means to call the default
				// onPotentiallyUnhandledRejection API.  This is safe even in
				// browserify since process.emit always returns falsy in browserify:
				// https://github.com/defunctzombie/node-process/blob/master/browser.js#L40-L46
				return function(type, rejection) {
					return type === 'unhandledRejection'
						? process.emit(type, rejection.value, rejection)
						: process.emit(type, rejection);
				};
			} else if(typeof self !== 'undefined' && typeof CustomEvent === 'function') {
				return (function(noop, self, CustomEvent) {
					var hasCustomEvent = false;
					try {
						var ev = new CustomEvent('unhandledRejection');
						hasCustomEvent = ev instanceof CustomEvent;
					} catch (e) {}

					return !hasCustomEvent ? noop : function(type, rejection) {
						var ev = new CustomEvent(type, {
							detail: {
								reason: rejection.value,
								key: rejection
							},
							bubbles: false,
							cancelable: true
						});

						return !self.dispatchEvent(ev);
					};
				}(noop, self, CustomEvent));
			}

			return noop;
		}

		return Promise;
	};
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

}).call(this,require('_process'))
},{"_process":95}],89:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return {
		pending: toPendingState,
		fulfilled: toFulfilledState,
		rejected: toRejectedState,
		inspect: inspect
	};

	function toPendingState() {
		return { state: 'pending' };
	}

	function toRejectedState(e) {
		return { state: 'rejected', reason: e };
	}

	function toFulfilledState(x) {
		return { state: 'fulfilled', value: x };
	}

	function inspect(handler) {
		var state = handler.state();
		return state === 0 ? toPendingState()
			 : state > 0   ? toFulfilledState(handler.value)
			               : toRejectedState(handler.value);
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],90:[function(require,module,exports){
/** @license MIT License (c) copyright 2011-2013 original author or authors */

/**
 * sequence.js
 *
 * Run a set of task functions in sequence.  All tasks will
 * receive the same args.
 *
 * @author Brian Cavalier
 * @author John Hann
 */

(function(define) {
define(function(require) {

	var when = require('./when');
	var all = when.Promise.all;
	var slice = Array.prototype.slice;

	/**
	 * Run array of tasks in sequence with no overlap
	 * @param tasks {Array|Promise} array or promiseForArray of task functions
	 * @param [args] {*} arguments to be passed to all tasks
	 * @return {Promise} promise for an array containing
	 * the result of each task in the array position corresponding
	 * to position of the task in the tasks array
	 */
	return function sequence(tasks /*, args... */) {
		var results = [];

		return all(slice.call(arguments, 1)).then(function(args) {
			return when.reduce(tasks, function(results, task) {
				return when(task.apply(void 0, args), addResult);
			}, results);
		});

		function addResult(result) {
			results.push(result);
			return results;
		}
	};

});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });



},{"./when":92}],91:[function(require,module,exports){
/** @license MIT License (c) copyright 2011-2013 original author or authors */

/**
 * timeout.js
 *
 * Helper that returns a promise that rejects after a specified timeout,
 * if not explicitly resolved or rejected before that.
 *
 * @author Brian Cavalier
 * @author John Hann
 */

(function(define) {
define(function(require) {

	var when = require('./when');

    /**
	 * @deprecated Use when(trigger).timeout(ms)
     */
    return function timeout(msec, trigger) {
		return when(trigger).timeout(msec);
    };
});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });



},{"./when":92}],92:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */

/**
 * Promises/A+ and when() implementation
 * when is part of the cujoJS family of libraries (http://cujojs.com/)
 * @author Brian Cavalier
 * @author John Hann
 */
(function(define) { 'use strict';
define(function (require) {

	var timed = require('./lib/decorators/timed');
	var array = require('./lib/decorators/array');
	var flow = require('./lib/decorators/flow');
	var fold = require('./lib/decorators/fold');
	var inspect = require('./lib/decorators/inspect');
	var generate = require('./lib/decorators/iterate');
	var progress = require('./lib/decorators/progress');
	var withThis = require('./lib/decorators/with');
	var unhandledRejection = require('./lib/decorators/unhandledRejection');
	var TimeoutError = require('./lib/TimeoutError');

	var Promise = [array, flow, fold, generate, progress,
		inspect, withThis, timed, unhandledRejection]
		.reduce(function(Promise, feature) {
			return feature(Promise);
		}, require('./lib/Promise'));

	var apply = require('./lib/apply')(Promise);

	// Public API

	when.promise     = promise;              // Create a pending promise
	when.resolve     = Promise.resolve;      // Create a resolved promise
	when.reject      = Promise.reject;       // Create a rejected promise

	when.lift        = lift;                 // lift a function to return promises
	when['try']      = attempt;              // call a function and return a promise
	when.attempt     = attempt;              // alias for when.try

	when.iterate     = Promise.iterate;      // DEPRECATED (use cujojs/most streams) Generate a stream of promises
	when.unfold      = Promise.unfold;       // DEPRECATED (use cujojs/most streams) Generate a stream of promises

	when.join        = join;                 // Join 2 or more promises

	when.all         = all;                  // Resolve a list of promises
	when.settle      = settle;               // Settle a list of promises

	when.any         = lift(Promise.any);    // One-winner race
	when.some        = lift(Promise.some);   // Multi-winner race
	when.race        = lift(Promise.race);   // First-to-settle race

	when.map         = map;                  // Array.map() for promises
	when.filter      = filter;               // Array.filter() for promises
	when.reduce      = lift(Promise.reduce);       // Array.reduce() for promises
	when.reduceRight = lift(Promise.reduceRight);  // Array.reduceRight() for promises

	when.isPromiseLike = isPromiseLike;      // Is something promise-like, aka thenable

	when.Promise     = Promise;              // Promise constructor
	when.defer       = defer;                // Create a {promise, resolve, reject} tuple

	// Error types

	when.TimeoutError = TimeoutError;

	/**
	 * Get a trusted promise for x, or by transforming x with onFulfilled
	 *
	 * @param {*} x
	 * @param {function?} onFulfilled callback to be called when x is
	 *   successfully fulfilled.  If promiseOrValue is an immediate value, callback
	 *   will be invoked immediately.
	 * @param {function?} onRejected callback to be called when x is
	 *   rejected.
	 * @param {function?} onProgress callback to be called when progress updates
	 *   are issued for x. @deprecated
	 * @returns {Promise} a new promise that will fulfill with the return
	 *   value of callback or errback or the completion value of promiseOrValue if
	 *   callback and/or errback is not supplied.
	 */
	function when(x, onFulfilled, onRejected, onProgress) {
		var p = Promise.resolve(x);
		if (arguments.length < 2) {
			return p;
		}

		return p.then(onFulfilled, onRejected, onProgress);
	}

	/**
	 * Creates a new promise whose fate is determined by resolver.
	 * @param {function} resolver function(resolve, reject, notify)
	 * @returns {Promise} promise whose fate is determine by resolver
	 */
	function promise(resolver) {
		return new Promise(resolver);
	}

	/**
	 * Lift the supplied function, creating a version of f that returns
	 * promises, and accepts promises as arguments.
	 * @param {function} f
	 * @returns {Function} version of f that returns promises
	 */
	function lift(f) {
		return function() {
			for(var i=0, l=arguments.length, a=new Array(l); i<l; ++i) {
				a[i] = arguments[i];
			}
			return apply(f, this, a);
		};
	}

	/**
	 * Call f in a future turn, with the supplied args, and return a promise
	 * for the result.
	 * @param {function} f
	 * @returns {Promise}
	 */
	function attempt(f /*, args... */) {
		/*jshint validthis:true */
		for(var i=0, l=arguments.length-1, a=new Array(l); i<l; ++i) {
			a[i] = arguments[i+1];
		}
		return apply(f, this, a);
	}

	/**
	 * Creates a {promise, resolver} pair, either or both of which
	 * may be given out safely to consumers.
	 * @return {{promise: Promise, resolve: function, reject: function, notify: function}}
	 */
	function defer() {
		return new Deferred();
	}

	function Deferred() {
		var p = Promise._defer();

		function resolve(x) { p._handler.resolve(x); }
		function reject(x) { p._handler.reject(x); }
		function notify(x) { p._handler.notify(x); }

		this.promise = p;
		this.resolve = resolve;
		this.reject = reject;
		this.notify = notify;
		this.resolver = { resolve: resolve, reject: reject, notify: notify };
	}

	/**
	 * Determines if x is promise-like, i.e. a thenable object
	 * NOTE: Will return true for *any thenable object*, and isn't truly
	 * safe, since it may attempt to access the `then` property of x (i.e.
	 *  clever/malicious getters may do weird things)
	 * @param {*} x anything
	 * @returns {boolean} true if x is promise-like
	 */
	function isPromiseLike(x) {
		return x && typeof x.then === 'function';
	}

	/**
	 * Return a promise that will resolve only once all the supplied arguments
	 * have resolved. The resolution value of the returned promise will be an array
	 * containing the resolution values of each of the arguments.
	 * @param {...*} arguments may be a mix of promises and values
	 * @returns {Promise}
	 */
	function join(/* ...promises */) {
		return Promise.all(arguments);
	}

	/**
	 * Return a promise that will fulfill once all input promises have
	 * fulfilled, or reject when any one input promise rejects.
	 * @param {array|Promise} promises array (or promise for an array) of promises
	 * @returns {Promise}
	 */
	function all(promises) {
		return when(promises, Promise.all);
	}

	/**
	 * Return a promise that will always fulfill with an array containing
	 * the outcome states of all input promises.  The returned promise
	 * will only reject if `promises` itself is a rejected promise.
	 * @param {array|Promise} promises array (or promise for an array) of promises
	 * @returns {Promise} promise for array of settled state descriptors
	 */
	function settle(promises) {
		return when(promises, Promise.settle);
	}

	/**
	 * Promise-aware array map function, similar to `Array.prototype.map()`,
	 * but input array may contain promises or values.
	 * @param {Array|Promise} promises array of anything, may contain promises and values
	 * @param {function(x:*, index:Number):*} mapFunc map function which may
	 *  return a promise or value
	 * @returns {Promise} promise that will fulfill with an array of mapped values
	 *  or reject if any input promise rejects.
	 */
	function map(promises, mapFunc) {
		return when(promises, function(promises) {
			return Promise.map(promises, mapFunc);
		});
	}

	/**
	 * Filter the provided array of promises using the provided predicate.  Input may
	 * contain promises and values
	 * @param {Array|Promise} promises array of promises and values
	 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
	 *  Must return truthy (or promise for truthy) for items to retain.
	 * @returns {Promise} promise that will fulfill with an array containing all items
	 *  for which predicate returned truthy.
	 */
	function filter(promises, predicate) {
		return when(promises, function(promises) {
			return Promise.filter(promises, predicate);
		});
	}

	return when;
});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });

},{"./lib/Promise":73,"./lib/TimeoutError":75,"./lib/apply":76,"./lib/decorators/array":77,"./lib/decorators/flow":78,"./lib/decorators/fold":79,"./lib/decorators/inspect":80,"./lib/decorators/iterate":81,"./lib/decorators/progress":82,"./lib/decorators/timed":83,"./lib/decorators/unhandledRejection":84,"./lib/decorators/with":85}],93:[function(require,module,exports){
/** @license MIT License (c) copyright 2011-2013 original author or authors */

/**
 * wire
 * Javascript IOC Container
 *
 * wire is part of the cujoJS family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Brian Cavalier
 * @author John Hann
 * @version 0.10.11
 */
(function(rootSpec, define){ 'use strict';
define(function(require) {

	var createContext, rootContext, rootOptions;

	wire.version = '0.10.11';

	createContext = require('./lib/context');

	rootOptions = { require: require };

	/**
	 * Main Programmtic API.  The top-level wire function that wires contexts
	 * as direct children of the (possibly implicit) root context.  It ensures
	 * that the root context has been wired before wiring children.
	 *
	 * @public
	 *
	 * @param spec {Object|String|Array|Promise} can be any one of the following:
	 *  1. Object - wiring spec
	 *  2. String - module id of the wiring spec to load and then wire
	 *  3. Array - mixed array of Strings and Objects, each of which is either
	 *   a wiring spec, or the module id of a wiring spec
	 *  4. Promise - a promise for any of the above
	 *  @param options {Object} wiring options
	 *  @param [options.require] {Function} the platform loader function.  Wire will
	 *   attempt to automatically detect what loader to use (AMD, CommonJS, etc.), but
	 *   if you want to explicitly provide it, you can do so.  In some cases this can
	 *   be useful such as providing a local AMD require function so that module ids
	 *   *within the wiring spec* can be relative.
	 *  @return {Promise} a promise for the resulting wired context
	 */
	function wire(spec, options) {

		// If the root context is not yet wired, wire it first
		if (!rootContext) {
			rootContext = createContext(rootSpec, null, rootOptions);
		}

		// Use the rootContext to wire all new contexts.
		return rootContext.then(function (root) {
			return root.wire(spec, options);
		});
	}

	/**
	 * AMD Loader plugin API
	 * @param name {String} spec module id, or comma-separated list of module ids
	 * @param require {Function} loader-provided local require function
	 * @param done {Function} loader-provided callback to call when wiring
	 *  is completed. May have and error property that a function to call to
	 *  inform the AMD loader of an error.
	 *  See here:
	 *  https://groups.google.com/forum/?fromgroups#!topic/amd-implement/u0f161drdJA
	 */
	wire.load = function amdLoad(name, require, done /*, config */) {
		// If it's a string, try to split on ',' since it could be a comma-separated
		// list of spec module ids
		wire(name.split(','), { require: require })
			.then(done, done.error)
			.otherwise(crash);

		function crash(e) {
			// Throw uncatchable exception for loaders that don't support
			// AMD error handling.  This will propagate up to the host environment
			setTimeout(function() { throw e; }, 0);
		}
	};

	/**
	 * AMD Builder plugin API
	 */
	// pluginBuilder: './builder/rjs'
	wire['pluginBuilder'] = './builder/rjs';
	wire['cramPlugin'] = './builder/cram';

	return wire;

});
})(
	this['wire'] || {},
	typeof define == 'function' && define.amd
		? define : function(factory) { module.exports = factory(require); }
);

},{"./lib/context":49}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _q = require("q");

var _q2 = _interopRequireDefault(_q);

var _pubitAsPromised = require("pubit-as-promised");

var Step = (function () {
    function Step(name, fn) {
        _classCallCheck(this, Step);

        this.name = name;
        this.fn = fn;
        this._publish = (0, _pubitAsPromised.makeEmitter)(this, ["exec"]);
    }

    _createClass(Step, [{
        key: "exec",
        value: function exec(wf) {
            var _this = this;

            return (0, _q2["default"])(this.fn(this, wf)).then(function () {
                return _this._publish("exec", wf);
            });
        }
    }]);

    return Step;
})();

var Workflow = (function () {
    function Workflow(name) {
        _classCallCheck(this, Workflow);

        this._name = name;

        for (var _len = arguments.length, steps = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            steps[_key - 1] = arguments[_key];
        }

        this._steps = steps || [];
        this._publish = (0, _pubitAsPromised.makeEmitter)(this, ["step", "run"]);
    }

    _createClass(Workflow, [{
        key: "addStep",
        value: function addStep(step) {
            this._steps.push(step);
            return this;
        }
    }, {
        key: "run",
        value: function run() {
            var _this2 = this;

            var chainSteps = function chainSteps(prev, nextStep) {
                return prev.then(function () {
                    return _this2._onStep(prev, nextStep);
                });
            };

            return this._steps.reduce(chainSteps, _q2["default"].resolve()).then(function () {
                return _this2._publish.when("run");
            });
        }
    }, {
        key: "_onStep",
        value: function _onStep(prev, step) {
            var _this3 = this;

            var progress = this._progressOf(step);
            return prev.then(function () {
                return step.exec(_this3);
            }).then(function () {
                return _this3._publish.when("step", step, progress);
            });
        }
    }, {
        key: "_progressOf",
        value: function _progressOf(step) {
            return (this._steps.indexOf(step) + 1) / this._steps.length;
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }
    }], [{
        key: "Step",
        get: function get() {
            return Step;
        }
    }]);

    return Workflow;
})();

exports["default"] = Workflow;
module.exports = exports["default"];
},{"pubit-as-promised":36,"q":38}],95:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
