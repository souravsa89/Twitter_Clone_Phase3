import React from "react";
// import style from "../styled.module.css";

function CustomButton({ type, buttonText, icon, btnNext, customCss, pitcher }) {
  return (
    <button type={type} className={customCss} onClick={btnNext}>
      {icon}
      {buttonText}
      {pitcher}
    </button>
  );
}

export default CustomButton;
