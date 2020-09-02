"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ArrowRight() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 19;
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#FAFAFA";
  var strokeWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "1.5";
  var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "none";
  var strokeLinecap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "round";
  var strokeLinejoin = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "round";
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLinecap,
    strokeLinejoin: strokeLinejoin
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 12h13M12 5l7 7-7 7"
  }));
}

var _default = ArrowRight;
exports.default = _default;

//# sourceMappingURL=arrowRight.js.map