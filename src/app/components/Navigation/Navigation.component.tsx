/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import React,{useRef, useEffect} from "react";
import './Navigation.component.css';
import Navbar from "../../common/Navbar/Navbar";
import navItems from "../../data/navbarItems";
import { useDispatch } from "react-redux";
import { updateNavScreenState, updateScreenZoomState } from "../../store/AppSlice";

const Navigation:React.FC<any> = ({isNavScreenOn}) =>{
	const navScreenRef:any = useRef();
	const dispatch = useDispatch();

	useEffect(()=>{
      if(isNavScreenOn){
		setTimeout(()=>{
			navScreenRef.current.style.opacity = 1
		},1)
	  }
	},[isNavScreenOn])
	return (
		<div ref={navScreenRef} className="navigation-screen">
		  <div className="nav-screen-wrapper"
		    onMouseEnter={()=>{
		    //   console.log('entered')
		    }}
		    onMouseLeave={()=>{
				navScreenRef.current.style.opacity = 0
			    dispatch(updateScreenZoomState('scale(1)'))
		         setTimeout(()=>{
                 dispatch(updateNavScreenState());
		     },600)
			//   console.log('left')
		    }}>
           <div className="nav-items">
		     <Navbar navItems={navItems}/>
		   </div>
		   </div>
		</div>
	)
}

export default Navigation;