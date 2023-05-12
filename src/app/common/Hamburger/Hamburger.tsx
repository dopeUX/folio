import React from "react";
import './Hamburger.css';

const Hamburger:React.FC<any> = ({onMenuClick}) =>{
  return (
	<div className="hamburger" onClick={()=>{
       onMenuClick();
	}}>
      <div className="hamburger-dot"></div>
      <div className="hamburger-dot"></div>
      <div className="hamburger-dot"></div>
	</div>
  )	
}

export default Hamburger;