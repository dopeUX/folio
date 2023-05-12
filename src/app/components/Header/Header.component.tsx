/* eslint-disable no-mixed-spaces-and-tabs */
import React,{FC} from "react";
import './Header.component.css';

const Header:React.FC<any> = ({logoTitle}) =>{
  return (
	<header>
		<h1>{logoTitle}</h1>
		<a href="">
		 <img className="header-image" src="/public/assets/header-image.jpg" alt="" />
		</a>
	</header>
  )
}

export default Header;