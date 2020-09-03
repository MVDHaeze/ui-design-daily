"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowRight = function ArrowRight(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#000" : _ref$color,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? "1.5" : _ref$strokeWidth,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? "none" : _ref$fill,
      _ref$strokeLinecap = _ref.strokeLinecap,
      strokeLinecap = _ref$strokeLinecap === void 0 ? "round" : _ref$strokeLinecap,
      _ref$strokeLinejoin = _ref.strokeLinejoin,
      strokeLinejoin = _ref$strokeLinejoin === void 0 ? "round" : _ref$strokeLinejoin;
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
};

var _default = ArrowRight;
exports.default = _default;

//# sourceMappingURL=arrowRight.js.map