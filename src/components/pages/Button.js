import React from "react";
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
      <button
        style={{
          borderRadius: radius,
          backgroundColor: backgroundColor,
          height: height,
          width: width,
          color: color,
          fontSize: fontSize,
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
