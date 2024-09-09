"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _connectedReactRouter = require("connected-react-router");

var _appReducer = _interopRequireDefault(require("./appReducer"));

var _adminReducer = _interopRequireDefault(require("./adminReducer"));

var _userReducer = _interopRequireDefault(require("./userReducer"));

var _autoMergeLevel = _interopRequireDefault(require("redux-persist/lib/stateReconciler/autoMergeLevel2"));

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _reduxPersist = require("redux-persist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var persistCommonConfig = {
  storage: _storage["default"],
  stateReconciler: _autoMergeLevel["default"]
};

var userPersistConfig = _objectSpread({}, persistCommonConfig, {
  key: 'user',
  whitelist: ['isLoggedIn', 'userInfo']
});

var appPersistConfig = _objectSpread({}, persistCommonConfig, {
  key: 'app',
  whitelist: ['lanuage']
});

var _default = function _default(history) {
  return (0, _redux.combineReducers)({
    router: (0, _connectedReactRouter.connectRouter)(history),
    user: (0, _reduxPersist.persistReducer)(userPersistConfig, _userReducer["default"]),
    app: (0, _reduxPersist.persistReducer)(appPersistConfig, _appReducer["default"])
  });
};

exports["default"] = _default;