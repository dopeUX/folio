/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import './Screen.component.css';
import Header from "../Header/Header.component";
import Homepage from "../Homepage/Hompage.component";
import Hamburger from "../../common/Hamburger/Hamburger";

const Screen:React.FC<any> = () =>{
	return (
		<div className="screen light-theme">
          <Header logoTitle='Dé'/>
		  <Homepage/>
		  
		  <a href="">
		  <div className="screen-nav-button">
            <Hamburger/>
		  </div>
		  </a>
		</div>
	)
}

export default Screen;