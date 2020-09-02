import React from "react";

function ArrowRight(
  size = 19,
  color = "#FAFAFA",
  strokeWidth = "1.5",
  fill = "none",
  strokeLinecap = "round",
  strokeLinejoin = "round"
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
    >
      <path d="M5 12h13M12 5l7 7-7 7" />
    </svg>
  );
}

export default ArrowRight;
