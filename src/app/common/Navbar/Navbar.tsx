/* eslint-disable no-mixed-spaces-and-tabs */
import React,{useEffect, useRef} from "react";
import './Navbar.css';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
interface NavbarProps {
  navItems:Array<string>
}
const Navbar:React.FC<NavbarProps> = ({navItems}) =>{
	const isAccentColor = useSelector((state:RootState)=>{
		return state.appReducer.isAccentColor;
	});
	const accentColor = useSelector((state:RootState)=>{
		return state.appReducer.accentColor;
	})
	const itemRef:any = useRef();
	useEffect(()=>{
      if(!isAccentColor){
         itemRef.current.style.color = accentColor;  
	  }else{
		itemRef.current.style.color = 'white';
	  }
	},[])
	return (
		<ul ref={itemRef} className="navbar-items">
		{
			navItems.map((item:any, index:number)=>{
              return (
				<li>
					<a className="nav-item-a" href="">{item}</a>
				</li>
			  )
			})
		}	
		</ul>
	);
}

export default Navbar;