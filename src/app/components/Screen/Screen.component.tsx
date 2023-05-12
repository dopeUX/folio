/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import './Screen.component.css';
import Header from "../Header/Header.component";
import Homepage from "../Homepage/Hompage.component";

const Screen:React.FC<any> = () =>{
	return (
		<div className="screen">
          <Header logoTitle='Dé'/>
		  <Homepage/>
		</div>
	)
}

export default Screen;