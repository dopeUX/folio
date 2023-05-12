/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import './AppScreen.component.css';
import Screen from "../Screen/Screen.component";
import Navigation from "../Navigation/Navigation.component";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AppScreen:React.FC<any> = () =>{
	const isNavScreenOn = useSelector((state:RootState)=>{
	  return state.appReducer.showNavScreen;
	});
	return (
		<div className="AppScreen">
			{
				isNavScreenOn && <Navigation isNavScreenOn = {isNavScreenOn}/>
			}
			<Screen/>
		</div>
	)
}

export default AppScreen;