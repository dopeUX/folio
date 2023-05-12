import React from "react";
import './Hamburger.css';

const Hamburger:React.FC<any> = () =>{
  return (
	<div className="hamburger">
      <div className="hamburger-dot"></div>
      <div className="hamburger-dot"></div>
      <div className="hamburger-dot"></div>
	</div>
  )	
}

export default Hamburger;