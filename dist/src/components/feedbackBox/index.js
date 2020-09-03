"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

var _faces = require("../../images/pictures/faces");

var _mvdhaezeIconSvg = _interopRequireDefault(require("@bit/mvdhaeze.icon-svg.closing-x"));

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

var FeedbackBox = /*#__PURE__*/function (_React$Component) {
  _inherits(FeedbackBox, _React$Component);

  var _super = _createSuper(FeedbackBox);

  function FeedbackBox(props) {
    var _this;

    _classCallCheck(this, FeedbackBox);

    _this = _super.call(this, props);
    _this.state = {
      feedbackSatisfaction: "",
      feedbackComment: ""
    };
    _this.handleComment = _this.handleComment.bind(_assertThisInitialized(_this));
    _this.handleSatisfaction = _this.handleSatisfaction.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FeedbackBox, [{
    key: "handleComment",
    value: function handleComment(event) {
      this.setState({
        feedbackComment: event.target.value
      });
    }
  }, {
    key: "handleSatisfaction",
    value: function handleSatisfaction(event) {
      this.setState({
        feedbackSatisfaction: event.currentTarget.getAttribute("data-satisfaction")
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {// Should normaly log the information in DB on submit
    }
  }, {
    key: "handleSkip",
    value: function handleSkip() {// Should normaly close the pop up
    }
  }, {
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
        className: "left-aligned"
      }, /*#__PURE__*/_react.default.createElement(_mvdhaezeIconSvg.default, {
        color: "#A2A8BB",
        strokeWidth: "2"
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "col text-centered centered"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "title row text-centered w-80 centered"
      }, /*#__PURE__*/_react.default.createElement("h4", {
        className: "darkblue"
      }, "How likely are you to answer to this question?"))), /*#__PURE__*/_react.default.createElement("div", {
        id: "views-container",
        className: "col stats-container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row space-around"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "low" === this.state.feedbackSatisfaction ? "face-box-active" : "face-box-inactive",
        onClick: this.handleSatisfaction,
        "data-satisfaction": "low"
      }, /*#__PURE__*/_react.default.createElement(_faces.SadFace, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: "medium" === this.state.feedbackSatisfaction ? "face-box-active" : "face-box-inactive",
        onClick: this.handleSatisfaction,
        "data-satisfaction": "medium"
      }, /*#__PURE__*/_react.default.createElement(_faces.ThinkingFace, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: "high" === this.state.feedbackSatisfaction ? "face-box-active" : "face-box-inactive",
        onClick: this.handleSatisfaction,
        "data-satisfaction": "high"
      }, /*#__PURE__*/_react.default.createElement(_faces.HappyFace, null)))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
        for: "feedbackForm"
      }, /*#__PURE__*/_react.default.createElement("h5", {
        className: "darkblue"
      }, "Tell us how we can improve")), /*#__PURE__*/_react.default.createElement("textarea", {
        id: "feedbackForm",
        name: "feedbackForm",
        rows: "3",
        placeholder: "Write your message here",
        onChange: this.handleComment,
        value: this.state.feedbackComment
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "row space-around"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "secondary-button"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row "
      }, /*#__PURE__*/_react.default.createElement("h4", {
        className: "text-centered"
      }, " Skip "))), /*#__PURE__*/_react.default.createElement("button", {
        className: "primary-button"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row "
      }, /*#__PURE__*/_react.default.createElement("h4", {
        className: "text-centered"
      }, " Submit ")))))));
    }
  }]);

  return FeedbackBox;
}(_react.default.Component);

var _default = FeedbackBox;
exports.default = _default;

//# sourceMappingURL=index.js.map