"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./socialStatsCard.css");

var _arrowRight = _interopRequireDefault(require("../../images/icons/arrowRight"));

var _eye = _interopRequireDefault(require("../../images/icons/eye"));

var _messageSquare = _interopRequireDefault(require("../../images/icons/messageSquare"));

var _thumbsUp = _interopRequireDefault(require("../../images/icons/thumbsUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SocialStatsCard = /*#__PURE__*/function (_React$Component) {
  _inherits(SocialStatsCard, _React$Component);

  var _super = _createSuper(SocialStatsCard);

  function SocialStatsCard(props) {
    var _this;

    _classCallCheck(this, SocialStatsCard);

    _this = _super.call(this, props);
    _this.state = {
      postViews: "2,318,589",
      postLikes: "29,272",
      postComments: "904"
    };
    return _this;
  }

  _createClass(SocialStatsCard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "card",
        id: "card"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "container col",
        id: "card-container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col box space-around"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "title row"
      }, /*#__PURE__*/_react.default.createElement("h1", null, "All time received")), /*#__PURE__*/_react.default.createElement("div", {
        id: "views-container",
        className: "col stats-container"
      }, /*#__PURE__*/_react.default.createElement("h2", null, this.state.postViews), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "icon"
      }, /*#__PURE__*/_react.default.createElement(_eye.default, {
        size: "24px",
        color: "#000",
        strokeWidth: "2"
      })), /*#__PURE__*/_react.default.createElement("h4", null, "Post views "))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "row space-around mb-50"
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: "likes-container",
        className: "col stats-container"
      }, /*#__PURE__*/_react.default.createElement("h3", null, this.state.postLikes), /*#__PURE__*/_react.default.createElement("div", {
        className: "row centered"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "icon"
      }, /*#__PURE__*/_react.default.createElement(_thumbsUp.default, {
        size: "24px",
        color: "#000",
        strokeWidth: "2"
      })), /*#__PURE__*/_react.default.createElement("h4", null, "Likes "))), /*#__PURE__*/_react.default.createElement("div", {
        id: "comments-container",
        className: "col stats-container"
      }, /*#__PURE__*/_react.default.createElement("h3", null, this.state.postComments), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "icon"
      }, /*#__PURE__*/_react.default.createElement(_messageSquare.default, {
        size: "24px",
        color: "#000",
        strokeWidth: "2"
      })), /*#__PURE__*/_react.default.createElement("h4", null, "Comments")))))), /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("h4", null, " View more details "), /*#__PURE__*/_react.default.createElement("div", {
        className: "icon"
      }, /*#__PURE__*/_react.default.createElement(_arrowRight.default, {
        size: "24px",
        color: "#000",
        strokeWidth: "2"
      }))))));
    }
  }]);

  return SocialStatsCard;
}(_react.default.Component);

var _default = SocialStatsCard;
exports.default = _default;

//# sourceMappingURL=socialStatsCard.js.map