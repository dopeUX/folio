/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import './Navbar.css';
interface NavbarProps {
  navItems:Array<string>
}
const Navbar:React.FC<NavbarProps> = ({navItems}) =>{
	return (
		<ul className="navbar-items">
		{
			navItems.map((item:any, index:number)=>{
              return (
				<li>
					<a href="">{item}</a>
				</li>
			  )
			})
		}	
		</ul>
	);
}

export default Navbar;