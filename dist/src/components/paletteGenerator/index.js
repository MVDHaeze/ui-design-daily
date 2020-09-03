"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

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

var PaletteGenerator = /*#__PURE__*/function (_React$Component) {
  _inherits(PaletteGenerator, _React$Component);

  var _super = _createSuper(PaletteGenerator);

  function PaletteGenerator(props) {
    var _this;

    _classCallCheck(this, PaletteGenerator);

    _this = _super.call(this, props);
    _this.state = {
      palette: [["#222831"], ["#393E46"], ["#00ADB5"], ["#EEEEEE"], ["#E82D17"]],
      showPopUp: false,
      colorPicked: ""
    };
    _this.generateColor = _this.generateColor.bind(_assertThisInitialized(_this));
    _this.showPopUp = _this.showPopUp.bind(_assertThisInitialized(_this));
    _this.handleCopy = _this.handleCopy.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PaletteGenerator, [{
    key: "generateColor",
    value: function generateColor() {
      var _this2 = this;

      var url = "http://colormind.io/api/";
      var data = {
        model: "default",
        input: ["N", "N", "N", "N", "N"]
      };
      var http = new XMLHttpRequest();

      http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
          var paletteRGB = JSON.parse(http.responseText).result;
          var paletteHEX = paletteRGB.map(function (key) {
            return _this2.fullColorHex(key[0], key[1], key[2]);
          });

          _this2.setState({
            palette: paletteHEX
          });
        }
      };

      http.open("POST", url, true);
      http.send(JSON.stringify(data));
    }
  }, {
    key: "rgbToHex",
    value: function rgbToHex(rgb) {
      var hex = Number(rgb).toString(16);

      if (hex.length < 2) {
        hex = "0" + hex;
      }

      return hex;
    }
  }, {
    key: "fullColorHex",
    value: function fullColorHex(r, g, b) {
      var red = this.rgbToHex(r).toUpperCase();
      var green = this.rgbToHex(g).toUpperCase();
      var blue = this.rgbToHex(b).toUpperCase();
      return "#" + red + green + blue;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      document.addEventListener("keydown", function (e) {
        if (e.keyCode === 32) {
          _this3.generateColor();
        } else if (e.keyCode === 67) {
          navigator.clipboard.writeText(_this3.state.palette);

          _this3.setState({
            colorPicked: "palette"
          });

          _this3.setState({
            showPopUp: true
          });

          setTimeout(function () {
            _this3.setState({
              showPopUp: false
            });
          }, 1500);
        }
      });
    }
  }, {
    key: "showPopUp",
    value: function showPopUp() {
      var _this4 = this;

      this.setState({
        showPopUp: true
      });
      setTimeout(function () {
        _this4.setState({
          showPopUp: false
        });
      }, 1500);
    }
  }, {
    key: "handleColor",
    value: function handleColor(selection) {
      this.setState({
        colorPicked: selection
      });
    }
  }, {
    key: "handleCopy",
    value: function handleCopy(color) {
      navigator.clipboard.writeText(color);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "col container space-evenly vh-100 b"
      }, this.state.showPopUp && /*#__PURE__*/_react.default.createElement(PopUp, {
        colorCopied: this.state.colorPicked
      }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
        className: "mt-30"
      }, " Color palette generator ")), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, this.state.palette.map(function (key) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "card col space-between",
          id: key,
          onClick: function onClick() {
            _this5.showPopUp();

            _this5.handleColor("".concat(key));

            _this5.handleCopy("".concat(key));
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "color-container",
          style: {
            backgroundColor: "".concat(key)
          }
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: ""
        }, /*#__PURE__*/_react.default.createElement("h4", {
          className: "capitalize mb-20"
        }, " ", key, " ")));
      }), " "), /*#__PURE__*/_react.default.createElement("button", {
        className: "primary-button ",
        onClick: this.generateColor
      }, /*#__PURE__*/_react.default.createElement("h5", null, "Generate palette")), /*#__PURE__*/_react.default.createElement("div", {
        className: ""
      }, /*#__PURE__*/_react.default.createElement("h6", null, " Or just press the \u201CSpacebar\u201D to generate new palettes. ")), /*#__PURE__*/_react.default.createElement("button", {
        className: "secondary-button"
      }, /*#__PURE__*/_react.default.createElement("h6", null, "Click to copy individual color \u2022 Press \u201CC\u201D to copy palette")));
    }
  }]);

  return PaletteGenerator;
}(_react.default.Component);

var _default = PaletteGenerator;
exports.default = _default;

var PopUp = /*#__PURE__*/function (_React$Component2) {
  _inherits(PopUp, _React$Component2);

  var _super2 = _createSuper(PopUp);

  function PopUp() {
    _classCallCheck(this, PopUp);

    return _super2.apply(this, arguments);
  }

  _createClass(PopUp, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("button", {
        className: "pop-up"
      }, "Color ", this.props.colorCopied, " copied to your clipboard", " ");
    }
  }]);

  return PopUp;
}(_react.default.Component);

//# sourceMappingURL=index.js.map