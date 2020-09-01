"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowRight = function ArrowRight(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 19 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#FAFAFA" : _ref$color,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? "1.5" : _ref$strokeWidth;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 12h13M12 5l7 7-7 7"
  }));
};

var _default = ArrowRight;
exports.default = _default;

//# sourceMappingURL=arrowRight.js.map