/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import './Navigation.component.css';
import Navbar from "../../common/Navbar/Navbar";
import navItems from "../../data/navbarItems";

const Navigation:React.FC<any> = ({isNavScreenOn}) =>{
	return (
		<div className="navigation-screen">
		  <div className="nav-screen-wrapper"
		    onMouseEnter={()=>{
		    //   console.log('entered')
		    }}
		    onMouseLeave={()=>{
			//   console.log('left')
		    }}>
           <div className="nav-items">
		     <Navbar navItems={navItems}/>
		   </div>
		   </div>
		</div>
	)
}

export default Navigation;