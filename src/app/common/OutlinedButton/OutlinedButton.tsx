/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useRef } from "react";
import "./OutlinedButton.css";

const OutlinedButton: React.FC<any> = ({
  title = "click",
  classN,
  color,
  onButtonClick,
  children,
}) => {
  const buttonRef: any = useRef();
  useEffect(() => {
    buttonRef.current.style.border = `2px solid ${color}`;
    buttonRef.current.style.color = color;
  }, [color]);
  return (
    <button
      ref={buttonRef}
      className={`outlined-btn ${classN}`}
      onClick={() => {
        onButtonClick();
      }}
    >
      {title}
      {children}
    </button>
  );
};

export default OutlinedButton;
