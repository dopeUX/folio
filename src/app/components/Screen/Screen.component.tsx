import React from "react";
import './Screen.component.css';
import Header from "../Header/Header.component";

const Screen:React.FC<any> = () =>{
	return (
		<div className="screen">
          <Header logoTitle='Dé'/>
		</div>
	)
}

export default Screen;