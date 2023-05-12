import React from "react";
import './AppScreen.component.css';
import Screen from "../Screen/Screen.component";
import Navigation from "../Navigation/Navigation.component";

const AppScreen:React.FC<any> = () =>{
	return (
		<div className="AppScreen">
			<Navigation/>
			<Screen/>
		</div>
	)
}

export default AppScreen;