/* eslint-disable no-mixed-spaces-and-tabs */
import React,{FC} from "react";
import './Header.component.css';

const Header:React.FC<any> = ({logoTitle}) =>{
  return (
	<header>
		<h1>{logoTitle}</h1>
		<img src="/public/assets/header-image.jpg" alt="" />
	</header>
  )
}

export default Header;