/* eslint-disable no-mixed-spaces-and-tabs */
import React,{FC, useEffect, useRef} from "react";
import './Header.component.css';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Header:React.FC<any> = ({logoTitle}) =>{
  const profileImageRef:any = useRef();
  const accentColor = useSelector((state:RootState)=>{
	return state.appReducer.accentColor;
  })
  useEffect(()=>{
    profileImageRef.current.style.border = `3px solid ${accentColor}`;
  },[])	
  return (
	<header>
		<h1>{logoTitle}</h1>
		<a href="">
		 <img ref={profileImageRef} className="header-image" src="/public/assets/header-image.jpg" alt="" />
		</a>
	</header>
  )
}

export default Header;