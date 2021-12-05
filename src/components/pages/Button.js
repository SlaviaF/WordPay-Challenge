import React from "react";
import "./Button.css";
//comment button component to be used throught the app
const Button = ({
  children,
  radius,
  color,
  backgroundColor,
  width,
  height,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  margin,

}) => {
  return (
    <div>
      <button className="btn-size"
        style={{
          borderRadius: radius,
          backgroundColor: backgroundColor,
          color: color,
          fontWeight: fontWeight,
          letterSpacing:letterSpacing,
          lineHeight:lineHeight,
          marginBottom:margin
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
