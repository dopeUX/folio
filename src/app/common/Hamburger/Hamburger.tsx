import React, { useRef } from "react";
import "./Hamburger.css";

const Hamburger: React.FC<any> = ({ onMenuClick }) => {
  const dotRef: any = useRef();
  // useEffect(() => {});
  return (
    <div
      className="hamburger"
      onClick={() => {
        onMenuClick();
      }}
      onMouseEnter={() => {
        dotRef.current.style.margin = "2rem auto 2rem auto";
      }}
      onMouseLeave={() => {
        dotRef.current.style.margin = "1rem auto 1rem auto";
      }}
    >
      <div className="hamburger-dot"></div>
      <div ref={dotRef} className="hamburger-dot middle-dot"></div>
      <div className="hamburger-dot"></div>
    </div>
  );
};

export default Hamburger;
