/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import './Screen.component.css';
import Header from "../Header/Header.component";
import Homepage from "../Homepage/Hompage.component";
import Hamburger from "../../common/Hamburger/Hamburger";
import { useDispatch } from "react-redux";
import { updateNavScreenState } from "../../store/AppSlice";

const Screen:React.FC<any> = () =>{
	const dispatch = useDispatch();
	return (
		<div className="screen light-theme">
          <Header logoTitle='Dé'/>
		  <Homepage/>
		  
		  <a href="" onClick={(e)=>{
			e.preventDefault()
		  }}>
		   <div className="screen-nav-button">
            <Hamburger onMenuClick={()=>{
               dispatch(updateNavScreenState())
			}}/>
		   </div>
		  </a>
		</div>
	)
}

export default Screen;